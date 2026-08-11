import { shopCatalog } from "../shop-catalog";
import { absoluteUrl, siteUrl, staticSeoPaths } from "../seo-utils";

export const dynamic = "force-static";

export function GET() {
  const featuredProducts = shopCatalog.slice(0, 30);
  const body = [
    "# Datacom Enterprise Pte Ltd",
    "",
    "Datacom Enterprise Pte Ltd provides IT infrastructure products and services in Singapore, including business IT products, data center products, TOUGH server racks, AI workstations, Synology storage, HPE servers, UPS systems, installation, relocation, and support.",
    "",
    "## Site",
    siteUrl,
    "",
    "## Important Pages",
    ...staticSeoPaths.map((path) => `- ${absoluteUrl(path)}`),
    "",
    "## Product Pages",
    ...featuredProducts.map((product) => `- ${product.title}: ${absoluteUrl(product.productHref)}`),
    "",
    "## Contact",
    "Email: info@dcom.com.sg",
    "Phone: +65 6844 4272",
    "Address: No. 20 Lorong 21A Geylang, Datacom Enterprise Building, Singapore 388430",
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  });
}
