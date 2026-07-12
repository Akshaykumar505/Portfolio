"use client";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Copy, Check, Braces } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const emailAddress = "kumarakshay23085@gmail.com"; 
  const githubLink = "https://github.com/Akshaykumar505";
  const linkedinLink = "https://linkedin.com/in/akshay-kumar-848a9724b";
  const leetcodeLink ="https://leetcode.com/u/Akshay_0105/"; 
  const twitterLink = "https://x.com/AkshayDev_02"; 
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        
        {/* Section Tag */}
        <p className="text-xs uppercase tracking-widest text-blue-500 font-mono mb-4">
          // What's Next?
        </p>

        {/* Big Heading */}
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
          Get In Touch
        </h2>

        {/* Short Subtext */}
        <p className="text-gray-400 font-light max-w-md mx-auto mb-12 text-sm md:text-base leading-relaxed">
          I'm currently looking for new opportunities, freelance projects, or interesting AI collaborations. My inbox is always open!
        </p>

        {/* 📬 BIG EMAIL CTA CONTAINER */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          
          {/* Main Mailto Button */}
          <a
            href={`mailto:${emailAddress}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-black font-medium px-8 py-4 rounded-2xl hover:bg-gray-200 transition-all shadow-xl text-base group"
          >
            <Mail size={18} />
            <span>Say Hello</span>
            <ArrowUpRight size={16} className="text-gray-500 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>

          {/* Copy Email Button */}
          <button
            onClick={copyToClipboard}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/5 border border-white/10 hover:border-white/20 text-gray-300 px-6 py-4 rounded-2xl backdrop-blur-md transition-all font-mono text-sm"
          >
            {copied ? (
              <>
                <Check size={16} className="text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy size={16} />
                <span>Copy Email</span>
              </>
            )}
          </button>

        </div>
        {/* Social Links */}
        <div className="flex items-center justify-center gap-3 mt-12">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
          <a
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-blue-400 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a
            href={leetcodeLink}
            target="_blank"
            rel="noopener noreferrer"
            title="LeetCode"
            className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-amber-400 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
          >
           <Braces size={18} />
          </a>
          <a
            href={twitterLink}
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter / X"
            className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-sky-400 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
          </a>
        </div>
        {/* Small Footer Rights Text */}
        <div className="mt-32 pt-8 border-t border-white/5 text-xs font-mono text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Akshay. All rights reserved.</p>
          <p className="hover:text-gray-400 transition-colors cursor-default">Designed & Built with Next.js</p>
        </div>

      </div>
    </section>
  );
}
