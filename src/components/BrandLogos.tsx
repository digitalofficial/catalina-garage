import { Reveal } from "./Reveal";

const brands = [
  { name: "Ford", svg: (
    <svg viewBox="0 0 80 32" fill="currentColor" className="h-6 md:h-7 w-auto">
      <path d="M5 16C5 8 12 3 22 3h2c2 0 3.5.4 5 1.2C31 3 33 2 36 2h8c3 0 5 1 6.5 2.5C52 3 54 2 57 2c5 0 9 2 11 5.5C70 5 73 3.5 77 3.5V8c-3 0-5.5 1.5-7 3.5.5 1.5.8 3 .8 4.5 0 8-7 13-17 13h-2c-3 0-5.5-.8-7.5-2.2C43 28.5 41 30 38 30h-8c-3 0-5-1.2-6.5-3C21.5 28.5 19 30 16 30 9 30 5 24 5 16z" opacity=".08" />
      <text x="40" y="22" textAnchor="middle" fontSize="17" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="-0.5">Ford</text>
    </svg>
  )},
  { name: "Chevrolet", svg: (
    <svg viewBox="0 0 36 20" fill="currentColor" className="h-5 md:h-6 w-auto">
      <path d="M0 7h10.5L12.5 3H23.5L25.5 7H36v6H25.5l-2-4H12.5l-2 4H0V7z" fillRule="evenodd" opacity=".75" />
    </svg>
  )},
  { name: "Toyota", svg: (
    <svg viewBox="0 0 80 32" fill="currentColor" className="h-7 md:h-8 w-auto">
      <ellipse cx="40" cy="16" rx="38" ry="14" fill="none" stroke="currentColor" strokeWidth="2.5" opacity=".7" />
      <ellipse cx="40" cy="16" rx="22" ry="10" fill="none" stroke="currentColor" strokeWidth="2" opacity=".5" />
      <ellipse cx="40" cy="16" rx="10" ry="14" fill="none" stroke="currentColor" strokeWidth="2" opacity=".6" />
    </svg>
  )},
  { name: "Honda", svg: (
    <svg viewBox="0 0 60 32" fill="currentColor" className="h-6 md:h-7 w-auto">
      <text x="30" y="23" textAnchor="middle" fontSize="19" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="1">HONDA</text>
    </svg>
  )},
  { name: "BMW", svg: (
    <svg viewBox="0 0 36 36" fill="currentColor" className="h-7 md:h-8 w-auto">
      <circle cx="18" cy="18" r="16" fill="none" stroke="currentColor" strokeWidth="2.5" opacity=".7" />
      <circle cx="18" cy="18" r="13" fill="none" stroke="currentColor" strokeWidth="1.5" opacity=".4" />
      <line x1="18" y1="5" x2="18" y2="31" stroke="currentColor" strokeWidth="1.5" opacity=".4" />
      <line x1="5" y1="18" x2="31" y2="18" stroke="currentColor" strokeWidth="1.5" opacity=".4" />
      <text x="18" y="22" textAnchor="middle" fontSize="8" fontWeight="800" fontFamily="system-ui, sans-serif">BMW</text>
    </svg>
  )},
  { name: "Mercedes", svg: (
    <svg viewBox="0 0 36 36" fill="currentColor" className="h-7 md:h-8 w-auto">
      <circle cx="18" cy="18" r="16" fill="none" stroke="currentColor" strokeWidth="2.5" opacity=".7" />
      <line x1="18" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="2" opacity=".6" />
      <line x1="18" y1="18" x2="5" y2="28" stroke="currentColor" strokeWidth="2" opacity=".6" />
      <line x1="18" y1="18" x2="31" y2="28" stroke="currentColor" strokeWidth="2" opacity=".6" />
    </svg>
  )},
  { name: "Nissan", svg: (
    <svg viewBox="0 0 70 32" fill="currentColor" className="h-6 md:h-7 w-auto">
      <text x="35" y="23" textAnchor="middle" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="2">NISSAN</text>
    </svg>
  )},
  { name: "Dodge", svg: (
    <svg viewBox="0 0 60 32" fill="currentColor" className="h-6 md:h-7 w-auto">
      <text x="30" y="22" textAnchor="middle" fontSize="17" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="1">DODGE</text>
      <line x1="5" y1="27" x2="55" y2="27" stroke="currentColor" strokeWidth="2" opacity=".5" />
    </svg>
  )},
  { name: "GMC", svg: (
    <svg viewBox="0 0 50 28" fill="currentColor" className="h-6 md:h-7 w-auto">
      <rect x="2" y="2" width="46" height="24" rx="3" fill="none" stroke="currentColor" strokeWidth="2.5" opacity=".6" />
      <text x="25" y="20" textAnchor="middle" fontSize="16" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="1">GMC</text>
    </svg>
  )},
  { name: "Subaru", svg: (
    <svg viewBox="0 0 70 32" fill="currentColor" className="h-6 md:h-7 w-auto">
      <ellipse cx="35" cy="16" rx="33" ry="14" fill="none" stroke="currentColor" strokeWidth="2" opacity=".5" />
      {/* Stars cluster */}
      <circle cx="26" cy="12" r="2" opacity=".6" />
      <circle cx="32" cy="9" r="1.8" opacity=".5" />
      <circle cx="38" cy="10" r="2.2" opacity=".7" />
      <circle cx="44" cy="12" r="1.8" opacity=".5" />
      <circle cx="35" cy="15" r="2.5" opacity=".8" />
      <circle cx="41" cy="17" r="1.5" opacity=".4" />
      <text x="35" y="26" textAnchor="middle" fontSize="7" fontWeight="600" fontFamily="system-ui, sans-serif" letterSpacing="1.5" opacity=".6">SUBARU</text>
    </svg>
  )},
  { name: "Jeep", svg: (
    <svg viewBox="0 0 50 28" fill="currentColor" className="h-6 md:h-7 w-auto">
      <text x="25" y="21" textAnchor="middle" fontSize="19" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="1">JEEP</text>
    </svg>
  )},
  { name: "Hyundai", svg: (
    <svg viewBox="0 0 70 32" fill="currentColor" className="h-6 md:h-7 w-auto">
      <ellipse cx="35" cy="14" rx="12" ry="11" fill="none" stroke="currentColor" strokeWidth="2.5" opacity=".6" />
      <path d="M27 14 Q35 6 43 14 Q35 22 27 14Z" fill="none" stroke="currentColor" strokeWidth="2" opacity=".5" />
      <text x="35" y="30" textAnchor="middle" fontSize="7" fontWeight="600" fontFamily="system-ui, sans-serif" letterSpacing="1" opacity=".6">HYUNDAI</text>
    </svg>
  )},
  { name: "Kia", svg: (
    <svg viewBox="0 0 50 28" fill="currentColor" className="h-6 md:h-7 w-auto">
      <text x="25" y="21" textAnchor="middle" fontSize="20" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="2">KIA</text>
    </svg>
  )},
  { name: "Volkswagen", svg: (
    <svg viewBox="0 0 36 36" fill="currentColor" className="h-7 md:h-8 w-auto">
      <circle cx="18" cy="18" r="16" fill="none" stroke="currentColor" strokeWidth="2.5" opacity=".7" />
      <text x="18" y="23" textAnchor="middle" fontSize="14" fontWeight="800" fontFamily="system-ui, sans-serif">VW</text>
    </svg>
  )},
  { name: "Ram", svg: (
    <svg viewBox="0 0 50 28" fill="currentColor" className="h-6 md:h-7 w-auto">
      <text x="25" y="21" textAnchor="middle" fontSize="19" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="2">RAM</text>
      <line x1="5" y1="24" x2="45" y2="24" stroke="currentColor" strokeWidth="1.5" opacity=".4" />
    </svg>
  )},
  { name: "Audi", svg: (
    <svg viewBox="0 0 80 28" fill="currentColor" className="h-6 md:h-7 w-auto">
      <circle cx="20" cy="14" r="9" fill="none" stroke="currentColor" strokeWidth="2" opacity=".6" />
      <circle cx="34" cy="14" r="9" fill="none" stroke="currentColor" strokeWidth="2" opacity=".6" />
      <circle cx="48" cy="14" r="9" fill="none" stroke="currentColor" strokeWidth="2" opacity=".6" />
      <circle cx="62" cy="14" r="9" fill="none" stroke="currentColor" strokeWidth="2" opacity=".6" />
    </svg>
  )},
];

export function BrandLogos() {
  return (
    <section className="bg-grease overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <Reveal>
          <p className="eyebrow text-white/35 text-center mb-8 tracking-[.25em]">
            We service all makes &amp; models
          </p>
        </Reveal>
        <Reveal delay={100}>
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 gap-6 md:gap-8 items-center justify-items-center">
            {brands.map((b) => (
              <div
                key={b.name}
                className="text-white/30 hover:text-white/60 transition-colors duration-300 flex items-center justify-center"
                title={b.name}
              >
                {b.svg}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
