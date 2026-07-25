"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Sparkles, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function ExperienceSection() {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-24 relative z-10 bg-slate-900/10 dark:bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border-emerald-500/30 text-xs font-mono text-emerald-400"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Journey & Timeline</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
          >
            Experience <span className="text-gradient">& Milestones</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-base sm:text-lg"
          >
            Hands-on internships, machine learning capstone architecture, and community survey leadership.
          </motion.p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-emerald-500 via-cyan-500 to-indigo-500 opacity-40" />

          <div className="space-y-12">
            {experience.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-1.5 w-6 h-6 rounded-full bg-slate-900 border-2 border-emerald-500 flex items-center justify-center z-10 shadow-lg shadow-emerald-500/30">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  </div>

                  {/* Card Box */}
                  <div className="ml-12 sm:ml-0 sm:w-[calc(50%-2rem)]">
                    <div className="glass-card rounded-3xl p-6 sm:p-8 border-slate-700/40 hover:border-emerald-500/50 transition-all duration-300 shadow-xl space-y-4">
                      
                      {/* Meta Pills */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700/30 pb-4">
                        <span className="px-3 py-1 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 rounded-full text-xs font-mono font-semibold">
                          {item.type}
                        </span>

                        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Header */}
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {item.role}
                        </h3>
                        <p className="text-sm font-semibold text-emerald-400 flex items-center gap-1.5 mt-1">
                          <span>{item.company}</span>
                          <span className="text-slate-500">•</span>
                          <span className="text-xs text-slate-400 flex items-center gap-1">
                            <MapPin className="w-3 h-3" /> {item.location}
                          </span>
                        </p>
                      </div>

                      {/* Bullet points */}
                      <ul className="space-y-2">
                        {item.description.map((desc, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {item.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-0.5 rounded-md bg-slate-800/40 border border-slate-700/30 text-[11px] font-mono text-slate-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
