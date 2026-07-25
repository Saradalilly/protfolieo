"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, FileText, Sparkles } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useActiveSection } from "@/hooks/useActiveSection";
import { PORTFOLIO_DATA } from "@/data/portfolio";

const NAV_LINKS = [
  { name: "Home", href: "#hero", id: "hero" },
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Services", href: "#services", id: "services" },
  { name: "Achievements", href: "#achievements", id: "achievements" },
  { name: "Testimonials", href: "#testimonials", id: "testimonials" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(NAV_LINKS.map((link) => link.id));

  return (
    <header className="fixed top-0 left-0 right-0 z-40 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg p-1"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 via-cyan-500 to-indigo-500 p-0.5 shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
              <span className="font-bold text-lg text-emerald-400">VS</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight group-hover:text-emerald-400 transition-colors">
              {PORTFOLIO_DATA.personal.name}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 font-mono">
              <Sparkles className="w-3 h-3 text-emerald-400 animate-pulse" />
              Full Stack | AI
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-800/20 dark:bg-slate-900/40 p-1.5 rounded-full border border-slate-700/30">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-emerald-400 font-semibold"
                    : "text-slate-600 dark:text-slate-300 hover:text-emerald-400 dark:hover:text-emerald-400"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-emerald-500/15 border border-emerald-500/30 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Actions (Theme Toggle & CTA) */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2.5 rounded-xl glass-card hover:border-emerald-500/50 text-slate-700 dark:text-slate-200 hover:text-emerald-500 dark:hover:text-emerald-400 transition-all duration-300 shadow-sm"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Hire Me CTA */}
          <a
            href="#contact"
            className="relative group overflow-hidden rounded-xl p-px font-semibold text-xs transition-all duration-300 shadow-md shadow-emerald-500/20 active:scale-95"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500 rounded-xl animate-pulse" />
            <div className="relative px-4 py-2.5 bg-slate-900 rounded-[11px] transition-colors duration-300 group-hover:bg-slate-900/80 flex items-center gap-2 text-emerald-400">
              <span>Hire Me</span>
            </div>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg glass-card text-slate-700 dark:text-slate-200"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg glass-card text-slate-700 dark:text-slate-200 hover:text-emerald-400"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-nav border-t border-slate-800/40 px-4 pt-4 pb-6 space-y-2 overflow-hidden shadow-2xl"
          >
            <div className="grid grid-cols-2 gap-2 pt-2">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-800/30"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-700/30 flex items-center justify-between gap-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-semibold text-sm shadow-lg shadow-emerald-500/20"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
