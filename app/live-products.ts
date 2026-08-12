import { shopCatalog, shopCatalogBySlug, shopCatalogPages, type ShopCatalogProduct } from "./shop-catalog";

type ApiProduct = Partial<ShopCatalogProduct> & {
  stockQuantity?: number;
};

const fallbackPageSize = shopCatalogPages[0]?.length || 24;

function apiBase() {
  const configured = process.env.NEXT_PUBLIC_BACKEND_URL;
  if (configured) return configured.replace(/\/$/, "");
  return process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}/api` : "";
}

function normalizeProduct(product: ApiProduct): ShopCatalogProduct {
  const title = product.title || "Datacom Product";
  const slug = product.slug || title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const galleryImages = Array.isArray(product.galleryImages) ? product.galleryImages.filter(Boolean) : [];
  const image = product.image || galleryImages[0] || "/assets/vendor/file-1e8c79e7e15f.png";

  return {
    title,
    slug,
    price: product.price || "SGD 0.00",
    comparePrice: product.comparePrice || "",
    image,
    galleryImages: galleryImages.length ? galleryImages : [image],
    hoverImage: product.hoverImage || galleryImages[1] || image,
    productHref: product.productHref || `/product-page/${slug}`,
    stock: product.stock || (Number(product.stockQuantity || 0) > 0 ? "in" : "out"),
    ribbon: product.ribbon || "",
    sale: Boolean(product.ribbon),
    quantity: true,
    options: Array.isArray(product.options) ? product.options : [],
  };
}

export async function getLiveCatalog() {
  const base = apiBase();
  if (!base) return shopCatalog;

  try {
    const response = await fetch(`${base}/products`, { cache: "no-store" });
    if (!response.ok) throw new Error(`Products API returned ${response.status}`);
    const payload = (await response.json()) as { products?: ApiProduct[] };
    const products = (payload.products || []).map(normalizeProduct);
    return products.length ? products : shopCatalog;
  } catch {
    return shopCatalog;
  }
}

export async function getLiveCatalogPages() {
  const products = await getLiveCatalog();
  if (products === shopCatalog) return shopCatalogPages;

  const pages: ShopCatalogProduct[][] = [];
  for (let index = 0; index < products.length; index += fallbackPageSize) {
    pages.push(products.slice(index, index + fallbackPageSize));
  }
  return pages.length ? pages : shopCatalogPages;
}

export async function getLiveProduct(slug?: string) {
  if (!slug) return undefined;
  const products = await getLiveCatalog();
  return products.find((product) => product.slug === slug) ?? shopCatalogBySlug[slug];
}
