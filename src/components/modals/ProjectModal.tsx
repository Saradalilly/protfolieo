"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle, BarChart2 } from "lucide-react";
import { Project } from "@/data/portfolio";
import { GithubIcon } from "@/components/ui/SocialIcons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl glass-card rounded-3xl overflow-hidden border-slate-700/50 shadow-2xl z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header Image Banner */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 p-2 rounded-full glass-card text-slate-300 hover:text-white hover:border-emerald-500/50 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-6 left-6 right-6 space-y-2">
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-full text-xs font-mono font-semibold">
                {project.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
            {/* Description */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-emerald-400 font-mono">Detailed Overview</h4>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Metrics Chips */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-cyan-400 font-mono flex items-center gap-1.5">
                  <BarChart2 className="w-4 h-4" /> Key Metrics & Performance
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {project.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-2xl bg-slate-900/60 border border-slate-700/40 text-center space-y-1"
                    >
                      <p className="text-xs text-slate-400 font-mono">{metric.label}</p>
                      <p className="text-base font-extrabold text-emerald-400">{metric.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-300 font-mono">Technologies & Frameworks</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-slate-800/40 border border-slate-700/40 text-xs text-slate-300 font-medium flex items-center gap-1"
                  >
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="pt-4 border-t border-slate-700/40 flex flex-wrap items-center gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl glass-card text-slate-200 hover:text-emerald-400 hover:border-emerald-500/50 text-sm font-semibold flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Source Code</span>
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 hover:scale-105 transition-transform flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Project Demo</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
