import type { CSSProperties } from "react";
import { PageHero } from "@/components/PageHero";
import { SectionStrip } from "@/components/SectionStrip";
import { LedgerRow } from "@/components/LedgerRow";
import { HoverLink } from "@/components/HoverLink";
import { SITE, SCHOOL_PROJECTS, PLAY_PROJECTS } from "@/lib/data";

const prose: CSSProperties = {
  margin: 0,
  maxWidth: 560,
  fontFamily: "var(--font-text)",
  fontSize: 15,
  lineHeight: 1.7,
  color: "var(--ink)",
};

const micro: CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: 10,
  fontWeight: "var(--w-meta)" as CSSProperties["fontWeight"],
  letterSpacing: "2px",
  textTransform: "uppercase",
  color: "var(--ink-meta)",
};

function SectionLede({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        margin: 0,
        maxWidth: 560,
        padding: "16px 0 10px",
        fontFamily: "var(--font-text)",
        fontSize: 13.5,
        lineHeight: 1.6,
        color: "var(--ink-meta)",
      }}
    >
      {children}
    </p>
  );
}

export default function Home() {
  let rise = 0;
  const nextRise = () => 0.1 + rise++ * 0.12;
  return (
    <div>
      <PageHero
        title="Projects, concepts &"
        accent="other evidence."
        lede="Agents that learn, controllers that settle, small tools for large rabbit holes. Built at work, at school, and after hours with Claude Code."
        notes={["WORK · SCHOOL · PLAY", "LIGHT ONLY", "BLOG: SOON-ISH"]}
      />

      <SectionStrip left="WORK" right="DELOITTE · CONVERGEHEALTH" />
      <div style={{ padding: "22px 0 14px", display: "flex", flexDirection: "column", gap: 14 }}>
        <p style={prose}>
          By day I’m a product owner and forward-deployed engineer at Deloitte —
          ConvergeHealth, the arm that ships software into healthcare revenue
          cycle. I’m helping build an agentic platform there: AI agents doing
          real work in a domain where “mostly right” is not a feature. The job
          is half product judgment, half deployment plumbing — I like both
          halves.
        </p>
        <div style={{ ...micro, paddingBottom: 26 }}>
          AGENTIC PLATFORM · HEALTHCARE REVENUE CYCLE · HUMANS IN THE LOOP
        </div>
      </div>

      <SectionStrip left="SCHOOL" right="M.S. COMPUTER SCIENCE" />
      <SectionLede>
        Coursework that got out of hand — agents, controllers, and one
        job-hunting app. Write-ups are public; source stays behind the honor
        code, available on request.
      </SectionLede>
      <div style={{ paddingBottom: 34 }}>
        {SCHOOL_PROJECTS.map((p, i) => (
          <LedgerRow
            key={p.id}
            index={p.index}
            title={p.title}
            meta={p.meta}
            year={p.year}
            pattern={p.pattern}
            src={p.src}
            href={`/projects/${p.id}`}
            last={i === SCHOOL_PROJECTS.length - 1}
            riseDelay={nextRise()}
          />
        ))}
      </div>

      <SectionStrip left="PLAY" right="LIVE — BUILT WITH CLAUDE CODE" />
      <SectionLede>
        After-hours tools, each solving a real problem in my apartment. Both
        are live — the rows link out, the write-ups live{" "}
        <HoverLink href={`/projects/${PLAY_PROJECTS[0].id}`} baseColor="var(--text-accent)" fontSize={13.5} style={{ fontFamily: "var(--font-text)" }}>
          here
        </HoverLink>
        .
      </SectionLede>
      <div>
        {PLAY_PROJECTS.map((p, i) => (
          <LedgerRow
            key={p.id}
            index={p.index}
            title={p.title}
            meta={p.meta}
            year={p.year}
            pattern={p.pattern}
            src={p.src}
            href={p.url || `/projects/${p.id}`}
            external={Boolean(p.url)}
            last={i === PLAY_PROJECTS.length - 1}
            riseDelay={nextRise()}
          />
        ))}
      </div>

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
