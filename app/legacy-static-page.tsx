import type { Metadata } from "next";
import { legacyPageBySlug } from "./legacy-content";
import { absoluteUrl } from "./seo-utils";
import { SimplePageShell } from "./simple-page-shell";

export function legacyMetadata(slug: string): Metadata {
  const page = legacyPageBySlug[slug];

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

export function LegacyStaticPage({ slug }: { slug: string }) {
  const page = legacyPageBySlug[slug];

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
