import { Halftone } from "./Halftone";
import { Reveal } from "./Reveal";

export function PageHero({ eyebrow, title, highlight, subtitle }: { eyebrow: string; title: string; highlight?: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden bg-grease text-white">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 130% 90% at 60% 0%, #3A1518 0%, #2A1215 35%, #1C1C1E 70%)" }} />
      <Halftone />
      <div className="absolute bottom-0 left-0 right-0 pinstripe" />
      <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-16 md:pt-28 md:pb-20">
        <Reveal as="p" className="eyebrow text-turq/90 mb-4">{eyebrow}</Reveal>
        <Reveal as="h1" delay={80} className="font-display font-bold tracking-[-0.02em] text-[2.3rem] leading-[1.06] md:text-[3.6rem] max-w-3xl">
          {title} {highlight && <span className="chrome-text">{highlight}</span>}
        </Reveal>
        {subtitle && <Reveal as="p" delay={160} className="mt-5 max-w-xl text-base md:text-lg text-white/65 leading-relaxed">{subtitle}</Reveal>}
      </div>
    </section>
  );
}
