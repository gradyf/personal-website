"use client";

import React, { type CSSProperties } from "react";

export function Tag({
  children,
  active = false,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: React.MouseEventHandler;
}) {
  const [hover, setHover] = React.useState(false);
  const hot = active || hover;
  const style: CSSProperties = {
    display: "inline-block",
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    fontWeight: "var(--w-meta)" as CSSProperties["fontWeight"],
    letterSpacing: "1px",
    textTransform: "uppercase",
    lineHeight: 1.2,
    padding: "5px 10px",
    textDecoration: "none",
    cursor: onClick ? "pointer" : "default",
    background: "transparent",
    border: hot ? "1px solid var(--blue)" : "1px solid var(--line)",
    color: hot ? "var(--blue)" : "var(--ink-meta)",
    borderRadius: "var(--radius)",
    transition:
      "border-color var(--speed-fast) var(--ease-out), color var(--speed-fast) var(--ease-out)",
  };
  const shared = {
    style,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
  };
  return onClick ? (
    <button onClick={onClick} {...shared}>
      {children}
    </button>
  ) : (
    <span {...shared}>{children}</span>
  );
}
