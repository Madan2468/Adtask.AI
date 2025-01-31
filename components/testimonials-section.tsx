"use client"

import { motion } from "framer-motion"
import Image from "next/image"

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
      "Adtask transformed our workflow with incredible AI solutions. Their expertise truly exceeded all expectations!",
    author: "Dean Watson",
    position: "Managing director",
    company: "Farmland",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-31%20at%209.25.50%E2%80%AFPM-09Me9SzNRqeDV9vutH8zDefaX19oZR.png",
  },
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
      "Adtask transformed our workflow with incredible AI solutions. Their expertise truly exceeded all expectations!",
    author: "Dean Watson",
    position: "Managing director",
    company: "Farmland",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-31%20at%209.25.50%E2%80%AFPM-09Me9SzNRqeDV9vutH8zDefaX19oZR.png",
  },
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
      "Adtask transformed our workflow with incredible AI solutions. Their expertise truly exceeded all expectations!",
    author: "Dean Watson",
    position: "Managing director",
    company: "Farmland",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-31%20at%209.25.50%E2%80%AFPM-09Me9SzNRqeDV9vutH8zDefaX19oZR.png",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 px-6 bg-[#050506] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[800px] h-[600px] bg-[#576CBC] opacity-10 blur-[150px] rounded-full"></div>
      </div>

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

          <div className="flex items-center justify-center gap-8 mb-6">
            <div className="w-[200px] h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-center whitespace-nowrap"
            >
              Trusted by{" "}
              <span className="bg-gradient-to-r from-[#A1B7E6] to-[#576CBC] text-transparent bg-clip-text">
                Trusted by satisfied clients
              </span>
            </motion.h2>
            <div className="w-[200px] h-[1px] bg-gradient-to-l from-transparent via-gray-800 to-transparent"></div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Discover how we've driven growth and innovation.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0A0B0F]/60 backdrop-blur-sm border border-gray-800/50 rounded-[20px] p-8 flex flex-col justify-between"
            >
              <p className="text-gray-300 text-lg leading-relaxed mb-8 text-center">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4 justify-center">
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
                  <p className="text-gray-400 text-sm">
                    {testimonial.position} · {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

