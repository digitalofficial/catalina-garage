/** Reusable SVG marker art elements for the sike_paint aesthetic */

/** Diagonal marker speed lines sweeping across a section */
export function MarkerSpeedLines({ color = "currentColor", opacity = 0.1, flip = false }: { color?: string; opacity?: number; flip?: boolean }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity, transform: flip ? "scaleX(-1)" : undefined }} aria-hidden="true">
      <svg viewBox="0 0 1600 800" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <line x1="-50" y1="0" x2="1100" y2="800" stroke={color} strokeWidth="4" strokeLinecap="round" opacity="0.5" />
        <line x1="100" y1="0" x2="1250" y2="800" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.4" />
        <line x1="250" y1="0" x2="1400" y2="800" stroke={color} strokeWidth="3.5" strokeLinecap="round" opacity="0.35" />
        <line x1="450" y1="0" x2="1600" y2="800" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
        <line x1="650" y1="0" x2="1600" y2="650" stroke={color} strokeWidth="3" strokeLinecap="round" opacity="0.25" />
        <line x1="850" y1="0" x2="1600" y2="520" stroke={color} strokeWidth="4.5" strokeLinecap="round" opacity="0.2" />
        <line x1="1050" y1="0" x2="1600" y2="380" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.15" />
      </svg>
    </div>
  );
}

/** Rough halftone gradient (big dots → small, trailing off from a corner) */
export function RoughHalftone({ corner = "br", color = "currentColor", opacity = 0.15 }: { corner?: "br" | "tl" | "tr" | "bl"; color?: string; opacity?: number }) {
  const dots = [];
  const rows = 8;
  const cols = 8;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const dist = r + c;
      const maxDist = rows + cols - 2;
      const size = 7 - (dist / maxDist) * 6;
      const dotOpacity = 0.7 - (dist / maxDist) * 0.6;
      if (size < 0.8) continue;
      const x = c * 28 + 15 + (r % 2) * 8;
      const y = r * 28 + 15;
      dots.push(<circle key={`${r}-${c}`} cx={x} cy={y} r={size} fill={color} opacity={dotOpacity} />);
    }
  }

  const transforms: Record<string, string> = {
    br: "translate(100%, 100%) rotate(180deg)",
    tl: "",
    tr: "translate(100%, 0) scaleX(-1)",
    bl: "translate(0, 100%) scaleY(-1)",
  };

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ opacity }}
      aria-hidden="true"
    >
      <div style={{ position: "absolute", top: 0, left: 0, transform: transforms[corner], transformOrigin: "top left" }}>
        <svg width="260" height="260" viewBox="0 0 260 260">
          {dots}
        </svg>
      </div>
    </div>
  );
}

/** Hand-drawn X marks scattered as accents */
export function XMarks({ color = "currentColor", opacity = 0.12 }: { color?: string; opacity?: number }) {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ opacity }} aria-hidden="true">
      {/* X mark 1 */}
      <svg className="absolute top-[12%] right-[14%]" width="45" height="45" viewBox="0 0 45 45">
        <line x1="7" y1="7" x2="38" y2="38" stroke={color} strokeWidth="4" strokeLinecap="round" />
        <line x1="38" y1="7" x2="7" y2="38" stroke={color} strokeWidth="4" strokeLinecap="round" />
      </svg>
      {/* X mark 2 (smaller) */}
      <svg className="absolute top-[22%] right-[20%]" width="30" height="30" viewBox="0 0 30 30">
        <line x1="5" y1="5" x2="25" y2="25" stroke={color} strokeWidth="3" strokeLinecap="round" />
        <line x1="25" y1="5" x2="5" y2="25" stroke={color} strokeWidth="3" strokeLinecap="round" />
      </svg>
      {/* X mark 3 */}
      <svg className="hidden md:block absolute top-[32%] right-[8%]" width="35" height="35" viewBox="0 0 35 35">
        <line x1="6" y1="6" x2="29" y2="29" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
        <line x1="29" y1="6" x2="6" y2="29" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

/** Ink drip trails hanging from top */
export function InkDrips({ color = "currentColor", opacity = 0.07 }: { color?: string; opacity?: number }) {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ opacity }} aria-hidden="true">
      <svg className="absolute top-0 right-[28%]" width="18" height="100" viewBox="0 0 18 100">
        <path d="M9 0 L9 65 Q9 80 9 85 Q7 92 9 96" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" />
        <circle cx="9" cy="95" r="4" fill={color} />
      </svg>
      <svg className="absolute top-0 right-[42%]" width="14" height="65" viewBox="0 0 14 65">
        <path d="M7 0 L7 42 Q6 52 7 56 Q8 60 7 63" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <circle cx="7" cy="62" r="3" fill={color} />
      </svg>
      <svg className="hidden md:block absolute top-0 left-[18%]" width="12" height="50" viewBox="0 0 12 50">
        <path d="M6 0 L6 32 Q5 40 6 44" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="6" cy="43" r="2.5" fill={color} />
      </svg>
    </div>
  );
}

/** Rough marker arrow (hand-drawn style) */
export function MarkerArrow({ direction = "down", color = "currentColor", className = "", opacity = 0.12 }: { direction?: "down" | "right" | "up" | "left"; color?: string; className?: string; opacity?: number }) {
  const rotations = { down: 0, right: -90, up: 180, left: 90 };
  return (
    <div className={`pointer-events-none ${className}`} style={{ opacity }} aria-hidden="true">
      <svg width="50" height="65" viewBox="0 0 50 65" style={{ transform: `rotate(${rotations[direction]}deg)` }}>
        <path d="M25 5 L25 45" stroke={color} strokeWidth="4" strokeLinecap="round" />
        <path d="M10 35 L25 52 L40 35" stroke={color} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
