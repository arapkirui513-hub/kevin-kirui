import { NextRequest, NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  // Honeypot field. Real visitors never see it, so if it's filled the
  // submission came from a bot. We return a fake success and stop.
  const company = typeof body.company === "string" ? body.company.trim() : "";

  if (company) {
    return NextResponse.json({ ok: true });
  }

  if (!name || name.length > 200) {
    return NextResponse.json(
      { error: "Please enter your name." },
      { status: 400 }
    );
  }

  if (!email || email.length > 320 || !EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  if (!message || message.length < 10 || message.length > 5000) {
    return NextResponse.json(
      { error: "Please enter a message between 10 and 5000 characters." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !toEmail) {
    console.error(
      "Contact form misconfigured: missing RESEND_API_KEY or CONTACT_TO_EMAIL."
    );
    return NextResponse.json(
      {
        error:
          "The contact form isn't configured yet. Please email directly instead.",
      },
      { status: 500 }
    );
  }

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact Form <onboarding@resend.dev>",
        to: [toEmail],
        reply_to: email,
        subject: `New portfolio message from ${name}`,
        text: `From: ${name} <${email}>\n\n${message}`,
      }),
    });

    if (!resendResponse.ok) {
      const errorBody = await resendResponse.text();
      console.error("Resend API error:", resendResponse.status, errorBody);
      return NextResponse.json(
        {
          error:
            "Something went wrong sending your message. Please try emailing directly.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json(
      {
        error:
          "Something went wrong sending your message. Please try emailing directly.",
      },
      { status: 500 }
    );
  }
}
