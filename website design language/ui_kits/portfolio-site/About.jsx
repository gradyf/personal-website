import React from "react";
import { PageHero } from "../../components/content/PageHero.jsx";
import { SectionStrip } from "../../components/core/SectionStrip.jsx";

export function About({ onNav }) {
  return (
    <div>
      <PageHero
        title="Hello — I’m"
        accent="Gray."
        lede="Product owner / forward-deployed engineer by day, CS student by night. I like problems with feedback loops: agents, controllers, catalogs, and the occasional rabbit hole."
        notes={["NOW — PO / FDE @ DELOITTE", "ALSO — CS STUDENT", "INTO — RL · ROBOTICS · MUSIC"]}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: 18, paddingBottom: 44 }}>
        <p style={{ margin: 0, maxWidth: 560, fontFamily: "var(--font-text)", fontSize: 15, lineHeight: 1.7, color: "var(--ink)" }}>
          By day I’m a product owner and forward-deployed engineer at Deloitte —
          ConvergeHealth’s software development arm — building an agentic platform
          for healthcare revenue cycle. By night, this site: coursework that got
          out of hand, and personal tools made with Claude Code that solved a real
          problem in my apartment (usually the CD shelf).
        </p>
        <p style={{ margin: 0, maxWidth: 560, fontFamily: "var(--font-text)", fontSize: 15, lineHeight: 1.7, color: "var(--ink)" }}>
          I care about work that can be inspected: plots over adjectives, demos over
          decks. School projects respect the honor code — source available upon
          request, happily walked through.
        </p>
      </div>
      <SectionStrip left="CONTACT" right="ONE INBOX, CHECKED OFTEN" />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 40, padding: "24px 0 44px" }}>
        <div style={{ display: "flex", gap: 28, fontFamily: "var(--font-mono)", fontSize: 13 }}>
          <a href="#" onClick={(e) => e.preventDefault()} style={{ color: "var(--text-accent)" }}>hello@grayforrester.com</a>
          <a href="#" onClick={(e) => e.preventDefault()} style={{ color: "var(--text-accent)" }}>GitHub ↗</a>
          <a href="#" onClick={(e) => e.preventDefault()} style={{ color: "var(--text-accent)" }}>LinkedIn ↗</a>
        </div>
        <span style={{ fontFamily: "var(--font-text)", fontSize: 13.5, color: "var(--ink-meta)" }}>
          Recruiters: the CV is one tab over.
        </span>
      </div>
    </div>
  );
}
