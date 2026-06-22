import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "AC & Heating Repair in Tucson AZ | Catalina Garage",
  description: "AC recharge, compressor replacement, evaporator repair, heater core service, and climate system diagnostics in Tucson, AZ. In Tucson heat, your AC is survival equipment — we fix it right.",
};

const includes = [
  "AC recharge (R-134a & R-1234yf)",
  "Compressor replacement",
  "Condenser & evaporator repair",
  "Heater core replacement",
  "Blower motor service",
  "Full climate control diagnosis",
];

const reasons = [
  { h: "Tucson heat is no joke", p: "We know the desert. We service more AC systems than almost any other job — and we know every failure mode in the book." },
  { h: "Full system diagnosis", p: "We don't just recharge and send you on your way. We pressure-test, dye-test, and identify leaks before they strand you in July." },
  { h: "R-134a and R-1234yf certified", p: "Both refrigerant types, properly recovered and recharged. We have the equipment and the certification to do it right." },
  { h: "Flat-rate AC repair pricing", p: "No hourly surprises. We quote the repair, you approve it, we fix it. Simple." },
];

export default function AcHeatingPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Service"
          title="AC & Heating Repair in"
          highlight="Tucson, AZ."
          subtitle="In Tucson, AC is survival equipment. Recharges, compressor swaps, evaporator repair, heater cores, and full climate system diagnostics."
        />

        <section className="mx-auto max-w-4xl px-5 py-20 md:py-28">
          <Reveal>
            <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight mb-3">What&apos;s included</h2>
            <p className="text-sm text-ink/55 mb-8 max-w-lg">From a quick recharge to a full compressor job — we handle every part of your vehicle&apos;s climate system.</p>
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
              Book an AC service
            </Link>
          </Reveal>
        </section>

        <section className="bg-grease text-white">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
            <Reveal>
              <p className="eyebrow text-turq/90 mb-3">Why Catalina Garage</p>
              <h2 className="font-display font-bold text-3xl md:text-[2.4rem] tracking-tight leading-tight mb-12">Stay cool all summer long.</h2>
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
          heading={<>Blowing hot air<br />instead of cold?</>}
          body="Don't suffer through a Tucson summer with a broken AC. Book your appointment today — we'll diagnose it fast and fix it right."
        />
      </main>
      <Footer />
    </>
  );
}
