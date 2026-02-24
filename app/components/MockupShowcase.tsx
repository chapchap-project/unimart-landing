"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const showcaseItems = [
  {
    title: "Browse Marketplace",
    description: "Discover a wide range of products from your fellow students, all in one place.",
    icon: "🛒"
  },
  {
    title: "Detailed Listings",
    description: "See exactly what you're buying with clear descriptions and high-quality images.",
    icon: "📄"
  },
  {
    title: "Manage Your Cart",
    description: "Keep track of items you're interested in and checkout when you're ready.",
    icon: "🛍️"
  },
  {
    title: "Personal Wishlist",
    description: "Save items for later and get notified when prices drop or items are back.",
    icon: "💖"
  }
];

export function MockupShowcase() {
  return (
    <section id="showcase" className="py-24 relative overflow-hidden bg-[#fafafa]">
      {/* Subtle grid background to match site-wide pattern */}
      <div className="bg-grid absolute inset-0 opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-100 bg-emerald-50 text-[10px] uppercase tracking-widest font-bold text-emerald-700">
                Showcase
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900">
                Everything You Need, <br />
                <span className="gradient-text">Right Here</span>
              </h2>
              <p className="text-gray-600 text-lg md:text-xl max-w-lg leading-relaxed">
                Experience the app through these beautiful interfaces designed for your comfort and ease.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {showcaseItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex flex-col gap-4 p-6 rounded-3xl border border-gray-100 bg-white/50 hover:bg-white hover:shadow-xl hover:shadow-emerald-500/5 transition-all group cursor-default"
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shrink-0">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 relative flex justify-center lg:justify-end w-full lg:w-auto mt-12 lg:mt-0">
            {/* Background glow to match Hero */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-emerald-200/40 blur-[100px] rounded-full -z-10" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full max-w-[400px]"
            >
              {/* Main Image */}
              <motion.div
                animate={{ 
                  rotateY: [-15, -5, -15],
                  rotateX: [10, 5, 10]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="perspective-[1000px] transform-gpu relative z-20"
              >
                <Image 
                  src="/shop.png" 
                  alt="App Interface"
                  width={350}
                  height={700}
                  className="w-[280px] md:w-[320px] lg:w-[350px] h-auto rounded-[2.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.1)] border-4 border-white mx-auto"
                />
              </motion.div>
              
              {/* Secondary Floating Image */}
              <motion.div
                animate={{ 
                  y: [0, -30, 0],
                  x: [0, 10, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -right-4 lg:-right-8 top-10 w-[180px] lg:w-[220px] z-30 hidden sm:block"
              >
                <Image 
                  src="/listing.png"
                  alt="Product Listing"
                  width={220}
                  height={440}
                  className="rounded-3xl shadow-2xl border-4 border-white"
                />
              </motion.div>

              {/* Tertiary Floating Image */}
              <motion.div
                animate={{ 
                  y: [0, 30, 0],
                  x: [0, -10, 0]
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-4 lg:-left-12 bottom-10 w-[160px] lg:w-[200px] z-10 hidden sm:block"
              >
                <Image 
                  src="/wishlist.png"
                  alt="Wishlist"
                  width={200}
                  height={400}
                  className="rounded-3xl shadow-2xl border-4 border-white opacity-90"
                />
              </motion.div>

              {/* Fourth Floating Image (Cart) */}
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute right-0 bottom-0 w-[140px] lg:w-[160px] z-40 hidden md:block"
              >
                <Image 
                  src="/cart.png"
                  alt="Shopping Cart"
                  width={160}
                  height={320}
                  className="rounded-3xl shadow-2xl border-4 border-white"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
