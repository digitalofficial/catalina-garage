"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

export function Reveal({ children, as: Tag = "div", delay = 0, scale = false, className = "" }: { children: ReactNode; as?: ElementType; delay?: number; scale?: boolean; className?: string }) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const base = scale ? "reveal-scale" : "reveal";
  return <Tag ref={ref} className={`${base}${visible ? " is-visible" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</Tag>;
}
