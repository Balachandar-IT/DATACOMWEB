import { shopCatalog } from "../shop-catalog";
import { absoluteUrl, staticSeoPaths } from "../seo-utils";

export const dynamic = "force-static";

export function GET() {
  const today = new Date().toISOString();
  const urls = [
    ...staticSeoPaths.map((path) => ({ loc: absoluteUrl(path), priority: path === "/" ? "1.0" : "0.8" })),
    ...shopCatalog.map((product) => ({ loc: absoluteUrl(product.productHref), priority: "0.7" })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls
      .map(
        (url) =>
          `  <url><loc>${url.loc}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>${url.priority}</priority></url>`,
      )
      .join("\n") +
    `\n</urlset>`;

  return new Response(body, {
    headers: {
      "content-type": "application/xml; charset=utf-8",
    },
  });
}
