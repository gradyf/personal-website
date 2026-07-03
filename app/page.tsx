import type { CSSProperties } from "react";
import { PageHero } from "@/components/PageHero";
import { HomeLedger } from "@/components/HomeLedger";
import { HoverLink } from "@/components/HoverLink";
import { SITE } from "@/lib/data";

export default function Home() {
  return (
    <div>
      <PageHero
        title="Projects, concepts &"
        accent="other evidence."
        lede="Agents that learn, controllers that settle, small tools for large rabbit holes. Built at school and after hours with Claude Code."
        notes={["PORTFOLIO, V1", "LIGHT ONLY", "BLOG: SOON-ISH"]}
      />
      <HomeLedger />
      <div
        className="gf-split"
        style={{ display: "flex", justifyContent: "space-between", gap: 60, padding: "36px 0 44px" }}
      >
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            fontWeight: "var(--w-meta)" as CSSProperties["fontWeight"],
            lineHeight: 2,
            color: "var(--ink)",
          }}
        >
          ELSEWHERE:{" "}
          <HoverLink href={SITE.github || "/contact"} baseColor="var(--text-accent)" fontSize={12}>
            GitHub ↗
          </HoverLink>{" "}
          ·{" "}
          <HoverLink href={SITE.linkedin || "/contact"} baseColor="var(--text-accent)" fontSize={12}>
            LinkedIn ↗
          </HoverLink>{" "}
          ·{" "}
          <HoverLink href={`mailto:${SITE.email}`} baseColor="var(--text-accent)" fontSize={12}>
            {SITE.email}
          </HoverLink>
        </div>
        <p
          className="gf-split-right"
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
