import Link from "next/link";
import { Halftone } from "./Halftone";
import { Reveal } from "./Reveal";

export function CTASection({
  heading = (<>Your ride deserves<br />a real mechanic.</>),
  body = "Book an appointment or just roll up. We\u2019ll take a look, tell you what\u2019s actually wrong, and quote it flat before we start.",
}: { heading?: React.ReactNode; body?: string }) {
  return (
    <section className="relative overflow-hidden bg-cherry text-white">
      <Halftone />
      <div className="relative mx-auto max-w-3xl px-5 py-20 md:py-28 text-center">
        <Reveal as="h2" className="font-display font-bold text-3xl md:text-[2.8rem] tracking-tight leading-[1.08]">{heading}</Reveal>
        <Reveal as="p" delay={100} className="mt-5 text-white/75 max-w-md mx-auto leading-relaxed">{body}</Reveal>
        <Reveal delay={180} className="mt-9 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="btn-lift rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-cherry hover:bg-grease hover:text-white">Book appointment</Link>
          <a href="tel:+15200000000" className="btn-lift rounded-full glass px-7 py-3.5 text-[15px] font-semibold text-white hover:border-turq/60">Call (520) 000-0000</a>
        </Reveal>
      </div>
    </section>
  );
}
