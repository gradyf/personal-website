import type { CSSProperties } from "react";

const PATTERNS: Record<string, CSSProperties> = {
  grid: { backgroundColor: "var(--paper-tile)", backgroundImage: "var(--pattern-grid)" },
  lines: { backgroundColor: "var(--paper-tile)", backgroundImage: "var(--pattern-lines)" },
  rings: { backgroundColor: "var(--paper-tile)", backgroundImage: "var(--pattern-rings)" },
  dots: {
    backgroundColor: "var(--paper-tile)",
    backgroundImage: "var(--pattern-dots)",
    backgroundSize: "var(--pattern-dots-size)",
  },
  solid: { backgroundColor: "var(--paper-tint)" },
};

export function Specimen({
  pattern = "grid",
  height = 86,
  width,
  label,
  index,
  src,
  style,
}: {
  pattern?: string;
  height?: number | string;
  width?: number | string;
  label?: string;
  index?: string;
  src?: string;
  style?: CSSProperties;
}) {
  const fill = PATTERNS[pattern] || PATTERNS.grid;
  return (
    <div
      style={{
        position: "relative",
        height,
        width,
        border: "1px solid var(--line)",
        borderRadius: "var(--radius)",
        overflow: "hidden",
        ...(src ? { backgroundColor: "var(--paper-tile)" } : fill),
        ...style,
      }}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={label || ""}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      ) : null}
      {index ? (
        <span
          style={{
            position: "absolute",
            top: 8,
            left: 10,
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            fontWeight: "var(--w-meta)" as CSSProperties["fontWeight"],
            color: "var(--ink-meta)",
          }}
        >
          {index}
        </span>
      ) : null}
    </div>
  );
}
