"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle2, FileCheck, ShieldCheck } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function AchievementsSection() {
  const { certifications } = PORTFOLIO_DATA;

  return (
    <section id="achievements" className="py-24 relative z-10 bg-slate-900/10 dark:bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border-emerald-500/30 text-xs font-mono text-emerald-400"
          >
            <Award className="w-3.5 h-3.5" />
            <span>Honors & Verifications</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
          >
            Certificates & <span className="text-gradient">Achievements</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-base sm:text-lg"
          >
            Validated credentials in software development, SQL data querying, and Python programming.
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card rounded-3xl p-6 border-slate-700/40 hover:border-emerald-500/50 transition-all duration-300 shadow-xl space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-slate-800/50 text-[11px] font-mono text-emerald-400 border border-slate-700/40">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  {cert.title}
                </h3>

                <p className="text-xs font-semibold text-cyan-400 font-mono">
                  Issuer: {cert.issuer}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-700/30 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1 font-mono text-emerald-400">
                  <FileCheck className="w-3.5 h-3.5" /> Verified Credential
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
