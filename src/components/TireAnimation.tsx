"use client";

import { motion } from "framer-motion";

interface TireAnimationProps {
  heading: string;
  description: string;
  reverse?: boolean;
}

export function TireAnimation({ heading, description, reverse = false }: TireAnimationProps) {
  const steps = [
    "Pull the wheel & inspect",
    "Check rotor & caliper wear",
    "Replace what needs replacing",
    "Road-test before handoff",
  ];

  return (
    <section className="bg-paper overflow-hidden relative">
      {/* Section number */}
      <div className="absolute -top-6 right-5 md:right-10 font-display text-[8rem] md:text-[12rem] leading-none text-ink/[0.03] select-none pointer-events-none" aria-hidden="true">
        04
      </div>

      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28 relative">
        <div className={`grid gap-10 md:gap-16 lg:grid-cols-2 items-center`}>
          {/* Text */}
          <motion.div
            className={reverse ? "lg:order-2" : "lg:order-1"}
            initial={{ opacity: 0, x: reverse ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-marker text-red text-lg" style={{ transform: "rotate(-2deg)", display: "inline-block" }}>
              How we work
            </span>
            <h2 className="font-display uppercase text-3xl md:text-[2.8rem] tracking-tight leading-[0.95] mt-2">
              {heading}
            </h2>
            <p className="mt-5 text-ink/55 leading-relaxed max-w-lg">
              {description}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {steps.map((step, i) => (
                <motion.div
                  key={step}
                  className="flex items-start gap-3 p-4 bg-white relative"
                  style={{ border: "2px solid #0A0A0B", boxShadow: "3px 3px 0 #0A0A0B" }}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.35 }}
                >
                  <span
                    className="flex-shrink-0 flex items-center justify-center h-7 w-7 bg-ink text-white text-xs font-display"
                    style={{ transform: "rotate(-3deg)" }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-sm font-semibold text-ink/65 leading-snug">
                    {step}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className={reverse ? "lg:order-1" : "lg:order-2"}
            initial={{ opacity: 0, x: reverse ? -40 : 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="relative overflow-hidden"
              style={{ border: "3px solid #0A0A0B", boxShadow: "6px 6px 0 #0A0A0B" }}
            >
              <img
                src="/work-brakes.jpg"
                alt="Mechanic performing brake work"
                className="w-full h-auto aspect-[4/3] object-cover"
                loading="lazy"
              />
              {/* Overlay sketch lines */}
              <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.03 }}>
                <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="none">
                  <line x1="0" y1="0" x2="400" y2="300" stroke="#0A0A0B" strokeWidth="1" />
                  <line x1="400" y1="0" x2="0" y2="300" stroke="#0A0A0B" strokeWidth="1" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
