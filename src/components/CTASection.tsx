"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function CTASection({
  heading = (<>Your Ride Deserves<br />A Real Mechanic.</>),
  body = "Book an appointment or just roll up. We\u2019ll take a look, tell you what\u2019s actually wrong, and quote it flat before we start.",
}: { heading?: React.ReactNode; body?: string }) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="halftone-dots text-white absolute inset-0" style={{ opacity: 0.04 }} />

      {/* Speed lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity: 0.03 }}>
        <svg viewBox="0 0 1200 400" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          {Array.from({ length: 20 }).map((_, i) => (
            <line key={i} x1={600 - i * 30} y1={i * 20} x2={1200} y2={i * 20 + 5} stroke="white" strokeWidth={1 + (i % 2)} opacity={0.4} />
          ))}
        </svg>
      </div>

      {/* Ink slash */}
      <div className="absolute top-8 right-12 pointer-events-none" style={{ opacity: 0.06 }}>
        <svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true">
          <line x1="5" y1="5" x2="75" y2="75" stroke="white" strokeWidth="3" strokeLinecap="round" />
          <line x1="20" y1="2" x2="78" y2="60" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-3xl px-5 py-20 md:py-28 text-center">
        <motion.h2
          className="font-display uppercase text-3xl md:text-[3.5rem] tracking-tight leading-[0.95]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {heading}
        </motion.h2>
        <motion.p
          className="mt-5 text-white/55 max-w-md mx-auto leading-relaxed font-sans"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {body}
        </motion.p>
        <motion.div
          className="mt-9 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href="/contact" className="btn-manga bg-red border-white/20 hover:bg-white hover:text-ink" style={{ boxShadow: "4px 4px 0 rgba(255,255,255,0.15)" }}>
            Book Appointment
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <a href="tel:+15200000000" className="btn-manga-outline text-white border-white/30 hover:bg-white hover:text-ink" style={{ boxShadow: "4px 4px 0 rgba(255,255,255,0.15)" }}>
            Call (520) 000-0000
          </a>
        </motion.div>
      </div>
    </section>
  );
}
