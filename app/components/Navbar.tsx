"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Showcase", href: "#showcase" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToWaitlist = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const heroSection = document.querySelector("section");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md border-b border-gray-100 py-4" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-2xl font-bold tracking-tight text-gray-900 flex items-center gap-2 group"
        >
          <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center font-black text-white shadow-lg shadow-emerald-200 group-hover:scale-110 transition-transform duration-300">
            U
          </div>
          <span className="hidden sm:inline-block">Unimart</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-gray-600 hover:text-emerald-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={scrollToWaitlist}
            className="bg-emerald-600 text-white px-6 py-2.5 rounded-full font-bold flex items-center gap-2 hover:bg-emerald-700 transition-all text-sm shadow-xl shadow-emerald-200 active:scale-95"
          >
            Join Waitlist
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-gray-600 hover:text-emerald-600 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-bold text-gray-900 hover:text-emerald-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button 
                onClick={scrollToWaitlist}
                className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-700 transition-all text-lg shadow-xl shadow-emerald-200"
              >
                Join Waitlist
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
