"use client"

import { motion } from "framer-motion"
import { Zap, Code, PieChart, Settings } from "lucide-react"

const features = [
  {
    icon: <Zap className="w-12 h-12 text-white" />,
    title: "Lightning Fast Deployment",
    description: "Streamline your deployment pipeline with intelligent CI/CD integration. Ship faster, break less.",
  },
  {
    icon: <Code className="w-12 h-12 text-white" />,
    title: "Real-time Collaboration",
    description: "Seamlessly work with team members while AI manages conflicts and merges changes intelligently.",
  },
  {
    icon: <Settings className="w-12 h-12 text-white" />,
    title: "Intelligent Code Automation",
    description: "Auto-generate boilerplate code, test cases, and documentation. Let AI handle the routine while you focus on innovation.",
  },
  {
    icon: <PieChart className="w-12 h-12 text-white" />,
    title: "Smart Marketing Insights",
    description: "Leverage AI-powered analytics to optimize your service marketing.",
  },
]

export function FeatureCards() {
  return (
    <section className="relative py-20 px-6 bg-[#0A0A0A] text-white overflow-hidden">
      {/* Glowing Light Effect */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[600px] h-[600px] bg-[#576CBC] opacity-30 blur-[200px] rounded-full"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Feature packed for the <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            most productive teams.
          </span>
        </motion.h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Experience lightning-fast setup with intelligent features designed to optimize your workflow instantly.
        </p>
      </div>
      
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.slice(0, 2).map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative bg-white/5 p-8 rounded-2xl backdrop-blur-lg border border-gray-800 hover:border-blue-500 transition-all shadow-lg"
          >
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}

        <div className="grid gap-6">
          {features.slice(2, 4).map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index + 2) * 0.2 }}
              className="relative bg-white/5 p-6 rounded-xl backdrop-blur-lg border border-gray-800 hover:border-blue-500 transition-all shadow-lg"
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
