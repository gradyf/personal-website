import React from "react";

export function SiteFooter({ left = "© 2026 GRAY FORRESTER", right = "DROP ME A LINE", onRight }) {
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
        fontWeight: "var(--w-meta)",
        letterSpacing: "1px",
        textTransform: "uppercase",
        color: "var(--ink)",
      }}
    >
      <span>{left}</span>
      {onRight ? (
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onRight();
          }}
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
        </a>
      ) : (
        <span>{right}</span>
      )}
    </div>
  );
}
