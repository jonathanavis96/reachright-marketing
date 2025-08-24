import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  jsonLd?: object;
  image?: string;
}

/**
 * Normalize rafgraph SPA shim URLs:
 *   https://domain.com/?/about -> https://domain.com/about
 */
function normalizeCanonical(raw: string): string {
  try {
    const u = new URL(raw);
    if (u.search && u.search.startsWith("?/")) {
      const cleanPath = u.search.slice(2).replace(/~and~/g, "&");
      u.search = "";
      u.pathname = cleanPath.startsWith("/") ? cleanPath : `/${cleanPath}`;
    }
    return `${u.origin}${u.pathname}${u.hash || ""}`;
  } catch {
    return raw;
  }
}

export default function Seo({ title, description, canonical, jsonLd, image }: SeoProps) {
  let computedCanonical = canonical;
  if (!computedCanonical && typeof window !== "undefined") {
    computedCanonical = window.location.href;
  }
  if (computedCanonical) {
    computedCanonical = normalizeCanonical(computedCanonical);
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {computedCanonical && <link rel="canonical" href={computedCanonical} />}

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {computedCanonical && <meta property="og:url" content={computedCanonical} />}
      <meta property="og:site_name" content="ReachRight Marketing" />
      <meta property="og:locale" content="en_ZA" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
}
