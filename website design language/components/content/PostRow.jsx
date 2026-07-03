import React from "react";

export function PostRow({ date, title, readTime, href, onClick, last = false }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "110px 1fr 90px",
        alignItems: "baseline",
        gap: 20,
        padding: "16px 4px",
        borderBottom: last ? "1px solid var(--line-strong)" : "1px solid var(--line)",
        background: hover ? "var(--bg-hover)" : "transparent",
        textDecoration: "none",
        cursor: "pointer",
        transition: "background var(--speed) var(--ease-out)",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          fontWeight: "var(--w-meta)",
          letterSpacing: "1px",
          textTransform: "uppercase",
          color: "var(--ink-meta)",
        }}
      >
        {date}
      </span>
      <span
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "var(--text-h3)",
          fontWeight: 600,
          color: hover ? "var(--text-accent)" : "var(--ink)",
          transition: "color var(--speed) var(--ease-out)",
        }}
      >
        {title}
      </span>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          fontWeight: "var(--w-meta)",
          letterSpacing: "1px",
          textTransform: "uppercase",
          color: "var(--ink-meta)",
          textAlign: "right",
        }}
      >
        {readTime}
      </span>
    </a>
  );
}
