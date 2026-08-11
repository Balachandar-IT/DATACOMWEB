"use client";

import { useEffect, useState } from "react";
import { getApiBase } from "./api-base";

type BackendState =
  | { state: "checking" }
  | { state: "connected"; products: number }
  | { state: "offline"; message: string };

export function BackendStatus() {
  const [status, setStatus] = useState<BackendState>({ state: "checking" });
  const [backendUrl, setBackendUrl] = useState("/api");

  useEffect(() => {
    const resolvedBackendUrl = getApiBase();
    setBackendUrl(resolvedBackendUrl);
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 3500);

    fetch(`${resolvedBackendUrl}/health`, { signal: controller.signal })
      .then(async (response) => {
        const payload = await response.json().catch(() => ({}));
        if (!response.ok) {
          const message = typeof payload.error === "string" ? payload.error : `Backend returned ${response.status}`;
          throw new Error(message);
        }
        return payload as { products?: number };
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
          Backend is not connected yet. {status.message} Check Vercel environment variables and redeploy.
        </p>
      )}
    </article>
  );
}
