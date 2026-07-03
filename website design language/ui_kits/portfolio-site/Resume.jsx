import React from "react";
import { PageHero } from "../../components/content/PageHero.jsx";
import { SectionStrip } from "../../components/core/SectionStrip.jsx";
import { Button } from "../../components/core/Button.jsx";
import { Tag } from "../../components/core/Tag.jsx";

function CVRow({ span, title, sub, right, last }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "150px 1fr 90px",
        gap: 20,
        alignItems: "baseline",
        padding: "16px 4px",
        borderBottom: last ? "1px solid var(--line-strong)" : "1px solid var(--line)",
      }}
    >
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: "var(--w-meta)", letterSpacing: "1px", color: "var(--ink-meta)" }}>{span}</span>
      <span style={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 18, fontWeight: 600, color: "var(--ink)" }}>{title}</span>
        {sub ? (
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: "var(--w-meta)", letterSpacing: "1px", textTransform: "uppercase", color: "var(--ink-meta)" }}>
            {sub}
          </span>
        ) : null}
      </span>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: "var(--w-meta)", color: "var(--ink-meta)", textAlign: "right" }}>{right}</span>
    </div>
  );
}

export function Resume({ onNav }) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 40 }}>
        <PageHero title="Curriculum" accent="vitae." lede="The formal version. Real dates, schools and employers go here — this page is the template." />
        <div style={{ padding: "0 0 44px", flex: "none" }}>
          <Button variant="outline">Download PDF</Button>
        </div>
      </div>

      <SectionStrip left="EDUCATION" />
      <CVRow span="2024 → NOW" title="M.S. Computer Science — [University]" sub="COURSEWORK: RL · ROBOTICS · MOBILE DEV" right="[GPA]" />
      <CVRow span="20XX → 2024" title="B.S. — [University]" sub="[MAJOR · HONORS]" right="" last />

      <div style={{ height: 28 }}></div>
      <SectionStrip left="EXPERIENCE" />
      <CVRow span="NOW" title="Product Owner / FDE — Deloitte, ConvergeHealth" sub="AGENTIC PLATFORM · HEALTHCARE REVENUE CYCLE" right="[CITY]" />
      <CVRow span="[DATES]" title="[Role] — [Company]" sub="REPLACE WITH TWO REAL BULLETS, MAX" right="[CITY]" last />

      <div style={{ height: 28 }}></div>
      <SectionStrip left="SKILLS" right="TOOLS I ACTUALLY USE" />
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", padding: "18px 0 40px" }}>
        <Tag>Python</Tag><Tag>NumPy</Tag><Tag>Kotlin</Tag><Tag>Android</Tag><Tag>C++</Tag><Tag>SQL</Tag><Tag>Git</Tag><Tag>Claude Code</Tag>
      </div>

      <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: "var(--w-meta)", letterSpacing: "2px", color: "var(--ink-meta)", paddingBottom: 44 }}>
        TEMPLATE — BRACKETED FIELDS AWAIT REAL FACTS.
      </div>
    </div>
  );
}
