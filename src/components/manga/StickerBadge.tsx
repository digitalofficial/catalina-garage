interface StickerBadgeProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
  rotate?: number;
}

export function StickerBadge({ children, color = "#FFD600", className = "", rotate = -2 }: StickerBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.18em] border-[2.5px] border-ink ${className}`}
      style={{
        background: color,
        color: "#0A0A0B",
        transform: `rotate(${rotate}deg)`,
        boxShadow: "3px 3px 0 #0A0A0B",
      }}
    >
      {children}
    </span>
  );
}
