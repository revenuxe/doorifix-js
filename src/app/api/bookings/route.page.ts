import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/integrations/supabase/server";
import { emailLayout, mailField, sendResendEmail } from "@/lib/resend";

interface BookingRequest {
  name?: string;
  phone?: string;
  location?: string;
  appliance?: string;
  warranty?: string;
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as BookingRequest | null;

  const name = body?.name?.trim();
  const phone = body?.phone?.trim();
  const location = body?.location?.trim();
  const appliance = body?.appliance?.trim();
  const warranty = body?.warranty?.trim();

  if (!name || !phone || !location || !appliance || !warranty) {
    return NextResponse.json({ error: "Please fill all fields" }, { status: 400 });
  }

  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase.rpc("create_booking", {
    _name: name,
    _phone: phone,
    _location: location,
    _appliance: appliance,
    _warranty: warranty,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const rawCaseNumber = data as string;
  const caseNumber = rawCaseNumber.replace(/^AM/i, "DF");

  let emailSent = true;
  try {
    const html = emailLayout(
      "New Service Booking",
      `Case #${caseNumber}`,
      [
        mailField("Case Number", caseNumber),
        mailField("Customer", name),
        mailField("Phone", phone),
        mailField("Location", location),
        mailField("Appliance", appliance),
        mailField("Warranty", warranty),
      ].join(""),
      { label: "Call Customer", href: `tel:${phone}` },
    );

    await sendResendEmail({
      subject: `New Doorifix Booking: ${appliance} - ${caseNumber}`,
      html,
      text: [
        `New Doorifix Booking - ${caseNumber}`,
        `Customer: ${name}`,
        `Phone: ${phone}`,
        `Location: ${location}`,
        `Appliance: ${appliance}`,
        `Warranty: ${warranty}`,
      ].join("\n"),
    });
  } catch (err) {
    emailSent = false;
    console.error("Booking email failed:", err);
  }

  return NextResponse.json({ caseNumber, emailSent });
}
