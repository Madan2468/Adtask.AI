"use client"

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";

const plans = [
  {
    name: "Free",
    price: "$0",
    features: ["Basic AI code generation", "Upto 1 team member", "Community Support"],
    badge: "NEW",
  },
  {
    name: "Pro",
    price: "$10/month",
    features: ["Advanced AI Features", "Upto 20 team members", "Priority Support", "Custom Integrations"],
    badge: "MOST POPULAR",
  },
  {
    name: "Enterprise",
    price: "$39/month",
    features: ["Advanced AI Features", "Upto 200 team members", "Priority Support", "Custom AI training"],
  },
];

export function PricingSection() {
  return (
    <section className="relative py-20 px-4 bg-[#050506] overflow-hidden">
      {/* Rounded Soft Glowing Background Effect Lowered */}
      <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#4c5fd5] opacity-20 blur-[200px] rounded-full"></div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative text-center mb-12"
      >
        <span className="px-4 py-1 text-xs uppercase tracking-widest bg-gray-800 text-gray-300 rounded-full">
          Plans
        </span>
        <h2 className="text-4xl font-bold mt-4 text-white">
          Pricing that scales <span className="text-[#4c5fd5]">with you</span>
        </h2>
      </motion.div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative bg-[#13131a] rounded-xl p-8 border border-gray-800 hover:border-[#4c5fd5] transition-all shadow-lg hover:shadow-[#4c5fd5]/40 text-center overflow-hidden animate-glowing-border"
          >
            {/* Properly Positioned Badge */}
            {plan.badge && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#4c5fd5] text-white text-xs uppercase px-3 py-1 rounded-full shadow-md">
                {plan.badge}
              </div>
            )}
            
            <h3 className="relative text-xl font-semibold text-white mt-8 mb-4">{plan.name}</h3>
            <div className="relative text-3xl font-bold text-white mb-6">{plan.price}</div>
            <ul className="relative space-y-4 text-left">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center text-gray-400">
                  <Check className="w-5 h-5 text-[#4c5fd5] mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="relative mt-8 w-full bg-[#4c5fd5] hover:bg-[#3b4cc0] text-white rounded-lg py-2 px-4 transition-colors shadow-lg shadow-[#4c5fd5]/30">
              Get Started
            </button>
          </motion.div>
        ))}
      </div>

      <style>
        {`
          @keyframes glowing-border {
            0% { box-shadow: 0 0 5px rgba(76, 95, 213, 0.5); }
            50% { box-shadow: 0 0 20px rgba(76, 95, 213, 0.8); }
            100% { box-shadow: 0 0 5px rgba(76, 95, 213, 0.5); }
          }

          .animate-glowing-border {
            animation: glowing-border 2s infinite alternate;
          }
        `}
      </style>
    </section>
  );
}
