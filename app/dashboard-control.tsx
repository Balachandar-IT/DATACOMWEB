"use client";

import Link from "next/link";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { BackendStatus } from "./backend-status";
import { getApiBase } from "./api-base";
import {
  DashboardLiveAnalytics,
  DashboardLiveHome,
  DashboardLiveInbox,
  DashboardLiveOrders,
  DashboardTopNotifications,
} from "./dashboard-live";
import {
  aiVisibility,
  migrationKeywordGroups,
  migrationRules,
  migrationSummary,
  migrationUrlMap,
  securityChecks,
  seoTasks,
  seoTools,
} from "./dashboard-data";
import { shopCatalog, type ShopCatalogProduct } from "./shop-catalog";

type DashboardSection =
  | "home"
  | "ai"
  | "seo"
  | "migration"
  | "inbox"
  | "orders"
  | "content"
  | "analytics"
  | "security";

const sections: Array<{ id: DashboardSection; label: string; detail: string; badge?: string }> = [
  { id: "home", label: "Home", detail: "Site status and owner next steps" },
  { id: "ai", label: "AI Agents", detail: "Brand content and AI visibility", badge: "NEW" },
  { id: "orders", label: "Sales", detail: "Orders and checkout requests" },
  { id: "content", label: "Catalog", detail: "Products, pages, images" },
  { id: "seo", label: "Marketing", detail: "Search, sitemap, AI visibility" },
  { id: "migration", label: "SEO Migration", detail: "Wix URLs, redirects, keyword handover", badge: "NEW" },
  { id: "inbox", label: "Inbox", detail: "Website messages and replies", badge: "50" },
  { id: "analytics", label: "Analytics", detail: "Live users, devices, location" },
  { id: "security", label: "Settings", detail: "Access, spam, audit logs" },
];

const searchPerformanceCards = [
  { query: "datacom enterprise pte ltd", clicks: "65", growth: "+20", position: "2.3" },
  { query: "datacom", clicks: "190", growth: "+10", position: "9.9" },
  { query: "datacom singapore", clicks: "20", growth: "+5", position: "5.5" },
];

const aiPlatformCards = [
  { platform: "ChatGPT", queries: "1,060", trend: "-7%", status: "Tracked" },
  { platform: "Perplexity", queries: "0", trend: "-100%", status: "Needs content" },
  { platform: "Gemini", queries: "N/A", trend: "N/A", status: "Pending" },
];

const brandedContentFormats = ["Promo Video", "Instagram Post", "Business Logo", "Slide Presentation", "Event Flyer"];

type EmailNotificationStatus = {
  connected: boolean;
  provider: string;
  toConfigured: boolean;
  fromConfigured: boolean;
  missing: string[];
  error?: string;
  test?: {
    sent: boolean;
    error?: string;
  };
};

function useEmailNotificationStatus() {
  const [status, setStatus] = useState<EmailNotificationStatus | null>(null);
  const [state, setState] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        const response = await fetch(`${getApiBase()}/admin/notifications`, {
          cache: "no-store",
          credentials: "include",
        });
        if (!response.ok) throw new Error(`Email status returned ${response.status}`);
        const payload = (await response.json()) as EmailNotificationStatus;
        if (mounted) {
          setStatus(payload);
          setState("ready");
        }
      } catch {
        if (mounted) setState("error");
      }
    }

    load();
    return () => {
      mounted = false;
    };
  }, []);

  return { setStatus, state, status };
}

function EmailStatusText({ state, status }: { state: "loading" | "ready" | "error"; status: EmailNotificationStatus | null }) {
  if (state === "loading") return <span>Checking...</span>;
  if (state === "error") return <span>Login required</span>;
  if (!status) return <span>Not connected</span>;
  return <span>{status.connected ? `Connected (${status.provider})` : "Not connected"}</span>;
}

function EmailNotificationsPanel({
  setStatus,
  state,
  status,
}: {
  setStatus: (status: EmailNotificationStatus) => void;
  state: "loading" | "ready" | "error";
  status: EmailNotificationStatus | null;
}) {
  const [testState, setTestState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [testMessage, setTestMessage] = useState("");

  async function sendTestEmail() {
    setTestState("sending");
    setTestMessage("");
    try {
      const response = await fetch(`${getApiBase()}/admin/notifications`, {
        method: "POST",
        credentials: "include",
      });
      const payload = (await response.json()) as EmailNotificationStatus;
      setStatus(payload);
      if (!response.ok || payload.test?.error) {
        throw new Error(payload.error || payload.test?.error || "Test email failed");
      }
      setTestState("sent");
      setTestMessage("Test email sent to the owner inbox.");
    } catch (error) {
      setTestState("error");
      setTestMessage(error instanceof Error ? error.message : "Test email failed");
    }
  }

  const missing = status?.missing || [];
  const isConnected = Boolean(status?.connected);

  return (
    <article className="owner-panel">
      <div className="owner-panel-heading">
        <div>
          <span className="owner-kicker">Email notifications</span>
          <h3>Owner email alerts</h3>
        </div>
        <span className={isConnected ? "owner-chip" : "owner-status warning"}>
          {state === "loading" ? "Checking" : isConnected ? status?.provider : "Not connected"}
        </span>
      </div>
      <p className="owner-muted">
        New contact form enquiries are saved to the dashboard and emailed to your owner inbox automatically.
      </p>
      {state === "error" ? (
        <div className="owner-empty">Login again to check email notification settings.</div>
      ) : missing.length ? (
        <div className="owner-setup-list compact">
          {missing.map((item) => (
            <span key={item}>Add Vercel env: {item}</span>
          ))}
        </div>
      ) : (
        <div className="owner-list">
          <div className="owner-list-row"><strong>Provider</strong><span>{status?.provider}</span></div>
          <div className="owner-list-row"><strong>Recipient</strong><span>{status?.toConfigured ? "Configured" : "Missing"}</span></div>
          <div className="owner-list-row"><strong>Sender</strong><span>{status?.fromConfigured ? "Configured" : "Missing"}</span></div>
        </div>
      )}
      <div className="owner-actions">
        <button type="button" className="owner-primary" onClick={sendTestEmail} disabled={!isConnected || testState === "sending"}>
          {testState === "sending" ? "Sending..." : "Send test email"}
        </button>
        {testMessage ? <span className={testState === "sent" ? "owner-status new" : "owner-status warning"}>{testMessage}</span> : null}
      </div>
    </article>
  );
}

function HomeView({ onSelectSection }: { onSelectSection: (section: DashboardSection) => void }) {
  const emailStatus = useEmailNotificationStatus();
  const [activitySort, setActivitySort] = useState<"priority" | "date">("priority");
  const [brandPrompt, setBrandPrompt] = useState("");
  const [brandFormat, setBrandFormat] = useState(brandedContentFormats[0]);
  const [generatedBrandIdea, setGeneratedBrandIdea] = useState("");
  const setupItems = [
    "Add EMAIL_TO, EMAIL_FROM, and a provider key in Vercel for instant customer query email alerts",
    "Set dashboard username, password, and auth secret in Vercel",
    "Connect payment provider for completed paid orders",
    "Connect Google Search Console API to import impressions, clicks, queries, and indexed URLs",
  ];
  const activityItems = [
    { label: "Performance Updates", priority: 1, date: "Today" },
    { label: "Attention Required", priority: 2, date: "Today" },
    { label: "General Updates", priority: 3, date: "19 days ago" },
  ].sort((a, b) => (activitySort === "priority" ? a.priority - b.priority : a.date.localeCompare(b.date)));

  function generateBrandIdea() {
    const topic = brandPrompt.trim() || "Datacom data center and business IT services";
    setGeneratedBrandIdea(`${brandFormat}: ${topic}. Use Datacom blue, product photography, and a direct enquiry call to action.`);
  }

  return (
    <section className="dashboard-section">
      <article className="owner-panel owner-welcome">
        <div>
          <span className="owner-kicker">Welcome back</span>
          <h2>Datacom website control center</h2>
          <p>
            Manage the site from one place. Only real connected data is shown here.
          </p>
        </div>
        <div className="owner-home-links">
          <Link href="/" className="owner-secondary">View Home</Link>
          <Link href="/shop" className="owner-primary">Open Shop</Link>
        </div>
      </article>

      <DashboardLiveHome />

      <article className="owner-panel activity-feed-panel">
        <div className="activity-feed-head">
          <div>
            <span className="owner-kicker">Activity feed</span>
            <h3>Your most recent updates</h3>
          </div>
          <div className="activity-sort" aria-label="Sort activity feed">
            <span>Sort by</span>
            <button
              type="button"
              className={activitySort === "priority" ? "active" : ""}
              onClick={() => setActivitySort("priority")}
            >
              Priority
            </button>
            <button
              type="button"
              className={activitySort === "date" ? "active" : ""}
              onClick={() => setActivitySort("date")}
            >
              Date
            </button>
          </div>
        </div>

        <div className="activity-feed-list">
          {activityItems.map((item) => (
            <div className="activity-divider" key={item.label}>
              <span>{item.label}</span>
            </div>
          ))}

          <section className="activity-card search-performance-card" aria-labelledby="search-performance-title">
            <div className="activity-card-icon">G</div>
            <div className="activity-card-body">
              <div className="activity-card-top">
                <div>
                  <h4 id="search-performance-title">Search Performance on Google</h4>
                  <div className="activity-pills">
                    <span>Top Queries</span>
                    <span>Top Pages</span>
                  </div>
                </div>
                <button type="button" className="owner-link-button" onClick={() => onSelectSection("seo")}>
                  Manage Site SEO
                </button>
              </div>
              <p>Your top search queries on Google.</p>
              <div className="query-card-grid">
                {searchPerformanceCards.map((card) => (
                  <div className="query-card" key={card.query}>
                    <strong>{card.query}</strong>
                    <div>
                      <span>{card.clicks}</span>
                      <span>{card.growth}</span>
                      <span>{card.position}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="activity-card-footer">
                <button type="button" className="owner-link-button" onClick={() => onSelectSection("seo")}>
                  View Full Report
                </button>
                <span>Stats for Jul 18 - Aug 14 (28 days)</span>
              </div>
              <div className="activity-suggestion">
                <div>
                  <span>Suggested for you</span>
                  <strong>Earn Google Ads credit</strong>
                  <p>Connect a campaign when you are ready to promote Datacom products and services.</p>
                </div>
                <button type="button" className="owner-secondary small">Go to Google Ads</button>
              </div>
            </div>
          </section>

          <section className="activity-card ai-performance-card" aria-labelledby="ai-performance-title">
            <div className="activity-card-icon ai">AI</div>
            <div className="activity-card-body">
              <div className="activity-card-top">
                <div>
                  <h4 id="ai-performance-title">Performance on AI platforms</h4>
                  <p>The number of times AI bots crawled your site following a user query in the last 30 days.</p>
                </div>
                <button type="button" className="owner-link-button" onClick={() => onSelectSection("ai")}>
                  Explore AI Visibility
                </button>
              </div>
              <div className="owner-ai-platform-grid">
                {aiPlatformCards.map((card) => (
                  <div className="ai-platform-card" key={card.platform}>
                    <strong>{card.platform}</strong>
                    <span>{card.status}</span>
                    <div>
                      <small>User queries</small>
                      <b>{card.queries}</b>
                      <em>{card.trend}</em>
                    </div>
                  </div>
                ))}
              </div>
              <button type="button" className="ai-score-banner" onClick={() => onSelectSection("ai")}>
                Discover how your site is featured on ChatGPT, Perplexity, and Gemini.
                <strong>Get Visibility Score</strong>
              </button>
            </div>
          </section>

          <section className="activity-card brand-studio-card" aria-labelledby="brand-studio-title">
            <div className="activity-card-icon brand">DE</div>
            <div className="activity-card-body">
              <div className="activity-card-top">
                <div>
                  <h4 id="brand-studio-title">Create branded content for Datacom</h4>
                  <p>Turn an idea into on-brand images, videos, social posts, and sales material.</p>
                </div>
                <span className="owner-status new">NEW</span>
              </div>
              <div className="brand-prompt-row">
                <input
                  value={brandPrompt}
                  onChange={(event) => setBrandPrompt(event.target.value)}
                  placeholder="Describe your design..."
                />
                <button type="button" className="owner-primary small" onClick={generateBrandIdea}>
                  Create Design
                </button>
              </div>
              <div className="brand-format-row">
                {brandedContentFormats.map((format) => (
                  <button
                    type="button"
                    className={format === brandFormat ? "active" : ""}
                    key={format}
                    onClick={() => setBrandFormat(format)}
                  >
                    {format}
                  </button>
                ))}
              </div>
              {generatedBrandIdea ? <p className="brand-output">{generatedBrandIdea}</p> : null}
            </div>
          </section>

          <section className="activity-card ai-operations-card" aria-labelledby="ai-operations-title">
            <div className="activity-card-icon ops">+</div>
            <div className="activity-card-body">
              <div className="activity-card-top">
                <div>
                  <h4 id="ai-operations-title">Manage your business with AI-anywhere</h4>
                  <p>Chat-ready actions for performance insights, product updates, content drafts, and daily operations.</p>
                </div>
                <button type="button" className="owner-link-button" onClick={() => onSelectSection("ai")}>Get Started</button>
              </div>
            </div>
          </section>

          <section className="activity-card member-update-card" aria-labelledby="member-update-title">
            <div className="activity-card-icon member">A</div>
            <div className="activity-card-body">
              <div className="activity-card-top">
                <div>
                  <h4 id="member-update-title">New Site Member</h4>
                  <p>Admin John is now a site member.</p>
                </div>
                <span>19 days ago</span>
              </div>
            </div>
          </section>
        </div>
      </article>

      <div className="dashboard-grid two">
        <article className="owner-panel">
          <div className="owner-panel-heading">
            <div>
              <span className="owner-kicker">Quick actions</span>
              <h3>Control areas</h3>
            </div>
          </div>
          <div className="owner-action-grid">
            <button type="button" onClick={() => onSelectSection("seo")}>SEO setup</button>
            <button type="button" onClick={() => onSelectSection("inbox")}>Inbox setup</button>
            <button type="button" onClick={() => onSelectSection("content")}>Catalog control</button>
            <button type="button" onClick={() => onSelectSection("security")}>Security setup</button>
          </div>
        </article>

        <BackendStatus />
      </div>

      <div className="dashboard-grid two">
        <article className="owner-panel">
          <div className="owner-panel-heading">
            <div>
              <span className="owner-kicker">Site connections</span>
              <h3>Current status</h3>
            </div>
          </div>
          <div className="owner-list">
            <div className="owner-list-row"><strong>Catalog products</strong><span>{shopCatalog.length}</span></div>
            <div className="owner-list-row"><strong>Shop catalog</strong><span>Connected</span></div>
            <div className="owner-list-row"><strong>Customer inbox</strong><span>Connected</span></div>
            <div className="owner-list-row"><strong>Email notifications</strong><EmailStatusText state={emailStatus.state} status={emailStatus.status} /></div>
            <div className="owner-list-row"><strong>Live analytics</strong><span>Connected</span></div>
            <div className="owner-list-row"><strong>Search Console</strong><span>Verified</span></div>
            <div className="owner-list-row"><strong>Admin authentication</strong><span>Not connected</span></div>
          </div>
        </article>
        <EmailNotificationsPanel {...emailStatus} />
      </div>

      <article className="owner-panel">
          <div className="owner-panel-heading">
            <div>
              <span className="owner-kicker">Attention required</span>
              <h3>Production setup</h3>
            </div>
          </div>
          <div className="owner-setup-list">
            {setupItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </article>
    </section>
  );
}

function SeoView() {
  return (
    <section className="dashboard-section">
      <div className="dashboard-grid four">
        {seoTasks.map((task) => (
          <article className={`owner-metric ${task.tone}`} key={task.label}>
            <span>{task.label}</span>
            <strong>{task.status}</strong>
          </article>
        ))}
      </div>

      <div className="dashboard-grid two">
        <article className="owner-panel">
          <div className="owner-panel-heading">
            <div>
              <span className="owner-kicker">Google Search Console</span>
              <h3>Site performance</h3>
            </div>
            <span className="owner-chip">Connected</span>
          </div>
          <div className="owner-empty">
            URL-prefix property is verified and sitemap.xml is submitted with 179 discovered pages.
            Search performance metrics will appear in Google after crawl data updates; importing them here needs the Search Console API connection.
          </div>
        </article>

        <article className="owner-panel">
          <div className="owner-panel-heading">
            <div>
              <span className="owner-kicker">Gen AI visibility</span>
              <h3>Last crawled by platform</h3>
            </div>
          </div>
          {aiVisibility.length > 0 ? (
            <div className="owner-list">
              {aiVisibility.map((item) => (
                <div className="owner-list-row" key={item.platform}>
                  <div>
                    <strong>{item.platform}</strong>
                    <span>{item.pages}</span>
                  </div>
                  <span>{item.seen}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="owner-empty">
              LLM discovery file is live at /llms.txt. AI platform crawl reports need server logs or a provider integration.
            </div>
          )}
        </article>
      </div>

      <article className="owner-panel">
        <div className="owner-panel-heading">
          <div>
            <span className="owner-kicker">Tools and settings</span>
            <h3>SEO controls you own</h3>
          </div>
        </div>
        <div className="seo-tools-grid">
          {seoTools.map((tool) => (
            <button type="button" key={tool}>
              {tool}
            </button>
          ))}
        </div>
        <div className="owner-check-grid compact">
          <a href="/sitemap.xml">Open sitemap.xml</a>
          <a href="/robots.txt">Open robots.txt</a>
          <a href="/llms.txt">Open llms.txt</a>
          <a href="/shop">Check product internal links</a>
        </div>
      </article>
    </section>
  );
}

function MigrationView() {
  return (
    <section className="dashboard-section">
      <div className="dashboard-grid four">
        {migrationSummary.map((item) => (
          <article className={`owner-metric ${item.tone}`} key={item.label}>
            <span>{item.label}</span>
            <strong>{item.status}</strong>
          </article>
        ))}
      </div>

      <article className="owner-panel migration-hero">
        <div className="owner-panel-heading">
          <div>
            <span className="owner-kicker">Migration control board</span>
            <h3>Move from Wix without mixing SEO signals</h3>
          </div>
          <span className="owner-chip">Testing mode</span>
        </div>
        <p>
          Old Wix stays live while this site is tested on a separate domain. Final launch should happen only after
          priority pages, 301 redirects, sitemap, analytics, and forms are checked.
        </p>
        <div className="migration-flow" aria-label="Migration workflow">
          <span>Collect Wix URLs</span>
          <span>Match new pages</span>
          <span>Add SEO metadata</span>
          <span>Create 301 redirects</span>
          <span>Switch domain</span>
          <span>Watch Search Console</span>
        </div>
      </article>

      <article className="owner-panel">
        <div className="owner-panel-heading">
          <div>
            <span className="owner-kicker">URL redirect manager</span>
            <h3>Priority Wix URLs to protect</h3>
          </div>
          <span className="owner-chip">Do first</span>
        </div>
        <div className="owner-table migration-url-table">
          <div className="owner-table-head">
            <span>Old Wix URL</span>
            <span>New site target</span>
            <span>Keyword / rank</span>
            <span>Action</span>
            <span>Priority</span>
          </div>
          {migrationUrlMap.map((row) => (
            <div className="owner-table-row" key={row.oldPath}>
              <strong>{row.oldPath}</strong>
              <span>{row.newPath}</span>
              <span>{row.keywords}</span>
              <span>{row.action}</span>
              <em className={`migration-priority ${row.priority.toLowerCase()}`}>{row.priority}</em>
            </div>
          ))}
        </div>
      </article>

      <div className="dashboard-grid two">
        <article className="owner-panel">
          <div className="owner-panel-heading">
            <div>
              <span className="owner-kicker">Keyword groups</span>
              <h3>Page-1 rankings to keep safe</h3>
            </div>
          </div>
          <div className="migration-keyword-list">
            {migrationKeywordGroups.map((item) => (
              <div className="migration-keyword-row" key={item.group}>
                <div>
                  <strong>{item.group}</strong>
                  <span>{item.oldUrl}</span>
                </div>
                <div>
                  <b>{item.best}</b>
                  <span>Volume {item.volume}</span>
                </div>
                <p>{item.nextStep}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="owner-panel">
          <div className="owner-panel-heading">
            <div>
              <span className="owner-kicker">Do not mix</span>
              <h3>Pre-migration rules</h3>
            </div>
          </div>
          <div className="migration-rule-list">
            {migrationRules.map((rule) => (
              <span key={rule}>{rule}</span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

function AiView() {
  return (
    <section className="dashboard-section">
      <article className="owner-panel">
        <div className="owner-panel-heading">
          <div>
            <span className="owner-kicker">AI visibility</span>
            <h3>Search and answer engines</h3>
          </div>
          <span className="owner-chip">Beta</span>
        </div>
        <div className="owner-ai-platform-grid wide">
          {aiPlatformCards.map((card) => (
            <div className="ai-platform-card" key={card.platform}>
              <strong>{card.platform}</strong>
              <span>{card.status}</span>
              <div>
                <small>User queries</small>
                <b>{card.queries}</b>
                <em>{card.trend}</em>
              </div>
            </div>
          ))}
        </div>
      </article>

      <article className="owner-panel">
        <div className="owner-panel-heading">
          <div>
            <span className="owner-kicker">AI agents</span>
            <h3>Operational shortcuts</h3>
          </div>
        </div>
        <div className="owner-check-grid">
          <span>Draft product posts from catalog data</span>
          <span>Summarize new inbox leads</span>
          <span>Review slow-moving stock</span>
          <span>Prepare SEO content briefs</span>
          <span>Create service proposal outlines</span>
          <span>Track AI crawler readiness</span>
        </div>
      </article>
    </section>
  );
}

function InboxView() {
  return <DashboardLiveInbox />;
}

function OrdersView() {
  return <DashboardLiveOrders />;
}

type ProductDraft = {
  title: string;
  slug: string;
  price: string;
  comparePrice: string;
  ribbon: string;
  stock: "in" | "out";
  stockQuantity: string;
  image: string;
  galleryImages: string;
  seoTitle: string;
  seoDescription: string;
  options: string;
};

type DashboardProduct = ShopCatalogProduct & {
  id?: number;
  stockQuantity: number;
  stockStatus?: "in" | "out";
  isVisible?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  descriptionHtml?: string;
};

function draftFromProduct(product: DashboardProduct): ProductDraft {
  return {
    title: product.title,
    slug: product.slug,
    price: product.price,
    comparePrice: product.comparePrice ?? "",
    ribbon: product.ribbon ?? "",
    stock: product.stock,
    stockQuantity: String(product.stockQuantity ?? (product.stock === "out" ? 0 : 10)),
    image: product.image,
    galleryImages: product.galleryImages.join("\n"),
    seoTitle: product.seoTitle || `${product.title} | Datacom Enterprise Pte Ltd`,
    seoDescription: product.seoDescription || `Buy or enquire about ${product.title} from Datacom Enterprise Pte Ltd Singapore.`,
    options: product.options
      .map((option) => `${option.name}: ${option.values.join(", ")}`)
      .join("\n"),
  };
}

function blankProductDraft(): ProductDraft {
  return {
    title: "",
    slug: "",
    price: "SGD 0.00",
    comparePrice: "",
    ribbon: "",
    stock: "in",
    stockQuantity: "10",
    image: "",
    galleryImages: "",
    seoTitle: "",
    seoDescription: "",
    options: "",
  };
}

function parseOptions(optionsText: string) {
  return optionsText
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [name, values = ""] = line.split(":");
      return {
        name: name.trim(),
        values: values
          .split(",")
          .map((value) => value.trim())
          .filter(Boolean),
      };
    })
    .filter((option) => option.name);
}

function buildVariants(optionsText: string) {
  const options = parseOptions(optionsText).filter((option) => option.values.length > 0);
  if (options.length === 0) return [];

  return options
    .reduce<string[]>((variants, option) => {
      if (variants.length === 0) return option.values;
      return variants.flatMap((variant) => option.values.map((value) => `${variant} / ${value}`));
    }, [])
    .slice(0, 24);
}

const staticDashboardProducts: DashboardProduct[] = shopCatalog.map((product) => ({
  ...product,
  stockQuantity: product.stock === "out" ? 0 : 10,
}));

function normalizeDashboardProduct(product: Partial<DashboardProduct>): DashboardProduct {
  const title = product.title || "Untitled product";
  const slug = product.slug || title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const galleryImages = Array.isArray(product.galleryImages) ? product.galleryImages.filter(Boolean) : [];
  const image = product.image || galleryImages[0] || "";
  const stockQuantity = Number(product.stockQuantity ?? 0);

  return {
    title,
    slug,
    price: product.price || "SGD 0.00",
    comparePrice: product.comparePrice || "",
    image,
    galleryImages: galleryImages.length ? galleryImages : image ? [image] : [],
    hoverImage: product.hoverImage || galleryImages[1] || image,
    productHref: product.productHref || `/product-page/${slug}`,
    stock: product.stock || (stockQuantity > 0 ? "in" : "out"),
    stockQuantity,
    ribbon: product.ribbon || "",
    sale: Boolean(product.ribbon),
    quantity: true,
    options: Array.isArray(product.options) ? product.options : [],
    id: product.id,
    isVisible: product.isVisible ?? true,
    seoTitle: product.seoTitle || "",
    seoDescription: product.seoDescription || "",
    descriptionHtml: product.descriptionHtml || "",
  };
}

function parseOptionsForPayload(optionsText: string) {
  return parseOptions(optionsText).filter((option) => option.values.length > 0);
}

function galleryLinesToArray(value: string) {
  return value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

async function fileToBase64(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const value = String(reader.result || "");
      resolve(value.includes(",") ? value.split(",")[1] : value);
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function ContentView() {
  const [products, setProducts] = useState<DashboardProduct[]>(staticDashboardProducts);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [publishState, setPublishState] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [uploadState, setUploadState] = useState<"idle" | "uploading" | "uploaded" | "error">("idle");
  const [message, setMessage] = useState("");
  const [selectedSlug, setSelectedSlug] = useState(staticDashboardProducts[0]?.slug ?? "");
  const [mode, setMode] = useState<"edit" | "add">("edit");
  const selectedProduct = products.find((product) => product.slug === selectedSlug) ?? products[0];
  const [draft, setDraft] = useState<ProductDraft>(() =>
    selectedProduct ? draftFromProduct(selectedProduct) : blankProductDraft(),
  );
  const [saved, setSaved] = useState(false);
  const galleryPreview = draft.galleryImages
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 6);
  const variants = buildVariants(draft.options);
  const totalStock = products.reduce((sum, product) => sum + Number(product.stockQuantity || 0), 0);
  const lowStockProducts = products.filter((product) => product.stockQuantity > 0 && product.stockQuantity < 5);
  const outOfStockProducts = products.filter((product) => product.stockQuantity <= 0 || product.stock === "out");

  useEffect(() => {
    let mounted = true;

    async function loadProducts() {
      try {
        const response = await fetch(`${getApiBase()}/admin/products`, { cache: "no-store", credentials: "include" });
        if (!response.ok) throw new Error(`Products API returned ${response.status}`);
        const payload = await response.json() as { products?: Partial<DashboardProduct>[] };
        const apiProducts = (payload.products || []).map(normalizeDashboardProduct);
        if (!mounted || !apiProducts.length) return;
        setProducts(apiProducts);
        setSelectedSlug((current) => (apiProducts.some((product) => product.slug === current) ? current : apiProducts[0].slug));
        if (mode === "edit") setDraft(draftFromProduct(apiProducts[0]));
      } catch {
        if (mounted) setMessage("Products API not connected yet. Showing current site catalog fallback.");
      } finally {
        if (mounted) setLoadingProducts(false);
      }
    }

    loadProducts();
    return () => {
      mounted = false;
    };
  }, []);

  function selectProduct(product: ShopCatalogProduct) {
    setMode("edit");
    setSelectedSlug(product.slug);
    setDraft(draftFromProduct(product));
    setSaved(false);
  }

  function updateDraft<Key extends keyof ProductDraft>(key: Key, value: ProductDraft[Key]) {
    setDraft((current) => ({ ...current, [key]: value }));
    setSaved(false);
  }

  function saveDraft() {
    window.localStorage.setItem(
      "datacom-product-draft",
      JSON.stringify({ mode, selectedSlug, draft, savedAt: new Date().toISOString() }),
    );
    setSaved(true);
  }

  async function publishProduct() {
    setPublishState("saving");
    setMessage("");
    try {
      const response = await fetch(`${getApiBase()}/admin/products`, {
        method: "POST",
        credentials: "include",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          title: draft.title,
          slug: draft.slug,
          price: draft.price,
          comparePrice: draft.comparePrice,
          ribbon: draft.ribbon,
          stock: Number(draft.stockQuantity || 0) <= 0 ? "out" : draft.stock,
          stockQuantity: Number(draft.stockQuantity || 0),
          image: draft.image,
          galleryImages: galleryLinesToArray(draft.galleryImages),
          seoTitle: draft.seoTitle,
          seoDescription: draft.seoDescription,
          options: parseOptionsForPayload(draft.options),
        }),
      });
      if (!response.ok) throw new Error(`Save failed ${response.status}`);
      const payload = await response.json() as { product: Partial<DashboardProduct> };
      const savedProduct = normalizeDashboardProduct(payload.product);
      setProducts((current) => {
        const withoutSaved = current.filter((product) => product.slug !== savedProduct.slug);
        return [savedProduct, ...withoutSaved];
      });
      setMode("edit");
      setSelectedSlug(savedProduct.slug);
      setDraft(draftFromProduct(savedProduct));
      setSaved(false);
      setPublishState("saved");
      setMessage("Product saved to database. Website will show this data from the product API.");
    } catch {
      setPublishState("error");
      setMessage("Product save failed. Check owner login, POSTGRES_URL, and deployment environment variables.");
    }
  }

  async function deleteProduct() {
    if (!selectedProduct || !window.confirm(`Delete ${selectedProduct.title}?`)) return;
    setPublishState("saving");
    setMessage("");
    try {
      const response = await fetch(`${getApiBase()}/admin/products?slug=${encodeURIComponent(selectedProduct.slug)}`, {
        credentials: "include",
        method: "DELETE",
      });
      if (!response.ok) throw new Error(`Delete failed ${response.status}`);
      const nextProducts = products.filter((product) => product.slug !== selectedProduct.slug);
      setProducts(nextProducts);
      const nextProduct = nextProducts[0];
      setSelectedSlug(nextProduct?.slug ?? "");
      setDraft(nextProduct ? draftFromProduct(nextProduct) : blankProductDraft());
      setMode(nextProduct ? "edit" : "add");
      setPublishState("saved");
      setMessage("Product deleted from database.");
    } catch {
      setPublishState("error");
      setMessage("Delete failed. Check owner login and backend connection.");
    }
  }

  async function uploadImage(event: ChangeEvent<HTMLInputElement>, target: "main" | "gallery") {
    const file = event.target.files?.[0];
    if (!file) return;
    setUploadState("uploading");
    setMessage("");
    try {
      const dataBase64 = await fileToBase64(file);
      const response = await fetch(`${getApiBase()}/admin/media`, {
        method: "POST",
        credentials: "include",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          contentType: file.type,
          dataBase64,
          fileName: file.name,
        }),
      });
      if (!response.ok) throw new Error(`Upload failed ${response.status}`);
      const payload = await response.json() as { imageUrl: string };
      if (target === "main") {
        updateDraft("image", payload.imageUrl);
        const currentGallery = galleryLinesToArray(draft.galleryImages);
        updateDraft("galleryImages", [payload.imageUrl, ...currentGallery.filter((image) => image !== payload.imageUrl)].join("\n"));
      } else {
        updateDraft("galleryImages", [...galleryLinesToArray(draft.galleryImages), payload.imageUrl].join("\n"));
      }
      setUploadState("uploaded");
      setMessage("Image uploaded to GitHub. Vercel will publish the new file after the next deploy.");
    } catch {
      setUploadState("error");
      setMessage("Image upload failed. Add GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO, and GITHUB_BRANCH in Vercel.");
    } finally {
      event.target.value = "";
    }
  }

  function setMainImage(image: string) {
    updateDraft("image", image);
    updateDraft(
      "galleryImages",
      [image, ...galleryLinesToArray(draft.galleryImages).filter((galleryImage) => galleryImage !== image)].join("\n"),
    );
  }

  function removeGalleryImage(image: string) {
    const nextGallery = galleryLinesToArray(draft.galleryImages).filter((galleryImage) => galleryImage !== image);
    updateDraft("galleryImages", nextGallery.join("\n"));
    if (draft.image === image) {
      updateDraft("image", nextGallery[0] ?? "");
    }
  }

  return (
    <section className="dashboard-section">
      <div className="dashboard-grid three">
        <article className="owner-metric blue"><span>Total products</span><strong>{products.length}</strong><small>{loadingProducts ? "Loading database" : "Database/catalog"}</small></article>
        <article className="owner-metric green"><span>Total stock</span><strong>{totalStock}</strong><small>Available quantity</small></article>
        <article className={lowStockProducts.length ? "owner-metric red" : "owner-metric gray"}><span>Low stock</span><strong>{lowStockProducts.length}</strong><small>Less than 5 units</small></article>
      </div>
      {message ? <p className={publishState === "error" || uploadState === "error" ? "owner-login-error" : "owner-success"}>{message}</p> : null}
      <div className="catalog-studio easy-catalog-studio">
        <aside className="owner-panel catalog-list-panel easy-catalog-list">
          <div className="owner-panel-heading">
            <div>
              <span className="owner-kicker">Catalog Studio</span>
              <h3>Products</h3>
            </div>
            <span className="owner-chip">{outOfStockProducts.length} out</span>
            <button
              type="button"
              className="owner-primary small"
              onClick={() => {
                setMode("add");
                setDraft(blankProductDraft());
                setSaved(false);
              }}
            >
              Add Product
            </button>
          </div>
          <div className="content-product-list">
            {products.slice(0, 40).map((product) => (
              <button
                type="button"
                className={product.slug === selectedSlug && mode === "edit" ? "content-product active" : "content-product"}
                key={product.slug}
                onClick={() => selectProduct(product)}
              >
                <img src={product.image} alt={product.title} />
                <span>
                  <strong>{product.title}</strong>
                  <small>{product.price} - Stock {product.stockQuantity}</small>
                </span>
              </button>
            ))}
          </div>
        </aside>

        <div className="catalog-editor easy-catalog-editor">
          <article className="owner-panel catalog-editor-hero easy-editor-header">
            <div className="owner-panel-heading">
              <div>
                <span className="owner-kicker">{mode === "add" ? "New product" : "Editing product"}</span>
                <h3>{draft.title || "Untitled product"}</h3>
              </div>
              <div className="owner-actions">
                {mode === "edit" && selectedProduct ? (
                  <Link className="owner-secondary" href={selectedProduct.productHref}>View product</Link>
                ) : null}
                <button type="button" className="owner-primary" onClick={saveDraft}>
                  Save Draft
                </button>
                <button type="button" className="owner-primary" onClick={publishProduct} disabled={publishState === "saving"}>
                  {publishState === "saving" ? "Publishing..." : "Publish"}
                </button>
                {mode === "edit" ? (
                  <button type="button" className="owner-secondary danger" onClick={deleteProduct} disabled={publishState === "saving"}>
                    Delete
                  </button>
                ) : null}
              </div>
            </div>
            {saved ? (
              <p className="owner-success">Draft saved in this browser. Backend publishing is the next step.</p>
            ) : (
              <p className="owner-note">Publish saves the product, stock, SEO fields, and image paths to PostgreSQL.</p>
            )}
          </article>

          <div className="easy-editor-sections">
            <article className="owner-panel easy-media-panel">
              <div className="owner-panel-heading">
                <div>
                  <span className="owner-kicker">Images and videos</span>
                  <h3>Product media</h3>
                </div>
              </div>
              <div className="catalog-image-preview media-upload-card">
                {draft.image ? <img src={draft.image} alt={draft.title || "Product main image"} /> : <span>No main image</span>}
                <label className="media-add-button" title={draft.image ? "Change main image" : "Add main image"}>
                  <span aria-hidden="true">+</span>
                  <input className="sr-only" type="file" accept="image/*" onChange={(event) => uploadImage(event, "main")} />
                </label>
              </div>
              <div className="catalog-gallery-row media-gallery-row">
                {galleryPreview.length > 0 ? (
                  galleryPreview.map((image) => (
                    <div className={image === draft.image ? "media-thumb active" : "media-thumb"} key={image}>
                      <button type="button" onClick={() => setMainImage(image)} title="Use as main image">
                        <img src={image} alt="" />
                      </button>
                      <button
                        type="button"
                        className="media-remove-button"
                        onClick={() => removeGalleryImage(image)}
                        aria-label="Remove image"
                      >
                        x
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="owner-empty">No gallery images added.</div>
                )}
                <label className="media-thumb media-gallery-add" title="Add gallery image">
                  <span aria-hidden="true">+</span>
                  <input className="sr-only" type="file" accept="image/*" onChange={(event) => uploadImage(event, "gallery")} />
                </label>
              </div>
              <p className="owner-note media-upload-note">
                {uploadState === "uploading"
                  ? "Uploading image to GitHub..."
                  : "Click + to add or change product images. Links are stored automatically."}
              </p>
            </article>

            <article className="owner-panel easy-info-panel">
              <div className="owner-panel-heading">
                <div>
                  <span className="owner-kicker">Product info</span>
                  <h3>Basic info</h3>
                </div>
              </div>
              <div className="owner-form-grid">
                <label className="owner-field">
                  <span>Name</span>
                  <input value={draft.title} onChange={(event) => updateDraft("title", event.target.value)} />
                </label>
                <label className="owner-field">
                  <span>Slug</span>
                  <input value={draft.slug} onChange={(event) => updateDraft("slug", event.target.value)} />
                </label>
                <label className="owner-field">
                  <span>Price</span>
                  <input value={draft.price} onChange={(event) => updateDraft("price", event.target.value)} />
                </label>
                <label className="owner-field">
                  <span>Compare price</span>
                  <input value={draft.comparePrice} onChange={(event) => updateDraft("comparePrice", event.target.value)} />
                </label>
                <label className="owner-field">
                  <span>Ribbon</span>
                  <input value={draft.ribbon} onChange={(event) => updateDraft("ribbon", event.target.value)} placeholder="SALE, New Arrival..." />
                </label>
                <label className="owner-field">
                  <span>Status</span>
                  <select value={draft.stock} onChange={(event) => updateDraft("stock", event.target.value as ProductDraft["stock"])}>
                    <option value="in">In stock</option>
                    <option value="out">Out of stock</option>
                  </select>
                </label>
                <label className="owner-field">
                  <span>Stock quantity</span>
                  <input type="number" min="0" value={draft.stockQuantity} onChange={(event) => updateDraft("stockQuantity", event.target.value)} />
                  <small>{Number(draft.stockQuantity || 0) < 5 ? "Low stock alert will show in dashboard." : "Available stock count."}</small>
                </label>
              </div>
            </article>
          </div>

          <div className="easy-editor-sections">
            <article className="owner-panel easy-options-panel">
              <div className="owner-panel-heading">
                <div>
                  <span className="owner-kicker">Product options</span>
                  <h3>Options and variants</h3>
                </div>
              </div>
              <label className="owner-field">
                <span>Options format: Name: Value, Value</span>
                <textarea value={draft.options} onChange={(event) => updateDraft("options", event.target.value)} />
              </label>
              <div className="variant-preview">
                <div className="variant-preview-head">
                  <span>Variant</span>
                  <span>Status</span>
                  <span>Visibility</span>
                </div>
                {variants.length > 0 ? (
                  variants.map((variant) => (
                    <div className="variant-preview-row" key={variant}>
                      <span>{variant}</span>
                      <span>{draft.stock === "in" ? "In stock" : "Out of stock"}</span>
                      <span>Visible</span>
                    </div>
                  ))
                ) : (
                  <div className="owner-empty">No variants. Add options above to generate variants.</div>
                )}
              </div>
            </article>

            <article className="owner-panel easy-seo-panel">
              <div className="owner-panel-heading">
                <div>
                  <span className="owner-kicker">Marketing & SEO</span>
                  <h3>Product SEO fields</h3>
                </div>
              </div>
              <label className="owner-field">
                <span>SEO title</span>
                <input value={draft.seoTitle} onChange={(event) => updateDraft("seoTitle", event.target.value)} />
              </label>
              <label className="owner-field">
                <span>SEO description</span>
                <textarea value={draft.seoDescription} onChange={(event) => updateDraft("seoDescription", event.target.value)} />
              </label>
              <div className="owner-check-grid compact">
                <span>Create coupon</span>
                <span>Promote product</span>
                <span>Edit SEO settings</span>
                <span>Product performance</span>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  );
}

function AnalyticsView() {
  return <DashboardLiveAnalytics />;
}

function SecurityView() {
  return (
    <section className="dashboard-section">
      <article className="owner-panel">
        <div className="owner-panel-heading">
          <div>
            <span className="owner-kicker">Security</span>
            <h3>Launch checklist</h3>
          </div>
        </div>
        <div className="owner-list">
          {securityChecks.map((check) => (
            <div className="owner-list-row" key={check.label}>
              <strong>{check.label}</strong>
              <span>{check.status}</span>
            </div>
          ))}
        </div>
      </article>
      <article className="owner-panel">
        <div className="owner-panel-heading">
          <div>
            <span className="owner-kicker">Backend required</span>
            <h3>To make this production-secure</h3>
          </div>
        </div>
        <div className="owner-check-grid">
          <span>Admin login with owner and staff roles</span>
          <span>Encrypted database for leads, orders, and audit logs</span>
          <span>Email provider for notifications and replies</span>
          <span>Rate limiting and spam protection on public forms</span>
          <span>Analytics event collection with privacy controls</span>
          <span>Daily backup and export controls</span>
        </div>
      </article>
    </section>
  );
}

export function DashboardControl() {
  const [activeSection, setActiveSection] = useState<DashboardSection>("home");
  const current = sections.find((section) => section.id === activeSection) ?? sections[0];

  return (
    <main className="owner-dashboard">
      <aside className="owner-sidebar" aria-label="Dashboard sections">
        <Link className="owner-brand" href="/">
          <img src="/assets/datacom-logo.png" alt="Datacom Enterprise Pte Ltd" />
          <span>Owner Control</span>
        </Link>
        <button type="button" className="owner-quick-actions" onClick={() => setActiveSection("home")}>
          Quick Actions
        </button>
        <nav>
          {sections.map((section) => (
            <button
              type="button"
              className={section.id === activeSection ? "active" : ""}
              key={section.id}
              onClick={() => setActiveSection(section.id)}
            >
              <strong>
                {section.label}
                {section.badge ? <em>{section.badge}</em> : null}
              </strong>
              <span>{section.detail}</span>
            </button>
          ))}
        </nav>
      </aside>
      <section className="owner-main">
        <header className="owner-topbar">
          <div>
            <span className="owner-kicker">Datacom Enterprise Pte Ltd</span>
            <h1>{current.label}</h1>
            <p>{current.detail}</p>
          </div>
          <div className="owner-top-actions">
            <label className="owner-dashboard-search">
              <span className="sr-only">Search dashboard tools</span>
              <input type="search" placeholder="Search for tools, apps, help and more..." />
            </label>
            <DashboardTopNotifications onOpenInbox={() => setActiveSection("inbox")} />
            <a href="/shop">Open Site</a>
            <button type="button">Owner Mode</button>
            <form action="/dashboard-logout" method="post">
              <button type="submit">Logout</button>
            </form>
          </div>
        </header>

        {activeSection === "home" ? <HomeView onSelectSection={setActiveSection} /> : null}
        {activeSection === "ai" ? <AiView /> : null}
        {activeSection === "seo" ? <SeoView /> : null}
        {activeSection === "migration" ? <MigrationView /> : null}
        {activeSection === "inbox" ? <InboxView /> : null}
        {activeSection === "orders" ? <OrdersView /> : null}
        {activeSection === "content" ? <ContentView /> : null}
        {activeSection === "analytics" ? <AnalyticsView /> : null}
        {activeSection === "security" ? <SecurityView /> : null}
      </section>
    </main>
  );
}
