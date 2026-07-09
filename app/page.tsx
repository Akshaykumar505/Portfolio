"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#060606] text-[#ededed] overflow-x-hidden selection:bg-blue-500 selection:text-white">
      
      {/* Dynamic Background Spotlight (Yeh chalu rahega, bohot minimal hai) */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-duration-300 hidden md:block"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.04), transparent 80%)`,
        }}
      />

      <Navbar />
      
      <main className="px-6 md:px-24 pb-12 relative z-40 max-w-7xl mx-auto">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}