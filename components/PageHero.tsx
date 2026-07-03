import type { CSSProperties } from "react";

export function PageHero({
  title,
  accent,
  lede,
  notes = [],
}: {
  title: string;
  accent?: string;
  lede?: string;
  notes?: string[];
}) {
  return (
    <div
      className="gf-hero"
      style={{ display: "flex", justifyContent: "space-between", gap: 60, padding: "52px 0 44px" }}
    >
      <div>
        <h1
          style={{
            margin: 0,
            fontFamily: "var(--font-sans)",
            fontSize: "var(--text-hero)",
            fontWeight: 800,
            lineHeight: "var(--lh-display)",
            letterSpacing: "var(--ls-display)",
            maxWidth: 720,
            color: "var(--ink)",
          }}
        >
          {title} {accent ? <span style={{ color: "var(--text-accent)" }}>{accent}</span> : null}
        </h1>
        {lede ? (
          <p
            style={{
              margin: "22px 0 0",
              maxWidth: 540,
              fontFamily: "var(--font-text)",
              fontSize: "var(--text-body)",
              lineHeight: "var(--lh-body)",
              color: "var(--ink)",
            }}
          >
            {lede}
          </p>
        ) : null}
      </div>
      {notes.length ? (
        <div
          className="gf-hero-notes"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11.5,
            fontWeight: "var(--w-meta)" as CSSProperties["fontWeight"],
            lineHeight: 1.8,
            textAlign: "right",
            flex: "none",
            color: "var(--ink)",
          }}
        >
          {notes.map((n, i) => (
            <div key={i}>({n})</div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
