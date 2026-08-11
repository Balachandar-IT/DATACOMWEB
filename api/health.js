import { withPostgres } from "../backend/postgres.mjs";
import { handleError, handleOptions, sendJson } from "./_helpers.js";

export default async function handler(req, res) {
  if (handleOptions(req, res)) return;
  if (req.method !== "GET") return sendJson(res, 405, { error: "Method not allowed" });

  try {
    const result = await withPostgres(async (db) => {
      const { rows } = await db.query("SELECT COUNT(*)::int AS count FROM products");
      return rows[0];
    });
    sendJson(res, 200, { ok: true, database: "postgresql", products: result.count });
  } catch (error) {
    handleError(res, error);
  }
}
