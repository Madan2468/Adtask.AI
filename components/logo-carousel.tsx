"use client"

import { motion } from "framer-motion"
import Image from "next/image"

// Sample Logos (Replace with actual logos)
const logos = [
  { name: "Google", src: "icons8-google-48.png" },
  { name: "Salesforce", src: "icons8-salesforce-48.png" },
  { name: "Amazon", src: "icons8-amazon-50.png" },
  { name: "Coca-Cola", src: "icons8-coca-cola-48.png" },
  { name: "Intel", src: "icons8-intel-power-gadget-48.png" },
]

const platforms = [
  { name: "VS Code", icon: "icons8-google-48.png" },
  { name: "Visual Studio", icon: "icons8-amazon-50.png" },
  { name: "Notepad", icon: "icons8-coca-cola-48.png"},
  { name: "Atom", icon: "icons8-coca-cola-48.png" },
]

export function LogoCarousel() {
  return (
    <div className="flex flex-col gap-16 py-16 bg-[#0D0D0D]">
      <section className="relative py-12 overflow-hidden bg-black/50 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center">
            {/* Adtask AI Logo */}
            <div className="w-32 h-16 flex items-center justify-center mr-16">
              <Image
                src="/adtask-ai-logo.svg"
                alt="Adtask AI Logo"
                width={120}
                height={60}
                className="object-contain"
              />
            </div>

            {/* Motion Wrapper for Infinite Scrolling */}
            <motion.div
              className="flex gap-16 items-center"
              initial={{ x: "0%" }}
              animate={{ x: "-100%" }}
              transition={{
                ease: "linear",
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
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
                    src={logo.src || "/placeholder.svg"}
                    alt={`${logo.name} logo`}
                    width={120}
                    height={60}
                    className="object-contain brightness-0 invert"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none"></div>
      </section>

      {/* Platforms Section */}
      <section className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-gray-400 mb-8">Adtask AI is available on your favorite platforms:</p>
        <div className="flex justify-center gap-12 flex-wrap">
          {platforms.map((platform) => (
            <motion.div
              key={platform.name}
              className="relative w-24 h-24 rounded-2xl bg-[#1A1A1A] flex items-center justify-center shadow-lg"
              initial={{ opacity: 0.8, scale: 1 }}
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(87, 108, 188, 0.7)" }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={platform.icon || "/placeholder.svg"}
                alt={platform.name}
                width={48}
                height={48}
                className="opacity-90"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}