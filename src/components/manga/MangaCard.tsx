"use client";

import { motion } from "framer-motion";

interface MangaCardProps {
  number?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
  accent?: string;
}

export function MangaCard({ number, title, description, children, className = "", accent = "#E63222" }: MangaCardProps) {
  return (
    <motion.div
      className={`relative bg-white border-3 border-ink overflow-hidden ${className}`}
      style={{ border: "3px solid #0A0A0B", boxShadow: "5px 5px 0 #0A0A0B" }}
      whileHover={{ y: -4, rotate: 0.5, boxShadow: "8px 8px 0 #0A0A0B" }}
      transition={{ duration: 0.2 }}
    >
      {number && (
        <span
          className="absolute -top-3 -right-1 font-display text-[5rem] leading-none select-none pointer-events-none"
          style={{ color: accent, opacity: 0.08 }}
        >
          {number}
        </span>
      )}
      {children}
      <div className="relative p-6">
        {number && (
          <span
            className="inline-flex items-center justify-center w-8 h-8 mb-3 font-display text-sm border-2 border-ink bg-ink text-white"
            style={{ transform: "rotate(-3deg)" }}
          >
            {number}
          </span>
        )}
        <h3 className="font-display text-xl uppercase tracking-tight">{title}</h3>
        <p className="mt-2 text-sm text-ink/60 leading-relaxed font-sans">{description}</p>
      </div>
      {/* Bottom accent bar */}
      <div className="h-1" style={{ background: accent }} />
    </motion.div>
  );
}
