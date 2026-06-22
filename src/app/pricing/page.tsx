import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = { title: "Pricing | Catalina Garage — Tucson, AZ", description: "Honest, flat-rate auto repair pricing in Tucson. No surprises, no hidden fees. See common job prices." };

const jobs = [
  { job: "Synthetic oil change", price: "79" },
  { job: "Conventional oil change", price: "49" },
  { job: "Brake pad replacement (per axle)", price: "189" },
  { job: "Brake pads + rotors (per axle)", price: "349" },
  { job: "Engine diagnostic", price: "99" },
  { job: "AC recharge", price: "149" },
  { job: "Tire rotation & balance", price: "59" },
  { job: "4-wheel alignment", price: "89" },
  { job: "Battery replacement (installed)", price: "179" },
  { job: "Pre-purchase inspection", price: "129" },
];

const faqs = [
  { q: "Is the quote really flat-rate?", a: "Yes. We diagnose, quote the job, and you approve before any work starts. Price doesn't change even if the job takes longer." },
  { q: "Do you charge to look at my car?", a: "A diagnostic fee applies for check-engine-light issues and complex problems. It's waived if you proceed with the repair." },
  { q: "Do you work on trucks and SUVs?", a: "Everything. Cars, trucks, SUVs, vans — domestic and import. If it has an engine and wheels, we're on it." },
];

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow="Pricing" title="Honest pricing," highlight="no B.S." subtitle="Flat-rate quotes on every job. You see the price and approve it before any wrench turns. No hourly billing, no surprise fees." />
        <section className="mx-auto max-w-4xl px-5 py-20 md:py-28">
          <Reveal><h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight text-center mb-3">Common job pricing</h2><p className="text-center text-sm text-ink/55 mb-10 max-w-lg mx-auto">Starting prices for standard vehicles. Your exact quote is confirmed before work begins.</p></Reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {jobs.map((c, i) => (
              <Reveal key={c.job} delay={(i % 2) * 80}>
                <div className="card-hover race-stripe flex items-center justify-between rounded-2xl border border-ink/[0.08] bg-white px-6 pl-8 py-5">
                  <span className="text-[15px] font-medium text-ink/80">{c.job}</span>
                  <span className="font-display font-bold text-lg text-cherry whitespace-nowrap">from ${c.price}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100}><p className="mt-8 text-center text-sm text-ink/50">Don&apos;t see your repair? <Link href="/contact" className="font-semibold text-cherry hover:text-turq">Book an appointment</Link> and we&apos;ll quote it on-site.</p></Reveal>
        </section>
        <section className="bg-paper"><div className="mx-auto max-w-3xl px-5 pb-20 md:pb-28">
          <Reveal as="h2" className="font-display font-bold text-2xl md:text-3xl tracking-tight text-center mb-10">Pricing questions, answered.</Reveal>
          <div className="grid gap-4 sm:grid-cols-3">{faqs.map((f, i) => (<Reveal key={f.q} delay={i * 90}><div className="rounded-2xl border border-ink/[0.08] bg-white p-5 h-full"><h3 className="font-display font-semibold text-[15px]">{f.q}</h3><p className="mt-2 text-sm text-ink/60 leading-relaxed">{f.a}</p></div></Reveal>))}</div>
          <Reveal delay={100}><p className="mt-8 text-center text-sm text-ink/55">More questions? <Link href="/faq" className="font-semibold text-cherry hover:text-turq">Read the full FAQ &rarr;</Link></p></Reveal>
        </div></section>
        <CTASection heading={<>Get your exact<br />quote today.</>} body="Describe the issue and we'll have a flat-rate quote ready before we pop the hood." />
      </main>
      <Footer />
    </>
  );
}
