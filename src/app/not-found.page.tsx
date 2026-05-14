import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-5">
      <div className="max-w-sm text-center">
        <p className="text-sm font-semibold text-primary">Page not found</p>
        <h1 className="mt-2 text-2xl font-bold text-foreground">This page is not available</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          The service or location link may be outdated. You can continue from the services page.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/services"
            className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            View services
          </Link>
          <Link
            href="/"
            className="rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground hover:bg-muted"
          >
            Go home
          </Link>
        </div>
      </div>
    </main>
  );
}
