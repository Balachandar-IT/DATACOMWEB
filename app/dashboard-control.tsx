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
    "Set dashboard username, password, and auth secret in Vercel",
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
            <form action="/dashboard-logout" method="post">
              <button type="submit">Logout</button>
            </form>
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
