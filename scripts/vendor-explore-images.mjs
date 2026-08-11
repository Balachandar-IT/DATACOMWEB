import { createHash } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const outputDir = path.join(root, "public", "assets", "vendor", "explore");
const names = [
  "ab07e4_f480168a27de4e3b9823b57002e67fc7~mv2.png",
  "31f7f6_58df12c653d646c898dd3b23cd1ba8c0~mv2.png",
  "31f7f6_5800df6609d143c2ae10c3a50db66522~mv2.png",
  "31f7f6_52a5cd43f47d4361932c60e90e960970~mv2.png",
  "31f7f6_4543126de38841b8a4e633b321f900f1~mv2.jpg",
  "31f7f6_6b4ed78db5794514a1abfbc004cd4278~mv2.jpg",
  "31f7f6_b29c941a9f0543708548a84daefcca50~mv2.jpeg",
  "31f7f6_99bab4d564544c539adff203a060ce63~mv2.jpg",
  "31f7f6_a020029391404ceea34b40d0808be0d9~mv2.png",
  "d6f209_1850c500e5954076be34f18b3dd3bd7b~mv2.png",
  "d6f209_576d4b4c803348ca90d85693eb258e4a~mv2.png",
  "d6f209_340765e6cef14deabc77ff7286935f01~mv2.png",
  "d6f209_86689a63cc414f0294968eccbe38d699~mv2.png",
  "c422759e720247e6baa7758c3d611959.jpg",
  "ab07e4_8ca4fd378a3e4d6b982c6ba23535b005~mv2.jpg",
  "ab07e4_7d7995e8fcf042fc8195e599387a2582~mv2.jpg",
  "ab07e4_da2710b6d9a441498a943581b3e0883c~mv2.jpg",
  "11062b_1df7f63791924c3285ea7dd7096bc576~mv2.jpg",
  "ab07e4_432593b0071a45dcaf85a86379e6ed26~mv2.jpg",
  "ab07e4_4979868db51949d693d2cb291887125a~mv2.jpg",
  "ab07e4_27123123ffa14078895bcaeee2e5f5a5~mv2.webp",
];

function buildUrl(name) {
  const quality = name.endsWith(".png") ? "q_95" : "q_90";
  const align = name.endsWith(".webp") ? "al_c" : "fp_0.50_0.50";
  return `https://static.wixstatic.com/media/${name}/v1/fill/w_328,h_328,${align},${quality},enc_avif,quality_auto/${name}`;
}

function fileName(name, url, contentType) {
  const hash = createHash("sha1").update(url).digest("hex").slice(0, 10);
  const extension = contentType.includes("avif") ? ".avif" : path.extname(name).toLowerCase();
  const stem = name
    .replace(path.extname(name), "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 54);
  return `${stem}-${hash}${extension}`;
}

await mkdir(outputDir, { recursive: true });
const map = {};
for (const name of names) {
  const url = buildUrl(name);
  const response = await fetch(url, {
    headers: {
      accept: "image/avif,image/webp,image/png,image/jpeg,image/*,*/*;q=0.8",
      "user-agent": "Mozilla/5.0 Datacom asset vendor",
    },
  });
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  const contentType = response.headers.get("content-type") || "";
  const target = fileName(name, url, contentType);
  await writeFile(path.join(outputDir, target), Buffer.from(await response.arrayBuffer()));
  map[name] = `/assets/vendor/explore/${target}`;
}

await writeFile(path.join(outputDir, "map.json"), JSON.stringify(map, null, 2));
console.log(JSON.stringify(map, null, 2));
