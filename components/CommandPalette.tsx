"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Terminal, User, Briefcase, Mail, ArrowRight } from "lucide-react";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  // Listen for Ctrl + K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const actions = [
    { name: "Go to Home", section: "hero", icon: <Terminal size={16} /> },
    { name: "About & Tech Stack", section: "about", icon: <User size={16} /> },
    { name: "View Featured Projects", section: "projects", icon: <Briefcase size={16} /> },
    { name: "Get in Touch (Contact)", section: "contact", icon: <Mail size={16} /> },
  ];

  // Filter actions based on search input
  const filteredActions = actions.filter((action) =>
    action.name.toLowerCase().includes(search.toLowerCase())
  );

  const navigateToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Invisible trigger helper hint for mobile/desktop users */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:block">
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-white/5 border border-white/10 text-gray-400 px-3 py-2 rounded-xl text-xs font-mono backdrop-blur-md hover:border-white/20 hover:text-white transition-all shadow-2xl"
        >
          Press <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-[10px] border border-white/10 mx-0.5">Ctrl</kbd> + <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-[10px] border border-white/10 mx-0.5">K</kbd> to explore
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-[15vh] px-4">
            
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Main Command Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: -10 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-lg bg-[#0d0d0d]/90 border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl relative z-10"
            >
              {/* Search Header Input */}
              <div className="flex items-center gap-3 px-4 py-4 border-b border-white/10">
                <Search className="text-gray-500" size={18} />
                <input
                  type="text"
                  placeholder="Type a command or search section..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-transparent text-white text-sm outline-none placeholder-gray-500 font-light"
                  autoFocus
                />
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-[10px] font-mono text-gray-500 border border-white/10 px-1.5 py-0.5 rounded hover:bg-white/5"
                >
                  ESC
                </button>
              </div>

              {/* Action List Section */}
              <div className="p-2 max-h-64 overflow-y-auto custom-scrollbar">
                {filteredActions.length > 0 ? (
                  filteredActions.map((action) => (
                    <button
                      key={action.section}
                      onClick={() => navigateToSection(action.section)}
                      className="w-full flex items-center justify-between px-3 py-3 rounded-xl text-left text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all group font-light"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-gray-500 group-hover:text-blue-400 transition-colors">
                          {action.icon}
                        </span>
                        {action.name}
                      </div>
                      <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-gray-500" />
                    </button>
                  ))
                ) : (
                  <div className="text-center py-8 text-xs font-mono text-gray-500">
                    No results found for "{search}"
                  </div>
                )}
              </div>

              {/* Footer Guide */}
              <div className="px-4 py-2.5 bg-white/[0.02] border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-gray-600">
                <span>↑↓ to navigate</span>
                <span>↵ to select</span>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}