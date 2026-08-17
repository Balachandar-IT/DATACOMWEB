import { LegacyStaticPage, legacyMetadata } from "../legacy-static-page";

export const metadata = legacyMetadata("all-products");

export default function AllProductsPage() {
  return <LegacyStaticPage slug="all-products" />;
}
