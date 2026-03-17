import { Helmet } from "react-helmet-async";
import { SITE } from "@/lib/siteData";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
  schemaJson?: Record<string, unknown> | Record<string, unknown>[];
}

export default function SEOHead({
  title,
  description,
  canonical,
  ogImage = `${SITE.url}/og-image.jpg`,
  noIndex = false,
  schemaJson,
}: SEOHeadProps) {
  const canonicalUrl = canonical || SITE.url;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:see_also" content="https://www.facebook.com/profile.php?id=61563847662877" />
      <meta property="og:see_also" content="https://www.instagram.com/mb.diagnostic.labs/" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Schema JSON-LD */}
      {schemaJson && (
        <script type="application/ld+json">
          {JSON.stringify(schemaJson)}
        </script>
      )}
    </Helmet>
  );
}
