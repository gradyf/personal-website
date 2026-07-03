import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionStrip } from "@/components/SectionStrip";

export const metadata: Metadata = {
  title: "Blog",
  description: "The blog opens when there’s something worth reading. Soon-ish.",
};

const micro: CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: 10,
  fontWeight: "var(--w-meta)" as CSSProperties["fontWeight"],
  letterSpacing: "2px",
  color: "var(--ink-meta)",
};

export default function Blog() {
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
            fontWeight: "var(--w-meta)" as CSSProperties["fontWeight"],
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
      <div style={{ ...micro, paddingBottom: 44 }}>RSS WILL EXIST. PROMISE.</div>
    </div>
  );
}
