import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/integrations/supabase/server";
import { emailLayout, mailField, sendResendEmail } from "@/lib/resend";

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

  let emailSent = true;
  try {
    const html = emailLayout(
      "New Contact Enquiry",
      `From ${name}`,
      [
        mailField("Name", name),
        mailField("Phone", phone),
        mailField("Email", email || "-"),
        mailField("Message", message),
      ].join(""),
      { label: `Call ${name}`, href: `tel:${phone}` },
    );

    await sendResendEmail({
      subject: `New Doorifix Contact Enquiry from ${name}`,
      html,
      text: [
        "New Doorifix Contact Enquiry",
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email || "-"}`,
        `Message: ${message}`,
      ].join("\n"),
      replyTo: email,
    });
  } catch (err) {
    emailSent = false;
    console.error("Contact email failed:", err);
  }

  return NextResponse.json({ ok: true, emailSent });
}
