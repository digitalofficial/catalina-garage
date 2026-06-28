import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GarageHero } from "@/components/GarageHero";
import { Services } from "@/components/Services";
import { WhyCatalina } from "@/components/WhyCatalina";
import { Reviews } from "@/components/Reviews";
import { Stats } from "@/components/Stats";
import { CTASection } from "@/components/CTASection";
import { Marquee } from "@/components/Marquee";
import { TireAnimation } from "@/components/TireAnimation";
import { OilChangeAnimation } from "@/components/OilChangeAnimation";
import { BrandLogos } from "@/components/BrandLogos";

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
        <GarageHero />
        <div className="border-b border-ink/5 bg-paper">
          <div className="mx-auto max-w-6xl"><Marquee items={trust} /></div>
        </div>
        <BrandLogos />
        <Services />
        <TireAnimation
          heading="Brakes you can trust."
          description="Watch how we handle a brake job — pull the wheel, inspect the rotor and caliper, replace what needs replacing, and bolt it back up. No shortcuts, no upselling. Just honest work."
          carColor="#C0392B"
        />
        <WhyCatalina />
        <OilChangeAnimation
          heading="Every detail, every time."
          description="Pop the hood, check the dipstick, drain the old stuff, pour in the new. We top off every fluid, swap the filter, and run a 21-point inspection before you get your keys back."
          carColor="#45B5AA"
          reverse
        />
        <Stats />
        <div className="mx-auto max-w-6xl px-5"><div className="pinstripe opacity-60" /></div>
        <Reviews />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
