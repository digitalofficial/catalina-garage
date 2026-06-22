import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Engine Diagnostics & Repair in Tucson AZ | Catalina Garage",
  description: "Check engine light, misfires, overheating, oil leaks, timing chains — engine diagnostics and repair in Tucson, AZ. ASE certified mechanics with modern scanners and old-school know-how.",
};

const includes = [
  "OBD-II code reading & diagnosis",
  "Drivability & performance diagnosis",
  "Engine repair & rebuild",
  "Timing belt & chain service",
  "Head gasket replacement",
  "Oil leak diagnosis & repair",
];

const reasons = [
  { h: "Modern diagnostic equipment", p: "We run factory-level scan tools and live data analysis — not just pulling codes and guessing. We find the real cause." },
  { h: "We explain everything", p: "Before any repair starts, we walk you through what we found, why it matters, and exactly what it will cost. Plain English, no jargon." },
  { h: "ASE certified engine specialists", p: "Our techs have seen every engine failure mode. From simple sensors to full rebuilds, we have the experience to get it right." },
  { h: "Flat-rate repair pricing", p: "Engine work is quoted as a flat job, not by the hour. You know the total before we pull a single bolt." },
];

export default function EngineDiagnosticsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Service"
          title="Engine Diagnostics & Repair in"
          highlight="Tucson, AZ."
          subtitle="Check engine light, misfires, overheating, oil leaks, timing chains — we diagnose with modern scanners and fix with old-school know-how."
        />

        <section className="mx-auto max-w-4xl px-5 py-20 md:py-28">
          <Reveal>
            <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight mb-3">What we diagnose & repair</h2>
            <p className="text-sm text-ink/55 mb-8 max-w-lg">That check engine light isn&apos;t going away on its own. Let&apos;s find out what it&apos;s actually telling you.</p>
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
              Book a diagnostic
            </Link>
          </Reveal>
        </section>

        <section className="bg-grease text-white">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
            <Reveal>
              <p className="eyebrow text-turq/90 mb-3">Why Catalina Garage</p>
              <h2 className="font-display font-bold text-3xl md:text-[2.4rem] tracking-tight leading-tight mb-12">We find the real problem.</h2>
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
          heading={<>Check engine light<br />driving you crazy?</>}
          body="Bring it in. We'll scan it, diagnose it, and tell you exactly what's wrong — with a flat-rate quote before we fix a thing."
        />
      </main>
      <Footer />
    </>
  );
}
