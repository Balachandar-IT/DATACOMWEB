import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { legacyPageBySlug, legacyPages } from "../legacy-content";
import { absoluteUrl } from "../seo-utils";
import { SimplePageShell } from "../simple-page-shell";

type LegacyPathPageProps = {
  params?: {
    legacyPath?: string;
  };
};

export function generateStaticParams() {
  return legacyPages.map((page) => ({ legacyPath: page.slug }));
}

export function generateMetadata({ params }: LegacyPathPageProps): Metadata {
  const page = params?.legacyPath ? legacyPageBySlug[params.legacyPath] : undefined;
  if (!page) return {};

  return {
    title: `${page.title} | Datacom Enterprise Pte Ltd`,
    description: page.description,
    alternates: {
      canonical: absoluteUrl(`/${page.slug}`),
    },
    openGraph: {
      title: page.title,
      description: page.description,
      type: "website",
      url: absoluteUrl(`/${page.slug}`),
    },
    twitter: {
      card: "summary",
      title: page.title,
      description: page.description,
    },
  };
}

export default function LegacyPathPage({ params }: LegacyPathPageProps) {
  const page = params?.legacyPath ? legacyPageBySlug[params.legacyPath] : undefined;
  if (!page) notFound();

  return (
    <SimplePageShell active={page.active}>
      <section className="simple-hero legacy-hero">
        <span className="legacy-kicker">Datacom official URL</span>
        <h1>{page.title}</h1>
        <p>{page.description}</p>
        <a className="legacy-primary-link" href={page.primaryHref}>
          View related products
        </a>
      </section>

      <section className="simple-card-grid">
        {page.cards.map((card) => (
          <article key={card.title}>
            <h2>{card.title}</h2>
            <p>{card.text}</p>
            {card.href ? (
              <a className="legacy-card-link" href={card.href}>
                Open
              </a>
            ) : null}
          </article>
        ))}
      </section>
    </SimplePageShell>
  );
}
