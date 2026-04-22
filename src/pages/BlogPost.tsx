import { useParams, Link, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { usePageMeta } from "@/hooks/usePageMeta";
import JsonLd from "@/components/seo/JsonLd";
import LeadForm from "@/components/forms/LeadForm";
import { getPostBySlug } from "@/lib/blog";

const fmtDate = (iso: string) =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  const url = `https://voxaris.io/blog/${post.slug}`;
  const ogImage = post.ogImage
    ? `https://voxaris.io${post.ogImage}`
    : "https://voxaris.io/voxaris-og-image.png";

  usePageMeta({
    title: post.metaTitle
      ? `${post.metaTitle} | Voxaris`
      : `${post.title} | Voxaris`,
    description: post.description,
    canonical: url,
    ogImage,
  });

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.description,
    url,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "en-US",
    image: ogImage,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: {
      "@type": "Person",
      "@id": "https://voxaris.io/#founder",
      name: post.author,
      jobTitle: post.authorRole ?? "Founder",
      worksFor: { "@id": "https://voxaris.io/#organization" },
      sameAs: [
        "https://www.linkedin.com/company/voxaris-ai-solutions",
        "https://x.com/voxaris",
      ],
    },
    publisher: { "@id": "https://voxaris.io/#organization" },
  };

  const breadcrumbsLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://voxaris.io/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://voxaris.io/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  const faqLd =
    post.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  return (
    <Layout>
      <JsonLd data={articleLd} id="ld-article" />
      <JsonLd data={breadcrumbsLd} id="ld-breadcrumbs" />
      {faqLd && <JsonLd data={faqLd} id="ld-faqpage" />}

      <article className="relative">
        {/* Hero */}
        <header className="relative overflow-hidden border-b border-[hsl(var(--border))]">
          <div className="container-wide relative">
            <div className="pt-16 pb-10 lg:pt-24 lg:pb-14 max-w-3xl">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" /> All posts
              </Link>

              <p className="eyebrow mb-5">Voxaris Blog</p>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-[-0.03em] text-foreground mb-6 leading-[1.05]">
                {post.title}
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed mb-7 max-w-[60ch]">
                {post.description}
              </p>

              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="text-foreground font-medium">{post.author}</span>
                {post.authorRole && (
                  <>
                    <span>·</span>
                    <span>{post.authorRole}</span>
                  </>
                )}
                <span>·</span>
                <time dateTime={post.date}>{fmtDate(post.date)}</time>
                <span>·</span>
                <span>{post.readingTimeMin} min read</span>
              </div>
            </div>
          </div>
        </header>

        {/* Body */}
        <section className="section-padding pt-12 lg:pt-16">
          <div className="container-wide">
            <div className="max-w-[68ch] prose-vox">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeSlug]}
                components={{
                  h1: () => null, // suppress duplicate H1 from md (we already render it in header)
                  h2: ({ children, id }) => (
                    <h2
                      id={id}
                      className="text-2xl lg:text-3xl font-semibold text-foreground mt-14 mb-5 leading-snug tracking-[-0.02em]"
                    >
                      {children}
                    </h2>
                  ),
                  h3: ({ children, id }) => (
                    <h3
                      id={id}
                      className="text-xl font-semibold text-foreground mt-10 mb-4 leading-snug"
                    >
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-[16px] text-foreground/85 leading-[1.75] mb-5">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-foreground/85">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal pl-6 mb-6 space-y-2 text-foreground/85">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => (
                    <li className="leading-[1.7]">{children}</li>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-2 border-[hsl(var(--accent))/40] pl-5 my-7 italic text-foreground/90">
                      {children}
                    </blockquote>
                  ),
                  table: ({ children }) => (
                    <div className="my-8 overflow-x-auto rounded-lg border border-white/10">
                      <table className="w-full text-sm">{children}</table>
                    </div>
                  ),
                  thead: ({ children }) => (
                    <thead className="bg-white/[0.04] text-foreground">{children}</thead>
                  ),
                  th: ({ children }) => (
                    <th className="text-left font-semibold px-4 py-3 border-b border-white/10">
                      {children}
                    </th>
                  ),
                  td: ({ children }) => (
                    <td className="px-4 py-3 border-b border-white/5 text-foreground/85">
                      {children}
                    </td>
                  ),
                  a: ({ children, href }) => {
                    const isExternal = href?.startsWith("http");
                    return (
                      <a
                        href={href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className="text-foreground underline underline-offset-4 decoration-white/30 hover:decoration-white transition-colors"
                      >
                        {children}
                      </a>
                    );
                  },
                  hr: () => <hr className="my-12 border-white/10" />,
                  strong: ({ children }) => (
                    <strong className="font-semibold text-foreground">{children}</strong>
                  ),
                  code: ({ children }) => (
                    <code className="font-mono-display text-[13px] bg-white/[0.06] border border-white/10 rounded px-1.5 py-0.5">
                      {children}
                    </code>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </div>
        </section>

        {/* Footer CTA — embedded lead form */}
        <section className="border-t border-[hsl(var(--border))] section-padding pt-16">
          <div className="container-wide">
            <div className="max-w-2xl">
              <LeadForm
                source={`voxaris.io/blog/${post.slug}`}
                heading="Want to know your real AI citation share?"
                subheading="Drop your details and we'll run your business through every major AI engine, then send a prioritized fix list within 24 hours."
              />
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
}
