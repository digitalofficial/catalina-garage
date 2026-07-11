interface SpeedLinesProps {
  direction?: "left" | "right";
  className?: string;
  color?: string;
}

export function SpeedLines({ direction = "right", className = "", color = "#0A0A0B" }: SpeedLinesProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
      style={{ opacity: 0.06 }}
    >
      <svg
        viewBox="0 0 800 400"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        style={{ transform: direction === "left" ? "scaleX(-1)" : undefined }}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <line
            key={i}
            x1={100 + Math.random() * 200}
            y1={i * 20 + 10}
            x2={800}
            y2={i * 20 + 10 + (Math.random() - 0.5) * 10}
            stroke={color}
            strokeWidth={1 + Math.random() * 2}
            opacity={0.3 + Math.random() * 0.7}
          />
        ))}
      </svg>
    </div>
  );
}
