"use client";
import { motion } from "framer-motion";
import { ExternalLink, Bot, Layers } from "lucide-react";
import { useState } from "react";

function TiltCard({ children }: { children: React.ReactNode }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 10;
    const rotateX = -((y - centerY) / centerY) * 10;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      className="w-full lg:w-1/2"
    >
      {children}
    </motion.div>
  );
}

export default function Projects() {
  const projectsData = [
    {
      title: "AI Persona Chat",
      description: "An advanced conversational platform allowing users to orchestrate and interact with custom AI agents and personas. Features dynamic system-prompt injection and context-aware responses.",
      screenshot: "./AI_Persona.png", 
      features: [
        "Dynamic persona creation with distinct behavioral systems",
        "Real-time streaming responses via server-sent events",
        "Persistent chat history mapped with localized local storage",
        "Custom context windows & temperature scaling sliders"
      ],
      techStack: ["Node.js", "Express.js", "OpenRouter API", "Tailwind CSS", "React", "Firebase Authentication"],
      github: "https://github.com/Akshaykumar505/AI-persona-chat-app",
      demo: " https://ai-persona-chat-app.vercel.app/ "
    },
    {
      title: "LLM Arena",
      description: "A benchmarking playground to test and compare outputs of multiple large language models side-by-side in real-time under identical prompts. Optimized for performance and latency tracking.",
      screenshot: "./LLMArena.jpeg", 
      features: [
        "Blind side-by-side LLM response evaluation (Elo-rating model)",
        "Token generation speed meter (tokens/sec) & cost trackers",
        "Multi-provider orchestration (OpenAI, Anthropic, Ollama)",
        "Detailed comparison metrics and token usage analytics charts"
      ],
      techStack: ["React.js", "TypeScript", "FastAPI", "Together AI", "Vector DB"],
      github: "https://github.com/Akshaykumar505/LLLM-Arena",
      demo: " https://lllm-arena.onrender.com"
    }
  ];

  return (
    <section id="projects" className="py-24 border-t border-white/5 relative bg-black">
      <div className="max-w-6xl mx-auto px-4 w-full">
        
        <div className="mb-16">
          <p className="text-xs uppercase tracking-widest text-purple-500 font-mono mb-3">// Production Deployments</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Featured Projects
          </h2>
        </div>

        <div className="flex flex-col gap-20">
          {projectsData.map((project, index) => (
            <div
              key={project.title}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
            >
              
              <TiltCard>
                <div className="w-full relative overflow-hidden rounded-2xl border border-white/10 aspect-video bg-zinc-900">
                  <img 
                    src={project.screenshot} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-100 filter-none transition-all duration-300 hover:opacity-50 hover:scale-105"
                  />
                </div>
              </TiltCard>

              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-blue-500 font-mono text-xs mb-3 uppercase tracking-wider">
                  {index === 0 ? <Bot size={14} /> : <Layers size={14} />}
                  <span>Project 0{index + 1}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 font-light leading-relaxed mb-6 text-sm md:text-base">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {project.features.map((feat, i) => (
                    <li key={i} className="text-xs md:text-sm text-gray-400 flex items-start gap-2">
                      <span className="text-blue-500 mt-1">▹</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-[11px] font-mono px-2.5 py-1 bg-white/5 border border-white/5 text-gray-300 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs md:text-sm font-medium text-gray-400 hover:text-white transition-colors"
                  >
                    Codebase
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs md:text-sm font-medium bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-all shadow-md"
                  >
                    Live Demo <ExternalLink size={14} />
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}