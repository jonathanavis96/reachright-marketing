import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  jsonLd?: object;
  image?: string;
}

const DEFAULT_OG_IMAGE = "https://reachrightmarketing.com/og-1200x630.jpg?v=2";

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

  const ogImage = image || DEFAULT_OG_IMAGE;

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
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
}
