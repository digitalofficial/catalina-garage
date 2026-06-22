"use client";

import { useState } from "react";

export type QA = { q: string; a: string };

export function Faq({ items }: { items: QA[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-6 py-5 text-left">
              <span className="font-display font-semibold text-[17px] text-ink">{item.q}</span>
              <span className={`shrink-0 grid h-7 w-7 place-items-center rounded-full border border-ink/15 text-cherry transition-transform duration-300 ${isOpen ? "rotate-45 bg-cherry/10" : ""}`} aria-hidden="true">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
              </span>
            </button>
            <div className={`acc-panel ${isOpen ? "open" : ""}`}><div><p className="pb-6 pr-12 text-[15px] leading-relaxed text-ink/65">{item.a}</p></div></div>
          </div>
        );
      })}
    </div>
  );
}
