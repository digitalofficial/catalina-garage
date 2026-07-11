"use client";

import { motion } from "framer-motion";
import { Counter } from "./Counter";
import { EnergySlashes, EnergyXMarks, BrokenContours, RoughHalftone, MarkerSpeedLines } from "./EnergyMarks";

const stats = [
  { to: 10000, suffix: "+", label: "Vehicles Repaired", accent: "#E63222" },
  { to: 18, suffix: "yrs", label: "Family-Owned in Tucson", accent: "#FF6B1A" },
  { to: 100, suffix: "%", label: "Show-You-The-Part Honest", accent: "#FFD600" },
  { to: 4.9, suffix: "", label: "Average Review Rating", accent: "#E63222" },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-red text-white">
      <MarkerSpeedLines color="white" opacity={0.1} flip />
      <RoughHalftone corner="tl" color="white" opacity={0.1} />
      <EnergySlashes color="white" opacity={0.12} variant="sparse" />
      <EnergyXMarks color="white" opacity={0.1} />
      <BrokenContours color="white" opacity={0.06} />

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
