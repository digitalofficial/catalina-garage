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

/* 5-spoke alloy wheel */
function Wheel({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  const ir = r * 0.42; // inner rim
  const sr = r * 0.72; // spoke reach
  const spokes = 5;
  return (
    <g>
      {/* tire */}
      <circle cx={cx} cy={cy} r={r} fill="#1a1a1c" />
      <circle cx={cx} cy={cy} r={r - 2} fill="none" stroke="#2a2a2c" strokeWidth="3" />
      {/* tread grooves */}
      {Array.from({ length: 24 }).map((_, i) => {
        const a = (i / 24) * Math.PI * 2;
        const x1 = cx + Math.cos(a) * (r - 1);
        const y1 = cy + Math.sin(a) * (r - 1);
        const x2 = cx + Math.cos(a) * (r - 5);
        const y2 = cy + Math.sin(a) * (r - 5);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#111" strokeWidth="1.5" />;
      })}
      {/* rim outer */}
      <circle cx={cx} cy={cy} r={r * 0.65} fill="#aaa" />
      <circle cx={cx} cy={cy} r={r * 0.63} fill="#c0c0c0" />
      {/* spokes */}
      {Array.from({ length: spokes }).map((_, i) => {
        const a = (i / spokes) * Math.PI * 2 - Math.PI / 2;
        const x1 = cx + Math.cos(a) * ir;
        const y1 = cy + Math.sin(a) * ir;
        const x2 = cx + Math.cos(a) * sr;
        const y2 = cy + Math.sin(a) * sr;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#888" strokeWidth={r * 0.14} strokeLinecap="round" />;
      })}
      {/* hub */}
      <circle cx={cx} cy={cy} r={ir} fill="#999" />
      <circle cx={cx} cy={cy} r={ir * 0.55} fill="#777" />
      {/* lug nuts */}
      {Array.from({ length: spokes }).map((_, i) => {
        const a = (i / spokes) * Math.PI * 2 - Math.PI / 2;
        const nx = cx + Math.cos(a) * (ir * 0.75);
        const ny = cy + Math.sin(a) * (ir * 0.75);
        return <circle key={i} cx={nx} cy={ny} r={1.8} fill="#666" />;
      })}
      {/* center cap */}
      <circle cx={cx} cy={cy} r={ir * 0.3} fill="#888" />
      {/* rim shine */}
      <ellipse cx={cx - r * 0.15} cy={cy - r * 0.2} rx={r * 0.15} ry={r * 0.08} fill="white" opacity=".15" />
    </g>
  );
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
          trigger: section, pin: true, scrub: 0.8,
          start: "top top", end: "+=250%",
        },
      });

      tl.fromTo(textRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.15 });
      tl.to(tireRef.current, { x: reverse ? -180 : 180, y: 20, rotation: 90, duration: 0.3, ease: "power2.inOut" }, 0.2);
      tl.fromTo(brakeGlowRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1.1, duration: 0.15, ease: "power1.inOut" }, 0.45);
      tl.fromTo(wrenchRef.current, { opacity: 0, x: reverse ? 40 : -40, rotation: -20 }, { opacity: 1, x: 0, rotation: 0, duration: 0.15 }, 0.5);
      tl.to(wrenchRef.current, { rotation: 15, duration: 0.05 }, 0.65);
      tl.to(wrenchRef.current, { rotation: -10, duration: 0.05 }, 0.7);
      tl.to(wrenchRef.current, { rotation: 5, duration: 0.05 }, 0.75);
      tl.fromTo(sparksRef.current, { opacity: 0 }, { opacity: 1, duration: 0.05 }, 0.65);
      tl.to(sparksRef.current, { opacity: 0, duration: 0.05 }, 0.78);
      tl.to(wrenchRef.current, { opacity: 0, x: reverse ? 60 : -60, duration: 0.1 }, 0.8);
      tl.to(brakeGlowRef.current, { scale: 1, opacity: 0.6, duration: 0.05 }, 0.85);
      tl.to(tireRef.current, { x: 0, y: 0, rotation: 360, duration: 0.15, ease: "power2.inOut" }, 0.85);

      return () => tl.kill();
    });

    mm.add("(max-width: 767px)", () => {
      gsap.fromTo(
        section.querySelector(".tire-anim-content"),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: section, start: "top 80%" } }
      );
    });

    return () => mm.revert();
  }, [reverse]);

  const darken = (hex: string, amt: number) => {
    const num = parseInt(hex.replace("#", ""), 16);
    const r = Math.max(0, (num >> 16) - amt);
    const g = Math.max(0, ((num >> 8) & 0xff) - amt);
    const b = Math.max(0, (num & 0xff) - amt);
    return `rgb(${r},${g},${b})`;
  };

  return (
    <section ref={sectionRef} className="relative bg-paper overflow-hidden" style={{ minHeight: "100vh" }}>
      <div className="tire-anim-content flex flex-col md:flex-row items-center justify-center h-screen px-5 gap-8 md:gap-16 max-w-7xl mx-auto">
        <div ref={textRef} className={`max-w-md ${reverse ? "md:order-2" : "md:order-1"}`}>
          <p className="eyebrow text-cherry mb-3">How we work</p>
          <h2 className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight leading-tight">{heading}</h2>
          <p className="mt-5 text-ink/60 leading-relaxed">{description}</p>
        </div>

        <div className={`relative w-full max-w-[560px] ${reverse ? "md:order-1" : "md:order-2"}`}>
          <svg viewBox="0 0 560 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            {/* Ground shadow */}
            <ellipse cx="280" cy="238" rx="230" ry="10" fill="#000" opacity=".06" />

            {/* Car body - realistic sedan profile */}
            {/* Lower body / rocker panel */}
            <path d="M68 178 L68 168 Q68 160 76 158 L120 152 L440 152 Q465 152 478 160 L498 168 Q504 172 504 178 L504 186 L68 186Z" fill={darken(carColor, 30)} />
            {/* Main body */}
            <path d="M72 168 Q72 148 85 142 L130 128 L445 128 Q470 128 485 140 L505 155 Q510 160 510 168 L510 178 L68 178Z" fill={carColor} />
            {/* Cabin / greenhouse */}
            <path d="M170 128 L185 88 Q190 78 205 76 L320 76 Q345 76 358 82 L410 108 Q418 114 420 128Z" fill={darken(carColor, 15)} />
            {/* Roof */}
            <path d="M190 90 Q195 80 210 78 L315 78 Q338 78 348 84 L395 106 L195 106Z" fill={carColor} />
            <path d="M195 92 Q198 84 212 82 L310 82 Q330 82 340 86 L385 104 L200 104Z" fill="white" opacity=".06" />

            {/* Windows */}
            {/* Rear window */}
            <path d="M198 96 L192 122 L275 122 L275 84 Q268 82 250 82 L218 82 Q205 82 198 96Z" fill="#8ec5d6" opacity=".55" />
            {/* Front window */}
            <path d="M282 82 L282 122 L405 122 L385 100 Q375 86 355 82Z" fill="#8ec5d6" opacity=".55" />
            {/* Window divider (B-pillar) */}
            <rect x="275" y="80" width="6" height="44" rx="1" fill={darken(carColor, 20)} />

            {/* Door line */}
            <line x1="280" y1="126" x2="280" y2="172" stroke={darken(carColor, 40)} strokeWidth="1" opacity=".4" />
            {/* Door handle */}
            <rect x="290" y="146" width="18" height="4" rx="2" fill={darken(carColor, 20)} />
            <rect x="292" y="147" width="14" height="2" rx="1" fill="white" opacity=".15" />

            {/* Body crease line */}
            <line x1="90" y1="152" x2="490" y2="152" stroke="white" strokeWidth="0.5" opacity=".12" />

            {/* Fender flares */}
            <path d="M100 178 Q100 158 130 155 L155 155 Q170 158 170 178" fill={carColor} stroke={darken(carColor, 30)} strokeWidth="0.5" />
            <path d="M370 178 Q370 158 400 155 L435 155 Q455 158 455 178" fill={carColor} stroke={darken(carColor, 30)} strokeWidth="0.5" />

            {/* Headlights */}
            <path d="M490 140 Q500 138 508 142 L510 155 Q510 162 505 164 L490 164Z" fill="#fff" opacity=".85" />
            <path d="M492 142 Q500 140 506 144 L508 154 Q508 160 504 162 L492 162Z" fill="#ffe9a0" opacity=".5" />
            {/* DRL strip */}
            <line x1="492" y1="160" x2="508" y2="160" stroke="#fff" strokeWidth="1.5" opacity=".6" />

            {/* Taillights */}
            <path d="M72 142 Q66 142 65 148 L65 162 Q66 168 72 168 L80 168 L80 142Z" fill="#C0392B" opacity=".8" />
            <line x1="72" y1="144" x2="72" y2="166" stroke="#ff6b6b" strokeWidth="1" opacity=".5" />

            {/* Front bumper */}
            <path d="M490 164 L510 164 Q515 164 515 170 L515 180 Q515 184 510 184 L490 184Z" fill="#333" />
            {/* Grille */}
            <rect x="492" y="166" width="18" height="6" rx="1" fill="#222" />
            <line x1="495" y1="167" x2="495" y2="171" stroke="#444" strokeWidth="0.5" />
            <line x1="498" y1="167" x2="498" y2="171" stroke="#444" strokeWidth="0.5" />
            <line x1="501" y1="167" x2="501" y2="171" stroke="#444" strokeWidth="0.5" />
            <line x1="504" y1="167" x2="504" y2="171" stroke="#444" strokeWidth="0.5" />
            <line x1="507" y1="167" x2="507" y2="171" stroke="#444" strokeWidth="0.5" />
            {/* Fog light */}
            <circle cx="500" cy="178" r="3" fill="#ffe9a0" opacity=".3" />

            {/* Rear bumper */}
            <path d="M65 164 L80 164 L80 184 L65 184 Q60 184 60 178 L60 170 Q60 164 65 164Z" fill="#333" />
            {/* Exhaust tip */}
            <ellipse cx="62" cy="182" rx="4" ry="2.5" fill="#666" stroke="#555" strokeWidth="0.5" />

            {/* Side mirror */}
            <path d="M418 108 L426 104 L428 112 L420 114Z" fill={darken(carColor, 10)} />

            {/* Undercarriage */}
            <rect x="110" y="184" width="340" height="5" rx="1.5" fill="#1a1a1c" />

            {/* ── FRONT WHEEL AREA ── */}
            {/* Brake assembly (visible behind tire) */}
            <g ref={brakeGlowRef} style={{ transformOrigin: "410px 195px" }}>
              <circle cx="410" cy="195" r="35" fill="#C0392B" opacity=".12" />
              <circle cx="410" cy="195" r="28" fill="#999" stroke="#888" strokeWidth="1.5" />
              {/* Ventilation slots */}
              {Array.from({ length: 8 }).map((_, i) => {
                const a = (i / 8) * Math.PI * 2;
                const x1 = 410 + Math.cos(a) * 12;
                const y1 = 195 + Math.sin(a) * 12;
                const x2 = 410 + Math.cos(a) * 24;
                const y2 = 195 + Math.sin(a) * 24;
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#888" strokeWidth="1.5" />;
              })}
              {/* Caliper */}
              <rect x="395" y="178" width="12" height="34" rx="4" fill="#C0392B" />
              <rect x="397" y="183" width="8" height="5" rx="1" fill="#a02020" />
              <rect x="397" y="203" width="8" height="5" rx="1" fill="#a02020" />
              <text x="401" y="198" fill="white" fontSize="5" fontWeight="bold">B</text>
              {/* Hub */}
              <circle cx="410" cy="195" r="8" fill="#777" />
              <circle cx="410" cy="195" r="3" fill="#555" />
            </g>

            {/* Sparks */}
            <g ref={sparksRef} opacity="0">
              {[[-15, -20], [15, -23], [-10, 15], [15, 13], [-20, -5], [20, 5]].map(([dx, dy], i) => (
                <g key={i}>
                  <line x1={410} y1={195} x2={410 + dx * 2} y2={195 + dy * 1.5} stroke="#FFE066" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx={410 + dx * 2.2} cy={195 + dy * 1.7} r="1.5" fill="#FFE066" />
                </g>
              ))}
            </g>

            {/* Wrench */}
            <g ref={wrenchRef} style={{ transformOrigin: "410px 195px" }} opacity="0">
              <rect x="370" y="160" width="8" height="60" rx="2" fill="#888" transform="rotate(-30 374 190)" />
              <circle cx="366" cy="162" r="10" fill="none" stroke="#888" strokeWidth="5" transform="rotate(-30 374 190)" />
            </g>

            {/* Front tire (animates off/on) */}
            <g ref={tireRef} style={{ transformOrigin: "410px 195px" }}>
              <Wheel cx={410} cy={195} r={32} />
            </g>

            {/* Rear wheel (static) */}
            <Wheel cx={145} cy={195} r={32} />

            {/* Ground line */}
            <line x1="30" y1="228" x2="530" y2="228" stroke="#ddd" strokeWidth="1" strokeDasharray="8 4" />
          </svg>
        </div>
      </div>
    </section>
  );
}
