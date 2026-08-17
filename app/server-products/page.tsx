import { LegacyStaticPage, legacyMetadata } from "../legacy-static-page";

export const metadata = legacyMetadata("server-products");

export default function ServerProductsPage() {
  return <LegacyStaticPage slug="server-products" />;
}
