"use client";

import { motion } from "framer-motion";

interface MotionArrowProps {
  direction?: "right" | "down" | "left" | "up";
  size?: number;
  className?: string;
  color?: string;
}

export function MotionArrow({ direction = "right", size = 40, className = "", color = "#E63222" }: MotionArrowProps) {
  const rotation = { right: 0, down: 90, left: 180, up: 270 }[direction];
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      className={className}
      style={{ transform: `rotate(${rotation}deg)` }}
      aria-hidden="true"
      animate={{ x: [0, 6, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <path
        d="M8 20 L28 20 M22 12 L30 20 L22 28"
        stroke={color}
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}
