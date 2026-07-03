import React from "react";
import { Specimen } from "../core/Specimen.jsx";

export function LedgerRow({
  index = "01",
  title,
  meta,
  year,
  pattern = "grid",
  src,
  slotId,
  href,
  onClick,
  last = false,
}) {
  const [hover, setHover] = React.useState(false);
  const flip = hover ? "var(--text-accent)" : "var(--ink)";
  return (
    <a
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "52px 136px 1fr 70px 36px",
        alignItems: "center",
        gap: 20,
        padding: "var(--row-pad) 4px",
        borderBottom: last ? "1px solid var(--line-strong)" : "1px solid var(--line)",
        background: hover ? "var(--bg-hover)" : "transparent",
        textDecoration: "none",
        cursor: "pointer",
        transition: "background var(--speed) var(--ease-out)",
      }}
    >
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: "var(--w-meta)", color: "var(--text-accent)" }}>{index}</span>
      <Specimen pattern={pattern} src={src} slotId={slotId} height="var(--thumb-h)" />
      <span style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "var(--text-h2)",
            fontWeight: 700,
            letterSpacing: "var(--ls-title)",
            color: flip,
            transition: "color var(--speed) var(--ease-out)",
          }}
        >
          {title}
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            fontWeight: "var(--w-meta)",
            letterSpacing: "1px",
            textTransform: "uppercase",
            color: "var(--ink-meta)",
          }}
        >
          {meta}
        </span>
      </span>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ink-meta)" }}>{year}</span>
      <span
        style={{
          fontSize: 20,
          textAlign: "right",
          fontFamily: "var(--font-sans)",
          color: flip,
          transition: "color var(--speed) var(--ease-out)",
        }}
      >
        →
      </span>
    </a>
  );
}
