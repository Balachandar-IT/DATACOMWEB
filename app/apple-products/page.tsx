import { LegacyStaticPage, legacyMetadata } from "../legacy-static-page";

export const metadata = legacyMetadata("apple-products");

export default function AppleProductsPage() {
  return <LegacyStaticPage slug="apple-products" />;
}
