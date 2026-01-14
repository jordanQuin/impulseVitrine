export const runtime = "nodejs";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export async function POST(req: Request) {
  console.log("🔥 API CONTACT HIT");
console.log("ENV CHECK", {
  SMTP_USER: process.env.SMTP_USER,
  SMTP_PASS: process.env.SMTP_PASS ? "OK" : "MISSING",
});
  let body: ContactPayload;
  try {
    body = (await req.json()) as ContactPayload;
  } catch (err) {
    console.error("Invalid JSON body", err);
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { name, email, subject, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields: name, email and message are required." }, { status: 400 });
  }

  const SMTP_USER = process.env.SMTP_USER;
  const SMTP_PASS = process.env.SMTP_PASS;

  console.log("SMTP_USER =", SMTP_USER ? "OK" : "undefined");
  console.log("SMTP_PASS =", SMTP_PASS ? "OK" : "MISSING");

  if (!SMTP_USER || !SMTP_PASS) {
    // Helpful error for local debugging - but do NOT expose secrets in production responses
    return NextResponse.json({ error: "SMTP credentials are not configured on the server. Ensure SMTP_USER and SMTP_PASS are set." }, { status: 500 });
  }

  // create transporter (Gmail-compatible SMTP shown here)
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const siteRecipient = SMTP_USER; // messages will be sent to the configured SMTP_USER address

  const mailForOwner = {
    from: `"${name}" <${email}>`,
    to: siteRecipient,
    subject: `[Contact] ${subject || "Nouveau message"}`,
    text: `Nom: ${name}\nEmail: ${email}\nSujet: ${subject || "-"}\n\nMessage:\n${message}`,
    html: `<p><strong>Nom:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Sujet:</strong> ${subject || "-"}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, "<br/>")}</p>`,
  };

  try {
    await transporter.sendMail(mailForOwner);

    // Optionally send a confirmation to the user who filled the form
    try {
      const mailToUser = {
        from: siteRecipient,
        to: email,
        subject: `Nous avons bien reçu votre message${subject ? ` — ${subject}` : ""}`,
        text: `Bonjour ${name},\n\nMerci pour votre message. Nous reviendrons vers vous rapidement.\n\nCordialement,\nL'équipe Impulse`,
      };
      await transporter.sendMail(mailToUser);
    } catch (confirmErr) {
      // non-fatal: owner already received the message; log confirmation send failure
      console.warn("Failed to send confirmation email to user:", confirmErr);
    }

    return NextResponse.json({ ok: true, message: "Message envoyé." });
  } catch (err) {
    console.error("Failed to send mail:", err);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
