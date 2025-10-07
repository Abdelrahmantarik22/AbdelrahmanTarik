import  nodemailer  from 'nodemailer';
import { NextResponse } from "next/server";

interface EmailRequestBody {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    const body: EmailRequestBody = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.SMTP_USER,
      subject: `Message from ${name}: ${subject}`,
      text: message,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
  console.error("Email send error:", error);
  const message = error instanceof Error ? error.message : "Unknown error";
  return NextResponse.json(
    { success: false, error: message },
    { status: 500 }
  );
}

}
