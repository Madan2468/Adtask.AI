"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start bg-[#050506] text-white overflow-hidden">
      {/* Navbar */}
      <div className="w-full max-w-6xl mx-auto pt-6 px-4 z-20">
        <div className="flex items-center justify-between bg-[#0A0A0B]/30 backdrop-blur-md rounded-full px-6 py-3 border border-[#1A1A1B]">
          <div className="flex items-center gap-2">
            <span className="flex items-center">
              <span className="bg-white text-black text-sm px-2 py-0.5 rounded">ad</span>
              <span className="text-white ml-1">Task.ai</span>
            </span>
          </div>
          <nav className="flex items-center gap-8">
            <a href="#" className="text-[#9BA1A6] hover:text-white transition-colors">
              Resources
            </a>
            <a href="#" className="text-[#9BA1A6] hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#" className="text-[#9BA1A6] hover:text-white transition-colors">
              Contact Us
            </a>
          </nav>
          <Button className="bg-[#27282B] hover:bg-[#27282B]/90 text-white rounded-full px-6">Try Now for Free</Button>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center mt-24 w-full max-w-4xl mx-auto px-4">
        <span className="inline-block text-[#9BA1A6] text-sm font-medium tracking-wide mb-6">
          AI DEVELOPMENT PARTNER
        </span>

        <h1 className="text-[100px] font-bold leading-none mb-8">
          <span className="relative">
            <span className="opacity-20">adTask.ai</span>
            <span className="absolute inset-0 flex items-center justify-center text-[#3B82F6] opacity-20 blur-2xl">
              adTask.ai
            </span>
          </span>
        </h1>

        <p className="text-[#9BA1A6] text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          AdTask AI is your intelligent companion that transforms how developers code, test, and deploy. Say goodbye to
          repetitive tasks and hello to accelerated productivity.
        </p>

        <Button className="bg-[#27282B] hover:bg-[#27282B]/90 text-white rounded-full px-8 py-3 text-lg">
          Try Now for Free
        </Button>

        {/* Video Section */}
        <div className="relative mt-16 w-full aspect-video rounded-[20px] overflow-hidden border border-[#1A1A1B] bg-[#0A0A0B]/30 backdrop-blur-md">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[80px] font-bold text-[#3B82F6] opacity-10">AdTask.ai</span>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-30%20at%2011.16.06%E2%80%AFPM-rryQ4qPAbBvdbbobu8qXXIciyhn39P.png"
              alt="AdTask.ai Demo"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      {/* Light Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#3B82F6]/5 blur-[100px] rounded-full"></div>
    </section>
  )
}

