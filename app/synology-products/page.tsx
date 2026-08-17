import { LegacyStaticPage, legacyMetadata } from "../legacy-static-page";

export const metadata = legacyMetadata("synology-products");

export default function SynologyProductsPage() {
  return <LegacyStaticPage slug="synology-products" />;
}
