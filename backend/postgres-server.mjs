import { createServer } from "node:http";
import { randomUUID } from "node:crypto";
import { withPostgres } from "./postgres.mjs";
import { getEmailNotificationStatus, leadNotification, sendOwnerNotification, testNotification } from "../api/_email.js";

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
  const result = await withPostgres(async (db) => {
    const { rows } = await db.query("SELECT COUNT(*)::int AS count FROM products");
    return rows[0];
  });
  json(response, 200, { ok: true, database: "postgresql", products: result.count });
}

async function listProducts(response) {
  const products = await withPostgres(async (db) => {
    const { rows } = await db.query(
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

  const product = await withPostgres(async (db) => {
    const { rows } = await db.query(
      `INSERT INTO products
        (slug, title, price_cents, currency, main_image_url, stock_status, seo_title, seo_description)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING id, slug, title`,
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
    return rows[0];
  });
  json(response, 201, { product });
}

async function listLeads(response) {
  const leads = await withPostgres(async (db) => {
    const { rows } = await db.query(
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
  const notification = await sendOwnerNotification(
    leadNotification({
      name,
      company: payload.company,
      email: payload.email,
      phone: payload.phone,
      source: payload.source || "website",
      interest: payload.interest,
      message: storedMessage,
    }),
  );
  json(response, 201, { lead, notification });
}

async function listOrders(response) {
  const orders = await withPostgres(async (db) => {
    const { rows } = await db.query(
      `SELECT id, order_number, customer_name, customer_email, status, payment_status, total_cents, currency, created_at
       FROM orders
       ORDER BY created_at DESC
       LIMIT 100`,
    );
    return rows;
  });
  json(response, 200, { orders });
}

function mapEvent(event) {
  const label = String(event.event_name || "").replace(/_/g, " ");
  return {
    id: String(event.id),
    title: label.charAt(0).toUpperCase() + label.slice(1),
    detail: event.page_path || "Website",
    createdAt: event.created_at,
    metadata: event.metadata_json || {},
  };
}

async function analyticsSummary(response) {
  const summary = await withPostgres(async (db) => {
    const [active, today, totalEvents, deviceRows, locationRows, pageRows, activeVisitorRows, eventRows, leadRows, orderRows] =
      await Promise.all([
        db.query(
          `SELECT COUNT(DISTINCT session_id)::int AS count
           FROM analytics_events
           WHERE created_at >= NOW() - INTERVAL '5 minutes'`,
        ),
        db.query(
          `SELECT COUNT(DISTINCT session_id)::int AS count
           FROM analytics_events
           WHERE created_at >= date_trunc('day', NOW())`,
        ),
        db.query(
          `SELECT COUNT(*)::int AS count
           FROM analytics_events
           WHERE created_at >= NOW() - INTERVAL '24 hours'`,
        ),
        db.query(
          `SELECT COALESCE(device_type, 'Unknown') AS label, COUNT(*)::int AS count
           FROM analytics_events
           WHERE created_at >= NOW() - INTERVAL '24 hours'
           GROUP BY COALESCE(device_type, 'Unknown')
           ORDER BY count DESC
           LIMIT 6`,
        ),
        db.query(
          `SELECT COALESCE(country, 'Unknown') AS label, COUNT(*)::int AS count
           FROM analytics_events
           WHERE created_at >= NOW() - INTERVAL '24 hours'
           GROUP BY COALESCE(country, 'Unknown')
           ORDER BY count DESC
           LIMIT 6`,
        ),
        db.query(
          `SELECT COALESCE(page_path, '/') AS label, COUNT(*)::int AS count
           FROM analytics_events
           WHERE created_at >= NOW() - INTERVAL '24 hours'
           GROUP BY COALESCE(page_path, '/')
           ORDER BY count DESC
           LIMIT 8`,
        ),
        db.query(
          `WITH latest_active AS (
             SELECT DISTINCT ON (session_id)
                    session_id, event_name, page_path, device_type, country, region, created_at
             FROM analytics_events
             WHERE created_at >= NOW() - INTERVAL '5 minutes'
             ORDER BY session_id, created_at DESC
           ),
           activity_counts AS (
             SELECT session_id, COUNT(*)::int AS actions
             FROM analytics_events
             WHERE created_at >= NOW() - INTERVAL '24 hours'
             GROUP BY session_id
           )
           SELECT latest_active.session_id,
                  latest_active.event_name,
                  latest_active.page_path,
                  COALESCE(latest_active.device_type, 'Unknown') AS device_type,
                  COALESCE(latest_active.country, 'Unknown') AS country,
                  latest_active.region,
                  latest_active.created_at,
                  COALESCE(activity_counts.actions, 1) AS actions
           FROM latest_active
           LEFT JOIN activity_counts ON activity_counts.session_id = latest_active.session_id
           ORDER BY latest_active.created_at DESC
           LIMIT 20`,
        ),
        db.query(
          `SELECT id, event_name, page_path, metadata_json, created_at
           FROM analytics_events
           ORDER BY created_at DESC
           LIMIT 20`,
        ),
        db.query(
          `SELECT id, name, company, email, phone, source, interest, message, status, created_at
           FROM leads
           ORDER BY created_at DESC
           LIMIT 20`,
        ),
        db.query(
          `SELECT id, order_number, customer_name, customer_email, status,
                  payment_status, total_cents, currency, created_at
           FROM orders
           ORDER BY created_at DESC
           LIMIT 20`,
        ),
      ]);

    const notifications = [
      ...leadRows.rows.map((lead) => ({
        id: `lead-${lead.id}`,
        title: "New website enquiry",
        detail: `${lead.name}${lead.company ? ` - ${lead.company}` : ""}`,
        createdAt: lead.created_at,
        type: "lead",
      })),
      ...eventRows.rows
        .filter((event) => ["add_to_cart", "checkout_click", "product_view", "search"].includes(event.event_name))
        .slice(0, 10)
        .map((event) => ({ ...mapEvent(event), type: "activity" })),
    ]
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 12);

    return {
      activeNow: active.rows[0]?.count || 0,
      visitorsToday: today.rows[0]?.count || 0,
      eventsToday: totalEvents.rows[0]?.count || 0,
      devices: deviceRows.rows,
      locations: locationRows.rows,
      topPages: pageRows.rows,
      activeVisitors: activeVisitorRows.rows,
      recentEvents: eventRows.rows.map(mapEvent),
      leads: leadRows.rows,
      orders: orderRows.rows,
      notifications,
    };
  });
  json(response, 200, summary);
}

async function createAnalyticsEvent(request, response) {
  const payload = await readJson(request);
  const eventName = String(payload.eventName || "").trim();
  if (!eventName) {
    json(response, 400, { error: "eventName is required" });
    return;
  }

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
  json(response, 201, { event });
}

async function notificationStatus(response) {
  json(response, 200, getEmailNotificationStatus());
}

async function sendTestNotification(response) {
  const status = getEmailNotificationStatus();
  if (!status.connected) {
    json(response, 400, { ...status, error: "Email provider is not connected" });
    return;
  }

  const result = await sendOwnerNotification(testNotification());
  json(response, result.sent ? 200 : 502, { ...getEmailNotificationStatus(), test: result });
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
    if (request.method === "GET" && url.pathname === "/admin/notifications") return await notificationStatus(response);
    if (request.method === "POST" && url.pathname === "/admin/notifications") return await sendTestNotification(response);
    if (request.method === "GET" && url.pathname === "/analytics/summary") return await analyticsSummary(response);
    if (request.method === "POST" && url.pathname === "/analytics/events") return await createAnalyticsEvent(request, response);

    json(response, 404, { error: "Not found" });
  } catch (error) {
    json(response, 500, { error: error instanceof Error ? error.message : "Unexpected error" });
  }
});

server.listen(port, () => {
  console.log(`Datacom PostgreSQL backend listening on http://localhost:${port}`);
});
