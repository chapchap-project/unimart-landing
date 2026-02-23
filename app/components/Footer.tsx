"use client";

import Link from "next/link";
import { Twitter, Instagram, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t border-gray-100 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center font-black text-white text-sm">
              U
            </div>
            <span className="font-bold text-gray-900 tracking-tight">Unimart</span>
          </div>

          <div className="flex gap-8 text-sm font-medium text-gray-500">
            <Link href="#" className="hover:text-emerald-600 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-emerald-600 transition-colors">Terms</Link>
            <Link href="#" className="hover:text-emerald-600 transition-colors">Contact</Link>
          </div>

          <div className="flex gap-5 text-gray-400">
            <Twitter className="w-5 h-5 hover:text-emerald-600 cursor-pointer transition-colors" />
            <Instagram className="w-5 h-5 hover:text-emerald-600 cursor-pointer transition-colors" />
            <Github className="w-5 h-5 hover:text-emerald-600 cursor-pointer transition-colors" />
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-50 text-center text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
          © 2026 Unimart Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
