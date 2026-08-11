"use client";

export function getApiBase() {
  const configured = process.env.NEXT_PUBLIC_BACKEND_URL;
  if (configured) return configured.replace(/\/$/, "");
  if (typeof window !== "undefined" && window.location.hostname === "localhost") {
    return "http://localhost:4000";
  }
  return "/api";
}
