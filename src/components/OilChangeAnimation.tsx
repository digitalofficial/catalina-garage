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

function Wheel({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  const ir = r * 0.42;
  const sr = r * 0.72;
  const spokes = 5;
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill="#1a1a1c" />
      <circle cx={cx} cy={cy} r={r - 2} fill="none" stroke="#2a2a2c" strokeWidth="3" />
      {Array.from({ length: 24 }).map((_, i) => {
        const a = (i / 24) * Math.PI * 2;
        return <line key={i} x1={cx + Math.cos(a) * (r - 1)} y1={cy + Math.sin(a) * (r - 1)} x2={cx + Math.cos(a) * (r - 5)} y2={cy + Math.sin(a) * (r - 5)} stroke="#111" strokeWidth="1.5" />;
      })}
      <circle cx={cx} cy={cy} r={r * 0.65} fill="#aaa" />
      <circle cx={cx} cy={cy} r={r * 0.63} fill="#c0c0c0" />
      {Array.from({ length: spokes }).map((_, i) => {
        const a = (i / spokes) * Math.PI * 2 - Math.PI / 2;
        return <line key={i} x1={cx + Math.cos(a) * ir} y1={cy + Math.sin(a) * ir} x2={cx + Math.cos(a) * sr} y2={cy + Math.sin(a) * sr} stroke="#888" strokeWidth={r * 0.14} strokeLinecap="round" />;
      })}
      <circle cx={cx} cy={cy} r={ir} fill="#999" />
      <circle cx={cx} cy={cy} r={ir * 0.55} fill="#777" />
      {Array.from({ length: spokes }).map((_, i) => {
        const a = (i / spokes) * Math.PI * 2 - Math.PI / 2;
        return <circle key={i} cx={cx + Math.cos(a) * (ir * 0.75)} cy={cy + Math.sin(a) * (ir * 0.75)} r={1.8} fill="#666" />;
      })}
      <circle cx={cx} cy={cy} r={ir * 0.3} fill="#888" />
      <ellipse cx={cx - r * 0.15} cy={cy - r * 0.2} rx={r * 0.15} ry={r * 0.08} fill="white" opacity=".15" />
    </g>
  );
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
          trigger: section, pin: true, scrub: 0.8,
          start: "top top", end: "+=250%",
        },
      });

      tl.fromTo(textRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.15 });
      tl.to(hoodRef.current, { rotation: -35, duration: 0.3, ease: "power2.out" }, 0.15);
      tl.fromTo(steamRef.current, { opacity: 0, y: 0 }, { opacity: 0.7, y: -15, duration: 0.15 }, 0.35);
      tl.to(steamRef.current, { opacity: 0, y: -30, duration: 0.15 }, 0.75);
      tl.fromTo(mechanicRef.current, { opacity: 0, x: reverse ? -80 : 80 }, { opacity: 1, x: 0, duration: 0.2, ease: "power2.out" }, 0.4);
      tl.fromTo(oilRef.current, { opacity: 0, scaleY: 0 }, { opacity: 1, scaleY: 1, duration: 0.15, ease: "power1.in" }, 0.6);
      tl.to(oilRef.current, { opacity: 0.8, duration: 0.15 }, 0.75);
      tl.to(oilRef.current, { opacity: 0, scaleY: 0, duration: 0.1 }, 0.85);
      tl.to(mechanicRef.current, { x: reverse ? -20 : 20, duration: 0.1 }, 0.88);
      tl.to(hoodRef.current, { rotation: 0, duration: 0.15, ease: "power2.inOut" }, 0.9);

      return () => tl.kill();
    });

    mm.add("(max-width: 767px)", () => {
      gsap.fromTo(
        section.querySelector(".oil-anim-content"),
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
      <div className="oil-anim-content flex flex-col md:flex-row items-center justify-center h-screen px-5 gap-8 md:gap-16 max-w-7xl mx-auto">
        <div ref={textRef} className={`max-w-md ${reverse ? "md:order-2" : "md:order-1"}`}>
          <p className="eyebrow text-cherry mb-3">How we work</p>
          <h2 className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight leading-tight">{heading}</h2>
          <p className="mt-5 text-ink/60 leading-relaxed">{description}</p>
        </div>

        <div className={`relative w-full max-w-[560px] ${reverse ? "md:order-1" : "md:order-2"}`}>
          <svg viewBox="0 0 560 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <ellipse cx="280" cy="253" rx="230" ry="10" fill="#000" opacity=".06" />

            {/* Car body - realistic sedan */}
            {/* Lower body */}
            <path d="M68 193 L68 183 Q68 175 76 173 L120 167 L440 167 Q465 167 478 175 L498 183 Q504 187 504 193 L504 201 L68 201Z" fill={darken(carColor, 30)} />
            {/* Main body */}
            <path d="M72 183 Q72 163 85 157 L130 143 L445 143 Q470 143 485 155 L505 170 Q510 175 510 183 L510 193 L68 193Z" fill={carColor} />
            {/* Cabin */}
            <path d="M170 143 L185 103 Q190 93 205 91 L320 91 Q345 91 358 97 L410 123 Q418 129 420 143Z" fill={darken(carColor, 15)} />
            {/* Roof */}
            <path d="M190 105 Q195 95 210 93 L315 93 Q338 93 348 99 L395 121 L195 121Z" fill={carColor} />
            <path d="M195 107 Q198 99 212 97 L310 97 Q330 97 340 101 L385 119 L200 119Z" fill="white" opacity=".06" />

            {/* Windows */}
            <path d="M198 111 L192 137 L275 137 L275 99 Q268 97 250 97 L218 97 Q205 97 198 111Z" fill="#8ec5d6" opacity=".55" />
            <path d="M282 97 L282 137 L405 137 L385 115 Q375 101 355 97Z" fill="#8ec5d6" opacity=".55" />
            <rect x="275" y="95" width="6" height="44" rx="1" fill={darken(carColor, 20)} />

            {/* Door line & handle */}
            <line x1="280" y1="141" x2="280" y2="187" stroke={darken(carColor, 40)} strokeWidth="1" opacity=".4" />
            <rect x="290" y="161" width="18" height="4" rx="2" fill={darken(carColor, 20)} />
            <rect x="292" y="162" width="14" height="2" rx="1" fill="white" opacity=".15" />

            {/* Body crease */}
            <line x1="90" y1="167" x2="490" y2="167" stroke="white" strokeWidth="0.5" opacity=".12" />

            {/* Fender flares */}
            <path d="M100 193 Q100 173 130 170 L155 170 Q170 173 170 193" fill={carColor} stroke={darken(carColor, 30)} strokeWidth="0.5" />
            <path d="M370 193 Q370 173 400 170 L435 170 Q455 173 455 193" fill={carColor} stroke={darken(carColor, 30)} strokeWidth="0.5" />

            {/* Headlights */}
            <path d="M490 155 Q500 153 508 157 L510 170 Q510 177 505 179 L490 179Z" fill="#fff" opacity=".85" />
            <path d="M492 157 Q500 155 506 159 L508 169 Q508 175 504 177 L492 177Z" fill="#ffe9a0" opacity=".5" />
            <line x1="492" y1="175" x2="508" y2="175" stroke="#fff" strokeWidth="1.5" opacity=".6" />

            {/* Taillights */}
            <path d="M72 157 Q66 157 65 163 L65 177 Q66 183 72 183 L80 183 L80 157Z" fill="#C0392B" opacity=".8" />

            {/* Front bumper */}
            <path d="M490 179 L510 179 Q515 179 515 185 L515 195 Q515 199 510 199 L490 199Z" fill="#333" />
            <rect x="492" y="181" width="18" height="6" rx="1" fill="#222" />
            {[495, 498, 501, 504, 507].map((x) => (
              <line key={x} x1={x} y1="182" x2={x} y2="186" stroke="#444" strokeWidth="0.5" />
            ))}

            {/* Rear bumper */}
            <path d="M65 179 L80 179 L80 199 L65 199 Q60 199 60 193 L60 185 Q60 179 65 179Z" fill="#333" />
            <ellipse cx="62" cy="197" rx="4" ry="2.5" fill="#666" stroke="#555" strokeWidth="0.5" />

            {/* Side mirror */}
            <path d="M418 123 L426 119 L428 127 L420 129Z" fill={darken(carColor, 10)} />

            {/* Undercarriage */}
            <rect x="110" y="199" width="340" height="5" rx="1.5" fill="#1a1a1c" />

            {/* Hood (animates open) */}
            <g ref={hoodRef} style={{ transformOrigin: "440px 143px" }}>
              <path d="M305 91 Q310 89 370 89 Q400 89 415 101 L445 140 L300 140Z" fill={carColor} />
              <line x1="360" y1="93" x2="435" y2="133" stroke="white" strokeWidth="0.5" opacity=".1" />
              {/* Hood crease */}
              <line x1="340" y1="92" x2="440" y2="138" stroke={darken(carColor, 20)} strokeWidth="0.8" opacity=".3" />
            </g>

            {/* Engine bay (visible when hood opens) */}
            <rect x="310" y="105" width="125" height="35" rx="3" fill="#222" />
            {/* Engine block */}
            <rect x="325" y="110" width="45" height="26" rx="3" fill="#3a3a3a" />
            <rect x="328" y="113" width="10" height="10" rx="1.5" fill="#4a4a4a" />
            <rect x="341" y="113" width="10" height="10" rx="1.5" fill="#4a4a4a" />
            <rect x="354" y="113" width="10" height="10" rx="1.5" fill="#4a4a4a" />
            {/* Valve cover bolts */}
            {[332, 345, 358].map((x) => (
              <circle key={x} cx={x + 2} cy="112" r="1.5" fill="#555" />
            ))}
            {/* Oil fill cap */}
            <circle cx="348" cy="112" r="4.5" fill="#666" stroke="#777" strokeWidth="1" />
            <circle cx="348" cy="112" r="2" fill="#555" />
            {/* Radiator */}
            <rect x="385" y="108" width="40" height="28" rx="2" fill="#4a4a4a" />
            {[390, 396, 402, 408, 414, 420].map((x) => (
              <line key={x} x1={x} y1="110" x2={x} y2="134" stroke="#555" strokeWidth="0.8" />
            ))}
            {/* Coolant hoses */}
            <path d="M370 118 Q378 110 385 114" stroke="#2a7a2a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M370 128 Q380 132 386 126" stroke="#1a1a1a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            {/* Air intake */}
            <rect x="312" y="120" width="12" height="14" rx="2" fill="#333" />
            <rect x="314" y="122" width="8" height="10" rx="1" fill="#2a2a2a" />

            {/* Steam */}
            <g ref={steamRef} opacity="0">
              {[340, 355, 370, 390, 405].map((x, i) => (
                <path key={i} d={`M${x} ${100 - i * 2} Q${x + 3} ${88 - i * 3} ${x - 2} ${78 - i * 2}`} stroke="white" strokeWidth="1.2" fill="none" opacity={0.3 + i * 0.05} strokeLinecap="round" />
              ))}
            </g>

            {/* Mechanic */}
            <g ref={mechanicRef} opacity="0" style={{ transformOrigin: "475px 170px" }}>
              {/* Legs */}
              <rect x="465" y="183" width="9" height="35" rx="3" fill="#1e3a5f" />
              <rect x="478" y="183" width="9" height="35" rx="3" fill="#1e3a5f" />
              {/* Boots */}
              <path d="M463 215 L476 215 L476 220 Q476 222 474 222 L463 222 Q461 222 461 220Z" fill="#2a2a2a" />
              <path d="M476 215 L489 215 L489 220 Q489 222 487 222 L476 222 Q474 222 474 220Z" fill="#2a2a2a" />
              {/* Body / coveralls */}
              <rect x="462" y="130" width="28" height="56" rx="5" fill="#2563EB" />
              {/* Chest pocket */}
              <rect x="467" y="140" width="10" height="8" rx="1" fill="#1d4ed8" />
              {/* Name patch */}
              <rect x="467" y="141" width="9" height="4" rx="0.5" fill="white" opacity=".7" />
              {/* Belt */}
              <rect x="462" y="168" width="28" height="4" rx="1" fill="#333" />
              <rect x="473" y="167" width="6" height="6" rx="1" fill="#888" />
              {/* Head */}
              <circle cx="476" cy="118" r="12" fill="#D4A574" />
              {/* Hair */}
              <path d="M464 114 Q466 104 476 102 Q486 104 488 114" fill="#3a2a1a" />
              {/* Cap */}
              <path d="M463 113 Q465 103 476 101 Q487 103 489 113Z" fill="#C0392B" />
              <rect x="460" y="112" width="32" height="4" rx="1.5" fill="#C0392B" />
              {/* Cap brim shadow */}
              <rect x="460" y="115" width="32" height="2" rx="0.5" fill="#a02020" opacity=".4" />
              {/* Eye */}
              <circle cx="480" cy="118" r="1.2" fill="#333" />
              {/* Arm reaching with oil bottle */}
              <path d="M462 140 L442 122 L436 116" stroke="#D4A574" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              {/* Oil bottle */}
              <rect x="424" y="96" width="16" height="24" rx="3" fill="#FFD700" />
              <rect x="428" y="88" width="8" height="10" rx="3" fill="#FFD700" />
              <rect x="430" y="85" width="4" height="5" rx="1.5" fill="#DAA520" />
              {/* Label */}
              <rect x="426" y="103" width="12" height="10" rx="1" fill="#222" />
              <text x="432" y="111" textAnchor="middle" fill="#FFD700" fontSize="5" fontWeight="bold">OIL</text>
              {/* Bottle cap */}
              <rect x="429" y="86" width="6" height="3" rx="1" fill="#B8860B" />
            </g>

            {/* Oil pour */}
            <g ref={oilRef} opacity="0" style={{ transformOrigin: "432px 115px" }}>
              <path d="M432 118 Q434 125 433 135" stroke="#8B6914" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity=".8" />
              <ellipse cx="433" cy="137" rx="5" ry="2.5" fill="#8B6914" opacity=".5" />
              {/* Oil drips */}
              <circle cx="431" cy="130" r="1.5" fill="#8B6914" opacity=".4" />
              <circle cx="434" cy="126" r="1" fill="#8B6914" opacity=".3" />
            </g>

            {/* Wheels */}
            <Wheel cx={410} cy={210} r={32} />
            <Wheel cx={145} cy={210} r={32} />

            {/* Ground line */}
            <line x1="30" y1="243" x2="530" y2="243" stroke="#ddd" strokeWidth="1" strokeDasharray="8 4" />
          </svg>
        </div>
      </div>
    </section>
  );
}
