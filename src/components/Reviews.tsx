"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LightSectionMarks } from "./EnergyMarks";

const reviews = [
  { quote: "Told me my brakes still had 40% life and to come back in six months. Every other shop tried to sell me pads on the spot. That's why I'll never go anywhere else.", who: "Foothills Regular", accent: "#E63222" },
  { quote: "AC died in July — which in Tucson is basically a medical emergency. They got me in same day, fixed it by 3pm, and it was $200 less than the dealer quoted.", who: "Oro Valley", accent: "#FF6B1A" },
  { quote: "Brought my '68 Mustang in for a tune-up and the mechanic lit up like a kid on Christmas. These people genuinely love cars.", who: "Tucson Car Guy", accent: "#FFD600" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, rotate: -1 },
  visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Reviews() {
  return (
    <section id="reviews" className="relative overflow-hidden">
      <LightSectionMarks variant={1} />

      {/* Section number */}
      <div className="absolute -top-6 left-5 md:left-10 font-display text-[8rem] md:text-[12rem] leading-none select-none pointer-events-none" style={{ WebkitTextStroke: "2px rgba(10,10,11,0.05)", color: "transparent" }} aria-hidden="true">
        05
      </div>

      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="font-marker text-red text-lg" style={{ transform: "rotate(-1deg)", display: "inline-block" }}>
            From the parking lot
          </span>
          <h2 className="font-display uppercase text-3xl md:text-[3rem] tracking-tight leading-[0.95] mt-2">
            Tucson Trusts{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Catalina Garage.</span>
              <span className="absolute -inset-x-[3%] top-[35%] -bottom-[5%] -z-0 bg-yellow/70" style={{ transform: "rotate(-0.5deg)" }} />
            </span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="text-red text-xl tracking-wide">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            <span className="text-sm font-bold text-ink/70">4.9 on Google</span>
            <span className="text-xs text-ink/40 font-medium">200+ reviews</span>
          </div>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.08 }}
        >
          {reviews.map((r, i) => (
            <motion.div key={r.who} variants={cardVariants}>
              <figure
                className="h-full bg-white p-6 relative overflow-hidden card-hover"
                style={{ border: "3px solid #0A0A0B", boxShadow: "7px 7px 0 #0A0A0B" }}
              >
                {/* Background number */}
                <span className="absolute -top-2 -right-1 font-display text-[4rem] leading-none text-ink/[0.04] select-none pointer-events-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="text-red mb-3 tracking-wide text-lg">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <blockquote className="text-[15px] text-ink/70 leading-relaxed font-sans">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 font-display text-sm uppercase tracking-wide text-ink">{r.who}</figcaption>
                <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: r.accent }} />
              </figure>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/reviews"
            className="btn-manga-outline text-xs py-2 px-4 inline-flex"
          >
            Read More Reviews
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
