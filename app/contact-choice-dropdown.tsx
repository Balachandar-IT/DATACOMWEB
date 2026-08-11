"use client";

import { useEffect, useRef, useState } from "react";

type ContactChoiceDropdownProps = {
  label: string;
  name: string;
  options: string[];
};

export function ContactChoiceDropdown({ label, name, options }: ContactChoiceDropdownProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function closeOnOutsideClick(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => document.removeEventListener("mousedown", closeOnOutsideClick);
  }, []);

  return (
    <div className={open ? "contact-choice open" : "contact-choice"} ref={rootRef}>
      <span className="contact-choice-label">{label}</span>
      <input type="hidden" name={name} value={selected} />
      <button
        aria-expanded={open}
        className="contact-choice-trigger"
        type="button"
        onClick={() => setOpen((current) => !current)}
      >
        <span>{selected}</span>
        <span className="contact-choice-chevron" aria-hidden="true" />
      </button>
      {open ? (
        <div className="contact-choice-menu">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
            >
              {option}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
