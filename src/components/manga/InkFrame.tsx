interface InkFrameProps {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
}

export function InkFrame({ children, className = "", rotate = 0 }: InkFrameProps) {
  return (
    <div
      className={`relative manga-panel ${className}`}
      style={{ transform: rotate ? `rotate(${rotate}deg)` : undefined }}
    >
      {children}
    </div>
  );
}
