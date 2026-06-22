import Link from "next/link";
import { Halftone } from "./Halftone";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-grease text-white">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 130% 90% at 60% 0%, #3A1518 0%, #2A1215 30%, #1C1C1E 70%)" }} />
      <Halftone />
      <div className="absolute bottom-0 left-0 right-0 pinstripe" />

      <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="badge-retro text-turq mb-6">Est. Tucson, AZ</div>
        <h1 className="font-display font-bold tracking-[-0.02em] text-[2.6rem] leading-[1.05] md:text-[4.2rem] max-w-3xl">
          Old-school service.<br /><span className="chrome-text">Modern diagnostics.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base md:text-lg text-white/65 leading-relaxed">
          Cars, trucks, SUVs — if it rolls into Tucson, we fix it. Honest pricing, real mechanics, and the kind of shop your grandpa would&apos;ve trusted.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Link href="/contact" className="rounded-full bg-cherry px-6 py-3.5 text-[15px] font-semibold text-white hover:bg-white hover:text-cherry transition-colors">Book appointment</Link>
          <a href="tel:+15200000000" className="rounded-full glass px-6 py-3.5 text-[15px] font-semibold text-white hover:border-cherry/60 transition-colors">Call (520) 000-0000</a>
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-white/50">
          <span className="flex items-center gap-2"><span className="text-cherry">&#9679;</span> ASE Certified Mechanics</span>
          <span className="flex items-center gap-2"><span className="text-turq">&#9679;</span> Cars, Trucks &amp; SUVs</span>
          <span className="flex items-center gap-2"><span className="text-cherry">&#9679;</span> Family-Owned in Tucson</span>
        </div>
      </div>
    </section>
  );
}
