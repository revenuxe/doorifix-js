"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-5">
      <div className="max-w-sm text-center">
        <p className="text-sm font-semibold text-primary">Something went wrong</p>
        <h1 className="mt-2 text-2xl font-bold text-foreground">The page could not load</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Please try again. If this continues, contact Doorifix support.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
