import Link from "next/link";
import { Reveal } from "./Reveal";
import { Halftone } from "./Halftone";

const points = [
  { h: "No upselling, ever", p: "If it doesn't need fixing, we tell you. We'd rather earn your trust than nickel-and-dime you on a cabin air filter." },
  { h: "ASE certified mechanics", p: "Every wrench-turner in our shop is ASE certified, background-checked, and actually likes cars. Wild concept, we know." },
  { h: "Show-you-the-part honest", p: "We show you the old part, explain what went wrong, and get your approval before any work starts. No surprises on the bill." },
  { h: "Loaner rides available", p: "Need to get to work? We've got loaner vehicles and a shuttle service so a repair doesn't wreck your whole day." },
];

export function WhyCatalina() {
  return (
    <section id="why" className="relative bg-grease text-white overflow-hidden">
      <Halftone />
      <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 items-center">
          <Reveal>
            <p className="eyebrow text-turq/90 mb-3">Why Catalina</p>
            <h2 className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight leading-tight">The kind of shop they don&apos;t make anymore.</h2>
            <p className="mt-5 text-white/60 leading-relaxed max-w-md">We built Catalina Garage because Tucson needed a shop with throwback honesty and modern tools. The kind of place where you actually trust the guy handing you the keys back.</p>
            <Link href="/contact" className="btn-lift mt-8 inline-flex rounded-full bg-cherry px-6 py-3 text-[15px] font-semibold text-white hover:bg-white hover:text-cherry">Book appointment</Link>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {points.map((pt, i) => (
              <Reveal key={pt.h} delay={i * 90}>
                <div className="glass h-full rounded-2xl p-5">
                  <div className="text-cherry mb-3">&#9679;</div>
                  <h3 className="font-display font-semibold">{pt.h}</h3>
                  <p className="mt-1.5 text-sm text-white/55 leading-relaxed">{pt.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
