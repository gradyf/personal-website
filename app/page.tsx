import type { CSSProperties } from "react";
import { PageHero } from "@/components/PageHero";
import { SectionStrip } from "@/components/SectionStrip";
import { LedgerRow } from "@/components/LedgerRow";
import { HoverLink } from "@/components/HoverLink";
import { SITE, SCHOOL_PROJECTS, PLAY_PROJECTS } from "@/lib/content";

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
  const { home } = SITE;
  let rise = 0;
  const nextRise = () => 0.1 + rise++ * 0.12;
  return (
    <div>
      <PageHero
        title={home.heroTitle}
        accent={home.heroAccent}
        lede={home.heroLede}
        notes={home.heroNotes}
      />

      <SectionStrip left="WORK" right={home.work.stripRight} />
      <div style={{ padding: "22px 0 14px", display: "flex", flexDirection: "column", gap: 14 }}>
        {home.work.body.map((para, i) => (
          <p key={i} style={prose}>
            {para}
          </p>
        ))}
        <div style={{ ...micro, paddingBottom: 26 }}>{home.work.micro}</div>
      </div>

      <SectionStrip left="SCHOOL" right={home.school.stripRight} />
      <SectionLede>{home.school.lede}</SectionLede>
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

      <SectionStrip left="PLAY" right={home.play.stripRight} />
      <SectionLede>
        {home.play.lede} The write-ups live{" "}
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
          {home.blogNote}
        </p>
      </div>
    </div>
  );
}
