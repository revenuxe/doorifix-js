import AdminDashboard from "@/pages/AdminDashboard";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = buildMetadata({
  title: "Admin Dashboard",
  canonical: "/admin",
  robots: {
    index: false,
    follow: false,
  },
});

export default function AdminPage() {
  return <AdminDashboard />;
}
