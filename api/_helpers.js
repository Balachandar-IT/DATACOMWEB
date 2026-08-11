export function corsHeaders() {
  return {
    "access-control-allow-origin": process.env.CORS_ORIGIN || "*",
    "access-control-allow-methods": "GET,POST,PUT,DELETE,OPTIONS",
    "access-control-allow-headers": "content-type,authorization",
  };
}

export function sendJson(res, status, body) {
  for (const [key, value] of Object.entries(corsHeaders())) {
    res.setHeader(key, value);
  }
  res.statusCode = status;
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.end(JSON.stringify(body));
}

export async function readJson(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  if (chunks.length === 0) return {};
  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

export function handleOptions(req, res) {
  if (req.method !== "OPTIONS") return false;
  for (const [key, value] of Object.entries(corsHeaders())) {
    res.setHeader(key, value);
  }
  res.statusCode = 204;
  res.end();
  return true;
}

export function centsFromPrice(value) {
  const amount = String(value || "0").replace(/[^\d.]/g, "");
  return Math.round(Number(amount || 0) * 100);
}

export function handleError(res, error) {
  sendJson(res, 500, { error: error instanceof Error ? error.message : "Unexpected error" });
}

export async function withServerPostgres(callback) {
  const { withPostgres } = await import("../backend/postgres.mjs");
  return withPostgres(callback);
}
