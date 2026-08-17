import { LegacyStaticPage, legacyMetadata } from "../legacy-static-page";

export const metadata = legacyMetadata("accessories");

export default function AccessoriesPage() {
  return <LegacyStaticPage slug="accessories" />;
}
