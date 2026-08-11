import { randomUUID } from "node:crypto";
import { withPostgres } from "../../backend/postgres.mjs";
import { handleError, handleOptions, readJson, sendJson } from "../_helpers.js";

function getDeviceType(userAgent = "") {
  const value = userAgent.toLowerCase();
  if (/tablet|ipad/.test(value)) return "Tablet";
  if (/mobile|iphone|android/.test(value)) return "Mobile";
  if (value) return "Desktop";
  return "Unknown";
}

export default async function handler(req, res) {
  if (handleOptions(req, res)) return;
  if (req.method !== "POST") return sendJson(res, 405, { error: "Method not allowed" });

  try {
    const payload = await readJson(req);
    const eventName = String(payload.eventName || "").trim();
    if (!eventName) return sendJson(res, 400, { error: "eventName is required" });

    const event = await withPostgres(async (db) => {
      const sessionId = payload.sessionId || randomUUID();
      const country = payload.country || req.headers["x-vercel-ip-country"] || null;
      const region = payload.region || req.headers["x-vercel-ip-country-region"] || null;
      const deviceType = payload.deviceType || getDeviceType(req.headers["user-agent"]);
      const { rows } = await db.query(
        `INSERT INTO analytics_events
          (session_id, event_name, page_path, device_type, country, region, metadata_json)
         VALUES ($1, $2, $3, $4, $5, $6, $7)
         RETURNING id`,
        [
          sessionId,
          eventName,
          payload.pagePath || null,
          deviceType,
          country,
          region,
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
