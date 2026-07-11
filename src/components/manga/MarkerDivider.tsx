"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ══════════════════════════════════════════
   MARKER DIVIDER — separates sections with real
   hand-drawn marker streaks instead of a clean
   line. Each streak is a CSS mask, so it can be
   tinted to any brand color.

   Two modes:
   • single streak (default) — one centered mark
   • segments[] — a full-bleed row of marks that
     spans edge-to-edge at varied sizes/angles
   ══════════════════════════════════════════ */

interface Segment {
  mark: number;
  /** flex weight — controls how much width this streak takes */
  flex: number;
  color?: string;
  rotate?: number;
  /** vertical nudge in px for hand-drawn irregularity */
  dy?: number;
  opacity?: number;
}

interface MarkerDividerProps {
  /** which mark to use (single-streak mode). wide marks read best: 9, 12, 5, 6 */
  mark?: number;
  /** full-bleed mode: a row of streaks spanning the entire width */
  segments?: Segment[];
  color?: string;
  /** height of the streak band in px */
  height?: number;
  /** width as a % of the container (single-streak mode only) */
  width?: number;
  flip?: boolean;
  rotate?: number;
  opacity?: number;
  className?: string;
}

export function MarkerDivider({
  mark = 9,
  segments,
  color = "#E63222",
  height = 44,
  width = 88,
  flip = false,
  rotate = -2,
  opacity = 0.9,
  className = "",
}: MarkerDividerProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  const maskStyle = (m: number) => ({
    backgroundColor: color,
    WebkitMaskImage: `url(/art/mark-${m}.svg)`,
    maskImage: `url(/art/mark-${m}.svg)`,
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    maskPosition: "center",
    WebkitMaskSize: "100% 100%",
    maskSize: "100% 100%",
  });

  // full-bleed row of streaks
  if (segments && segments.length) {
    return (
      <div
        ref={ref}
        className={`relative flex w-full items-center justify-center ${className}`}
        aria-hidden="true"
      >
        {segments.map((s, i) => (
          <motion.div
            key={i}
            style={{
              flex: s.flex,
              height,
              ...maskStyle(s.mark),
              backgroundColor: s.color ?? color,
              transform: `rotate(${s.rotate ?? 0}deg) translateY(${s.dy ?? 0}px)`,
            }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: s.opacity ?? opacity } : {}}
            transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
          />
        ))}
      </div>
    );
  }

  // single centered streak
  return (
    <div
      ref={ref}
      className={`relative flex w-full items-center justify-center ${className}`}
      aria-hidden="true"
    >
      <motion.div
        style={{
          width: `${width}%`,
          height,
          ...maskStyle(mark),
          transform: `rotate(${rotate}deg) scaleX(${flip ? -1 : 1})`,
        }}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity } : {}}
        transition={{ duration: 0.55, ease: "easeOut" }}
      />
    </div>
  );
}
