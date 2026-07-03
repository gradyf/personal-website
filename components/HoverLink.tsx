"use client";

import React, { type CSSProperties } from "react";
import Link from "next/link";

/** Mono text link that flips to blue + underline on hover.
    Renders a Next <Link> for internal hrefs, <a> otherwise. */
export function HoverLink({
  href,
  children,
  fontSize = 13,
  baseColor = "var(--ink)",
  underlineOffset = 3,
  style,
}: {
  href: string;
  children: React.ReactNode;
  fontSize?: number;
  baseColor?: string;
  underlineOffset?: number;
  style?: CSSProperties;
}) {
  const [hover, setHover] = React.useState(false);
  const merged: CSSProperties = {
    fontFamily: "var(--font-mono)",
    fontSize,
    color: hover ? "var(--text-accent)" : baseColor,
    textDecoration: hover ? "underline" : "none",
    textUnderlineOffset: underlineOffset,
    transition: "color var(--speed-fast) var(--ease-out)",
    ...style,
  };
  const external = href.startsWith("http");
  const shared = {
    style: merged,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
  };
  return external || href.startsWith("mailto:") ? (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} {...shared}>
      {children}
    </a>
  ) : (
    <Link href={href} {...shared}>
      {children}
    </Link>
  );
}
