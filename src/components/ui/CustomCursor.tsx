"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("a") !== null ||
          target.closest("button") !== null ||
          target.getAttribute("role") === "button";
        setIsPointer(isClickable);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-emerald-400 rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isPointer ? 1.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 800, damping: 35, mass: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-emerald-400/50 rounded-full pointer-events-none z-50 hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isPointer ? 2.2 : 1,
          backgroundColor: isPointer ? "rgba(16, 185, 129, 0.1)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
      />
    </>
  );
}
