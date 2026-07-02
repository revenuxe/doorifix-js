import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/integrations/supabase/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const CACHE_HEADERS = {
  "Cache-Control": "no-store, no-cache, must-revalidate",
};

function isAuthorized(request: Request) {
  const cronSecret = process.env.CRON_SECRET?.trim();

  if (!cronSecret) {
    return true;
  }

  const authHeader = request.headers.get("authorization");
  const headerSecret = request.headers.get("x-cron-secret");
  const isVercelCron = request.headers.get("x-vercel-cron") === "1";

  return authHeader === `Bearer ${cronSecret}` || headerSecret === cronSecret || isVercelCron;
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401, headers: CACHE_HEADERS });
  }

  const startedAt = Date.now();
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase.rpc("keep_supabase_awake");

  if (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error.message,
        code: error.code,
        hint: "Run the latest Supabase migrations so keep_supabase_awake exists.",
      },
      { status: 500, headers: CACHE_HEADERS },
    );
  }

  return NextResponse.json(
    {
      ok: true,
      pingedAt: data,
      latencyMs: Date.now() - startedAt,
    },
    { headers: CACHE_HEADERS },
  );
}

export async function HEAD(request: Request) {
  const response = await GET(request);

  return new Response(null, {
    status: response.status,
    headers: response.headers,
  });
}
