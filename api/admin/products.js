import { handleError, handleOptions, readJson, sendJson, withServerPostgres } from "../_helpers.js";
import { requireAdmin } from "../_admin-auth.js";
import { listAdminProducts, saveAdminProduct } from "../_product-admin.js";

async function listProducts(req, res) {
  const slug = new URL(req.url || "/api/admin/products", "https://admin.local").searchParams.get("slug") || undefined;
  const products = await withServerPostgres((db) => listAdminProducts(db, { slug }));
  const totalStock = products.reduce((sum, product) => sum + product.stockQuantity, 0);
  const lowStock = products.filter((product) => product.stockQuantity > 0 && product.stockQuantity < 5);
  const outOfStock = products.filter((product) => product.stockQuantity <= 0 || product.stock === "out");
  sendJson(res, 200, {
    products,
    summary: {
      totalProducts: products.length,
      totalStock,
      lowStockCount: lowStock.length,
      outOfStockCount: outOfStock.length,
      lowStock,
    },
  });
}

async function saveProduct(req, res) {
  const payload = await readJson(req);
  const product = await withServerPostgres((db) => saveAdminProduct(db, payload));
  sendJson(res, 200, { product });
}

async function deleteProduct(req, res) {
  const slug = new URL(req.url || "/api/admin/products", "https://admin.local").searchParams.get("slug");
  if (!slug) return sendJson(res, 400, { error: "slug is required" });

  await withServerPostgres(async (db) => {
    await db.query("DELETE FROM products WHERE slug = $1", [slug]);
    await db.query(
      `INSERT INTO admin_activity (actor, action, target_type, target_id)
       VALUES ($1, $2, $3, $4)`,
      [process.env.DASHBOARD_USERNAME || "owner", "delete_product", "product", slug],
    );
  });
  sendJson(res, 200, { ok: true });
}

export default async function handler(req, res) {
  if (handleOptions(req, res)) return;
  if (!requireAdmin(req, res)) return;

  try {
    if (req.method === "GET") return await listProducts(req, res);
    if (req.method === "POST") return await saveProduct(req, res);
    if (req.method === "DELETE") return await deleteProduct(req, res);
    sendJson(res, 405, { error: "Method not allowed" });
  } catch (error) {
    handleError(res, error);
  }
}
