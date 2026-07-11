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
        <div className="bg-paper">
          <div className="mx-auto max-w-6xl"><Marquee items={trust} /></div>
        </div>
        <BrandLogos />
        <Services />

        {/* Diagonal divider */}
        <div className="w-full overflow-hidden" aria-hidden="true">
          <svg viewBox="0 0 1200 40" className="w-full h-10" preserveAspectRatio="none">
            <line x1="0" y1="35" x2="1200" y2="5" stroke="#0A0A0B" strokeWidth="3" opacity="0.06" />
            <line x1="0" y1="40" x2="1200" y2="10" stroke="#E63222" strokeWidth="2" opacity="0.12" />
          </svg>
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
        <Stats />

        {/* Zigzag divider */}
        <div className="w-full overflow-hidden" aria-hidden="true">
          <svg viewBox="0 0 1200 24" className="w-full h-6" preserveAspectRatio="none">
            <path
              d="M0 12 L30 2 L60 22 L90 2 L120 22 L150 2 L180 22 L210 2 L240 22 L270 2 L300 22 L330 2 L360 22 L390 2 L420 22 L450 2 L480 22 L510 2 L540 22 L570 2 L600 22 L630 2 L660 22 L690 2 L720 22 L750 2 L780 22 L810 2 L840 22 L870 2 L900 22 L930 2 L960 22 L990 2 L1020 22 L1050 2 L1080 22 L1110 2 L1140 22 L1170 2 L1200 12"
              stroke="#0A0A0B"
              strokeWidth="2"
              fill="none"
              opacity="0.08"
            />
          </svg>
        </div>

        <Reviews />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
