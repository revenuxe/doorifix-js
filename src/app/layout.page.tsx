import type { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import { JsonLd } from "./_components/JsonLd";
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
