import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionStrip } from "@/components/SectionStrip";
import { HoverLink } from "@/components/HoverLink";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Product owner / forward-deployed engineer by day, CS student by night.",
};

export default function About() {
  return (
    <div>
      <PageHero
        title="Hello — I’m"
        accent="Gray."
        lede="Product owner / forward-deployed engineer by day, CS student by night. I like problems with feedback loops: agents, controllers, catalogs, and the occasional rabbit hole."
        notes={["NOW — PO / FDE @ DELOITTE", "ALSO — CS STUDENT", "INTO — RL · ROBOTICS · MUSIC"]}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: 18, paddingBottom: 44 }}>
        <p
          style={{
            margin: 0,
            maxWidth: 560,
            fontFamily: "var(--font-text)",
            fontSize: 15,
            lineHeight: 1.7,
            color: "var(--ink)",
          }}
        >
          By day I’m a product owner and forward-deployed engineer at Deloitte —
          ConvergeHealth’s software development arm — building an agentic platform
          for healthcare revenue cycle. By night, this site: coursework that got
          out of hand, and personal tools made with Claude Code that solved a real
          problem in my apartment (usually the CD shelf).
        </p>
        <p
          style={{
            margin: 0,
            maxWidth: 560,
            fontFamily: "var(--font-text)",
            fontSize: 15,
            lineHeight: 1.7,
            color: "var(--ink)",
          }}
        >
          I care about work that can be inspected: plots over adjectives, demos over
          decks. School projects respect the honor code — source available upon
          request, happily walked through.
        </p>
      </div>
      <SectionStrip left="CONTACT" right="ONE INBOX, CHECKED OFTEN" />
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
          Recruiters: the CV is one tab over.
        </span>
      </div>
    </div>
  );
}
