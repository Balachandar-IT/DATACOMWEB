import { requireAdmin } from "../_admin-auth.js";
import { handleError, handleOptions, readJson, sendJson, withServerPostgres } from "../_helpers.js";
import { cleanChatBody, cleanSessionId, ensureLiveChatTables, mapVisitorMessage } from "../_live-chat.js";

async function createOwnerMessage(req, res) {
  const payload = await readJson(req);
  const sessionId = cleanSessionId(payload.sessionId);
  const body = cleanChatBody(payload.body);
  const pagePath = String(payload.pagePath || "").slice(0, 500) || null;

  if (!sessionId) return sendJson(res, 400, { error: "sessionId is required" });
  if (!body) return sendJson(res, 400, { error: "Message is required" });

  const message = await withServerPostgres(async (db) => {
    await ensureLiveChatTables(db);
    const { rows } = await db.query(
      `INSERT INTO visitor_messages (session_id, author, body, page_path, read_by_owner_at)
       VALUES ($1, 'owner', $2, $3, NOW())
       RETURNING id, session_id, author, body, page_path, created_at`,
      [sessionId, body, pagePath],
    );
    await db.query(
      `INSERT INTO admin_activity (actor, action, target_type, target_id, metadata_json)
       VALUES ($1, 'message_live_visitor', 'visitor_session', $2, $3)`,
      [process.env.DASHBOARD_USERNAME || "owner", sessionId, JSON.stringify({ pagePath })],
    );
    return mapVisitorMessage(rows[0]);
  });

  return sendJson(res, 201, { message });
}

export default async function handler(req, res) {
  if (handleOptions(req, res)) return;
  if (!requireAdmin(req, res)) return;

  try {
    if (req.method === "POST") return await createOwnerMessage(req, res);
    return sendJson(res, 405, { error: "Method not allowed" });
  } catch (error) {
    return handleError(res, error);
  }
}
