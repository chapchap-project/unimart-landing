"use client";

import Link from "next/link";
import { Download } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight text-gray-900 flex items-center gap-2">
          <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center font-black text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]">
            U
          </div>
          <span>Unimart</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">Features</Link>
          <Link href="#showcase" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">Showcase</Link>
          <button className="bg-emerald-600 text-white px-5 py-2.5 rounded-full font-semibold flex items-center gap-2 hover:bg-emerald-700 transition-all text-sm shadow-lg shadow-emerald-200">
            <Download className="w-4 h-4" />
            Download Now
          </button>
        </div>
      </div>
    </nav>
  );
}
