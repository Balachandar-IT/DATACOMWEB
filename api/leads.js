import { withPostgres } from "../backend/postgres.mjs";
import { handleError, handleOptions, readJson, sendJson } from "./_helpers.js";

async function listLeads(res) {
  const leads = await withPostgres(async (db) => {
    const { rows } = await db.query(
      `SELECT id, name, company, email, phone, source, interest, message, status, created_at
       FROM leads
       ORDER BY created_at DESC
       LIMIT 100`,
    );
    return rows;
  });
  sendJson(res, 200, { leads });
}

async function createLead(req, res) {
  const payload = await readJson(req);
  const name = String(payload.name || "").trim();
  const message = String(payload.message || "").trim();
  if (!name || !message) return sendJson(res, 400, { error: "name and message are required" });
  const metadata = payload.metadata && typeof payload.metadata === "object" ? payload.metadata : {};
  const details = [
    metadata.addons ? `Add-ons: ${metadata.addons}` : "",
    metadata.serviceCategory ? `Service Category: ${metadata.serviceCategory}` : "",
    metadata.pagePath ? `Page: ${metadata.pagePath}` : "",
  ].filter(Boolean);
  const storedMessage = details.length ? `${message}\n\n${details.join("\n")}` : message;

  const lead = await withPostgres(async (db) => {
    const { rows } = await db.query(
      `INSERT INTO leads (name, company, email, phone, source, interest, message)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING id, name`,
      [
        name,
        payload.company || null,
        payload.email || null,
        payload.phone || null,
        payload.source || "website",
        payload.interest || null,
        storedMessage,
      ],
    );
    return rows[0];
  });
  sendJson(res, 201, { lead });
}

export default async function handler(req, res) {
  if (handleOptions(req, res)) return;

  try {
    if (req.method === "GET") return await listLeads(res);
    if (req.method === "POST") return await createLead(req, res);
    sendJson(res, 405, { error: "Method not allowed" });
  } catch (error) {
    handleError(res, error);
  }
}
