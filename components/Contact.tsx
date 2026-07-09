"use client";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Contact() {
  const currentYear = new Date().getFullYear();

  // CHANGE HERE: Apne links aur exact mail daal dena baad mein
  const emailAddress = "kumarakshay23085@gmail.com";
  const githubLink = "https://github.com/Akshaykumar505";
  const linkedinLink = "https://www.linkedin.com/in/akshay-kumar-848a9724b";

  return (
    <section id="contact" className="py-20 border-t border-white/5 relative overflow-hidden">
      <div className="absolute -bottom-10 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs uppercase tracking-widest text-blue-400 mb-3">// What's Next?</p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">
          Get In Touch
        </h2>
        <p className="text-gray-400 text-base md:text-lg mb-10 leading-relaxed max-w-xl mx-auto">
          I'm currently looking for new opportunities, collaborations, or custom GenAI projects. Shoot me a message and let's build something cool!
        </p>

        {/* Big CTA Button */}
        <motion.a
          href={`mailto:${emailAddress}`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium tracking-wide hover:bg-gray-200 transition-colors duration-300 mb-20 shadow-lg shadow-white/5"
        >
          Say Hello <Mail size={18} />
        </motion.a>

        {/* High Visibility Social Buttons Section */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {/* GitHub Card */}
          <motion.a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ y: -4, scale: 1.02 }}
            className="group flex items-center gap-3 bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 px-6 py-3 rounded-xl transition-all duration-300 backdrop-blur-sm"
          >
            <svg className="text-gray-400 group-hover:text-white transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-wider text-gray-500 font-mono group-hover:text-gray-400">Review Code</p>
              <p className="text-sm font-semibold text-gray-300 group-hover:text-white">GitHub</p>
            </div>
          </motion.a>
          
          {/* LinkedIn Card */}
          <motion.a 
            href={linkedinLink} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ y: -4, scale: 1.02 }}
            className="group flex items-center gap-3 bg-blue-500/5 border border-blue-500/20 hover:border-blue-400/50 hover:bg-blue-500/10 px-6 py-3 rounded-xl transition-all duration-300 backdrop-blur-sm"
          >
            <svg className="text-blue-400/80 group-hover:text-blue-400 transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-wider text-blue-500/60 font-mono group-hover:text-blue-400/80">Connect Professionally</p>
              <p className="text-sm font-semibold text-gray-300 group-hover:text-blue-400">LinkedIn</p>
            </div>
          </motion.a>
        </div>

        {/* Footer Copyright */}
        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-xs text-gray-600 tracking-wide">
            © {currentYear} Akshay Kumar. Built with Next.js & Tailwind.
          </p>
        </div>
      </div>
    </section>
  );
}