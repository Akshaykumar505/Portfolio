"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalDuration = 1800;
    const step = 100 / (totalDuration / 30);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 200);
          return 100;
        }
        return prev + step;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] bg-[#060606] flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-mono font-bold text-white tracking-wider mb-8"
          >
            AKSHAY<span className="text-blue-500">.dev</span>
          </motion.div>

          <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-blue-500"
              style={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>

          <p className="text-xs font-mono text-gray-500 mt-4">
            {Math.floor(progress)}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}