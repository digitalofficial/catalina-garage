"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

export function GarageHero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      section.querySelector(".hero-badge"),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 }
    );
    tl.fromTo(
      section.querySelector(".hero-heading"),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7 },
      0.15
    );
    tl.fromTo(
      section.querySelector(".hero-sub"),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      0.35
    );
    tl.fromTo(
      section.querySelector(".hero-cta"),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      0.5
    );
    tl.fromTo(
      section.querySelector(".hero-trust"),
      { opacity: 0 },
      { opacity: 1, duration: 0.6 },
      0.65
    );

    return () => { tl.kill(); };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-grease text-white"
    >
      {/* Background photo */}
      <div className="absolute inset-0">
        <img
          src="/hero-shop.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(28,28,30,0.92) 0%, rgba(28,28,30,0.75) 40%, rgba(28,28,30,0.6) 70%, rgba(28,28,30,0.5) 100%)",
          }}
        />
      </div>

      <div className="halftone" />
      <div className="absolute bottom-0 left-0 right-0 pinstripe" />

      <div className="relative mx-auto max-w-6xl px-5 pt-24 pb-20 md:pt-36 md:pb-32 lg:pt-40 lg:pb-36">
        <div className="max-w-2xl">
          <div className="hero-badge badge-retro text-turq mb-6">
            Est. Tucson, AZ
          </div>
          <h1
            className="hero-heading font-display font-bold tracking-[-0.02em] text-[2.6rem] leading-[1.05] md:text-[4.5rem] lg:text-[5rem]"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
          >
            Old-school service.
            <br />
            <span className="chrome-text">Modern diagnostics.</span>
          </h1>
          <p className="hero-sub mt-6 max-w-lg text-base md:text-lg text-white/60 leading-relaxed">
            Cars, trucks, SUVs — if it rolls into Tucson, we fix it. Honest
            pricing, real mechanics, and the kind of shop your grandpa
            would&apos;ve trusted.
          </p>
          <div className="hero-cta mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="btn-lift rounded-full bg-cherry px-7 py-3.5 text-[15px] font-semibold text-white hover:bg-white hover:text-cherry transition-colors"
            >
              Book appointment
            </Link>
            <a
              href="tel:+15200000000"
              className="btn-lift rounded-full glass px-7 py-3.5 text-[15px] font-semibold text-white hover:border-cherry/60 transition-colors"
            >
              Call (520) 000-0000
            </a>
          </div>
          <div className="hero-trust mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-white/45">
            <span className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-cherry" />
              ASE Certified Mechanics
            </span>
            <span className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-turq" />
              Cars, Trucks &amp; SUVs
            </span>
            <span className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-cherry" />
              Family-Owned in Tucson
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
