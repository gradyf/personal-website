import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionStrip } from "@/components/SectionStrip";
import { HoverLink } from "@/components/HoverLink";
import { SITE, ABOUT } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Product owner / forward-deployed engineer by day, CS student by night.",
};

export default function About() {
  return (
    <div>
      <PageHero
        title={ABOUT.heroTitle}
        accent={ABOUT.heroAccent}
        lede={ABOUT.heroLede}
        notes={ABOUT.notes}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: 18, paddingBottom: 44 }}>
        {ABOUT.paragraphs.map((para, i) => (
          <p
            key={i}
            style={{
              margin: 0,
              maxWidth: 560,
              fontFamily: "var(--font-text)",
              fontSize: 15,
              lineHeight: 1.7,
              color: "var(--ink)",
            }}
          >
            {para}
          </p>
        ))}
      </div>
      <SectionStrip left="CONTACT" right={ABOUT.contactStripRight} />
      <div
        className="gf-split"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          gap: 40,
          padding: "24px 0 44px",
        }}
      >
        <div style={{ display: "flex", gap: 28, flexWrap: "wrap", fontFamily: "var(--font-mono)", fontSize: 13 }}>
          <HoverLink href={`mailto:${SITE.email}`} baseColor="var(--text-accent)">
            {SITE.email}
          </HoverLink>
          <HoverLink href={SITE.github || "/contact"} baseColor="var(--text-accent)">
            GitHub ↗
          </HoverLink>
          <HoverLink href={SITE.linkedin || "/contact"} baseColor="var(--text-accent)">
            LinkedIn ↗
          </HoverLink>
        </div>
        <span
          className="gf-split-right"
          style={{ fontFamily: "var(--font-text)", fontSize: 13.5, color: "var(--ink-meta)" }}
        >
          {ABOUT.asideNote}
        </span>
      </div>
    </div>
  );
}
