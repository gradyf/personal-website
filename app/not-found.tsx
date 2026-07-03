import { PageHero } from "@/components/PageHero";
import { SectionStrip } from "@/components/SectionStrip";
import { HoverLink } from "@/components/HoverLink";

export default function NotFound() {
  return (
    <div>
      <PageHero
        title="404 —"
        accent="not in the ledger."
        lede="Whatever was here either moved, never existed, or fell under the honor code."
      />
      <SectionStrip left="RECOVERY" right="ONE OPTION" />
      <div style={{ padding: "24px 0 56px", fontFamily: "var(--font-mono)", fontSize: 13 }}>
        <HoverLink href="/" baseColor="var(--text-accent)">
          ← Back to the index
        </HoverLink>
      </div>
    </div>
  );
}
