import { createHash } from "node:crypto";
import { handleError, handleOptions, readJson, sendJson } from "../_helpers.js";
import { requireAdmin } from "../_admin-auth.js";

const allowedTypes = new Set(["image/jpeg", "image/png", "image/webp", "image/gif", "image/svg+xml"]);

function cleanName(fileName = "upload") {
  const parts = String(fileName).toLowerCase().split(".");
  const extension = parts.length > 1 ? parts.pop()?.replace(/[^a-z0-9]/g, "") : "png";
  const base = parts.join(".").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "product-image";
  return { base, extension: extension || "png" };
}

async function uploadToGitHub({ contentType, dataBase64, fileName }) {
  const token = process.env.GITHUB_TOKEN;
  const owner = process.env.GITHUB_OWNER || "Balachandar-IT";
  const repo = process.env.GITHUB_REPO || "DATACOMWEB";
  const branch = process.env.GITHUB_BRANCH || "main";
  if (!token) {
    const error = new Error("GITHUB_TOKEN is required for media uploads");
    error.statusCode = 400;
    throw error;
  }

  if (!allowedTypes.has(contentType)) {
    const error = new Error("Only image files are allowed");
    error.statusCode = 400;
    throw error;
  }

  const buffer = Buffer.from(dataBase64, "base64");
  if (!buffer.length || buffer.length > 4 * 1024 * 1024) {
    const error = new Error("Image must be smaller than 4MB");
    error.statusCode = 400;
    throw error;
  }

  const { base, extension } = cleanName(fileName);
  const hash = createHash("sha256").update(buffer).digest("hex").slice(0, 12);
  const repoPath = `public/assets/uploads/${base}-${hash}.${extension}`;
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${repoPath}`;

  const response = await fetch(apiUrl, {
    method: "PUT",
    headers: {
      accept: "application/vnd.github+json",
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
      "user-agent": "datacom-dashboard",
      "x-github-api-version": "2022-11-28",
    },
    body: JSON.stringify({
      branch,
      content: buffer.toString("base64"),
      message: `Upload product media ${base}-${hash}.${extension}`,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    const error = new Error(`GitHub upload failed: ${response.status} ${body}`);
    error.statusCode = 502;
    throw error;
  }

  return {
    imageUrl: `/assets/uploads/${base}-${hash}.${extension}`,
    repoPath,
  };
}

export default async function handler(req, res) {
  if (handleOptions(req, res)) return;
  if (!requireAdmin(req, res)) return;
  if (req.method !== "POST") return sendJson(res, 405, { error: "Method not allowed" });

  try {
    const payload = await readJson(req);
    const result = await uploadToGitHub(payload);
    sendJson(res, 201, result);
  } catch (error) {
    handleError(res, error);
  }
}
