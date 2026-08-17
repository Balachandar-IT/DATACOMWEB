import { LegacyStaticPage, legacyMetadata } from "../legacy-static-page";

export const metadata = legacyMetadata("promotion");

export default function PromotionPage() {
  return <LegacyStaticPage slug="promotion" />;
}
