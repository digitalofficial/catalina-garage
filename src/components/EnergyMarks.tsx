"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ══════════════════════════════════════════
   ENERGY MARKS — sike_paint marker art system

   These marks don't describe objects.
   They describe ENERGY, MOTION, AGGRESSION.
   Random slashes, broken contours, scribble hatching,
   accent strokes that don't correspond to any real edge.
   ══════════════════════════════════════════ */

// ─── Draw-in animation for SVG paths ───
const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (delay: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 0.4, delay, ease: "easeOut" as const }, opacity: { duration: 0.1, delay } },
  }),
};

const pop = {
  hidden: { scale: 0, opacity: 0 },
  visible: (delay: number) => ({
    scale: 1,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 400, damping: 15, delay },
  }),
};

// ─── Random slash marks (short aggressive strokes at wild angles) ───
export function EnergySlashes({ color = "currentColor", opacity = 0.12, variant = "default" }: { color?: string; opacity?: number; variant?: "default" | "alt" | "sparse" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  const slashSets = {
    default: [
      // Short random slashes at various angles
      { d: "M0 0 L28 35", x: "8%", y: "15%", w: 30, h: 40, sw: 3.5, delay: 0 },
      { d: "M25 0 L0 30", x: "85%", y: "8%", w: 28, h: 35, sw: 2.5, delay: 0.08 },
      { d: "M0 15 L40 0", x: "72%", y: "25%", w: 42, h: 18, sw: 3, delay: 0.15 },
      { d: "M5 0 L0 25 L8 28", x: "15%", y: "70%", w: 12, h: 30, sw: 2, delay: 0.22 },
      { d: "M0 0 L18 22", x: "55%", y: "12%", w: 20, h: 25, sw: 4, delay: 0.05 },
      { d: "M20 0 L0 18 L5 22", x: "90%", y: "55%", w: 22, h: 24, sw: 2.5, delay: 0.18 },
      { d: "M0 5 L35 0 L32 8", x: "40%", y: "85%", w: 38, h: 12, sw: 3, delay: 0.12 },
      { d: "M0 0 L12 30", x: "25%", y: "45%", w: 15, h: 32, sw: 2, delay: 0.25 },
    ],
    alt: [
      { d: "M0 20 L30 0", x: "12%", y: "20%", w: 32, h: 22, sw: 3, delay: 0 },
      { d: "M0 0 L25 28 L22 32", x: "78%", y: "15%", w: 28, h: 35, sw: 4, delay: 0.1 },
      { d: "M28 0 L0 22", x: "60%", y: "70%", w: 30, h: 25, sw: 2.5, delay: 0.18 },
      { d: "M0 0 L15 8 L30 2", x: "35%", y: "10%", w: 32, h: 12, sw: 2, delay: 0.06 },
      { d: "M0 5 L20 30", x: "88%", y: "40%", w: 22, h: 32, sw: 3.5, delay: 0.14 },
      { d: "M18 0 L0 25", x: "5%", y: "60%", w: 20, h: 28, sw: 2.5, delay: 0.22 },
    ],
    sparse: [
      { d: "M0 0 L22 28", x: "10%", y: "18%", w: 24, h: 30, sw: 3, delay: 0 },
      { d: "M20 0 L0 20", x: "82%", y: "12%", w: 22, h: 22, sw: 2.5, delay: 0.12 },
      { d: "M0 8 L30 0", x: "65%", y: "75%", w: 32, h: 12, sw: 3.5, delay: 0.2 },
    ],
  };

  const slashes = slashSets[variant];

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none" style={{ opacity }} aria-hidden="true">
      {slashes.map((s, i) => (
        <svg key={i} className="absolute" style={{ left: s.x, top: s.y }} width={s.w} height={s.h} viewBox={`0 0 ${s.w} ${s.h}`}>
          <motion.path
            d={s.d}
            stroke={color}
            strokeWidth={s.sw}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            variants={draw}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={s.delay}
          />
        </svg>
      ))}
    </div>
  );
}

// ─── X marks (hand-drawn, scattered randomly) ───
export function EnergyXMarks({ color = "currentColor", opacity = 0.1 }: { color?: string; opacity?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  const marks = [
    { x: "82%", y: "14%", size: 28, sw: 3.5, delay: 0.1 },
    { x: "75%", y: "28%", size: 20, sw: 2.5, delay: 0.2 },
    { x: "88%", y: "45%", size: 24, sw: 3, delay: 0.3 },
    { x: "10%", y: "80%", size: 22, sw: 2.5, delay: 0.25 },
  ];

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none" style={{ opacity }} aria-hidden="true">
      {marks.map((m, i) => (
        <svg key={i} className="absolute" style={{ left: m.x, top: m.y }} width={m.size} height={m.size} viewBox={`0 0 ${m.size} ${m.size}`}>
          <motion.line
            x1={3} y1={3} x2={m.size - 3} y2={m.size - 3}
            stroke={color} strokeWidth={m.sw} strokeLinecap="round"
            variants={draw} initial="hidden" animate={inView ? "visible" : "hidden"} custom={m.delay}
          />
          <motion.line
            x1={m.size - 3} y1={3} x2={3} y2={m.size - 3}
            stroke={color} strokeWidth={m.sw} strokeLinecap="round"
            variants={draw} initial="hidden" animate={inView ? "visible" : "hidden"} custom={m.delay + 0.08}
          />
        </svg>
      ))}
    </div>
  );
}

// ─── Broken contour marks (incomplete curved strokes) ───
export function BrokenContours({ color = "currentColor", opacity = 0.08 }: { color?: string; opacity?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  const contours = [
    { d: "M0 20 Q15 0 35 8", x: "5%", y: "30%", w: 38, h: 24, sw: 2.5, delay: 0.15 },
    { d: "M30 0 Q10 15 0 12", x: "70%", y: "60%", w: 32, h: 18, sw: 3, delay: 0.25 },
    { d: "M0 0 Q20 8 15 25", x: "45%", y: "15%", w: 22, h: 28, sw: 2, delay: 0.1 },
    { d: "M25 18 Q8 0 0 10", x: "88%", y: "72%", w: 28, h: 22, sw: 2.5, delay: 0.35 },
    { d: "M0 8 Q18 0 30 12 Q35 18 28 25", x: "20%", y: "55%", w: 38, h: 28, sw: 2, delay: 0.2 },
  ];

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none" style={{ opacity }} aria-hidden="true">
      {contours.map((c, i) => (
        <svg key={i} className="absolute" style={{ left: c.x, top: c.y }} width={c.w} height={c.h} viewBox={`0 0 ${c.w} ${c.h}`}>
          <motion.path
            d={c.d}
            stroke={color} strokeWidth={c.sw} strokeLinecap="round" fill="none"
            variants={draw} initial="hidden" animate={inView ? "visible" : "hidden"} custom={c.delay}
          />
        </svg>
      ))}
    </div>
  );
}

// ─── Scribble hatching (quick back-and-forth pen marks) ───
export function ScribbleHatch({ color = "currentColor", opacity = 0.06, position = "tr" }: { color?: string; opacity?: number; position?: "tr" | "bl" | "tl" | "br" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  const posStyles: Record<string, React.CSSProperties> = {
    tr: { right: "8%", top: "18%" },
    bl: { left: "5%", bottom: "15%" },
    tl: { left: "8%", top: "15%" },
    br: { right: "5%", bottom: "18%" },
  };

  return (
    <div ref={ref} className="absolute pointer-events-none" style={{ ...posStyles[position], opacity }} aria-hidden="true">
      <svg width="60" height="50" viewBox="0 0 60 50">
        {[0, 8, 16, 24, 32].map((y, i) => (
          <motion.path
            key={i}
            d={`M${2 + i * 2} ${y + 3} L${55 - i * 3} ${y} L${5 + i} ${y + 6} L${52 - i * 2} ${y + 4}`}
            stroke={color} strokeWidth={1.5 + (i % 2) * 0.5} strokeLinecap="round" fill="none"
            variants={draw} initial="hidden" animate={inView ? "visible" : "hidden"} custom={0.1 + i * 0.06}
          />
        ))}
      </svg>
    </div>
  );
}

// ─── Rough halftone gradient (big → small dots, hand-placed) ───
export function RoughHalftone({ corner = "br", color = "currentColor", opacity = 0.14 }: { corner?: "br" | "tl" | "tr" | "bl"; color?: string; opacity?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-5%" });

  // Hand-placed dots with irregular spacing (not a grid)
  const dotSets: Record<string, Array<{ cx: number; cy: number; r: number; o: number }>> = {
    br: [
      { cx: 230, cy: 230, r: 8, o: 0.7 }, { cx: 200, cy: 215, r: 7, o: 0.6 }, { cx: 215, cy: 190, r: 6.5, o: 0.55 },
      { cx: 180, cy: 220, r: 6, o: 0.5 }, { cx: 190, cy: 195, r: 5.5, o: 0.48 }, { cx: 165, cy: 205, r: 5, o: 0.45 },
      { cx: 175, cy: 175, r: 4.5, o: 0.4 }, { cx: 150, cy: 190, r: 4, o: 0.38 }, { cx: 160, cy: 160, r: 3.5, o: 0.32 },
      { cx: 140, cy: 175, r: 3.5, o: 0.3 }, { cx: 145, cy: 145, r: 3, o: 0.28 }, { cx: 125, cy: 160, r: 2.5, o: 0.22 },
      { cx: 130, cy: 130, r: 2.5, o: 0.2 }, { cx: 110, cy: 148, r: 2, o: 0.18 }, { cx: 115, cy: 118, r: 2, o: 0.15 },
      { cx: 95, cy: 135, r: 1.5, o: 0.12 }, { cx: 100, cy: 105, r: 1.5, o: 0.1 }, { cx: 80, cy: 120, r: 1.2, o: 0.08 },
    ],
    tl: [
      { cx: 20, cy: 20, r: 7, o: 0.65 }, { cx: 45, cy: 30, r: 6, o: 0.55 }, { cx: 30, cy: 50, r: 5.5, o: 0.5 },
      { cx: 60, cy: 45, r: 5, o: 0.45 }, { cx: 50, cy: 70, r: 4.5, o: 0.4 }, { cx: 78, cy: 58, r: 4, o: 0.35 },
      { cx: 68, cy: 85, r: 3.5, o: 0.3 }, { cx: 95, cy: 72, r: 3, o: 0.25 }, { cx: 85, cy: 100, r: 2.5, o: 0.2 },
      { cx: 110, cy: 88, r: 2, o: 0.18 }, { cx: 100, cy: 115, r: 1.8, o: 0.14 }, { cx: 125, cy: 102, r: 1.5, o: 0.1 },
    ],
    tr: [
      { cx: 230, cy: 20, r: 7, o: 0.65 }, { cx: 205, cy: 32, r: 6, o: 0.55 }, { cx: 218, cy: 52, r: 5, o: 0.48 },
      { cx: 190, cy: 42, r: 5, o: 0.45 }, { cx: 200, cy: 68, r: 4, o: 0.38 }, { cx: 175, cy: 55, r: 3.5, o: 0.32 },
      { cx: 182, cy: 82, r: 3, o: 0.28 }, { cx: 158, cy: 70, r: 2.5, o: 0.22 }, { cx: 165, cy: 95, r: 2, o: 0.18 },
      { cx: 142, cy: 85, r: 2, o: 0.15 }, { cx: 148, cy: 108, r: 1.5, o: 0.12 }, { cx: 125, cy: 98, r: 1.2, o: 0.08 },
    ],
    bl: [
      { cx: 20, cy: 230, r: 7, o: 0.65 }, { cx: 42, cy: 215, r: 6, o: 0.55 }, { cx: 28, cy: 195, r: 5.5, o: 0.5 },
      { cx: 58, cy: 205, r: 4.5, o: 0.42 }, { cx: 48, cy: 180, r: 4, o: 0.38 }, { cx: 75, cy: 192, r: 3.5, o: 0.32 },
      { cx: 65, cy: 168, r: 3, o: 0.28 }, { cx: 90, cy: 178, r: 2.5, o: 0.22 }, { cx: 82, cy: 155, r: 2, o: 0.18 },
      { cx: 105, cy: 165, r: 1.8, o: 0.15 }, { cx: 98, cy: 142, r: 1.5, o: 0.1 },
    ],
  };

  const dots = dotSets[corner];

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity }} aria-hidden="true">
      <svg
        width="250" height="250" viewBox="0 0 250 250"
        className="absolute"
        style={{
          ...(corner === "br" ? { bottom: 0, right: 0 } : {}),
          ...(corner === "tl" ? { top: 0, left: 0 } : {}),
          ...(corner === "tr" ? { top: 0, right: 0 } : {}),
          ...(corner === "bl" ? { bottom: 0, left: 0 } : {}),
        }}
      >
        {dots.map((d, i) => (
          <motion.circle
            key={i}
            cx={d.cx} cy={d.cy} r={d.r}
            fill={color} opacity={d.o}
            variants={pop}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={i * 0.03}
          />
        ))}
      </svg>
    </div>
  );
}

// ─── Diagonal marker speed lines (sweeping thick-to-thin) ───
export function MarkerSpeedLines({ color = "currentColor", opacity = 0.1, flip = false }: { color?: string; opacity?: number; flip?: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-5%" });

  const lines = [
    { x1: -50, y1: 0, x2: 1100, y2: 800, sw: 4, o: 0.5, delay: 0 },
    { x1: 100, y1: 0, x2: 1250, y2: 800, sw: 2, o: 0.4, delay: 0.04 },
    { x1: 250, y1: 0, x2: 1400, y2: 800, sw: 3.5, o: 0.35, delay: 0.08 },
    { x1: 450, y1: 0, x2: 1600, y2: 800, sw: 1.5, o: 0.3, delay: 0.12 },
    { x1: 650, y1: 0, x2: 1600, y2: 650, sw: 3, o: 0.25, delay: 0.06 },
    { x1: 850, y1: 0, x2: 1600, y2: 520, sw: 4.5, o: 0.2, delay: 0.1 },
    { x1: 1050, y1: 0, x2: 1600, y2: 380, sw: 2, o: 0.15, delay: 0.14 },
  ];

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity, transform: flip ? "scaleX(-1)" : undefined }} aria-hidden="true">
      <svg viewBox="0 0 1600 800" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        {lines.map((l, i) => (
          <motion.line
            key={i}
            x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
            stroke={color} strokeWidth={l.sw} strokeLinecap="round" opacity={l.o}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: l.o } : {}}
            transition={{ duration: 0.5, delay: l.delay, ease: "easeOut" }}
          />
        ))}
      </svg>
    </div>
  );
}

// ─── Ink drip trails ───
export function InkDrips({ color = "currentColor", opacity = 0.07 }: { color?: string; opacity?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-5%" });

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none" style={{ opacity }} aria-hidden="true">
      <svg className="absolute top-0 right-[28%]" width="18" height="100" viewBox="0 0 18 100">
        <motion.path d="M9 0 L9 65 Q9 80 9 85 Q7 92 9 96" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round"
          variants={draw} initial="hidden" animate={inView ? "visible" : "hidden"} custom={0.2} />
        <motion.circle cx="9" cy="95" r="4" fill={color} variants={pop} initial="hidden" animate={inView ? "visible" : "hidden"} custom={0.5} />
      </svg>
      <svg className="absolute top-0 right-[45%]" width="14" height="65" viewBox="0 0 14 65">
        <motion.path d="M7 0 L7 42 Q6 52 7 56 Q8 60 7 63" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round"
          variants={draw} initial="hidden" animate={inView ? "visible" : "hidden"} custom={0.35} />
        <motion.circle cx="7" cy="62" r="3" fill={color} variants={pop} initial="hidden" animate={inView ? "visible" : "hidden"} custom={0.65} />
      </svg>
      <svg className="hidden md:block absolute top-0 left-[15%]" width="12" height="50" viewBox="0 0 12 50">
        <motion.path d="M6 0 L6 32 Q5 40 6 44" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round"
          variants={draw} initial="hidden" animate={inView ? "visible" : "hidden"} custom={0.45} />
        <motion.circle cx="6" cy="43" r="2.5" fill={color} variants={pop} initial="hidden" animate={inView ? "visible" : "hidden"} custom={0.7} />
      </svg>
    </div>
  );
}
