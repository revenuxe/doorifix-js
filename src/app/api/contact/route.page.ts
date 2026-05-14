import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/integrations/supabase/server";

interface ContactRequest {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as ContactRequest | null;

  const name = body?.name?.trim();
  const email = body?.email?.trim() || null;
  const phone = body?.phone?.trim();
  const message = body?.message?.trim();

  if (!name || !phone || !message) {
    return NextResponse.json({ error: "Please fill all required fields" }, { status: 400 });
  }

  const supabase = createServerSupabaseClient();
  const { error } = await supabase.from("contact_leads").insert({
    name,
    email,
    phone,
    message,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  supabase.functions
    .invoke("send-contact-email", {
      body: {
        name,
        email,
        phone,
        message,
      },
    })
    .catch((err) => console.error("Contact email failed:", err));

  return NextResponse.json({ ok: true });
}
