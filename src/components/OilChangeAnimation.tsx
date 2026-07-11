"use client";

import { motion } from "framer-motion";

interface OilChangeAnimationProps {
  heading: string;
  description: string;
  reverse?: boolean;
}

export function OilChangeAnimation({ heading, description, reverse = false }: OilChangeAnimationProps) {
  const steps = [
    "Drain old oil & remove filter",
    "Inspect for leaks & wear",
    "Install new filter & fill fresh oil",
    "21-point inspection included",
  ];

  return (
    <section className="bg-paper overflow-hidden relative">
      {/* Cross-hatch */}
      <div className="crosshatch text-ink absolute inset-0" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28 relative">
        <div className="grid gap-10 md:gap-16 lg:grid-cols-2 items-center">
          {/* Text */}
          <motion.div
            className={reverse ? "lg:order-2" : "lg:order-1"}
            initial={{ opacity: 0, x: reverse ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-marker text-orange text-lg" style={{ transform: "rotate(-2deg)", display: "inline-block" }}>
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
                  style={{ border: "2.5px solid #0A0A0B", boxShadow: "5px 5px 0 #0A0A0B" }}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.35 }}
                >
                  <span
                    className="flex-shrink-0 flex items-center justify-center h-7 w-7 bg-red text-white text-xs font-display"
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
              style={{ border: "3px solid #0A0A0B", boxShadow: "8px 8px 0 #0A0A0B" }}
            >
              <img
                src="/work-oil.jpg"
                alt="Mechanic performing oil change"
                className="w-full h-auto aspect-[4/3] object-cover"
                style={{ filter: "contrast(1.1)" }}
                loading="lazy"
              />
              {/* Screentone overlay */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity: 0.08 }}>
                <svg width="100%" height="100%"><defs><pattern id="img-tone-2" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><circle cx="2.5" cy="2.5" r="0.8" fill="black" /></pattern></defs><rect width="100%" height="100%" fill="url(#img-tone-2)" /></svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
