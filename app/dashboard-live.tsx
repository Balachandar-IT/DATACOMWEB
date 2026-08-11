"use client";

import { useEffect, useMemo, useState } from "react";
import { getApiBase } from "./api-base";

type CountRow = { label: string; count: number };
type NotificationRow = { id: string; title: string; detail: string; createdAt: string; type: string };
type LeadRow = {
  id: number;
  name: string;
  company: string | null;
  email: string | null;
  phone: string | null;
  source: string | null;
  interest: string | null;
  message: string;
  status: string;
  created_at: string;
};
type OrderRow = {
  id: number;
  order_number: string;
  customer_name: string | null;
  customer_email: string | null;
  status: string;
  payment_status: string;
  total_cents: number;
  currency: string;
  created_at: string;
};
type EventRow = {
  id: string;
  title: string;
  detail: string;
  createdAt: string;
  metadata: Record<string, unknown>;
};
type Summary = {
  activeNow: number;
  visitorsToday: number;
  eventsToday: number;
  devices: CountRow[];
  locations: CountRow[];
  topPages: CountRow[];
  recentEvents: EventRow[];
  leads: LeadRow[];
  orders: OrderRow[];
  notifications: NotificationRow[];
};

const emptySummary: Summary = {
  activeNow: 0,
  devices: [],
  eventsToday: 0,
  leads: [],
  locations: [],
  notifications: [],
  orders: [],
  recentEvents: [],
  topPages: [],
  visitorsToday: 0,
};

function useDashboardSummary() {
  const [summary, setSummary] = useState<Summary>(emptySummary);
  const [state, setState] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        const response = await fetch(`${getApiBase()}/analytics/summary`, { cache: "no-store" });
        if (!response.ok) throw new Error(`Dashboard API returned ${response.status}`);
        const payload = (await response.json()) as Summary;
        if (mounted) {
          setSummary(payload);
          setState("ready");
        }
      } catch {
        if (mounted) setState("error");
      }
    }

    load();
    const timer = window.setInterval(load, 15000);
    return () => {
      mounted = false;
      window.clearInterval(timer);
    };
  }, []);

  return { state, summary };
}

function formatDate(value: string) {
  try {
    return new Intl.DateTimeFormat("en-SG", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(value));
  } catch {
    return value;
  }
}

function money(cents: number, currency = "SGD") {
  return new Intl.NumberFormat("en-SG", {
    currency,
    style: "currency",
  }).format((cents || 0) / 100);
}

function CountBar({ item, total }: { item: CountRow; total: number }) {
  const value = total ? Math.max(4, Math.round((item.count / total) * 100)) : 0;
  return (
    <div className="dashboard-bar">
      <div>
        <span>{item.label}</span>
        <strong>{item.count}</strong>
      </div>
      <span className="dashboard-bar-track">
        <span style={{ width: `${value}%` }} />
      </span>
    </div>
  );
}

function LoadingPanel({ label }: { label: string }) {
  return <article className="owner-panel owner-empty">{label} loading...</article>;
}

function ErrorPanel() {
  return (
    <article className="owner-panel owner-empty">
      Dashboard API is not connected. Check Vercel environment variables and Supabase connection.
    </article>
  );
}

export function DashboardLiveHome() {
  const { state, summary } = useDashboardSummary();
  if (state === "loading") return <LoadingPanel label="Live dashboard" />;
  if (state === "error") return <ErrorPanel />;

  return (
    <>
      <div className="dashboard-grid four">
        <article className="owner-metric green">
          <span>Active now</span>
          <strong>{summary.activeNow}</strong>
          <small>Sessions seen in last 5 minutes</small>
        </article>
        <article className="owner-metric blue">
          <span>Today's visitors</span>
          <strong>{summary.visitorsToday}</strong>
          <small>Unique browser sessions today</small>
        </article>
        <article className="owner-metric blue">
          <span>Shop activity</span>
          <strong>{summary.eventsToday}</strong>
          <small>Tracked actions in last 24 hours</small>
        </article>
        <article className="owner-metric green">
          <span>Inbox</span>
          <strong>{summary.leads.length}</strong>
          <small>Recent website enquiries</small>
        </article>
      </div>

      <div className="dashboard-grid two">
        <article className="owner-panel">
          <div className="owner-panel-heading">
            <div>
              <span className="owner-kicker">Notifications</span>
              <h3>Latest website updates</h3>
            </div>
            <span className="owner-chip">{summary.notifications.length} new</span>
          </div>
          {summary.notifications.length ? (
            <div className="owner-list">
              {summary.notifications.map((item) => (
                <div className="owner-list-row" key={item.id}>
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.detail}</span>
                  </div>
                  <small>{formatDate(item.createdAt)}</small>
                </div>
              ))}
            </div>
          ) : (
            <div className="owner-empty">No notifications yet. New form submissions and shop actions will appear here.</div>
          )}
        </article>

        <article className="owner-panel">
          <div className="owner-panel-heading">
            <div>
              <span className="owner-kicker">Recent activity</span>
              <h3>What visitors are doing</h3>
            </div>
          </div>
          {summary.recentEvents.length ? (
            <div className="owner-list">
              {summary.recentEvents.slice(0, 8).map((item) => (
                <div className="owner-list-row" key={item.id}>
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.detail}</span>
                  </div>
                  <small>{formatDate(item.createdAt)}</small>
                </div>
              ))}
            </div>
          ) : (
            <div className="owner-empty">No tracked visitor actions yet.</div>
          )}
        </article>
      </div>
    </>
  );
}

export function DashboardLiveInbox() {
  const { state, summary } = useDashboardSummary();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedLead = useMemo(
    () => summary.leads.find((lead) => lead.id === (selectedId ?? summary.leads[0]?.id)),
    [selectedId, summary.leads],
  );

  if (state === "loading") return <LoadingPanel label="Inbox" />;
  if (state === "error") return <ErrorPanel />;

  return (
    <section className="dashboard-section inbox-layout">
      <aside className="owner-panel inbox-list" aria-label="Inbox conversations">
        <div className="owner-panel-heading">
          <div>
            <span className="owner-kicker">Live inbox</span>
            <h3>{summary.leads.length} conversations</h3>
          </div>
        </div>
        {summary.leads.length ? (
          summary.leads.map((lead) => (
            <button
              type="button"
              className={lead.id === selectedLead?.id ? "inbox-item active" : "inbox-item"}
              key={lead.id}
              onClick={() => setSelectedId(lead.id)}
            >
              <span>
                <strong>{lead.name}</strong>
                <small>{lead.company || lead.email || "Website enquiry"}</small>
              </span>
              <em>{lead.status}</em>
            </button>
          ))
        ) : (
          <div className="owner-empty">No messages yet. Contact form submissions will save here.</div>
        )}
      </aside>
      <article className="owner-panel inbox-reader">
        {selectedLead ? (
          <>
            <div className="owner-panel-heading">
              <div>
                <span className="owner-kicker">{selectedLead.source || "Website"}</span>
                <h3>{selectedLead.company || selectedLead.name}</h3>
              </div>
              <span className="owner-status new">{selectedLead.status}</span>
            </div>
            <dl className="lead-meta">
              <div><dt>Name</dt><dd>{selectedLead.name}</dd></div>
              <div><dt>Email</dt><dd>{selectedLead.email || "-"}</dd></div>
              <div><dt>Phone</dt><dd>{selectedLead.phone || "-"}</dd></div>
              <div><dt>Interested in</dt><dd>{selectedLead.interest || "-"}</dd></div>
            </dl>
            <div className="lead-message">
              <strong>Message</strong>
              <p>{selectedLead.message}</p>
            </div>
            <div className="owner-actions">
              {selectedLead.email ? <a href={`mailto:${selectedLead.email}`} className="owner-primary">Reply by Email</a> : null}
              <span className="owner-secondary">{formatDate(selectedLead.created_at)}</span>
            </div>
          </>
        ) : (
          <div className="owner-empty large">Select a customer message.</div>
        )}
      </article>
    </section>
  );
}

export function DashboardLiveOrders() {
  const { state, summary } = useDashboardSummary();
  if (state === "loading") return <LoadingPanel label="Orders" />;
  if (state === "error") return <ErrorPanel />;

  const total = summary.orders.reduce((sum, order) => sum + Number(order.total_cents || 0), 0);

  return (
    <section className="dashboard-section">
      <div className="dashboard-grid four">
        <article className="owner-metric blue"><span>Sales</span><strong>{money(total)}</strong></article>
        <article className="owner-metric green"><span>Orders</span><strong>{summary.orders.length}</strong></article>
        <article className="owner-metric gray"><span>Average order value</span><strong>{summary.orders.length ? money(total / summary.orders.length) : "SGD 0.00"}</strong></article>
        <article className="owner-metric red"><span>Tracked carts</span><strong>{summary.recentEvents.filter((event) => /cart/i.test(event.title)).length}</strong></article>
      </div>
      <article className="owner-panel">
        <div className="owner-panel-heading">
          <div>
            <span className="owner-kicker">Sales</span>
            <h3>Orders</h3>
          </div>
        </div>
        {summary.orders.length ? (
          <div className="owner-table">
            <div className="owner-table-head">
              <span>Order</span><span>Date created</span><span>Customer</span><span>Payment</span><span>Status</span><span>Total</span>
            </div>
            {summary.orders.map((order) => (
              <div className="owner-table-row" key={order.id}>
                <span>{order.order_number}</span>
                <span>{formatDate(order.created_at)}</span>
                <span>{order.customer_name || order.customer_email || "-"}</span>
                <span><em className="owner-badge paid">{order.payment_status}</em></span>
                <span><em className="owner-badge fulfilled">{order.status}</em></span>
                <span>{money(order.total_cents, order.currency)}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="owner-empty">No orders yet. Checkout/order capture is ready for the next payment-provider step.</div>
        )}
      </article>
    </section>
  );
}

export function DashboardLiveAnalytics() {
  const { state, summary } = useDashboardSummary();
  if (state === "loading") return <LoadingPanel label="Analytics" />;
  if (state === "error") return <ErrorPanel />;

  const deviceTotal = summary.devices.reduce((sum, item) => sum + item.count, 0);
  const locationTotal = summary.locations.reduce((sum, item) => sum + item.count, 0);
  const pageTotal = summary.topPages.reduce((sum, item) => sum + item.count, 0);

  return (
    <section className="dashboard-section">
      <div className="dashboard-grid four">
        <article className="owner-metric green"><span>Active now</span><strong>{summary.activeNow}</strong><small>Last 5 minutes</small></article>
        <article className="owner-metric blue"><span>Visitors today</span><strong>{summary.visitorsToday}</strong><small>Unique sessions</small></article>
        <article className="owner-metric blue"><span>Events today</span><strong>{summary.eventsToday}</strong><small>Last 24 hours</small></article>
        <article className="owner-metric green"><span>Leads</span><strong>{summary.leads.length}</strong><small>Recent enquiries</small></article>
      </div>
      <div className="dashboard-grid three">
        <article className="owner-panel">
          <div className="owner-panel-heading"><div><span className="owner-kicker">Devices</span><h3>Device split</h3></div></div>
          {summary.devices.length ? summary.devices.map((item) => <CountBar item={item} total={deviceTotal} key={item.label} />) : <div className="owner-empty">No device data yet.</div>}
        </article>
        <article className="owner-panel">
          <div className="owner-panel-heading"><div><span className="owner-kicker">Location</span><h3>Visitor geography</h3></div></div>
          {summary.locations.length ? summary.locations.map((item) => <CountBar item={item} total={locationTotal} key={item.label} />) : <div className="owner-empty">No location data yet.</div>}
        </article>
        <article className="owner-panel">
          <div className="owner-panel-heading"><div><span className="owner-kicker">Pages</span><h3>Top pages</h3></div></div>
          {summary.topPages.length ? summary.topPages.map((item) => <CountBar item={item} total={pageTotal} key={item.label} />) : <div className="owner-empty">No page data yet.</div>}
        </article>
      </div>
    </section>
  );
}
