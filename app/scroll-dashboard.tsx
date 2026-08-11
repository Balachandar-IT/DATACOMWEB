"use client";

import { useEffect } from "react";

export function ScrollDashboard() {
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const updateDashboard = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastY;
      const root = document.documentElement;

      if (currentY < 24) {
        root.classList.remove("dashboard-hidden");
      } else if (delta > 5 && currentY > 140) {
        root.classList.add("dashboard-hidden");
      } else if (delta < -3) {
        root.classList.remove("dashboard-hidden");
      }

      lastY = currentY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateDashboard);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
