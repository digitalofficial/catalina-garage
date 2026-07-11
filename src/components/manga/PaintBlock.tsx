interface PaintBlockProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
  rotate?: number;
}

export function PaintBlock({ children, color = "#FFD600", className = "", rotate = -1.5 }: PaintBlockProps) {
  return (
    <span className={`relative inline-block z-10 ${className}`}>
      <span
        className="absolute -inset-x-[6%] top-[25%] -bottom-[8%] -z-10"
        style={{ background: color, transform: `rotate(${rotate}deg)` }}
        aria-hidden="true"
      />
      {children}
    </span>
  );
}
