import { createHmac, timingSafeEqual } from "node:crypto";

const cookieName = "datacom_owner_session";

function parseCookies(header = "") {
  return Object.fromEntries(
    String(header)
      .split(";")
      .map((part) => part.trim())
      .filter(Boolean)
      .map((part) => {
        const index = part.indexOf("=");
        if (index === -1) return [part, ""];
        return [part.slice(0, index), decodeURIComponent(part.slice(index + 1))];
      }),
  );
}

function getSecret() {
  return process.env.DASHBOARD_AUTH_SECRET || process.env.AUTH_SECRET || "";
}

function signSession(value) {
  return createHmac("sha256", getSecret()).update(value).digest("base64url");
}

function safeEqual(left, right) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);
  if (leftBuffer.length !== rightBuffer.length) return false;
  return timingSafeEqual(leftBuffer, rightBuffer);
}

export function isAdminRequest(req) {
  const username = process.env.DASHBOARD_USERNAME;
  const secret = getSecret();
  if (!username || !process.env.DASHBOARD_PASSWORD || !secret) return false;

  const token = parseCookies(req.headers.cookie || "")[cookieName];
  if (!token) return false;

  const parts = token.split(".");
  if (parts.length !== 3) return false;

  const [tokenUsername, expiresAtValue, signature] = parts;
  const expiresAt = Number(expiresAtValue);
  if (tokenUsername !== username || !Number.isFinite(expiresAt) || expiresAt <= Date.now()) return false;

  return safeEqual(signature, signSession(`${tokenUsername}.${expiresAtValue}`));
}

export function requireAdmin(req, res) {
  if (isAdminRequest(req)) return true;
  res.statusCode = 401;
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.end(JSON.stringify({ error: "Owner login required" }));
  return false;
}
