"use server";

import { Resend } from "resend";
import { supabase } from "@/lib/supabase";
import { WaitlistEmail } from "@/app/components/WaitlistEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function joinWaitlist(email: string) {
  if (!email || !email.includes("@")) {
    return { error: "Invalid email address" };
  }

  try {
    // 1. Insert into Supabase
    const { error: supabaseError } = await supabase
      .from("waitlist")
      .insert([{ email, created_at: new Date().toISOString() }]);

    if (supabaseError) {
      if (supabaseError.code === "23505") {
        return { error: "You're already on the list! ✨" };
      }
      console.error("Supabase Error:", supabaseError);
      return { error: "Something went wrong on our end. Please try again." };
    }

    // 2. Send the confirmation email via Resend
    // Note: If they haven't set up a domain in Resend, they must use 'onboarding@resend.dev'
    // and can only send to their own email address for testing.
    const { data, error: resendError } = await resend.emails.send({
      from: "Unimart <onboarding@resend.dev>",
      to: [email],
      subject: "Welcome to the Unimart Waitlist! 🚀",
      react: WaitlistEmail({ email }),
    });

    if (resendError) {
      console.error("Resend Error:", resendError);
      // We don't return an error here because the user is already in the DB
      // and we don't want to show a failure message just because the email failed.
    }

    return { success: true };
  } catch (error) {
    console.error("Unexpected Error:", error);
    return { error: "An unexpected error occurred." };
  }
}
