/**
 * Slow full-width marquee between hairlines. One per page, top only.
 * Requires the gf-marquee keyframes from tokens/motion.css.
 */
export interface TickerProps {
  /** Repeated phrase; an em-dash separator is appended automatically. */
  text?: string;
  /** ink (default) or blue chrome. */
  tone?: "ink" | "blue";
  /** Loop duration in seconds; defaults to --ticker-duration (46s). */
  duration?: number;
}
