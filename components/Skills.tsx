"use client";
import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    },
    {
      title: "Tools & DevOps",
      skills: ["Git & GitHub", "Docker", "AWS", "Vercel"],
    },
  ];

  return (
    <section id="about" className="py-20 border-t border-white/5">
      <div className="mb-12">
        <p className="text-xs uppercase tracking-widest text-blue-400 mb-2">// Capabilities</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">My Tech Stack</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div 
            key={index}
            className="p-6 rounded-2xl border border-white/10 bg-[#0f0f0f]/50 backdrop-blur-sm"
          >
            <h3 className="text-lg font-semibold text-white mb-4 tracking-wide border-b border-white/5 pb-2">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <motion.span 
                  key={skill} 
                  whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#000000" }}
                  transition={{ duration: 0.2 }}
                  className="text-xs bg-white/5 border border-white/10 text-gray-300 px-3 py-1.5 rounded-full cursor-pointer inline-block"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}