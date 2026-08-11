import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const scanRoots = ["app"];
const fileExtensions = new Set([".css", ".ts", ".tsx", ".js", ".jsx", ".mjs"]);
const outputDir = path.join(root, "public", "assets", "vendor");
const urlPattern = /https?:\/\/[^"'`\s)]+/g;
const imageExtensionPattern = /\.(png|jpe?g|webp|avif|gif|svg)(?:[/?#]|$)/i;
const contentTypeExtensions = new Map([
  ["image/avif", ".avif"],
  ["image/gif", ".gif"],
  ["image/jpeg", ".jpg"],
  ["image/jpg", ".jpg"],
  ["image/png", ".png"],
  ["image/svg+xml", ".svg"],
  ["image/webp", ".webp"],
]);

async function collectFiles(directory) {
  const entries = await readdir(directory);
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(directory, entry);
    const info = await stat(fullPath);
    if (info.isDirectory()) {
      files.push(...(await collectFiles(fullPath)));
    } else if (fileExtensions.has(path.extname(entry))) {
      files.push(fullPath);
    }
  }
  return files;
}

function cleanUrl(value) {
  return value.replace(/[.,;]+$/, "");
}

function urlFileName(url, contentType) {
  const parsed = new URL(url);
  const hash = createHash("sha1").update(url).digest("hex").slice(0, 12);
  const lastPath = decodeURIComponent(parsed.pathname.split("/").filter(Boolean).at(-1) || "image");
  const extensionFromPath = path.extname(lastPath).toLowerCase();
  const extension = contentTypeExtensions.get(String(contentType || "").split(";")[0].toLowerCase()) || extensionFromPath || ".bin";
  const stem = lastPath
    .replace(extensionFromPath, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 52) || "image";
  return `${stem}-${hash}${extension}`;
}

async function download(url) {
  const response = await fetch(url, {
    headers: {
      accept: "image/avif,image/webp,image/png,image/jpeg,image/svg+xml,image/*,*/*;q=0.8",
      "user-agent": "Mozilla/5.0 Datacom asset vendor",
    },
  });
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }
  const contentType = response.headers.get("content-type") || "";
  if (!contentType.toLowerCase().startsWith("image/")) {
    throw new Error(`not an image: ${contentType || "unknown content type"}`);
  }
  const buffer = Buffer.from(await response.arrayBuffer());
  const fileName = urlFileName(url, contentType);
  await writeFile(path.join(outputDir, fileName), buffer);
  return `/assets/vendor/${fileName}`;
}

async function main() {
  await mkdir(outputDir, { recursive: true });
  const files = (await Promise.all(scanRoots.map((entry) => collectFiles(path.join(root, entry))))).flat();
  const contents = new Map();
  const urls = new Set();

  for (const file of files) {
    const text = await readFile(file, "utf8");
    contents.set(file, text);
    for (const match of text.matchAll(urlPattern)) {
      const url = cleanUrl(match[0]);
      if (imageExtensionPattern.test(url)) urls.add(url);
    }
  }

  const replacements = new Map();
  const failures = [];
  for (const url of [...urls].sort()) {
    if (url.includes("flagcdn.com")) continue;
    try {
      const localPath = await download(url);
      replacements.set(url, localPath);
      console.log(`${localPath} <= ${url}`);
    } catch (error) {
      failures.push({ url, error: error instanceof Error ? error.message : String(error) });
      console.error(`FAILED ${url}: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  for (const [file, original] of contents.entries()) {
    let next = original;
    for (const [url, localPath] of replacements.entries()) {
      next = next.split(url).join(localPath);
    }
    if (next !== original) await writeFile(file, next);
  }

  await writeFile(
    path.join(outputDir, "download-report.json"),
    JSON.stringify({ downloaded: replacements.size, failed: failures.length, failures }, null, 2),
  );

  console.log(`Downloaded ${replacements.size} images. Failed ${failures.length}.`);
  if (failures.length) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
