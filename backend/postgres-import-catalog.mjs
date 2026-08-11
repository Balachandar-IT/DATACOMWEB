import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import vm from "node:vm";
import { withPostgres } from "./postgres.mjs";

function centsFromPrice(value) {
  const amount = String(value || "0").replace(/[^\d.]/g, "");
  return Math.round(Number(amount || 0) * 100);
}

function extractCatalog(source) {
  const marker = "export const shopCatalogPages = ";
  const start = source.indexOf(marker);
  const end = source.indexOf("] satisfies ShopCatalogProduct[][];", start);
  if (start === -1 || end === -1) {
    throw new Error("Could not find shopCatalogPages in app/shop-catalog.ts");
  }

  const expression = source.slice(start + marker.length, end + 1);
  const pages = vm.runInNewContext(`(${expression})`);
  return pages.flat();
}

function buildVariants(options) {
  const usableOptions = options.filter((option) => option.values.length > 0);
  if (usableOptions.length === 0) return [];

  return usableOptions.reduce((variants, option) => {
    if (variants.length === 0) {
      return option.values.map((value) => ({
        key: value,
        values: { [option.name]: value },
      }));
    }

    return variants.flatMap((variant) =>
      option.values.map((value) => ({
        key: `${variant.key} / ${value}`,
        values: { ...variant.values, [option.name]: value },
      })),
    );
  }, []);
}

async function main() {
  const catalogPath = resolve(process.cwd(), "app", "shop-catalog.ts");
  const source = await readFile(catalogPath, "utf8");
  const products = extractCatalog(source);

  await withPostgres(async (db) => {
    for (const product of products) {
      const { rows } = await db.query(
        `INSERT INTO products
          (slug, title, price_cents, compare_price_cents, currency, main_image_url, ribbon, stock_status, seo_title, seo_description)
         VALUES ($1, $2, $3, $4, 'SGD', $5, $6, $7, $8, $9)
         ON CONFLICT (slug) DO UPDATE SET
          title = EXCLUDED.title,
          price_cents = EXCLUDED.price_cents,
          compare_price_cents = EXCLUDED.compare_price_cents,
          main_image_url = EXCLUDED.main_image_url,
          ribbon = EXCLUDED.ribbon,
          stock_status = EXCLUDED.stock_status,
          seo_title = EXCLUDED.seo_title,
          seo_description = EXCLUDED.seo_description,
          updated_at = NOW()
         RETURNING id`,
        [
          product.slug,
          product.title,
          centsFromPrice(product.price),
          product.comparePrice ? centsFromPrice(product.comparePrice) : null,
          product.image || null,
          product.ribbon || null,
          product.stock === "out" ? "out" : "in",
          `${product.title} | Datacom Enterprise Pte Ltd`,
          `Buy or enquire about ${product.title} from Datacom Enterprise Pte Ltd Singapore.`,
        ],
      );

      const productId = rows[0].id;

      await db.query("DELETE FROM product_images WHERE product_id = $1", [productId]);
      for (const [index, image] of product.galleryImages.entries()) {
        await db.query(
          `INSERT INTO product_images (product_id, image_url, alt_text, sort_order)
           VALUES ($1, $2, $3, $4)`,
          [productId, image, product.title, index],
        );
      }

      await db.query("DELETE FROM product_options WHERE product_id = $1", [productId]);
      for (const [index, option] of product.options.entries()) {
        await db.query(
          `INSERT INTO product_options (product_id, name, values_json, sort_order)
           VALUES ($1, $2, $3::jsonb, $4)`,
          [productId, option.name, JSON.stringify(option.values), index],
        );
      }

      await db.query("DELETE FROM product_variants WHERE product_id = $1", [productId]);
      for (const variant of buildVariants(product.options)) {
        await db.query(
          `INSERT INTO product_variants (product_id, variant_key, option_values_json, price_cents, stock_status)
           VALUES ($1, $2, $3::jsonb, $4, $5)`,
          [
            productId,
            variant.key,
            JSON.stringify(variant.values),
            centsFromPrice(product.price),
            product.stock === "out" ? "out" : "in",
          ],
        );
      }
    }
  });

  console.log(`Imported ${products.length} products into PostgreSQL.`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
