import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { MockupShowcase } from "./components/MockupShowcase";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <Hero />
      <div className="bg-grid absolute inset-0 -z-20 opacity-20 pointer-events-none" />
      <Features />
      <MockupShowcase />
      <CTA />
      <Footer />
    </main>
  );
}
