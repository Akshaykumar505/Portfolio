"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const myName = "Akshay Kumar"; 
  const myBio = "I architect high-performance full-stack systems and integrate cutting-edge Generative AI solutions. Specialized in Next.js, LLM orchestration, and modern cloud deployment.";

  const roles = [
    "Full Stack Developer",
    "GenAI Enthusiast",
    "Building AI-powered Web Applications",
  ];

  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 30 : 60;
    const pauseAfterTyping = 1500;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentRole.length) {
          setTypedText(currentRole.slice(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseAfterTyping);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(currentRole.slice(0, typedText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, roleIndex]);
  
  const profilePhoto = "/Akshay.jpeg"; 

  const githubLink = "https://github.com/Akshaykumar505";
  const linkedinLink = "https://linkedin.com/in/akshay-kumar-848a9724b";

  return (
    <section id="home" className="pt-32 pb-20 flex flex-col justify-center min-h-[90vh] relative">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 max-w-6xl mx-auto w-full px-4">
        
        <div className="flex-1 w-full lg:max-w-xl text-left">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs md:text-sm uppercase tracking-widest text-blue-500 font-mono mb-5"
          >
            // Available for new opportunities
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6"
          >
            Hi, I'm <span className="text-blue-500">{myName}</span>.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-400 to-gray-700 text-2xl sm:text-3xl lg:text-4xl block mt-3 min-h-[2.6em] sm:min-h-[2.4em] lg:min-h-[2.2em]">
              {typedText}
              <span className="inline-block w-[2px] h-[1em] bg-blue-400 ml-1 align-middle animate-pulse" />
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed mb-10 font-light"
          >
            {myBio}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a 
              href="#projects" 
              className="group inline-flex items-center gap-2 bg-white text-black px-6 py-3.5 rounded-xl font-medium text-sm hover:bg-gray-200 transition-all duration-300 shadow-lg"
            >
              View My Work 
              <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform duration-300" />
            </a>

            <motion.a 
              href={githubLink}
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.02 }}
              className="group flex items-center gap-2.5 bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 px-5 py-3.5 rounded-xl transition-all duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-white transition-colors"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 18c-4.51 2-5-2-7-2"/></svg>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white">GitHub</span>
            </motion.a>
            <motion.a 
              href={linkedinLink}
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.02 }}
              className="group flex items-center gap-2.5 bg-blue-500/5 border border-blue-500/20 hover:border-blue-400/50 hover:bg-blue-500/10 px-5 py-3.5 rounded-xl transition-all duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 group-hover:text-blue-300 transition-colors"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              <span className="text-sm font-medium text-blue-400 group-hover:text-blue-300">LinkedIn</span>
            </motion.a>
            </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-[420px] lg:h-[420px] mx-auto lg:mx-0 flex-shrink-0"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/30 via-purple-500/20 to-transparent opacity-50 blur-3xl animate-pulse" />
          
          <div className="w-full h-full rounded-full border border-white/10 overflow-hidden p-3 bg-[#0d0d0d]/60 backdrop-blur-md shadow-2xl shadow-blue-500/5">
            <img 
              src={profilePhoto} 
              alt={myName}
              className="w-full h-full rounded-full object-cover grayscale-0 hover:grayscale transition-all duration-700 ease-out scale-100 hover:scale-103"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=500&q=80";
              }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}