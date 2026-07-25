"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { motion, AnimatePresence } from "framer-motion";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const progress = useScrollProgress();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full glass-card hover:border-emerald-500/50 transition-all duration-300 group shadow-lg flex items-center justify-center"
        >
          <svg className="w-12 h-12 transform -rotate-90 pointer-events-none absolute" viewBox="0 0 48 48">
            <circle
              cx="24"
              cy="24"
              r={radius}
              className="text-slate-300/20 dark:text-slate-700/30 stroke-current"
              strokeWidth="3"
              fill="transparent"
            />
            <circle
              cx="24"
              cy="24"
              r={radius}
              className="text-emerald-500 stroke-current transition-all duration-150"
              strokeWidth="3"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="transparent"
            />
          </svg>
          <ArrowUp className="w-5 h-5 text-emerald-500 dark:text-emerald-400 group-hover:-translate-y-1 transition-transform duration-200 z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
