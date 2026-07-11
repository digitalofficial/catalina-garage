"use client";

import { useState } from "react";

export type QA = { q: string; a: string };

export function Faq({ items }: { items: QA[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className="bg-white border-2 border-ink/10 overflow-hidden"
            style={isOpen ? { borderColor: "#0A0A0B", boxShadow: "3px 3px 0 #0A0A0B" } : {}}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 px-5 py-4 text-left"
            >
              <span className="font-display uppercase text-[15px] tracking-tight text-ink">{item.q}</span>
              <span
                className={`shrink-0 grid h-7 w-7 place-items-center border-2 border-ink text-ink transition-transform duration-200 ${isOpen ? "rotate-45 bg-red text-white border-red" : ""}`}
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>
            <div className={`acc-panel ${isOpen ? "open" : ""}`}>
              <div>
                <p className="pb-5 px-5 pr-12 text-[15px] leading-relaxed text-ink/60">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
