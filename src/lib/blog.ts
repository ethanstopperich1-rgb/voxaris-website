// Minimal YAML frontmatter parser — handles the keys we use without requiring
// Node's Buffer (which gray-matter does).
function parseFrontmatter(raw: string): { data: Record<string, string>; content: string } {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };
  const [, yaml, content] = match;
  const data: Record<string, string> = {};
  for (const line of yaml.split("\n")) {
    const kv = line.match(/^([A-Za-z0-9_-]+)\s*:\s*(.*)$/);
    if (!kv) continue;
    let value = kv[2].trim();
    // Strip surrounding quotes (double or single)
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    data[kv[1]] = value;
  }
  return { data, content };
}

export interface PostFrontmatter {
  title: string;
  slug: string;
  description: string;
  date: string;
  author: string;
  authorRole?: string;
  ogImage?: string;
  canonical?: string;
}

export interface BlogPost extends PostFrontmatter {
  content: string;
  faqs: Array<{ q: string; a: string }>;
  readingTimeMin: number;
}

// Eagerly load all .md files in /content/blog at build time.
// Vite turns this into a static map.
const modules = import.meta.glob("/content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function estimateReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}

/**
 * Pull H3 question/answer pairs from the FAQ section so we can emit FAQPage JSON-LD.
 * Looks for an H2 starting with "FAQ" or "Frequently asked", then takes following H3s
 * with their immediate paragraph as the answer.
 */
function extractFaqs(markdown: string): Array<{ q: string; a: string }> {
  const lines = markdown.split("\n");
  const faqs: Array<{ q: string; a: string }> = [];
  let inFaq = false;
  let currentQ: string | null = null;
  let currentABuf: string[] = [];

  const flush = () => {
    if (currentQ && currentABuf.length) {
      const a = currentABuf
        .join(" ")
        .replace(/\s+/g, " ")
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // strip md links
        .replace(/[*_`]/g, "")
        .trim();
      if (a) faqs.push({ q: currentQ, a });
    }
    currentQ = null;
    currentABuf = [];
  };

  for (const raw of lines) {
    const line = raw.trimEnd();
    // Section detection
    if (/^##\s+/.test(line)) {
      flush();
      inFaq = /^##\s+(faq|frequently asked)/i.test(line);
      continue;
    }
    if (!inFaq) continue;
    // Stop at horizontal rule (end of FAQ section)
    if (/^---+$/.test(line)) {
      flush();
      inFaq = false;
      continue;
    }
    // New question
    if (/^###\s+/.test(line)) {
      flush();
      currentQ = line.replace(/^###\s+/, "").trim();
      continue;
    }
    // Accumulate answer body until next ### or block
    if (currentQ && line.trim()) {
      currentABuf.push(line.trim());
    } else if (currentQ && !line.trim() && currentABuf.length) {
      // blank line ends the answer
      flush();
    }
  }
  flush();
  return faqs;
}

function parseOne(_filePath: string, raw: string): BlogPost {
  const { data, content } = parseFrontmatter(raw);
  const fm = data as unknown as PostFrontmatter;
  return {
    ...fm,
    content,
    faqs: extractFaqs(content),
    readingTimeMin: estimateReadingTime(content),
  };
}

const ALL_POSTS: BlogPost[] = Object.entries(modules)
  .map(([path, raw]) => parseOne(path, raw))
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export function getAllPosts(): BlogPost[] {
  return ALL_POSTS;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return ALL_POSTS.find((p) => p.slug === slug);
}
