"use client";

import React from "react";
import { CATS, PROJECTS } from "@/lib/data";
import { Tag } from "./Tag";
import { SectionStrip } from "./SectionStrip";
import { LedgerRow } from "./LedgerRow";

export function HomeLedger() {
  const [filter, setFilter] = React.useState("all");
  const rows = PROJECTS.filter((p) => filter === "all" || p.cat === filter);
  return (
    <>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", padding: "0 0 14px" }}>
        {CATS.map((c) => (
          <Tag key={c.key} active={filter === c.key} onClick={() => setFilter(c.key)}>
            {c.label}
          </Tag>
        ))}
      </div>
      <SectionStrip
        left="SELECTED WORK"
        right={`${String(rows.length).padStart(2, "0")} ENTRIES — 2024 → NOW`}
      />
      <div>
        {rows.map((p, i) => (
          <LedgerRow
            key={p.id}
            index={p.index}
            title={p.title}
            meta={p.meta}
            year={p.year}
            pattern={p.pattern}
            src={p.src}
            href={`/projects/${p.id}`}
            last={i === rows.length - 1}
            riseDelay={0.1 + i * 0.12}
          />
        ))}
      </div>
    </>
  );
}
