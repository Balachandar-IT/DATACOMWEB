import { LegacyStaticPage, legacyMetadata } from "../legacy-static-page";

export const metadata = legacyMetadata("apc-products");

export default function ApcProductsPage() {
  return <LegacyStaticPage slug="apc-products" />;
}
