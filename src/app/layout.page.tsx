import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Providers } from "./providers";
import { JsonLd } from "./_components/JsonLd";
import { GoogleAdsTracking } from "./_components/GoogleAdsTracking";
import { GOOGLE_ADS_CALL_ID, GOOGLE_ADS_ID, GOOGLE_ANALYTICS_ID, GOOGLE_SHARED_TAG_ID } from "@/lib/analytics";
import { BASE_URL, DEFAULT_DESCRIPTION, organizationSchema, websiteSchema } from "@/lib/seo";
import "../index.css";

export const dynamic = "force-dynamic";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Tells Android Chrome to resize the visible content area when the
  // keyboard opens instead of just overlaying it, which is what was
  // pushing bottom sheets/popups out of view while typing.
  interactiveWidget: "resizes-content",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Doorifix | Expert Appliance Repair & Servicing",
    template: "%s | Doorifix",
  },
  description: DEFAULT_DESCRIPTION,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  other: {
    "theme-color": "#061a43",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <body>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`} strategy="beforeInteractive" />
        <Script id="google-tag-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} window.gtag = gtag; gtag('js', new Date()); gtag('config', '${GOOGLE_ANALYTICS_ID}', { send_page_view: false }); gtag('config', '${GOOGLE_SHARED_TAG_ID}', { send_page_view: false }); gtag('config', '${GOOGLE_ADS_ID}', { send_page_view: false }); gtag('config', '${GOOGLE_ADS_CALL_ID}', { send_page_view: false });`}
        </Script>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Providers>
          <GoogleAdsTracking />
          {children}
        </Providers>
      </body>
    </html>
  );
}
