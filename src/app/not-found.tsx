"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Compass, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card rounded-3xl p-8 sm:p-12 border-slate-700/50 max-w-lg w-full text-center space-y-6 shadow-2xl"
      >
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40 animate-bounce">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-emerald-400 text-xs font-bold tracking-widest">
            ERROR 404
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            The page or resource you are looking for doesn't exist or has been relocated in the matrix.
          </p>
        </div>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 hover:scale-105 transition-transform"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio Home</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
