/**
 * Push every URL from public/sitemap.xml to IndexNow.
 * Pings Bing + Yandex + Naver instantly. Their crawlers usually re-fetch
 * within seconds to a few minutes.
 *
 * Run order: vite build → prerender.mjs → this script (post-build only on
 * Vercel production deploys, gated by VERCEL_ENV).
 *
 * Env vars:
 *   INDEXNOW_KEY  — 32-char key (also hosted at /<key>.txt for ownership)
 *   INDEXNOW_HOST — defaults to voxaris.io
 *   FORCE_INDEXNOW=1 — override the prod-only gate (for manual testing)
 */
import { readFileSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITEMAP = resolve(__dirname, "..", "public", "sitemap.xml");

const KEY = process.env.INDEXNOW_KEY;
const HOST = process.env.INDEXNOW_HOST ?? "voxaris.io";
const VERCEL_ENV = process.env.VERCEL_ENV;
const FORCE = process.env.FORCE_INDEXNOW === "1";

function log(msg) {
  console.log(`[indexnow] ${msg}`);
}

async function main() {
  // Only run on Vercel production deploys, unless force-flagged.
  if (!FORCE && VERCEL_ENV !== "production") {
    log(`skipping (VERCEL_ENV=${VERCEL_ENV ?? "unset"}; set FORCE_INDEXNOW=1 to override)`);
    return;
  }
  if (!KEY) {
    log("INDEXNOW_KEY env var not set — skipping");
    return;
  }
  if (!existsSync(SITEMAP)) {
    log(`sitemap not found at ${SITEMAP} — skipping`);
    return;
  }

  const xml = readFileSync(SITEMAP, "utf8");
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  if (urls.length === 0) {
    log("no URLs in sitemap — skipping");
    return;
  }

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList: urls,
  };

  log(`pushing ${urls.length} URLs to IndexNow for ${HOST}`);

  try {
    const res = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    });
    const text = await res.text();
    if (res.ok || res.status === 202) {
      log(`✓ accepted (HTTP ${res.status})`);
    } else {
      log(`⚠ rejected (HTTP ${res.status}): ${text.slice(0, 200)}`);
      // Don't fail the build for IndexNow issues
    }
  } catch (err) {
    log(`✗ error: ${err instanceof Error ? err.message : String(err)}`);
  }
}

main().catch((err) => {
  console.error(err);
  // never fail the build
  process.exit(0);
});
