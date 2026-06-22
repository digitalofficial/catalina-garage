import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = { title: "Book Appointment | Catalina Garage — Tucson, AZ", description: "Book an auto repair appointment at Catalina Garage in Tucson. Flat-rate quote before any work begins." };

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-5 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <div className="badge-retro text-cherry mb-4">Book an appointment</div>
            <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-[1.05]">Let&apos;s get your ride right.</h1>
            <p className="mt-5 text-ink/65 leading-relaxed max-w-sm">Tell us what&apos;s going on and we&apos;ll get you on the schedule. Or just roll up — walk-ins welcome when bays are open.</p>
            <div className="mt-6 space-y-3 text-sm">
              <a href="tel:+15200000000" className="flex items-center gap-3 font-semibold text-cherry hover:text-turq">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cherry/[0.08]">&#9742;</span> (520) 000-0000
              </a>
              <a href="mailto:hello@catalinagarage.com" className="flex items-center gap-3 font-semibold text-cherry hover:text-turq">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cherry/[0.08]">&#9993;</span> hello@catalinagarage.com
              </a>
            </div>
            <div className="mt-6 text-sm text-ink/50"><p>Mon&ndash;Fri 7am&ndash;6pm &middot; Sat 8am&ndash;2pm</p><p>Walk-ins welcome &middot; Loaner vehicles available</p></div>
          </div>
          <div className="rounded-3xl border border-ink/[0.08] bg-white p-6 md:p-8 shadow-[0_24px_60px_-40px_rgba(28,28,30,.5)]">
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
