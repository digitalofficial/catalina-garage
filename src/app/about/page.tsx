import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { Halftone } from "@/components/Halftone";

export const metadata: Metadata = { title: "About | Catalina Garage — Tucson, AZ", description: "Family-owned, ASE certified auto repair in Tucson. Meet the crew that fixes it right and tells it straight." };

const stats = [{ to: 10000, suffix: "+", label: "Vehicles repaired" }, { to: 18, suffix: "yrs", label: "Family-owned" }, { to: 100, suffix: "%", label: "Honest quotes" }, { to: 5, suffix: "★", label: "Google average" }];
const values = [
  { h: "Show you the part", p: "We pull the old part, show you what failed, and explain why. Then you decide. No pressure, no smoke and mirrors." },
  { h: "Quote before we wrench", p: "Every job is quoted flat and approved by you before we start. The price on the quote is the price on the invoice." },
  { h: "Treat every car like ours", p: "Seat covers on, fender guards on, no grease on your steering wheel. Your ride leaves cleaner than it came in." },
  { h: "Hire gearheads, not salespeople", p: "Our mechanics are ASE certified, car-obsessed, and allergic to upselling. They'd rather talk engines than invoices." },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow="Our story" title="Built on grease," highlight="trust & good music." subtitle="Catalina Garage started because Tucson needed a shop with throwback honesty, vintage vibes, and mechanics who actually give a damn." />
        <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-center">
            <Reveal>
              <p className="eyebrow text-cherry mb-3">The origin story</p>
              <h2 className="font-display font-bold text-3xl md:text-[2.4rem] tracking-tight leading-tight">A family shop with a '60s soul and 21st-century tools.</h2>
              <div className="mt-5 space-y-4 text-ink/65 leading-relaxed max-w-xl">
                <p>We grew up in garages — dad&apos;s hands always had grease on them, the radio always played oldies, and every car that rolled out ran better than when it rolled in. That&apos;s the shop we wanted to build.</p>
                <p>Catalina Garage blends that old-school ethic with modern diagnostics. We&apos;ve got the scanners and the software, but we also believe in looking you in the eye, showing you the busted part, and telling the truth about what your car actually needs.</p>
                <p>The retro decor isn&apos;t just for looks — it&apos;s a reminder of how shops used to be: honest, personal, and proud of the work.</p>
              </div>
            </Reveal>
            <Reveal scale delay={120}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-grease">
                <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 120% 100% at 50% 10%, #3A1518 0%, #2A1215 45%, #1C1C1E 85%)" }} />
                <Halftone />
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <span className="self-start glass rounded-full px-4 py-2 text-xs font-semibold text-white animate-float">&#9679; ASE Certified</span>
                  <span className="self-end glass rounded-full px-4 py-2 text-xs font-semibold text-white animate-float" style={{ animationDelay: "1.2s" }}>&#9679; Family-Owned</span>
                  <span className="self-start glass rounded-full px-4 py-2 text-xs font-semibold text-white animate-float" style={{ animationDelay: "2.4s" }}>&#9679; No B.S.</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
        <section className="relative bg-grease text-white overflow-hidden"><Halftone /><div className="relative mx-auto max-w-6xl px-5 py-16 md:py-20"><div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">{stats.map((s, i) => (<Reveal key={s.label} delay={i * 80}><div className="font-display text-4xl md:text-5xl font-bold chrome-text"><Counter to={s.to} suffix={s.suffix} /></div><div className="mt-2 text-sm text-white/55">{s.label}</div></Reveal>))}</div></div></section>
        <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal className="max-w-2xl mb-12"><p className="eyebrow text-cherry mb-3">How we roll</p><h2 className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight leading-tight">Four rules we never break.</h2></Reveal>
          <div className="grid gap-5 sm:grid-cols-2">{values.map((v, i) => (<Reveal key={v.h} delay={(i % 2) * 90}><div className="card-hover race-stripe h-full rounded-2xl border border-ink/[0.08] bg-white p-7 pl-9"><div className="mb-3 text-cherry text-xl">&#9679;</div><h3 className="font-display font-semibold text-lg">{v.h}</h3><p className="mt-2 text-[15px] text-ink/60 leading-relaxed">{v.p}</p></div></Reveal>))}</div>
        </section>
        <CTASection heading={<>Come see the shop.<br />Bring your ride.</>} body="Family-owned, throwback vibes, and mechanics who actually love what they do. Book an appointment or just swing by." />
      </main>
      <Footer />
    </>
  );
}
