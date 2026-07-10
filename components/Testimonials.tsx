"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
  quote: "yaha wo jo bola/likha ho, apne words mein ya unke exact words",
  name: "Unka real naam",
  role: "Unki position/company",
  avatar: "unki photo ka link (ya koi bhi placeholder photo)",
},
    {
      quote: "Highly reliable and detail-oriented developer. Turned our idea into a polished, functioning product ahead of schedule.",
      name: "Client Name",
      role: "Position, Company",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    },
    {
      quote: "Great problem-solving skills and a strong understanding of modern web technologies. Would definitely work with him again.",
      name: "Client Name",
      role: "Position, Company",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    },
  ];

  return (
    <section id="testimonials" className="py-24 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-20 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="mb-16">
          <p className="text-xs uppercase tracking-widest text-purple-500 font-mono mb-3">// What People Say</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Testimonials</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name + index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <Quote className="text-purple-400/40 mb-4" size={28} />
                <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">{t.quote}</p>
              </div>
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover grayscale" />
                <div>
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-gray-500 font-light">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}