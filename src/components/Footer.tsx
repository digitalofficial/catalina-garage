import Link from "next/link";
import { LogoBadge } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-grease text-white/70">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <LogoBadge className="mb-5" />
            <p className="text-sm leading-relaxed max-w-xs text-white/45">Old-school service, modern diagnostics. Car and truck repair for Tucson and the surrounding foothills since day one.</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[.2em] text-white/35 mb-4 font-semibold">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-cherry">All services</Link></li>
              <li><Link href="/pricing" className="hover:text-cherry">Pricing</Link></li>
              <li><Link href="/gallery" className="hover:text-cherry">Gallery</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[.2em] text-white/35 mb-4 font-semibold">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-cherry">About</Link></li>
              <li><Link href="/reviews" className="hover:text-cherry">Reviews</Link></li>
              <li><Link href="/faq" className="hover:text-cherry">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-cherry">Book appointment</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[.2em] text-white/35 mb-4 font-semibold">Visit</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:+15200000000" className="hover:text-cherry">(520) 000-0000</a></li>
              <li><a href="mailto:hello@catalinagarage.com" className="hover:text-cherry">hello@catalinagarage.com</a></li>
              <li className="text-white/45">Mon&ndash;Fri 7am&ndash;6pm</li>
              <li className="text-white/45">Sat 8am&ndash;2pm &middot; Sun Closed</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/35">
          <span>&copy; {new Date().getFullYear()} Catalina Garage &middot; Tucson, AZ</span>
          <span className="flex gap-4">
            <Link href="/privacy" className="hover:text-cherry">Privacy</Link>
            <span>ASE Certified &middot; Family-owned &middot; No B.S.</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
