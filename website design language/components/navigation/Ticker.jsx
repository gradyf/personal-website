import React from "react";

export function Ticker({
  text = "GRAY FORRESTER — PORTFOLIO OF IDEAS, PROJECTS & OTHER EVIDENCE — EST. 2026",
  tone = "ink",
  duration,
}) {
  const color = tone === "blue" ? "var(--blue)" : "var(--ink)";
  const border = tone === "blue" ? "1px solid var(--blue)" : "1px solid var(--line-strong)";
  const phrase = (text + " — ").repeat(2);
  const anim = duration ? `gf-marquee ${duration}s linear infinite` : "gf-marquee var(--ticker-duration) linear infinite";
  const span = {
    paddingRight: 48,
    whiteSpace: "nowrap",
  };
  return (
    <div style={{ borderTop: border, borderBottom: border, overflow: "hidden", padding: "8px 0" }}>
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: anim,
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          fontWeight: "var(--w-meta)",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          color,
        }}
      >
        <span style={span}>{phrase}</span>
        <span style={span}>{phrase}</span>
      </div>
    </div>
  );
}
