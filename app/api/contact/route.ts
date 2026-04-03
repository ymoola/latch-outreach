import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const toEmail = process.env.CONTACT_TO_EMAIL || "corporate@latchclub.ca";
const fromEmail =
  process.env.CONTACT_FROM_EMAIL ||
  "LatchClub Investor Site <onboarding@resend.dev>";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const { name, email, company, notes } = (await request.json()) as {
      name?: string;
      email?: string;
      company?: string;
      notes?: string;
    };

    const trimmedName = name?.trim() || "";
    const trimmedEmail = email?.trim() || "";
    const trimmedCompany = company?.trim() || "";
    const trimmedNotes = notes?.trim() || "";

    if (!trimmedName || !trimmedEmail || !trimmedCompany || !trimmedNotes) {
      return NextResponse.json(
        { error: "Please complete all fields before sending." },
        { status: 400 }
      );
    }

    if (!emailPattern.test(trimmedEmail)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!resendApiKey) {
      return NextResponse.json(
        {
          error:
            "The email service is not configured yet. Add RESEND_API_KEY to enable form submissions."
        },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: trimmedEmail,
      subject: `Investor inquiry from ${trimmedName}`,
      text: [
        `Name: ${trimmedName}`,
        `Email: ${trimmedEmail}`,
        `Company: ${trimmedCompany}`,
        "",
        "Notes:",
        trimmedNotes
      ].join("\n"),
      html: `
        <div style="font-family: Inter, Arial, sans-serif; padding: 24px; color: #162028;">
          <h2 style="margin: 0 0 24px; font-size: 24px;">New investor inquiry</h2>
          <p style="margin: 0 0 12px;"><strong>Name:</strong> ${escapeHtml(trimmedName)}</p>
          <p style="margin: 0 0 12px;"><strong>Email:</strong> ${escapeHtml(trimmedEmail)}</p>
          <p style="margin: 0 0 12px;"><strong>Company:</strong> ${escapeHtml(trimmedCompany)}</p>
          <p style="margin: 24px 0 8px;"><strong>Notes:</strong></p>
          <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(trimmedNotes)}</p>
        </div>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form submission failed", error);

    return NextResponse.json(
      { error: "Something went wrong while sending your message." },
      { status: 500 }
    );
  }
}
