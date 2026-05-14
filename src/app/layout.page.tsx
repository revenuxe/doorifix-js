import type { Metadata } from "next";
import { Providers } from "./providers";
import { JsonLd } from "./_components/JsonLd";
import { BASE_URL, DEFAULT_DESCRIPTION, organizationSchema, websiteSchema } from "@/lib/seo";
import "../index.css";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Doorifix - Expert Appliance Repair & Servicing",
    template: "%s | Doorifix",
  },
  description: DEFAULT_DESCRIPTION,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  other: {
    "theme-color": "#1e3a5f",
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
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
