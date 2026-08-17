import { createServer } from "node:http";
import { randomUUID } from "node:crypto";
import { withDb } from "./mysql.mjs";

const port = Number(process.env.BACKEND_PORT || 4000);
const corsOrigin = process.env.CORS_ORIGIN || "*";

function json(response, status, body) {
  response.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "access-control-allow-origin": corsOrigin,
    "access-control-allow-methods": "GET,POST,PUT,DELETE,OPTIONS",
    "access-control-allow-headers": "content-type,authorization",
  });
  response.end(JSON.stringify(body));
}

async function readJson(request) {
  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  if (chunks.length === 0) return {};
  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

function centsFromPrice(value) {
  const amount = String(value || "0").replace(/[^\d.]/g, "");
  return Math.round(Number(amount || 0) * 100);
}

async function health(response) {
  const result = await withDb(async (db) => {
    const [rows] = await db.query("SELECT COUNT(*) AS count FROM products");
    return rows[0];
  });
  json(response, 200, { ok: true, database: "connected", products: result.count });
}

async function listProducts(response) {
  const products = await withDb(async (db) => {
    const [rows] = await db.query(
      `SELECT id, slug, title, price_cents, currency, main_image_url, stock_status, is_visible, updated_at
       FROM products
       ORDER BY updated_at DESC
       LIMIT 100`,
    );
    return rows;
  });
  json(response, 200, { products });
}

async function createProduct(request, response) {
  const payload = await readJson(request);
  const title = String(payload.title || "").trim();
  const slug = String(payload.slug || "").trim();
  if (!title || !slug) {
    json(response, 400, { error: "title and slug are required" });
    return;
  }

  const product = await withDb(async (db) => {
    const [result] = await db.query(
      `INSERT INTO products
        (slug, title, price_cents, currency, main_image_url, stock_status, seo_title, seo_description)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        slug,
        title,
        centsFromPrice(payload.price),
        payload.currency || "SGD",
        payload.image || null,
        payload.stock === "out" ? "out" : "in",
        payload.seoTitle || null,
        payload.seoDescription || null,
      ],
    );
    return { id: result.insertId, slug, title };
  });
  json(response, 201, { product });
}

async function listLeads(response) {
  const leads = await withDb(async (db) => {
    const [rows] = await db.query(
      `SELECT id, name, company, email, phone, source, interest, message, status, created_at
       FROM leads
       ORDER BY created_at DESC
       LIMIT 100`,
    );
    return rows;
  });
  json(response, 200, { leads });
}

async function createLead(request, response) {
  const payload = await readJson(request);
  const name = String(payload.name || "").trim();
  const message = String(payload.message || "").trim();
  if (!name || !message) {
    json(response, 400, { error: "name and message are required" });
    return;
  }

  const lead = await withDb(async (db) => {
    const [result] = await db.query(
      `INSERT INTO leads (name, company, email, phone, source, interest, message)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        name,
        payload.company || null,
        payload.email || null,
        payload.phone || null,
        payload.source || "website",
        payload.interest || null,
        message,
      ],
    );
    return { id: result.insertId, name };
  });
  json(response, 201, { lead });
}

async function listOrders(response) {
  const orders = await withDb(async (db) => {
    const [rows] = await db.query(
      `SELECT id, order_number, customer_name, customer_email, status, payment_status, total_cents, currency, created_at
       FROM orders
       ORDER BY created_at DESC
       LIMIT 100`,
    );
    return rows;
  });
  json(response, 200, { orders });
}

async function createAnalyticsEvent(request, response) {
  const payload = await readJson(request);
  const eventName = String(payload.eventName || "").trim();
  if (!eventName) {
    json(response, 400, { error: "eventName is required" });
    return;
  }

  const event = await withDb(async (db) => {
    const sessionId = payload.sessionId || randomUUID();
    const metadata = {
      ...(payload.metadata && typeof payload.metadata === "object" ? payload.metadata : {}),
      ...(payload.city ? { city: payload.city } : {}),
    };
    const [result] = await db.query(
      `INSERT INTO analytics_events
        (session_id, event_name, page_path, device_type, country, region, metadata_json)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        sessionId,
        eventName,
        payload.pagePath || null,
        payload.deviceType || null,
        payload.country || null,
        payload.region || null,
        Object.keys(metadata).length ? JSON.stringify(metadata) : null,
      ],
    );
    return { id: result.insertId, sessionId };
  });
  json(response, 201, { event });
}

const server = createServer(async (request, response) => {
  if (request.method === "OPTIONS") {
    json(response, 204, {});
    return;
  }

  try {
    const url = new URL(request.url || "/", `http://${request.headers.host}`);

    if (request.method === "GET" && url.pathname === "/health") return await health(response);
    if (request.method === "GET" && url.pathname === "/products") return await listProducts(response);
    if (request.method === "POST" && url.pathname === "/products") return await createProduct(request, response);
    if (request.method === "GET" && url.pathname === "/leads") return await listLeads(response);
    if (request.method === "POST" && url.pathname === "/leads") return await createLead(request, response);
    if (request.method === "GET" && url.pathname === "/orders") return await listOrders(response);
    if (request.method === "POST" && url.pathname === "/analytics/events") {
      return await createAnalyticsEvent(request, response);
    }

    json(response, 404, { error: "Not found" });
  } catch (error) {
    json(response, 500, { error: error instanceof Error ? error.message : "Unexpected error" });
  }
});

server.listen(port, () => {
  console.log(`Datacom MySQL backend listening on http://localhost:${port}`);
});
