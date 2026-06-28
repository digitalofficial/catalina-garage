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
  carColor = "#C0392B",
  reverse = false,
}: TireAnimationProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const tireRef = useRef<SVGGElement>(null);
  const wrenchRef = useRef<SVGGElement>(null);
  const sparksRef = useRef<SVGGElement>(null);
  const brakeGlowRef = useRef<SVGGElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 0.8,
          start: "top top",
          end: "+=250%",
        },
      });

      // Phase 1: Text fades in
      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.15 }
      );

      // Phase 2: Tire slides off (with rotation)
      tl.to(
        tireRef.current,
        { x: reverse ? -180 : 180, y: 20, rotation: 90, duration: 0.3, ease: "power2.inOut" },
        0.2
      );

      // Phase 3: Brake glow pulses (brake is exposed)
      tl.fromTo(
        brakeGlowRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1.1, duration: 0.15, ease: "power1.inOut" },
        0.45
      );

      // Phase 4: Wrench appears and works
      tl.fromTo(
        wrenchRef.current,
        { opacity: 0, x: reverse ? 40 : -40, rotation: -20 },
        { opacity: 1, x: 0, rotation: 0, duration: 0.15 },
        0.5
      );
      // Wrench wiggle
      tl.to(wrenchRef.current, { rotation: 15, duration: 0.05 }, 0.65);
      tl.to(wrenchRef.current, { rotation: -10, duration: 0.05 }, 0.7);
      tl.to(wrenchRef.current, { rotation: 5, duration: 0.05 }, 0.75);

      // Sparks during wrench work
      tl.fromTo(
        sparksRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.05 },
        0.65
      );
      tl.to(sparksRef.current, { opacity: 0, duration: 0.05 }, 0.78);

      // Phase 5: Wrench leaves
      tl.to(
        wrenchRef.current,
        { opacity: 0, x: reverse ? 60 : -60, duration: 0.1 },
        0.8
      );

      // Phase 6: Brake glow settles
      tl.to(brakeGlowRef.current, { scale: 1, opacity: 0.6, duration: 0.05 }, 0.85);

      // Phase 7: Tire comes back on
      tl.to(
        tireRef.current,
        { x: 0, y: 0, rotation: 360, duration: 0.15, ease: "power2.inOut" },
        0.85
      );

      return () => tl.kill();
    });

    // Mobile: simple reveal
    mm.add("(max-width: 767px)", () => {
      gsap.fromTo(
        section.querySelector(".tire-anim-content"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: { trigger: section, start: "top 80%" },
        }
      );
    });

    return () => mm.revert();
  }, [reverse]);

  const carX = reverse ? "55%" : "10%";

  return (
    <section
      ref={sectionRef}
      className="relative bg-paper overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      <div className="tire-anim-content flex flex-col md:flex-row items-center justify-center h-screen px-5 gap-8 md:gap-16 max-w-7xl mx-auto">
        {/* Text side */}
        <div
          ref={textRef}
          className={`max-w-md ${reverse ? "md:order-2" : "md:order-1"}`}
        >
          <p className="eyebrow text-cherry mb-3">How we work</p>
          <h2 className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight leading-tight">
            {heading}
          </h2>
          <p className="mt-5 text-ink/60 leading-relaxed">{description}</p>
        </div>

        {/* Car SVG side */}
        <div className={`relative w-full max-w-[560px] ${reverse ? "md:order-1" : "md:order-2"}`}>
          <svg viewBox="0 0 560 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            {/* Shadow */}
            <ellipse cx="280" cy="235" rx="220" ry="12" fill="#000" opacity=".08" />

            {/* Car body */}
            <path
              d="M80 170 Q80 140 110 130 L180 85 Q195 75 220 75 L370 75 Q400 75 415 90 L465 135 Q490 135 510 150 L510 175 Q510 182 505 182 L80 182 Q75 182 75 177Z"
              fill={carColor}
            />
            {/* Roof highlight */}
            <path
              d="M185 90 Q200 80 220 80 L365 80 Q390 80 405 92 L440 125 L175 125Z"
              fill="white"
              opacity=".1"
            />
            {/* Windows */}
            <path d="M195 95 L188 125 L295 125 L295 82 Q285 80 265 80 L225 80 Q205 80 195 95Z" fill="#b8d8e8" opacity=".6" />
            <path d="M305 80 L305 125 L420 125 L400 95 Q390 82 370 80Z" fill="#b8d8e8" opacity=".6" />
            {/* Window divider */}
            <rect x="297" y="78" width="5" height="48" rx="1" fill={carColor} />

            {/* Bumpers */}
            <rect x="55" y="150" width="30" height="20" rx="5" fill="#333" />
            <rect x="498" y="145" width="35" height="25" rx="5" fill="#333" />

            {/* Headlights */}
            <rect x="505" y="140" width="14" height="12" rx="3" fill="#FFE066" opacity=".9" />
            <rect x="505" y="155" width="14" height="8" rx="2" fill="#fff" opacity=".3" />

            {/* Taillights */}
            <rect x="60" y="148" width="10" height="10" rx="2" fill="#C0392B" opacity=".8" />

            {/* Undercarriage */}
            <rect x="100" y="180" width="370" height="10" rx="3" fill="#1a1a1c" />

            {/* ── FRONT WHEEL AREA ── */}
            {/* Brake rotor (always visible behind tire) */}
            <g ref={brakeGlowRef} style={{ transformOrigin: "410px 195px" }}>
              {/* Brake glow effect */}
              <circle cx="410" cy="195" r="35" fill="#C0392B" opacity=".15" />
              {/* Rotor disc */}
              <circle cx="410" cy="195" r="28" fill="#888" stroke="#666" strokeWidth="2" />
              {/* Rotor ventilation slots */}
              <line x1="410" y1="170" x2="410" y2="185" stroke="#777" strokeWidth="1.5" />
              <line x1="410" y1="205" x2="410" y2="220" stroke="#777" strokeWidth="1.5" />
              <line x1="385" y1="195" x2="400" y2="195" stroke="#777" strokeWidth="1.5" />
              <line x1="420" y1="195" x2="435" y2="195" stroke="#777" strokeWidth="1.5" />
              <line x1="395" y1="180" x2="403" y2="188" stroke="#777" strokeWidth="1" />
              <line x1="417" y1="202" x2="425" y2="210" stroke="#777" strokeWidth="1" />
              <line x1="395" y1="210" x2="403" y2="202" stroke="#777" strokeWidth="1" />
              <line x1="417" y1="188" x2="425" y2="180" stroke="#777" strokeWidth="1" />
              {/* Caliper */}
              <rect x="395" y="178" width="12" height="34" rx="3" fill="#C0392B" />
              <rect x="397" y="182" width="8" height="6" rx="1" fill="#a02020" />
              <rect x="397" y="202" width="8" height="6" rx="1" fill="#a02020" />
              {/* Center hub */}
              <circle cx="410" cy="195" r="8" fill="#555" />
              <circle cx="410" cy="195" r="3" fill="#333" />
              {/* Lug nuts */}
              <circle cx="410" cy="188" r="1.5" fill="#444" />
              <circle cx="416" cy="192" r="1.5" fill="#444" />
              <circle cx="414" cy="200" r="1.5" fill="#444" />
              <circle cx="406" cy="200" r="1.5" fill="#444" />
              <circle cx="404" cy="192" r="1.5" fill="#444" />
            </g>

            {/* Sparks */}
            <g ref={sparksRef} opacity="0">
              <line x1="395" y1="185" x2="380" y2="175" stroke="#FFE066" strokeWidth="2" strokeLinecap="round" />
              <line x1="425" y1="185" x2="440" y2="172" stroke="#FFE066" strokeWidth="2" strokeLinecap="round" />
              <line x1="400" y1="210" x2="385" y2="222" stroke="#FFE066" strokeWidth="2" strokeLinecap="round" />
              <line x1="420" y1="208" x2="438" y2="218" stroke="#FFE066" strokeWidth="2" strokeLinecap="round" />
              <circle cx="378" cy="173" r="2" fill="#FFE066" />
              <circle cx="442" cy="170" r="2" fill="#FFE066" />
              <circle cx="383" cy="224" r="1.5" fill="#FFE066" />
            </g>

            {/* Wrench */}
            <g ref={wrenchRef} style={{ transformOrigin: "410px 195px" }} opacity="0">
              <rect x="370" y="160" width="8" height="60" rx="2" fill="#777" transform="rotate(-30 374 190)" />
              <circle cx="366" cy="162" r="10" fill="none" stroke="#777" strokeWidth="5" transform="rotate(-30 374 190)" />
            </g>

            {/* Front tire (this animates off and on) */}
            <g ref={tireRef} style={{ transformOrigin: "410px 195px" }}>
              <circle cx="410" cy="195" r="32" fill="#1a1a1c" />
              {/* Tread pattern */}
              <circle cx="410" cy="195" r="28" fill="none" stroke="#333" strokeWidth="6" />
              <circle cx="410" cy="195" r="22" fill="#444" />
              {/* Rim */}
              <circle cx="410" cy="195" r="14" fill="#888" stroke="#999" strokeWidth="1" />
              {/* Spokes */}
              <line x1="410" y1="181" x2="410" y2="188" stroke="#aaa" strokeWidth="2" />
              <line x1="410" y1="202" x2="410" y2="209" stroke="#aaa" strokeWidth="2" />
              <line x1="396" y1="195" x2="403" y2="195" stroke="#aaa" strokeWidth="2" />
              <line x1="417" y1="195" x2="424" y2="195" stroke="#aaa" strokeWidth="2" />
              <line x1="400" y1="185" x2="405" y2="190" stroke="#aaa" strokeWidth="1.5" />
              <line x1="415" y1="200" x2="420" y2="205" stroke="#aaa" strokeWidth="1.5" />
              {/* Center cap */}
              <circle cx="410" cy="195" r="6" fill="#666" />
              <circle cx="410" cy="195" r="2.5" fill="#555" />
            </g>

            {/* Rear wheel (static) */}
            <circle cx="160" cy="195" r="32" fill="#1a1a1c" />
            <circle cx="160" cy="195" r="28" fill="none" stroke="#333" strokeWidth="6" />
            <circle cx="160" cy="195" r="22" fill="#444" />
            <circle cx="160" cy="195" r="14" fill="#888" stroke="#999" strokeWidth="1" />
            <line x1="160" y1="181" x2="160" y2="188" stroke="#aaa" strokeWidth="2" />
            <line x1="160" y1="202" x2="160" y2="209" stroke="#aaa" strokeWidth="2" />
            <line x1="146" y1="195" x2="153" y2="195" stroke="#aaa" strokeWidth="2" />
            <line x1="167" y1="195" x2="174" y2="195" stroke="#aaa" strokeWidth="2" />
            <circle cx="160" cy="195" r="6" fill="#666" />
            <circle cx="160" cy="195" r="2.5" fill="#555" />

            {/* Ground line */}
            <line x1="30" y1="228" x2="530" y2="228" stroke="#ddd" strokeWidth="1" strokeDasharray="8 4" />
          </svg>
        </div>
      </div>
    </section>
  );
}
