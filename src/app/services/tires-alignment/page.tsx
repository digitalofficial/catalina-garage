import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Tires & Alignment in Tucson AZ | Catalina Garage",
  description: "New tire sales & installation, rotation, balancing, and 4-wheel alignment in Tucson, AZ. All major brands, price-match guarantee. ASE certified, flat-rate pricing.",
};

const includes = [
  "New tire sales & installation",
  "Tire rotation",
  "Wheel balancing",
  "4-wheel computerized alignment",
  "Flat repair & patching",
  "TPMS sensor service",
];

const reasons = [
  { h: "All major tire brands", p: "Michelin, Goodyear, BFGoodrich, Continental, Falken, and more. We'll help you find the right tire for your vehicle and budget." },
  { h: "Price-match guarantee", p: "Found a lower price at another Tucson shop? We'll match it. We want to earn your business on service, not just price." },
  { h: "Computer alignment system", p: "We use a modern 4-wheel computerized alignment rack — not guesswork. Every alignment is printed out so you can see the before and after." },
  { h: "Done while you wait", p: "Most tire and alignment jobs are completed same day, often while you wait. We respect your time as much as your car." },
];

export default function TiresAlignmentPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Service"
          title="Tires & Alignment in"
          highlight="Tucson, AZ."
          subtitle="New tires from all major brands, rotations, balancing, and 4-wheel alignment. We price-match any local Tucson competitor."
        />

        <section className="mx-auto max-w-4xl px-5 py-20 md:py-28">
          <Reveal>
            <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight mb-3">What&apos;s included</h2>
            <p className="text-sm text-ink/55 mb-8 max-w-lg">New tires, rotations, balance, alignment — everything your wheels need to keep you rolling straight and safe.</p>
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
              Book a tire appointment
            </Link>
          </Reveal>
        </section>

        <section className="bg-grease text-white">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
            <Reveal>
              <p className="eyebrow text-turq/90 mb-3">Why Catalina Garage</p>
              <h2 className="font-display font-bold text-3xl md:text-[2.4rem] tracking-tight leading-tight mb-12">Roll straight. Ride right.</h2>
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
          heading={<>Need new tires<br />or an alignment?</>}
          body="We carry all major brands and price-match any local competitor. Book your appointment today — most jobs are done same day."
        />
      </main>
      <Footer />
    </>
  );
}
