"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface OilChangeAnimationProps {
  heading: string;
  description: string;
  carColor?: string;
  reverse?: boolean;
}

export function OilChangeAnimation({
  heading,
  description,
  carColor = "#45B5AA",
  reverse = false,
}: OilChangeAnimationProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hoodRef = useRef<SVGGElement>(null);
  const mechanicRef = useRef<SVGGElement>(null);
  const oilRef = useRef<SVGGElement>(null);
  const steamRef = useRef<SVGGElement>(null);
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

      // Phase 2: Hood opens (rotates up from front)
      tl.to(
        hoodRef.current,
        { rotation: -35, duration: 0.3, ease: "power2.out" },
        0.15
      );

      // Phase 3: Steam rises from engine
      tl.fromTo(
        steamRef.current,
        { opacity: 0, y: 0 },
        { opacity: 0.7, y: -15, duration: 0.15 },
        0.35
      );
      tl.to(steamRef.current, { opacity: 0, y: -30, duration: 0.15 }, 0.75);

      // Phase 4: Mechanic walks in from the side
      tl.fromTo(
        mechanicRef.current,
        { opacity: 0, x: reverse ? -80 : 80 },
        { opacity: 1, x: 0, duration: 0.2, ease: "power2.out" },
        0.4
      );

      // Phase 5: Oil pour animation
      tl.fromTo(
        oilRef.current,
        { opacity: 0, scaleY: 0 },
        { opacity: 1, scaleY: 1, duration: 0.15, ease: "power1.in" },
        0.6
      );

      // Oil continues flowing
      tl.to(
        oilRef.current,
        { opacity: 0.8, duration: 0.15 },
        0.75
      );

      // Phase 6: Oil stops, mechanic steps back
      tl.to(oilRef.current, { opacity: 0, scaleY: 0, duration: 0.1 }, 0.85);
      tl.to(
        mechanicRef.current,
        { x: reverse ? -20 : 20, duration: 0.1 },
        0.88
      );

      // Phase 7: Hood closes
      tl.to(
        hoodRef.current,
        { rotation: 0, duration: 0.15, ease: "power2.inOut" },
        0.9
      );

      return () => tl.kill();
    });

    // Mobile: simple reveal
    mm.add("(max-width: 767px)", () => {
      gsap.fromTo(
        section.querySelector(".oil-anim-content"),
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

  return (
    <section
      ref={sectionRef}
      className="relative bg-paper overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      <div className="oil-anim-content flex flex-col md:flex-row items-center justify-center h-screen px-5 gap-8 md:gap-16 max-w-7xl mx-auto">
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
          <svg viewBox="0 0 560 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            {/* Shadow */}
            <ellipse cx="280" cy="250" rx="220" ry="12" fill="#000" opacity=".08" />

            {/* Car body */}
            <path
              d="M80 185 Q80 155 110 145 L180 100 Q195 90 220 90 L370 90 Q400 90 415 105 L465 150 Q490 150 510 165 L510 190 Q510 197 505 197 L80 197 Q75 197 75 192Z"
              fill={carColor}
            />
            {/* Roof highlight */}
            <path
              d="M185 105 Q200 95 220 95 L365 95 Q390 95 405 107 L440 140 L175 140Z"
              fill="white"
              opacity=".1"
            />
            {/* Rear window */}
            <path d="M195 110 L188 140 L295 140 L295 97 Q285 95 265 95 L225 95 Q205 95 195 110Z" fill="#b8d8e8" opacity=".6" />
            {/* Front window */}
            <path d="M305 95 L305 140 L420 140 L400 110 Q390 97 370 95Z" fill="#b8d8e8" opacity=".6" />
            {/* Window divider */}
            <rect x="297" y="93" width="5" height="48" rx="1" fill={carColor} />

            {/* Bumpers */}
            <rect x="55" y="165" width="30" height="20" rx="5" fill="#333" />
            <rect x="498" y="160" width="35" height="25" rx="5" fill="#333" />

            {/* Headlights */}
            <rect x="505" y="155" width="14" height="12" rx="3" fill="#FFE066" opacity=".9" />
            <rect x="505" y="170" width="14" height="8" rx="2" fill="#fff" opacity=".3" />

            {/* Taillights */}
            <rect x="60" y="163" width="10" height="10" rx="2" fill="#C0392B" opacity=".8" />

            {/* Undercarriage */}
            <rect x="100" y="195" width="370" height="10" rx="3" fill="#1a1a1c" />

            {/* Hood (animates open) */}
            <g ref={hoodRef} style={{ transformOrigin: "440px 140px" }}>
              <path
                d="M305 90 Q310 88 370 88 Q400 88 415 100 L445 138 L300 138Z"
                fill={carColor}
                stroke={carColor}
                strokeWidth="1"
              />
              {/* Hood line detail */}
              <line x1="360" y1="92" x2="435" y2="130" stroke="white" strokeWidth="0.5" opacity=".2" />
            </g>

            {/* Engine bay (visible when hood opens) */}
            <rect x="310" y="100" width="120" height="38" rx="3" fill="#222" />
            {/* Engine block */}
            <rect x="330" y="108" width="40" height="24" rx="2" fill="#444" />
            <rect x="335" y="112" width="8" height="8" rx="1" fill="#555" />
            <rect x="348" y="112" width="8" height="8" rx="1" fill="#555" />
            <rect x="335" y="122" width="20" height="3" rx="1" fill="#666" />
            {/* Radiator */}
            <rect x="380" y="106" width="35" height="28" rx="2" fill="#555" />
            <line x1="385" y1="108" x2="385" y2="132" stroke="#666" strokeWidth="1" />
            <line x1="392" y1="108" x2="392" y2="132" stroke="#666" strokeWidth="1" />
            <line x1="399" y1="108" x2="399" y2="132" stroke="#666" strokeWidth="1" />
            <line x1="406" y1="108" x2="406" y2="132" stroke="#666" strokeWidth="1" />
            {/* Oil cap */}
            <circle cx="350" cy="110" r="4" fill="#777" stroke="#888" strokeWidth="1" />
            {/* Hoses */}
            <path d="M370 115 Q375 108 380 110" stroke="#C0392B" strokeWidth="2" fill="none" />
            <path d="M370 125 Q378 128 383 122" stroke="#333" strokeWidth="2" fill="none" />

            {/* Steam/heat waves from engine */}
            <g ref={steamRef} opacity="0">
              <path d="M340 95 Q342 85 338 78" stroke="white" strokeWidth="1.5" fill="none" opacity=".5" strokeLinecap="round" />
              <path d="M355 93 Q358 82 354 74" stroke="white" strokeWidth="1.5" fill="none" opacity=".4" strokeLinecap="round" />
              <path d="M370 95 Q373 84 369 76" stroke="white" strokeWidth="1.5" fill="none" opacity=".5" strokeLinecap="round" />
              <path d="M390 93 Q393 83 389 75" stroke="white" strokeWidth="1.2" fill="none" opacity=".3" strokeLinecap="round" />
            </g>

            {/* Mechanic figure */}
            <g ref={mechanicRef} opacity="0" style={{ transformOrigin: "470px 160px" }}>
              {/* Body */}
              <rect x="462" y="105" width="24" height="50" rx="4" fill="#2563EB" />
              {/* Head */}
              <circle cx="474" cy="92" r="11" fill="#D4A574" />
              {/* Cap */}
              <path d="M463 88 Q464 80 474 79 Q484 80 485 88Z" fill="#C0392B" />
              <rect x="460" y="87" width="28" height="4" rx="1" fill="#C0392B" />
              {/* Legs */}
              <rect x="465" y="153" width="8" height="30" rx="2" fill="#1e3a5f" />
              <rect x="477" y="153" width="8" height="30" rx="2" fill="#1e3a5f" />
              {/* Boots */}
              <rect x="463" y="180" width="12" height="6" rx="2" fill="#333" />
              <rect x="475" y="180" width="12" height="6" rx="2" fill="#333" />
              {/* Arm reaching with oil bottle */}
              <path d="M462 115 L440 100 L435 95" stroke="#D4A574" strokeWidth="5" fill="none" strokeLinecap="round" />
              {/* Oil bottle in hand */}
              <rect x="425" y="78" width="14" height="22" rx="3" fill="#FFD700" />
              <rect x="429" y="72" width="6" height="8" rx="2" fill="#FFD700" />
              {/* Oil label */}
              <rect x="427" y="84" width="10" height="8" rx="1" fill="#222" />
              <text x="432" y="91" textAnchor="middle" fill="white" fontSize="5" fontWeight="bold">OIL</text>
              {/* Name patch */}
              <rect x="466" y="112" width="16" height="7" rx="1" fill="white" opacity=".8" />
            </g>

            {/* Oil pour stream */}
            <g ref={oilRef} opacity="0" style={{ transformOrigin: "432px 95px" }}>
              <path
                d="M432 95 Q434 100 433 108"
                stroke="#8B6914"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                opacity=".8"
              />
              <ellipse cx="433" cy="110" rx="4" ry="2" fill="#8B6914" opacity=".6" />
            </g>

            {/* Front wheel */}
            <circle cx="410" cy="210" r="32" fill="#1a1a1c" />
            <circle cx="410" cy="210" r="28" fill="none" stroke="#333" strokeWidth="6" />
            <circle cx="410" cy="210" r="22" fill="#444" />
            <circle cx="410" cy="210" r="14" fill="#888" stroke="#999" strokeWidth="1" />
            <line x1="410" y1="196" x2="410" y2="203" stroke="#aaa" strokeWidth="2" />
            <line x1="410" y1="217" x2="410" y2="224" stroke="#aaa" strokeWidth="2" />
            <line x1="396" y1="210" x2="403" y2="210" stroke="#aaa" strokeWidth="2" />
            <line x1="417" y1="210" x2="424" y2="210" stroke="#aaa" strokeWidth="2" />
            <circle cx="410" cy="210" r="6" fill="#666" />
            <circle cx="410" cy="210" r="2.5" fill="#555" />

            {/* Rear wheel */}
            <circle cx="160" cy="210" r="32" fill="#1a1a1c" />
            <circle cx="160" cy="210" r="28" fill="none" stroke="#333" strokeWidth="6" />
            <circle cx="160" cy="210" r="22" fill="#444" />
            <circle cx="160" cy="210" r="14" fill="#888" stroke="#999" strokeWidth="1" />
            <line x1="160" y1="196" x2="160" y2="203" stroke="#aaa" strokeWidth="2" />
            <line x1="160" y1="217" x2="160" y2="224" stroke="#aaa" strokeWidth="2" />
            <line x1="146" y1="210" x2="153" y2="210" stroke="#aaa" strokeWidth="2" />
            <line x1="167" y1="210" x2="174" y2="210" stroke="#aaa" strokeWidth="2" />
            <circle cx="160" cy="210" r="6" fill="#666" />
            <circle cx="160" cy="210" r="2.5" fill="#555" />

            {/* Ground line */}
            <line x1="30" y1="243" x2="530" y2="243" stroke="#ddd" strokeWidth="1" strokeDasharray="8 4" />
          </svg>
        </div>
      </div>
    </section>
  );
}
