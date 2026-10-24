// Run against a local Chrome debugging instance and the production preview.
import { writeFile } from "node:fs/promises";
const targets = await fetch("http://localhost:9333/json").then((r) => r.json());
const target = targets.find((entry) => entry.type === "page");
const socket = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolve) => socket.addEventListener("open", resolve, { once: true }));
let id = 0;
const pending = new Map();
socket.addEventListener("message", ({ data }) => {
  const message = JSON.parse(data);
  if (pending.has(message.id)) {
    pending.get(message.id)(message);
    pending.delete(message.id);
  }
});
async function send(method, params = {}) {
  const requestId = ++id;
  const result = new Promise((resolve) => pending.set(requestId, resolve));
  socket.send(JSON.stringify({ id: requestId, method, params }));
  const response = await result;
  if (response.error) throw new Error(JSON.stringify(response.error));
  return response.result;
}
try {
  for (const width of [375, 768, 1440]) {
    await send("Emulation.setDeviceMetricsOverride", { width, height: 1000, deviceScaleFactor: 1, mobile: false });
    await send("Page.navigate", { url: "http://localhost:3100" });
    await new Promise((resolve) => setTimeout(resolve, 1500));
    await send("Runtime.evaluate", {
      expression: `Promise.all([...document.images].map(i=>{i.loading='eager';return i.decode().catch(()=>null)}))`,
      awaitPromise: true,
    });
    const result = await send("Runtime.evaluate", {
      expression: `JSON.stringify({width:innerWidth,scrollWidth:document.documentElement.scrollWidth,brokenAnchors:[...document.querySelectorAll('a[href^="#"]')].filter(a=>!document.getElementById(a.hash.slice(1))).map(a=>a.hash),failedImages:[...document.images].filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src)})`,
      returnByValue: true,
    });
    console.log(result.result.value);
    const { cssContentSize } = await send("Page.getLayoutMetrics");
    const image = await send("Page.captureScreenshot", {
      format: "png", captureBeyondViewport: true,
      clip: { x: 0, y: 0, width, height: cssContentSize.height, scale: 1 },
    });
    await writeFile(`${process.env.TEMP}/opencode/kern-checked-${width}.png`, Buffer.from(image.data, "base64"));
  }
} finally {
  socket.close();
}
