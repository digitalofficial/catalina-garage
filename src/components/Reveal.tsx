"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  scale?: boolean;
  className?: string;
  as?: "div" | "h2" | "p" | "span";
}

export function Reveal({ children, delay = 0, scale = false, className = "" }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={scale ? { opacity: 0, scale: 0.92 } : { opacity: 0, y: 30 }}
      whileInView={scale ? { opacity: 1, scale: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.5, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
