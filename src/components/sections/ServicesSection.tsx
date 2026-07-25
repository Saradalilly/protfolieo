"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Server, BrainCircuit, BarChart3, CheckCircle, ArrowRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  Code: <Code className="w-8 h-8 text-emerald-400" />,
  Server: <Server className="w-8 h-8 text-cyan-400" />,
  BrainCircuit: <BrainCircuit className="w-8 h-8 text-indigo-400" />,
  BarChart3: <BarChart3 className="w-8 h-8 text-emerald-400" />,
};

export function ServicesSection() {
  const { services } = PORTFOLIO_DATA;

  return (
    <section id="services" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border-emerald-500/30 text-xs font-mono text-emerald-400"
          >
            <BrainCircuit className="w-3.5 h-3.5" />
            <span>Solutions & Offerings</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
          >
            Services I <span className="text-gradient">Provide</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-base sm:text-lg"
          >
            Delivering high-performance, accessible, and scalable engineering across web and data domains.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card rounded-3xl p-8 border-slate-700/40 hover:border-emerald-500/50 transition-all duration-300 group shadow-xl space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-700/40 w-fit group-hover:scale-110 transition-transform duration-300 shadow-md">
                  {SERVICE_ICONS[service.icon]}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 pt-2 border-t border-slate-700/30">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-400">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 group-hover:translate-x-1 transition-transform"
                >
                  <span>Request Service</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
