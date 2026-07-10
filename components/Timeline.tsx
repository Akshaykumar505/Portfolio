"use client";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Rocket } from "lucide-react";
export default function Timeline() {
  // 📝 FUTURE CUSTOMIZATION: Aap apni real company aur college ke details yahan edit kar sakte hain
  const timelineData = [
   {
      type: "work",
      role: "Self-Directed Learning & Personal Projects",
      company: "Building AI-powered Web Applications",
      duration: "2024 - Present",
      description: "Building full-stack projects and exploring GenAI pipelines independently — hands-on with LLM orchestration, agentic frameworks, and modern web architecture through self-driven projects.",
      icon: <Rocket size={16} />
    },
    {
      type: "education",
      role: "Bachelor of Technology (B.Tech)",
      company: "RGPV | Sagar Institute of Research & Technology Excellence",
      duration: "2023 - 2027",
      description: "Specialized in Computer Science and Engineering. Deeply explored Data Structures, Algorithms, System Designs, and Advanced Machine Learning algorithms.",
      icon: <GraduationCap size={16} />
    }
  ];

  return (
    <section id="timeline" className="py-24 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 w-full">
        
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <p className="text-xs uppercase tracking-widest text-amber-500 font-mono mb-3">// Background Track</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Journey & Timeline
          </h2>
        </div>

        {/* Vertical Timeline Tree Structure */}
        <div className="relative border-l border-white/10 md:ml-6 space-y-12">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 group"
            >
              {/* Timeline Indicator Glowing Node Bullet */}
              <div className="absolute -left-[17px] top-1.5 bg-[#060606] border border-white/20 p-2 rounded-full z-10 text-gray-400 group-hover:text-white group-hover:border-blue-500 transition-colors duration-300 shadow-xl">
                {item.icon}
              </div>

              {/* Dynamic Glassmorphism Content Box Container */}
              <div className="bg-white/[0.02] border border-white/5 group-hover:border-white/10 p-6 rounded-2xl backdrop-blur-sm transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5 text-gray-400 uppercase tracking-wider mb-2 inline-block">
                      {item.type === "work" ? "Experience" : "Education"}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">{item.role}</h3>
                    <p className="text-sm text-gray-400 font-light mt-0.5">{item.company}</p>
                  </div>
                  <span className="text-xs font-mono text-gray-500 bg-white/[0.02] border border-white/5 px-3 py-1 rounded-full h-fit w-fit">
                    {item.duration}
                  </span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}