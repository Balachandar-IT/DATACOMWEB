import type { Metadata, Viewport } from "next";
import { AnalyticsTracker } from "./analytics-tracker";
import { ScrollDashboard } from "./scroll-dashboard";
import { organizationStructuredData, siteUrl } from "./seo-utils";
import "./globals.css";

export const metadata: Metadata = {
  alternates: {
    canonical: siteUrl,
  },
  title: "Datacom Enterprise Pte Ltd",
  description:
    "Reliable IT services, business IT products, data center products, and AI workstation solutions.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: [
      "ZeOB-_D09KHOJtlrEW_XjQq1uoaAp4p1XXGUYeDhpGI",
      "IQ3MbJEaQ05FTkMIpvdN9FJ5xAPs3r0WIXQsfZmYHCw",
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData()) }}
        />
        <ScrollDashboard />
        <AnalyticsTracker />
        {children}
      </body>
    </html>
  );
}
