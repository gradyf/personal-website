import React from "react";

const LINKS = [
  { key: "index", label: "Index." },
  { key: "about", label: "About." },
  { key: "cv", label: "CV." },
  { key: "blog", label: "Blog." },
  { key: "contact", label: "Contact." },
];

function NavLink({ label, active, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        if (onClick) onClick();
      }}
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
    </a>
  );
}

export function SiteHeader({ active = "index", onNav, name = "Gray Forrester", links }) {
  const items = links || LINKS;
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        gap: 24,
        padding: "22px 0",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          if (onNav) onNav("index");
        }}
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
      </a>
      <div style={{ display: "flex", gap: 28 }}>
        {items.map((l) => (
          <NavLink key={l.key} label={l.label} active={active === l.key} onClick={() => onNav && onNav(l.key)} />
        ))}
      </div>
    </nav>
  );
}
