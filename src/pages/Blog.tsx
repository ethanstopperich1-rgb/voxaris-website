import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { usePageMeta } from "@/hooks/usePageMeta";
import JsonLd from "@/components/seo/JsonLd";
import { getAllPosts } from "@/lib/blog";

const fmtDate = (iso: string) =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default function Blog() {
  const posts = getAllPosts();

  usePageMeta({
    title: "Blog | Voxaris AI — AEO, Citation Strategy & AI Visibility",
    description:
      "Voxaris AI blog. Practical playbooks for getting cited by ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews.",
    canonical: "https://voxaris.io/blog",
  });

  const collectionLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://voxaris.io/blog#collection",
    name: "Voxaris AI Blog",
    url: "https://voxaris.io/blog",
    description:
      "Voxaris AI blog. Practical playbooks for getting cited by ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews.",
    isPartOf: { "@id": "https://voxaris.io/#website" },
    publisher: { "@id": "https://voxaris.io/#organization" },
    inLanguage: "en-US",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `https://voxaris.io/blog/${p.slug}`,
        name: p.title,
      })),
    },
  };

  const breadcrumbsLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://voxaris.io/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://voxaris.io/blog" },
    ],
  };

  return (
    <Layout>
      <JsonLd data={collectionLd} id="ld-blog-collection" />
      <JsonLd data={breadcrumbsLd} id="ld-blog-breadcrumbs" />

      <section className="relative overflow-hidden border-b border-[hsl(var(--border))]">
        <div className="container-wide relative">
          <div className="pt-20 pb-12 lg:pt-28 lg:pb-16 max-w-3xl">
            <p className="eyebrow mb-4">The Voxaris Blog</p>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-[-0.03em] text-foreground mb-5 leading-[1.05]">
              Citation playbooks
              <br />
              <span className="text-muted-foreground">for the AI search era.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-[55ch] leading-relaxed">
              Real frameworks, real case studies, and weekly citation data across ChatGPT,
              Perplexity, Claude, Gemini, and Google AI Overviews.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          {posts.length === 0 ? (
            <p className="text-muted-foreground">No posts yet.</p>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((p, i) => (
                <motion.article
                  key={p.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-white/20 hover:bg-white/[0.05] transition-colors flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4 text-[12px] text-muted-foreground">
                    <time dateTime={p.date}>{fmtDate(p.date)}</time>
                    <span>·</span>
                    <span>{p.readingTimeMin} min read</span>
                  </div>
                  <h2 className="text-xl font-semibold text-foreground leading-snug mb-3">
                    <Link to={`/blog/${p.slug}`} className="hover:text-white/90">
                      {p.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-grow">
                    {p.description}
                  </p>
                  <div className="flex items-center justify-between text-[13px]">
                    <span className="text-muted-foreground">{p.author}</span>
                    <Link
                      to={`/blog/${p.slug}`}
                      className="text-foreground hover:opacity-80 transition-opacity"
                    >
                      Read →
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
