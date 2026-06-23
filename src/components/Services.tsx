import Link from "next/link";
import { Reveal } from "./Reveal";

const ICON = "h-[22px] w-[22px]";
const services = [
  { title: "Oil Changes & Tune-Ups", body: "Conventional, synthetic, and high-mileage oil. Fluid top-off, filter swap, and a 21-point inspection every time.",
    img: "https://images.unsplash.com/photo-1635784065032-b8b5b9c16364?w=400&h=250&fit=crop",
    icon: (<svg className={ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3c4 4 7 7 7 11a7 7 0 0 1-14 0c0-4 3-7 7-11z"/></svg>) },
  { title: "Brakes & Rotors", body: "Pads, rotors, calipers, and fluid flushes. We don't upsell — if it doesn't need replacing, we tell you.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=250&fit=crop",
    icon: (<svg className={ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/></svg>) },
  { title: "Engine Diagnostics", body: "Check engine light? We read the codes, diagnose the real problem, and explain it in plain English before any wrench turns.",
    img: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=250&fit=crop",
    icon: (<svg className={ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5 5L4 17l3 3 5.7-5.7a4 4 0 0 0 5-5l-2.3 2.3-2.2-.5-.5-2.2 2.3-2.3z"/></svg>) },
  { title: "AC & Heating", body: "Tucson AC is not optional. Recharges, compressor repair, heater cores, and full climate system diagnostics.",
    img: "https://images.unsplash.com/photo-1621993202323-f8b0fd0b3e4a?w=400&h=250&fit=crop",
    icon: (<svg className={ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 14c2 0 2-1.5 4.5-1.5S11 14 13 14s2-1.5 4.5-1.5S20 14 21 14"/><path d="M3 18c2 0 2-1.5 4.5-1.5S11 18 13 18s2-1.5 4.5-1.5S20 18 21 18"/><path d="M12 3v6"/></svg>) },
  { title: "Transmission", body: "Fluid flushes, solenoid replacement, and full rebuilds. Manual and automatic, cars and trucks.",
    img: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=400&h=250&fit=crop",
    icon: (<svg className={ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></svg>) },
  { title: "Tires & Alignment", body: "New tires, rotations, balancing, and 4-wheel alignment. We carry all major brands and match any local price.",
    img: "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?w=400&h=250&fit=crop",
    icon: (<svg className={ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 0 0 18M3 12h18"/></svg>) },
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <Reveal className="flex items-end justify-between gap-6 mb-12">
        <div>
          <p className="eyebrow text-cherry mb-3">Under the hood</p>
          <h2 className="font-display font-bold text-3xl md:text-[2.6rem] tracking-tight max-w-xl leading-tight">If it rolls, we fix it. Simple as that.</h2>
        </div>
        <Link href="/services" className="hidden md:inline text-sm font-semibold text-cherry whitespace-nowrap hover:text-turq">All services &rarr;</Link>
      </Reveal>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 80}>
            <div className="card-hover race-stripe h-full rounded-2xl border border-ink/[0.08] bg-white overflow-hidden">
              <div className="h-36 w-full overflow-hidden">
                <img src={s.img} alt={s.title} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="p-6 pl-8">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-cherry/20 text-cherry">{s.icon}</div>
                <h3 className="font-display font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-ink/60 leading-relaxed">{s.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
