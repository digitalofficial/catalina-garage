import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = { title: "Auto Services | Catalina Garage — Tucson, AZ", description: "Full-service car and truck repair — oil changes, brakes, engine diagnostics, AC, transmission, tires, electrical, and more in Tucson." };

const services = [
  { title: "Oil Changes & Tune-Ups", body: "Conventional, synthetic, and high-mileage oil changes with a 21-point inspection. Plus spark plugs, filters, belts, and fluid services.", includes: ["Conventional & synthetic oil", "Oil filter replacement", "21-point inspection", "Fluid top-off", "Spark plug replacement", "Belt & hose inspection"] },
  { title: "Brakes & Rotors", body: "Pads, rotors, calipers, brake lines, and fluid flushes. We inspect before we quote, and we never upsell parts you don't need.", includes: ["Brake pad replacement", "Rotor resurfacing & replacement", "Caliper service", "Brake fluid flush", "Emergency brake adjustment", "Brake line repair"] },
  { title: "Engine Diagnostics & Repair", body: "Check engine light, misfires, overheating, oil leaks, timing chains — we diagnose with modern scanners and fix with old-school know-how.", includes: ["OBD-II code reading", "Drivability diagnosis", "Engine repair & rebuild", "Timing belt / chain", "Head gasket replacement", "Oil leak repair"] },
  { title: "AC & Heating", body: "Tucson AC is survival equipment. Recharges, compressor swaps, evaporator repair, heater cores, and full climate system diagnostics.", includes: ["AC recharge (R-134a & R-1234yf)", "Compressor replacement", "Condenser & evaporator repair", "Heater core replacement", "Blower motor service", "Climate control diagnosis"] },
  { title: "Transmission Service", body: "Fluid flushes, solenoid replacement, and full rebuilds. Manual and automatic, cars and trucks. We don't guess — we diagnose.", includes: ["Transmission fluid flush", "Filter replacement", "Solenoid repair", "Clutch replacement (manual)", "Full transmission rebuild", "Torque converter service"] },
  { title: "Tires & Alignment", body: "New tires from all major brands, rotations, balancing, and 4-wheel alignment. We price-match any local competitor.", includes: ["New tire sales & install", "Tire rotation", "Wheel balancing", "4-wheel alignment", "Flat repair & patching", "TPMS sensor service"] },
  { title: "Electrical & Batteries", body: "Dead battery, faulty alternator, starter issues, wiring gremlins. We trace and fix electrical problems that other shops give up on.", includes: ["Battery test & replacement", "Alternator repair", "Starter replacement", "Wiring diagnosis", "Lighting & fuse repair", "Parasitic draw testing"] },
  { title: "Suspension & Steering", body: "Shocks, struts, ball joints, tie rods, control arms, and power steering. Smooth ride, straight tracking, safe handling.", includes: ["Shock & strut replacement", "Ball joint replacement", "Tie rod service", "Control arm replacement", "Power steering repair", "Wheel bearing replacement"] },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow="Under the hood" title="Full-service repair for" highlight="every vehicle." subtitle="Cars, trucks, SUVs — domestic and import. ASE certified mechanics, honest quotes, and the kind of work we'd want done on our own ride." />
        <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 90}>
                <div className="card-hover race-stripe h-full rounded-2xl border border-ink/[0.08] bg-white p-7 pl-9">
                  <h2 className="font-display font-semibold text-xl">{s.title}</h2>
                  <p className="mt-2.5 text-[15px] text-ink/60 leading-relaxed">{s.body}</p>
                  <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 text-[13.5px] text-ink/70">
                    {s.includes.map((it) => (<li key={it} className="flex items-start gap-2"><span className="mt-[3px] text-cherry">✓</span><span>{it}</span></li>))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
        <CTASection heading={<>Don&apos;t see your issue?<br />Bring it in anyway.</>} body="If it rolls, we fix it. Book an appointment or just swing by the shop." />
      </main>
      <Footer />
    </>
  );
}
