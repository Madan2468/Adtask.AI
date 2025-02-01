"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start bg-[#050506] text-white overflow-hidden">
      {/* Updated Navbar */}
      <div className="w-full flex justify-center z-20">
        <div className="w-[738px] h-[63px] mt-[33px] flex items-center justify-between bg-[#0A0A0B] px-6 rounded-[16px] border border-[#FFFFFF1A]">
          <div className="flex items-center gap-12">
            <span className="text-white text-xl font-medium">adTask.ai</span>
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
          </div>
          <Button className="h-9 px-14 rounded-full bg-gradient-to-r from-[#5A6EA6] to-[#3B4C7B] text-white text-sm font-medium shadow-lg button-glow">
            Try Now for Free
          </Button>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center mt-24 w-full max-w-4xl mx-auto px-4">
        <span className="inline-block px-4 py-1 text-[#9BA1A6] text-sm font-medium tracking-wide mb-6">
          AI DEVELOPMENT PARTNER
        </span>

        {/* Stronger Rectangular Light Effect */}
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#3B82F6]/20 blur-[100px] rounded-lg"></div>

        <h1 className="text-[100px] font-bold leading-none mb-8 relative">
          <span className="relative">
            <span className="opacity-20">adTask.ai</span>
            <span className="absolute inset-0 flex items-center justify-center text-[#3B82F6] opacity-30 blur-2xl">
              adTask.ai
            </span>
          </span>
        </h1>

        <p className="text-[#9BA1A6] text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          AdTask AI is your intelligent companion that transforms how developers code, test, and deploy. Say goodbye to
          repetitive tasks and hello to accelerated productivity.
        </p>

        <Button className="w-[154px] h-[34px] rounded-full bg-gradient-to-r from-[#5A6EA6] to-[#3B4C7B] text-white text-sm font-medium shadow-lg button-glow">
          Try Now for Free
        </Button>

        {/* Video Section with Animated Glowing Border */}
        <div className="relative mt-16 w-full aspect-video rounded-[20px] overflow-hidden border-2 border-transparent video-glow">
          <div className="absolute inset-0 flex items-center justify-center video-bg">
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

      <style jsx global>{`
        @keyframes button-glow {
          0% { box-shadow: 0 0 5px rgba(90, 110, 166, 0.5); }
          50% { box-shadow: 0 0 15px rgba(90, 110, 166, 0.8); }
          100% { box-shadow: 0 0 5px rgba(90, 110, 166, 0.5); }
        }
        .button-glow {
          animation: button-glow 2s infinite ease-in-out;
        }

        @keyframes video-glow {
          0% { border-color: rgba(90, 110, 166, 0.5); box-shadow: 0 0 5px rgba(90, 110, 166, 0.5); }
          50% { border-color: rgba(90, 110, 166, 0.8); box-shadow: 0 0 15px rgba(90, 110, 166, 0.8); }
          100% { border-color: rgba(90, 110, 166, 0.5); box-shadow: 0 0 5px rgba(90, 110, 166, 0.5); }
        }
        .video-glow {
          border-image-source: conic-gradient(from 180deg at 50% 50%, #333B4F 0deg, #566999 360deg);
          animation: video-glow 2s infinite ease-in-out;
        }
        .video-bg {
          background: linear-gradient(0deg, #FFFFFF, #FFFFFF),
                      linear-gradient(180deg, #E2E8F8 0%, #858992 100%);
          width: 468px;
          height: 95.96px;
          position: absolute;
          top: 282px;
          left: 50%;
          transform: translateX(-50%);
          opacity: 0.8;
        }
      `}</style>
    </section>
  )
}
