"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function GarageHero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white min-h-[90vh] flex items-center">
      {/* Background photo */}
      <div className="absolute inset-0">
        <img src="/hero-shop.jpg" alt="" className="h-full w-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(10,10,11,0.92) 0%, rgba(10,10,11,0.78) 35%, rgba(10,10,11,0.6) 60%, rgba(10,10,11,0.5) 100%)",
          }}
        />
      </div>

      {/* === HALFTONE PATTERN (large, visible) === */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity: 0.12 }} aria-hidden="true">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="hero-halftone" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(15)">
              <circle cx="5" cy="5" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-halftone)" />
        </svg>
      </div>

      {/* === SPEED LINES (bold, visible) === */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity: 0.08 }} aria-hidden="true">
        <svg viewBox="0 0 1400 700" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          {/* Horizontal speed lines radiating from left */}
          <line x1="0" y1="80" x2="900" y2="80" stroke="white" strokeWidth="1.5" />
          <line x1="0" y1="120" x2="1100" y2="118" stroke="white" strokeWidth="2.5" />
          <line x1="0" y1="160" x2="700" y2="162" stroke="white" strokeWidth="1" />
          <line x1="0" y1="220" x2="1300" y2="215" stroke="white" strokeWidth="3" />
          <line x1="0" y1="280" x2="850" y2="282" stroke="white" strokeWidth="1.5" />
          <line x1="0" y1="340" x2="1050" y2="338" stroke="white" strokeWidth="2" />
          <line x1="0" y1="400" x2="600" y2="402" stroke="white" strokeWidth="1" />
          <line x1="0" y1="460" x2="1200" y2="455" stroke="white" strokeWidth="2.5" />
          <line x1="0" y1="520" x2="750" y2="522" stroke="white" strokeWidth="1.5" />
          <line x1="0" y1="580" x2="950" y2="578" stroke="white" strokeWidth="2" />
          <line x1="0" y1="640" x2="1100" y2="638" stroke="white" strokeWidth="1" />
          {/* Right-side converging lines */}
          <line x1="1400" y1="200" x2="800" y2="350" stroke="white" strokeWidth="1" />
          <line x1="1400" y1="300" x2="900" y2="360" stroke="white" strokeWidth="1.5" />
          <line x1="1400" y1="500" x2="850" y2="380" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      {/* === INK SLASH MARKS (top-right, bold) === */}
      <div className="absolute top-6 right-6 md:top-12 md:right-16 pointer-events-none" style={{ opacity: 0.15 }} aria-hidden="true">
        <svg width="160" height="160" viewBox="0 0 160 160">
          <line x1="10" y1="10" x2="150" y2="150" stroke="white" strokeWidth="5" strokeLinecap="round" />
          <line x1="35" y1="5" x2="155" y2="125" stroke="white" strokeWidth="3" strokeLinecap="round" />
          <line x1="5" y1="40" x2="120" y2="155" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {/* === INK SLASH MARKS (bottom-left) === */}
      <div className="absolute bottom-20 left-6 md:left-16 pointer-events-none" style={{ opacity: 0.08 }} aria-hidden="true">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <line x1="90" y1="10" x2="10" y2="90" stroke="#E63222" strokeWidth="4" strokeLinecap="round" />
          <line x1="70" y1="5" x2="5" y2="70" stroke="#E63222" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {/* === SCRIBBLE CIRCLE (decorative, right side) === */}
      <div className="hidden lg:block absolute right-[12%] top-[18%] pointer-events-none" style={{ opacity: 0.08 }} aria-hidden="true">
        <svg width="200" height="200" viewBox="0 0 200 200">
          <ellipse cx="100" cy="100" rx="85" ry="80" fill="none" stroke="white" strokeWidth="3" strokeDasharray="12 8" transform="rotate(-8 100 100)" />
          <ellipse cx="100" cy="100" rx="78" ry="74" fill="none" stroke="white" strokeWidth="1.5" strokeDasharray="6 10" transform="rotate(5 100 100)" />
        </svg>
      </div>

      {/* === HALFTONE GRADIENT CORNER (bottom-right) === */}
      <div className="absolute bottom-0 right-0 pointer-events-none" style={{ opacity: 0.1 }} aria-hidden="true">
        <svg width="400" height="300" viewBox="0 0 400 300">
          <defs>
            <pattern id="corner-dots" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
              <circle cx="6" cy="6" r="2" fill="white" />
            </pattern>
            <linearGradient id="corner-fade" x1="1" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <mask id="corner-mask">
              <rect width="400" height="300" fill="url(#corner-fade)" />
            </mask>
          </defs>
          <rect width="400" height="300" fill="url(#corner-dots)" mask="url(#corner-mask)" />
        </svg>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-red" />

      {/* ========== CONTENT ========== */}
      <div className="relative mx-auto max-w-6xl px-5 py-24 md:py-32 lg:py-40 w-full">
        <div className="max-w-3xl">

          {/* === OVERSIZED YELLOW BADGE === */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -4 }}
            animate={{ opacity: 1, y: 0, rotate: -3 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5"
          >
            <span
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm md:text-base font-bold uppercase tracking-[0.2em] border-[3px] border-ink bg-yellow text-ink font-display"
              style={{ boxShadow: "5px 5px 0 #0A0A0B", transform: "rotate(-3deg)" }}
            >
              Est. Tucson, AZ
            </span>
          </motion.div>

          {/* === HEADING WITH TEXT OUTLINES === */}
          <motion.h1
            className="font-display uppercase text-[3rem] leading-[0.92] md:text-[5.5rem] lg:text-[7rem] tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* "OLD-SCHOOL" - outlined text */}
            <span
              className="block"
              style={{
                WebkitTextStroke: "2px white",
                color: "transparent",
              }}
            >
              Old-School
            </span>

            {/* "SERVICE." - solid white on red paint block */}
            <span className="block">
              <span className="relative inline-block">
                <span className="relative z-10">Service.</span>
                <span
                  className="absolute -inset-x-[6%] top-[15%] -bottom-[8%] -z-0 bg-red"
                  style={{ transform: "rotate(-1.5deg)" }}
                />
              </span>
            </span>

            {/* "MODERN DIAGNOSTICS." - outlined, smaller */}
            <span
              className="block text-[0.5em] mt-1"
              style={{
                WebkitTextStroke: "1.5px rgba(255,255,255,0.4)",
                color: "transparent",
              }}
            >
              Modern Diagnostics.
            </span>
          </motion.h1>

          {/* === SCRIBBLE UNDERLINE under heading === */}
          <motion.div
            className="mt-2 mb-6"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            style={{ transformOrigin: "left" }}
            aria-hidden="true"
          >
            <svg width="280" height="10" viewBox="0 0 280 10" className="w-48 md:w-72">
              <path
                d="M2 6 Q20 2 45 7 Q70 11 95 5 Q120 0 145 6 Q170 11 195 4 Q220 0 245 7 Q260 9 278 5"
                stroke="#E63222"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>

          {/* Sub text */}
          <motion.p
            className="max-w-lg text-base md:text-lg text-white/50 leading-relaxed font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
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
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <Link href="/contact" className="btn-manga">
              Book Appointment
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="tel:+15200000000"
              className="btn-manga-outline text-white border-white/30 hover:bg-white hover:text-ink"
              style={{ boxShadow: "4px 4px 0 rgba(255,255,255,0.15)" }}
            >
              Call (520) 000-0000
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/40 font-semibold uppercase tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
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

        {/* === OVERSIZED "01" SECTION NUMBER === */}
        <div
          className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 select-none pointer-events-none"
          aria-hidden="true"
        >
          <span
            className="font-display text-[22rem] leading-none block"
            style={{
              WebkitTextStroke: "3px rgba(255,255,255,0.06)",
              color: "transparent",
            }}
          >
            01
          </span>
        </div>

        {/* === DECORATIVE ARROW (pointing right) === */}
        <motion.div
          className="hidden md:block absolute right-12 bottom-20 pointer-events-none"
          animate={{ x: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <svg width="60" height="60" viewBox="0 0 60 60" style={{ opacity: 0.15 }}>
            <path d="M10 30 L42 30 M32 18 L44 30 L32 42" stroke="#FFD600" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
