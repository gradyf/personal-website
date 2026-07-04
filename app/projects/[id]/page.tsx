import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS, getProject, nextProject } from "@/lib/data";
import { Specimen } from "@/components/Specimen";
import { SectionStrip } from "@/components/SectionStrip";
import { Button } from "@/components/Button";
import { LedgerRow } from "@/components/LedgerRow";
import { HoverLink } from "@/components/HoverLink";

const metaStyle: CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: 11,
  fontWeight: "var(--w-meta)" as CSSProperties["fontWeight"],
  letterSpacing: "1px",
  color: "var(--ink-meta)",
};

const microStyle: CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: 10,
  fontWeight: "var(--w-meta)" as CSSProperties["fontWeight"],
  letterSpacing: "2px",
  color: "var(--ink-meta)",
};

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const p = getProject(id);
  if (!p) return {};
  return { title: p.title, description: p.body[0] };
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const p = getProject(id);
  if (!p) notFound();
  const next = nextProject(id);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          padding: "26px 0 0",
        }}
      >
        <HoverLink href="/">← Index</HoverLink>
        <span style={metaStyle}>
          GF-{p.index} · {p.origin} — {p.year}
        </span>
      </div>

      <h1
        style={{
          margin: "20px 0 10px",
          fontFamily: "var(--font-sans)",
          fontSize: "var(--text-hero)",
          fontWeight: 800,
          lineHeight: "var(--lh-display)",
          letterSpacing: "var(--ls-display)",
          color: "var(--ink)",
        }}
      >
        {p.title}
      </h1>
      <div style={metaStyle}>{p.meta}</div>

      <div style={{ marginTop: 32 }}>
        <Specimen pattern={p.pattern} height={380} label={p.title} index={p.index} src={p.src} />
        <div style={{ marginTop: 8, ...microStyle }}>
          FIG. {p.index} — {p.src ? "CAPTURED IN THE WILD." : "REAL SCREENSHOT PENDING. THE PATTERN STANDS IN."}
        </div>
      </div>

      <div
        className="gf-case-grid"
        style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 60, marginTop: 44 }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {p.body.map((para, k) => (
            <p
              key={k}
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
        <div>
          <div style={{ ...microStyle, marginBottom: 10 }}>INCLUDING</div>
          <ul
            style={{
              margin: 0,
              padding: 0,
              listStyle: "none",
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              lineHeight: 2,
              color: "var(--ink)",
            }}
          >
            {p.facts.map((f, k) => (
              <li key={k}>{f}</li>
            ))}
          </ul>
          {p.url ? (
            <div style={{ marginTop: 24 }}>
              <Button variant="outline" href={p.url}>
                Visit the live site ↗
              </Button>
            </div>
          ) : null}
          <div style={{ marginTop: 24 }}>
            {p.source ? (
              <Button variant="outline" href={p.source}>
                View source ↗
              </Button>
            ) : (
              <div
                style={{
                  ...metaStyle,
                  lineHeight: 1.9,
                  borderTop: "1px solid var(--line)",
                  paddingTop: 14,
                }}
              >
                {p.origin === "SCHOOL" ? (
                  <>
                    SOURCE — AVAILABLE UPON REQUEST.
                    <br />
                    COURSEWORK FALLS UNDER THE HONOR CODE.
                  </>
                ) : (
                  <>SOURCE — LINK COMING SOON.</>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 56 }}>
        <SectionStrip left="NEXT" right={`GF-${next.index}`} />
        <LedgerRow
          index={next.index}
          title={next.title}
          meta={next.meta}
          year={next.year}
          pattern={next.pattern}
          src={next.src}
          href={`/projects/${next.id}`}
          last
        />
      </div>
      <div style={{ height: 44 }} />
    </div>
  );
}
