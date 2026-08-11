"use client";

import { useEffect } from "react";

export function ContactPageReset() {
  useEffect(() => {
    if (window.location.search) {
      window.history.replaceState(null, "", window.location.pathname);
    }

    window.scrollTo({ left: 0, top: 0 });
  }, []);

  return null;
}
