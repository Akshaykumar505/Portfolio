"use client";
import { motion } from "framer-motion";
import { Code2, Server, Cpu, Wrench } from "lucide-react";

export default function About() { 
  // 📝 FUTURE CUSTOMIZATION: Aap in details ko kabhi bhi edit kar sakte hain
  const careerObjective = "Passionate Full Stack & GenAI Developer dedicated to architecting high-performance web systems and orchestrating intelligent LLM pipelines that solve real-world problems.";
  const currentFocus = "Currently learning Full Stack Development, Generative AI, Data Structures & Algorithms, RAG, and Multi-Agent AI frameworks (LangGraph, AutoGen).";

  // Tech Stack 
  const techStack = [
    {
      category: "Frontend",
      icon: <Code2 className="text-blue-400" size={22} />,
      skills: ["JavaScript", "Next.js", "React.js", "TypeScript", "Tailwind CSS", "HTML", "CSS", "Framer Motion", "Redux Toolkit"]
    },
    {
      category: "Backend",
      icon: <Server className="text-emerald-400" size={22} />,
      skills: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Redis", "Docker"]
    },
    {
      category: "AI / LLMs",
      icon: <Cpu className="text-purple-400" size={22} />,
      skills: ["OpenAI API", "OpenRouter", "Claude", "chatGpt", "LangChain", "LlamaIndex", "Hugging Face", "Vector DBs (Pinecone/Chroma)", "Ollama"]
    },
    {
      category: "Tools & DevOps",
      icon: <Wrench className="text-amber-400" size={22} />,
      skills: ["Git & GitHub", "Vercel", "Postman", "Cursor / VS Code"]
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden border-t border-white/5">
      {/* Background Ambient Glows */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 w-full">
        
        {/* Section Heading */}
        <div className="mb-16">
          <p className="text-xs uppercase tracking-widest text-blue-500 font-mono mb-3">// Introduction</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            About Me
          </h2>
        </div>

        {/* Info Grid (Introduction & Focus) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Left Column: Career Objective */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md relative group hover:border-white/20 transition-all duration-300"
          >
            <div className="absolute top-4 right-4 text-xs text-gray-600 font-mono">01 / OBJECTIVE</div>
            <h3 className="text-xl font-semibold text-white mb-4">Career Objective</h3>
            <p className="text-gray-400 leading-relaxed font-light text-base md:text-lg">
              {careerObjective}
            </p>
          </motion.div>

          {/* Right Column: Current Focus */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md relative group hover:border-white/20 transition-all duration-300"
          >
            <div className="absolute top-4 right-4 text-xs text-gray-600 font-mono">02 / FOCUS</div>
            <h3 className="text-xl font-semibold text-white mb-4">Current Focus</h3>
            <p className="text-gray-400 leading-relaxed font-light text-base md:text-lg">
              {currentFocus}
            </p>
          </motion.div>

        </div>

        {/* Tech Stack Sub-section */}
        <div>
          <div className="mb-10">
            <p className="text-xs uppercase tracking-widest text-emerald-500 font-mono mb-2">// Core Competencies</p>
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Technical Ecosystem</h3>
          </div>

          {/* 📊 Premium Glassmorphism Skill Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((item, index) => (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-[#0c0c0c]/60 border border-white/5 p-6 rounded-2xl backdrop-blur-sm shadow-xl flex flex-col justify-between hover:border-white/10 transition-all duration-300"
              >
                <div>
                  {/* Header: Icon + Category Name */}
                  <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                    <div className="p-2 bg-white/5 rounded-xl border border-white/10">
                      {item.icon}
                    </div>
                    <h4 className="font-semibold text-white text-base tracking-wide">{item.category}</h4>
                  </div>

                  {/* Skills Pill Badges */}
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="text-xs font-mono px-2.5 py-1.5 bg-white/5 border border-white/5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
