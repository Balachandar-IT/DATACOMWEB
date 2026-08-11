"use client";

import { useState } from "react";

const promoSeenKey = "datacom-ai-promo-seen";

export function AiPromoPopup() {
  const [isOpen, setIsOpen] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    const hasSeenPromo = window.sessionStorage.getItem(promoSeenKey) === "1";
    if (!hasSeenPromo) {
      window.sessionStorage.setItem(promoSeenKey, "1");
    }

    return !hasSeenPromo;
  });

  if (!isOpen) {
    return null;
  }

  const closePromo = () => {
    window.sessionStorage.setItem(promoSeenKey, "1");
    setIsOpen(false);
  };

  return (
    <aside className="mobile-ai-promo is-open" aria-label="AI workstation promotion">
      <div className="mobile-ai-promo-card">
        <div className="mobile-ai-promo-image-wrap">
          <a
            className="mobile-ai-promo-link"
            href="/ai-workstations"
            aria-label="Explore AI Workstations"
          />
          <img
            src="/assets/mobile-ai-popup.jpeg"
            alt="AI Infrastructure built for business"
          />
          <button
            className="mobile-ai-promo-close"
            type="button"
            onClick={closePromo}
            aria-label="Close promotion"
          >
            <span className="sr-only">Close promotion</span>
          </button>
        </div>
        <a className="mobile-ai-promo-button" href="/ai-workstations">
          Explore AI Workstations
        </a>
      </div>
    </aside>
  );
}
