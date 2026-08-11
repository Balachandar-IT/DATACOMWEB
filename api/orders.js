import { withPostgres } from "../backend/postgres.mjs";
import { handleError, handleOptions, sendJson } from "./_helpers.js";

export default async function handler(req, res) {
  if (handleOptions(req, res)) return;
  if (req.method !== "GET") return sendJson(res, 405, { error: "Method not allowed" });

  try {
    const orders = await withPostgres(async (db) => {
      const { rows } = await db.query(
        `SELECT id, order_number, customer_name, customer_email, status,
                payment_status, total_cents, currency, created_at
         FROM orders
         ORDER BY created_at DESC
         LIMIT 100`,
      );
      return rows;
    });
    sendJson(res, 200, { orders });
  } catch (error) {
    handleError(res, error);
  }
}
