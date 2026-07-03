/**
 * Page-opening block: display headline with an optional blue accent phrase,
 * a body lede, and optional right-aligned mono aside notes.
 */
export interface PageHeroProps {
  /** Ink part of the headline, e.g. "Projects, concepts &" */
  title?: React.ReactNode;
  /** Blue phrase appended to the headline, e.g. "other evidence." */
  accent?: React.ReactNode;
  /** Body paragraph under the headline (max-width 540 applied). */
  lede?: React.ReactNode;
  /** Mono asides rendered right, each wrapped in parens — e.g. ["PORTFOLIO, V1", "LIGHT ONLY"] */
  notes?: string[];
}
