import { LegacyStaticPage, legacyMetadata } from "../legacy-static-page";

export const metadata = legacyMetadata("product-category-1");

export default function ProductCategoryOnePage() {
  return <LegacyStaticPage slug="product-category-1" />;
}
