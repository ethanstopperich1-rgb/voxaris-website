import { useEffect } from "react";

interface PageMeta {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

function upsertMeta(key: string, content: string, useProperty = false) {
  const attr = useProperty ? "property" : "name";
  let el = document.head.querySelector(
    `meta[${attr}="${key}"]`,
  ) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector(
    `link[rel="${rel}"]`,
  ) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function usePageMeta({ title, description, canonical, ogImage }: PageMeta) {
  useEffect(() => {
    document.title = title;
    upsertMeta("description", description);
    upsertMeta("og:title", title, true);
    upsertMeta("og:description", description, true);
    upsertMeta("twitter:title", title);
    upsertMeta("twitter:description", description);
    if (canonical) {
      upsertLink("canonical", canonical);
      upsertMeta("og:url", canonical, true);
    }
    if (ogImage) {
      upsertMeta("og:image", ogImage, true);
      upsertMeta("twitter:image", ogImage);
    }
  }, [title, description, canonical, ogImage]);
}
