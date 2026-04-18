/**
 * Post-build prerenderer.
 * Serves dist/ on a local port, drives puppeteer through every route,
 * saves the rendered HTML as dist/<route>/index.html so every URL ships
 * full content to crawlers that don't execute JS.
 */
import { createServer } from "node:http";
import { readFileSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, "..", "dist");
const PORT = 4173;

const ROUTES = [
  "/",
  "/how-it-works",
  "/pricing",
  "/why-voxaris",
  "/book-demo",
  "/demo",
  "/products/aeo",
  "/products/websites",
  "/products/talking-postcard",
  "/products/voice-agent",
  "/products/video-agent",
  "/products/staffing-agent",
  "/solutions/agencies",
  "/solutions/dealerships",
  "/privacy",
  "/terms",
];

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function startServer() {
  return new Promise((resolveServer) => {
    const server = createServer((req, res) => {
      let urlPath = decodeURIComponent(req.url.split("?")[0]);
      if (urlPath === "/") urlPath = "/index.html";
      let filePath = join(DIST, urlPath);

      // SPA fallback: if the requested path isn't a real file, serve index.html
      if (!existsSync(filePath) || !extname(filePath)) {
        filePath = join(DIST, "index.html");
      }

      try {
        const body = readFileSync(filePath);
        const mime = MIME[extname(filePath)] || "application/octet-stream";
        res.writeHead(200, { "Content-Type": mime });
        res.end(body);
      } catch (err) {
        res.writeHead(404);
        res.end("Not found");
      }
    });
    server.listen(PORT, () => resolveServer(server));
  });
}

async function prerender() {
  if (!existsSync(join(DIST, "index.html"))) {
    console.error(`[prerender] dist/index.html missing — run vite build first.`);
    process.exit(1);
  }

  const server = await startServer();
  console.log(`[prerender] dev server up on http://localhost:${PORT}`);

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const results = [];

  try {
    for (const route of ROUTES) {
      const page = await browser.newPage();
      const url = `http://localhost:${PORT}${route}`;

      try {
        await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });
        // Give framer-motion + any deferred effects a tick to settle
        await page.evaluate(() => new Promise((r) => setTimeout(r, 300)));

        // Stamp the prerendered flag so the runtime knows to hydrate
        await page.evaluate(() => {
          document.documentElement.dataset.prerendered = "true";
        });

        const html = await page.content();

        // Write as dist/<route>/index.html (or dist/index.html for "/")
        const outDir = route === "/" ? DIST : join(DIST, route);
        mkdirSync(outDir, { recursive: true });
        writeFileSync(join(outDir, "index.html"), html, "utf8");

        results.push({ route, size: html.length, ok: true });
      } catch (err) {
        results.push({ route, ok: false, error: err.message });
      } finally {
        await page.close();
      }
    }
  } finally {
    await browser.close();
    server.close();
  }

  const ok = results.filter((r) => r.ok);
  const failed = results.filter((r) => !r.ok);

  console.log(`\n[prerender] rendered ${ok.length}/${ROUTES.length} routes`);
  for (const r of ok) console.log(`  ✓ ${r.route.padEnd(36)} ${r.size}b`);
  for (const r of failed) console.log(`  ✗ ${r.route.padEnd(36)} ${r.error}`);

  if (failed.length) process.exit(1);
}

prerender().catch((err) => {
  console.error("[prerender] fatal:", err);
  process.exit(1);
});
