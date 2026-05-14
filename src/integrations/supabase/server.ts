import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://tvzwqvemcspqxzqjizxd.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2endxdmVtY3NwcXh6cWppenhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3Mjk1NjMsImV4cCI6MjA5NDMwNTU2M30.TNy0KmWmYTaH0egzSDWOAD-vkcStS5ybanUmSDnbZZo";

export function createServerSupabaseClient() {
  return createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
