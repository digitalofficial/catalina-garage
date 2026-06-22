export function Marquee({ items }: { items: string[] }) {
  const row = (
    <ul className="marquee-track items-center gap-10 pr-10" aria-hidden="true">
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-10 whitespace-nowrap text-sm font-medium text-ink/45">
          <span>{item}</span>
          <span className="text-cherry/60">&#9679;</span>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="marquee relative overflow-hidden py-5">
      <div className="flex">{row}{row}</div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-paper to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-paper to-transparent" />
    </div>
  );
}
