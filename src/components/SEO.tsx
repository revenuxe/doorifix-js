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

const SEO = (_props: SEOProps) => null;

export default SEO;
