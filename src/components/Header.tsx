"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 8);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-paper/95 backdrop-blur-md border-b-[3px] border-ink"
          : "bg-paper border-b-[3px] border-transparent"
      }`}
    >
      <div className={`mx-auto max-w-6xl px-5 flex items-center justify-between transition-all duration-200 ${scrolled ? "h-14" : "h-16"}`}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5" aria-label="Catalina Garage home">
          <span
            className="flex h-10 w-10 items-center justify-center border-[2.5px] border-ink bg-red text-white font-display text-sm"
            style={{ boxShadow: "2px 2px 0 #0A0A0B" }}
          >
            CG
          </span>
          <span className="font-display text-lg uppercase tracking-tight text-ink">
            Catalina<span className="text-red">Garage</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold uppercase tracking-wide text-ink/80">
          <div className="relative group">
            <Link
              href="/services"
              className="flex items-center gap-1 py-2 hover:text-red transition-colors"
            >
              Services
              <svg className="w-3 h-3 mt-px transition-transform duration-200 group-hover:rotate-180" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 4l4 4 4-4" />
              </svg>
            </Link>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
              <div
                className="w-64 bg-white border-[2.5px] border-ink p-2"
                style={{ boxShadow: "4px 4px 0 #0A0A0B" }}
              >
                <Link
                  href="/services"
                  className="block px-3 py-2 text-xs font-bold uppercase tracking-wider text-ink/40 hover:bg-red/5 hover:text-red"
                >
                  All Services
                </Link>
                <div className="border-t-2 border-ink/10 pt-1 mt-1">
                  {SERVICES_DROPDOWN.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-3 py-2 text-sm normal-case tracking-normal text-ink/70 hover:bg-red/5 hover:text-red transition-colors font-medium"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {NAV_OTHER.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="py-2 hover:text-red transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:+15200000000" className="hidden lg:inline text-sm font-bold text-red uppercase tracking-wide">(520) 000-0000</a>
          <Link
            href="/contact"
            className="hidden sm:inline-flex btn-manga text-xs py-2.5 px-4"
          >
            Book Now
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden grid h-10 w-10 place-items-center border-2 border-ink text-ink"
            style={{ boxShadow: "2px 2px 0 #0A0A0B" }}
          >
            <span className="relative block h-4 w-5">
              <span className={`absolute left-0 block h-[2.5px] w-5 bg-current transition-all duration-200 ${open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1/2 block h-[2.5px] w-5 -translate-y-1/2 bg-current transition-all duration-150 ${open ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute left-0 block h-[2.5px] w-5 bg-current transition-all duration-200 ${open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"}`} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t-2 border-ink/10"
          >
            <nav className="mx-auto max-w-6xl px-5 pb-6 pt-3 flex flex-col gap-1 text-[15px] font-bold uppercase tracking-wide text-ink/80">
              <button
                onClick={() => setServicesOpen((v) => !v)}
                className="flex items-center justify-between px-3 py-3 hover:text-red text-left w-full"
              >
                <Link href="/services" onClick={() => setOpen(false)} className="flex-1">Services</Link>
                <svg className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 4l4 4 4-4" />
                </svg>
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="ml-3 pl-3 border-l-[3px] border-red/30 flex flex-col gap-0.5 pb-1">
                      {SERVICES_DROPDOWN.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          onClick={() => setOpen(false)}
                          className="px-3 py-2 text-[14px] normal-case tracking-normal text-ink/60 hover:text-red font-medium"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {NAV_OTHER.map((n) => (
                <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="px-3 py-3 hover:text-red">{n.label}</Link>
              ))}
              <Link href="/faq" onClick={() => setOpen(false)} className="px-3 py-3 hover:text-red">FAQ</Link>
              <Link href="/contact" onClick={() => setOpen(false)} className="mt-3 btn-manga text-center justify-center">
                Book Appointment
              </Link>
              <a href="tel:+15200000000" className="mt-2 px-3 py-2 text-center text-sm font-bold text-red">(520) 000-0000</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
