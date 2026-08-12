"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { BackendStatus } from "./backend-status";
import {
  DashboardLiveAnalytics,
  DashboardLiveHome,
  DashboardLiveInbox,
  DashboardLiveOrders,
} from "./dashboard-live";
import {
  aiVisibility,
  securityChecks,
  seoTasks,
  seoTools,
} from "./dashboard-data";
import { shopCatalog, type ShopCatalogProduct } from "./shop-catalog";

type DashboardSection =
  | "home"
  | "seo"
  | "inbox"
  | "orders"
  | "content"
  | "analytics"
  | "security";

const sections: Array<{ id: DashboardSection; label: string; detail: string }> = [
  { id: "home", label: "Home", detail: "Site status and owner next steps" },
  { id: "seo", label: "SEO & GEO", detail: "Search, AI visibility, sitemap" },
  { id: "inbox", label: "Inbox", detail: "Website messages and replies" },
  { id: "orders", label: "Orders", detail: "Sales and checkout requests" },
  { id: "content", label: "Content Control", detail: "Products, pages, images" },
  { id: "analytics", label: "Analytics", detail: "Live users, devices, location" },
  { id: "security", label: "Security", detail: "Access, spam, audit logs" },
];

function HomeView() {
  const setupItems = [
    "Connect email provider for instant customer query email alerts",
    "Connect email provider for customer query notifications and replies",
    "Add owner login before publishing this dashboard",
    "Connect payment provider for completed paid orders",
    "Connect Google Search Console API to import impressions, clicks, queries, and indexed URLs",
  ];

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

      <div className="dashboard-grid two">
        <article className="owner-panel">
          <div className="owner-panel-heading">
            <div>
              <span className="owner-kicker">Quick actions</span>
              <h3>Control areas</h3>
            </div>
          </div>
          <div className="owner-action-grid">
            <button type="button">SEO setup</button>
            <button type="button">Inbox setup</button>
            <button type="button">Catalog control</button>
            <button type="button">Security setup</button>
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
            <div className="owner-list-row"><strong>Email notifications</strong><span>Not connected</span></div>
            <div className="owner-list-row"><strong>Live analytics</strong><span>Connected</span></div>
            <div className="owner-list-row"><strong>Search Console</strong><span>Verified</span></div>
            <div className="owner-list-row"><strong>Admin authentication</strong><span>Not connected</span></div>
          </div>
        </article>
      </div>

      <div className="dashboard-grid two">
        <article className="owner-panel">
          <div className="owner-panel-heading">
            <div>
              <span className="owner-kicker">Activity feed</span>
              <h3>Recent updates</h3>
            </div>
          </div>
          <div className="owner-empty">
            No real activity records yet. Once backend logging is connected, content edits, new leads,
            orders, SEO updates, and admin actions will appear here.
          </div>
        </article>

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
      </div>
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
  image: string;
  galleryImages: string;
  seoTitle: string;
  seoDescription: string;
  options: string;
};

function draftFromProduct(product: ShopCatalogProduct): ProductDraft {
  return {
    title: product.title,
    slug: product.slug,
    price: product.price,
    comparePrice: product.comparePrice ?? "",
    ribbon: product.ribbon ?? "",
    stock: product.stock,
    image: product.image,
    galleryImages: product.galleryImages.join("\n"),
    seoTitle: `${product.title} | Datacom Enterprise Pte Ltd`,
    seoDescription: `Buy or enquire about ${product.title} from Datacom Enterprise Pte Ltd Singapore.`,
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

function ContentView() {
  const products = useMemo(() => shopCatalog, []);
  const [selectedSlug, setSelectedSlug] = useState(products[0]?.slug ?? "");
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

  return (
    <section className="dashboard-section">
      <div className="dashboard-grid three">
        <article className="owner-metric blue"><span>Total products</span><strong>{shopCatalog.length}</strong></article>
        <article className="owner-metric green"><span>Editable pages</span><strong>Not connected</strong></article>
        <article className="owner-metric gray"><span>Media uploads</span><strong>Not connected</strong></article>
      </div>
      <div className="catalog-studio">
        <aside className="owner-panel catalog-list-panel">
          <div className="owner-panel-heading">
            <div>
              <span className="owner-kicker">Catalog Studio</span>
              <h3>Products</h3>
            </div>
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
                  <small>{product.price}</small>
                </span>
              </button>
            ))}
          </div>
        </aside>

        <div className="catalog-editor">
          <article className="owner-panel catalog-editor-hero">
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
              </div>
            </div>
            {saved ? (
              <p className="owner-success">Draft saved in this browser. Backend publishing is the next step.</p>
            ) : (
              <p className="owner-note">Changes here do not touch code. They are prepared as dashboard drafts until database publishing is connected.</p>
            )}
          </article>

          <div className="dashboard-grid two">
            <article className="owner-panel">
              <div className="owner-panel-heading">
                <div>
                  <span className="owner-kicker">Images and videos</span>
                  <h3>Product media</h3>
                </div>
              </div>
              <div className="catalog-image-preview">
                {draft.image ? <img src={draft.image} alt={draft.title || "Product main image"} /> : <span>No main image</span>}
              </div>
              <div className="catalog-gallery-row">
                {galleryPreview.length > 0 ? (
                  galleryPreview.map((image) => <img src={image} alt="" key={image} />)
                ) : (
                  <div className="owner-empty">No gallery images added.</div>
                )}
              </div>
              <label className="owner-field">
                <span>Main image URL</span>
                <input value={draft.image} onChange={(event) => updateDraft("image", event.target.value)} />
              </label>
              <label className="owner-field">
                <span>Gallery image URLs, one per line</span>
                <textarea value={draft.galleryImages} onChange={(event) => updateDraft("galleryImages", event.target.value)} />
              </label>
            </article>

            <article className="owner-panel">
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
              </div>
            </article>
          </div>

          <div className="dashboard-grid two">
            <article className="owner-panel">
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

            <article className="owner-panel">
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

          <div className="owner-panel-heading">
            <div>
              <span className="owner-kicker">Publishing status</span>
              <h3>No-code goal</h3>
            </div>
          </div>
          <div className="owner-panel">
            <div className="owner-check-grid compact">
              <span>Add product from dashboard</span>
              <span>Edit product from dashboard</span>
              <span>Manage images from dashboard</span>
              <span>Backend publish still needs database and storage</span>
            </div>
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
        <nav>
          {sections.map((section) => (
            <button
              type="button"
              className={section.id === activeSection ? "active" : ""}
              key={section.id}
              onClick={() => setActiveSection(section.id)}
            >
              <strong>{section.label}</strong>
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
            <a href="/shop">Open Site</a>
            <button type="button">Owner Mode</button>
          </div>
        </header>

        {activeSection === "home" ? <HomeView /> : null}
        {activeSection === "seo" ? <SeoView /> : null}
        {activeSection === "inbox" ? <InboxView /> : null}
        {activeSection === "orders" ? <OrdersView /> : null}
        {activeSection === "content" ? <ContentView /> : null}
        {activeSection === "analytics" ? <AnalyticsView /> : null}
        {activeSection === "security" ? <SecurityView /> : null}
      </section>
    </main>
  );
}
