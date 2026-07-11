"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HeroMarks } from "./EnergyMarks";

export function GarageHero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white min-h-[90vh] flex items-center">
      {/* Background photo */}
      <div className="absolute inset-0">
        <img src="/hero-shop.jpg" alt="" className="h-full w-full object-cover" style={{ filter: "contrast(1.2) brightness(0.85) saturate(1.1)" }} />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(10,10,11,0.93) 0%, rgba(10,10,11,0.8) 30%, rgba(10,10,11,0.6) 55%, rgba(10,10,11,0.45) 100%)",
          }}
        />
      </div>

      {/* ═══ REAL SVG ENERGY MARKS ═══ */}
      <HeroMarks />

      {/* Bottom heavy border */}
      <div className="absolute bottom-0 left-0 right-0 h-[5px] bg-ink" />
      <div className="absolute bottom-[5px] left-0 right-0 h-[3px] bg-red" />

      {/* ═══════════ CONTENT ═══════════ */}
      <div className="relative mx-auto max-w-6xl px-5 py-24 md:py-32 lg:py-40 w-full">
        <div className="max-w-3xl">

          {/* Badge */}
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

          {/* Heading */}
          <motion.h1
            className="font-display uppercase text-[3.2rem] leading-[0.88] md:text-[6rem] lg:text-[7.5rem] tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            <span
              className="block relative"
              style={{
                WebkitTextStroke: "2.5px white",
                color: "transparent",
                filter: "drop-shadow(4px 4px 0 rgba(0,0,0,0.7))",
              }}
            >
              Old-School
            </span>
            <span className="block relative">
              <span className="relative inline-block">
                <span className="relative z-10" style={{ textShadow: "4px 4px 0 rgba(0,0,0,0.5)" }}>
                  Service.
                </span>
                <span
                  className="absolute -inset-x-[7%] top-[12%] -bottom-[10%] -z-0 bg-red"
                  style={{ transform: "rotate(-1.5deg)", boxShadow: "5px 5px 0 rgba(0,0,0,0.4)" }}
                />
              </span>
            </span>
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

          {/* Scribble underline */}
          <motion.div
            className="mt-3 mb-7"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.35, delay: 0.25 }}
            style={{ transformOrigin: "left" }}
            aria-hidden="true"
          >
            <svg width="320" height="14" viewBox="0 0 320 14" className="w-52 md:w-80">
              <path d="M2 8 Q25 3 55 9 Q85 14 115 6 Q145 0 175 8 Q205 14 235 5 Q265 0 295 8 Q310 11 318 7" stroke="#E63222" strokeWidth="3.5" fill="none" strokeLinecap="round" />
              <path d="M5 5 Q35 10 65 4 Q95 0 125 7 Q155 12 185 5 Q215 0 245 6 Q275 11 305 4" stroke="#E63222" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5" />
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
              className="inline-flex items-center gap-2 px-7 py-3.5 font-bold text-[0.9rem] uppercase tracking-[0.06em] border-[3px] border-white bg-white/10 text-white hover:bg-white hover:text-ink transition-colors"
              style={{ boxShadow: "5px 5px 0 rgba(255,255,255,0.2)" }}
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

        {/* Oversized "01" */}
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
      </div>
    </section>
  );
}
