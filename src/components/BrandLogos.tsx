"use client";

import { motion } from "framer-motion";

const brands = [
  { name: "Ford", svg: (<svg viewBox="0 0 80 32" fill="currentColor" className="h-6 md:h-7 w-auto"><text x="40" y="22" textAnchor="middle" fontSize="17" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="-0.5">Ford</text></svg>) },
  { name: "Chevrolet", svg: (<svg viewBox="0 0 36 20" fill="currentColor" className="h-5 md:h-6 w-auto"><path d="M0 7h10.5L12.5 3H23.5L25.5 7H36v6H25.5l-2-4H12.5l-2 4H0V7z" fillRule="evenodd" opacity=".75" /></svg>) },
  { name: "Toyota", svg: (<svg viewBox="0 0 80 32" fill="currentColor" className="h-7 md:h-8 w-auto"><ellipse cx="40" cy="16" rx="38" ry="14" fill="none" stroke="currentColor" strokeWidth="2.5" opacity=".7" /><ellipse cx="40" cy="16" rx="22" ry="10" fill="none" stroke="currentColor" strokeWidth="2" opacity=".5" /><ellipse cx="40" cy="16" rx="10" ry="14" fill="none" stroke="currentColor" strokeWidth="2" opacity=".6" /></svg>) },
  { name: "Honda", svg: (<svg viewBox="0 0 60 32" fill="currentColor" className="h-6 md:h-7 w-auto"><text x="30" y="23" textAnchor="middle" fontSize="19" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="1">HONDA</text></svg>) },
  { name: "BMW", svg: (<svg viewBox="0 0 36 36" fill="currentColor" className="h-7 md:h-8 w-auto"><circle cx="18" cy="18" r="16" fill="none" stroke="currentColor" strokeWidth="2.5" opacity=".7" /><circle cx="18" cy="18" r="13" fill="none" stroke="currentColor" strokeWidth="1.5" opacity=".4" /><line x1="18" y1="5" x2="18" y2="31" stroke="currentColor" strokeWidth="1.5" opacity=".4" /><line x1="5" y1="18" x2="31" y2="18" stroke="currentColor" strokeWidth="1.5" opacity=".4" /><text x="18" y="22" textAnchor="middle" fontSize="8" fontWeight="800" fontFamily="system-ui, sans-serif">BMW</text></svg>) },
  { name: "Mercedes", svg: (<svg viewBox="0 0 36 36" fill="currentColor" className="h-7 md:h-8 w-auto"><circle cx="18" cy="18" r="16" fill="none" stroke="currentColor" strokeWidth="2.5" opacity=".7" /><line x1="18" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="2" opacity=".6" /><line x1="18" y1="18" x2="5" y2="28" stroke="currentColor" strokeWidth="2" opacity=".6" /><line x1="18" y1="18" x2="31" y2="28" stroke="currentColor" strokeWidth="2" opacity=".6" /></svg>) },
  { name: "Nissan", svg: (<svg viewBox="0 0 70 32" fill="currentColor" className="h-6 md:h-7 w-auto"><text x="35" y="23" textAnchor="middle" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="2">NISSAN</text></svg>) },
  { name: "Dodge", svg: (<svg viewBox="0 0 60 32" fill="currentColor" className="h-6 md:h-7 w-auto"><text x="30" y="22" textAnchor="middle" fontSize="17" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="1">DODGE</text><line x1="5" y1="27" x2="55" y2="27" stroke="currentColor" strokeWidth="2" opacity=".5" /></svg>) },
  { name: "GMC", svg: (<svg viewBox="0 0 50 28" fill="currentColor" className="h-6 md:h-7 w-auto"><rect x="2" y="2" width="46" height="24" rx="0" fill="none" stroke="currentColor" strokeWidth="2.5" opacity=".6" /><text x="25" y="20" textAnchor="middle" fontSize="16" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="1">GMC</text></svg>) },
  { name: "Subaru", svg: (<svg viewBox="0 0 70 32" fill="currentColor" className="h-6 md:h-7 w-auto"><ellipse cx="35" cy="16" rx="33" ry="14" fill="none" stroke="currentColor" strokeWidth="2" opacity=".5" /><circle cx="26" cy="12" r="2" opacity=".6" /><circle cx="32" cy="9" r="1.8" opacity=".5" /><circle cx="38" cy="10" r="2.2" opacity=".7" /><circle cx="44" cy="12" r="1.8" opacity=".5" /><circle cx="35" cy="15" r="2.5" opacity=".8" /><text x="35" y="26" textAnchor="middle" fontSize="7" fontWeight="600" fontFamily="system-ui, sans-serif" letterSpacing="1.5" opacity=".6">SUBARU</text></svg>) },
  { name: "Jeep", svg: (<svg viewBox="0 0 50 28" fill="currentColor" className="h-6 md:h-7 w-auto"><text x="25" y="21" textAnchor="middle" fontSize="19" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="1">JEEP</text></svg>) },
  { name: "Hyundai", svg: (<svg viewBox="0 0 70 32" fill="currentColor" className="h-6 md:h-7 w-auto"><ellipse cx="35" cy="14" rx="12" ry="11" fill="none" stroke="currentColor" strokeWidth="2.5" opacity=".6" /><path d="M27 14 Q35 6 43 14 Q35 22 27 14Z" fill="none" stroke="currentColor" strokeWidth="2" opacity=".5" /><text x="35" y="30" textAnchor="middle" fontSize="7" fontWeight="600" fontFamily="system-ui, sans-serif" letterSpacing="1" opacity=".6">HYUNDAI</text></svg>) },
  { name: "Kia", svg: (<svg viewBox="0 0 50 28" fill="currentColor" className="h-6 md:h-7 w-auto"><text x="25" y="21" textAnchor="middle" fontSize="20" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="2">KIA</text></svg>) },
  { name: "Volkswagen", svg: (<svg viewBox="0 0 36 36" fill="currentColor" className="h-7 md:h-8 w-auto"><circle cx="18" cy="18" r="16" fill="none" stroke="currentColor" strokeWidth="2.5" opacity=".7" /><text x="18" y="23" textAnchor="middle" fontSize="14" fontWeight="800" fontFamily="system-ui, sans-serif">VW</text></svg>) },
  { name: "Ram", svg: (<svg viewBox="0 0 50 28" fill="currentColor" className="h-6 md:h-7 w-auto"><text x="25" y="21" textAnchor="middle" fontSize="19" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="2">RAM</text><line x1="5" y1="24" x2="45" y2="24" stroke="currentColor" strokeWidth="1.5" opacity=".4" /></svg>) },
  { name: "Audi", svg: (<svg viewBox="0 0 80 28" fill="currentColor" className="h-6 md:h-7 w-auto"><circle cx="20" cy="14" r="9" fill="none" stroke="currentColor" strokeWidth="2" opacity=".6" /><circle cx="34" cy="14" r="9" fill="none" stroke="currentColor" strokeWidth="2" opacity=".6" /><circle cx="48" cy="14" r="9" fill="none" stroke="currentColor" strokeWidth="2" opacity=".6" /><circle cx="62" cy="14" r="9" fill="none" stroke="currentColor" strokeWidth="2" opacity=".6" /></svg>) },
];

export function BrandLogos() {
  return (
    <section className="bg-ink overflow-hidden relative">
      <div className="halftone-dots text-white absolute inset-0" style={{ opacity: 0.03 }} />
      <div className="h-1 bg-red" />

      <div className="mx-auto max-w-6xl px-5 py-14 md:py-18 relative">
        <motion.p
          className="font-display uppercase text-xs tracking-[.25em] text-white/25 text-center mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          We Service All Makes &amp; Models
        </motion.p>
        <motion.div
          className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 gap-6 md:gap-8 items-center justify-items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {brands.map((b) => (
            <div
              key={b.name}
              className="text-white/25 hover:text-white/60 transition-colors duration-200 flex items-center justify-center"
              title={b.name}
            >
              {b.svg}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="h-1 bg-red" />
    </section>
  );
}
