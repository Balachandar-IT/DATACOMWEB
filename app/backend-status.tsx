"use client";

import { useEffect, useState } from "react";

type BackendState =
  | { state: "checking" }
  | { state: "connected"; products: number }
  | { state: "offline"; message: string };

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000";

export function BackendStatus() {
  const [status, setStatus] = useState<BackendState>({ state: "checking" });

  useEffect(() => {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 3500);

    fetch(`${backendUrl}/health`, { signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) throw new Error(`Backend returned ${response.status}`);
        return response.json() as Promise<{ products?: number }>;
      })
      .then((payload) => {
        setStatus({ state: "connected", products: Number(payload.products || 0) });
      })
      .catch((error) => {
        setStatus({
          state: "offline",
          message: error instanceof Error ? error.message : "Backend unavailable",
        });
      })
      .finally(() => window.clearTimeout(timeout));

    return () => {
      window.clearTimeout(timeout);
      controller.abort();
    };
  }, []);

  return (
    <article className="owner-panel backend-status-card">
      <div className="owner-panel-heading">
        <div>
          <span className="owner-kicker">PostgreSQL backend</span>
          <h3>Connection status</h3>
        </div>
        <span className={`owner-status ${status.state}`}>
          {status.state === "connected" ? "Connected" : status.state === "checking" ? "Checking" : "Not connected"}
        </span>
      </div>
      {status.state === "connected" ? (
        <p className="owner-success">Backend is reachable. Products in database: {status.products}.</p>
      ) : status.state === "checking" ? (
        <p className="owner-note">Checking {backendUrl}/health...</p>
      ) : (
        <p className="owner-note">
          Backend is not connected yet. Start PostgreSQL, add `.env`, run `npm run postgres:setup`,
          then run `npm run backend:pg`.
        </p>
      )}
    </article>
  );
}
