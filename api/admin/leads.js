import { requireAdmin } from "../_admin-auth.js";
import { handleError, handleOptions, readJson, sendJson, withServerPostgres } from "../_helpers.js";
import { customerReplyNotification, sendConfiguredEmail } from "../_email.js";

async function replyToLead(req, res) {
  const payload = await readJson(req);
  const leadId = Number(payload.leadId);
  const body = String(payload.body || "").trim();

  if (!Number.isInteger(leadId) || leadId <= 0) return sendJson(res, 400, { error: "leadId is required" });
  if (!body) return sendJson(res, 400, { error: "Reply message is required" });

  const result = await withServerPostgres(async (db) => {
    const { rows } = await db.query(
      `SELECT id, name, email
       FROM leads
       WHERE id = $1
       LIMIT 1`,
      [leadId],
    );
    const lead = rows[0];
    if (!lead) return { status: 404, body: { error: "Lead not found" } };
    if (!lead.email) return { status: 400, body: { error: "Customer email is missing" } };

    const message = customerReplyNotification({ customerName: lead.name, body });
    const email = await sendConfiguredEmail({
      to: lead.email,
      subject: message.subject,
      text: message.text,
      html: message.html,
    });

    if (!email.sent) return { status: 502, body: { error: email.error || "Email reply was not sent", email } };

    const replyRows = await db.query(
      `INSERT INTO lead_replies (lead_id, body, sent_to_email)
       VALUES ($1, $2, $3)
       RETURNING id, lead_id, body, sent_to_email, created_at`,
      [lead.id, body, lead.email],
    );
    await db.query(
      `UPDATE leads
       SET status = 'replied', updated_at = NOW()
       WHERE id = $1`,
      [lead.id],
    );
    await db.query(
      `INSERT INTO admin_activity (actor, action, target_type, target_id)
       VALUES ($1, $2, $3, $4)`,
      [process.env.DASHBOARD_USERNAME || "owner", "reply_lead", "lead", String(lead.id)],
    );

    return { status: 200, body: { reply: replyRows.rows[0], email } };
  });

  return sendJson(res, result.status, result.body);
}

export default async function handler(req, res) {
  if (handleOptions(req, res)) return;
  if (!requireAdmin(req, res)) return;

  try {
    if (req.method === "POST") return await replyToLead(req, res);
    return sendJson(res, 405, { error: "Method not allowed" });
  } catch (error) {
    return handleError(res, error);
  }
}
