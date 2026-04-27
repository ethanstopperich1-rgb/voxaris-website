import { useLocation } from "react-router-dom";
import { useEffect } from "react";

/**
 * NotFound previously inherited the homepage's canonical (`https://voxaris.io/`)
 * because the SPA rewrite serves index.html and the page didn't override
 * meta. Result: every wrong-URL hit (including stale sitemap ghost URLs)
 * declared itself a duplicate of /, which Google would treat as massive
 * duplicate content. We now point canonical at the actual path and emit
 * `noindex,follow` so search engines don't index 404 pages.
 */
const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);

    document.title = "Page not found | Voxaris";
    const canonical = `https://voxaris.io${location.pathname}`;

    let canonicalEl = document.head.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement | null;
    if (!canonicalEl) {
      canonicalEl = document.createElement("link");
      canonicalEl.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute("href", canonical);

    let robotsEl = document.head.querySelector(
      'meta[name="robots"]',
    ) as HTMLMetaElement | null;
    if (!robotsEl) {
      robotsEl = document.createElement("meta");
      robotsEl.setAttribute("name", "robots");
      document.head.appendChild(robotsEl);
    }
    robotsEl.setAttribute("content", "noindex, follow");
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
