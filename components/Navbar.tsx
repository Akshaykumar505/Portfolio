"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Braces, Home, User, Compass, FolderKanban, Mail, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const githubLink = "https://github.com/Akshaykumar505";
  const linkedinLink = "https://linkedin.com/in/akshay-kumar-848a9724b";
  const leetcodeLink = "https://leetcode.com/your-username";

  const navLinks = [
    { name: "Home", id: "hero", icon: <Home size={20} /> },
    { name: "About", id: "about", icon: <User size={20} /> },
    { name: "Journey", id: "timeline", icon: <Compass size={20} /> },
    { name: "Projects", id: "projects", icon: <FolderKanban size={20} /> },
    { name: "Contact", id: "contact", icon: <Mail size={20} /> },
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
              <Braces size={18} />
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] bg-[#060606]/98 backdrop-blur-2xl md:hidden flex flex-col pt-24"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="flex-1 flex flex-col justify-center px-6 gap-1 relative z-10">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.08 * index }}
                  onClick={() => handleScrollTo(link.id)}
                  className="group relative flex items-center gap-4 py-4 pl-4 text-left overflow-hidden rounded-2xl"
                >
                  <span
                    className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
                      activeSection === link.id
                        ? "bg-white/5 border border-white/10"
                        : "bg-transparent border border-transparent group-hover:bg-white/[0.03]"
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-1/2 -translate-y-1/2 w-[3px] rounded-full bg-blue-500 transition-all duration-300 ${
                      activeSection === link.id ? "h-7 opacity-100" : "h-0 opacity-0"
                    }`}
                  />

                  <span
                    className={`relative z-10 transition-colors ${
                      activeSection === link.id
                        ? "text-blue-400"
                        : "text-gray-500 group-hover:text-blue-400"
                    }`}
                  >
                    {link.icon}
                  </span>
                  <span
                    className={`relative z-10 text-2xl font-semibold tracking-tight transition-colors ${
                      activeSection === link.id
                        ? "text-white"
                        : "text-gray-400 group-hover:text-white"
                    }`}
                  >
                    {link.name}
                  </span>
                  <ArrowRight
                    size={18}
                    className="relative z-10 ml-auto mr-4 text-gray-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  />
                </motion.button>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex items-center justify-center gap-3 pb-10 pt-4 relative z-10"
            >
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-blue-400 hover:bg-white/10 transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a
                href={leetcodeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-amber-400 hover:bg-white/10 transition-all"
              >
                <Braces size={18} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}