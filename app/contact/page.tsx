import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { HoverLink } from "@/components/HoverLink";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "One inbox, checked often.",
};

export default function Contact() {
  return (
    <div>
      <PageHero
        title={SITE.contact.heroTitle}
        accent={SITE.contact.heroAccent}
        lede={SITE.contact.heroLede}
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
          {SITE.github ? <HoverLink href={SITE.github}>GitHub ↗</HoverLink> : null}
          {SITE.linkedin ? <HoverLink href={SITE.linkedin}>LinkedIn ↗</HoverLink> : null}
        </div>
      </div>
    </div>
  );
}
