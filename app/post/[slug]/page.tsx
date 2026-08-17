import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { legacyPostBySlug, legacyPosts } from "../../legacy-content";
import { absoluteUrl } from "../../seo-utils";
import { SimplePageShell } from "../../simple-page-shell";

type BlogPostPageProps = {
  params?: {
    slug?: string;
  };
};

export function generateStaticParams() {
  return legacyPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = params?.slug ? legacyPostBySlug[params.slug] : undefined;
  if (!post) return {};

  return {
    title: `${post.title} | Datacom Enterprise Pte Ltd`,
    description: post.description,
    alternates: {
      canonical: absoluteUrl(`/post/${post.slug}`),
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: absoluteUrl(`/post/${post.slug}`),
    },
    twitter: {
      card: "summary",
      title: post.title,
      description: post.description,
    },
  };
}

export default function LegacyBlogPostPage({ params }: BlogPostPageProps) {
  const post = params?.slug ? legacyPostBySlug[params.slug] : undefined;
  if (!post) notFound();

  return (
    <SimplePageShell active="Explore">
      <article className="legacy-article">
        <header>
          <span className="legacy-kicker">Datacom blog</span>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
        </header>

        <section>
          <h2>Overview</h2>
          <p>
            This guide is part of Datacom Enterprise's official resource library for {post.topic}. It keeps the
            original Wix blog URL active for SEO migration while giving visitors a clear path to relevant Datacom
            products and services.
          </p>
        </section>

        <section>
          <h2>What customers should check</h2>
          <ul>
            <li>Business requirement, capacity, and current infrastructure.</li>
            <li>Compatibility with existing servers, storage, networking, or workplace devices.</li>
            <li>Availability, support, warranty, installation, and future upgrade needs.</li>
          </ul>
        </section>

        <section>
          <h2>Next step</h2>
          <p>
            Datacom can help compare options, prepare product quotes, and recommend a suitable setup for Singapore
            businesses.
          </p>
          <a className="legacy-primary-link" href={post.relatedHref}>
            View related page
          </a>
        </section>
      </article>
    </SimplePageShell>
  );
}
