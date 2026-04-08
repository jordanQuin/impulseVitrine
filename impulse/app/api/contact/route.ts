export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  console.log("🔥 API CONTACT HIT");
  console.log("ENV CHECK", {
    RESEND_API_KEY: process.env.RESEND_API_KEY ? "OK" : "MISSING",
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

  const RESEND_API_KEY = process.env.RESEND_API_KEY;

  console.log("RESEND_API_KEY =", RESEND_API_KEY ? "OK" : "MISSING");

  if (!RESEND_API_KEY) {
    return NextResponse.json({ error: "RESEND_API_KEY is not configured on the server." }, { status: 500 });
  }

  const siteRecipient = "bertrandguillaume524@gmail.com"; // Email destinataire (vous)

  try {
    // Envoi du mail au propriétaire du site
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: siteRecipient,
      subject: `[Contact] ${subject || "Nouveau message"}`,
      html: `<p><strong>Nom:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Sujet:</strong> ${subject || "-"}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, "<br/>")}</p>`,
    });

    // Envoi d'une confirmation à l'utilisateur
    try {
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: `Nous avons bien reçu votre message${subject ? ` — ${subject}` : ""}`,
        html: `<p>Bonjour ${name},</p><p>Merci pour votre message. Nous reviendrons vers vous rapidement.</p><p>Cordialement,<br/>L'équipe Impulse</p>`,
      });
    } catch (confirmErr) {
      console.warn("Failed to send confirmation email to user:", confirmErr);
    }

    return NextResponse.json({ ok: true, message: "Message envoyé." });
  } catch (err) {
    console.error("Failed to send mail:", err);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
