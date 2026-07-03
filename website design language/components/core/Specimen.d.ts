/**
 * The project-imagery placeholder: a hairline-framed tile filled with an
 * abstract pattern. Swap in a real screenshot via `src` when the project ships.
 * Motif assignments: grid=Q-Learner, lines=PID, solid=Hiring App,
 * rings=CD Cataloger, dots=Rabbit Hole.
 */
export interface SpecimenProps {
  /** Pattern fill when no src is given. */
  pattern?: "grid" | "lines" | "rings" | "dots" | "solid";
  /** Pixel height (default 86 — the ledger-row thumb). */
  height?: number | string;
  width?: number | string;
  /** Centered mono caption (hidden when src is set). */
  label?: string;
  /** Small index number pinned top-left, e.g. "01". */
  index?: string;
  /** Real screenshot URL — replaces the pattern. */
  src?: string;
  /** Makes the tile a drag-and-drop screenshot slot (persisted by id).
   *  Use one stable id per project, e.g. "shot-q-learner". */
  slotId?: string;
  /** Extra style overrides for the frame. */
  style?: React.CSSProperties;
}
