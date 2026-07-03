import React from "react";

export function Tag({ children, active = false, onClick, href }) {
  const [hover, setHover] = React.useState(false);
  const hot = active || hover;
  const style = {
    display: "inline-block",
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    fontWeight: "var(--w-meta)",
    letterSpacing: "1px",
    textTransform: "uppercase",
    lineHeight: 1.2,
    padding: "5px 10px",
    textDecoration: "none",
    cursor: onClick || href ? "pointer" : "default",
    background: "transparent",
    border: hot ? "1px solid var(--blue)" : "1px solid var(--line)",
    color: hot ? "var(--blue)" : "var(--ink-meta)",
    borderRadius: "var(--radius)",
    transition: "border-color var(--speed-fast) var(--ease-out), color var(--speed-fast) var(--ease-out)",
  };
  const El = href ? "a" : "span";
  return (
    <El
      href={href}
      onClick={onClick}
      style={style}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </El>
  );
}
