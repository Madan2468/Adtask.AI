"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Sample Logos (Replace with actual logos)
const logos = [
  { name: "Google", src: "/google.svg" },
  { name: "Intel", src: "/intel.svg" },
  { name: "Microsoft", src: "/microsoft.svg" },
  { name: "Apple", src: "/apple.svg" },
  { name: "Amazon", src: "/amazon.svg" },
  { name: "Tesla", src: "/tesla.svg" },
  { name: "Netflix", src: "/netflix.svg" },
  { name: "Samsung", src: "/samsung.svg" },
];

export function LogoCarousel() {
  return (
    <section className="relative py-12 overflow-hidden bg-black/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6">
        {/* Motion Wrapper for Infinite Scrolling */}
        <motion.div
          className="flex gap-16 items-center"
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            duration: 15,
            repeat: Infinity,
          }}
        >
          {/* Duplicating logos to create an infinite loop */}
          {[...logos, ...logos].map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, opacity: 1 }}
              className="w-32 h-16 flex items-center justify-center relative opacity-80 transition hover:opacity-100"
            >
              <Image
                src={logo.src}
                alt={`${logo.name} logo`}
                width={120}
                height={60}
                className="object-contain brightness-90 contrast-125 hover:brightness-110 transition"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none"></div>
    </section>
  );
}
