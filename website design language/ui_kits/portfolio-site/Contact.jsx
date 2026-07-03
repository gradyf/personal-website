import React from "react";
import { PageHero } from "../../components/content/PageHero.jsx";

function BigLink({ children }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href="#"
      onClick={(e) => e.preventDefault()}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: 26,
        color: "var(--text-accent)",
        textDecoration: hover ? "underline" : "none",
        textUnderlineOffset: 5,
      }}
    >
      {children}
    </a>
  );
}

export function Contact({ onNav }) {
  return (
    <div>
      <PageHero title="Say" accent="hello." lede="One inbox, checked often. Recruiters, collaborators, and people with strong opinions about CD shelving all welcome." />
      <div style={{ display: "flex", flexDirection: "column", gap: 20, padding: "8px 0 56px" }}>
        <BigLink>hello@grayforrester.com</BigLink>
        <div style={{ display: "flex", gap: 28, fontFamily: "var(--font-mono)", fontSize: 13 }}>
          <a href="#" onClick={(e) => e.preventDefault()} style={{ color: "var(--ink)" }}>GitHub ↗</a>
          <a href="#" onClick={(e) => e.preventDefault()} style={{ color: "var(--ink)" }}>LinkedIn ↗</a>
        </div>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: "var(--w-meta)", letterSpacing: "2px", color: "var(--ink-meta)" }}>
          ADDRESS IS A PLACEHOLDER — POINT IT AT THE REAL INBOX.
        </span>
      </div>
    </div>
  );
}
