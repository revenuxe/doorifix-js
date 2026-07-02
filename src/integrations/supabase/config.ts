const DEFAULT_SUPABASE_URL = "https://tvzwqvemcspqxzqjizxd.supabase.co";
const DEFAULT_SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2endxdmVtY3NwcXh6cWppenhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3Mjk1NjMsImV4cCI6MjA5NDMwNTU2M30.TNy0KmWmYTaH0egzSDWOAD-vkcStS5ybanUmSDnbZZo";

export function getSupabaseUrl() {
  return process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() || DEFAULT_SUPABASE_URL;
}

export function getSupabaseAnonKey() {
  return (
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim() ||
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY?.trim() ||
    DEFAULT_SUPABASE_ANON_KEY
  );
}
