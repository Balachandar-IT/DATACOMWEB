"use client";

import { FormEvent, useState } from "react";
import { ContactChoiceDropdown } from "./contact-choice-dropdown";
import { ContactPhonePicker } from "./contact-phone-picker";
import { trackDatacomEvent } from "./analytics-tracker";
import { getApiBase } from "./api-base";

type ContactLeadFormProps = {
  className: string;
  title: string;
  titleLevel?: "h2" | "h3";
  submitClassName?: string;
};

const interests = ["Products", "Services", "Both", "Business IT Products", "Data Center Products", "AI Workstations"];
const addons = ["Server", "Rack", "UPS", "Synology", "Accessories", "Installation", "Configuration", "Relocation", "Others"];
const serviceCategories = ["Installation", "SLA Support", "Relocation", "Infrastructure Setup", "Workplace Solutions", "IT Lifecycle Services", "Others"];

export function ContactLeadForm({
  className,
  submitClassName,
  title,
  titleLevel = "h2",
}: ContactLeadFormProps) {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");
  const Heading = titleLevel;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      company: String(data.get("company") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      interest: String(data.get("interest") || "").trim(),
      message: String(data.get("message") || "").trim(),
      source: "website contact form",
      metadata: {
        addons: String(data.get("addons") || "").trim(),
        serviceCategory: String(data.get("serviceCategory") || "").trim(),
        pagePath: window.location.pathname,
      },
    };

    if (!payload.name || !payload.email || !payload.message) {
      setState("error");
      setMessage("Name, email and message are required.");
      return;
    }

    setState("sending");
    setMessage("");

    try {
      const response = await fetch(`${getApiBase()}/leads`, {
        body: JSON.stringify(payload),
        headers: { "content-type": "application/json" },
        method: "POST",
      });
      if (!response.ok) throw new Error(`Request failed ${response.status}`);
      form.reset();
      setState("sent");
      setMessage("Submitted. We will contact you shortly.");
      trackDatacomEvent("lead_submit", { interest: payload.interest, source: payload.source });
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Unable to submit right now.");
    }
  }

  return (
    <form className={className} aria-label="Get in touch form" onSubmit={onSubmit}>
      <Heading>{title}</Heading>
      <label>
        Name *
        <input type="text" name="name" required />
      </label>
      <label>
        Company name
        <input type="text" name="company" />
      </label>
      <label>
        Email *
        <input type="email" name="email" required />
      </label>
      <label>
        Phone
        <ContactPhonePicker />
      </label>
      <ContactChoiceDropdown label="Interested In" name="interest" options={interests} />
      <ContactChoiceDropdown label="Add-ons" name="addons" options={addons} />
      <ContactChoiceDropdown label="Service Category" name="serviceCategory" options={serviceCategories} />
      <label className="wide">
        Write a message
        <textarea name="message" required />
      </label>
      <button className={submitClassName} type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Submitting..." : "Submit"}
      </button>
      {message ? <p className={state === "error" ? "form-status error" : "form-status success"}>{message}</p> : null}
    </form>
  );
}
