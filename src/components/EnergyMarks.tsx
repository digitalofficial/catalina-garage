"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ══════════════════════════════════════════
   ENERGY MARKS — Real hand-drawn marker art SVGs
   from /public/art/mark-{2..17}.svg

   These are placed as absolute-positioned img tags
   scattered across sections at various positions,
   sizes, rotations, and opacities.
   ══════════════════════════════════════════ */

const MARKS = [
  "/art/mark-2.svg",
  "/art/mark-3.svg",
  "/art/mark-4.svg",
  "/art/mark-5.svg",
  "/art/mark-6.svg",
  "/art/mark-7.svg",
  "/art/mark-8.svg",
  "/art/mark-9.svg",
  "/art/mark-10.svg",
  "/art/mark-11.svg",
  "/art/mark-12.svg",
  "/art/mark-13.svg",
  "/art/mark-14.svg",
  "/art/mark-15.svg",
  "/art/mark-16.svg",
  "/art/mark-17.svg",
];

interface MarkPlacement {
  src: string;
  style: React.CSSProperties;
  className?: string;
  size: number; // width in px
  delay: number;
}

interface EnergyMarksProps {
  placements: MarkPlacement[];
  invert?: boolean; // true = use CSS invert for white marks on dark bg
}

/** Place real SVG mark assets as decorative overlays */
export function EnergyMarks({ placements, invert = false }: EnergyMarksProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-5%" });

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {placements.map((p, i) => (
        <motion.img
          key={i}
          src={p.src}
          alt=""
          className={`absolute select-none ${p.className || ""}`}
          style={{
            width: p.size,
            height: "auto",
            filter: invert ? "invert(1)" : undefined,
            ...p.style,
          }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={inView ? { opacity: p.style.opacity ?? 0.12, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: p.delay, ease: "easeOut" }}
          loading="lazy"
          draggable={false}
        />
      ))}
    </div>
  );
}

/* ══════════════════════════════════════════
   PRESET LAYOUTS — ready-to-use mark arrangements
   for different section types
   ══════════════════════════════════════════ */

/** Hero section — aggressive, lots of marks */
export function HeroMarks() {
  return (
    <EnergyMarks
      invert
      placements={[
        { src: MARKS[4], size: 180, delay: 0.1, style: { top: "8%", right: "8%", opacity: 0.12, transform: "rotate(15deg)" } },
        { src: MARKS[6], size: 140, delay: 0.2, style: { top: "25%", right: "20%", opacity: 0.08, transform: "rotate(-20deg)" } },
        { src: MARKS[10], size: 100, delay: 0.15, style: { top: "15%", right: "35%", opacity: 0.1, transform: "rotate(5deg)" } },
        { src: MARKS[14], size: 60, delay: 0.25, style: { top: "40%", right: "12%", opacity: 0.07, transform: "rotate(-10deg)" } },
        { src: MARKS[2], size: 200, delay: 0.05, style: { bottom: "20%", right: "5%", opacity: 0.06, transform: "rotate(25deg)" } },
        { src: MARKS[8], size: 120, delay: 0.3, style: { bottom: "30%", left: "2%", opacity: 0.08, transform: "rotate(-15deg)" } },
        { src: MARKS[12], size: 70, delay: 0.18, style: { top: "60%", right: "30%", opacity: 0.06, transform: "rotate(35deg)" } },
        { src: MARKS[0], size: 160, delay: 0.22, style: { top: "5%", left: "60%", opacity: 0.05, transform: "rotate(-8deg)" } },
        { src: MARKS[7], size: 250, delay: 0.08, style: { bottom: "10%", right: "15%", opacity: 0.04, transform: "rotate(5deg)" } },
        { src: MARKS[15], size: 55, delay: 0.35, style: { top: "50%", left: "5%", opacity: 0.07, transform: "rotate(20deg)" } },
      ]}
    />
  );
}

/** Dark section — medium density */
export function DarkSectionMarks({ variant = 0 }: { variant?: number }) {
  const sets: MarkPlacement[][] = [
    // variant 0
    [
      { src: MARKS[3], size: 160, delay: 0.1, style: { top: "5%", right: "5%", opacity: 0.1, transform: "rotate(12deg)" } },
      { src: MARKS[9], size: 200, delay: 0.15, style: { bottom: "8%", left: "3%", opacity: 0.06, transform: "rotate(-5deg)" } },
      { src: MARKS[13], size: 70, delay: 0.2, style: { top: "30%", right: "15%", opacity: 0.08, transform: "rotate(-18deg)" } },
      { src: MARKS[5], size: 140, delay: 0.25, style: { bottom: "25%", right: "8%", opacity: 0.07, transform: "rotate(22deg)" } },
      { src: MARKS[11], size: 90, delay: 0.12, style: { top: "55%", left: "8%", opacity: 0.06, transform: "rotate(30deg)" } },
      { src: MARKS[1], size: 110, delay: 0.3, style: { top: "10%", left: "20%", opacity: 0.05, transform: "rotate(-25deg)" } },
    ],
    // variant 1
    [
      { src: MARKS[7], size: 180, delay: 0.1, style: { top: "8%", left: "5%", opacity: 0.08, transform: "rotate(-10deg)" } },
      { src: MARKS[0], size: 130, delay: 0.18, style: { bottom: "12%", right: "6%", opacity: 0.1, transform: "rotate(18deg)" } },
      { src: MARKS[14], size: 60, delay: 0.22, style: { top: "45%", right: "18%", opacity: 0.07, transform: "rotate(-30deg)" } },
      { src: MARKS[4], size: 150, delay: 0.14, style: { top: "20%", right: "3%", opacity: 0.06, transform: "rotate(8deg)" } },
      { src: MARKS[10], size: 80, delay: 0.28, style: { bottom: "30%", left: "12%", opacity: 0.05, transform: "rotate(15deg)" } },
    ],
    // variant 2
    [
      { src: MARKS[6], size: 170, delay: 0.08, style: { top: "3%", right: "10%", opacity: 0.09, transform: "rotate(-15deg)" } },
      { src: MARKS[2], size: 120, delay: 0.16, style: { bottom: "15%", left: "5%", opacity: 0.07, transform: "rotate(20deg)" } },
      { src: MARKS[12], size: 75, delay: 0.24, style: { top: "40%", left: "15%", opacity: 0.06, transform: "rotate(-8deg)" } },
      { src: MARKS[8], size: 100, delay: 0.2, style: { bottom: "5%", right: "20%", opacity: 0.08, transform: "rotate(28deg)" } },
      { src: MARKS[15], size: 55, delay: 0.3, style: { top: "65%", right: "5%", opacity: 0.05, transform: "rotate(-22deg)" } },
    ],
  ];

  return <EnergyMarks invert placements={sets[variant % sets.length]} />;
}

/** Light section — subtle, fewer marks */
export function LightSectionMarks({ variant = 0 }: { variant?: number }) {
  const sets: MarkPlacement[][] = [
    // variant 0
    [
      { src: MARKS[5], size: 150, delay: 0.12, style: { top: "5%", right: "3%", opacity: 0.04, transform: "rotate(10deg)" } },
      { src: MARKS[13], size: 65, delay: 0.2, style: { bottom: "10%", left: "5%", opacity: 0.035, transform: "rotate(-15deg)" } },
      { src: MARKS[9], size: 180, delay: 0.16, style: { bottom: "5%", right: "8%", opacity: 0.025, transform: "rotate(5deg)" } },
      { src: MARKS[3], size: 100, delay: 0.25, style: { top: "30%", left: "2%", opacity: 0.03, transform: "rotate(-20deg)" } },
    ],
    // variant 1
    [
      { src: MARKS[8], size: 130, delay: 0.1, style: { top: "8%", left: "5%", opacity: 0.04, transform: "rotate(18deg)" } },
      { src: MARKS[0], size: 110, delay: 0.18, style: { bottom: "15%", right: "5%", opacity: 0.035, transform: "rotate(-12deg)" } },
      { src: MARKS[14], size: 50, delay: 0.24, style: { top: "50%", right: "10%", opacity: 0.03, transform: "rotate(25deg)" } },
      { src: MARKS[6], size: 160, delay: 0.14, style: { top: "3%", right: "20%", opacity: 0.025, transform: "rotate(-5deg)" } },
    ],
    // variant 2
    [
      { src: MARKS[2], size: 140, delay: 0.1, style: { top: "10%", right: "8%", opacity: 0.04, transform: "rotate(-8deg)" } },
      { src: MARKS[11], size: 80, delay: 0.2, style: { bottom: "8%", left: "10%", opacity: 0.03, transform: "rotate(15deg)" } },
      { src: MARKS[7], size: 170, delay: 0.15, style: { bottom: "20%", right: "3%", opacity: 0.025, transform: "rotate(22deg)" } },
    ],
    // variant 3
    [
      { src: MARKS[4], size: 120, delay: 0.12, style: { top: "5%", left: "8%", opacity: 0.035, transform: "rotate(-18deg)" } },
      { src: MARKS[10], size: 70, delay: 0.22, style: { top: "40%", right: "5%", opacity: 0.03, transform: "rotate(12deg)" } },
      { src: MARKS[15], size: 45, delay: 0.28, style: { bottom: "12%", right: "15%", opacity: 0.025, transform: "rotate(-25deg)" } },
    ],
  ];

  return <EnergyMarks placements={sets[variant % sets.length]} />;
}

/** Red section — like Stats */
export function RedSectionMarks() {
  return (
    <EnergyMarks
      invert
      placements={[
        { src: MARKS[4], size: 140, delay: 0.1, style: { top: "5%", right: "5%", opacity: 0.1, transform: "rotate(15deg)" } },
        { src: MARKS[12], size: 60, delay: 0.18, style: { bottom: "10%", left: "8%", opacity: 0.08, transform: "rotate(-20deg)" } },
        { src: MARKS[7], size: 180, delay: 0.14, style: { bottom: "5%", right: "15%", opacity: 0.05, transform: "rotate(8deg)" } },
        { src: MARKS[15], size: 50, delay: 0.25, style: { top: "30%", left: "3%", opacity: 0.07, transform: "rotate(30deg)" } },
      ]}
    />
  );
}
