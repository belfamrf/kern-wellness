import { mkdirSync, writeFileSync, readFileSync, rmSync, existsSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const kit = root;
const masters = join(kit, "masters");
const exportsDir = join(kit, "exports");
const publicBrand = join(root, "..", "public", "brand");
const tmp = join(process.env.TEMP ?? process.env.TMP ?? ".", "opencode", "kern-render");

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const INK = "#1b1d19";
const BONE = "#f3f0e8";
const MOSS = "#4a5545";
const LIME = "#d8f36b";

const SYMBOL_D = "M48 32h32v80l96-80h38l-96 96 96 96h-38l-96-80v80H48z";
const SYMBOL_SMALL_D = "M48 32h34v80h14l80-80h38l-80 96 80 96h-38l-80-80H82v80H48z";

const WORDMARK = [
  { d: "M20 56h22v144H20z M42 122h18l47-66h27l-52 72 52 72h-27l-47-65H42z" },
  { d: "M160 56h86v20h-64v40h55v20h-55v44h66v20h-88z" },
  {
    d: "M278 56h51c32 0 49 15 49 40 0 18-9 31-26 37l33 67h-25l-29-61h-31v61h-22zm22 20v43h28c19 0 28-7 28-22 0-14-9-21-28-21z",
    rule: "evenodd",
  },
  { d: "M405 56h22l55 99V56h22v144h-22l-55-99v99h-22z" },
];

const HORIZONTAL_WORDMARK = [
  { d: "M300 56h22v144h-22z M322 122h18l47-66h27l-52 72 52 72h-27l-47-65h-18z" },
  { d: "M438 56h86v20h-64v40h55v20h-55v44h66v20h-88z" },
  {
    d: "M556 56h51c32 0 49 15 49 40 0 18-9 31-26 37l33 67h-25l-29-61h-31v61h-22zm22 20v43h28c19 0 28-7 28-22 0-14-9-21-28-21z",
    rule: "evenodd",
  },
  { d: "M683 56h22l55 99V56h22v144h-22l-55-99v99h-22z" },
];

function wordmark(palette, transform) {
  const paths = WORDMARK.map(
    (p) =>
      `<path${p.rule ? ` fill-rule="${p.rule}"` : ""} fill="${palette.mark}" d="${p.d}"/>`,
  ).join("\n    ");
  return `<g id="wordmark"${transform ? ` transform="${transform}"` : ""}>\n    ${paths}\n  </g>`;
}

function horizontalWordmark(palette) {
  const paths = HORIZONTAL_WORDMARK.map(
    (p) =>
      `<path${p.rule ? ` fill-rule="${p.rule}"` : ""} fill="${palette.mark}" d="${p.d}"/>`,
  ).join("\n    ");
  return `<g id="wordmark">\n    ${paths}\n  </g>`;
}

function symbol(palette, { small = false, transform = "" } = {}) {
  const d = small ? SYMBOL_SMALL_D : SYMBOL_D;
  const r = small ? 8 : 7;
  return `<g id="symbol"${transform ? ` transform="${transform}"` : ""}>
    <path fill="${palette.mark}" d="${d}"/>
    <circle cx="128" cy="128" r="${r}" fill="${palette.point}"/>
  </g>`;
}

function wrap({ width, height, viewBox, label, body }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" width="${width}" height="${height}" role="img" aria-labelledby="kern-title">
  <title id="kern-title">${label}</title>
  ${body}
</svg>
`;
}

const files = new Map();

const variants = {
  ink: { mark: INK, point: LIME },
  reversed: { mark: BONE, point: LIME },
  mono: { mark: MOSS, point: MOSS },
};

for (const [name, palette] of Object.entries(variants)) {
  const suffix = name === "ink" ? "black" : name === "reversed" ? "white" : "mono-4a5545";
  files.set(`exports/kern-symbol-${suffix}.svg`, wrap({
    width: 256,
    height: 256,
    viewBox: "0 0 256 256",
    label: "KERN symbol",
    body: symbol(palette),
  }));
  files.set(`exports/kern-horizontal-${suffix}.svg`, wrap({
    width: 820,
    height: 256,
    viewBox: "0 0 820 256",
    label: "KERN horizontal logo",
    body: `${symbol(palette)}\n  ${horizontalWordmark(palette)}`,
  }));
  files.set(`exports/kern-stacked-${suffix}.svg`, wrap({
    width: 520,
    height: 442,
    viewBox: "0 0 520 442",
    label: "KERN stacked logo",
    body: `${symbol(palette, { transform: "translate(142.1 11.2) scale(0.9)" })}\n  ${wordmark(palette, "translate(-2 200.8)")}`,
  }));
  files.set(`exports/kern-wordmark-${suffix}.svg`, wrap({
    width: 532,
    height: 192,
    viewBox: "-4 32 532 192",
    label: "KERN wordmark",
    body: wordmark(palette),
  }));
}

files.set("masters/kern-symbol.svg", files.get("exports/kern-symbol-black.svg"));
files.set("masters/kern-symbol-small.svg", wrap({
  width: 256,
  height: 256,
  viewBox: "0 0 256 256",
  label: "KERN small-size symbol",
  body: symbol({ mark: INK, point: LIME }, { small: true }),
}));
files.set("masters/kern-horizontal.svg", files.get("exports/kern-horizontal-black.svg"));
files.set("masters/kern-stacked.svg", files.get("exports/kern-stacked-black.svg"));
files.set("masters/kern-wordmark.svg", files.get("exports/kern-wordmark-black.svg"));

function iconSvg(radius, scale = 0.885) {
  const size = 256;
  const content = 166;
  const tx = ((size - content * scale) / 2 - 48 * scale).toFixed(2);
  const ty = (128 - 128 * scale).toFixed(2);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256">
  <rect width="256" height="256" rx="${radius}" fill="${INK}"/>
  <g transform="translate(${tx} ${ty}) scale(${scale})">
    <path fill="${BONE}" d="${SYMBOL_SMALL_D}"/>
    <circle cx="128" cy="128" r="8" fill="${LIME}"/>
  </g>
</svg>
`;
}

files.set("exports/favicon.svg", iconSvg(44, 0.95));
files.set("exports/kern-symbol-app-icon.svg", iconSvg(57.6, 0.885));
files.set("exports/kern-symbol-square.svg", iconSvg(0, 0.95));

for (const [path, content] of files) {
  const target = join(kit, path);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, content, "utf8");
}

mkdirSync(exportsDir, { recursive: true });
mkdirSync(publicBrand, { recursive: true });

for (const name of [
  "favicon.svg",
  "favicon.ico",
  "apple-touch-icon.png",
  "icon-192.png",
  "icon-512.png",
  "kern-horizontal.svg",
  "kern-symbol-white.svg",
  "kern-symbol-small.svg",
  "site.webmanifest",
]) {
  const from = join(exportsDir, name);
  if (existsSync(from)) {
    writeFileSync(join(publicBrand, name), readFileSync(from));
  }
}

mkdirSync(tmp, { recursive: true });

function render(svgPath, outPath, width, height, { transparent = true } = {}) {
  const url = "file:///" + svgPath.replace(/\\/g, "/");
  const wrapper = join(tmp, "frame.html");
  writeFileSync(
    wrapper,
    `<!doctype html><meta charset="utf-8"><style>html,body{margin:0;background:transparent}img{display:block;width:${width}px;height:${height}px}</style><img src="${url}" alt="">`,
    "utf8",
  );
  const args = [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--no-first-run",
    "--no-default-browser-check",
    `--user-data-dir=${join(tmp, "profile")}`,
    ...(transparent ? ["--default-background-color=00000000"] : []),
    `--window-size=${width},${height}`,
    `--screenshot=${outPath}`,
    "file:///" + wrapper.replace(/\\/g, "/"),
  ];
  spawnSync(CHROME, args, { stdio: "ignore" });
  return outPath;
}

function renderPng(svgRelPath, outRelPath, width, height = width) {
  const svgPath = join(kit, svgRelPath);
  const outPath = join(kit, outRelPath);
  mkdirSync(dirname(outPath), { recursive: true });
  render(svgPath, outPath, width, height);
}

const sink = [
  ["exports/kern-symbol-black.svg", "exports/kern-symbol-black-512.png", 512, 512],
  ["exports/kern-symbol-white.svg", "exports/kern-symbol-white-512.png", 512, 512],
  ["exports/kern-symbol-mono-4a5545.svg", "exports/kern-symbol-mono-4a5545-512.png", 512, 512],
  ["exports/kern-horizontal-black.svg", "exports/kern-horizontal-black-512.png", 512, 160],
  ["exports/kern-horizontal-white.svg", "exports/kern-horizontal-white-512.png", 512, 160],
  ["exports/kern-horizontal-mono-4a5545.svg", "exports/kern-horizontal-mono-4a5545-512.png", 512, 160],
  ["exports/kern-stacked-black.svg", "exports/kern-stacked-black-512.png", 512, 435],
  ["exports/kern-stacked-white.svg", "exports/kern-stacked-white-512.png", 512, 435],
  ["exports/kern-stacked-mono-4a5545.svg", "exports/kern-stacked-mono-4a5545-512.png", 512, 435],
  ["exports/kern-wordmark-black.svg", "exports/kern-wordmark-black-512.png", 512, 185],
  ["exports/kern-wordmark-white.svg", "exports/kern-wordmark-white-512.png", 512, 185],
  ["exports/kern-wordmark-mono-4a5545.svg", "exports/kern-wordmark-mono-4a5545-512.png", 512, 185],
  ["exports/favicon.svg", "exports/favicon-16.png", 16],
  ["exports/favicon.svg", "exports/favicon-32.png", 32],
  ["exports/favicon.svg", "exports/favicon-48.png", 48],
  ["exports/favicon.svg", "exports/apple-touch-icon.png", 180],
  ["exports/favicon.svg", "exports/icon-192.png", 192],
  ["exports/favicon.svg", "exports/icon-512.png", 512],
  ["exports/kern-symbol-app-icon.svg", "exports/kern-symbol-app-icon-32.png", 32],
  ["exports/kern-symbol-app-icon.svg", "exports/kern-symbol-app-icon-64.png", 64],
  ["exports/kern-symbol-app-icon.svg", "exports/kern-symbol-app-icon-180.png", 180],
  ["exports/kern-symbol-app-icon.svg", "exports/kern-symbol-app-icon-512.png", 512],
  ["exports/kern-symbol-square.svg", "exports/kern-symbol-square-32.png", 32],
  ["exports/kern-symbol-square.svg", "exports/kern-symbol-square-64.png", 64],
  ["exports/kern-symbol-square.svg", "exports/kern-symbol-square-180.png", 180],
  ["exports/kern-symbol-square.svg", "exports/kern-symbol-square-512.png", 512],
  ["exports/favicon.svg", "exports/kern-symbol-favicon-32.png", 32],
  ["exports/favicon.svg", "exports/kern-symbol-favicon-64.png", 64],
  ["exports/favicon.svg", "exports/kern-symbol-favicon-180.png", 180],
  ["exports/favicon.svg", "exports/kern-symbol-favicon-512.png", 512],
  ["exports/kern-symbol-black.svg", "exports/kern-symbol-black-32.png", 32],
  ["exports/kern-symbol-black.svg", "exports/kern-symbol-black-64.png", 64],
  ["exports/kern-symbol-black.svg", "exports/kern-symbol-black-180.png", 180],
  ["exports/kern-symbol-white.svg", "exports/kern-symbol-white-32.png", 32],
  ["exports/kern-symbol-white.svg", "exports/kern-symbol-white-64.png", 64],
  ["exports/kern-symbol-white.svg", "exports/kern-symbol-white-180.png", 180],
  ["exports/kern-symbol-mono-4a5545.svg", "exports/kern-symbol-mono-4a5545-32.png", 32],
  ["exports/kern-symbol-mono-4a5545.svg", "exports/kern-symbol-mono-4a5545-64.png", 64],
  ["exports/kern-symbol-mono-4a5545.svg", "exports/kern-symbol-mono-4a5545-180.png", 180],
];

const maskable = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="512" height="512">
  <rect width="256" height="256" fill="${INK}"/>
  <g transform="translate(25.82 28.16) scale(0.78)">
    <path fill="${BONE}" d="${SYMBOL_SMALL_D}"/>
    <circle cx="128" cy="128" r="8" fill="${LIME}"/>
  </g>
</svg>
`;
writeFileSync(join(kit, "exports", "maskable.svg"), maskable, "utf8");

for (const [svg, out, w, h] of sink) {
  renderPng(svg, out, w, h);
}

renderPng("exports/maskable.svg", "exports/maskable-512.png", 512);

function renderFit(svgRelPath, outRelPath, width = 320, size = 512) {
  const url = "file:///" + join(kit, svgRelPath).replace(/\\/g, "/");
  const wrapper = join(tmp, "fit.html");
  writeFileSync(
    wrapper,
    `<!doctype html><meta charset="utf-8"><style>html,body{margin:0;height:100%;display:grid;place-items:center;background:transparent}img{display:block;width:${width}px;height:auto}</style><img src="${url}" alt="">`,
    "utf8",
  );
  mkdirSync(dirname(join(kit, outRelPath)), { recursive: true });
  spawnSync(
    CHROME,
    [
      "--headless=new",
      "--disable-gpu",
      "--hide-scrollbars",
      "--no-first-run",
      "--no-default-browser-check",
      `--user-data-dir=${join(tmp, "profile-fit")}`,
      "--default-background-color=00000000",
      `--window-size=${size},${size}`,
      `--screenshot=${join(kit, outRelPath)}`,
      "file:///" + wrapper.replace(/\\/g, "/"),
    ],
    { stdio: "ignore" },
  );
}

renderFit("masters/kern-symbol.svg", "renders/kern-symbol.png", 320);
renderFit("masters/kern-symbol-small.svg", "renders/kern-symbol-small.png", 320);
renderFit("masters/kern-horizontal.svg", "renders/kern-horizontal.png", 440);
renderFit("masters/kern-stacked.svg", "renders/kern-stacked.png", 340);
renderFit("exports/kern-symbol-app-icon.svg", "renders/kern-symbol-app-icon.png", 320);

function ico(sizes) {
  const images = sizes.map((size) => {
    const tmpPng = join(tmp, `ico-${size}.png`);
    render(join(exportsDir, "favicon.svg"), tmpPng, size, size);
    return { size, data: readFileSync(tmpPng) };
  });
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  let offset = 6 + images.length * 16;
  const entries = images.map(({ size, data }) => {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size === 256 ? 0 : size, 0);
    entry.writeUInt8(size === 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(data.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += data.length;
    return entry;
  });
  return Buffer.concat([header, ...entries, ...images.map((i) => i.data)]);
}

writeFileSync(join(exportsDir, "favicon.ico"), ico([16, 32, 48]));

const manifest = {
  name: "KERN — Strength, measured.",
  short_name: "KERN",
  description: "A quiet Copenhagen strength and mobility studio.",
  id: "/",
  start_url: "/",
  scope: "/",
  icons: [
    { src: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
    { src: "/brand/icon-512.png", sizes: "512x512", type: "image/png" },
    { src: "/brand/maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
  ],
  theme_color: INK,
  background_color: INK,
  display: "standalone",
};
writeFileSync(join(exportsDir, "site.webmanifest"), JSON.stringify(manifest, null, 2) + "\n", "utf8");

for (const name of ["favicon.svg", "favicon.ico", "apple-touch-icon.png", "icon-192.png", "icon-512.png", "maskable-512.png", "site.webmanifest"]) {
  writeFileSync(join(publicBrand, name), readFileSync(join(exportsDir, name)));
}

writeFileSync(join(publicBrand, "kern-horizontal.svg"), readFileSync(join(exportsDir, "kern-horizontal-black.svg")));
writeFileSync(join(publicBrand, "kern-symbol-white.svg"), readFileSync(join(exportsDir, "kern-symbol-white.svg")));
writeFileSync(join(publicBrand, "kern-symbol-small.svg"), readFileSync(join(masters, "kern-symbol-small.svg")));

rmSync(tmp, { recursive: true, force: true });

console.log("logo assets written");
