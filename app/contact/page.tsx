import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { HoverLink } from "@/components/HoverLink";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "One inbox, checked often.",
};

export default function Contact() {
  return (
    <div>
      <PageHero
        title="Say"
        accent="hello."
        lede="One inbox, checked often. Recruiters, collaborators, and people with strong opinions about CD shelving all welcome."
      />
      <div style={{ display: "flex", flexDirection: "column", gap: 20, padding: "8px 0 56px" }}>
        <HoverLink
          href={`mailto:${SITE.email}`}
          fontSize={26}
          baseColor="var(--text-accent)"
          underlineOffset={5}
          style={{ overflowWrap: "anywhere" }}
        >
          <span className="gf-biglink">{SITE.email}</span>
        </HoverLink>
        <div style={{ display: "flex", gap: 28, fontFamily: "var(--font-mono)", fontSize: 13 }}>
          <HoverLink href={SITE.github || "/"}>GitHub ↗</HoverLink>
          <HoverLink href={SITE.linkedin || "/"}>LinkedIn ↗</HoverLink>
        </div>
      </div>
    </div>
  );
}
