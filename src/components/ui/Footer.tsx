"use client";

import React from "react";
import { Mail, Heart } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export function Footer() {
  const { personal } = PORTFOLIO_DATA;
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 glass-nav border-t border-slate-700/40 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 p-0.5">
              <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center font-bold text-emerald-400 text-sm">
                VS
              </div>
            </div>
            <div>
              <p className="font-bold text-slate-900 dark:text-white text-base">
                {personal.name}
              </p>
              <p className="text-xs text-slate-400 font-mono">
                Full Stack & AI Developer
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-400">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
            <a href="#services" className="hover:text-emerald-400 transition-colors">Services</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-emerald-400 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-cyan-400 transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-indigo-400 transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-700/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {year} Vadali Sarada. All rights reserved.</p>
          <p className="flex items-center gap-1 font-mono">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
            <span>Next.js 15 & Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
