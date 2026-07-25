"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FolderGit2, Star, ExternalLink, ArrowRight, Eye } from "lucide-react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolio";
import { ProjectModal } from "@/components/modals/ProjectModal";
import { GithubIcon } from "@/components/ui/SocialIcons";

const CATEGORIES = ["All", "AI / ML", "Full Stack", "Data & Analytics", "Web Apps"];

export function ProjectsSection() {
  const { projects } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const featuredProject = projects.find((p) => p.featured) || projects[0];

  const filteredProjects = projects.filter((p) => {
    if (selectedCategory === "All") return true;
    return p.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border-emerald-500/30 text-xs font-mono text-emerald-400"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio & Projects</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
          >
            Innovative <span className="text-gradient">Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-base sm:text-lg"
          >
            Showcasing real-world machine learning algorithms, full-stack applications, and BI data visualizers.
          </motion.p>
        </div>

        {/* Capstone Featured Hero Banner */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 glass-card rounded-3xl overflow-hidden border-slate-700/50 glow-border shadow-2xl relative"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Image side */}
              <div className="lg:col-span-6 relative h-64 sm:h-96 lg:h-full overflow-hidden bg-slate-900 group">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500 text-slate-950 font-extrabold text-xs shadow-lg">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>CAPSTONE FEATURED PROJECT</span>
                </div>
              </div>

              {/* Details side */}
              <div className="lg:col-span-6 p-8 sm:p-10 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                    {featuredProject.category} • {featuredProject.subtitle}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                    {featuredProject.title}
                  </h3>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  {featuredProject.description}
                </p>

                {/* Metrics Grid */}
                {featuredProject.metrics && (
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    {featuredProject.metrics.map((m, idx) => (
                      <div key={idx} className="p-3 rounded-2xl bg-slate-900/40 border border-slate-700/30 text-center">
                        <p className="text-[10px] text-slate-400 font-mono">{m.label}</p>
                        <p className="text-sm font-extrabold text-emerald-400">{m.value}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {featuredProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-slate-800/40 border border-slate-700/40 text-xs text-slate-300 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-700/30">
                  <button
                    onClick={() => setActiveModalProject(featuredProject)}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 hover:scale-105 transition-all flex items-center gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Project Details</span>
                  </button>

                  <a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl glass-card text-slate-300 hover:text-emerald-400 text-xs font-semibold flex items-center gap-2"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20"
                  : "glass-card text-slate-400 hover:text-emerald-400 border-slate-700/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card rounded-3xl overflow-hidden border-slate-700/40 hover:border-emerald-500/50 transition-all duration-300 flex flex-col group shadow-xl"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[10px] font-mono text-emerald-400 border border-slate-700/40">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-400 transition-colors line-clamp-1">
                    {project.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.slice(0, 4).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-slate-800/40 text-[10px] font-mono text-slate-300 border border-slate-700/30"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded bg-slate-800/40 text-[10px] font-mono text-emerald-400">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Links */}
                <div className="pt-4 border-t border-slate-700/30 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-bold text-emerald-400 flex items-center gap-1 hover:underline"
                  >
                    <span>Overview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Source"
                      className="text-slate-400 hover:text-emerald-400 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Demo"
                      className="text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Window */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />

      </div>
    </section>
  );
}
