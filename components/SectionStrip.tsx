import type { CSSProperties } from "react";

export function SectionStrip({
  left,
  right,
  strong = true,
}: {
  left: string;
  right?: string;
  strong?: boolean;
}) {
  const line = strong ? "1px solid var(--line-strong)" : "1px solid var(--line)";
  return (
    <div
      style={{
        borderTop: line,
        borderBottom: line,
        padding: "9px 2px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        gap: 24,
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        fontWeight: "var(--w-meta)" as CSSProperties["fontWeight"],
        letterSpacing: "2px",
        textTransform: "uppercase",
        color: "var(--ink-meta)",
      }}
    >
      <span>{left}</span>
      {right ? <span>{right}</span> : null}
    </div>
  );
}
