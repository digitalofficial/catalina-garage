"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const SERVICES_DROPDOWN = [
  { href: "/services/oil-changes", label: "Oil Changes & Tune-Ups" },
  { href: "/services/brakes", label: "Brakes & Rotors" },
  { href: "/services/engine-diagnostics", label: "Engine Diagnostics & Repair" },
  { href: "/services/ac-heating", label: "AC & Heating" },
  { href: "/services/transmission", label: "Transmission Service" },
  { href: "/services/tires-alignment", label: "Tires & Alignment" },
  { href: "/services/electrical", label: "Electrical & Batteries" },
  { href: "/services/suspension", label: "Suspension & Steering" },
];

const NAV_OTHER = [
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  useEffect(() => { const f = () => setScrolled(window.scrollY > 8); f(); window.addEventListener("scroll", f, { passive: true }); return () => window.removeEventListener("scroll", f); }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);

  return (
    <header className={`sticky top-0 z-50 border-b transition-all duration-300 ${scrolled ? "bg-paper/90 border-ink/10 backdrop-blur-md shadow-[0_8px_30px_-20px_rgba(28,28,30,.5)]" : "bg-paper/70 border-transparent backdrop-blur-sm"}`}>
      <div className={`mx-auto max-w-6xl px-5 flex items-center justify-between transition-all duration-300 ${scrolled ? "h-14" : "h-16"}`}>
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-ink/70">
          {/* Services with dropdown */}
          <div className="relative group">
            <Link
              href="/services"
              className="relative transition-colors hover:text-cherry after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-cherry after:transition-all hover:after:w-full inline-flex items-center gap-1"
            >
              Services
              <svg className="w-3 h-3 mt-px transition-transform duration-200 group-hover:rotate-180" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 4l4 4 4-4" />
              </svg>
            </Link>
            {/* Flyout panel */}
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
              <div className="w-64 rounded-xl border border-ink/10 bg-white shadow-xl shadow-ink/[0.08] p-2">
                <Link
                  href="/services"
                  className="block rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-wider text-ink/40 hover:bg-cherry/5 hover:text-cherry mb-1"
                >
                  All Services
                </Link>
                <div className="border-t border-ink/[0.06] pt-1">
                  {SERVICES_DROPDOWN.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block rounded-lg px-3 py-2 text-sm text-ink/70 hover:bg-cherry/5 hover:text-cherry transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Other nav items */}
          {NAV_OTHER.map((n) => (
            <Link key={n.href} href={n.href} className="relative transition-colors hover:text-cherry after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-cherry after:transition-all hover:after:w-full">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:+15200000000" className="hidden lg:inline text-sm font-semibold text-cherry">(520) 000-0000</a>
          <Link href="/contact" className="hidden sm:inline btn-lift rounded-full bg-cherry px-4 py-2 text-sm font-semibold text-white hover:bg-grease">Book appointment</Link>
          <button onClick={() => setOpen((v) => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} className="md:hidden grid h-10 w-10 place-items-center rounded-full border border-ink/10 text-ink">
            <span className="relative block h-4 w-5">
              <span className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 bg-current transition-all duration-200 ${open ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"}`} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${open ? "max-h-[680px] opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="mx-auto max-w-6xl px-5 pb-6 pt-2 flex flex-col gap-1 text-[15px] font-medium text-ink/80">
          {/* Services accordion */}
          <button
            onClick={() => setServicesOpen((v) => !v)}
            className="flex items-center justify-between rounded-xl px-3 py-3 hover:bg-cherry/[0.06] hover:text-cherry text-left w-full"
          >
            <Link href="/services" onClick={() => setOpen(false)} className="flex-1">Services</Link>
            <svg className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 4l4 4 4-4" />
            </svg>
          </button>
          {/* Service sub-items */}
          <div className={`overflow-hidden transition-[max-height,opacity] duration-200 ${servicesOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="ml-3 pl-3 border-l-2 border-cherry/20 flex flex-col gap-0.5 pb-1">
              {SERVICES_DROPDOWN.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-[14px] text-ink/65 hover:bg-cherry/[0.06] hover:text-cherry"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {NAV_OTHER.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 hover:bg-cherry/[0.06] hover:text-cherry">{n.label}</Link>
          ))}
          <Link href="/faq" onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 hover:bg-cherry/[0.06] hover:text-cherry">FAQ</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-cherry px-4 py-3 text-center font-semibold text-white">Book appointment</Link>
          <a href="tel:+15200000000" className="mt-1 px-3 py-2 text-center text-sm font-semibold text-cherry">(520) 000-0000</a>
        </nav>
      </div>
    </header>
  );
}
