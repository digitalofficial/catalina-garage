"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface RoughButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "filled" | "outline";
  className?: string;
}

export function RoughButton({ href, onClick, children, variant = "filled", className = "" }: RoughButtonProps) {
  const cls = variant === "filled" ? "btn-manga" : "btn-manga-outline";
  const inner = (
    <motion.span
      className={`${cls} ${className}`}
      whileHover={{ x: -2, y: -2 }}
      whileTap={{ x: 2, y: 2, boxShadow: "1px 1px 0 #0A0A0B" }}
    >
      {children}
    </motion.span>
  );
  if (href) return <Link href={href}>{inner}</Link>;
  return <button onClick={onClick} type="button">{inner}</button>;
}
