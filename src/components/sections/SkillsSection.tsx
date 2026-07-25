"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Server, BrainCircuit, BarChart3, Wrench, Sparkles, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

const ICON_MAP: Record<string, React.ReactNode> = {
  Layout: <Code2 className="w-5 h-5 text-emerald-400" />,
  Server: <Server className="w-5 h-5 text-cyan-400" />,
  BrainCircuit: <BrainCircuit className="w-5 h-5 text-indigo-400" />,
  BarChart3: <BarChart3 className="w-5 h-5 text-emerald-400" />,
  Wrench: <Wrench className="w-5 h-5 text-cyan-400" />,
};

export function SkillsSection() {
  const { skills } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  return (
    <section id="skills" className="py-24 relative z-10 bg-slate-900/10 dark:bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border-emerald-500/30 text-xs font-mono text-emerald-400"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
          >
            Skills & <span className="text-gradient">Proficiency</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-base sm:text-lg"
          >
            Comprehensive technical toolset spanning web development, data engineering, and machine learning.
          </motion.p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skills.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                selectedCategory === idx
                  ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 shadow-lg shadow-emerald-500/20 scale-105"
                  : "glass-card text-slate-600 dark:text-slate-300 hover:text-emerald-400 border-slate-700/30"
              }`}
            >
              {ICON_MAP[cat.iconName]}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Selected Skill Category Grid */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {skills[selectedCategory].skills.map((skill, idx) => (
            <div
              key={idx}
              className={`glass-card rounded-2xl p-5 border-slate-700/40 space-y-3 transition-all duration-300 hover:border-emerald-500/50 ${
                skill.highlight ? "glow-border" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="font-bold text-slate-900 dark:text-white text-base">
                    {skill.name}
                  </span>
                  {skill.highlight && (
                    <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded text-[10px] font-mono font-semibold">
                      Core
                    </span>
                  )}
                </div>
                <span className="font-mono text-xs font-bold text-emerald-400">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-slate-800/50 rounded-full overflow-hidden p-0.5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: idx * 0.1 }}
                  className="h-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500 rounded-full"
                />
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
