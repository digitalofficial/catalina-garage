import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { Faq, type QA } from "@/components/Faq";

export const metadata: Metadata = { title: "FAQ | Catalina Garage — Tucson, AZ", description: "Common questions about auto repair at Catalina Garage — pricing, scheduling, what we work on, and more." };

const groups: { title: string; items: QA[] }[] = [
  { title: "Scheduling & drop-off", items: [
    { q: "Do I need an appointment?", a: "Appointments are preferred and get priority, but walk-ins are welcome when bays are open. Call ahead for same-day availability." },
    { q: "Can I drop my car off early?", a: "Yes. We have a key drop box for early drop-offs. Leave your keys and a note, and we'll call you once we've looked at it." },
    { q: "Do you have loaner cars?", a: "Yes. We have a small fleet of loaner vehicles available for customers whose repairs take more than a day. First come, first served." },
    { q: "How long will my repair take?", a: "Most standard repairs (brakes, oil changes, diagnostics) are same-day. Bigger jobs like engine work or transmission rebuilds may take 2-5 days — we'll give you a timeline upfront." },
  ]},
  { title: "Pricing & payment", items: [
    { q: "How does flat-rate pricing work?", a: "We diagnose the problem, quote a flat price for the complete repair, and you approve before we start. The price doesn't change." },
    { q: "Do you offer financing?", a: "Yes. We offer financing options for larger repairs. Ask at the counter or mention it when you book." },
    { q: "Do you warranty your work?", a: "Every repair comes with a 24-month / 24,000-mile warranty on parts and labor. If something we fixed fails, we make it right." },
  ]},
  { title: "Vehicles & services", items: [
    { q: "What vehicles do you work on?", a: "Cars, trucks, SUVs, and vans — domestic and import. If it has an engine and wheels, we're on it. We don't do motorcycles or heavy diesel (yet)." },
    { q: "Do you do inspections for used car purchases?", a: "Yes. Our pre-purchase inspection is one of our most popular services. We'll tell you exactly what you're buying before you sign." },
    { q: "Can you work on classic cars?", a: "We love classics. Carbureted engines, points ignition, drum brakes — we speak fluent vintage. Bring it in." },
  ]},
];

export default function FaqPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow="FAQ" title="Everything you might" highlight="want to know." subtitle="Straight answers about scheduling, pricing, what we work on, and how we work. Still curious? Just call." />
        <section className="mx-auto max-w-3xl px-5 py-20 md:py-28"><div className="space-y-14">{groups.map((g, gi) => (<Reveal key={g.title} delay={gi * 60}><h2 className="font-display font-bold text-xl md:text-2xl tracking-tight mb-4">{g.title}</h2><Faq items={g.items} /></Reveal>))}</div></section>
        <CTASection heading={<>Still have<br />questions?</>} body="Call us at (520) 000-0000 or just swing by the shop. We're friendly, we promise." />
      </main>
      <Footer />
    </>
  );
}
