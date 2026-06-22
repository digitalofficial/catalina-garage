import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
export const metadata: Metadata = { title: "Thank You | Catalina Garage" };
export default function ThankYouPage() {
  return (<><Header /><main className="mx-auto max-w-2xl px-5 py-24 md:py-36 text-center"><div className="text-5xl mb-6">&#9679;</div><h1 className="font-display font-bold text-3xl md:text-4xl tracking-tight">We got your request.</h1><p className="mt-4 text-ink/60 leading-relaxed max-w-md mx-auto">We&apos;ll confirm your appointment shortly. If it&apos;s urgent, give us a ring — we pick up.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Link href="/" className="btn-lift rounded-full bg-cherry px-6 py-3 text-[15px] font-semibold text-white hover:bg-grease">Back to home</Link><a href="tel:+15200000000" className="btn-lift rounded-full border border-ink/15 px-6 py-3 text-[15px] font-semibold text-cherry hover:bg-cherry/5">Call (520) 000-0000</a></div></main><Footer /></>);
}
