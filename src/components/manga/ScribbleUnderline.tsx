interface ScribbleUnderlineProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
}

export function ScribbleUnderline({ children, color = "#E63222", className = "" }: ScribbleUnderlineProps) {
  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      <svg
        className="absolute -bottom-1 left-0 w-full"
        viewBox="0 0 120 8"
        preserveAspectRatio="none"
        height="6"
        aria-hidden="true"
      >
        <path
          d="M2 5 Q15 2 30 5 Q45 8 60 4 Q75 1 90 5 Q105 8 118 4"
          stroke={color}
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
