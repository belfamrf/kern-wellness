import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const kit = join(root, "logo-kit");
const out = join(root, "public", "brand", "kern-og.png");
const tmp = join(process.env.TEMP ?? process.env.TMP ?? ".", "opencode", "kern-og");

const chromeCandidates = [
  process.env.CHROME_PATH,
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  join(process.env.LOCALAPPDATA ?? "", "Google", "Chrome", "Application", "chrome.exe"),
].filter(Boolean);

const chrome = chromeCandidates.find((candidate) => existsSync(candidate));
if (!chrome) {
  throw new Error("Chrome not found. Set CHROME_PATH to chrome.exe.");
}

function font(file) {
  return readFileSync(join(kit, "fonts", file)).toString("base64");
}

function logo(file) {
  return readFileSync(join(kit, "exports", file), "utf8")
    .replace(/<title[\s\S]*?<\/title>/g, "")
    .replace(/role="img"/g, "")
    .replace(/aria-labelledby="kern-title"/g, "")
    .replace(/\swidth="\d+"/, "")
    .replace(/\sheight="\d+"/, "");
}

const wordmark = logo("kern-wordmark-white.svg");
const symbol = logo("kern-symbol-white.svg");

const html = `<!doctype html>
<html lang="en">
<meta charset="utf-8">
<title>KERN — social card</title>
<style>
  @font-face{font-family:"Fraunces";src:url(data:font/woff2;base64,${font("fraunces-latin.woff2")}) format("woff2");font-weight:100 900;font-display:block}
  @font-face{font-family:"Manrope";src:url(data:font/woff2;base64,${font("manrope-latin.woff2")}) format("woff2");font-weight:200 800;font-display:block}
  :root{--ink:#1b1d19;--bone:#f3f0e8;--lime:#d8f36b;--muted:rgba(243,240,232,.62)}
  *{box-sizing:border-box}
  html,body{margin:0;width:1200px;height:630px;overflow:hidden}
  body{
    background:var(--ink);color:var(--bone);
    font-family:"Manrope",Arial,sans-serif;
    padding:54px 72px 44px;
    display:flex;flex-direction:column;justify-content:space-between;
  }
  header{display:flex;align-items:center;justify-content:space-between}
  .brand svg{display:block;height:30px;width:auto}
  .tag{font-size:12px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:var(--muted)}
  main{display:flex;align-items:center;justify-content:space-between;gap:56px}
  h1{
    margin:0;font-family:"Fraunces",Georgia,serif;font-weight:500;
    font-size:124px;line-height:.9;letter-spacing:-.03em;
  }
  h1 .stop{color:var(--lime)}
  .lead{margin:28px 0 0;max-width:30ch;font-size:24px;line-height:1.42;color:var(--muted)}
  .mark{flex:0 0 auto;width:236px}
  .mark svg{display:block;width:100%;height:auto}
  footer{
    display:flex;align-items:center;justify-content:space-between;
    border-top:1px solid rgba(243,240,232,.18);padding-top:20px;
    font-size:12px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:var(--muted);
  }
  .url{display:flex;align-items:center;gap:10px;font-size:15px;font-weight:500;letter-spacing:.01em;text-transform:none;color:var(--bone)}
  .dot{width:9px;height:9px;border-radius:50%;background:var(--lime);display:inline-block}
</style>
<header>
  <div class="brand">${wordmark}</div>
  <div class="tag">Concept project</div>
</header>
<main>
  <div>
    <h1>Strength,<br>measured<span class="stop">.</span></h1>
    <p class="lead">A quiet strength and mobility studio in Nørrebro, Copenhagen.</p>
  </div>
  <div class="mark">${symbol}</div>
</main>
<footer>
  <span>Strength &amp; mobility · Nørrebro</span>
  <span class="url"><span class="dot"></span>kern.belfamuhammad.com</span>
</footer>
</html>`;

mkdirSync(tmp, { recursive: true });
mkdirSync(dirname(out), { recursive: true });
const page = join(tmp, "og.html");
writeFileSync(page, html, "utf8");

const result = spawnSync(
  chrome,
  [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--no-first-run",
    "--no-default-browser-check",
    `--user-data-dir=${join(tmp, "profile")}`,
    "--force-device-scale-factor=1",
    "--default-background-color=1b1d19",
    "--virtual-time-budget=4000",
    "--run-all-compositor-stages-before-draw",
    "--window-size=1200,630",
    `--screenshot=${out}`,
    "file:///" + page.replace(/\\/g, "/"),
  ],
  { stdio: "ignore" },
);

if (result.status !== 0 || !existsSync(out)) {
  throw new Error(`Chrome render failed (status ${result.status}).`);
}

const png = readFileSync(out);
const width = png.readUInt32BE(16);
const height = png.readUInt32BE(20);
if (width !== 1200 || height !== 630) {
  throw new Error(`Unexpected image size: ${width}x${height}`);
}

console.log(`wrote ${out}`);
console.log(`size ${width}x${height}, ${Math.round(statSync(out).size / 1024)} KB`);
