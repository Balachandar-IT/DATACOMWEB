const encoder = new TextEncoder();

export const dashboardCookieName = "datacom_owner_session";

const sessionMaxAgeSeconds = 60 * 60 * 12;

function getSecret() {
  return process.env.DASHBOARD_AUTH_SECRET || process.env.AUTH_SECRET || "";
}

export function isDashboardAuthConfigured() {
  return Boolean(process.env.DASHBOARD_USERNAME && process.env.DASHBOARD_PASSWORD && getSecret());
}

function toBase64Url(bytes: Uint8Array) {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function safeEqual(left: string, right: string) {
  if (left.length !== right.length) return false;
  let diff = 0;
  for (let index = 0; index < left.length; index += 1) {
    diff |= left.charCodeAt(index) ^ right.charCodeAt(index);
  }
  return diff === 0;
}

async function signSession(value: string) {
  const secret = getSecret();
  if (!secret) return "";

  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(value));
  return toBase64Url(new Uint8Array(signature));
}

export async function createDashboardSession(username: string) {
  const expiresAt = Date.now() + sessionMaxAgeSeconds * 1000;
  const payload = `${username}.${expiresAt}`;
  const signature = await signSession(payload);
  return {
    maxAge: sessionMaxAgeSeconds,
    value: `${payload}.${signature}`,
  };
}

export async function isValidDashboardSession(token?: string) {
  if (!token || !isDashboardAuthConfigured()) return false;

  const parts = token.split(".");
  if (parts.length !== 3) return false;

  const [username, expiresAtValue, signature] = parts;
  const expiresAt = Number(expiresAtValue);
  if (username !== process.env.DASHBOARD_USERNAME || !Number.isFinite(expiresAt) || expiresAt <= Date.now()) {
    return false;
  }

  const expected = await signSession(`${username}.${expiresAtValue}`);
  return safeEqual(signature, expected);
}

export function verifyDashboardCredentials(username: string, password: string) {
  if (!isDashboardAuthConfigured()) return false;
  return username === process.env.DASHBOARD_USERNAME && password === process.env.DASHBOARD_PASSWORD;
}
