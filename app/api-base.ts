"use client";

export function getApiBase() {
  const configured = process.env.NEXT_PUBLIC_BACKEND_URL;
  if (configured) {
    const normalized = configured.replace(/\/$/, "");
    const isLocalBackend = /\/\/(localhost|127\.0\.0\.1)(:|\/|$)/.test(normalized);
    const isBrowserProduction =
      typeof window !== "undefined" &&
      window.location.hostname !== "localhost" &&
      window.location.hostname !== "127.0.0.1";

    if (!isLocalBackend || !isBrowserProduction) return normalized;
  }

  if (typeof window !== "undefined" && window.location.hostname === "localhost") {
    return "http://localhost:4000";
  }
  return "/api";
}
