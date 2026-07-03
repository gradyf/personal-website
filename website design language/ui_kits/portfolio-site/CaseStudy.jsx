import React from "react";
import { PROJECTS } from "./data.js";
import { Specimen } from "../../components/core/Specimen.jsx";
import { SectionStrip } from "../../components/core/SectionStrip.jsx";
import { Button } from "../../components/core/Button.jsx";
import { LedgerRow } from "../../components/content/LedgerRow.jsx";

function Crumb({ onBack }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onBack && onBack();
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        color: hover ? "var(--text-accent)" : "var(--ink)",
        textDecoration: hover ? "underline" : "none",
        textUnderlineOffset: 3,
        transition: "color var(--speed-fast) var(--ease-out)",
      }}
    >
      ← Index
    </a>
  );
}

export function CaseStudy({ id = "q-learner", onOpen, onBack }) {
  const i = Math.max(0, PROJECTS.findIndex((p) => p.id === id));
  const p = PROJECTS[i];
  const next = PROJECTS[(i + 1) % PROJECTS.length];
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "26px 0 0" }}>
        <Crumb onBack={onBack} />
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: "var(--w-meta)", letterSpacing: "1px", color: "var(--ink-meta)" }}>
          GF-{p.index} · {p.origin} — {p.year}
        </span>
      </div>

      <h1
        style={{
          margin: "20px 0 10px",
          fontFamily: "var(--font-sans)",
          fontSize: "var(--text-hero)",
          fontWeight: 800,
          lineHeight: "var(--lh-display)",
          letterSpacing: "var(--ls-display)",
          color: "var(--ink)",
        }}
      >
        {p.title}
      </h1>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: "var(--w-meta)", letterSpacing: "1px", color: "var(--ink-meta)" }}>{p.meta}</div>

      <div style={{ marginTop: 32 }}>
        <Specimen pattern={p.pattern} height={380} label={p.title} index={p.index} slotId={"shot-" + p.id} />
        <div style={{ marginTop: 8, fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: "var(--w-meta)", letterSpacing: "2px", color: "var(--ink-meta)" }}>
          FIG. {p.index} — DROP A REAL SCREENSHOT ON THE TILE. THE PATTERN STANDS IN.
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 60, marginTop: 44 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {p.body.map((para, k) => (
            <p key={k} style={{ margin: 0, maxWidth: 560, fontFamily: "var(--font-text)", fontSize: 15, lineHeight: 1.7, color: "var(--ink)" }}>
              {para}
            </p>
          ))}
        </div>
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: "var(--w-meta)", letterSpacing: "2px", color: "var(--ink-meta)", marginBottom: 10 }}>INCLUDING</div>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", fontFamily: "var(--font-mono)", fontSize: 13, lineHeight: 2, color: "var(--ink)" }}>
            {p.facts.map((f, k) => (
              <li key={k}>{f}</li>
            ))}
          </ul>
          <div style={{ marginTop: 24 }}>
            {p.origin === "SCHOOL" ? (
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: "var(--w-meta)", letterSpacing: "1px", color: "var(--ink-meta)", lineHeight: 1.9, borderTop: "1px solid var(--line)", paddingTop: 14 }}>
                SOURCE — AVAILABLE UPON REQUEST.
                <br />
                COURSEWORK FALLS UNDER THE HONOR CODE.
              </div>
            ) : (
              <Button variant="outline">View source ↗</Button>
            )}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 56 }}>
        <SectionStrip left="NEXT" right={`GF-${next.index}`} />
        <LedgerRow
          index={next.index}
          title={next.title}
          meta={next.meta}
          year={next.year}
          pattern={next.pattern}
          last
          onClick={() => onOpen && onOpen(next.id)}
        />
      </div>
    </div>
  );
}
