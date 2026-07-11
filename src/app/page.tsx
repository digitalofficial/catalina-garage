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
import { MarkerDivider } from "@/components/manga/MarkerDivider";

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
        <div className="bg-paper">
          <div className="mx-auto max-w-6xl"><Marquee items={trust} /></div>
        </div>
        <BrandLogos />
        {/* Services (light) with a full-bleed marker streak straddling the paper→dark seam */}
        <div className="relative">
          <Services />
          <MarkerDivider
            color="#E63222"
            height={88}
            segments={[
              { mark: 9, flex: 3, rotate: -3, dy: -4 },
              { mark: 5, flex: 2, rotate: 4, dy: 8 },
              { mark: 9, flex: 3, rotate: 2, dy: -6 },
              { mark: 6, flex: 2, rotate: -5, dy: 6 },
              { mark: 9, flex: 3, rotate: 3, dy: 0 },
            ]}
            className="pointer-events-none absolute inset-x-0 bottom-0 -translate-y-1/2 z-20"
          />
        </div>

        <TireAnimation
          heading="Brakes You Can Trust."
          description="We pull the wheel, inspect the rotor and caliper, replace what needs replacing, and bolt it back up. No shortcuts, no upselling. Just honest work."
        />
        <WhyCatalina />
        <OilChangeAnimation
          heading="Every Detail, Every Time."
          description="Pop the hood, check the dipstick, drain the old stuff, pour in the new. We top off every fluid, swap the filter, and run a 21-point inspection before you get your keys back."
          reverse
        />
        {/* Stats (red) with marker streak straddling the red→paper seam */}
        <div className="relative">
          <Stats />
          <MarkerDivider
            color="#0A0A0B"
            height={88}
            segments={[
              { mark: 9, flex: 3, rotate: 3, dy: -2 },
              { mark: 6, flex: 2, rotate: -4, dy: 8 },
              { mark: 9, flex: 3, rotate: -2, dy: -6 },
              { mark: 5, flex: 2, rotate: 5, dy: 6 },
              { mark: 9, flex: 3, rotate: 2, dy: 0 },
            ]}
            className="pointer-events-none absolute inset-x-0 bottom-0 -translate-y-1/2 z-20"
          />
        </div>

        <Reviews />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
