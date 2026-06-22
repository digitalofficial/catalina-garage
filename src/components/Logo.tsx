import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="Catalina Garage — home">
      <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-cherry bg-cherry text-white text-sm font-bold font-display">CG</span>
      <span className="font-display font-bold text-lg tracking-tight text-ink">
        Catalina<span className="text-cherry">Garage</span>
      </span>
    </Link>
  );
}

export function LogoBadge({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-cherry bg-cherry text-white text-xl font-bold font-display">CG</span>
      <span className="font-display font-bold text-xl tracking-tight text-white">
        Catalina<span className="text-turq">Garage</span>
      </span>
    </span>
  );
}
