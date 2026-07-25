"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, Terminal, MapPin, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function HeroSection() {
  const { personal } = PORTFOLIO_DATA;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation effect for roles
  useEffect(() => {
    const role = personal.roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === role) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % personal.roles.length);
      } else {
        setCurrentText(
          isDeleting
            ? role.substring(0, currentText.length - 1)
            : role.substring(0, currentText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, personal.roles]);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/15 dark:bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyan-500/15 dark:bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Intro Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border-emerald-500/30 text-xs font-medium text-emerald-600 dark:text-emerald-400 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{personal.status}</span>
            </div>

            {/* Greeting & Name */}
            <div className="space-y-2">
              <h2 className="text-slate-600 dark:text-slate-400 font-mono text-sm tracking-wide flex items-center justify-center lg:justify-start gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                Hello World, I'm
              </h2>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
                <span className="text-slate-900 dark:text-white">{personal.firstName} </span>
                <span className="text-gradient">{personal.lastName}</span>
              </h1>
            </div>

            {/* Dynamic Role Typing */}
            <div className="h-10 text-xl sm:text-2xl font-bold font-mono text-slate-700 dark:text-slate-300 flex items-center justify-center lg:justify-start gap-2">
              <span className="text-emerald-500 dark:text-emerald-400">&gt;</span>
              <span>{currentText}</span>
              <span className="animate-pulse text-emerald-400">|</span>
            </div>

            {/* Bio Summary */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personal.tagline}
            </p>

            {/* Location & Contact Meta */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>{personal.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>B.Tech CSE Graduate</span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/25 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2"
              >
                <span>Hire Me</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl glass-card border-slate-700/40 hover:border-emerald-500/50 text-slate-800 dark:text-slate-200 font-semibold text-sm hover:text-emerald-400 transition-all duration-200 flex items-center gap-2 shadow-sm"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3.5 rounded-xl glass-card text-slate-700 dark:text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${personal.email}`}
                aria-label="Email"
                className="p-3.5 rounded-xl glass-card text-slate-700 dark:text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column - Premium Profile Glass Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500 opacity-30 blur-xl animate-pulse-glow" />

              <div className="relative glass-card rounded-3xl p-6 border-slate-700/40 space-y-6 shadow-2xl">
                {/* Visual Avatar Frame */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/50 group">
                  <img
                    src={personal.avatar}
                    alt={personal.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                  {/* Corner Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 glass-card rounded-xl border-slate-700/50 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-mono text-slate-400">Featured Capstone</p>
                      <p className="text-xs font-bold text-emerald-400 truncate">Oil Price Prediction (SVR)</p>
                    </div>
                    <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded text-[10px] font-mono font-bold">
                      87% Acc
                    </span>
                  </div>
                </div>

                {/* Floating Metric Chips */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-slate-800/30 dark:bg-slate-900/50 border border-slate-700/40 text-center">
                    <p className="text-xs text-slate-400 font-mono">Core Stack</p>
                    <p className="text-sm font-bold text-slate-200">Python & SQL</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/30 dark:bg-slate-900/50 border border-slate-700/40 text-center">
                    <p className="text-xs text-slate-400 font-mono">Frontend</p>
                    <p className="text-sm font-bold text-emerald-400">React & Next.js</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
