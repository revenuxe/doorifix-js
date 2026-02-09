import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: string;
  image?: string;
  keywords?: string;
  structuredData?: object;
}

const SITE_NAME = "Arrowmind Service Center";
const BASE_URL = "https://arrowmind.com";
const DEFAULT_IMAGE = `${BASE_URL}/favicon.ico`;

const SEO = ({
  title,
  description = "Professional appliance repair & servicing at your doorstep. Washing machine, refrigerator, AC, microwave, dryer & dishwasher repair by certified technicians. Book now!",
  canonical,
  type = "website",
  image = DEFAULT_IMAGE,
  keywords = "appliance repair, washing machine repair, refrigerator repair, AC service, microwave repair, dryer repair, dishwasher repair, home appliance service, doorstep repair",
  structuredData,
}: SEOProps) => {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Expert Appliance Repair & Servicing`;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : undefined;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />

      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_NAME} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
