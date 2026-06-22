import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = { title: "Reviews | Catalina Garage — Tucson, AZ", description: "What Tucson says about Catalina Garage — real reviews from real customers." };

const reviews = [
  { quote: "Told me my brakes still had 40% life and to come back in six months. Every other shop tried to sell me pads on the spot. That's why I'll never go anywhere else.", who: "Rachel M.", area: "Foothills" },
  { quote: "AC died in July — which in Tucson is basically a medical emergency. They got me in same day, fixed it by 3pm, and it was $200 less than the dealer quoted.", who: "Tom B.", area: "Oro Valley" },
  { quote: "Brought my '68 Mustang in for a tune-up and the mechanic lit up like a kid on Christmas. These people genuinely love cars. And the throwback decor? Chef's kiss.", who: "Carlos R.", area: "Tucson" },
  { quote: "Pre-purchase inspection saved me from buying a lemon. They found frame damage the seller didn't disclose. Worth every penny of the $129.", who: "Sarah K.", area: "Marana" },
  { quote: "Transmission was slipping on my Tacoma. They diagnosed it as a solenoid, not a full rebuild like two other shops wanted to charge. Fixed for $400 instead of $3,000.", who: "Jake P.", area: "Vail" },
  { quote: "The loaner car while my engine was getting worked on was a lifesaver. What shop does that anymore? Catalina Garage does. That's who.", who: "Linda W.", area: "Sahuarita" },
  { quote: "I know nothing about cars and they never made me feel dumb. Showed me the old parts, explained everything, and the bill was exactly what they quoted. Rare.", who: "Jennifer H.", area: "Tucson" },
  { quote: "My kids love going there for the retro vibe. My husband loves going there because they actually fix things right. I love going there because the bill makes sense.", who: "Maria T.", area: "Green Valley" },
  { quote: "Brought my work truck in with a check engine light. Diagnosed in 20 minutes, fixed in an hour, and I was back on the job site by lunch. No drama.", who: "Mike D.", area: "Dove Mountain" },
];

export default function ReviewsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow="Reviews" title="What Tucson says about" highlight="Catalina Garage." subtitle="Real customers, real cars, real opinions." />
        <section className="mx-auto max-w-6xl px-5 py-20 md:py-28"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{reviews.map((r, i) => (<Reveal key={r.who} delay={(i % 3) * 90}><figure className="card-hover race-stripe h-full rounded-2xl border border-ink/[0.08] bg-white p-6 pl-8"><div className="text-cherry mb-3 tracking-wide">&#9733;&#9733;&#9733;&#9733;&#9733;</div><blockquote className="text-[15px] text-ink/75 leading-relaxed">&ldquo;{r.quote}&rdquo;</blockquote><figcaption className="mt-4"><div className="text-sm font-semibold text-ink">{r.who}</div><div className="text-xs text-ink/50">{r.area}</div></figcaption></figure></Reveal>))}</div></section>
        <CTASection heading={<>Ready to find<br />your shop?</>} body="Book an appointment and see why Tucson trusts Catalina Garage." />
      </main>
      <Footer />
    </>
  );
}
