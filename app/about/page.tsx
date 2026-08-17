import { LegacyStaticPage, legacyMetadata } from "../legacy-static-page";

export const metadata = legacyMetadata("about");

export default function AboutPage() {
  return <LegacyStaticPage slug="about" />;
}
