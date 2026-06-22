import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Electrical & Battery Repair in Tucson AZ | Catalina Garage",
  description: "Dead battery, faulty alternator, starter issues, wiring diagnosis in Tucson, AZ. We trace and fix electrical problems other shops give up on. ASE certified, flat-rate pricing.",
};

const includes = [
  "Battery test & replacement",
  "Alternator repair & replacement",
  "Starter replacement",
  "Wiring diagnosis & repair",
  "Lighting & fuse repair",
  "Parasitic draw testing",
];

const reasons = [
  { h: "We solve electrical gremlins", p: "Electrical problems can be maddening. We have the wiring diagrams, the scan tools, and the patience to trace faults other shops give up on." },
  { h: "Full charging system test", p: "A dying battery is often a symptom, not the root cause. We test the entire charging system — battery, alternator, and cables — before replacing anything." },
  { h: "Parasitic draw specialists", p: "Something draining your battery overnight? We do methodical parasitic draw testing to find the culprit, fast." },
  { h: "Flat-rate electrical pricing", p: "Electrical diagnosis fee is quoted upfront. Repairs are flat-rate. You always know what you're paying before we start." },
];

export default function ElectricalPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Service"
          title="Electrical & Batteries in"
          highlight="Tucson, AZ."
          subtitle="Dead battery, faulty alternator, starter issues, wiring gremlins. We trace and fix electrical problems that other shops give up on."
        />

        <section className="mx-auto max-w-4xl px-5 py-20 md:py-28">
          <Reveal>
            <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight mb-3">What we diagnose & repair</h2>
            <p className="text-sm text-ink/55 mb-8 max-w-lg">From a dead battery to a full wiring harness fault — electrical problems are our specialty.</p>
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
              Book an electrical diagnosis
            </Link>
          </Reveal>
        </section>

        <section className="bg-grease text-white">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
            <Reveal>
              <p className="eyebrow text-turq/90 mb-3">Why Catalina Garage</p>
              <h2 className="font-display font-bold text-3xl md:text-[2.4rem] tracking-tight leading-tight mb-12">We find faults others miss.</h2>
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
          heading={<>Electrical problem<br />driving you crazy?</>}
          body="Don't let a wiring fault turn into a bigger issue. Bring it in — we'll diagnose it properly and give you a flat-rate quote before any repairs begin."
        />
      </main>
      <Footer />
    </>
  );
}
