import { LegacyStaticPage, legacyMetadata } from "../legacy-static-page";

export const metadata = legacyMetadata("hp-products");

export default function HpProductsPage() {
  return <LegacyStaticPage slug="hp-products" />;
}
