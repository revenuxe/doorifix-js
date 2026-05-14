import AdminLogin from "@/pages/AdminLogin";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = buildMetadata({
  title: "Admin Login",
  canonical: "/admin/login",
  robots: {
    index: false,
    follow: false,
  },
});

export default function AdminLoginPage() {
  return <AdminLogin />;
}
