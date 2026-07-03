import React from "react";

const PATTERNS = {
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

export function Specimen({ pattern = "grid", height = 86, width, label, index, src, slotId, style }) {
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
        <img src={src} alt={label || ""} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      ) : null}
      {slotId && !src
        ? React.createElement("image-slot", {
            id: slotId,
            shape: "rect",
            fit: "cover",
            placeholder: typeof label === "string" && label ? "Drop screenshot — " + label : "Drop screenshot",
            style: { position: "absolute", inset: 0, width: "100%", height: "100%" },
          })
        : null}
      {index ? (
        <span style={{ position: "absolute", top: 8, left: 10, fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: "var(--w-meta)", color: "var(--ink-meta)" }}>
          {index}
        </span>
      ) : null}
      {label && !src && !slotId ? (
        <span
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            fontWeight: "var(--w-meta)",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "var(--ink-meta)",
          }}
        >
          {label}
        </span>
      ) : null}
    </div>
  );
}
