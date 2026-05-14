const RESEND_API_URL = "https://api.resend.com/emails";

export const MAIL_TO = process.env.RESEND_TO_EMAIL || "doorifix@gmail.com";
export const MAIL_FROM = process.env.RESEND_FROM_EMAIL || "Doorifix <onboarding@resend.dev>";

interface SendMailInput {
  subject: string;
  html: string;
  text: string;
  replyTo?: string | null;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function field(label: string, value?: string | null) {
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #eef0f2;">
        <span style="color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;">${escapeHtml(label)}</span><br/>
        <span style="color:#111827;font-size:15px;font-weight:600;">${escapeHtml(value || "-")}</span>
      </td>
    </tr>`;
}

export function emailLayout(title: string, intro: string, rows: string, cta?: { label: string; href: string }) {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f4f6f8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f8;padding:32px 16px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
        <tr>
          <td style="background:#1e3a5f;padding:24px 32px;">
            <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:700;">${escapeHtml(title)}</h1>
            <p style="margin:6px 0 0;color:#94b8db;font-size:13px;">${escapeHtml(intro)}</p>
          </td>
        </tr>
        <tr>
          <td style="padding:28px 32px;">
            <table width="100%" cellpadding="0" cellspacing="0">${rows}</table>
            ${cta ? `<table width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;">
              <tr>
                <td align="center">
                  <a href="${escapeHtml(cta.href)}" style="display:inline-block;background:#1e3a5f;color:#ffffff;padding:12px 28px;border-radius:8px;text-decoration:none;font-size:14px;font-weight:600;">
                    ${escapeHtml(cta.label)}
                  </a>
                </td>
              </tr>
            </table>` : ""}
          </td>
        </tr>
        <tr>
          <td style="background:#f9fafb;padding:16px 32px;border-top:1px solid #eef0f2;">
            <p style="margin:0;color:#9ca3af;font-size:11px;text-align:center;">Doorifix automated website notification</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export const mailField = field;
export const sanitizeForMail = escapeHtml;

export async function sendResendEmail({ subject, html, text, replyTo }: SendMailInput) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const response = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: MAIL_FROM,
      to: [MAIL_TO],
      subject,
      html,
      text,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  });

  const result = await response.json().catch(() => null);

  if (!response.ok) {
    const message = result?.message || result?.error || `Resend request failed with ${response.status}`;
    throw new Error(message);
  }

  return result;
}
