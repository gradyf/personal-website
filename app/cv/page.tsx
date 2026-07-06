import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionStrip } from "@/components/SectionStrip";
import { Tag } from "@/components/Tag";
import { CV } from "@/lib/content";

export const metadata: Metadata = {
  title: "CV",
  description: "Curriculum vitae — education, experience, and tools actually used.",
};

const monoMeta: CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: 11,
  fontWeight: "var(--w-meta)" as CSSProperties["fontWeight"],
  letterSpacing: "1px",
  color: "var(--ink-meta)",
};

function CVRow({
  span,
  title,
  sub,
  right,
  last,
}: {
  span: string;
  title: string;
  sub?: string;
  right?: string;
  last?: boolean;
}) {
  return (
    <div
      className="gf-cv-row"
      style={{
        display: "grid",
        gridTemplateColumns: "150px 1fr 90px",
        gap: 20,
        alignItems: "baseline",
        padding: "16px 4px",
        borderBottom: last ? "1px solid var(--line-strong)" : "1px solid var(--line)",
      }}
    >
      <span style={monoMeta}>{span}</span>
      <span style={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 18, fontWeight: 600, color: "var(--ink)" }}>
          {title}
        </span>
        {sub ? <span style={{ ...monoMeta, textTransform: "uppercase" }}>{sub}</span> : null}
      </span>
      <span className="gf-cv-row-right" style={{ ...monoMeta, textAlign: "right" }}>
        {right}
      </span>
    </div>
  );
}

export default function Resume() {
  return (
    <div>
      <PageHero title="Curriculum" accent="vitae." lede={CV.lede} />

      <SectionStrip left="EDUCATION" />
      {CV.education.map((row, i) => (
        <CVRow
          key={i}
          span={row.span}
          title={row.title}
          sub={row.sub}
          right={row.right}
          last={i === CV.education.length - 1}
        />
      ))}

      <div style={{ height: 28 }} />
      <SectionStrip left="EXPERIENCE" />
      {CV.experience.map((row, i) => (
        <CVRow
          key={i}
          span={row.span}
          title={row.title}
          sub={row.sub}
          right={row.right}
          last={i === CV.experience.length - 1}
        />
      ))}

      <div style={{ height: 28 }} />
      <SectionStrip left="SKILLS" right="TOOLS I ACTUALLY USE" />
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", padding: "18px 0 40px" }}>
        {CV.skills.map((skill) => (
          <Tag key={skill}>{skill}</Tag>
        ))}
      </div>

      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          fontWeight: "var(--w-meta)" as CSSProperties["fontWeight"],
          letterSpacing: "2px",
          color: "var(--ink-meta)",
          paddingBottom: 44,
        }}
      >
        {CV.footnote}
      </div>
    </div>
  );
}
