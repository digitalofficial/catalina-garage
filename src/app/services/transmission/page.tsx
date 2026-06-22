import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Transmission Service in Tucson AZ | Catalina Garage",
  description: "Transmission fluid flushes, solenoid replacement, clutch service, and full rebuilds in Tucson, AZ. Manual and automatic, cars and trucks. ASE certified — we diagnose before we recommend.",
};

const includes = [
  "Transmission fluid flush & fill",
  "Filter replacement",
  "Solenoid diagnosis & repair",
  "Clutch replacement (manual)",
  "Full transmission rebuild",
  "Torque converter service",
];

const reasons = [
  { h: "Diagnose before recommending", p: "Transmission problems can range from a $150 fluid flush to a full rebuild. We find out exactly what's wrong before recommending any repair." },
  { h: "Manual & automatic expertise", p: "From a 5-speed manual clutch job to an 8-speed automatic rebuild — we have the experience and tooling for both." },
  { h: "No transmission shop runaround", p: "Many shops immediately suggest a full rebuild. We give you an honest assessment first, and repair the minimum necessary to fix the problem." },
  { h: "Warranted transmission work", p: "Our transmission repairs and rebuilds come with a written parts-and-labor warranty. We stand behind the work we do." },
];

export default function TransmissionPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Service"
          title="Transmission Service in"
          highlight="Tucson, AZ."
          subtitle="Fluid flushes, solenoid replacement, and full rebuilds. Manual and automatic, cars and trucks. We don't guess — we diagnose."
        />

        <section className="mx-auto max-w-4xl px-5 py-20 md:py-28">
          <Reveal>
            <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight mb-3">What we service</h2>
            <p className="text-sm text-ink/55 mb-8 max-w-lg">Slipping, shuddering, hard shifting, or just due for a fluid change — we handle it all.</p>
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
              Book a transmission service
            </Link>
          </Reveal>
        </section>

        <section className="bg-grease text-white">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
            <Reveal>
              <p className="eyebrow text-turq/90 mb-3">Why Catalina Garage</p>
              <h2 className="font-display font-bold text-3xl md:text-[2.4rem] tracking-tight leading-tight mb-12">Shift smooth. Drive confident.</h2>
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
          heading={<>Transmission acting up?<br />Let&apos;s find out why.</>}
          body="Transmission problems get worse — and more expensive — the longer you wait. Book a diagnosis today and get a flat-rate quote before any work begins."
        />
      </main>
      <Footer />
    </>
  );
}
