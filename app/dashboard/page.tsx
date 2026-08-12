import type { Metadata } from "next";
import { cookies } from "next/headers";
import { dashboardCookieName, isDashboardAuthConfigured, isValidDashboardSession } from "../dashboard-auth";
import { DashboardControl } from "../dashboard-control";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Owner Control | Datacom Enterprise Pte Ltd",
  description:
    "Datacom owner dashboard for SEO, website inbox, orders, catalog control, analytics, and security checks.",
};

type DashboardPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

function DashboardLogin({ invalid }: { invalid: boolean }) {
  const configured = isDashboardAuthConfigured();

  return (
    <main className="owner-login-page">
      <section className="owner-login-card" aria-labelledby="dashboard-login-title">
        <span className="owner-kicker">Owner Control</span>
        <h1 id="dashboard-login-title">Datacom dashboard login</h1>
        <p>Enter the owner username and password to manage the website dashboard.</p>

        {!configured ? (
          <div className="owner-login-warning">
            Add `DASHBOARD_USERNAME`, `DASHBOARD_PASSWORD`, and `DASHBOARD_AUTH_SECRET` in Vercel Environment Variables.
          </div>
        ) : null}

        {invalid ? (
          <div className="owner-login-error" role="alert">
            Username or password is wrong. Try again.
          </div>
        ) : null}

        <form action="/dashboard-login" method="post" className="owner-login-form">
          <input type="hidden" name="returnTo" value="/dashboard" />
          <label>
            Username
            <input name="username" type="text" autoComplete="username" required disabled={!configured} />
          </label>
          <label>
            Password
            <input name="password" type="password" autoComplete="current-password" required disabled={!configured} />
          </label>
          <button type="submit" disabled={!configured}>Login</button>
        </form>
      </section>
    </main>
  );
}

export default async function DashboardPage({ searchParams }: DashboardPageProps) {
  const cookieStore = await cookies();
  const session = cookieStore.get(dashboardCookieName)?.value;
  const authenticated = await isValidDashboardSession(session);
  const params = searchParams ? await searchParams : {};
  const invalid = params.auth === "invalid";

  if (!authenticated) {
    return <DashboardLogin invalid={invalid} />;
  }

  return <DashboardControl />;
}
