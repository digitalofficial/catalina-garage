"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TireAnimationProps {
  heading: string;
  description: string;
  carColor?: string;
  reverse?: boolean;
}

export function TireAnimation({
  heading,
  description,
  reverse = false,
}: TireAnimationProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        section.querySelector(".work-text"),
        { opacity: 0, x: reverse ? 60 : -60 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }
      );
      tl.fromTo(
        section.querySelector(".work-image"),
        { opacity: 0, x: reverse ? -60 : 60, scale: 0.95 },
        { opacity: 1, x: 0, scale: 1, duration: 0.8, ease: "power3.out" },
        0.15
      );
      tl.fromTo(
        section.querySelectorAll(".work-step"),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
        0.4
      );

      return () => tl.kill();
    });

    mm.add("(max-width: 767px)", () => {
      gsap.fromTo(
        section.querySelector(".work-content"),
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: { trigger: section, start: "top 80%" },
        }
      );
    });

    return () => mm.revert();
  }, [reverse]);

  const steps = [
    "Pull the wheel & inspect",
    "Check rotor & caliper wear",
    "Replace what needs replacing",
    "Road-test before handoff",
  ];

  return (
    <section ref={sectionRef} className="bg-paper overflow-hidden">
      <div className="work-content mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className={`grid gap-10 md:gap-16 lg:grid-cols-2 items-center ${reverse ? "" : ""}`}>
          {/* Text */}
          <div className={`work-text ${reverse ? "lg:order-2" : "lg:order-1"}`}>
            <p className="eyebrow text-cherry mb-3">How we work</p>
            <h2 className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight leading-tight">
              {heading}
            </h2>
            <p className="mt-5 text-ink/60 leading-relaxed max-w-lg">
              {description}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {steps.map((step, i) => (
                <div
                  key={step}
                  className="work-step flex items-start gap-3 rounded-xl border border-ink/[0.06] bg-white p-4"
                >
                  <span className="flex-shrink-0 flex items-center justify-center h-7 w-7 rounded-full bg-cherry/10 text-cherry text-xs font-bold">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium text-ink/70 leading-snug">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className={`work-image ${reverse ? "lg:order-1" : "lg:order-2"}`}>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-ink/[0.12]">
              <img
                src="/work-brakes.jpg"
                alt="Mechanic performing brake work"
                className="w-full h-auto aspect-[4/3] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/[0.08]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
