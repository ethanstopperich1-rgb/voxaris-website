/**
 * Render the OG/iMessage preview image.
 * Renders an HTML template to 1200×630 PNG via headless Chromium.
 * Saves to public/voxaris-og-image.png
 *
 * Usage: node scripts/og-image.mjs
 */
import { writeFileSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, "..", "public", "voxaris-og-image.png");

const HTML = `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: 1200px; height: 630px; overflow: hidden; }
  body {
    font-family: 'Bricolage Grotesque', system-ui, sans-serif;
    background:
      radial-gradient(ellipse 60% 80% at 0% 100%, rgba(220, 38, 60, 0.22), transparent 60%),
      radial-gradient(ellipse 60% 80% at 100% 0%, rgba(220, 38, 60, 0.18), transparent 60%),
      radial-gradient(ellipse 40% 50% at 50% 50%, rgba(80, 80, 80, 0.12), transparent 70%),
      #050505;
    color: #fff;
    position: relative;
  }
  /* Noise overlay */
  body::after {
    content: "";
    position: absolute; inset: 0;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.20 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
    opacity: 0.35;
    mix-blend-mode: overlay;
    pointer-events: none;
  }
  .frame {
    position: relative;
    z-index: 1;
    width: 100%; height: 100%;
    padding: 56px 72px;
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 48px;
    align-items: center;
  }
  .left { display: flex; flex-direction: column; gap: 20px; }
  .eyebrow {
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 13px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #ff5b6a;
    font-weight: 500;
    display: inline-flex; align-items: center; gap: 10px;
  }
  .eyebrow::before {
    content: "";
    width: 8px; height: 8px; border-radius: 2px;
    background: #ff5b6a;
    box-shadow: 0 0 12px #ff5b6a;
  }
  h1 {
    font-size: 72px;
    font-weight: 600;
    line-height: 0.96;
    letter-spacing: -0.03em;
    color: #fff;
  }
  h1 .muted { color: rgba(255,255,255,0.45); }
  .sub {
    font-size: 20px;
    color: rgba(255,255,255,0.7);
    line-height: 1.45;
    max-width: 44ch;
    margin-top: 4px;
  }
  .cta-row {
    display: flex; align-items: center; gap: 16px; margin-top: 8px;
  }
  .url-pill {
    display: inline-flex; align-items: center;
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 15px;
    color: #fff;
    padding: 12px 18px;
    border-radius: 8px;
    border: 1px solid rgba(255,255,255,0.15);
    background: rgba(255,255,255,0.03);
  }
  .btn {
    display: inline-flex; align-items: center; gap: 8px;
    font-size: 15px; font-weight: 600; color: #fff;
    background: linear-gradient(180deg, #ff4757, #d6243a);
    padding: 12px 22px;
    border-radius: 8px;
    box-shadow: 0 0 32px rgba(220, 38, 60, 0.45);
  }

  /* Right column: glitch question mark + score */
  .right {
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    gap: 16px;
    position: relative;
  }
  .qmark-wrap { position: relative; }
  .qmark {
    font-family: 'JetBrains Mono', monospace;
    font-size: 260px;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    text-shadow:
      0 0 28px rgba(255, 91, 106, 0.65),
      0 0 56px rgba(255, 91, 106, 0.35),
      2px 0 0 #ff2e45,
      -2px 0 0 #00e0ff;
    letter-spacing: -0.04em;
    position: relative;
  }
  /* Binary strip overlay to evoke code-glitch feel */
  .binary {
    position: absolute;
    top: 16%; left: -18%; right: -18%;
    height: 68%;
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: rgba(255,255,255,0.35);
    overflow: hidden;
    pointer-events: none;
    white-space: pre;
    line-height: 14px;
    mix-blend-mode: screen;
    mask-image: radial-gradient(ellipse 50% 60% at 50% 50%, #000 40%, transparent 72%);
    -webkit-mask-image: radial-gradient(ellipse 50% 60% at 50% 50%, #000 40%, transparent 72%);
  }
  .score {
    font-family: 'JetBrains Mono', monospace;
    font-size: 64px; font-weight: 700; letter-spacing: -0.02em;
    color: #ff3a4c;
    text-shadow: 0 0 24px rgba(255, 58, 76, 0.5);
  }
  .score .dim { color: rgba(255, 58, 76, 0.55); text-decoration: line-through; text-decoration-thickness: 3px; }

  .brand {
    position: absolute;
    left: 72px; bottom: 40px;
    display: flex; align-items: center; gap: 12px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.7);
    z-index: 2;
  }
  .brand .dot { width: 10px; height: 10px; border-radius: 2px; background: #fff; box-shadow: 0 0 14px rgba(255,255,255,0.4); }
</style>
</head>
<body>
  <div class="frame">
    <div class="left">
      <span class="eyebrow">Free AI Visibility Audit</span>
      <h1>Is your business<br><span class="muted">visible to AI?</span></h1>
      <p class="sub">Most businesses score under 40. See if ChatGPT, Perplexity, Gemini, and Claude are recommending you — or your competitors.</p>
      <div class="cta-row">
        <span class="url-pill">voxaris.io</span>
        <span class="btn">Reveal My Score →</span>
      </div>
    </div>
    <div class="right">
      <div class="qmark-wrap">
        <div class="binary" id="binary"></div>
        <div class="qmark">?</div>
      </div>
      <div class="score"><span>??</span> <span class="dim">/ 100</span></div>
    </div>
  </div>
  <div class="brand"><span class="dot"></span>Voxaris AI · voxaris.io</div>
  <script>
    // Fill the binary strip
    const el = document.getElementById('binary');
    let s = '';
    for (let i = 0; i < 40; i++) {
      let row = '';
      for (let j = 0; j < 160; j++) row += Math.random() > 0.5 ? '1' : '0';
      s += row + '\\n';
    }
    el.textContent = s;
  </script>
</body>
</html>`;

async function resolveLaunchOptions() {
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

async function main() {
  const launchOptions = await resolveLaunchOptions();
  const browser = await puppeteer.launch(launchOptions);
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });
  await page.setContent(HTML, { waitUntil: "networkidle0" });
  // Wait for fonts
  await page.evaluate(() => document.fonts.ready);
  const buffer = await page.screenshot({ type: "png", omitBackground: false });
  writeFileSync(OUT, buffer);
  console.log(`✓ Wrote ${OUT} (${buffer.length} bytes)`);
  await browser.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
