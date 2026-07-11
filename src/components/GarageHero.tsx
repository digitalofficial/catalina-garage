"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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

      {/* ═══ DIAGONAL MARKER SPEED LINES (straight only, no curves) ═══ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity: 0.12 }} aria-hidden="true">
        <svg viewBox="0 0 1600 900" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <line x1="-100" y1="0" x2="1200" y2="900" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
          <line x1="0" y1="0" x2="1300" y2="900" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
          <line x1="100" y1="0" x2="1400" y2="900" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.35" />
          <line x1="200" y1="0" x2="1500" y2="900" stroke="white" strokeWidth="3.5" strokeLinecap="round" opacity="0.45" />
          <line x1="350" y1="0" x2="1600" y2="850" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
          <line x1="500" y1="0" x2="1600" y2="750" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
          <line x1="650" y1="0" x2="1600" y2="650" stroke="white" strokeWidth="4.5" strokeLinecap="round" opacity="0.25" />
          <line x1="800" y1="0" x2="1600" y2="550" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
          <line x1="950" y1="0" x2="1600" y2="450" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.2" />
          <line x1="1100" y1="0" x2="1600" y2="350" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.15" />
          {/* Counter-angle thin lines */}
          <line x1="1600" y1="100" x2="800" y2="900" stroke="white" strokeWidth="1" opacity="0.15" />
          <line x1="1600" y1="300" x2="1000" y2="900" stroke="white" strokeWidth="1.5" opacity="0.12" />
          <line x1="1600" y1="500" x2="1200" y2="900" stroke="white" strokeWidth="0.8" opacity="0.1" />
        </svg>
      </div>

      {/* ═══ ROUGH HALFTONE DOT GRADIENT (bottom-right) ═══ */}
      <div className="absolute bottom-0 right-0 pointer-events-none" style={{ opacity: 0.18 }} aria-hidden="true">
        <svg width="600" height="500" viewBox="0 0 600 500">
          <circle cx="580" cy="480" r="8" fill="white" opacity="0.7" />
          <circle cx="550" cy="460" r="7" fill="white" opacity="0.65" />
          <circle cx="560" cy="430" r="6.5" fill="white" opacity="0.6" />
          <circle cx="520" cy="470" r="6" fill="white" opacity="0.55" />
          <circle cx="530" cy="440" r="5.5" fill="white" opacity="0.55" />
          <circle cx="500" cy="450" r="5" fill="white" opacity="0.5" />
          <circle cx="510" cy="410" r="5" fill="white" opacity="0.45" />
          <circle cx="480" cy="430" r="4.5" fill="white" opacity="0.45" />
          <circle cx="490" cy="390" r="4" fill="white" opacity="0.4" />
          <circle cx="460" cy="410" r="4" fill="white" opacity="0.4" />
          <circle cx="470" cy="370" r="3.5" fill="white" opacity="0.35" />
          <circle cx="440" cy="390" r="3.5" fill="white" opacity="0.35" />
          <circle cx="450" cy="350" r="3" fill="white" opacity="0.3" />
          <circle cx="420" cy="370" r="3" fill="white" opacity="0.3" />
          <circle cx="430" cy="330" r="2.5" fill="white" opacity="0.25" />
          <circle cx="400" cy="350" r="2.5" fill="white" opacity="0.25" />
          <circle cx="410" cy="310" r="2" fill="white" opacity="0.2" />
          <circle cx="380" cy="330" r="2" fill="white" opacity="0.2" />
          <circle cx="390" cy="290" r="1.8" fill="white" opacity="0.18" />
          <circle cx="360" cy="310" r="1.5" fill="white" opacity="0.15" />
          <circle cx="370" cy="270" r="1.5" fill="white" opacity="0.12" />
          <circle cx="340" cy="290" r="1.2" fill="white" opacity="0.1" />
        </svg>
      </div>

      {/* ═══ ROUGH HALFTONE DOT GRADIENT (top-left) ═══ */}
      <div className="absolute top-0 left-0 pointer-events-none" style={{ opacity: 0.1 }} aria-hidden="true">
        <svg width="400" height="350" viewBox="0 0 400 350">
          <circle cx="20" cy="20" r="6" fill="white" opacity="0.6" />
          <circle cx="50" cy="30" r="5" fill="white" opacity="0.5" />
          <circle cx="30" cy="60" r="5" fill="white" opacity="0.45" />
          <circle cx="70" cy="50" r="4.5" fill="white" opacity="0.4" />
          <circle cx="60" cy="85" r="4" fill="white" opacity="0.35" />
          <circle cx="95" cy="70" r="3.5" fill="white" opacity="0.3" />
          <circle cx="85" cy="110" r="3" fill="white" opacity="0.25" />
          <circle cx="120" cy="95" r="2.5" fill="white" opacity="0.2" />
          <circle cx="110" cy="140" r="2" fill="white" opacity="0.18" />
          <circle cx="145" cy="120" r="2" fill="white" opacity="0.15" />
          <circle cx="135" cy="165" r="1.5" fill="white" opacity="0.12" />
        </svg>
      </div>

      {/* ═══ X MARKS ═══ */}
      <div className="absolute top-[15%] right-[15%] pointer-events-none" style={{ opacity: 0.15 }} aria-hidden="true">
        <svg width="50" height="50" viewBox="0 0 50 50">
          <line x1="8" y1="8" x2="42" y2="42" stroke="white" strokeWidth="4" strokeLinecap="round" />
          <line x1="42" y1="8" x2="8" y2="42" stroke="white" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>
      <div className="absolute top-[25%] right-[22%] pointer-events-none" style={{ opacity: 0.1 }} aria-hidden="true">
        <svg width="35" height="35" viewBox="0 0 35 35">
          <line x1="5" y1="5" x2="30" y2="30" stroke="white" strokeWidth="3" strokeLinecap="round" />
          <line x1="30" y1="5" x2="5" y2="30" stroke="white" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
      <div className="hidden md:block absolute top-[35%] right-[10%] pointer-events-none" style={{ opacity: 0.08 }} aria-hidden="true">
        <svg width="40" height="40" viewBox="0 0 40 40">
          <line x1="6" y1="6" x2="34" y2="34" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="34" y1="6" x2="6" y2="34" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* ═══ ROUGH MARKER ARROW (sike_paint style — aggressive, sketchy) ═══ */}
      <div className="hidden md:block absolute bottom-[22%] left-[3%] pointer-events-none" style={{ opacity: 0.15 }} aria-hidden="true">
        <svg width="70" height="90" viewBox="0 0 70 90">
          {/* Main shaft — slightly wobbly like a quick marker stroke */}
          <line x1="35" y1="5" x2="33" y2="65" stroke="white" strokeWidth="5" strokeLinecap="round" />
          {/* Arrowhead — two aggressive slashes forming a V */}
          <line x1="15" y1="50" x2="33" y2="70" stroke="white" strokeWidth="5" strokeLinecap="round" />
          <line x1="55" y1="50" x2="37" y2="70" stroke="white" strokeWidth="5" strokeLinecap="round" />
          {/* Extra accent slash next to shaft */}
          <line x1="42" y1="15" x2="40" y2="40" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        </svg>
      </div>

      {/* ═══ INK DRIP TRAILS ═══ */}
      <div className="absolute top-0 right-[30%] pointer-events-none" style={{ opacity: 0.08 }} aria-hidden="true">
        <svg width="20" height="120" viewBox="0 0 20 120">
          <line x1="10" y1="0" x2="10" y2="95" stroke="white" strokeWidth="3" strokeLinecap="round" />
          <circle cx="10" cy="112" r="4" fill="white" />
          <line x1="10" y1="95" x2="10" y2="108" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <div className="absolute top-0 right-[45%] pointer-events-none" style={{ opacity: 0.05 }} aria-hidden="true">
        <svg width="16" height="80" viewBox="0 0 16 80">
          <line x1="8" y1="0" x2="8" y2="58" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="8" cy="72" r="3" fill="white" />
          <line x1="8" y1="58" x2="8" y2="69" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </div>

      {/* ═══ SHORT RANDOM ENERGY SLASHES ═══ */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.1 }} aria-hidden="true">
        {/* Short aggressive slash marks at random angles */}
        <svg className="absolute" style={{ left: "7%", top: "20%" }} width="30" height="35" viewBox="0 0 30 35">
          <line x1="2" y1="2" x2="28" y2="33" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
        <svg className="absolute" style={{ left: "92%", top: "50%" }} width="25" height="30" viewBox="0 0 25 30">
          <line x1="22" y1="2" x2="3" y2="28" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        <svg className="absolute hidden md:block" style={{ left: "50%", top: "8%" }} width="35" height="15" viewBox="0 0 35 15">
          <line x1="2" y1="12" x2="33" y2="3" stroke="white" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <svg className="absolute" style={{ left: "20%", top: "75%" }} width="22" height="28" viewBox="0 0 22 28">
          <line x1="3" y1="3" x2="19" y2="25" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

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

          {/* CTA — phone button now visible by default */}
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

        {/* ═══ MARKER ARROW (sike_paint style — rough, hand-drawn, aggressive) ═══ */}
        <motion.div
          className="hidden md:block absolute right-10 bottom-14 pointer-events-none"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <svg width="55" height="80" viewBox="0 0 55 80" style={{ opacity: 0.2 }}>
            {/* Shaft — quick, slightly off-center like a marker drag */}
            <line x1="28" y1="5" x2="26" y2="55" stroke="white" strokeWidth="5" strokeLinecap="round" />
            {/* Left arrowhead slash */}
            <line x1="10" y1="42" x2="26" y2="60" stroke="white" strokeWidth="5" strokeLinecap="round" />
            {/* Right arrowhead slash */}
            <line x1="45" y1="42" x2="28" y2="60" stroke="white" strokeWidth="5" strokeLinecap="round" />
            {/* Extra accent line (energy mark) */}
            <line x1="34" y1="12" x2="32" y2="35" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
