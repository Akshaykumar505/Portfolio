"use client";
import { motion } from "framer-motion";
import {
  Code2,
  Layers,
  Bot,
  Wrench,
  CheckCircle2,
  ArrowUpRight,
  Globe,
  MessageSquareCode,
  MonitorSmartphone,
  Plug,
  Bug,
} from "lucide-react";

export default function Freelance() {
  const introText =
    "I build modern, responsive, and user-friendly web applications with a focus on clean code, performance, and great user experience. I am currently open to freelance projects, internships, and collaboration opportunities where I can help turn ideas into real products while continuously improving my skills.";

  const serviceCategories = [
    {
      title: "Web Development",
      icon: <Layers className="text-blue-400" size={20} />,
      items: [
        "Portfolio Website Development",
        "Business Website Development",
        "Landing Page Development",
        "Responsive Website Development",
        "Multi-Page Website Development",
      ],
    },
    {
      title: "Full Stack Development",
      icon: <Code2 className="text-emerald-400" size={20} />,
      items: [
        "React Frontend Development",
        "Node.js & Express Backend Development",
        "MongoDB Database Integration",
        "Authentication System",
        "REST API Development",
      ],
    },
    {
      title: "AI Development",
      icon: <Bot className="text-purple-400" size={20} />,
      items: [
        "AI Chatbot Integration",
        "LLM API Integration",
        "AI-Powered Web Applications",
        "AI Automation Features",
      ],
    },
    {
      title: "Website Improvement",
      icon: <Wrench className="text-amber-400" size={20} />,
      items: [
        "Website Bug Fixing",
        "Performance Optimization",
        "Responsive Design Improvements",
        "API Integration",
        "Deployment & Hosting",
      ],
    },
  ];

  const processSteps = [
    "Requirement Discussion",
    "Project Planning",
    "UI/UX Development",
    "Frontend Development",
    "Backend Development",
    "API Integration",
    "Testing & Debugging",
    "Deployment",
    "Final Delivery",
    "Post-Launch Support",
  ];

  const whyWorkWithMe = [
    "Clean and maintainable code",
    "Responsive and mobile-friendly design",
    "Modern development practices",
    "Performance-focused implementation",
    "Attention to detail",
    "Good communication",
    "Reliable and professional workflow",
    "Continuous learning and improvement",
  ];

  const availability = [
    "Available for Freelance Projects",
    "Open to Internship Opportunities",
    "Open for Collaboration",
  ];

  const quickServices = [
    { title: "Portfolio Website Development", icon: <Globe className="text-blue-400" size={22} /> },
    { title: "Full Stack Web Development", icon: <Code2 className="text-emerald-400" size={22} /> },
    { title: "AI Chat Integration", icon: <MessageSquareCode className="text-purple-400" size={22} /> },
    { title: "Responsive Landing Page", icon: <MonitorSmartphone className="text-sky-400" size={22} /> },
    { title: "REST API Development", icon: <Plug className="text-amber-400" size={22} /> },
    { title: "Website Bug Fixing & Optimization", icon: <Bug className="text-rose-400" size={22} /> },
  ];

  const contactLink = "#contact";

  return (
    <section id="freelance" className="py-24 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-widest text-emerald-500 font-mono mb-3">
            // Open to Work
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Available for Freelance & Internship
          </h2>
          <p className="text-gray-400 font-light leading-relaxed max-w-2xl text-sm md:text-base">
            {introText}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mt-8 mb-16">
          {availability.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 bg-emerald-500/5 border border-emerald-500/20 px-4 py-2 rounded-full text-xs font-mono text-emerald-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {item}
            </div>
          ))}
        </div>

        <div className="mb-16">
          <p className="text-xs uppercase tracking-widest text-blue-500 font-mono mb-6">
            // Services I Offer
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl hover:border-white/20 transition-all duration-300"
              >
                <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 shrink-0">
                  {service.icon}
                </div>
                <span className="text-sm font-medium text-white leading-snug">
                  {service.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <p className="text-xs uppercase tracking-widest text-gray-500 font-mono mb-6">
            // Full Breakdown by Category
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((cat, index) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5 border-b border-white/5 pb-4">
                  <div className="p-2 bg-white/5 rounded-xl border border-white/10">
                    {cat.icon}
                  </div>
                  <h4 className="font-semibold text-white text-sm tracking-wide">
                    {cat.title}
                  </h4>
                </div>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="text-xs text-gray-400 font-light flex items-start gap-2"
                    >
                      <span className="text-blue-500 mt-0.5">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <p className="text-xs uppercase tracking-widest text-purple-500 font-mono mb-6">
              // My Development Process
            </p>
            <div className="grid grid-cols-2 gap-3">
              {processSteps.map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-3 bg-white/[0.02] border border-white/5 px-3 py-2.5 rounded-xl"
                >
                  <span className="text-xs font-mono text-purple-400 shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs text-gray-300 font-light leading-tight">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-amber-500 font-mono mb-6">
              // Why Work With Me
            </p>
            <div className="grid grid-cols-1 gap-3">
              {whyWorkWithMe.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span className="text-sm text-gray-300 font-light">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 text-center backdrop-blur-md"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3">
            Have an idea or project in mind?
          </h3>
          <p className="text-gray-400 font-light text-sm md:text-base mb-8 max-w-lg mx-auto">
            Let's discuss your requirements and build something modern, scalable, and user-friendly together.
          </p>
          <a
            href={contactLink}
            className="inline-flex items-center gap-2 bg-white text-black font-medium px-6 py-3.5 rounded-2xl hover:bg-gray-200 transition-all shadow-xl text-sm group"
          >
            Contact Me
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}