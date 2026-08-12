import { centsFromPrice, handleError, handleOptions, readJson, sendJson, withServerPostgres } from "./_helpers.js";
import { listAdminProducts, saveAdminProduct } from "./_product-admin.js";

async function listProducts(res) {
  const products = await withServerPostgres((db) => listAdminProducts(db));
  sendJson(res, 200, { products });
}

async function createProduct(req, res) {
  const payload = await readJson(req);
  const title = String(payload.title || "").trim();
  const slug = String(payload.slug || "").trim();
  if (!title || !slug) return sendJson(res, 400, { error: "title and slug are required" });

  const product = await withServerPostgres((db) =>
    saveAdminProduct(db, {
      ...payload,
      price: payload.price || String(centsFromPrice(payload.price) / 100),
      stockQuantity: payload.stockQuantity ?? (payload.stock === "out" ? 0 : 10),
    }),
  );
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
