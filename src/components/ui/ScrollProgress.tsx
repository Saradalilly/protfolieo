"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500 transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
