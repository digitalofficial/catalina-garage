import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Brakes & Rotors in Tucson AZ | Catalina Garage",
  description: "Brake pad replacement, rotor resurfacing, caliper service, and brake fluid flushes in Tucson, AZ. We inspect before we quote — no upselling. ASE certified, flat-rate pricing.",
};

const includes = [
  "Brake pad replacement",
  "Rotor resurfacing & replacement",
  "Caliper service & replacement",
  "Brake fluid flush",
  "Emergency brake adjustment",
  "Brake line inspection & repair",
];

const reasons = [
  { h: "Inspect before we quote", p: "We lift the car, pull the wheels, and show you exactly what needs work before any money changes hands. No guessing, no pressure." },
  { h: "Quality parts only", p: "We use OEM-grade or better pads and rotors. Your stopping power is not the place to cut corners." },
  { h: "Flat-rate, no-surprise pricing", p: "You get a written quote. You approve it. We do the work. No hourly overruns, no parts you didn't authorize." },
  { h: "Brake jobs done right, once", p: "Proper bedding procedure, torqued to spec, test driven. We back our brake work with a parts-and-labor warranty." },
];

export default function BrakesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Service"
          title="Brakes & Rotors in"
          highlight="Tucson, AZ."
          subtitle="Pads, rotors, calipers, brake lines, and fluid flushes. We inspect before we quote, and we never upsell parts you don't need."
        />

        <section className="mx-auto max-w-4xl px-5 py-20 md:py-28">
          <Reveal>
            <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight mb-3">What&apos;s included</h2>
            <p className="text-sm text-ink/55 mb-8 max-w-lg">From a simple pad swap to a full brake system overhaul — we do it all at Catalina Garage.</p>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {includes.map((item, i) => (
              <Reveal key={item} delay={(i % 2) * 70}>
                <div className="race-stripe flex items-center gap-3 rounded-2xl border border-ink/[0.08] bg-white px-5 pl-8 py-4">
                  <span className="text-cherry">✓</span>
                  <span className="text-[15px] text-ink/80">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100} className="mt-10 text-center">
            <Link href="/contact" className="btn-lift inline-flex rounded-full bg-cherry px-7 py-3.5 text-[15px] font-semibold text-white hover:bg-grease">
              Book a brake inspection
            </Link>
          </Reveal>
        </section>

        <section className="bg-grease text-white">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
            <Reveal>
              <p className="eyebrow text-turq/90 mb-3">Why Catalina Garage</p>
              <h2 className="font-display font-bold text-3xl md:text-[2.4rem] tracking-tight leading-tight mb-12">Stopping power you can trust.</h2>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {reasons.map((r, i) => (
                <Reveal key={r.h} delay={(i % 2) * 90}>
                  <div className="glass h-full rounded-2xl p-6">
                    <div className="text-cherry mb-3">●</div>
                    <h3 className="font-display font-semibold">{r.h}</h3>
                    <p className="mt-1.5 text-sm text-white/55 leading-relaxed">{r.p}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          heading={<>Hearing squealing<br />or grinding?</>}
          body="Don't wait on brakes. Book an inspection today — we'll tell you exactly what's needed and quote it flat before we touch anything."
        />
      </main>
      <Footer />
    </>
  );
}
