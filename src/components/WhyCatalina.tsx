"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { DarkSectionMarks } from "./EnergyMarks";

const points = [
  { h: "No Upselling, Ever", p: "If it doesn't need fixing, we tell you. We'd rather earn your trust than nickel-and-dime you on a cabin air filter.", accent: "#E63222" },
  { h: "ASE Certified Mechanics", p: "Every wrench-turner in our shop is ASE certified, background-checked, and actually likes cars.", accent: "#FF6B1A" },
  { h: "Show-You-The-Part Honest", p: "We show you the old part, explain what went wrong, and get your approval before any work starts.", accent: "#FFD600" },
  { h: "Loaner Rides Available", p: "Need to get to work? We've got loaner vehicles and a shuttle so a repair doesn't wreck your day.", accent: "#E63222" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 25, rotate: -1 },
  visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
};

export function WhyCatalina() {
  return (
    <section id="why" className="relative bg-ink text-white overflow-hidden">
      <DarkSectionMarks variant={0} />

      {/* Section number */}
      <div className="absolute -top-6 right-5 md:right-10 font-display text-[8rem] md:text-[12rem] leading-none select-none pointer-events-none" style={{ WebkitTextStroke: "3px rgba(255,255,255,0.04)", color: "transparent" }} aria-hidden="true">
        03
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-marker text-yellow text-lg" style={{ transform: "rotate(-2deg)", display: "inline-block" }}>
              Why Catalina
            </span>
            <h2 className="font-display uppercase text-3xl md:text-[3rem] tracking-tight leading-[0.95] mt-2">
              The Kind of Shop They Don&apos;t Make Anymore.
            </h2>
            <p className="mt-5 text-white/50 leading-relaxed max-w-md">
              We built Catalina Garage because Tucson needed a shop with throwback honesty and modern tools. The kind of place where you actually trust the guy handing you the keys back.
            </p>
            <Link href="/contact" className="btn-manga mt-8 inline-flex">
              Book Appointment
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>

          <motion.div
            className="grid gap-4 sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.08 }}
          >
            {points.map((pt, i) => (
              <motion.div key={pt.h} variants={cardVariants}>
                <div
                  className="h-full p-5 bg-white/[0.05] border-[2.5px] border-white/15 relative overflow-hidden"
                  style={{ boxShadow: "5px 5px 0 rgba(255,255,255,0.06)" }}
                >
                  <span
                    className="absolute -top-1 -right-1 font-display text-[3rem] leading-none select-none pointer-events-none text-white/[0.04]"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-3 h-3 mb-3" style={{ background: pt.accent, transform: "rotate(45deg)" }} />
                  <h3 className="font-display uppercase text-sm tracking-wide">{pt.h}</h3>
                  <p className="mt-1.5 text-sm text-white/45 leading-relaxed font-sans">{pt.p}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
