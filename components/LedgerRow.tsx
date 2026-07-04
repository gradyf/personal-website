"use client";

import React, { type CSSProperties } from "react";
import Link from "next/link";
import { Specimen } from "./Specimen";

export function LedgerRow({
  index = "01",
  title,
  meta,
  year,
  pattern = "grid",
  src,
  href,
  external = false,
  last = false,
  riseDelay,
}: {
  index?: string;
  title: string;
  meta?: string;
  year?: string;
  pattern?: string;
  src?: string;
  href: string;
  /** External link — opens in a new tab and swaps the arrow for ↗. */
  external?: boolean;
  last?: boolean;
  /** Optional gf-rise entrance stagger in seconds — index page only. */
  riseDelay?: number;
}) {
  const [hover, setHover] = React.useState(false);
  const flip = hover ? "var(--text-accent)" : "var(--ink)";
  const El: React.ElementType = external ? "a" : Link;
  return (
    <El
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={`gf-ledger-row${riseDelay !== undefined ? " gf-rise" : ""}`}
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
        ...(riseDelay !== undefined ? { animationDelay: `${riseDelay}s` } : {}),
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 13,
          fontWeight: "var(--w-meta)" as CSSProperties["fontWeight"],
          color: "var(--text-accent)",
        }}
      >
        {index}
      </span>
      <span className="gf-ledger-thumb">
        <Specimen pattern={pattern} src={src} height="var(--thumb-h)" />
      </span>
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
            fontWeight: "var(--w-meta)" as CSSProperties["fontWeight"],
            letterSpacing: "1px",
            textTransform: "uppercase",
            color: "var(--ink-meta)",
          }}
        >
          {meta}
        </span>
      </span>
      <span
        className="gf-ledger-year"
        style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ink-meta)" }}
      >
        {year}
      </span>
      <span
        style={{
          fontSize: 20,
          textAlign: "right",
          fontFamily: "var(--font-sans)",
          color: flip,
          transition: "color var(--speed) var(--ease-out)",
        }}
      >
        {external ? "↗" : "→"}
      </span>
    </El>
  );
}
