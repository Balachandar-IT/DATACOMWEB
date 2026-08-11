import { shopCatalog } from "./shop-catalog";

export const siteUrl = "https://datacomweb.vercel.app";

export const staticSeoPaths = [
  "/",
  "/shop",
  "/home/services",
  "/business-it-products-2",
  "/business-it-products-2-1",
  "/s-projects-side-by-side",
  "/ai-workstations",
  "/promotion-1",
  "/explore",
  "/careers",
  "/contact-10",
  "/return-and-refund-policy",
  "/terms-and-conditions",
  "/privacy-policy",
];

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function priceToNumber(price: string) {
  return Number(String(price).replace(/[^\d.]/g, "")) || 0;
}

export function productStructuredData(slug: string) {
  const product = shopCatalog.find((item) => item.slug === slug);
  if (!product) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    brand: {
      "@type": "Brand",
      name: product.title.toLowerCase().includes("tough") ? "TOUGH" : "Datacom Enterprise",
    },
    description: `Buy or enquire about ${product.title} from Datacom Enterprise Pte Ltd Singapore.`,
    image: product.galleryImages.length ? product.galleryImages : [product.image],
    name: product.title,
    offers: {
      "@type": "Offer",
      availability: product.stock === "in" ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      price: priceToNumber(product.price).toFixed(2),
      priceCurrency: "SGD",
      url: absoluteUrl(product.productHref),
    },
    url: absoluteUrl(product.productHref),
  };
}

export function organizationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    address: {
      "@type": "PostalAddress",
      addressCountry: "SG",
      addressLocality: "Singapore",
      postalCode: "388430",
      streetAddress: "No. 20 Lorong 21A Geylang",
    },
    email: "info@dcom.com.sg",
    logo: absoluteUrl("/assets/datacom-logo.png"),
    name: "Datacom Enterprise Pte Ltd",
    telephone: "+65 6844 4272",
    url: siteUrl,
  };
}
