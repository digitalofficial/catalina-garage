import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="Catalina Garage home">
      <span
        className="flex h-10 w-10 items-center justify-center border-[2.5px] border-ink bg-red text-white font-display text-sm"
        style={{ boxShadow: "2px 2px 0 #0A0A0B" }}
      >
        CG
      </span>
      <span className="font-display text-lg uppercase tracking-tight text-ink">
        Catalina<span className="text-red">Garage</span>
      </span>
    </Link>
  );
}

export function LogoBadge({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        className="flex h-12 w-12 items-center justify-center border-[2.5px] border-white/20 bg-red text-white text-xl font-bold font-display"
        style={{ boxShadow: "3px 3px 0 rgba(255,255,255,0.15)" }}
      >
        CG
      </span>
      <span className="font-display font-bold text-xl uppercase tracking-tight text-white">
        Catalina<span className="text-yellow">Garage</span>
      </span>
    </span>
  );
}
