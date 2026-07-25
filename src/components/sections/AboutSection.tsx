"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Target, Briefcase, Award, CheckCircle, UserCheck } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function AboutSection() {
  const { about } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState<"overview" | "education" | "objectives">("overview");

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border-emerald-500/30 text-xs font-mono text-emerald-400"
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>Discover My Background</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
          >
            About <span className="text-gradient">Vadali Sarada</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-base sm:text-lg"
          >
            A dedicated Computer Science graduate blending analytical data power with full-stack web engineering.
          </motion.p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 glass-card rounded-2xl border-slate-700/40 gap-2">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                activeTab === "overview"
                  ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 shadow-md shadow-emerald-500/20"
                  : "text-slate-600 dark:text-slate-300 hover:text-emerald-400"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Overview</span>
            </button>

            <button
              onClick={() => setActiveTab("education")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                activeTab === "education"
                  ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 shadow-md shadow-emerald-500/20"
                  : "text-slate-600 dark:text-slate-300 hover:text-emerald-400"
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </button>

            <button
              onClick={() => setActiveTab("objectives")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                activeTab === "objectives"
                  ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 shadow-md shadow-emerald-500/20"
                  : "text-slate-600 dark:text-slate-300 hover:text-emerald-400"
              }`}
            >
              <Target className="w-4 h-4" />
              <span>Career Objectives</span>
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="max-w-4xl mx-auto">
          {activeTab === "overview" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card rounded-3xl p-8 border-slate-700/40 space-y-6 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Professional Profile
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                {about.summary}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-slate-800/20 dark:bg-slate-900/40 border border-slate-700/30 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                    <CheckCircle className="w-4 h-4" />
                    <span>Analytical Data Modeling</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Proficient in building predictive regression algorithms (SVR), cross-validation, and data manipulation with Pandas & PySpark.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800/20 dark:bg-slate-900/40 border border-slate-700/30 space-y-2">
                  <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                    <CheckCircle className="w-4 h-4" />
                    <span>Modern Web Applications</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Crafting responsive, high-speed single-page and server-rendered web applications using React, Next.js 15, and Tailwind CSS.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "education" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card rounded-3xl p-8 border-slate-700/40 space-y-6 shadow-xl"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-700/30 pb-6">
                <div>
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-mono font-semibold">
                    {about.education.period}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-2">
                    {about.education.degree}
                  </h3>
                  <p className="text-sm text-slate-400 font-medium">
                    {about.education.institution}
                  </p>
                </div>
                <div className="px-4 py-2 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 text-center">
                  <p className="text-xs font-mono text-slate-400">Score / Grade</p>
                  <p className="text-lg font-extrabold text-emerald-400">{about.education.percentage}</p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-300 font-mono mb-3">Core Computer Science Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {about.education.coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-slate-800/40 border border-slate-700/40 text-xs text-slate-300 font-medium"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "objectives" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card rounded-3xl p-8 border-slate-700/40 space-y-6 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Career Goals & Aspirations
              </h3>
              <ul className="space-y-4">
                {about.objectives.map((obj, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base">
                    <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 mt-1">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
}
