import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/integrations/supabase/server";

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

  const caseNumber = data as string;

  supabase.functions
    .invoke("send-booking-email", {
      body: {
        name,
        phone,
        location,
        appliance,
        warranty,
        caseNumber,
      },
    })
    .catch((err) => console.error("Email notification failed:", err));

  return NextResponse.json({ caseNumber });
}
