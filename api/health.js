import { handleError, handleOptions, sendJson, withServerPostgres } from "./_helpers.js";

export default async function handler(req, res) {
  if (handleOptions(req, res)) return;
  if (req.method !== "GET") return sendJson(res, 405, { error: "Method not allowed" });

  try {
    const result = await withServerPostgres(async (db) => {
      const { rows } = await db.query("SELECT COUNT(*)::int AS count FROM products");
      return rows[0];
    });
    sendJson(res, 200, { ok: true, database: "postgresql", products: result.count });
  } catch (error) {
    handleError(res, error);
  }
}
