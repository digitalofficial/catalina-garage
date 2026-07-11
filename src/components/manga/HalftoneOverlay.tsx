interface HalftoneOverlayProps {
  className?: string;
  opacity?: number;
}

export function HalftoneOverlay({ className = "", opacity = 0.06 }: HalftoneOverlayProps) {
  return (
    <div
      className={`halftone-dots ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    />
  );
}
