import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Suspension & Steering Repair in Tucson AZ | Catalina Garage",
  description: "Shocks, struts, ball joints, tie rods, control arms, and power steering repair in Tucson, AZ. Smooth ride, straight tracking, safe handling. ASE certified, flat-rate pricing.",
};

const includes = [
  "Shock & strut replacement",
  "Ball joint replacement",
  "Tie rod service",
  "Control arm replacement",
  "Power steering repair",
  "Wheel bearing replacement",
];

const reasons = [
  { h: "Ride quality restored", p: "Worn shocks and struts don't just feel bad — they affect braking distance and handling. We restore your vehicle's original ride and control." },
  { h: "Inspect the whole system", p: "Suspension components wear together. We inspect the entire front and rear suspension before quoting — no partial fixes that leave problems behind." },
  { h: "Alignment included after suspension", p: "Any suspension repair that affects alignment angles gets a complimentary alignment check. We make sure everything is set correctly when we're done." },
  { h: "Flat-rate suspension pricing", p: "Suspension work is quoted as a flat job. You know the total before we lift the car." },
];

export default function SuspensionPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Service"
          title="Suspension & Steering in"
          highlight="Tucson, AZ."
          subtitle="Shocks, struts, ball joints, tie rods, control arms, and power steering. Smooth ride, straight tracking, safe handling."
        />

        <section className="mx-auto max-w-4xl px-5 py-20 md:py-28">
          <Reveal>
            <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight mb-3">What we service</h2>
            <p className="text-sm text-ink/55 mb-8 max-w-lg">Bouncing, pulling, wandering, clunking — every suspension and steering issue has a fix. Here&apos;s what we do.</p>
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
              Book a suspension inspection
            </Link>
          </Reveal>
        </section>

        <section className="bg-grease text-white">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
            <Reveal>
              <p className="eyebrow text-turq/90 mb-3">Why Catalina Garage</p>
              <h2 className="font-display font-bold text-3xl md:text-[2.4rem] tracking-tight leading-tight mb-12">Handle like new again.</h2>
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
          heading={<>Rough ride or<br />pulling to one side?</>}
          body="Suspension issues get dangerous if ignored. Book an inspection today — we'll diagnose it, quote it flat, and get you back to a smooth, safe ride."
        />
      </main>
      <Footer />
    </>
  );
}
