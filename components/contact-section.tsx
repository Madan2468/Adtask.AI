"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="relative bg-[#050506] text-white overflow-hidden">
      {/* Top Section */}
      <div className="relative py-24 px-6">
        {/* Soft Glowing Background */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-[500px] h-[500px] bg-[#576CBC] opacity-20 blur-[150px] rounded-full"></div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Contact Badge */}
          <div className="flex justify-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="px-3 py-1 text-xs font-medium bg-gray-800/80 rounded-full"
            >
              CONTACT US
            </motion.span>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left Side - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-5xl font-bold leading-tight">
                Ask whatever you have <br />
                <span className="bg-gradient-to-r from-[#A1B7E6] to-[#576CBC] text-transparent bg-clip-text">
                  in your mind now
                </span>
              </h2>
              <p className="text-gray-400 text-lg">
                Whether you have questions or are ready to discuss your business, we're here to help. Reach out today.
              </p>
              <div className="space-y-6">
                <p className="flex items-center gap-4 text-gray-400">
                  <Mail className="text-[#A1B7E6]" /> admin@adtaskai.com
                </p>
                <p className="flex items-center gap-4 text-gray-400">
                  <Phone className="text-[#A1B7E6]" /> (669) 819-8061
                </p>
                <p className="flex items-center gap-4 text-gray-400">
                  <MapPin className="text-[#A1B7E6]" /> 43 Roselle St. New York
                </p>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Name</label>
                  <Input type="text" className="bg-[#0A0B0F] border-gray-800 text-white rounded-lg py-3 px-4" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Email</label>
                  <Input type="email" className="bg-[#0A0B0F] border-gray-800 text-white rounded-lg py-3 px-4" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Message</label>
                  <Textarea className="bg-[#0A0B0F] border-gray-800 text-white rounded-lg py-3 px-4 min-h-[150px]" />
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative py-32 text-center">
        {/* Strong Bottom Glow */}
        <div className="absolute inset-0 flex justify-center items-end">
          <div className="w-[800px] h-[400px] bg-[#576CBC] opacity-30 blur-[100px] rounded-full"></div>
        </div>

        {/* Logo */}
        <div className="relative mb-24">
          <h3 className="text-[100px] font-bold text-gray-700/25">adTask.ai</h3>
        </div>

        {/* CTA */}
        <div className="relative space-y-8">
          <h2 className="text-5xl font-bold">
            Are you ready to boost <br />
            <span className="bg-gradient-to-r from-[#A1B7E6] to-[#576CBC] text-transparent bg-clip-text">
              your Development?
            </span>
          </h2>
          <Button className="bg-[#576CBC]/20 hover:bg-[#576CBC]/30 text-white border border-[#576CBC]/50 rounded-full px-8 py-6 text-lg">
            Try Now for Free
          </Button>
        </div>
      </div>
    </section>
  )
}

