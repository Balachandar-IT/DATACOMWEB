function envValue(names) {
  for (const name of names) {
    const value = process.env[name];
    if (value) return value;
  }
  return "";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function plainValue(value) {
  return String(value ?? "").trim();
}

function getProvider() {
  if (process.env.RESEND_API_KEY) return "resend";
  if (process.env.ELASTIC_EMAIL_API_KEY) return "elastic-email";
  return "";
}

function providerLabel(provider) {
  if (provider === "resend") return "Resend";
  if (provider === "elastic-email") return "Elastic Email";
  return "Not connected";
}

export function getEmailNotificationStatus() {
  const provider = getProvider();
  const to = envValue(["EMAIL_TO", "NOTIFICATION_EMAIL_TO", "CONTACT_EMAIL_TO"]);
  const from = envValue(["EMAIL_FROM", "NOTIFICATION_EMAIL_FROM", "CONTACT_EMAIL_FROM"]);
  const missing = [];

  if (!provider) missing.push("RESEND_API_KEY or ELASTIC_EMAIL_API_KEY");
  if (!to) missing.push("EMAIL_TO");
  if (!from) missing.push("EMAIL_FROM");

  return {
    connected: missing.length === 0,
    provider: providerLabel(provider),
    toConfigured: Boolean(to),
    fromConfigured: Boolean(from),
    missing,
  };
}

function senderAddress() {
  const from = envValue(["EMAIL_FROM", "NOTIFICATION_EMAIL_FROM", "CONTACT_EMAIL_FROM"]);
  const name = envValue(["EMAIL_FROM_NAME", "NOTIFICATION_EMAIL_FROM_NAME"]) || "Datacom Enterprise Pte Ltd";
  if (!from || from.includes("<")) return from;
  return `${name} <${from}>`;
}

async function sendViaResend({ to, from, subject, text, html, replyTo }) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: to.split(",").map((item) => item.trim()).filter(Boolean),
      subject,
      text,
      html,
      reply_to: replyTo || undefined,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Resend returned ${response.status}: ${body.slice(0, 180)}`);
  }
}

async function sendViaElasticEmail({ to, from, subject, text, html, replyTo }) {
  const body = new URLSearchParams({
    apikey: process.env.ELASTIC_EMAIL_API_KEY || "",
    from,
    fromName: envValue(["EMAIL_FROM_NAME", "NOTIFICATION_EMAIL_FROM_NAME"]) || "Datacom Enterprise Pte Ltd",
    to,
    subject,
    bodyText: text,
    bodyHtml: html,
  });
  if (replyTo) body.set("replyTo", replyTo);

  const response = await fetch("https://api.elasticemail.com/v2/email/send", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body,
  });

  if (!response.ok) {
    const responseBody = await response.text();
    throw new Error(`Elastic Email returned ${response.status}: ${responseBody.slice(0, 180)}`);
  }
}

export async function sendOwnerNotification({ subject, text, html, replyTo }) {
  const status = getEmailNotificationStatus();
  if (!status.connected) {
    return { sent: false, skipped: true, provider: status.provider, missing: status.missing };
  }

  const provider = getProvider();
  const to = envValue(["EMAIL_TO", "NOTIFICATION_EMAIL_TO", "CONTACT_EMAIL_TO"]);
  const from = senderAddress();

  try {
    if (provider === "resend") {
      await sendViaResend({ to, from, subject, text, html, replyTo });
    } else if (provider === "elastic-email") {
      await sendViaElasticEmail({ to, from: envValue(["EMAIL_FROM", "NOTIFICATION_EMAIL_FROM", "CONTACT_EMAIL_FROM"]), subject, text, html, replyTo });
    }
    return { sent: true, skipped: false, provider: status.provider };
  } catch (error) {
    return {
      sent: false,
      skipped: false,
      provider: status.provider,
      error: error instanceof Error ? error.message : "Email notification failed",
    };
  }
}

export function leadNotification(payload) {
  const fields = [
    ["Name", payload.name],
    ["Company", payload.company],
    ["Email", payload.email],
    ["Phone", payload.phone],
    ["Interested in", payload.interest],
    ["Source", payload.source || "website"],
    ["Message", payload.message],
  ].filter(([, value]) => plainValue(value));

  const text = fields.map(([label, value]) => `${label}: ${plainValue(value)}`).join("\n");
  const rows = fields
    .map(([label, value]) => `<tr><th align="left" style="padding:8px;border-bottom:1px solid #d8e5f5">${escapeHtml(label)}</th><td style="padding:8px;border-bottom:1px solid #d8e5f5">${escapeHtml(value).replace(/\n/g, "<br>")}</td></tr>`)
    .join("");

  return {
    subject: `New website enquiry: ${plainValue(payload.name)}`,
    text,
    html: `<div style="font-family:Arial,sans-serif;color:#003865"><h2>New website enquiry</h2><table cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;max-width:720px">${rows}</table></div>`,
    replyTo: plainValue(payload.email),
  };
}

export function testNotification() {
  const now = new Date().toLocaleString("en-SG", { timeZone: "Asia/Singapore" });
  return {
    subject: "Datacom dashboard email notification test",
    text: `Email notifications are connected. Test sent at ${now}.`,
    html: `<div style="font-family:Arial,sans-serif;color:#003865"><h2>Email notifications connected</h2><p>Test sent at ${escapeHtml(now)}.</p></div>`,
  };
}
