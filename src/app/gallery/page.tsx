import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = { title: "Gallery | Catalina Garage — Tucson, AZ", description: "Photos of Catalina Garage — the shop, the bays, the retro vibes, and the rides we've fixed." };

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow="The shop" title="Chrome, grease, and" highlight="good vibes." subtitle="A look inside Catalina Garage — retro decor, clean bays, and the kind of shop you actually want to hang out in." />
        <section className="mx-auto max-w-6xl px-5 py-20 md:py-28"><Reveal className="text-center max-w-2xl mx-auto"><p className="text-ink/55 leading-relaxed">Gallery photos coming soon. In the meantime, come see the shop in person — it&apos;s even better than pictures.</p></Reveal></section>
        <CTASection heading={<>Best experienced<br />in person.</>} body="Swing by the shop, check out the decor, and let us take a look under your hood while you're at it." />
      </main>
      <Footer />
    </>
  );
}
