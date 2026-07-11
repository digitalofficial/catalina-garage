"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function GarageHero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white min-h-[90vh] flex items-center">
      {/* Background photo with cutout feel */}
      <div className="absolute inset-0">
        <img
          src="/hero-shop.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(10,10,11,0.93) 0%, rgba(10,10,11,0.8) 35%, rgba(10,10,11,0.65) 60%, rgba(10,10,11,0.55) 100%)",
          }}
        />
      </div>

      {/* Halftone overlay */}
      <div className="halftone-dots text-white absolute inset-0" />

      {/* Speed lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity: 0.04 }}>
        <svg viewBox="0 0 1200 600" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          {Array.from({ length: 30 }).map((_, i) => (
            <line
              key={i}
              x1={200 + Math.sin(i) * 150}
              y1={i * 20}
              x2={1200}
              y2={i * 20 + (i % 3) * 5}
              stroke="white"
              strokeWidth={1 + (i % 3)}
              opacity={0.3 + (i % 5) * 0.14}
            />
          ))}
        </svg>
      </div>

      {/* Ink slash marks */}
      <div className="absolute top-10 right-10 pointer-events-none" style={{ opacity: 0.06 }}>
        <svg width="120" height="120" viewBox="0 0 120 120" aria-hidden="true">
          <line x1="10" y1="10" x2="110" y2="110" stroke="white" strokeWidth="4" strokeLinecap="round" />
          <line x1="30" y1="5" x2="115" y2="90" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-red" />

      <div className="relative mx-auto max-w-6xl px-5 py-24 md:py-32 lg:py-40 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -3 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.2em] border-[2.5px] border-white/30 bg-yellow text-ink mb-6"
              style={{ boxShadow: "3px 3px 0 rgba(255,255,255,0.15)", transform: "rotate(-2deg)" }}
            >
              Est. Tucson, AZ
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="font-display uppercase text-[3rem] leading-[0.95] md:text-[5.5rem] lg:text-[7rem] tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block">Old-School</span>
            <span className="block">
              <span className="relative inline-block">
                <span className="relative z-10">Service.</span>
                <span
                  className="absolute -inset-x-[6%] top-[20%] -bottom-[5%] -z-0 bg-red"
                  style={{ transform: "rotate(-1deg)" }}
                />
              </span>
            </span>
            <span className="block text-white/30 text-[0.55em]">Modern Diagnostics.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            className="mt-6 max-w-lg text-base md:text-lg text-white/50 leading-relaxed font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            Cars, trucks, SUVs — if it rolls into Tucson, we fix it. Honest
            pricing, real mechanics, and the kind of shop your grandpa
            would&apos;ve trusted.
          </motion.p>

          {/* CTA - graphic novel panel feel */}
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
            className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/40 font-semibold"
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

        {/* Decorative large number */}
        <div
          className="hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2 font-display text-[20rem] leading-none text-white/[0.03] select-none pointer-events-none"
          aria-hidden="true"
        >
          01
        </div>
      </div>
    </section>
  );
}
