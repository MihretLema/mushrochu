const PETALS = [
  { left: "8%", delay: "0s", w: "w-4", h: "h-4", opacity: "bg-accent/50" },
  { left: "22%", delay: "5s", w: "w-3", h: "h-5", opacity: "bg-accent/40" },
  { left: "38%", delay: "2s", w: "w-5", h: "h-3", opacity: "bg-accent/30" },
  { left: "55%", delay: "7s", w: "w-4", h: "h-4", opacity: "bg-accent/45" },
  { left: "68%", delay: "1s", w: "w-3", h: "h-4", opacity: "bg-accent/35" },
  { left: "82%", delay: "9s", w: "w-5", h: "h-4", opacity: "bg-accent/50" },
  { left: "92%", delay: "4s", w: "w-3", h: "h-3", opacity: "bg-accent/40" },
];

export function Petals() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
    >
      {PETALS.map((p, i) => (
        <span
          key={i}
          className={`petal rounded-full blur-[1px] ${p.w} ${p.h} ${p.opacity}`}
          style={{ left: p.left, top: "-6%", animationDelay: p.delay }}
        />
      ))}
    </div>
  );
}
