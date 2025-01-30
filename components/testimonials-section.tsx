"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    quote: "This platform has transformed how we handle our marketing campaigns.",
    author: "Marketing Director",
    company: "Tech Corp",
    image: "/placeholder.svg?height=48&width=48",
  },
  {
    quote: "The AI-powered features have significantly improved our targeting accuracy.",
    author: "Growth Lead",
    company: "StartupX",
    image: "/placeholder.svg?height=48&width=48",
  },
  {
    quote: "Exceptional support team and robust analytics capabilities.",
    author: "Product Manager",
    company: "Innovation Inc",
    image: "/placeholder.svg?height=48&width=48",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6">
      {/* Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl font-extrabold text-white mb-3 tracking-wide">
          Trusted by Industry Leaders
        </h2>
        <p className="text-gray-300 text-lg">
          Discover what our users have to say
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(255,255,255,0.1)" }}
            className="relative bg-gray-900/60 backdrop-blur-xl p-8 rounded-2xl border border-gray-700 shadow-lg transition-transform"
          >
            {/* Quote */}
            <p className="text-gray-300 text-lg italic mb-6 leading-relaxed">
              &quot;{testimonial.quote}&quot;
            </p>

            {/* Author Section */}
            <div className="flex items-center">
              <div className="relative w-14 h-14 rounded-full overflow-hidden mr-5 border-2 border-white">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-white font-semibold text-lg">{testimonial.author}</div>
                <div className="text-gray-400 text-sm">{testimonial.company}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
