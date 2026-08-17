import { isDashboardAuthConfigured } from "./dashboard-auth";

type OwnerLoginViewProps = {
  invalid: boolean;
  returnTo?: string;
};

export function OwnerLoginView({ invalid, returnTo = "/dashboard" }: OwnerLoginViewProps) {
  const configured = isDashboardAuthConfigured();

  return (
    <main className="owner-login-page">
      <section className="owner-login-card" aria-labelledby="owner-login-title">
        <span className="owner-kicker">Owner Control</span>
        <h1 id="owner-login-title">Datacom owner login</h1>
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
          <input type="hidden" name="returnTo" value={returnTo} />
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
