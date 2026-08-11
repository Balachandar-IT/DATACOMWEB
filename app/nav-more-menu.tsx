"use client";

import { useEffect, useRef, useState } from "react";

type NavMoreMenuProps = {
  linkClassName: string;
};

export function NavMoreMenu({ linkClassName }: NavMoreMenuProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  return (
    <div className={open ? "nav-more open" : "nav-more"} ref={menuRef}>
      <button
        className={`${linkClassName} nav-more-trigger`}
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        More
      </button>
      <div className="nav-dropdown">
        <a href="/contact-10">Contact Us</a>
        <a href="/product-category">Product category</a>
      </div>
    </div>
  );
}
