interface SectionDividerProps {
  variant?: "slash" | "dots" | "zigzag";
  className?: string;
}

export function SectionDivider({ variant = "slash", className = "" }: SectionDividerProps) {
  if (variant === "dots") {
    return (
      <div className={`flex items-center justify-center gap-3 py-4 ${className}`} aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} className="block w-2 h-2 bg-ink rounded-full" style={{ opacity: 0.15 + i * 0.05 }} />
        ))}
      </div>
    );
  }
  if (variant === "zigzag") {
    return (
      <div className={`w-full overflow-hidden ${className}`} aria-hidden="true">
        <svg viewBox="0 0 1200 24" className="w-full h-6" preserveAspectRatio="none">
          <path
            d="M0 12 L30 2 L60 22 L90 2 L120 22 L150 2 L180 22 L210 2 L240 22 L270 2 L300 22 L330 2 L360 22 L390 2 L420 22 L450 2 L480 22 L510 2 L540 22 L570 2 L600 22 L630 2 L660 22 L690 2 L720 22 L750 2 L780 22 L810 2 L840 22 L870 2 L900 22 L930 2 L960 22 L990 2 L1020 22 L1050 2 L1080 22 L1110 2 L1140 22 L1170 2 L1200 12"
            stroke="#0A0A0B"
            strokeWidth="2"
            fill="none"
            opacity="0.1"
          />
        </svg>
      </div>
    );
  }
  // slash
  return (
    <div className={`w-full overflow-hidden ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1200 40" className="w-full h-10" preserveAspectRatio="none">
        <line x1="0" y1="35" x2="1200" y2="5" stroke="#0A0A0B" strokeWidth="3" opacity="0.08" />
        <line x1="0" y1="40" x2="1200" y2="10" stroke="#E63222" strokeWidth="2" opacity="0.15" />
      </svg>
    </div>
  );
}
