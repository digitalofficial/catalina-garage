"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Oil Changes & Tune-Ups",
    body: "Conventional, synthetic, and high-mileage oil. Fluid top-off, filter swap, and a 21-point inspection every time.",
    img: "/service-oil.jpg",
    accent: "#E63222",
  },
  {
    title: "Brakes & Rotors",
    body: "Pads, rotors, calipers, and fluid flushes. We don't upsell — if it doesn't need replacing, we tell you.",
    img: "/service-brakes.jpg",
    accent: "#FF6B1A",
  },
  {
    title: "Engine Diagnostics",
    body: "Check engine light? We read the codes, diagnose the real problem, and explain it in plain English.",
    img: "/service-engine.jpg",
    accent: "#E63222",
  },
  {
    title: "AC & Heating",
    body: "Tucson AC is not optional. Recharges, compressor repair, heater cores, and full climate diagnostics.",
    img: "/service-ac.jpg",
    accent: "#FFD600",
  },
  {
    title: "Transmission",
    body: "Fluid flushes, solenoid replacement, and full rebuilds. Manual and automatic, cars and trucks.",
    img: "/service-transmission.jpg",
    accent: "#FF6B1A",
  },
  {
    title: "Tires & Alignment",
    body: "New tires, rotations, balancing, and 4-wheel alignment. All major brands, price-matched.",
    img: "/service-tires.jpg",
    accent: "#E63222",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, rotate: -1 },
  visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden">
      {/* Cross-hatch shading on light bg */}
      <div className="crosshatch text-ink absolute inset-0" aria-hidden="true" />

      {/* Section number (outlined) */}
      <div className="absolute -top-6 left-5 md:left-10 font-display text-[8rem] md:text-[12rem] leading-none select-none pointer-events-none" style={{ WebkitTextStroke: "2px rgba(10,10,11,0.05)", color: "transparent" }} aria-hidden="true">
        02
      </div>

      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <span className="font-marker text-red text-lg" style={{ transform: "rotate(-2deg)", display: "inline-block" }}>
              Under the hood
            </span>
            <h2 className="font-display uppercase text-3xl md:text-[3.2rem] tracking-tight leading-[0.95] mt-2">
              If It Rolls,<br />
              <span className="relative inline-block">
                <span className="relative z-10">We Fix It.</span>
                <span className="absolute -inset-x-[4%] top-[30%] -bottom-[5%] -z-0 bg-yellow/80" style={{ transform: "rotate(-1deg)" }} />
              </span>
            </h2>
          </div>
          <Link
            href="/services"
            className="btn-manga-outline text-xs py-2 px-4 self-start md:self-auto"
          >
            All Services
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5%" }}
        >
          {services.map((s, i) => (
            <motion.div key={s.title} variants={cardVariants}>
              <div
                className="group relative bg-white overflow-hidden card-hover h-full"
                style={{ border: "3px solid #0A0A0B", boxShadow: "7px 7px 0 #0A0A0B" }}
              >
                {/* Large background number */}
                <span
                  className="absolute -top-2 -right-1 font-display text-[5rem] leading-none select-none pointer-events-none"
                  style={{ color: s.accent, opacity: 0.06 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Image */}
                <div className="h-40 w-full overflow-hidden border-b-[3px] border-ink">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="relative p-6">
                  <span
                    className="inline-flex items-center justify-center w-8 h-8 mb-3 font-display text-xs border-2 border-ink bg-ink text-white"
                    style={{ transform: "rotate(-3deg)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg uppercase tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-sm text-ink/55 leading-relaxed">{s.body}</p>
                </div>

                {/* Bottom accent */}
                <div className="h-1" style={{ background: s.accent }} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
