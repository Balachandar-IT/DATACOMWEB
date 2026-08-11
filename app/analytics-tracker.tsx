"use client";

import { useEffect } from "react";
import { getApiBase } from "./api-base";

const sessionKey = "datacom-session-id";

function getSessionId() {
  let sessionId = window.localStorage.getItem(sessionKey);
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    window.localStorage.setItem(sessionKey, sessionId);
  }
  return sessionId;
}

function getDeviceType() {
  const agent = navigator.userAgent.toLowerCase();
  if (/tablet|ipad/.test(agent)) return "Tablet";
  if (/mobile|iphone|android/.test(agent)) return "Mobile";
  return "Desktop";
}

function sendEvent(eventName: string, metadata: Record<string, unknown> = {}) {
  const endpoint = `${getApiBase()}/analytics/events`;
  const payload = JSON.stringify({
    eventName,
    pagePath: window.location.pathname + window.location.search,
    sessionId: getSessionId(),
    deviceType: getDeviceType(),
    metadata,
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon(endpoint, new Blob([payload], { type: "application/json" }));
    return;
  }

  fetch(endpoint, {
    body: payload,
    headers: { "content-type": "application/json" },
    keepalive: true,
    method: "POST",
  }).catch(() => undefined);
}

export function trackDatacomEvent(eventName: string, metadata: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  sendEvent(eventName, metadata);
}

export function AnalyticsTracker() {
  useEffect(() => {
    const currentPath = window.location.pathname;
    sendEvent("page_view", { title: document.title, referrer: document.referrer || null });
    if (currentPath.startsWith("/product-page/")) {
      sendEvent("product_view", { slug: currentPath.split("/").filter(Boolean).at(-1) });
    } else if (currentPath === "/shop") {
      sendEvent("shop_view");
    } else if (currentPath === "/cart-page") {
      sendEvent("cart_view");
    } else if (currentPath === "/checkout") {
      sendEvent("checkout_view");
    }

    const heartbeat = window.setInterval(() => sendEvent("active_ping"), 60000);

    function onClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const link = target?.closest("a,button") as HTMLAnchorElement | HTMLButtonElement | null;
      if (!link) return;

      const text = link.textContent?.trim().slice(0, 80) || "";
      const href = "href" in link ? link.href : "";

      if (link.classList.contains("shop-cart") || text === "Add to Cart") {
        sendEvent("add_to_cart", { label: text, href });
        return;
      }
      if (/checkout/i.test(text) || href.includes("/checkout")) {
        sendEvent("checkout_click", { label: text, href });
        return;
      }
      if (href.includes("/product-page/")) {
        sendEvent("product_click", { label: text, href });
        return;
      }
      if (href.includes("/shop")) {
        sendEvent("shop_navigation", { label: text, href });
      }
    }

    function onFocusIn(event: FocusEvent) {
      const target = event.target as HTMLInputElement | null;
      if (target?.placeholder?.toLowerCase().includes("search")) {
        sendEvent("search_focus");
      }
    }

    document.addEventListener("click", onClick);
    document.addEventListener("focusin", onFocusIn);

    return () => {
      window.clearInterval(heartbeat);
      document.removeEventListener("click", onClick);
      document.removeEventListener("focusin", onFocusIn);
    };
  }, []);

  return null;
}
