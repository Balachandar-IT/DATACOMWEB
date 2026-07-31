import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Datacom Enterprise | IT Services and Shop Singapore",
  description:
    "A Datacom-style IT services and ecommerce experience for servers, storage, racks, workplace devices, AI workstations, and support.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Datacom Enterprise | IT Services and Shop Singapore",
    description:
      "Explore services, product families, shop filters, inquiry cart, and contact options for Datacom-style IT solutions.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Datacom Enterprise | IT Services and Shop Singapore",
    description:
      "A complete Datacom-style IT services and ecommerce clone with service details, shop filtering, inquiry cart, and contact flows.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
