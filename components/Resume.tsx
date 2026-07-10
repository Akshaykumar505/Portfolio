"use client";
import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

export default function Resume() {
  const resumeLink = "/resume.pdf";

  return (
    <section id="resume" className="py-24 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 hover:border-white/20 transition-all duration-300"
        >
          <div className="flex items-center gap-5">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-emerald-400">
              <FileText size={28} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-emerald-500 font-mono mb-2">// Full Profile</p>
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">Want the full picture?</h3>
              <p className="text-gray-400 font-light text-sm md:text-base mt-1">Download my resume for detailed experience & education.</p>
            </div>
          </div>
          <a href={resumeLink} download className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-white text-black font-medium px-6 py-3.5 rounded-2xl hover:bg-gray-200 transition-all shadow-xl text-sm shrink-0">
            <Download size={16} />
            <span>Download Resume</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}