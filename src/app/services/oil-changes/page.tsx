import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Oil Changes & Tune-Ups in Tucson AZ | Catalina Garage",
  description: "Conventional, synthetic, and high-mileage oil changes in Tucson, AZ. 21-point inspection included every time. ASE certified mechanics, flat-rate pricing, no upselling. Book today.",
};

const includes = [
  "Conventional & synthetic oil",
  "Oil filter replacement",
  "21-point vehicle inspection",
  "Fluid top-off (washer, coolant, brake)",
  "Spark plug replacement",
  "Belt & hose inspection",
];

const reasons = [
  { h: "ASE certified mechanics", p: "Every tech is certified, background-checked, and genuinely loves working on cars. No junior techs learning on your vehicle." },
  { h: "Flat-rate pricing", p: "You see the price and approve before we start. No hourly surprises, no parts markup games — just one honest number." },
  { h: "21-point inspection every time", p: "Every oil change comes with a full vehicle inspection at no extra charge. We catch small problems before they become expensive ones." },
  { h: "All makes & models", p: "Cars, trucks, SUVs — domestic and import. European, Japanese, American. If it has an engine, we service it." },
];

export default function OilChangesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Service"
          title="Oil Changes & Tune-Ups in"
          highlight="Tucson, AZ."
          subtitle="Conventional, synthetic, and high-mileage oil changes with a 21-point inspection every time. ASE certified, flat-rate, no upselling."
        />

        <section className="mx-auto max-w-4xl px-5 py-20 md:py-28">
          <Reveal>
            <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight mb-3">What&apos;s included</h2>
            <p className="text-sm text-ink/55 mb-8 max-w-lg">Every oil change at Catalina Garage is a complete service — not just a drain and fill.</p>
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
              Book your oil change
            </Link>
          </Reveal>
        </section>

        <section className="bg-grease text-white">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
            <Reveal>
              <p className="eyebrow text-turq/90 mb-3">Why Catalina Garage</p>
              <h2 className="font-display font-bold text-3xl md:text-[2.4rem] tracking-tight leading-tight mb-12">Old-school honest. Modern tools.</h2>
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
          heading={<>Ready for your<br />oil change?</>}
          body="Book an appointment or just roll up. ASE certified mechanics, flat-rate pricing, no surprises — and a full inspection every single time."
        />
      </main>
      <Footer />
    </>
  );
}
