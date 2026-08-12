import { centsFromPrice } from "./_helpers.js";

export async function ensureProductAdminSchema(db) {
  await db.query("ALTER TABLE products ADD COLUMN IF NOT EXISTS stock_quantity INTEGER NOT NULL DEFAULT 0");
  await db.query("ALTER TABLE product_variants ADD COLUMN IF NOT EXISTS stock_quantity INTEGER NOT NULL DEFAULT 0");
  await db.query("UPDATE products SET stock_quantity = 10 WHERE stock_status = 'in' AND stock_quantity = 0");
  await db.query("UPDATE product_variants SET stock_quantity = 10 WHERE stock_status = 'in' AND stock_quantity = 0");
}

export function formatMoney(cents = 0, currency = "SGD") {
  return new Intl.NumberFormat("en-SG", {
    currency,
    style: "currency",
  }).format(Number(cents || 0) / 100);
}

function normalizeJsonArray(value) {
  if (Array.isArray(value)) return value;
  if (!value) return [];
  try {
    const parsed = typeof value === "string" ? JSON.parse(value) : value;
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function mapProductRow(row) {
  const galleryImages = normalizeJsonArray(row.gallery_images).filter(Boolean);
  const options = normalizeJsonArray(row.options).map((option) => ({
    name: option.name,
    values: normalizeJsonArray(option.values ?? option.values_json),
  }));

  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    price: formatMoney(row.price_cents, row.currency),
    priceCents: row.price_cents,
    comparePrice: row.compare_price_cents ? formatMoney(row.compare_price_cents, row.currency) : "",
    comparePriceCents: row.compare_price_cents,
    currency: row.currency,
    image: row.main_image_url || "",
    main_image_url: row.main_image_url || "",
    galleryImages,
    gallery_images: galleryImages,
    hoverImage: galleryImages[1] || galleryImages[0] || row.main_image_url || "",
    productHref: `/product-page/${row.slug}`,
    stock: row.stock_status === "out" || Number(row.stock_quantity || 0) <= 0 ? "out" : "in",
    stockStatus: row.stock_status,
    stockQuantity: Number(row.stock_quantity || 0),
    stock_quantity: Number(row.stock_quantity || 0),
    ribbon: row.ribbon || "",
    sale: Boolean(row.ribbon),
    quantity: true,
    isVisible: Boolean(row.is_visible),
    is_visible: Boolean(row.is_visible),
    seoTitle: row.seo_title || "",
    seoDescription: row.seo_description || "",
    descriptionHtml: row.description_html || "",
    options,
    updatedAt: row.updated_at,
  };
}

export async function listAdminProducts(db, { slug } = {}) {
  await ensureProductAdminSchema(db);
  const params = [];
  const where = slug ? "WHERE p.slug = $1" : "";
  if (slug) params.push(slug);
  const { rows } = await db.query(
    `SELECT p.id, p.slug, p.title, p.price_cents, p.compare_price_cents,
            p.currency, p.main_image_url, p.ribbon, p.stock_status,
            p.stock_quantity, p.is_visible, p.seo_title, p.seo_description,
            p.description_html, p.updated_at,
            COALESCE(
              (SELECT jsonb_agg(pi.image_url ORDER BY pi.sort_order, pi.id)
               FROM product_images pi
               WHERE pi.product_id = p.id),
              '[]'::jsonb
            ) AS gallery_images,
            COALESCE(
              (SELECT jsonb_agg(jsonb_build_object('name', po.name, 'values', po.values_json) ORDER BY po.sort_order, po.id)
               FROM product_options po
               WHERE po.product_id = p.id),
              '[]'::jsonb
            ) AS options
     FROM products p
     ${where}
     ORDER BY p.updated_at DESC
     LIMIT 300`,
    params,
  );
  return rows.map(mapProductRow);
}

function normalizeOptions(options) {
  if (!Array.isArray(options)) return [];
  return options
    .map((option) => ({
      name: String(option.name || "").trim(),
      values: Array.isArray(option.values)
        ? option.values.map((value) => String(value).trim()).filter(Boolean)
        : [],
    }))
    .filter((option) => option.name);
}

function buildVariants(options) {
  const usableOptions = options.filter((option) => option.values.length > 0);
  if (!usableOptions.length) return [];

  return usableOptions.reduce((variants, option) => {
    if (!variants.length) {
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

export async function saveAdminProduct(db, payload) {
  await ensureProductAdminSchema(db);

  const title = String(payload.title || "").trim();
  const slug = String(payload.slug || "").trim();
  if (!title || !slug) {
    const error = new Error("title and slug are required");
    error.statusCode = 400;
    throw error;
  }

  const stockQuantity = Math.max(0, Math.floor(Number(payload.stockQuantity ?? payload.stock_quantity ?? 0)));
  const galleryImages = Array.from(
    new Set(
      [payload.image, ...(Array.isArray(payload.galleryImages) ? payload.galleryImages : [])]
        .map((image) => String(image || "").trim())
        .filter(Boolean),
    ),
  );
  const options = normalizeOptions(payload.options);

  const product = await db.query(
    `INSERT INTO products
      (slug, title, price_cents, currency, compare_price_cents, main_image_url,
       ribbon, stock_status, stock_quantity, seo_title, seo_description, description_html, is_visible)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
     ON CONFLICT (slug) DO UPDATE SET
       title = EXCLUDED.title,
       price_cents = EXCLUDED.price_cents,
       currency = EXCLUDED.currency,
       compare_price_cents = EXCLUDED.compare_price_cents,
       main_image_url = EXCLUDED.main_image_url,
       ribbon = EXCLUDED.ribbon,
       stock_status = EXCLUDED.stock_status,
       stock_quantity = EXCLUDED.stock_quantity,
       seo_title = EXCLUDED.seo_title,
       seo_description = EXCLUDED.seo_description,
       description_html = EXCLUDED.description_html,
       is_visible = EXCLUDED.is_visible,
       updated_at = NOW()
     RETURNING id, slug, title`,
    [
      slug,
      title,
      centsFromPrice(payload.price),
      payload.currency || "SGD",
      payload.comparePrice ? centsFromPrice(payload.comparePrice) : null,
      payload.image || galleryImages[0] || null,
      payload.ribbon || null,
      stockQuantity <= 0 || payload.stock === "out" ? "out" : "in",
      stockQuantity,
      payload.seoTitle || `${title} | Datacom Enterprise Pte Ltd`,
      payload.seoDescription || `Buy or enquire about ${title} from Datacom Enterprise Pte Ltd Singapore.`,
      payload.descriptionHtml || null,
      payload.isVisible === false ? false : true,
    ],
  );
  const productId = product.rows[0].id;

  await db.query("DELETE FROM product_images WHERE product_id = $1", [productId]);
  for (const [index, image] of galleryImages.entries()) {
    await db.query(
      `INSERT INTO product_images (product_id, image_url, alt_text, sort_order)
       VALUES ($1, $2, $3, $4)`,
      [productId, image, title, index],
    );
  }

  await db.query("DELETE FROM product_options WHERE product_id = $1", [productId]);
  for (const [index, option] of options.entries()) {
    await db.query(
      `INSERT INTO product_options (product_id, name, values_json, sort_order)
       VALUES ($1, $2, $3::jsonb, $4)`,
      [productId, option.name, JSON.stringify(option.values), index],
    );
  }

  await db.query("DELETE FROM product_variants WHERE product_id = $1", [productId]);
  for (const variant of buildVariants(options)) {
    await db.query(
      `INSERT INTO product_variants
        (product_id, variant_key, option_values_json, price_cents, stock_status, stock_quantity)
       VALUES ($1, $2, $3::jsonb, $4, $5, $6)`,
      [
        productId,
        variant.key,
        JSON.stringify(variant.values),
        centsFromPrice(payload.price),
        stockQuantity <= 0 || payload.stock === "out" ? "out" : "in",
        stockQuantity,
      ],
    );
  }

  const [saved] = await listAdminProducts(db, { slug });
  return saved;
}
