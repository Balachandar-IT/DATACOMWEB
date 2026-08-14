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
  replies?: Array<{
    id: number;
    lead_id: number;
    body: string;
    sent_to_email: string | null;
    created_at: string;
  }>;
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
type ActiveVisitorRow = {
  session_id: string;
  event_name: string;
  page_path: string | null;
  device_type: string;
  country: string;
  region: string | null;
  created_at: string;
  actions: number;
  latest_chat_author?: "owner" | "visitor" | null;
  latest_chat_body?: string | null;
  latest_chat_at?: string | null;
  unread_chat_count?: number;
};
type Summary = {
  activeNow: number;
  activeVisitors: ActiveVisitorRow[];
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
  activeVisitors: [],
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
    const timer = window.setInterval(load, 5000);
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

function titleCaseEvent(value: string) {
  const label = String(value || "activity").replace(/_/g, " ");
  return label.charAt(0).toUpperCase() + label.slice(1);
}

function shortSession(value: string) {
  return value ? `...${value.slice(-8)}` : "Unknown";
}

function visitorLocation(visitor: ActiveVisitorRow) {
  const parts = [visitor.country, visitor.region].filter((part) => part && part !== "Unknown");
  return parts.length ? parts.join(" / ") : "Unknown";
}

function timeAgo(value: string) {
  const time = new Date(value).getTime();
  if (!Number.isFinite(time)) return "";
  const diff = Math.max(0, Date.now() - time);
  const minutes = Math.floor(diff / 60000);
  if (minutes < 1) return "now";
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hr`;
  return new Intl.DateTimeFormat("en-SG", { month: "short", day: "numeric" }).format(new Date(value));
}

function avatarLabel(value: string | null | undefined) {
  const cleaned = String(value || "Visitor").trim();
  const words = cleaned.split(/\s+/).filter(Boolean);
  if (words.length >= 2) return `${words[0][0]}${words[1][0]}`.toUpperCase();
  return cleaned.slice(0, 2).toUpperCase();
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

function ActiveVisitorsPanel({ visitors }: { visitors: ActiveVisitorRow[] }) {
  const [activeSession, setActiveSession] = useState<string | null>(null);
  const [messageText, setMessageText] = useState("");
  const [sendState, setSendState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [sendMessageText, setSendMessageText] = useState("");

  const selectedVisitor = visitors.find((visitor) => visitor.session_id === activeSession) || null;

  async function sendVisitorMessage() {
    if (!selectedVisitor || !messageText.trim()) return;
    setSendState("sending");
    setSendMessageText("");
    try {
      const response = await fetch(`${getApiBase()}/admin/live-chat`, {
        method: "POST",
        credentials: "include",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          sessionId: selectedVisitor.session_id,
          body: messageText,
          pagePath: selectedVisitor.page_path || "/",
        }),
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || "Message was not sent");
      setMessageText("");
      setSendState("sent");
      setSendMessageText("Message sent to the active visitor.");
    } catch (error) {
      setSendState("error");
      setSendMessageText(error instanceof Error ? error.message : "Message was not sent");
    }
  }

  function openComposer(visitor: ActiveVisitorRow) {
    setActiveSession(visitor.session_id);
    setSendState("idle");
    setSendMessageText("");
  }

  return (
    <article className="owner-panel">
      <div className="owner-panel-heading">
        <div>
          <span className="owner-kicker">Active visitors</span>
          <h3>Who is on the site now</h3>
        </div>
        <span className="owner-chip">{visitors.length} live</span>
      </div>
      {visitors.length ? (
        <div className="owner-table active-visitor-table">
          <div className="owner-table-head">
            <span>Session</span><span>Device</span><span>Location</span><span>Current page</span><span>Chat</span><span>Action</span>
          </div>
          {visitors.map((visitor) => (
            <div className="owner-table-row" key={visitor.session_id}>
              <span>{shortSession(visitor.session_id)}</span>
              <span>{visitor.device_type || "Unknown"}</span>
              <span>{visitorLocation(visitor)}</span>
              <span>{visitor.page_path || "/"}</span>
              <span className="visitor-chat-preview">
                {visitor.latest_chat_body ? (
                  <>
                    <strong>{visitor.latest_chat_author === "owner" ? "You" : "Visitor"}</strong>
                    <small>{visitor.latest_chat_body}</small>
                  </>
                ) : (
                  <small>{titleCaseEvent(visitor.event_name)} ({visitor.actions})</small>
                )}
              </span>
              <span className="visitor-message-actions">
                {visitor.unread_chat_count ? <em>{visitor.unread_chat_count}</em> : null}
                <button type="button" onClick={() => openComposer(visitor)}>Message</button>
              </span>
            </div>
          ))}
          {selectedVisitor ? (
            <div className="visitor-message-composer">
              <div>
                <strong>Message Visitor {shortSession(selectedVisitor.session_id)}</strong>
                <small>{selectedVisitor.page_path || "/"} - {visitorLocation(selectedVisitor)}</small>
              </div>
              <textarea
                value={messageText}
                onChange={(event) => setMessageText(event.target.value)}
                placeholder="Type a live message for this visitor..."
                disabled={sendState === "sending"}
              />
              <div>
                <button
                  type="button"
                  className="owner-primary"
                  onClick={sendVisitorMessage}
                  disabled={!messageText.trim() || sendState === "sending"}
                >
                  {sendState === "sending" ? "Sending..." : "Send Live Message"}
                </button>
                <button type="button" className="owner-secondary" onClick={() => setActiveSession(null)}>Close</button>
              </div>
              {sendMessageText ? <p className={sendState === "error" ? "owner-error" : "owner-success"}>{sendMessageText}</p> : null}
            </div>
          ) : null}
        </div>
      ) : (
        <div className="owner-empty">No visitor was active in the last 5 minutes.</div>
      )}
    </article>
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

export function DashboardTopNotifications({ onOpenInbox }: { onOpenInbox: () => void }) {
  const { state, summary } = useDashboardSummary();
  const [openPanel, setOpenPanel] = useState<"messages" | "alerts" | null>(null);
  const [read, setRead] = useState(false);

  const unreadMessages = read ? 0 : summary.leads.filter((lead) => lead.status === "new" || lead.status === "open").length;
  const alertCount = read ? 0 : summary.notifications.length;
  const liveVisitors = summary.activeVisitors.slice(0, 4);
  const latestMessages = summary.leads.slice(0, 6);
  const latestAlerts = summary.notifications.slice(0, 8);

  function goToInbox() {
    setOpenPanel(null);
    onOpenInbox();
  }

  return (
    <div className="owner-notification-bar">
      <button
        type="button"
        className="owner-live-pill"
        onClick={() => setOpenPanel(openPanel === "messages" ? null : "messages")}
        aria-label="Open live visitor and inbox preview"
      >
        <span className="owner-avatar-stack" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <strong>{state === "ready" ? `+${summary.activeNow}` : "..."}</strong>
      </button>
      <button
        type="button"
        className={openPanel === "messages" ? "owner-icon-button active" : "owner-icon-button"}
        onClick={() => setOpenPanel(openPanel === "messages" ? null : "messages")}
        aria-label="Open messages"
      >
        <span className="owner-message-glyph" aria-hidden="true" />
        {unreadMessages > 0 ? <em>{unreadMessages}</em> : null}
      </button>
      <button
        type="button"
        className={openPanel === "alerts" ? "owner-icon-button active" : "owner-icon-button"}
        onClick={() => setOpenPanel(openPanel === "alerts" ? null : "alerts")}
        aria-label="Open notifications"
      >
        <span className="owner-bell-glyph" aria-hidden="true" />
        {alertCount > 0 ? <em>{alertCount}</em> : null}
      </button>

      {openPanel ? (
        <div className="owner-notification-popover">
          <div className="owner-popover-head">
            <strong>{openPanel === "messages" ? "Inbox" : "Notifications"}</strong>
            <span>
              <button type="button" onClick={() => setRead(true)}>Mark All as Read</button>
              <button type="button" onClick={goToInbox}>Go to Inbox</button>
            </span>
          </div>

          {openPanel === "messages" ? (
            <>
              <div className="owner-popover-section-title">{summary.activeNow} visitors on your site</div>
              {liveVisitors.length ? (
                liveVisitors.map((visitor) => (
                  <button type="button" className="owner-popover-row" key={visitor.session_id} onClick={goToInbox}>
                    <span className="owner-popover-avatar live">{avatarLabel(visitor.session_id)}</span>
                    <span>
                      <strong>Visitor {shortSession(visitor.session_id)}</strong>
                      <small>On Page: {visitor.page_path || "/"}<br />{visitorLocation(visitor)}</small>
                    </span>
                    <em>{timeAgo(visitor.created_at)}</em>
                  </button>
                ))
              ) : (
                <div className="owner-popover-empty">No live visitors right now.</div>
              )}

              <div className="owner-popover-section-title">All Messages</div>
              {latestMessages.length ? (
                latestMessages.map((lead) => (
                  <button type="button" className="owner-popover-row" key={lead.id} onClick={goToInbox}>
                    <span className="owner-popover-avatar">{avatarLabel(lead.name)}</span>
                    <span>
                      <strong>{lead.name}</strong>
                      <small>{lead.company || lead.email || "Contact Form"}</small>
                    </span>
                    <em>{timeAgo(lead.created_at)}</em>
                  </button>
                ))
              ) : (
                <div className="owner-popover-empty">No customer messages yet.</div>
              )}
            </>
          ) : (
            <>
              <div className="owner-popover-section-title">Latest updates</div>
              {latestAlerts.length ? (
                latestAlerts.map((item) => (
                  <button type="button" className="owner-popover-row" key={item.id} onClick={goToInbox}>
                    <span className="owner-popover-avatar alert">!</span>
                    <span>
                      <strong>{item.title}</strong>
                      <small>{item.detail}</small>
                    </span>
                    <em>{timeAgo(item.createdAt)}</em>
                  </button>
                ))
              ) : (
                <div className="owner-popover-empty">No notifications yet.</div>
              )}
            </>
          )}
        </div>
      ) : null}
    </div>
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

      <ActiveVisitorsPanel visitors={summary.activeVisitors} />

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
  const [replyBody, setReplyBody] = useState("");
  const [replyState, setReplyState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [replyMessage, setReplyMessage] = useState("");
  const selectedLead = useMemo(
    () => summary.leads.find((lead) => lead.id === (selectedId ?? summary.leads[0]?.id)),
    [selectedId, summary.leads],
  );

  useEffect(() => {
    setReplyBody("");
    setReplyState("idle");
    setReplyMessage("");
  }, [selectedLead?.id]);

  async function sendReply() {
    if (!selectedLead) return;
    setReplyState("sending");
    setReplyMessage("");
    try {
      const response = await fetch(`${getApiBase()}/admin/leads`, {
        method: "POST",
        credentials: "include",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ leadId: selectedLead.id, body: replyBody }),
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || "Reply was not sent");
      setReplyBody("");
      setReplyState("sent");
      setReplyMessage("Reply sent and saved.");
    } catch (error) {
      setReplyState("error");
      setReplyMessage(error instanceof Error ? error.message : "Reply was not sent");
    }
  }

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
              <em>{lead.status}{lead.replies?.length ? ` · ${lead.replies.length}` : ""}</em>
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
            {selectedLead.replies?.length ? (
              <div className="lead-thread">
                <strong>Replies sent from dashboard</strong>
                {selectedLead.replies.map((reply) => (
                  <div className="lead-reply" key={reply.id}>
                    <p>{reply.body}</p>
                    <small>Sent to {reply.sent_to_email || selectedLead.email} · {formatDate(reply.created_at)}</small>
                  </div>
                ))}
              </div>
            ) : null}
            <label className="owner-field inbox-compose">
              <span>Reply message</span>
              <textarea
                value={replyBody}
                onChange={(event) => setReplyBody(event.target.value)}
                placeholder={selectedLead.email ? "Type your reply to the customer..." : "Customer email is missing."}
                disabled={!selectedLead.email || replyState === "sending"}
              />
            </label>
            <div className="owner-actions">
              <button
                type="button"
                className="owner-primary"
                onClick={sendReply}
                disabled={!selectedLead.email || !replyBody.trim() || replyState === "sending"}
              >
                {replyState === "sending" ? "Sending..." : "Send Reply"}
              </button>
              {selectedLead.email ? <a href={`mailto:${selectedLead.email}`} className="owner-secondary">Open Email App</a> : null}
              <span className="owner-secondary">{formatDate(selectedLead.created_at)}</span>
            </div>
            {replyMessage ? <div className={replyState === "sent" ? "owner-note" : "owner-error"}>{replyMessage}</div> : null}
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
      <ActiveVisitorsPanel visitors={summary.activeVisitors} />
    </section>
  );
}
