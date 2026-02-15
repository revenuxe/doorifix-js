import { Helmet } from "react-helmet-async";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: string;
  image?: string;
  keywords?: string;
  structuredData?: object | object[];
  breadcrumbs?: BreadcrumbItem[];
}

const SITE_NAME = "Arrowmind Service Center";
const BASE_URL = "https://arrowmind.in";
const DEFAULT_IMAGE = `${BASE_URL}/favicon.ico`;

const SEO = ({
  title,
  description = "Professional appliance repair & servicing at your doorstep. Washing machine, refrigerator, AC, microwave, dryer & dishwasher repair by certified technicians. Book now!",
  canonical,
  type = "website",
  image = DEFAULT_IMAGE,
  keywords = "appliance repair, washing machine repair, refrigerator repair, AC service, microwave repair, dryer repair, dishwasher repair, home appliance service, doorstep repair",
  structuredData,
  breadcrumbs,
}: SEOProps) => {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Expert Appliance Repair & Servicing`;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : undefined;

  const breadcrumbSchema = breadcrumbs
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: `${BASE_URL}${item.url}`,
        })),
      }
    : null;

  // Organization schema (sitewide)
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Arrowmind Service Center",
    url: BASE_URL,
    logo: `${BASE_URL}/favicon.ico`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+918884647100",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Kannada", "Malayalam"],
    },
    sameAs: [],
  };

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="Arrowmind Service Center" />
      <meta name="geo.region" content="IN-KA" />
      <meta name="geo.placename" content="Bangalore" />

      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Organization Schema */}
      <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>

      {/* Page Structured Data */}
      {structuredData && (
        Array.isArray(structuredData)
          ? structuredData.map((sd, i) => (
              <script key={i} type="application/ld+json">{JSON.stringify(sd)}</script>
            ))
          : <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      )}

      {/* Breadcrumb Schema */}
      {breadcrumbSchema && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      )}
    </Helmet>
  );
};

export default SEO;
