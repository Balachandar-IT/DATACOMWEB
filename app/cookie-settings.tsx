"use client";

import { useState } from "react";

export function CookieSettings({ servicePage = false }: { servicePage?: boolean }) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={servicePage ? "cookie-bar services-cookie-bar" : "cookie-bar"} role="status">
      <p>
        We use cookies to enhance website performance, enable social media sharing, and provide personalized
        advertising. You can adjust your browser's cookie settings at any time. Please be aware that disabling
        cookies may impact the functionality and performance of the site. <a href="/privacy-policy">Privacy Policy</a>
      </p>
      <div className="cookie-actions">
        <button type="button" onClick={() => setIsVisible(false)}>
          Settings
        </button>
        <button type="button" onClick={() => setIsVisible(false)}>
          Decline All
        </button>
        <button type="button" className="accept" onClick={() => setIsVisible(false)}>
          Accept
        </button>
        <button type="button" className="close" aria-label="Close cookie settings" onClick={() => setIsVisible(false)}>
          x
        </button>
      </div>
    </div>
  );
}
