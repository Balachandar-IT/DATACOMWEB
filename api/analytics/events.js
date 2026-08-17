import { randomUUID } from "node:crypto";
import { handleError, handleOptions, readJson, sendJson, withServerPostgres } from "../_helpers.js";

function getDeviceType(userAgent = "") {
  const value = userAgent.toLowerCase();
  if (/tablet|ipad/.test(value)) return "Tablet";
  if (/mobile|iphone|android/.test(value)) return "Mobile";
  if (value) return "Desktop";
  return "Unknown";
}

function firstHeader(value) {
  return Array.isArray(value) ? value[0] : value;
}

function decodeGeoValue(value) {
  const raw = firstHeader(value);
  if (!raw) return null;
  try {
    return decodeURIComponent(String(raw).replace(/\+/g, " "));
  } catch {
    return String(raw);
  }
}

export default async function handler(req, res) {
  if (handleOptions(req, res)) return;
  if (req.method !== "POST") return sendJson(res, 405, { error: "Method not allowed" });

  try {
    const payload = await readJson(req);
    const eventName = String(payload.eventName || "").trim();
    if (!eventName) return sendJson(res, 400, { error: "eventName is required" });

    const event = await withServerPostgres(async (db) => {
      const sessionId = payload.sessionId || randomUUID();
      const country = payload.country || decodeGeoValue(req.headers["x-vercel-ip-country"]) || null;
      const region = payload.region || decodeGeoValue(req.headers["x-vercel-ip-country-region"]) || null;
      const city = payload.city || decodeGeoValue(req.headers["x-vercel-ip-city"]) || null;
      const deviceType = payload.deviceType || getDeviceType(req.headers["user-agent"]);
      const metadata = {
        ...(payload.metadata && typeof payload.metadata === "object" ? payload.metadata : {}),
        ...(city ? { city } : {}),
      };
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
          Object.keys(metadata).length ? JSON.stringify(metadata) : null,
        ],
      );
      return { id: rows[0].id, sessionId };
    });
    sendJson(res, 201, { event });
  } catch (error) {
    handleError(res, error);
  }
}
