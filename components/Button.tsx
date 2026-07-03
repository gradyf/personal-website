"use client";

import React, { type CSSProperties } from "react";

export function Button({
  children = "See it now",
  href,
  onClick,
  variant = "solid",
  size = "md",
}: {
  children?: React.ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler;
  variant?: "solid" | "outline" | "blue";
  size?: "sm" | "md";
}) {
  const [hover, setHover] = React.useState(false);
  const base: CSSProperties = {
    display: "inline-block",
    fontFamily: "var(--font-sans)",
    fontWeight: 800,
    fontSize: size === "sm" ? 12 : 13,
    letterSpacing: "1px",
    textTransform: "uppercase",
    lineHeight: 1.2,
    padding: size === "sm" ? "8px 16px" : "12px 22px",
    textDecoration: "none",
    cursor: "pointer",
    borderRadius: "var(--radius)",
    transition:
      "background var(--speed-fast) var(--ease-out), color var(--speed-fast) var(--ease-out)",
  };
  const variants: Record<string, CSSProperties> = {
    solid: hover
      ? { border: "2px solid var(--ink)", background: "transparent", color: "var(--ink)" }
      : { border: "2px solid var(--ink)", background: "var(--ink)", color: "var(--paper)" },
    outline: hover
      ? { border: "2px solid var(--ink)", background: "var(--ink)", color: "var(--paper)" }
      : { border: "2px solid var(--ink)", background: "transparent", color: "var(--ink)" },
    blue: hover
      ? { border: "2px solid var(--blue)", background: "transparent", color: "var(--blue)" }
      : { border: "2px solid var(--blue)", background: "var(--blue)", color: "var(--paper)" },
  };
  const style = { ...base, ...(variants[variant] || variants.solid) };
  const shared = {
    onClick,
    style,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
  };
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" {...shared}>
      {children}
    </a>
  ) : (
    <button {...shared}>{children}</button>
  );
}
