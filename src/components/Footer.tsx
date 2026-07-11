import Link from "next/link";
import { LogoBadge } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-ink text-white/70 relative overflow-hidden">
      {/* Ink splatter */}
      <div className="ink-splatter" style={{ opacity: 0.02 }} />

      {/* Top border */}
      <div className="h-1 bg-red" />

      <div className="mx-auto max-w-6xl px-5 py-14 relative">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <LogoBadge className="mb-5" />
            <p className="text-sm leading-relaxed max-w-xs text-white/40">
              Old-school service, modern diagnostics. Car and truck repair for Tucson and the surrounding foothills since day one.
            </p>
          </div>
          <div>
            <h4 className="font-display uppercase text-xs tracking-[.2em] text-white/30 mb-4">Services</h4>
            <ul className="space-y-2 text-sm font-medium">
              <li><Link href="/services" className="hover:text-red transition-colors">All services</Link></li>
              <li><Link href="/pricing" className="hover:text-red transition-colors">Pricing</Link></li>
              <li><Link href="/gallery" className="hover:text-red transition-colors">Gallery</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display uppercase text-xs tracking-[.2em] text-white/30 mb-4">Shop</h4>
            <ul className="space-y-2 text-sm font-medium">
              <li><Link href="/about" className="hover:text-red transition-colors">About</Link></li>
              <li><Link href="/reviews" className="hover:text-red transition-colors">Reviews</Link></li>
              <li><Link href="/faq" className="hover:text-red transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-red transition-colors">Book appointment</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display uppercase text-xs tracking-[.2em] text-white/30 mb-4">Visit</h4>
            <ul className="space-y-2 text-sm font-medium">
              <li><a href="tel:+15200000000" className="hover:text-red transition-colors">(520) 000-0000</a></li>
              <li><a href="mailto:hello@catalinagarage.com" className="hover:text-red transition-colors">hello@catalinagarage.com</a></li>
              <li className="text-white/40">Mon&ndash;Fri 7am&ndash;6pm</li>
              <li className="text-white/40">Sat 8am&ndash;2pm &middot; Sun Closed</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t-2 border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/30 font-medium">
          <span>&copy; {new Date().getFullYear()} Catalina Garage &middot; Tucson, AZ</span>
          <span className="flex gap-4">
            <Link href="/privacy" className="hover:text-red transition-colors">Privacy</Link>
            <span>ASE Certified &middot; Family-owned &middot; No B.S.</span>
          </span>
        </div>
        <div className="mt-4 text-center text-[11px] text-white/20">
          Built by <a href="https://digitalofficial.com" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-red transition-colors">Digital Official</a>
        </div>
      </div>
    </footer>
  );
}
