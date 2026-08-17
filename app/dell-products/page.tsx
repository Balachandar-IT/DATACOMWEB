import { LegacyStaticPage, legacyMetadata } from "../legacy-static-page";

export const metadata = legacyMetadata("dell-products");

export default function DellProductsPage() {
  return <LegacyStaticPage slug="dell-products" />;
}
