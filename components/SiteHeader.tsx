"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Index." },
  { href: "/about", label: "About." },
  { href: "/cv", label: "CV." },
  { href: "/blog", label: "Blog." },
  { href: "/contact", label: "Contact." },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/" || pathname.startsWith("/projects");
  return pathname === href || pathname.startsWith(href + "/");
}

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  const [hover, setHover] = React.useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-nav)",
        color: active || hover ? "var(--text-accent)" : "var(--ink)",
        textDecoration: active ? "underline" : "none",
        textUnderlineOffset: 3,
        transition: "color var(--speed-fast) var(--ease-out)",
      }}
    >
      {label}
    </Link>
  );
}

export function SiteHeader({ name = "Gray Forrester" }: { name?: string }) {
  const pathname = usePathname();
  return (
    <nav
      className="gf-header"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        gap: 24,
        padding: "22px 0",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 800,
          fontSize: 18,
          letterSpacing: ".5px",
          textTransform: "uppercase",
          color: "var(--ink)",
          textDecoration: "none",
        }}
      >
        {name}
      </Link>
      <div className="gf-header-links" style={{ display: "flex", gap: 28 }}>
        {LINKS.map((l) => (
          <NavLink key={l.href} href={l.href} label={l.label} active={isActive(pathname, l.href)} />
        ))}
      </div>
    </nav>
  );
}
