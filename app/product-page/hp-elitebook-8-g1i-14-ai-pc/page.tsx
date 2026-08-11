import type { Metadata } from "next";
import { SimplePageShell } from "../../simple-page-shell";
import { ProductDetailView } from "../../product-detail-view";
import { shopCatalogBySlug } from "../../shop-catalog";
import { absoluteUrl, productStructuredData } from "../../seo-utils";

const product = shopCatalogBySlug["hp-elitebook-8-g1i-14-ai-pc"];
const structuredData = productStructuredData(product.slug);

export const metadata: Metadata = {
  title: `${product.title} | Datacom Enterprise Pte Ltd`,
  description: `${product.title} from Datacom Enterprise Pte Ltd Singapore. ${product.price}, excluding sales tax. Choose processor and storage options online.`,
  alternates: {
    canonical: absoluteUrl(product.productHref),
  },
  openGraph: {
    title: product.title,
    description: `${product.title} from Datacom Enterprise Pte Ltd Singapore.`,
    images: [absoluteUrl(product.image)],
    type: "website",
    url: absoluteUrl(product.productHref),
  },
  twitter: {
    card: "summary_large_image",
    title: product.title,
    description: `${product.title} from Datacom Enterprise Pte Ltd Singapore.`,
    images: [absoluteUrl(product.image)],
  },
};

export default function HpEliteBookProductPage() {
  return (
    <SimplePageShell active="Shop">
      {structuredData ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      ) : null}
      <ProductDetailView
        cartHref={`/cart-page?slug=${product.slug}`}
        hasLaptopOptions
        image={product.image}
        images={product.galleryImages}
        options={product.options}
        price={product.price}
        title={product.title}
      />
    </SimplePageShell>
  );
}
