import Link from "next/link";
import { Reveal } from "./Reveal";

const reviews = [
  { quote: "Told me my brakes still had 40% life and to come back in six months. Every other shop tried to sell me pads on the spot. That's why I'll never go anywhere else.", who: "Foothills regular" },
  { quote: "AC died in July — which in Tucson is basically a medical emergency. They got me in same day, fixed it by 3pm, and it was $200 less than the dealer quoted.", who: "Oro Valley" },
  { quote: "Brought my '68 Mustang in for a tune-up and the mechanic lit up like a kid on Christmas. These people genuinely love cars. And the throwback decor? *Chef's kiss.*", who: "Tucson car guy" },
];

export function Reviews() {
  return (
    <section id="reviews" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <Reveal>
        <p className="eyebrow text-cherry mb-3 text-center">From the parking lot</p>
        <h2 className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight leading-tight text-center mb-4">Tucson trusts Catalina Garage.</h2>
        <div className="flex items-center justify-center gap-2 mb-12">
          <span className="text-cherry text-xl tracking-wide">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          <span className="text-sm font-semibold text-ink/70">4.9 on Google</span>
          <span className="text-xs text-ink/40">&middot; 200+ reviews</span>
        </div>
      </Reveal>
      <div className="grid gap-5 md:grid-cols-3">
        {reviews.map((r, i) => (
          <Reveal key={r.who} delay={i * 90}>
            <figure className="card-hover race-stripe h-full rounded-2xl border border-ink/[0.08] bg-white p-6 pl-8">
              <div className="text-cherry mb-3 tracking-wide">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <blockquote className="text-[15px] text-ink/75 leading-relaxed">&ldquo;{r.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-ink">{r.who}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <p className="text-center text-sm text-ink/55 mt-8">
          <Link href="/reviews" className="font-semibold text-cherry hover:text-turq">Read more reviews &rarr;</Link>
        </p>
      </Reveal>
    </section>
  );
}
