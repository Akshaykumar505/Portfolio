"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Folder } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "AI Persona Chat App",
      description: "An AI-powered chat application that simulates conversations with customizable personas.",
      tech: ["Next.js", "Express.js", "React", "Tailwind CSS", "OpenRouter API", "Firebase Authentication"],
      link: "https://ai-persona-chat-app.vercel.app/"
    },
    {
      title: "LLM Arena",
      description: "A multi-LLM response evaluation platform that compares a output from multiple AI models in parallel and uses an LLM-ass-a-Judge to automatically identify the highest-quality response based on accuracy, relevance, clarity, and completeness.",
      tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "OpenRouter API"],
      link: " https://lllm-arena.onrender.com"
    }
  ];

  return (
    <section id="projects" className="py-24 border-t border-white/5">
      <div className="mb-16">
        <p className="text-xs uppercase tracking-widest text-blue-500 font-mono mb-2">// Selected Work</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Featured Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.a
            href={project.link}
            key={index}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative block p-8 rounded-2xl border border-white/10 bg-[#0c0c0c] overflow-hidden transition-all duration-300"
          >
            {/* Ambient Background Glow on Card Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-8">
                {/* Minimal Folder Icon */}
                <div className="text-blue-500 bg-blue-500/10 p-3 rounded-xl group-hover:bg-blue-500 group-hover:text-black transition-colors duration-300">
                  <Folder size={20} />
                </div>
                
                {/* Link Arrow */}
                <div className="text-gray-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                  <ArrowUpRight size={22} />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors duration-200">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                {project.tech.map((tag) => (
                  <span key={tag} className="text-[10px] font-mono text-gray-400 bg-white/5 border border-white/5 px-2.5 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}