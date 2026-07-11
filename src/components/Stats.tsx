"use client";

import { motion } from "framer-motion";
import { Counter } from "./Counter";

const stats = [
  { to: 10000, suffix: "+", label: "Vehicles Repaired", accent: "#E63222" },
  { to: 18, suffix: "yrs", label: "Family-Owned in Tucson", accent: "#FF6B1A" },
  { to: 100, suffix: "%", label: "Show-You-The-Part Honest", accent: "#FFD600" },
  { to: 4.9, suffix: "", label: "Average Review Rating", accent: "#E63222" },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-red text-white">
      <div className="halftone-dots text-white absolute inset-0" style={{ opacity: 0.08 }} />

      {/* Ink slash decoration */}
      <div className="absolute top-4 left-8 pointer-events-none" style={{ opacity: 0.1 }}>
        <svg width="60" height="60" viewBox="0 0 60 60" aria-hidden="true">
          <line x1="5" y1="5" x2="55" y2="55" stroke="white" strokeWidth="3" strokeLinecap="round" />
          <line x1="15" y1="2" x2="58" y2="45" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-20">
        <motion.div
          className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
              }}
            >
              <div className="font-display text-4xl md:text-5xl uppercase">
                {typeof s.to === "number" && s.to < 10 ? s.to : <Counter to={s.to} />}{s.suffix}
                {s.label === "Average Review Rating" && <span className="text-yellow"> &#9733;</span>}
              </div>
              <div className="mt-2 text-sm text-white/65 leading-snug font-sans font-medium">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-bold uppercase tracking-wide text-white/70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <span className="flex items-center gap-2">
            <span className="inline-block h-2.5 w-2.5 bg-yellow" style={{ transform: "rotate(45deg)" }} /> ASE Certified
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-2.5 w-2.5 bg-white/60" style={{ transform: "rotate(45deg)" }} /> AAA Approved
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-2.5 w-2.5 bg-orange" style={{ transform: "rotate(45deg)" }} /> BBB A+ Rated
          </span>
        </motion.div>
      </div>
    </section>
  );
}
