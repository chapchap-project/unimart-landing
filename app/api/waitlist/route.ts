import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabase } from "@/lib/supabase";
import { WaitlistEmail } from "@/app/components/WaitlistEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    // 2. Send the confirmation email via Resend
    // Following https://resend.com/docs/send-with-nextjs
    try {
      if (process.env.RESEND_API_KEY) {
        const { error: resendError } = await resend.emails.send({
          from: "Unimart <onboarding@resend.dev>",
          to: [email],
          subject: "Welcome to the Unimart Waitlist! 🚀",
          react: WaitlistEmail({ email }),
        });

        if (resendError) {
          console.error("Resend Error:", resendError);
        }
      }
    } catch (err) {
      console.error("Resend failed:", err);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waitlist API Error:", error);
    return NextResponse.json({ error: "An unexpected error occurred." }, { status: 500 });
  }
}
