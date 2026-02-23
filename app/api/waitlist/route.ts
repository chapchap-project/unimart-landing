import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import { supabase } from "@/lib/supabase";
import { WaitlistEmail } from "@/app/components/WaitlistEmail";
import * as React from "react";

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // 1. Insert into Supabase
    const { error: supabaseError } = await supabase
      .from("waitlist")
      .insert([{ email, created_at: new Date().toISOString() }]);

    if (supabaseError) {
      if (supabaseError.code === "23505") {
        return NextResponse.json({ error: "You're already on the list! ✨" }, { status: 400 });
      }
      console.error("Supabase Error:", supabaseError);
      return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
    }

    // 2. Send the confirmation email via Nodemailer
    try {
      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        // Convert React component to HTML string
        const emailHtml = await render(React.createElement(WaitlistEmail, { email }));

        await transporter.sendMail({
          from: `"Unimart" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
          to: email,
          subject: "Welcome to the Unimart Waitlist! 🚀",
          html: emailHtml,
        });
      } else {
        console.warn("SMTP credentials are not defined in environment variables.");
      }
    } catch (err) {
      console.error("Nodemailer failed:", err);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waitlist API Error:", error);
    return NextResponse.json({ error: "An unexpected error occurred." }, { status: 500 });
  }
}
