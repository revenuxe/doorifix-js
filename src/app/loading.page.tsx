export default function LoadingPage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-5">
      <div className="text-center">
        <div className="mx-auto mb-4 h-10 w-10 rounded-full border-2 border-primary border-t-transparent animate-spin" />
        <p className="text-sm font-medium text-muted-foreground">Loading...</p>
      </div>
    </main>
  );
}
