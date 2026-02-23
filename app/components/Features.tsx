"use client";

import { motion } from "framer-motion";
import { Zap, Shield, CreditCard, Clock, Globe, Award } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Instant Checkout",
    description: "Buy your favorite items with a single tap. No more long forms or waiting."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Secure Payments",
    description: "Your data is protected by bank-level encryption and secure gateways."
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Fast Transactions",
    description: "Transactions are processed in seconds, ensuring a hassle-free shopping experience."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Institutional Shopping",
    description: "Shop with your favorite brands and retailers, all in one place."
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Mpesa Payments",
    description: "Pay with your favourite payment methods, including mpesa"
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Buyer Protection",
    description: "Full refund guaranteed if your order doesn't match the description."
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Built for <span className="text-emerald-600">Speed and Trust</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Unimart is designed to provide the most seamless and secure shopping experience possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-8 rounded-3xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-2xl hover:shadow-emerald-500/10 transition-all group cursor-default"
            >
              <motion.div
                initial={{ rotate: -10, scale: 0.8 }}
                whileInView={{ rotate: 0, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                className="mb-6 p-4 rounded-2xl bg-emerald-50 w-fit text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-emerald-700 transition-colors">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
