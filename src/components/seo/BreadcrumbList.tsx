import JsonLd from "./JsonLd";

export interface Crumb {
  name: string;
  /** Absolute URL — required for Google's BreadcrumbList rich result. */
  item: string;
}

interface Props {
  /** Ordered path from Home to current page. Always include Home as the first entry. */
  crumbs: Crumb[];
  /** Stable @id so per-page breadcrumbs don't collide if multiple are emitted. */
  id?: string;
}

/**
 * Per-page BreadcrumbList. Each instance must reflect the actual path to the
 * current page (Home > Section > Page) — NOT the site nav. Emitting the site
 * nav as a BreadcrumbList violates Google's spec and was the prior pattern
 * we removed from index.html.
 */
export default function BreadcrumbList({ crumbs, id }: Props) {
  if (crumbs.length === 0) return null;
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": id ?? `${crumbs[crumbs.length - 1].item}#breadcrumb`,
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.item,
    })),
  };
  return <JsonLd data={data} id="ld-breadcrumb" />;
}
