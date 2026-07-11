"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

const slideUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
};

interface RevealProps {
  children: ReactNode;
  delay?: number;
  scale?: boolean;
  className?: string;
  as?: "div" | "section" | "h2" | "p" | "span";
}

export function Reveal({ children, delay = 0, scale = false, className = "", as = "div" }: RevealProps) {
  const Tag = motion[as] as typeof motion.div;
  return (
    <Tag
      className={className}
      variants={scale ? scaleIn : slideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.5, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}
