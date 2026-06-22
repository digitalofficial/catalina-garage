"use client";

import { useEffect, useRef, useState } from "react";

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); io.disconnect(); } }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    if (!started) return;
    const dur = 1800, s = performance.now();
    const step = (now: number) => { const t = Math.min((now - s) / dur, 1); setValue(Math.round((1 - Math.pow(1 - t, 3)) * to)); if (t < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }, [started, to]);
  return <span ref={ref}>{value}{suffix}</span>;
}
