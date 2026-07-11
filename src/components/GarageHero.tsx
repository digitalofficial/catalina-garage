"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function GarageHero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white min-h-[90vh] flex items-center">
      {/* Background photo */}
      <div className="absolute inset-0">
        <img src="/hero-shop.jpg" alt="" className="h-full w-full object-cover" style={{ filter: "contrast(1.15) brightness(0.9)" }} />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(10,10,11,0.94) 0%, rgba(10,10,11,0.82) 30%, rgba(10,10,11,0.65) 55%, rgba(10,10,11,0.5) 100%)",
          }}
        />
      </div>

      {/* ═══ SCREENTONE (dense manga shading) ═══ */}
      <div className="screentone text-white absolute inset-0" aria-hidden="true" />

      {/* ═══ CROSS-HATCHING (pen sketch shading) ═══ */}
      <div className="crosshatch text-white absolute inset-0" aria-hidden="true" />

      {/* ═══ RADIAL BURST / IMPACT LINES (shōnen action focus) ═══ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity: 0.07 }} aria-hidden="true">
        <svg viewBox="0 0 1400 800" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
          {/* Radial burst from center-left (where text is) */}
          {Array.from({ length: 60 }).map((_, i) => {
            const angle = (i / 60) * 360;
            const rad = (angle * Math.PI) / 180;
            const cx = 400, cy = 350;
            const len = 600 + (i % 3) * 200;
            return (
              <line
                key={i}
                x1={cx}
                y1={cy}
                x2={cx + Math.cos(rad) * len}
                y2={cy + Math.sin(rad) * len}
                stroke="white"
                strokeWidth={i % 4 === 0 ? 2.5 : i % 2 === 0 ? 1.5 : 0.8}
                opacity={i % 3 === 0 ? 0.7 : 0.35}
              />
            );
          })}
        </svg>
      </div>

      {/* ═══ HORIZONTAL SPEED LINES (varying weight like hand-drawn) ═══ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity: 0.06 }} aria-hidden="true">
        <svg viewBox="0 0 1400 800" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <line x1="0" y1="60" x2="1400" y2="58" stroke="white" strokeWidth="0.8" />
          <line x1="0" y1="110" x2="1200" y2="112" stroke="white" strokeWidth="2" />
          <line x1="0" y1="180" x2="900" y2="178" stroke="white" strokeWidth="3.5" />
          <line x1="0" y1="245" x2="1400" y2="243" stroke="white" strokeWidth="1" />
          <line x1="0" y1="310" x2="1100" y2="312" stroke="white" strokeWidth="2.5" />
          <line x1="0" y1="390" x2="700" y2="388" stroke="white" strokeWidth="4" />
          <line x1="0" y1="460" x2="1300" y2="462" stroke="white" strokeWidth="1.5" />
          <line x1="0" y1="530" x2="850" y2="528" stroke="white" strokeWidth="3" />
          <line x1="0" y1="610" x2="1400" y2="612" stroke="white" strokeWidth="0.8" />
          <line x1="0" y1="680" x2="1050" y2="678" stroke="white" strokeWidth="2" />
          <line x1="0" y1="740" x2="600" y2="742" stroke="white" strokeWidth="3.5" />
        </svg>
      </div>

      {/* ═══ INK SLASH MARKS (top-right, aggressive) ═══ */}
      <div className="absolute top-4 right-4 md:top-8 md:right-12 pointer-events-none" style={{ opacity: 0.2 }} aria-hidden="true">
        <svg width="180" height="180" viewBox="0 0 180 180">
          <line x1="8" y1="8" x2="170" y2="170" stroke="white" strokeWidth="6" strokeLinecap="round" />
          <line x1="30" y1="4" x2="175" y2="140" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="4" y1="35" x2="140" y2="175" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="55" y1="2" x2="178" y2="110" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* ═══ INK SLASH MARKS (bottom-left, red) ═══ */}
      <div className="absolute bottom-16 left-4 md:left-12 pointer-events-none" style={{ opacity: 0.12 }} aria-hidden="true">
        <svg width="120" height="120" viewBox="0 0 120 120">
          <line x1="110" y1="8" x2="8" y2="110" stroke="#E63222" strokeWidth="5" strokeLinecap="round" />
          <line x1="90" y1="4" x2="4" y2="90" stroke="#E63222" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="115" y1="30" x2="30" y2="115" stroke="#E63222" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* ═══ SKETCH CIRCLE (rough, imperfect) ═══ */}
      <div className="hidden lg:block absolute right-[8%] top-[12%] pointer-events-none" style={{ opacity: 0.1 }} aria-hidden="true">
        <svg width="260" height="260" viewBox="0 0 260 260">
          <path d="M130 20 C180 18 230 55 240 110 C250 165 220 225 160 242 C100 258 40 230 22 175 C4 120 25 55 80 30 C110 15 130 20 130 20" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" />
          <path d="M130 30 C175 25 220 60 232 108 C244 156 218 215 165 232 C112 249 52 225 32 178 C12 131 30 65 82 40 C108 28 130 30 130 30" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="8 6" />
        </svg>
      </div>

      {/* ═══ HALFTONE GRADIENT (bottom-right corner, like manga shadow) ═══ */}
      <div className="absolute bottom-0 right-0 pointer-events-none" style={{ opacity: 0.15 }} aria-hidden="true">
        <svg width="500" height="400" viewBox="0 0 500 400">
          <defs>
            <pattern id="hero-corner-tone" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <circle cx="3" cy="3" r="1.2" fill="white" />
            </pattern>
            <linearGradient id="hero-corner-fade" x1="1" y1="1" x2="0.3" y2="0.3">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <mask id="hero-corner-mask">
              <rect width="500" height="400" fill="url(#hero-corner-fade)" />
            </mask>
          </defs>
          <rect width="500" height="400" fill="url(#hero-corner-tone)" mask="url(#hero-corner-mask)" />
        </svg>
      </div>

      {/* ═══ HALFTONE GRADIENT (top-left, lighter) ═══ */}
      <div className="absolute top-0 left-0 pointer-events-none" style={{ opacity: 0.08 }} aria-hidden="true">
        <svg width="350" height="300" viewBox="0 0 350 300">
          <defs>
            <pattern id="hero-tl-tone" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
              <circle cx="4" cy="4" r="1" fill="white" />
            </pattern>
            <linearGradient id="hero-tl-fade" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <mask id="hero-tl-mask">
              <rect width="350" height="300" fill="url(#hero-tl-fade)" />
            </mask>
          </defs>
          <rect width="350" height="300" fill="url(#hero-tl-tone)" mask="url(#hero-tl-mask)" />
        </svg>
      </div>

      {/* Bottom heavy border */}
      <div className="absolute bottom-0 left-0 right-0 h-[5px] bg-ink" />
      <div className="absolute bottom-[5px] left-0 right-0 h-[3px] bg-red" />

      {/* ═══════════ CONTENT ═══════════ */}
      <div className="relative mx-auto max-w-6xl px-5 py-24 md:py-32 lg:py-40 w-full">
        <div className="max-w-3xl">

          {/* ═══ OVERSIZED YELLOW BADGE ═══ */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -4 }}
            animate={{ opacity: 1, y: 0, rotate: -3 }}
            transition={{ duration: 0.35 }}
            className="mb-6"
          >
            <span
              className="inline-flex items-center gap-2.5 px-6 py-3 text-base md:text-lg font-bold uppercase tracking-[0.18em] border-[3px] border-ink bg-yellow text-ink font-display"
              style={{ boxShadow: "6px 6px 0 #0A0A0B", transform: "rotate(-3deg)" }}
            >
              Est. Tucson, AZ
            </span>
          </motion.div>

          {/* ═══ HEADING (shōnen impact typography) ═══ */}
          <motion.h1
            className="font-display uppercase text-[3.2rem] leading-[0.88] md:text-[6rem] lg:text-[7.5rem] tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            {/* "OLD-SCHOOL" — outlined stroke with heavy shadow */}
            <span
              className="block relative"
              style={{
                WebkitTextStroke: "2.5px white",
                color: "transparent",
                filter: "drop-shadow(4px 4px 0 rgba(0,0,0,0.6))",
              }}
            >
              Old-School
            </span>

            {/* "SERVICE." — solid on red slab with double shadow */}
            <span className="block relative">
              <span className="relative inline-block">
                <span
                  className="relative z-10"
                  style={{
                    textShadow: "4px 4px 0 rgba(0,0,0,0.5), -1px -1px 0 rgba(0,0,0,0.3)",
                  }}
                >
                  Service.
                </span>
                {/* Red paint slab */}
                <span
                  className="absolute -inset-x-[7%] top-[12%] -bottom-[10%] -z-0 bg-red"
                  style={{ transform: "rotate(-1.5deg)", boxShadow: "5px 5px 0 rgba(0,0,0,0.4)" }}
                />
              </span>
            </span>

            {/* "MODERN DIAGNOSTICS." — outlined, sketchy feel */}
            <span
              className="block text-[0.48em] mt-2"
              style={{
                WebkitTextStroke: "1.5px rgba(255,255,255,0.45)",
                color: "transparent",
                filter: "drop-shadow(3px 3px 0 rgba(0,0,0,0.4))",
              }}
            >
              Modern Diagnostics.
            </span>
          </motion.h1>

          {/* ═══ SCRIBBLE UNDERLINE (rough pen strokes) ═══ */}
          <motion.div
            className="mt-3 mb-7"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.35, delay: 0.25 }}
            style={{ transformOrigin: "left" }}
            aria-hidden="true"
          >
            <svg width="320" height="14" viewBox="0 0 320 14" className="w-52 md:w-80">
              {/* Multiple overlapping strokes for hand-drawn feel */}
              <path d="M2 8 Q25 3 55 9 Q85 14 115 6 Q145 0 175 8 Q205 14 235 5 Q265 0 295 8 Q310 11 318 7" stroke="#E63222" strokeWidth="3.5" fill="none" strokeLinecap="round" />
              <path d="M5 5 Q35 10 65 4 Q95 0 125 7 Q155 12 185 5 Q215 0 245 6 Q275 11 305 4 Q315 2 318 5" stroke="#E63222" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5" />
            </svg>
          </motion.div>

          {/* Sub text */}
          <motion.p
            className="max-w-lg text-base md:text-lg text-white/55 leading-relaxed font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
          >
            Cars, trucks, SUVs — if it rolls into Tucson, we fix it. Honest
            pricing, real mechanics, and the kind of shop your grandpa
            would&apos;ve trusted.
          </motion.p>

          {/* CTA */}
          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.3 }}
          >
            <Link href="/contact" className="btn-manga" style={{ boxShadow: "6px 6px 0 rgba(0,0,0,0.7)" }}>
              Book Appointment
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="tel:+15200000000"
              className="btn-manga-outline text-white border-white/30 hover:bg-white hover:text-ink"
              style={{ boxShadow: "6px 6px 0 rgba(255,255,255,0.1)" }}
            >
              Call (520) 000-0000
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/40 font-bold uppercase tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.4 }}
          >
            <span className="flex items-center gap-2">
              <span className="inline-block h-2.5 w-2.5 bg-red" style={{ transform: "rotate(45deg)" }} />
              ASE Certified
            </span>
            <span className="flex items-center gap-2">
              <span className="inline-block h-2.5 w-2.5 bg-yellow" style={{ transform: "rotate(45deg)" }} />
              Cars, Trucks &amp; SUVs
            </span>
            <span className="flex items-center gap-2">
              <span className="inline-block h-2.5 w-2.5 bg-orange" style={{ transform: "rotate(45deg)" }} />
              Family-Owned
            </span>
          </motion.div>
        </div>

        {/* ═══ OVERSIZED "01" (outlined, manga chapter number feel) ═══ */}
        <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 select-none pointer-events-none" aria-hidden="true">
          <span
            className="font-display text-[24rem] leading-none block"
            style={{
              WebkitTextStroke: "4px rgba(255,255,255,0.07)",
              color: "transparent",
              filter: "drop-shadow(6px 6px 0 rgba(0,0,0,0.15))",
            }}
          >
            01
          </span>
        </div>

        {/* ═══ ANIMATED ARROW ═══ */}
        <motion.div
          className="hidden md:block absolute right-12 bottom-16 pointer-events-none"
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <svg width="70" height="70" viewBox="0 0 70 70" style={{ opacity: 0.2 }}>
            <path d="M12 35 L50 35 M38 20 L54 35 L38 50" stroke="#FFD600" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
