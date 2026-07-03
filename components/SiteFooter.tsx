"use client";

import React, { type CSSProperties } from "react";
import Link from "next/link";

export function SiteFooter({
  left = "© 2026 GRAY FORRESTER",
  right = "DROP ME A LINE",
}: {
  left?: string;
  right?: string;
}) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      style={{
        borderTop: "1px solid var(--line-strong)",
        padding: "10px 0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        gap: 24,
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        fontWeight: "var(--w-meta)" as CSSProperties["fontWeight"],
        letterSpacing: "1px",
        textTransform: "uppercase",
        color: "var(--ink)",
      }}
    >
      <span>{left}</span>
      <Link
        href="/contact"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          color: hover ? "var(--text-accent)" : "var(--ink)",
          textDecoration: hover ? "underline" : "none",
          textUnderlineOffset: 3,
          transition: "color var(--speed-fast) var(--ease-out)",
        }}
      >
        {right}
      </Link>
    </div>
  );
}
