import { randomUUID } from "node:crypto";
import { withPostgres } from "../../backend/postgres.mjs";
import { handleError, handleOptions, readJson, sendJson } from "../_helpers.js";

export default async function handler(req, res) {
  if (handleOptions(req, res)) return;
  if (req.method !== "POST") return sendJson(res, 405, { error: "Method not allowed" });

  try {
    const payload = await readJson(req);
    const eventName = String(payload.eventName || "").trim();
    if (!eventName) return sendJson(res, 400, { error: "eventName is required" });

    const event = await withPostgres(async (db) => {
      const sessionId = payload.sessionId || randomUUID();
      const { rows } = await db.query(
        `INSERT INTO analytics_events
          (session_id, event_name, page_path, device_type, country, region, metadata_json)
         VALUES ($1, $2, $3, $4, $5, $6, $7)
         RETURNING id`,
        [
          sessionId,
          eventName,
          payload.pagePath || null,
          payload.deviceType || null,
          payload.country || null,
          payload.region || null,
          payload.metadata ? JSON.stringify(payload.metadata) : null,
        ],
      );
      return { id: rows[0].id, sessionId };
    });
    sendJson(res, 201, { event });
  } catch (error) {
    handleError(res, error);
  }
}
