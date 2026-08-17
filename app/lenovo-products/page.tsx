import { LegacyStaticPage, legacyMetadata } from "../legacy-static-page";

export const metadata = legacyMetadata("lenovo-products");

export default function LenovoProductsPage() {
  return <LegacyStaticPage slug="lenovo-products" />;
}
