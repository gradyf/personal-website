/**
 * Section label strip: mono micro-caps between two full-width hairlines.
 * Opens every major page section ("SELECTED WORK — 2024 → NOW").
 */
export interface SectionStripProps {
  /** Left label, e.g. "SELECTED WORK" */
  left?: React.ReactNode;
  /** Right label, e.g. "2024 → NOW" or "05 ENTRIES" */
  right?: React.ReactNode;
  /** Full-ink rules (default) vs. soft hairlines. */
  strong?: boolean;
}
