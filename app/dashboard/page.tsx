import type { Metadata } from "next";
import { DashboardControl } from "../dashboard-control";

export const metadata: Metadata = {
  title: "Owner Control | Datacom Enterprise Pte Ltd",
  description:
    "Datacom owner dashboard for SEO, website inbox, orders, catalog control, analytics, and security checks.",
};

export default function DashboardPage() {
  return <DashboardControl />;
}
