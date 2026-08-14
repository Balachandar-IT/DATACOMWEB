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
  if (process.env.SMTP_HOST || process.env.SMTP_USER || process.env.SMTP_PASS) return "smtp";
  if (process.env.RESEND_API_KEY) return "resend";
  if (process.env.ELASTIC_EMAIL_API_KEY) return "elastic-email";
  return "";
}

function providerLabel(provider) {
  if (provider === "smtp") return "SMTP";
  if (provider === "resend") return "Resend";
  if (provider === "elastic-email") return "Elastic Email";
  return "Not connected";
}

export function getEmailNotificationStatus() {
  const provider = getProvider();
  const to = envValue(["EMAIL_TO", "NOTIFICATION_EMAIL_TO", "CONTACT_EMAIL_TO"]);
  const from = envValue(["EMAIL_FROM", "NOTIFICATION_EMAIL_FROM", "CONTACT_EMAIL_FROM"]);
  const missing = [];

  if (!provider) missing.push("SMTP_HOST, SMTP_USER, SMTP_PASS or RESEND_API_KEY or ELASTIC_EMAIL_API_KEY");
  if (provider === "smtp" && !process.env.SMTP_HOST) missing.push("SMTP_HOST");
  if (provider === "smtp" && !process.env.SMTP_PORT) missing.push("SMTP_PORT");
  if (provider === "smtp" && !process.env.SMTP_USER) missing.push("SMTP_USER");
  if (provider === "smtp" && !process.env.SMTP_PASS) missing.push("SMTP_PASS");
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

function publicSiteUrl() {
  const configured = envValue(["EMAIL_SITE_URL", "PUBLIC_SITE_URL", "NEXT_PUBLIC_SITE_URL"]);
  if (configured) return configured.replace(/\/+$/, "");
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "https://www.datacom-sg.com";
}

function emailSignatureText() {
  return [
    "Best regards,",
    "Datacom Enterprise Pte Ltd",
    "No. 20 Lorong 21A Geylang, Datacom Enterprise Building, Singapore 388430",
    "Tel: +65 6844 4272 | WhatsApp: +65 8939 3191",
    "Email: info@dcom.com.sg | Website: https://www.datacom-sg.com",
  ].join("\n");
}

function emailSignatureHtml() {
  const siteUrl = publicSiteUrl();
  const logoUrl = envValue(["EMAIL_SIGNATURE_IMAGE_URL"]) || `${siteUrl}/assets/datacom-logo.png`;

  return `
    <table role="presentation" cellspacing="0" cellpadding="0" style="margin-top:22px;border-top:1px solid #d8e5f5;padding-top:16px;font-family:Arial,sans-serif;color:#003865">
      <tr>
        <td style="padding:0 16px 0 0;vertical-align:top">
          <img src="${escapeHtml(logoUrl)}" width="170" alt="Datacom Enterprise Pte Ltd" style="display:block;width:170px;max-width:170px;height:auto;border:0">
        </td>
        <td style="padding:0 0 0 16px;border-left:3px solid #0b83f0;vertical-align:top">
          <p style="margin:0 0 6px;font-size:15px;line-height:1.35;font-weight:700;color:#003865">Datacom Enterprise Pte Ltd</p>
          <p style="margin:0 0 5px;font-size:13px;line-height:1.45;color:#315d86">Trusted IT products, servers, storage, networking, and support.</p>
          <p style="margin:0;font-size:13px;line-height:1.55;color:#003865">
            No. 20 Lorong 21A Geylang, Datacom Enterprise Building, Singapore 388430<br>
            Tel: <a href="tel:+6568444272" style="color:#0b83f0;text-decoration:none">+65 6844 4272</a> &nbsp;|&nbsp;
            WhatsApp: <a href="https://wa.me/6589393191" style="color:#0b83f0;text-decoration:none">+65 8939 3191</a><br>
            Email: <a href="mailto:info@dcom.com.sg" style="color:#0b83f0;text-decoration:none">info@dcom.com.sg</a> &nbsp;|&nbsp;
            Web: <a href="${escapeHtml(siteUrl)}" style="color:#0b83f0;text-decoration:none">${escapeHtml(siteUrl.replace(/^https?:\/\//, ""))}</a>
          </p>
        </td>
      </tr>
    </table>
  `;
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

async function sendViaSmtp({ to, from, subject, text, html, replyTo }) {
  const nodemailer = await import("nodemailer");
  const port = Number(process.env.SMTP_PORT || 587);
  const transporter = nodemailer.default.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from,
    to,
    subject,
    text,
    html,
    replyTo: replyTo || undefined,
  });
}

export async function sendOwnerNotification({ subject, text, html, replyTo }) {
  const status = getEmailNotificationStatus();
  if (!status.connected) {
    return { sent: false, skipped: true, provider: status.provider, missing: status.missing };
  }

  const to = envValue(["EMAIL_TO", "NOTIFICATION_EMAIL_TO", "CONTACT_EMAIL_TO"]);
  return sendConfiguredEmail({ to, subject, text, html, replyTo });
}

export async function sendConfiguredEmail({ to, subject, text, html, replyTo }) {
  const provider = getProvider();
  const from = senderAddress();
  const missing = [];

  if (!provider) missing.push("SMTP_HOST, SMTP_USER, SMTP_PASS or RESEND_API_KEY or ELASTIC_EMAIL_API_KEY");
  if (provider === "smtp" && !process.env.SMTP_HOST) missing.push("SMTP_HOST");
  if (provider === "smtp" && !process.env.SMTP_PORT) missing.push("SMTP_PORT");
  if (provider === "smtp" && !process.env.SMTP_USER) missing.push("SMTP_USER");
  if (provider === "smtp" && !process.env.SMTP_PASS) missing.push("SMTP_PASS");
  if (!from) missing.push("EMAIL_FROM");
  if (!to) missing.push("recipient email");

  if (missing.length) {
    return { sent: false, skipped: true, provider: providerLabel(provider), missing };
  }

  try {
    if (provider === "smtp") {
      await sendViaSmtp({ to, from, subject, text, html, replyTo });
    } else if (provider === "resend") {
      await sendViaResend({ to, from, subject, text, html, replyTo });
    } else if (provider === "elastic-email") {
      await sendViaElasticEmail({ to, from: envValue(["EMAIL_FROM", "NOTIFICATION_EMAIL_FROM", "CONTACT_EMAIL_FROM"]), subject, text, html, replyTo });
    }
    return { sent: true, skipped: false, provider: providerLabel(provider) };
  } catch (error) {
    return {
      sent: false,
      skipped: false,
      provider: providerLabel(provider),
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

export function customerReplyNotification({ customerName, body }) {
  const greeting = plainValue(customerName) ? `Hi ${plainValue(customerName)},` : "Hi,";
  const text = `${greeting}\n\n${plainValue(body)}\n\n${emailSignatureText()}`;
  const htmlBody = escapeHtml(body).replace(/\n/g, "<br>");

  return {
    subject: "Reply from Datacom Enterprise Pte Ltd",
    text,
    html: `<div style="font-family:Arial,sans-serif;color:#003865;max-width:720px"><p style="margin:0 0 16px;line-height:1.6">${escapeHtml(greeting)}</p><p style="margin:0 0 18px;line-height:1.6">${htmlBody}</p>${emailSignatureHtml()}</div>`,
  };
}
