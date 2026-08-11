export function ContactIcon({ type }: { type: "location" | "phone" | "whatsapp" | "mail" }) {
  if (type === "location") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 4C14.9 4 8 10.9 8 19.8c0 12 16 24.2 16 24.2s16-12.2 16-24.2C40 10.9 33.1 4 24 4Z" />
        <circle cx="24" cy="19.5" r="7.2" />
      </svg>
    );
  }

  if (type === "phone") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M15.4 8.6h5.5l3 8.6-4.1 3.2c2.1 4.1 5.7 7.7 9.8 9.8l3.2-4.1 8.6 3v5.5c0 3-2.4 5.4-5.4 5.4C20.6 40 8 27.4 8 12c0-3 2.4-3.4 5.4-3.4Z" />
      </svg>
    );
  }

  if (type === "whatsapp") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M11.2 39.6 13 33.5A15.2 15.2 0 1 1 24 39.2c-2.7 0-5.2-.7-7.4-2l-5.4 2.4Z" />
        <path d="M19.2 16.8c-.8.3-1.7 1.7-1.7 3.2 0 4.5 5.6 10.7 10.6 10.7 1.8 0 3.2-.9 3.5-1.6.2-.5.2-1.3 0-1.6-.2-.2-3.1-1.6-3.5-1.6-.4 0-1.2 1.6-1.8 1.7-.5.1-2.1-.7-3.4-2-1.3-1.3-2.1-2.8-2-3.4.1-.6 1.5-1.4 1.5-1.8 0-.4-1.3-3.1-1.6-3.4-.3-.2-1.1-.3-1.6-.2Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path className="mail-speed" d="M4 17h8M4 24h8M4 31h8" />
      <path d="M14 13h30v24H14z" />
      <path d="m15 14 14 12 14-12" />
    </svg>
  );
}
