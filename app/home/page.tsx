import type { Metadata } from "next";
import { legacyPageBySlug } from "../legacy-content";
import { absoluteUrl } from "../seo-utils";
import { SimplePageShell } from "../simple-page-shell";

const page = legacyPageBySlug.home;

export const metadata: Metadata = {
  title: `${page.title} | Datacom Enterprise Pte Ltd`,
  description: page.description,
  alternates: {
    canonical: absoluteUrl("/home"),
  },
  openGraph: {
    title: page.title,
    description: page.description,
    type: "website",
    url: absoluteUrl("/home"),
  },
  twitter: {
    card: "summary",
    title: page.title,
    description: page.description,
  },
};

export default function LegacyHomePage() {
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
