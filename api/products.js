import { centsFromPrice, handleError, handleOptions, readJson, sendJson, withServerPostgres } from "./_helpers.js";

async function listProducts(res) {
  const products = await withServerPostgres(async (db) => {
    const { rows } = await db.query(
      `SELECT id, slug, title, price_cents, currency, compare_price_cents,
              main_image_url, ribbon, stock_status, is_visible, seo_title,
              seo_description, updated_at
       FROM products
       ORDER BY updated_at DESC
       LIMIT 200`,
    );
    return rows;
  });
  sendJson(res, 200, { products });
}

async function createProduct(req, res) {
  const payload = await readJson(req);
  const title = String(payload.title || "").trim();
  const slug = String(payload.slug || "").trim();
  if (!title || !slug) return sendJson(res, 400, { error: "title and slug are required" });

  const product = await withServerPostgres(async (db) => {
    const { rows } = await db.query(
      `INSERT INTO products
        (slug, title, price_cents, currency, compare_price_cents, main_image_url,
         ribbon, stock_status, seo_title, seo_description, description_html)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
       ON CONFLICT (slug) DO UPDATE SET
         title = EXCLUDED.title,
         price_cents = EXCLUDED.price_cents,
         currency = EXCLUDED.currency,
         compare_price_cents = EXCLUDED.compare_price_cents,
         main_image_url = EXCLUDED.main_image_url,
         ribbon = EXCLUDED.ribbon,
         stock_status = EXCLUDED.stock_status,
         seo_title = EXCLUDED.seo_title,
         seo_description = EXCLUDED.seo_description,
         description_html = EXCLUDED.description_html,
         updated_at = NOW()
       RETURNING id, slug, title`,
      [
        slug,
        title,
        centsFromPrice(payload.price),
        payload.currency || "SGD",
        payload.comparePrice ? centsFromPrice(payload.comparePrice) : null,
        payload.image || null,
        payload.ribbon || null,
        payload.stock === "out" ? "out" : "in",
        payload.seoTitle || null,
        payload.seoDescription || null,
        payload.descriptionHtml || null,
      ],
    );
    return rows[0];
  });
  sendJson(res, 201, { product });
}

export default async function handler(req, res) {
  if (handleOptions(req, res)) return;

  try {
    if (req.method === "GET") return await listProducts(res);
    if (req.method === "POST") return await createProduct(req, res);
    sendJson(res, 405, { error: "Method not allowed" });
  } catch (error) {
    handleError(res, error);
  }
}
