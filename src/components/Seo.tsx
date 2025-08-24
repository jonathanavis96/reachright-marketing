import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  jsonLd?: object;
  image?: string; // Optional OG/Twitter image
}

/**
 * Normalize rafgraph SPA URLs:
 *   https://example.com/?/pricing  -> https://example.com/pricing
 *   Keeps hash, drops the shim query.
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
  // Decide canonical: explicit prop wins; else use current location
  let computedCanonical = canonical;
  if (!computedCanonical && typeof window !== "undefined") {
    computedCanonical = window.location.href;
  }
  if (computedCanonical) {
    computedCanonical = normalizeCanonical(computedCanonical);
  }

  // Compute default og:image if not provided
  let computedImage: string | undefined = image;
  if (!computedImage) {
    try {
      if (typeof window !== "undefined" && window.location) {
        const base = import.meta.env.BASE_URL || "/";
        const basePath = base.endsWith("/") ? base : `${base}/`;
        computedImage = `${window.location.origin}${basePath}og.png`;
      }
    } catch {
      // ignore
    }
  }

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {computedCanonical && <link rel="canonical" href={computedCanonical} />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {computedCanonical && <meta property="og:url" content={computedCanonical} />}
      {computedImage && <meta property="og:image" content={computedImage} />}
      <meta property="og:site_name" content="All Done Sites" />
      <meta property="og:locale" content="en_ZA" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {computedImage && <meta name="twitter:image" content={computedImage} />}

      {/* Structured Data */}
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
}
