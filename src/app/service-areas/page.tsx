import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = { title: "Service Areas | Catalina Garage — Tucson, AZ", description: "Catalina Garage serves Tucson, Catalina Foothills, Oro Valley, Marana, and surrounding areas." };

const areas = [
  { name: "Tucson", desc: "Central, midtown, east side, and south Tucson — right in our backyard." },
  { name: "Catalina Foothills", desc: "Our namesake neighborhood. Luxury vehicles, classics, and daily drivers." },
  { name: "Oro Valley", desc: "Just up the road. Drop off on your way to work, pick up on the way home." },
  { name: "Marana", desc: "Northwest corridor — Gladden Farms, Continental Ranch, and beyond." },
  { name: "Vail & Rita Ranch", desc: "Southeast Tucson's growing communities. We're worth the drive." },
  { name: "Sahuarita", desc: "Rancho Sahuarita, Quail Creek, and surrounding neighborhoods." },
];

export default function ServiceAreasPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow="Service area" title="Tucson's shop for" highlight="every neighborhood." subtitle="We're centrally located and worth the drive from anywhere in the metro. Loaner vehicles available for longer repairs." />
        <section className="mx-auto max-w-5xl px-5 py-20 md:py-28"><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{areas.map((a, i) => (<Reveal key={a.name} delay={(i % 3) * 80}><div className="card-hover race-stripe h-full rounded-2xl border border-ink/[0.08] bg-white p-6 pl-8"><h2 className="font-display font-semibold text-lg">{a.name}</h2><p className="mt-2 text-sm text-ink/60 leading-relaxed">{a.desc}</p></div></Reveal>))}</div></section>
        <CTASection heading={<>Wherever you are,<br />we&apos;ve got you.</>} body="Book an appointment or just roll up. Walk-ins welcome when bays are open." />
      </main>
      <Footer />
    </>
  );
}
