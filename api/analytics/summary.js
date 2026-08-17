import { handleError, handleOptions, sendJson, withServerPostgres } from "../_helpers.js";
import { ensureLiveChatTables } from "../_live-chat.js";

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

async function attachReplies(db, leads) {
  const ids = leads.map((lead) => lead.id);
  if (!ids.length) return leads;

  const { rows } = await db.query(
    `SELECT id, lead_id, body, sent_to_email, created_at
     FROM lead_replies
     WHERE lead_id = ANY($1::bigint[])
     ORDER BY created_at ASC`,
    [ids],
  );

  return leads.map((lead) => ({
    ...lead,
    replies: rows.filter((reply) => reply.lead_id === lead.id),
  }));
}

export default async function handler(req, res) {
  if (handleOptions(req, res)) return;
  if (req.method !== "GET") return sendJson(res, 405, { error: "Method not allowed" });

  try {
    const summary = await withServerPostgres(async (db) => {
      await ensureLiveChatTables(db);
      const [
        active,
        today,
        totalEvents,
        deviceRows,
        locationRows,
        pageRows,
        activeVisitorRows,
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
          `WITH latest_active AS (
             SELECT DISTINCT ON (session_id)
                    session_id, event_name, page_path, device_type, country, region,
                    metadata_json ->> 'city' AS city,
                    created_at
             FROM analytics_events
             WHERE created_at >= NOW() - INTERVAL '5 minutes'
             ORDER BY session_id, created_at DESC
           ),
           activity_counts AS (
             SELECT session_id, COUNT(*)::int AS actions
             FROM analytics_events
             WHERE created_at >= NOW() - INTERVAL '24 hours'
             GROUP BY session_id
           ),
           latest_messages AS (
             SELECT DISTINCT ON (session_id)
                    session_id, author, body, created_at
             FROM visitor_messages
             ORDER BY session_id, created_at DESC
           ),
           unread_messages AS (
             SELECT session_id, COUNT(*)::int AS unread_chat_count
             FROM visitor_messages
             WHERE author = 'visitor' AND read_by_owner_at IS NULL
             GROUP BY session_id
           )
           SELECT latest_active.session_id,
                  latest_active.event_name,
                  latest_active.page_path,
                  COALESCE(latest_active.device_type, 'Unknown') AS device_type,
                  COALESCE(latest_active.country, 'Unknown') AS country,
                  latest_active.region,
                  latest_active.city,
                  latest_active.created_at,
                  COALESCE(activity_counts.actions, 1) AS actions,
                  latest_messages.author AS latest_chat_author,
                  latest_messages.body AS latest_chat_body,
                  latest_messages.created_at AS latest_chat_at,
                  COALESCE(unread_messages.unread_chat_count, 0) AS unread_chat_count
           FROM latest_active
           LEFT JOIN activity_counts ON activity_counts.session_id = latest_active.session_id
           LEFT JOIN latest_messages ON latest_messages.session_id = latest_active.session_id
           LEFT JOIN unread_messages ON unread_messages.session_id = latest_active.session_id
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

      const leads = await attachReplies(db, leadRows.rows);

      return {
        activeNow: active.rows[0]?.count || 0,
        visitorsToday: today.rows[0]?.count || 0,
        eventsToday: totalEvents.rows[0]?.count || 0,
        devices: deviceRows.rows,
        locations: locationRows.rows,
        topPages: pageRows.rows,
        activeVisitors: activeVisitorRows.rows,
        recentEvents: eventRows.rows.map(mapEvent),
        leads,
        orders: orderRows.rows,
        notifications,
      };
    });

    sendJson(res, 200, summary);
  } catch (error) {
    handleError(res, error);
  }
}
