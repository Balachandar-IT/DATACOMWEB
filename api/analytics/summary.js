import { handleError, handleOptions, sendJson, withServerPostgres } from "../_helpers.js";

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

export default async function handler(req, res) {
  if (handleOptions(req, res)) return;
  if (req.method !== "GET") return sendJson(res, 405, { error: "Method not allowed" });

  try {
    const summary = await withServerPostgres(async (db) => {
      const [
        active,
        today,
        totalEvents,
        deviceRows,
        locationRows,
        pageRows,
        eventRows,
        leadRows,
        orderRows,
      ] = await Promise.all([
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
        recentEvents: eventRows.rows.map(mapEvent),
        leads: leadRows.rows,
        orders: orderRows.rows,
        notifications,
      };
    });

    sendJson(res, 200, summary);
  } catch (error) {
    handleError(res, error);
  }
}
