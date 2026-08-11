import { siteUrl } from "../seo-utils";

export const dynamic = "force-static";

export function GET() {
  return new Response(
    [
      "User-agent: *",
      "Allow: /",
      "Disallow: /dashboard",
      `Sitemap: ${siteUrl}/sitemap.xml`,
      "",
    ].join("\n"),
    {
      headers: {
        "content-type": "text/plain; charset=utf-8",
      },
    },
  );
}
