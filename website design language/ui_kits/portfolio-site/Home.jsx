import React from "react";
import { PROJECTS, CATS } from "./data.js";
import { PageHero } from "../../components/content/PageHero.jsx";
import { LedgerRow } from "../../components/content/LedgerRow.jsx";
import { SectionStrip } from "../../components/core/SectionStrip.jsx";
import { Tag } from "../../components/core/Tag.jsx";

export function Home({ onOpen, onNav }) {
  const [filter, setFilter] = React.useState("all");
  const rows = PROJECTS.filter((p) => filter === "all" || p.cat === filter);
  return (
    <div>
      <PageHero
        title="Projects, concepts &"
        accent="other evidence."
        lede="Agents that learn, controllers that settle, small tools for large rabbit holes. Built at school and after hours with Claude Code."
        notes={["PORTFOLIO, V1", "LIGHT ONLY", "BLOG: SOON-ISH"]}
      />
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", padding: "0 0 14px" }}>
        {CATS.map((c) => (
          <Tag key={c.key} active={filter === c.key} onClick={() => setFilter(c.key)}>
            {c.label}
          </Tag>
        ))}
      </div>
      <SectionStrip left="SELECTED WORK" right={`${String(rows.length).padStart(2, "0")} ENTRIES — 2024 → NOW`} />
      <div>
        {rows.map((p, i) => (
          <LedgerRow
            key={p.id}
            index={p.index}
            title={p.title}
            meta={p.meta}
            year={p.year}
            pattern={p.pattern}
            slotId={"shot-" + p.id}
            last={i === rows.length - 1}
            onClick={() => onOpen && onOpen(p.id)}
          />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 60, padding: "36px 0 44px" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: "var(--w-meta)", lineHeight: 2, color: "var(--ink)" }}>
          ELSEWHERE:{" "}
          <a href="#" onClick={(e) => e.preventDefault()} style={{ color: "var(--text-accent)" }}>
            GitHub ↗
          </a>{" "}
          ·{" "}
          <a href="#" onClick={(e) => e.preventDefault()} style={{ color: "var(--text-accent)" }}>
            LinkedIn ↗
          </a>{" "}
          ·{" "}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNav && onNav("contact");
            }}
            style={{ color: "var(--text-accent)" }}
          >
            hello@grayforrester.com
          </a>
        </div>
        <p
          style={{
            margin: 0,
            maxWidth: 400,
            fontFamily: "var(--font-text)",
            fontSize: 13.5,
            lineHeight: 1.6,
            color: "var(--ink-meta)",
            textAlign: "right",
          }}
        >
          The blog opens when there’s something worth reading. Soon-ish.
        </p>
      </div>
    </div>
  );
}
