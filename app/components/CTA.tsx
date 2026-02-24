"use client";

import { motion } from "framer-motion";
import { WaitlistForm } from "./WaitlistForm";
import { useCountdown } from "@/lib/hooks/useCountdown";
import Image from "next/image";

export function CTA() {
  const { daysRemaining, isLaunched } = useCountdown();

  return (
    <section className="py-32 relative overflow-hidden bg-white">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-emerald-50 blur-[150px] rounded-full -z-10" />

      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto p-12 md:p-24 rounded-[4rem] bg-emerald-600 border border-emerald-500 shadow-2xl relative overflow-hidden text-white"
        >
          {/* Decorative accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl -mr-32 -mt-32 rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 blur-3xl -ml-32 -mb-32 rounded-full" />

          <div className="relative z-10 space-y-12 text-center flex flex-col items-center">
            <div className="absolute -top-20 -left-10 w-32 h-32 rotate-12 opacity-20 hidden lg:block">
              <Image src="/profile.png" alt="Profile" width={128} height={128} className="rounded-3xl shadow-2xl border-4 border-white/20" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 -rotate-12 opacity-20 hidden lg:block">
              <Image src="/listing.png" alt="Listing" width={160} height={160} className="rounded-3xl shadow-2xl border-4 border-white/20" />
            </div>

            <h2 className="text-4xl md:text-7xl font-black leading-tight">
              {isLaunched ? "We Are Live!" : "Join the Launch List"}
            </h2>
            <p className="text-xl text-white/80 max-w-xl mx-auto font-medium">
              {isLaunched 
                ? "Unimart is now officially live! Join the campus shopping revolution today."
                : `We're launching in just ${daysRemaining} ${daysRemaining === 1 ? 'day' : 'days'}! Be the first to experience the future of campus shopping.`
              }
            </p>

            <div className="w-full flex justify-center">
              <WaitlistForm />
            </div>

            <div className="pt-8 text-sm font-bold text-white/60 flex items-center justify-center gap-8 uppercase tracking-[0.2em]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white/60 animate-pulse" />
                v1.0.0 Updated
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white/60 animate-pulse" />
                4.0/5 Rating
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
