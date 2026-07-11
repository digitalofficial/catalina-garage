"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function CTASection({
  heading = (<>Your Ride Deserves<br />A Real Mechanic.</>),
  body = "Book an appointment or just roll up. We\u2019ll take a look, tell you what\u2019s actually wrong, and quote it flat before we start.",
}: { heading?: React.ReactNode; body?: string }) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="screentone text-white absolute inset-0" aria-hidden="true" />
      <div className="crosshatch text-white absolute inset-0" aria-hidden="true" />

      {/* Radial burst (impact lines) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity: 0.05 }} aria-hidden="true">
        <svg viewBox="0 0 1200 400" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
          {Array.from({ length: 40 }).map((_, i) => {
            const angle = (i / 40) * 360;
            const rad = (angle * Math.PI) / 180;
            return (
              <line key={i} x1={600} y1={200} x2={600 + Math.cos(rad) * 700} y2={200 + Math.sin(rad) * 700} stroke="white" strokeWidth={i % 3 === 0 ? 2 : 1} opacity={i % 2 === 0 ? 0.6 : 0.3} />
            );
          })}
        </svg>
      </div>

      {/* Ink slashes */}
      <div className="absolute top-6 right-8 pointer-events-none" style={{ opacity: 0.12 }} aria-hidden="true">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <line x1="5" y1="5" x2="95" y2="95" stroke="white" strokeWidth="4" strokeLinecap="round" />
          <line x1="25" y1="2" x2="98" y2="75" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <div className="absolute bottom-6 left-8 pointer-events-none" style={{ opacity: 0.08 }} aria-hidden="true">
        <svg width="70" height="70" viewBox="0 0 70 70">
          <line x1="65" y1="5" x2="5" y2="65" stroke="#E63222" strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="2" x2="2" y2="50" stroke="#E63222" strokeWidth="1.5" strokeLinecap="round" />
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
