"use client"

import { motion } from "framer-motion"
import { Zap, Code, PieChart, Settings } from "lucide-react"

const features = [
  {
    icon: <Zap className="w-16 h-16 text-white/90" />,
    title: "Lightning Fast Deployment",
    description: "Streamline your deployment pipeline with intelligent CI/CD integration. Ship faster, break less.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    icon: <Code className="w-16 h-16 text-white/90" />,
    title: "Real-time Collaboration",
    description: "Seamlessly work with team members while AI manages conflicts and merges changes intelligently.",
    codeSnippet: true,
  },
  {
    icon: <Settings className="w-16 h-16 text-white/90" />,
    title: "Intelligent Code Automation",
    description:
      "Auto-generate boilerplate code, test cases, and documentation. Let AI handle the routine while you focus on innovation.",
    badge: "GEN AI Powered",
  },
  {
    icon: <PieChart className="w-16 h-16 text-white/90" />,
    title: "Smart Marketing Insights",
    description: "Leverage AI-powered analytics to optimize your service marketing.",
    charts: true,
  },
]

export default function FeatureCards() {
  return (
    <section className="relative py-20 px-6 bg-[#0A0A0A] text-white overflow-hidden">
      {/* Glowing Light Effect */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-blue-600/20 opacity-30 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-wider text-gray-400 mb-4"
          >
            Features
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Feature packed for the{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              most productive teams.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Experience lightning-fast setup with intelligent features designed to optimize your workflow instantly.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Large Feature Cards */}
          {features.slice(0, 2).map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-900/40 backdrop-blur-xl rounded-2xl p-8 border border-gray-800/50"
              style={{
                boxShadow: "0 0 15px rgba(51, 114, 224, 0.3)",
                animation: "glow 3s ease-in-out infinite",
              }}
            >
              <div className="relative h-48 mb-8 rounded-xl bg-gray-800/50 flex items-center justify-center">
                {feature.codeSnippet ? (
                  <div className="text-sm text-gray-300 p-4">
                    <div className="flex gap-1.5 mb-3">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <pre className="font-mono">
                      <code className="text-blue-400">const</code> <code className="text-purple-400">compose</code> = (
                      <code className="text-gray-400">...fns</code>) =&gt; <code className="text-blue-400">res</code>
                    </pre>
                  </div>
                ) : (
                  feature.icon
                )}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}

          {/* Smaller Feature Cards Stack */}
          <div className="space-y-6">
            {features.slice(2).map((feature, index) => (
              <motion.div
                key={index + 2}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 2) * 0.2 }}
                className="bg-gray-900/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50"
                style={{
                  boxShadow: "0 0 15px rgba(51, 114, 224, 0.3)",
                  animation: "glow 3s ease-in-out infinite",
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  {feature.badge && (
                    <span className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded-full">{feature.badge}</span>
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                {feature.charts && (
                  <div className="mt-4 flex gap-4">
                    <div className="h-12 w-16 bg-gray-800/50 rounded-lg"></div>
                    <div className="h-12 w-16 bg-gray-800/50 rounded-lg"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes glow {
          0% { box-shadow: 0 0 5px rgba(90, 110, 166, 0.5); }
          50% { box-shadow: 0 0 15px rgba(90, 110, 166, 0.8); }
          100% { box-shadow: 0 0 5px rgba(90, 110, 166, 0.5); }
        }
      `}</style>
    </section>
  )
}
