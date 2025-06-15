import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    await resend.emails.send({
      from: "Contact Form <contact@vpereira.com>",
      to: "john@vpereira.com",
      subject: `New message from ${name}`,
      text: `Email: ${email}\n\n${message}`,
    });

    return NextResponse.json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
