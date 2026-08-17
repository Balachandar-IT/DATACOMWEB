import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { legacyCategories, legacyCategoryBySlug } from "../../legacy-content";
import { absoluteUrl } from "../../seo-utils";
import { SimplePageShell } from "../../simple-page-shell";
import { shopCatalog } from "../../shop-catalog";

type CategoryPageProps = {
  params?: {
    slug?: string;
  };
};

export function generateStaticParams() {
  return legacyCategories.map((category) => ({ slug: category.slug }));
}

function getCategoryProducts(slug: string) {
  const category = legacyCategoryBySlug[slug];
  if (!category) return [];
  if (!category.keywords.length) return shopCatalog.slice(0, 24);

  const terms = category.keywords.map((keyword) => keyword.toLowerCase());
  return shopCatalog
    .filter((product) => {
      const haystack = `${product.title} ${product.slug}`.toLowerCase();
      return terms.some((term) => haystack.includes(term));
    })
    .slice(0, 24);
}

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  const category = params?.slug ? legacyCategoryBySlug[params.slug] : undefined;
  if (!category) return {};

  return {
    title: `${category.title} Products | Datacom Enterprise Pte Ltd`,
    description: category.description,
    alternates: {
      canonical: absoluteUrl(`/category/${category.slug}`),
    },
    openGraph: {
      title: `${category.title} Products`,
      description: category.description,
      type: "website",
      url: absoluteUrl(`/category/${category.slug}`),
    },
    twitter: {
      card: "summary",
      title: `${category.title} Products`,
      description: category.description,
    },
  };
}

export default function LegacyCategoryPage({ params }: CategoryPageProps) {
  const category = params?.slug ? legacyCategoryBySlug[params.slug] : undefined;
  if (!category) notFound();

  const products = getCategoryProducts(category.slug);

  return (
    <SimplePageShell active="Shop">
      <section className="simple-hero legacy-hero">
        <span className="legacy-kicker">Product category</span>
        <h1>{category.title}</h1>
        <p>{category.description}</p>
        <a className="legacy-primary-link" href="/shop">
          Browse all products
        </a>
      </section>

      <section className="legacy-product-grid" aria-label={`${category.title} products`}>
        {products.map((product) => (
          <a className="legacy-product-card" href={product.productHref} key={product.slug}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.price}</span>
          </a>
        ))}
      </section>
    </SimplePageShell>
  );
}
