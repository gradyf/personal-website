import React from "react";
import { PageHero } from "../../components/content/PageHero.jsx";
import { SectionStrip } from "../../components/core/SectionStrip.jsx";

export function Blog({ onNav }) {
  return (
    <div>
      <PageHero
        title="Writing,"
        accent="eventually."
        lede="The blog opens when there’s something worth reading. Until then, the projects will have to speak — they’ve been coached."
      />
      <SectionStrip left="POSTS" right="00 — RESERVED" />
      <div
        style={{
          margin: "24px 0 16px",
          border: "2px dashed var(--line)",
          minHeight: 180,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            fontWeight: "var(--w-meta)",
            letterSpacing: "2px",
            color: "var(--ink-meta)",
            textAlign: "center",
            lineHeight: 2,
          }}
        >
          SPACE RESERVED
          <br />
          —
          <br />
          FIRST POST
        </span>
      </div>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: "var(--w-meta)", letterSpacing: "2px", color: "var(--ink-meta)", paddingBottom: 44 }}>
        RSS WILL EXIST. PROMISE.
      </div>
    </div>
  );
}
