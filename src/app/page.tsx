import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyCatalina } from "@/components/WhyCatalina";
import { Reviews } from "@/components/Reviews";
import { Stats } from "@/components/Stats";
import { CTASection } from "@/components/CTASection";
import { Marquee } from "@/components/Marquee";

const trust = [
  "ASE Certified Mechanics",
  "Cars, Trucks & SUVs",
  "Honest Flat-Rate Quotes",
  "Loaner Vehicles Available",
  "Family-Owned Since Day One",
  "No Upselling, Ever",
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="border-b border-ink/5 bg-paper">
          <div className="mx-auto max-w-6xl"><Marquee items={trust} /></div>
        </div>
        <Services />
        <WhyCatalina />
        <Stats />
        <div className="mx-auto max-w-6xl px-5"><div className="pinstripe opacity-60" /></div>
        <Reviews />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
