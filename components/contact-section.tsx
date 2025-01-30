"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section className="relative py-24 px-6 bg-[#050506] text-white overflow-hidden">
      {/* Soft Glowing Background */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[500px] h-[500px] bg-[#576CBC] opacity-40 blur-[150px] rounded-full"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold leading-tight text-white">
            Ask whatever you have <br />
            <span className="text-[#A1B7E6] glow-text">in your mind now</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Whether you have questions or are ready to discuss your business, we're here to help. Reach out today.
          </p>
          <div className="space-y-4">
            <p className="flex items-center gap-4 text-gray-300">
              <Mail className="text-[#A1B7E6]" /> admin@adtaskai.com
            </p>
            <p className="flex items-center gap-4 text-gray-300">
              <Phone className="text-[#A1B7E6]" /> (669) 918-8081
            </p>
            <p className="flex items-center gap-4 text-gray-300">
              <MapPin className="text-[#A1B7E6]" /> 43 Roselle St. New York
            </p>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#131722] p-8 rounded-lg shadow-lg border border-gray-700 backdrop-blur-lg relative overflow-hidden"
        >
          {/* Inner Soft Glow */}
          <div className="absolute inset-0 bg-[#576CBC] opacity-20 blur-2xl rounded-lg"></div>
          <form className="space-y-6 relative z-10">
            <Input type="text" placeholder="Name" className="bg-[#1C2333] border-gray-700 text-white rounded-lg py-3 px-4" />
            <Input type="email" placeholder="Email" className="bg-[#1C2333] border-gray-700 text-white rounded-lg py-3 px-4" />
            <Textarea placeholder="Message" className="bg-[#1C2333] border-gray-700 text-white rounded-lg py-3 px-4 min-h-[120px]" />
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button type="submit" className="w-full py-3 bg-[#576CBC] hover:bg-[#A1B7E6] text-white text-lg font-semibold rounded-lg shadow-md hover:shadow-blue-500/50 transition-all">
                Send Message
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
