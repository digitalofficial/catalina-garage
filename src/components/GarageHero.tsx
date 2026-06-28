"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

/* ── inline SVG cars ── */
function CarSVG({ color, className }: { color: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 320 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* body */}
      <path d="M40 75 Q40 55 60 50 L100 30 Q110 25 130 25 L210 25 Q230 25 240 35 L270 55 Q290 55 300 65 L300 80 Q300 85 295 85 L40 85 Q35 85 35 80Z" fill={color} />
      {/* windows */}
      <path d="M110 35 L105 50 L170 50 L170 30 Q165 28 150 28 L130 28 Q115 28 110 35Z" fill="#b8d8e8" opacity=".7" />
      <path d="M175 28 L175 50 L240 50 L230 38 Q222 28 210 28Z" fill="#b8d8e8" opacity=".7" />
      {/* bumpers */}
      <rect x="28" y="65" width="18" height="12" rx="3" fill="#333" />
      <rect x="290" y="62" width="20" height="15" rx="3" fill="#333" />
      {/* headlight */}
      <rect x="293" y="58" width="8" height="8" rx="2" fill="#FFE066" opacity=".9" />
      {/* taillight */}
      <rect x="30" y="62" width="6" height="6" rx="1" fill="#C0392B" opacity=".8" />
      {/* undercarriage */}
      <rect x="55" y="83" width="220" height="6" rx="2" fill="#222" />
      {/* front wheel */}
      <circle cx="95" cy="90" r="18" fill="#222" />
      <circle cx="95" cy="90" r="10" fill="#555" />
      <circle cx="95" cy="90" r="4" fill="#333" />
      {/* rear wheel */}
      <circle cx="240" cy="90" r="18" fill="#222" />
      <circle cx="240" cy="90" r="10" fill="#555" />
      <circle cx="240" cy="90" r="4" fill="#333" />
      {/* wheel shine */}
      <ellipse cx="90" cy="85" rx="3" ry="2" fill="#777" opacity=".4" />
      <ellipse cx="235" cy="85" rx="3" ry="2" fill="#777" opacity=".4" />
    </svg>
  );
}

function GarageDoor({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* building wall */}
      <rect width="400" height="350" fill="#2A1215" />
      {/* garage opening */}
      <rect x="40" y="60" width="320" height="260" rx="6" fill="#111" />
      {/* door panels (rolled up partially) */}
      <rect x="40" y="60" width="320" height="30" rx="2" fill="#444" />
      <rect x="40" y="60" width="320" height="15" rx="2" fill="#555" />
      {/* interior glow */}
      <rect x="45" y="95" width="310" height="220" rx="2" fill="#1a1208" />
      {/* interior light strips */}
      <rect x="80" y="100" width="2" height="210" fill="#FFE066" opacity=".15" />
      <rect x="200" y="100" width="2" height="210" fill="#FFE066" opacity=".15" />
      <rect x="318" y="100" width="2" height="210" fill="#FFE066" opacity=".15" />
      {/* sign above */}
      <rect x="100" y="18" width="200" height="32" rx="4" fill="#C0392B" />
      <text x="200" y="40" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="sans-serif">CATALINA GARAGE</text>
      {/* ground line */}
      <rect x="40" y="315" width="320" height="5" fill="#333" />
    </svg>
  );
}

export function GarageHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Total horizontal distance to scroll
      const getScrollWidth = () => track.scrollWidth - window.innerWidth;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          end: () => `+=${getScrollWidth() + window.innerHeight * 0.5}`,
          invalidateOnRefresh: true,
        },
      });

      // Phase 1: Cars drive out of garage (first 60% of scroll)
      tl.to(".garage-car-1", { x: "45vw", duration: 0.5, ease: "power2.out" }, 0);
      tl.to(".garage-car-2", { x: "90vw", duration: 0.5, ease: "power2.out" }, 0.05);
      tl.to(".garage-car-3", { x: "135vw", duration: 0.5, ease: "power2.out" }, 0.1);

      // Phase 2: Horizontal scroll the whole track
      tl.to(track, {
        x: () => -getScrollWidth(),
        duration: 1,
        ease: "none",
      }, 0.15);

      return () => {
        tl.kill();
      };
    });

    // Mobile: no horizontal scroll, just reveal
    mm.add("(max-width: 767px)", () => {
      gsap.fromTo(
        ".garage-car-1, .garage-car-2, .garage-car-3",
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        }
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-grease"
      style={{ minHeight: "100vh" }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/hero-tucson.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 140% 100% at 50% 0%, rgba(28,28,30,0.55) 0%, rgba(28,28,30,0.7) 40%, rgba(28,28,30,0.88) 75%, rgba(28,28,30,0.95) 100%)",
          }}
        />
      </div>
      {/* Halftone overlay */}
      <div className="halftone" />

      {/* Horizontal track */}
      <div
        ref={trackRef}
        className="flex items-center"
        style={{ width: "max-content", height: "100vh" }}
      >
        {/* Panel 1: Garage + hero text */}
        <div className="relative flex items-center w-screen h-full px-5">
          <div className="absolute bottom-0 left-0 right-0 pinstripe" />

          {/* Garage structure on the left */}
          <div className="hidden md:block absolute left-[3%] bottom-[12%] w-[280px] lg:w-[340px]">
            <GarageDoor />
          </div>

          {/* Cars positioned inside/near garage, will animate out */}
          <div className="hidden md:block garage-car-1 absolute bottom-[13%] left-[8%] w-[180px] lg:w-[220px] opacity-90">
            <CarSVG color="#C0392B" />
          </div>
          <div className="hidden md:block garage-car-2 absolute bottom-[17%] left-[5%] w-[160px] lg:w-[200px] opacity-80">
            <CarSVG color="#45B5AA" />
          </div>
          <div className="hidden md:block garage-car-3 absolute bottom-[21%] left-[10%] w-[140px] lg:w-[170px] opacity-70">
            <CarSVG color="#FFE066" />
          </div>

          {/* Hero content */}
          <div className="relative mx-auto max-w-6xl w-full md:pl-[45%] lg:pl-[40%] pt-20 pb-24 md:pt-0 md:pb-0">
            <div className="badge-retro text-turq mb-6">Est. Tucson, AZ</div>
            <h1
              className="font-display font-bold tracking-[-0.02em] text-[2.6rem] leading-[1.05] md:text-[4.2rem] max-w-3xl text-white"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}
            >
              Old-school service.
              <br />
              <span className="chrome-text">Modern diagnostics.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base md:text-lg text-white/65 leading-relaxed">
              Cars, trucks, SUVs — if it rolls into Tucson, we fix it. Honest
              pricing, real mechanics, and the kind of shop your grandpa
              would&apos;ve trusted.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-cherry px-6 py-3.5 text-[15px] font-semibold text-white hover:bg-white hover:text-cherry transition-colors"
              >
                Book appointment
              </Link>
              <a
                href="tel:+15200000000"
                className="rounded-full glass px-6 py-3.5 text-[15px] font-semibold text-white hover:border-cherry/60 transition-colors"
              >
                Call (520) 000-0000
              </a>
            </div>
            {/* Mobile cars */}
            <div className="mt-10 flex gap-4 md:hidden">
              <div className="garage-car-1 w-[140px]"><CarSVG color="#C0392B" /></div>
              <div className="garage-car-2 w-[120px]"><CarSVG color="#45B5AA" /></div>
              <div className="garage-car-3 w-[100px]"><CarSVG color="#FFE066" /></div>
            </div>
          </div>
        </div>

        {/* Panel 2: Trust points (visible during horizontal scroll) */}
        <div className="hidden md:flex items-center justify-center w-screen h-full bg-grease px-16">
          <div className="grid grid-cols-3 gap-8 max-w-5xl">
            {[
              { icon: "&#9733;", title: "ASE Certified", desc: "Every mechanic is certified, experienced, and actually likes cars." },
              { icon: "&#9673;", title: "Honest Flat-Rate", desc: "No surprises. We quote before we wrench." },
              { icon: "&#9672;", title: "Family-Owned", desc: "Tucson-rooted since day one. No corporate nonsense." },
              { icon: "&#9670;", title: "All Makes & Models", desc: "Cars, trucks, SUVs — domestic, import, diesel." },
              { icon: "&#9679;", title: "Loaner Vehicles", desc: "Need wheels while we work? We've got you." },
              { icon: "&#9651;", title: "No Upselling", desc: "If it doesn't need fixing, we tell you. Period." },
            ].map((item) => (
              <div key={item.title} className="glass rounded-2xl p-6 text-white">
                <div
                  className="text-cherry text-2xl mb-3"
                  dangerouslySetInnerHTML={{ __html: item.icon }}
                />
                <h3 className="font-display font-semibold text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-white/55 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Panel 3: Big statement */}
        <div className="hidden md:flex items-center justify-center w-screen h-full bg-grease px-16">
          <div className="text-center max-w-3xl">
            <p className="eyebrow text-turq mb-4">Tucson&apos;s Shop</p>
            <h2
              className="font-display font-bold text-5xl lg:text-6xl text-white tracking-tight leading-tight"
              style={{ textShadow: "0 2px 16px rgba(0,0,0,0.4)" }}
            >
              Three bays. Zero B.S.
            </h2>
            <p className="mt-6 text-lg text-white/50 max-w-xl mx-auto leading-relaxed">
              Scroll down to see how we work — from diagnosis to done.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
