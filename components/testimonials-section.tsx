"use client"

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Adtask transformed our workflow with incredible AI solutions. Their expertise truly exceeded all expectations!",
    author: "Dean Watson",
    position: "Managing director",
    company: "Farmland",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-31%20at%209.25.50%E2%80%AFPM-09Me9SzNRqeDV9vutH8zDefaX19oZR.png",
  },
  {
    quote:
      "Our experience with Adtask has been outstanding. Their AI solutions have revolutionized our operations!",
    author: "Sarah Johnson",
    position: "CEO",
    company: "TechNova",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "Adtask's AI-powered insights have given us an edge in the industry. Highly recommend their services!",
    author: "Michael Smith",
    position: "COO",
    company: "AgriGrowth",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "Fantastic AI solutions! Adtask has transformed how we handle data and analytics.",
    author: "Jessica Lee",
    position: "Data Scientist",
    company: "Insight AI",
    image:
      "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    quote:
      "The expertise at Adtask is unmatched. Our efficiency has skyrocketed thanks to their innovations!",
    author: "Robert Brown",
    position: "CTO",
    company: "NextGen Tech",
    image:
      "https://randomuser.me/api/portraits/men/56.jpg",
  },
  {
    quote:
      "Adtask provided us with cutting-edge solutions that reshaped our digital strategy. Truly exceptional service!",
    author: "Emily Davis",
    position: "Marketing Head",
    company: "Bright Solutions",
    image:
      "https://randomuser.me/api/portraits/women/52.jpg",
  }
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 px-6 bg-[#050506] overflow-hidden">
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 flex justify-center items-center pointer-events-none"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <div className="w-[800px] h-[600px] bg-[#576CBC] blur-[150px] rounded-full"></div>
      </motion.div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 text-xs font-medium bg-gray-800/80 rounded-full mb-6"
          >
            TESTIMONIALS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-center"
          >
            Trusted by <span className="bg-gradient-to-r from-[#A1B7E6] to-[#576CBC] text-transparent bg-clip-text">satisfied clients</span>
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-[#0A0B0F] backdrop-blur-md border border-gray-800/60 rounded-[20px] p-8 flex flex-col justify-between overflow-hidden shadow-lg"
            >
              {/* Animated Glowing Effect */}
              <motion.div
                className="absolute inset-0 bg-[#576CBC]/40 blur-[80px] opacity-30"
                animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              />
              <p className="text-gray-300 text-lg leading-relaxed mb-8 text-center">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4 justify-center relative z-10">
                <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-gray-700/50">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.author}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.position} · {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
