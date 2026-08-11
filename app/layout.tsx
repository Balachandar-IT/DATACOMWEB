import type { Metadata, Viewport } from "next";
import { ScrollDashboard } from "./scroll-dashboard";
import "./globals.css";

export const metadata: Metadata = {
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
        <ScrollDashboard />
        {children}
      </body>
    </html>
  );
}
