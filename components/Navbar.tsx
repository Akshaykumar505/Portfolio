"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const githubLink = "https://github.com/Akshaykumar505";
  const linkedinLink = "https://linkedin.com/in/akshay-kumar-848a9724b";
  const leetcodeLink = "https://leetcode.com/u/Akshay_0105/";

  const navLinks = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Journey", id: "timeline" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((link) => document.getElementById(link.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-[99] transition-all duration-300 ${
          scrolled
            ? "py-5 bg-[#060606]/85 backdrop-blur-md shadow-lg shadow-black/40"
            : "py-7 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
          <button
            onClick={() => handleScrollTo("hero")}
            className="text-base font-mono tracking-wider font-bold text-white hover:text-blue-400 transition-colors"
          >
            AKSHAY<span className="text-blue-500">.dev</span>
          </button>

          <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className="relative group text-sm font-light tracking-wide transition-all duration-200"
              >
                <span
                  className={
                    activeSection === link.id
                      ? "text-white font-medium"
                      : "text-gray-400 group-hover:text-white"
                  }
                >
                  {link.name}
                </span>
                <span
                  className={`absolute -bottom-1.5 left-0 h-[1.5px] bg-blue-500 transition-all duration-300 ${
                    activeSection === link.id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="p-2 rounded-full bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>

            <a
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="p-2 rounded-full bg-white/5 border border-white/5 text-gray-400 hover:text-blue-400 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>

            <a
              href={leetcodeLink}
              target="_blank"
              rel="noopener noreferrer"
              title="LeetCode"
              className="p-2 rounded-full bg-white/5 border border-white/5 text-gray-400 hover:text-amber-400 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
            >
              <SiLeetcode size={18} />
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-1.5 bg-white/5 border border-white/5 text-gray-400 hover:text-white rounded-lg"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[76px] bg-[#0d0d0d]/95 backdrop-blur-xl border-b border-white/5 z-50 py-6 px-4 flex flex-col gap-5 shadow-2xl md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className={`w-full text-left font-mono text-sm py-1.5 border-b border-white/[0.02] ${
                  activeSection === link.id ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                // {link.name}
              </button>
            ))}

            <div className="flex items-center gap-6 pt-2">
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white flex items-center gap-2 text-xs font-mono">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 18c-4.51 2-5-2-7-2"/></svg> GitHub
              </a>
              <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 flex items-center gap-2 text-xs font-mono">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg> LinkedIn
              </a>
              <a href={leetcodeLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 flex items-center gap-2 text-xs font-mono">
                <SiLeetcode size={16} /> LeetCode
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}