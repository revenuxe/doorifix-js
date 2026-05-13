import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@4.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface BookingEmailRequest {
  name: string;
  phone: string;
  location: string;
  appliance: string;
  warranty: string;
  caseNumber: string;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const resend = new Resend(RESEND_API_KEY);
    const { name, phone, location, appliance, warranty, caseNumber }: BookingEmailRequest = await req.json();

    if (!name || !phone || !caseNumber) {
      throw new Error("Missing required fields");
    }

    const { error } = await resend.emails.send({
      from: "Doorifix Bookings <bookings@doorifix.in>",
      to: ["doorifixservicecenter@gmail.com"],
      subject: `🔧 New Booking: ${appliance} – ${caseNumber}`,
      html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f4f6f8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f8;padding:32px 16px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
        <!-- Header -->
        <tr>
          <td style="background:#1e3a5f;padding:24px 32px;">
            <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:700;">🔧 New Service Booking</h1>
            <p style="margin:6px 0 0;color:#94b8db;font-size:13px;">Case #${caseNumber}</p>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:28px 32px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #eef0f2;">
                  <span style="color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;">Customer</span><br/>
                  <span style="color:#111827;font-size:15px;font-weight:600;">${name}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #eef0f2;">
                  <span style="color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;">Phone</span><br/>
                  <a href="tel:${phone}" style="color:#1e3a5f;font-size:15px;font-weight:600;text-decoration:none;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #eef0f2;">
                  <span style="color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;">Location</span><br/>
                  <span style="color:#111827;font-size:15px;">${location}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #eef0f2;">
                  <span style="color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;">Appliance</span><br/>
                  <span style="color:#111827;font-size:15px;font-weight:600;">${appliance}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;">
                  <span style="color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;">Warranty</span><br/>
                  <span style="color:#111827;font-size:15px;">${warranty}</span>
                </td>
              </tr>
            </table>
            <!-- CTA -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;">
              <tr>
                <td align="center">
                  <a href="tel:${phone}" style="display:inline-block;background:#1e3a5f;color:#ffffff;padding:12px 28px;border-radius:8px;text-decoration:none;font-size:14px;font-weight:600;">
                    📞 Call Customer
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:#f9fafb;padding:16px 32px;border-top:1px solid #eef0f2;">
            <p style="margin:0;color:#9ca3af;font-size:11px;text-align:center;">
              Doorifix • Automated Booking Notification
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
    });

    if (error) {
      console.error("Resend error:", error);
      throw new Error(`Resend API error: ${JSON.stringify(error)}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    console.error("Error sending booking email:", error);
    const msg = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ success: false, error: msg }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
