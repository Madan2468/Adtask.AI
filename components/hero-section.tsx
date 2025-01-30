"use client"

import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), { ssr: false });

const FallingLights = () => {
  const lights = Array.from({ length: 15 });
  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {lights.map((_, i) => {
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 2;
        const leftPos = Math.random() * 100;

        return (
          <MotionDiv
            key={i}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: [0, 1, 0], y: ["-10%", "110%"] }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="absolute w-1 h-20 bg-blue-500/50 blur-lg"
            style={{ left: `${leftPos}%` }}
          />
        );
      })}
    </div>
  );
};

export function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center px-6 bg-[#050506] text-white overflow-hidden">
      <FallingLights />

      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="px-8 py-3 bg-gray-900/50 backdrop-blur-md rounded-full flex items-center gap-6 border border-gray-700 shadow-md">
          <span className="text-gray-300 text-lg font-semibold">
            <span className="px-2 py-1 bg-white text-black rounded">ad</span>Task.ai
          </span>
          <nav className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition">Resources</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Pricing</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Contact Us</a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full shadow-lg">Try Now for Free</Button>
        </div>
      </div>

      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-3xl mx-auto mt-24"
      >
        <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gray-300 relative">
          <span className="opacity-30 relative">
            AdTask.ai
            <span className="absolute inset-0 blur-lg text-blue-500 opacity-40 animate-pulse">AdTask.ai</span>
          </span>
        </h1>
        <p className="text-lg text-gray-400 mb-6">
          AdTask AI is your intelligent companion that transforms how developers code, test, and deploy.
          Say goodbye to repetitive tasks and hello to accelerated productivity.
        </p>
        <Button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-full shadow-lg border border-gray-700">Try Now for Free</Button>
      </MotionDiv>

      <MotionDiv
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 mt-16 w-full max-w-3xl aspect-video rounded-lg overflow-hidden bg-gray-900/50 backdrop-blur-md border border-gray-700 shadow-lg flex items-center justify-center"
      >
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/your-video-id"
          title="AdTask AI Demo"
          allowFullScreen
        ></iframe>
      </MotionDiv>
    </section>
  );
}
