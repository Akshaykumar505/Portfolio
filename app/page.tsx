import Navbar from "@/components/Navbar"; 
import CommandPalette from "@/components/CommandPalette";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline"; 
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Resume from "@/components/Resume";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
import GrainOverlay from "@/components/GrainOverlay";
//import Preloader from "@/components/Preloader";
import Freelance from "@/components/Freelance";

export default function Home() {
  const githubLink = "https://github.com/Akshaykumar505";
const linkedinLink = "https://linkedin.com/in/akshay-kumar-848a9724b";
const twitterLink = "https://x.com/AkshayDev_02"; 
const emailAddress = "kumarakshay23085@gmail.com"; 

  return (
    <main className="min-h-screen bg-[#060606] text-white relative antialiased selection:bg-blue-500/30 selection:text-white overflow-x-hidden">
      <ScrollProgress />
       <CursorGlow />  
       <GrainOverlay /> 
      {/* Global Navigation Components */}
      <Navbar />
      <CommandPalette />

      {/* Background Mesh Ambient Light */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-blue-600/5 via-transparent to-transparent pointer-events-none z-0" />
      
      {/* 🎯 LEFT SIDE CORNER: GitHub, LinkedIn aur Twitter SATH MEIN */}
      <div className="hidden lg:flex flex-col items-center gap-6 fixed bottom-0 left-6 xl:left-10 z-50 after:content-[''] after:w-[1px] after:h-24 after:bg-white/20">
        {/* GitHub */}
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 18c-4.51 2-5-2-7-2"/></svg>
        </a>
        
        {/* LinkedIn */}
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 hover:-translate-y-1 transition-all duration-300">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
        </a>

        {/* Twitter / X (Ab sahi jagah par, baaki icons ke sath) */}
        <a href={twitterLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 hover:-translate-y-1 transition-all duration-300">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
        </a>
      </div>

      {/* 🎯 RIGHT SIDE CORNER: Only Vertical Email */}
      <div className="hidden lg:flex flex-col items-center fixed bottom-0 right-6 xl:right-10 z-50 after:content-[''] after:w-[1px] after:h-24 after:bg-white/20">
        <a href={`mailto:${emailAddress}`} className="text-xs font-mono text-gray-400 tracking-widest [writing-mode:vertical-lr] hover:text-blue-400 hover:-translate-y-1 transition-all duration-300 mb-6">
          {emailAddress}
        </a>
      </div>

      {/* Main Core View Layout Content sections */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Timeline /> 
        <Freelance />
        <Resume />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}