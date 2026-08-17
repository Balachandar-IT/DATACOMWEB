import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { dashboardCookieName, isValidDashboardSession } from "../dashboard-auth";
import { DashboardControl } from "../dashboard-control";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Owner Control | Datacom Enterprise Pte Ltd",
  description:
    "Datacom owner dashboard for SEO, website inbox, orders, catalog control, analytics, and security checks.",
};

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get(dashboardCookieName)?.value;
  const authenticated = await isValidDashboardSession(session);

  if (!authenticated) {
    redirect("/owner-login?returnTo=%2Fdashboard");
  }

  return <DashboardControl />;
}
