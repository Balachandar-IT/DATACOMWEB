import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { dashboardCookieName, isValidDashboardSession } from "../dashboard-auth";
import { OwnerLoginView } from "../owner-login-view";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Owner Login | Datacom Enterprise Pte Ltd",
  description: "Secure Datacom owner login for website dashboard access.",
  robots: {
    index: false,
    follow: false,
  },
};

type OwnerLoginPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

function safeReturnTo(value: string | string[] | undefined) {
  const returnTo = Array.isArray(value) ? value[0] : value;
  if (returnTo === "/dashboard" || returnTo?.startsWith("/dashboard?")) return returnTo;
  return "/dashboard";
}

export default async function OwnerLoginPage({ searchParams }: OwnerLoginPageProps) {
  const cookieStore = await cookies();
  const session = cookieStore.get(dashboardCookieName)?.value;
  const authenticated = await isValidDashboardSession(session);

  if (authenticated) {
    redirect("/dashboard");
  }

  const params = searchParams ? await searchParams : {};
  const invalid = params.auth === "invalid";
  const returnTo = safeReturnTo(params.returnTo);

  return <OwnerLoginView invalid={invalid} returnTo={returnTo} />;
}
