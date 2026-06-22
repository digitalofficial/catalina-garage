import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import { Halftone } from "./Halftone";

const stats = [
  { to: 10000, suffix: "+", label: "Vehicles repaired" },
  { to: 18, suffix: "yrs", label: "Family-owned in Tucson" },
  { to: 100, suffix: "%", label: "Show-you-the-part honest" },
  { to: 4.9, suffix: "★", label: "Average review rating" },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-cherry text-white">
      <Halftone />
      <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div className="font-display text-4xl md:text-5xl font-bold chrome-text">
                {typeof s.to === "number" && s.to < 10 ? s.to : <Counter to={s.to} />}{s.suffix}
              </div>
              <div className="mt-2 text-sm text-white/70 leading-snug">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
