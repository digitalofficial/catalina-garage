"use client";

import { motion } from "framer-motion";

export function PageHero({ eyebrow, title, highlight, subtitle }: { eyebrow: string; title: string; highlight?: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="halftone-dots text-white absolute inset-0" />

      {/* Speed lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity: 0.03 }}>
        <svg viewBox="0 0 1200 300" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={i} x1={200 + i * 40} y1={i * 25} x2={1200} y2={i * 25 + 5} stroke="white" strokeWidth={1 + (i % 2)} opacity={0.4} />
          ))}
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-red" />

      <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-16 md:pt-28 md:pb-20">
        <motion.span
          className="font-marker text-yellow text-lg mb-4 block"
          style={{ transform: "rotate(-2deg)", display: "inline-block" }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          className="font-display uppercase text-[2.3rem] leading-[0.95] md:text-[4rem] max-w-3xl tracking-tight"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          {title}{" "}
          {highlight && (
            <span className="relative inline-block">
              <span className="relative z-10">{highlight}</span>
              <span className="absolute -inset-x-[5%] top-[25%] -bottom-[8%] -z-0 bg-red" style={{ transform: "rotate(-1deg)" }} />
            </span>
          )}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="mt-5 max-w-xl text-base md:text-lg text-white/50 leading-relaxed font-sans"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
