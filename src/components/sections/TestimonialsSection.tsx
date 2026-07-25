"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star, MessageSquareQuote } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function TestimonialsSection() {
  const { testimonials } = PORTFOLIO_DATA;

  return (
    <section id="testimonials" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border-emerald-500/30 text-xs font-mono text-emerald-400"
          >
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Endorsements & Reviews</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
          >
            What People <span className="text-gradient">Say</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-base sm:text-lg"
          >
            Feedback from academic project reviewers, internship leads, and technical collaborators.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="glass-card rounded-3xl p-8 border-slate-700/40 hover:border-emerald-500/50 transition-all duration-300 shadow-xl space-y-6 flex flex-col justify-between relative overflow-hidden"
            >
              <Quote className="absolute top-6 right-6 w-16 h-16 text-slate-700/10 dark:text-slate-400/5 pointer-events-none" />

              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: t.rating }).map((_, sIdx) => (
                    <Star key={sIdx} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 italic leading-relaxed">
                  "{t.content}"
                </p>
              </div>

              {/* User Profile */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-700/30">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-emerald-500/40"
                />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                    {t.name}
                  </h4>
                  <p className="text-xs text-emerald-400 font-mono">
                    {t.role} • {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
