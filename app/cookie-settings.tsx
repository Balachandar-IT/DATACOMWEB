"use client";

import { useState } from "react";

export function CookieSettings({ servicePage = false }: { servicePage?: boolean }) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={servicePage ? "cookie-bar services-cookie-bar" : "cookie-bar"} role="status">
      <span>Cookie settings</span>
      <button
        type="button"
        aria-label="Close cookie settings"
        onClick={() => setIsVisible(false)}
      >
        x
      </button>
    </div>
  );
}
