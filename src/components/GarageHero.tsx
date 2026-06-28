"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

function GarageDoor({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="350" fill="#2A1215" />
      <rect x="40" y="60" width="320" height="260" rx="6" fill="#111" />
      <rect x="40" y="60" width="320" height="30" rx="2" fill="#444" />
      <rect x="40" y="60" width="320" height="15" rx="2" fill="#555" />
      <rect x="45" y="95" width="310" height="220" rx="2" fill="#1a1208" />
      <rect x="80" y="100" width="2" height="210" fill="#FFE066" opacity=".15" />
      <rect x="200" y="100" width="2" height="210" fill="#FFE066" opacity=".15" />
      <rect x="318" y="100" width="2" height="210" fill="#FFE066" opacity=".15" />
      <rect x="100" y="18" width="200" height="32" rx="4" fill="#C0392B" />
      <text x="200" y="40" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="sans-serif">CATALINA GARAGE</text>
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

      tl.to(".garage-car-1", { x: "45vw", duration: 0.5, ease: "power2.out" }, 0);
      tl.to(".garage-car-2", { x: "90vw", duration: 0.5, ease: "power2.out" }, 0.05);
      tl.to(".garage-car-3", { x: "135vw", duration: 0.5, ease: "power2.out" }, 0.1);

      tl.to(track, {
        x: () => -getScrollWidth(),
        duration: 1,
        ease: "none",
      }, 0.15);

      return () => { tl.kill(); };
    });

    mm.add("(max-width: 767px)", () => {
      gsap.fromTo(
        ".garage-car-1, .garage-car-2, .garage-car-3",
        { x: -100, opacity: 0 },
        {
          x: 0, opacity: 1, stagger: 0.15, duration: 1, ease: "power2.out",
          scrollTrigger: { trigger: section, start: "top 80%" },
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
        <img src="/hero-tucson.jpg" alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 140% 100% at 50% 0%, rgba(28,28,30,0.55) 0%, rgba(28,28,30,0.7) 40%, rgba(28,28,30,0.88) 75%, rgba(28,28,30,0.95) 100%)" }} />
      </div>
      <div className="halftone" />

      <div ref={trackRef} className="flex items-center" style={{ width: "max-content", height: "100vh" }}>
        {/* Panel 1: Garage + hero text */}
        <div className="relative flex items-center w-screen h-full px-5">
          <div className="absolute bottom-0 left-0 right-0 pinstripe" />

          <div className="hidden md:block absolute left-[3%] bottom-[12%] w-[280px] lg:w-[340px]">
            <GarageDoor />
          </div>

          {/* Real car photos */}
          <div className="hidden md:block garage-car-1 absolute bottom-[12%] left-[8%] w-[200px] lg:w-[240px]">
            <img src="/car-red.png" alt="Red sports car" className="w-full h-auto rounded-lg drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]" />
          </div>
          <div className="hidden md:block garage-car-2 absolute bottom-[14%] left-[5%] w-[180px] lg:w-[220px]">
            <img src="/car-teal.png" alt="Classic car" className="w-full h-auto rounded-lg drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]" />
          </div>
          <div className="hidden md:block garage-car-3 absolute bottom-[16%] left-[10%] w-[160px] lg:w-[190px]">
            <img src="/car-gold.png" alt="Gold sports car" className="w-full h-auto rounded-lg drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]" />
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
              <Link href="/contact" className="rounded-full bg-cherry px-6 py-3.5 text-[15px] font-semibold text-white hover:bg-white hover:text-cherry transition-colors">
                Book appointment
              </Link>
              <a href="tel:+15200000000" className="rounded-full glass px-6 py-3.5 text-[15px] font-semibold text-white hover:border-cherry/60 transition-colors">
                Call (520) 000-0000
              </a>
            </div>
            {/* Mobile cars */}
            <div className="mt-10 flex gap-3 md:hidden">
              <div className="garage-car-1 w-[130px]"><img src="/car-red.png" alt="Red sports car" className="w-full h-auto rounded-lg" /></div>
              <div className="garage-car-2 w-[110px]"><img src="/car-teal.png" alt="Classic car" className="w-full h-auto rounded-lg" /></div>
              <div className="garage-car-3 w-[100px]"><img src="/car-gold.png" alt="Gold sports car" className="w-full h-auto rounded-lg" /></div>
            </div>
          </div>
        </div>

        {/* Panel 2: Trust points */}
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
                <div className="text-cherry text-2xl mb-3" dangerouslySetInnerHTML={{ __html: item.icon }} />
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
            <h2 className="font-display font-bold text-5xl lg:text-6xl text-white tracking-tight leading-tight" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.4)" }}>
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
