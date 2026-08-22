import { requireAdmin } from "../_admin-auth.js";
import { handleError, handleOptions, readJson, sendJson, withServerPostgres } from "../_helpers.js";
import {
  cleanChatBody,
  cleanSessionId,
  ensureLiveChatTables,
  mapVisitorMessage,
} from "../_live-chat.js";

async function getMessages(req, res) {
  const url = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);
  const sessionId = cleanSessionId(url.searchParams.get("sessionId"));

  if (!sessionId) {
    return sendJson(res, 400, { error: "sessionId is required" });
  }

  const messages = await withServerPostgres(async (db) => {
    await ensureLiveChatTables(db);

    const { rows } = await db.query(
      `SELECT id, session_id, author, body, page_path, created_at
       FROM visitor_messages
       WHERE session_id = $1
       ORDER BY created_at ASC
       LIMIT 120`,
      [sessionId],
    );

    await db.query(
      `UPDATE visitor_messages
       SET read_by_visitor_at = COALESCE(read_by_visitor_at, NOW())
       WHERE session_id = $1 AND author = 'owner'`,
      [sessionId],
    );

    return rows.map(mapVisitorMessage);
  });

  return sendJson(res, 200, { messages });
}

async function createVisitorMessage(req, res) {
  const payload = await readJson(req);
  const sessionId = cleanSessionId(payload.sessionId);
  const body = cleanChatBody(payload.body);
  const pagePath = String(payload.pagePath || "").slice(0, 500) || null;

  if (!sessionId) {
    return sendJson(res, 400, { error: "sessionId is required" });
  }

  if (!body) {
    return sendJson(res, 400, { error: "Message is required" });
  }

  const message = await withServerPostgres(async (db) => {
    await ensureLiveChatTables(db);

    const { rows } = await db.query(
      `INSERT INTO visitor_messages
       (session_id, author, body, page_path, read_by_visitor_at)
       VALUES ($1, 'visitor', $2, $3, NOW())
       RETURNING id, session_id, author, body, page_path, created_at`,
      [sessionId, body, pagePath],
    );

    await db.query(
      `INSERT INTO analytics_events
       (session_id, event_name, page_path, metadata_json)
       VALUES ($1, 'visitor_chat_message', $2, $3)`,
      [sessionId, pagePath, JSON.stringify({ source: "website_chat" })],
    );

    return mapVisitorMessage(rows[0]);
  });

  return sendJson(res, 201, { message });
}

async function createOwnerMessage(req, res) {
  const payload = await readJson(req);
  const sessionId = cleanSessionId(payload.sessionId);
  const body = cleanChatBody(payload.body);
  const pagePath = String(payload.pagePath || "").slice(0, 500) || null;

  if (!sessionId) {
    return sendJson(res, 400, { error: "sessionId is required" });
  }

  if (!body) {
    return sendJson(res, 400, { error: "Message is required" });
  }

  const message = await withServerPostgres(async (db) => {
    await ensureLiveChatTables(db);

    const { rows } = await db.query(
      `INSERT INTO visitor_messages
       (session_id, author, body, page_path, read_by_owner_at)
       VALUES ($1, 'owner', $2, $3, NOW())
       RETURNING id, session_id, author, body, page_path, created_at`,
      [sessionId, body, pagePath],
    );

    await db.query(
      `INSERT INTO admin_activity
       (actor, action, target_type, target_id, metadata_json)
       VALUES ($1, 'message_live_visitor', 'visitor_session', $2, $3)`,
      [
        process.env.DASHBOARD_USERNAME || "owner",
        sessionId,
        JSON.stringify({ pagePath }),
      ],
    );

    return mapVisitorMessage(rows[0]);
  });

  return sendJson(res, 201, { message });
}

export default async function handler(req, res) {
  if (handleOptions(req, res)) return;

  try {
    const path = req.url || "";

    // Admin live-chat request
    if (path.startsWith("/api/admin/live-chat")) {
      if (!requireAdmin(req, res)) return;

      if (req.method === "POST") {
        return await createOwnerMessage(req, res);
      }

      return sendJson(res, 405, { error: "Method not allowed" });
    }

    // Public visitor live-chat request
    if (req.method === "GET") {
      return await getMessages(req, res);
    }

    if (req.method === "POST") {
      return await createVisitorMessage(req, res);
    }

    return sendJson(res, 405, { error: "Method not allowed" });
  } catch (error) {
    return handleError(res, error);
  }
}
