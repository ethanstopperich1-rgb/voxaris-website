/**
 * Post-build prerenderer.
 * Serves dist/ on a local port, drives a headless Chromium through every
 * route, saves the rendered HTML as dist/<route>/index.html so every URL
 * ships full content to crawlers that don't execute JavaScript.
 *
 * Uses @sparticuz/chromium (bundled Chrome + all shared libs) in CI
 * environments like Vercel, falling back to any locally-installed Chrome
 * during development.
 */
import { createServer } from "node:http";
import { readFileSync, existsSync, mkdirSync, writeFileSync, readdirSync } from "node:fs";
import { dirname, extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, "..", "dist");
const BLOG_DIR = resolve(__dirname, "..", "content", "blog");
const PORT = 4173;

const BLOG_SLUGS = existsSync(BLOG_DIR)
  ? readdirSync(BLOG_DIR)
      .filter((f) => f.endsWith(".md"))
      .map((f) => {
        // Prefer the slug field from frontmatter; fallback to filename
        const raw = readFileSync(join(BLOG_DIR, f), "utf8");
        const m = raw.match(/^slug:\s*"?([^"\n]+)"?/m);
        return m ? m[1].trim() : f.replace(/\.md$/, "");
      })
  : [];

const ROUTES = [
  "/",
  "/how-it-works",
  "/why-voxaris",
  "/book-demo",
  "/demo",
  "/products/aeo",
  "/products/talking-postcard",
  "/products/websites",
  "/products/staffing",
  "/blog",
  ...BLOG_SLUGS.map((slug) => `/blog/${slug}`),
  "/contact",
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

      if (!existsSync(filePath) || !extname(filePath)) {
        filePath = join(DIST, "index.html");
      }

      try {
        const body = readFileSync(filePath);
        const mime = MIME[extname(filePath)] || "application/octet-stream";
        res.writeHead(200, { "Content-Type": mime });
        res.end(body);
      } catch {
        res.writeHead(404);
        res.end("Not found");
      }
    });
    server.listen(PORT, () => resolveServer(server));
  });
}

async function resolveLaunchOptions() {
  // Prefer a locally-installed Chrome for fast dev loops; fall back to the
  // bundled Chromium for CI (Vercel) where system Chrome is not available
  // and the OS lacks the shared libs a stock puppeteer download expects.
  const localCandidates = [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
  ];

  for (const p of localCandidates) {
    if (existsSync(p)) {
      return {
        executablePath: p,
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
        headless: "new",
      };
    }
  }

  return {
    executablePath: await chromium.executablePath(),
    args: chromium.args,
    headless: chromium.headless,
  };
}

async function prerender() {
  if (!existsSync(join(DIST, "index.html"))) {
    console.error("[prerender] dist/index.html missing — run vite build first.");
    process.exit(1);
  }

  const server = await startServer();
  console.log(`[prerender] dev server up on http://localhost:${PORT}`);

  const launchOptions = await resolveLaunchOptions();
  console.log(`[prerender] chromium: ${launchOptions.executablePath}`);
  const browser = await puppeteer.launch(launchOptions);

  const results = [];

  try {
    for (const route of ROUTES) {
      const page = await browser.newPage();
      const url = `http://localhost:${PORT}${route}`;
      try {
        await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });
        await page.evaluate(() => new Promise((r) => setTimeout(r, 300)));
        await page.evaluate(() => {
          document.documentElement.dataset.prerendered = "true";
        });

        const html = await page.content();
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
