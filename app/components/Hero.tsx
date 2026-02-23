"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Shield, Zap } from "lucide-react";
import { WaitlistForm } from "./WaitlistForm";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-40 pb-20 px-4 overflow-hidden bg-[#fafafa]">
      {/* Background blobs */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-emerald-100 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-40 -right-4 w-96 h-96 bg-green-50 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-100 bg-emerald-50 text-xs font-semibold text-emerald-700">
            <Zap className="w-3 h-3 fill-emerald-600" />
            <span>Launching in 15 Days - Join the VIP Waitlist</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-gray-900">
            Experience <br />
            <span className="gradient-text">Seamless Shopping</span> <br />
            with Unimart
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
            The all-in-one marketplace for everything you need. Built for student-student commerce, providing a secure and modern platform for your campus community.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <WaitlistForm />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          {/* Decorative background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-emerald-200/50 blur-[120px] rounded-full -z-10" />

          <motion.div
            animate={{
              y: [0, -20, 0],
              rotateX: [10, 12, 10],
              rotateY: [-10, -15, -10]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative z-10 perspective-[1000px] preserve-3d"
          >
            <div className="relative group">
              {/* Glass reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2.5rem] z-20 pointer-events-none shadow-inner" />

              <img
                src="/Home.png"
                alt="Unimart App Home"
                className="w-[320px] h-auto rounded-[2.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.15)] border-4 border-white"
              />

              {/* Animated Border Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 to-green-500 rounded-[2.6rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 -z-10"></div>
            </div>
          </motion.div>

          {/* Floating features */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-12 top-1/4 p-4 rounded-2xl bg-white/80 backdrop-blur-xl border border-gray-100 shadow-2xl z-20"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-600">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="pr-4">
                <div className="text-[10px] uppercase font-black text-emerald-600 tracking-widest">Security</div>
                <div className="text-xs font-bold text-gray-900">End-to-End Secure</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-12 bottom-1/4 p-4 rounded-2xl bg-white/80 backdrop-blur-xl border border-gray-100 shadow-2xl z-20"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-600">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <div className="pr-4">
                <div className="text-[10px] uppercase font-black text-emerald-600 tracking-widest">Marketplace</div>
                <div className="text-xs font-bold text-gray-900">5k+ Products</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
