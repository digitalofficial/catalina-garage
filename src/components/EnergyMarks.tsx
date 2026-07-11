"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ══════════════════════════════════════════
   ENERGY MARKS — Real hand-drawn marker art SVGs
   from /public/art/mark-{2..17}.svg

   Each mark is rendered as a CSS mask on a div so
   it can be tinted to ANY brand color (not just
   black or CSS-inverted white). Placed absolute at
   various positions, sizes, rotations, opacities.
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

// width / height of each mark's viewBox — keeps masked marks from distorting
const ASPECT: Record<string, number> = {
  "/art/mark-2.svg": 1.798,
  "/art/mark-3.svg": 1.642,
  "/art/mark-4.svg": 1.869,
  "/art/mark-5.svg": 2.153,
  "/art/mark-6.svg": 2.312,
  "/art/mark-7.svg": 2.029,
  "/art/mark-8.svg": 1.782,
  "/art/mark-9.svg": 6.489,
  "/art/mark-10.svg": 1.724,
  "/art/mark-11.svg": 1.845,
  "/art/mark-12.svg": 2.559,
  "/art/mark-13.svg": 1.742,
  "/art/mark-14.svg": 1.296,
  "/art/mark-15.svg": 1.586,
  "/art/mark-16.svg": 1.016,
  "/art/mark-17.svg": 1.079,
};

// brand palette shortcuts
export const MARK_COLORS = {
  red: "#E63222",
  orange: "#FF6B1A",
  yellow: "#FFD600",
  cyan: "#00D4FF",
  paper: "#FAF7F0",
  ink: "#0A0A0B",
};

interface MarkPlacement {
  src: string;
  style: React.CSSProperties;
  className?: string;
  size: number; // width in px
  delay: number;
  color?: string; // any CSS color; falls back to `invert` default
}

interface EnergyMarksProps {
  placements: MarkPlacement[];
  /** default color when a placement doesn't set its own (white for dark bg, ink for light) */
  invert?: boolean;
}

/** Place real SVG mark assets as tinted decorative overlays */
export function EnergyMarks({ placements, invert = false }: EnergyMarksProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-5%" });
  const defaultColor = invert ? MARK_COLORS.paper : MARK_COLORS.ink;

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {placements.map((p, i) => {
        const aspect = ASPECT[p.src] ?? 1.6;
        const targetOpacity = (p.style.opacity as number) ?? 0.12;
        return (
          <motion.div
            key={i}
            className={`absolute select-none ${p.className || ""}`}
            style={{
              width: p.size,
              height: p.size / aspect,
              backgroundColor: p.color ?? defaultColor,
              WebkitMaskImage: `url(${p.src})`,
              maskImage: `url(${p.src})`,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
              WebkitMaskSize: "contain",
              maskSize: "contain",
              ...p.style,
            }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: targetOpacity } : {}}
            transition={{ duration: 0.5, delay: p.delay, ease: "easeOut" }}
          />
        );
      })}
    </div>
  );
}

/* ══════════════════════════════════════════
   PRESET LAYOUTS — ready-to-use mark arrangements
   for different section types
   ══════════════════════════════════════════ */

const { red, orange, yellow, cyan, paper } = MARK_COLORS;

/** Hero section — aggressive, lots of marks, warm tints on dark photo */
export function HeroMarks() {
  return (
    <EnergyMarks
      invert
      placements={[
        { src: MARKS[4], size: 200, delay: 0.1, color: paper, style: { top: "7%", right: "7%", opacity: 0.16, transform: "rotate(15deg)" } },
        { src: MARKS[6], size: 150, delay: 0.2, color: red, style: { top: "24%", right: "20%", opacity: 0.22, transform: "rotate(-20deg)" } },
        { src: MARKS[10], size: 110, delay: 0.15, color: orange, style: { top: "14%", right: "36%", opacity: 0.2, transform: "rotate(5deg)" } },
        { src: MARKS[13], size: 70, delay: 0.25, color: yellow, style: { top: "40%", right: "12%", opacity: 0.18, transform: "rotate(-10deg)" } },
        { src: MARKS[2], size: 220, delay: 0.05, color: paper, style: { bottom: "18%", right: "5%", opacity: 0.1, transform: "rotate(25deg)" } },
        { src: MARKS[8], size: 130, delay: 0.3, color: red, style: { bottom: "28%", left: "2%", opacity: 0.14, transform: "rotate(-15deg)" } },
        { src: MARKS[12], size: 80, delay: 0.18, color: orange, style: { top: "60%", right: "30%", opacity: 0.14, transform: "rotate(35deg)" } },
        { src: MARKS[0], size: 170, delay: 0.22, color: paper, style: { top: "5%", left: "58%", opacity: 0.08, transform: "rotate(-8deg)" } },
        { src: MARKS[7], size: 300, delay: 0.08, color: paper, style: { bottom: "8%", right: "14%", opacity: 0.07, transform: "rotate(3deg)" } },
        { src: MARKS[15], size: 60, delay: 0.35, color: yellow, style: { top: "50%", left: "5%", opacity: 0.16, transform: "rotate(20deg)" } },
      ]}
    />
  );
}

/** Dark section — medium density, red/orange accents + white */
export function DarkSectionMarks({ variant = 0 }: { variant?: number }) {
  const sets: MarkPlacement[][] = [
    // variant 0
    [
      { src: MARKS[3], size: 180, delay: 0.1, color: paper, style: { top: "5%", right: "5%", opacity: 0.12, transform: "rotate(12deg)" } },
      { src: MARKS[7], size: 260, delay: 0.15, color: red, style: { bottom: "8%", left: "2%", opacity: 0.1, transform: "rotate(-5deg)" } },
      { src: MARKS[13], size: 80, delay: 0.2, color: orange, style: { top: "30%", right: "15%", opacity: 0.18, transform: "rotate(-18deg)" } },
      { src: MARKS[5], size: 150, delay: 0.25, color: paper, style: { bottom: "24%", right: "8%", opacity: 0.1, transform: "rotate(22deg)" } },
      { src: MARKS[11], size: 90, delay: 0.12, color: yellow, style: { top: "55%", left: "8%", opacity: 0.14, transform: "rotate(30deg)" } },
      { src: MARKS[1], size: 120, delay: 0.3, color: red, style: { top: "10%", left: "20%", opacity: 0.1, transform: "rotate(-25deg)" } },
    ],
    // variant 1
    [
      { src: MARKS[7], size: 220, delay: 0.1, color: paper, style: { top: "8%", left: "5%", opacity: 0.09, transform: "rotate(-10deg)" } },
      { src: MARKS[0], size: 140, delay: 0.18, color: orange, style: { bottom: "12%", right: "6%", opacity: 0.16, transform: "rotate(18deg)" } },
      { src: MARKS[13], size: 70, delay: 0.22, color: yellow, style: { top: "45%", right: "18%", opacity: 0.16, transform: "rotate(-30deg)" } },
      { src: MARKS[4], size: 160, delay: 0.14, color: red, style: { top: "20%", right: "3%", opacity: 0.12, transform: "rotate(8deg)" } },
      { src: MARKS[10], size: 90, delay: 0.28, color: paper, style: { bottom: "30%", left: "12%", opacity: 0.1, transform: "rotate(15deg)" } },
    ],
    // variant 2
    [
      { src: MARKS[6], size: 190, delay: 0.08, color: paper, style: { top: "3%", right: "10%", opacity: 0.11, transform: "rotate(-15deg)" } },
      { src: MARKS[2], size: 130, delay: 0.16, color: red, style: { bottom: "15%", left: "5%", opacity: 0.13, transform: "rotate(20deg)" } },
      { src: MARKS[12], size: 80, delay: 0.24, color: orange, style: { top: "40%", left: "15%", opacity: 0.14, transform: "rotate(-8deg)" } },
      { src: MARKS[8], size: 110, delay: 0.2, color: yellow, style: { bottom: "5%", right: "20%", opacity: 0.14, transform: "rotate(28deg)" } },
      { src: MARKS[15], size: 60, delay: 0.3, color: paper, style: { top: "65%", right: "5%", opacity: 0.1, transform: "rotate(-22deg)" } },
    ],
  ];

  return <EnergyMarks invert placements={sets[variant % sets.length]} />;
}

/** Light section — subtle, fewer marks, ink + faint red */
export function LightSectionMarks({ variant = 0 }: { variant?: number }) {
  const sets: MarkPlacement[][] = [
    // variant 0
    [
      { src: MARKS[5], size: 170, delay: 0.12, color: red, style: { top: "5%", right: "3%", opacity: 0.08, transform: "rotate(10deg)" } },
      { src: MARKS[13], size: 70, delay: 0.2, color: orange, style: { bottom: "10%", left: "5%", opacity: 0.1, transform: "rotate(-15deg)" } },
      { src: MARKS[7], size: 200, delay: 0.16, color: "#0A0A0B", style: { bottom: "5%", right: "8%", opacity: 0.05, transform: "rotate(5deg)" } },
      { src: MARKS[3], size: 110, delay: 0.25, color: red, style: { top: "30%", left: "2%", opacity: 0.06, transform: "rotate(-20deg)" } },
    ],
    // variant 1
    [
      { src: MARKS[8], size: 140, delay: 0.1, color: orange, style: { top: "8%", left: "5%", opacity: 0.09, transform: "rotate(18deg)" } },
      { src: MARKS[0], size: 120, delay: 0.18, color: red, style: { bottom: "15%", right: "5%", opacity: 0.08, transform: "rotate(-12deg)" } },
      { src: MARKS[13], size: 55, delay: 0.24, color: "#0A0A0B", style: { top: "50%", right: "10%", opacity: 0.06, transform: "rotate(25deg)" } },
      { src: MARKS[6], size: 180, delay: 0.14, color: red, style: { top: "3%", right: "20%", opacity: 0.05, transform: "rotate(-5deg)" } },
    ],
    // variant 2
    [
      { src: MARKS[2], size: 150, delay: 0.1, color: red, style: { top: "10%", right: "8%", opacity: 0.08, transform: "rotate(-8deg)" } },
      { src: MARKS[11], size: 85, delay: 0.2, color: orange, style: { bottom: "8%", left: "10%", opacity: 0.07, transform: "rotate(15deg)" } },
      { src: MARKS[7], size: 190, delay: 0.15, color: "#0A0A0B", style: { bottom: "20%", right: "3%", opacity: 0.05, transform: "rotate(22deg)" } },
    ],
    // variant 3
    [
      { src: MARKS[4], size: 130, delay: 0.12, color: red, style: { top: "5%", left: "8%", opacity: 0.08, transform: "rotate(-18deg)" } },
      { src: MARKS[10], size: 70, delay: 0.22, color: orange, style: { top: "40%", right: "5%", opacity: 0.07, transform: "rotate(12deg)" } },
      { src: MARKS[13], size: 50, delay: 0.28, color: "#0A0A0B", style: { bottom: "12%", right: "15%", opacity: 0.06, transform: "rotate(-25deg)" } },
    ],
  ];

  return <EnergyMarks placements={sets[variant % sets.length]} />;
}

/** Red section — like Stats — white + yellow marks */
export function RedSectionMarks() {
  return (
    <EnergyMarks
      invert
      placements={[
        { src: MARKS[4], size: 160, delay: 0.1, color: paper, style: { top: "5%", right: "5%", opacity: 0.14, transform: "rotate(15deg)" } },
        { src: MARKS[12], size: 70, delay: 0.18, color: yellow, style: { bottom: "10%", left: "8%", opacity: 0.2, transform: "rotate(-20deg)" } },
        { src: MARKS[7], size: 220, delay: 0.14, color: paper, style: { bottom: "5%", right: "15%", opacity: 0.08, transform: "rotate(8deg)" } },
        { src: MARKS[15], size: 55, delay: 0.25, color: yellow, style: { top: "30%", left: "3%", opacity: 0.18, transform: "rotate(30deg)" } },
      ]}
    />
  );
}
