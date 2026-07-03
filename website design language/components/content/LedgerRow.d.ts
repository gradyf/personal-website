/**
 * The signature project row: blue index number, specimen thumbnail, title +
 * mono meta, year, arrow. Title and arrow flip blue on hover over a raised
 * paper background. Stack rows directly; open the stack with a strong rule
 * (SectionStrip above works) and set `last` on the final row.
 */
export interface LedgerRowProps {
  /** Zero-padded position, e.g. "01". Rendered blue. */
  index?: string;
  /** Project name, e.g. "Q-Learner". */
  title: React.ReactNode;
  /** Uppercase mono facts, e.g. "REINFORCEMENT LEARNING · PYTHON". */
  meta?: React.ReactNode;
  /** e.g. "2025" */
  year?: React.ReactNode;
  /** Specimen pattern for the thumbnail. */
  pattern?: "grid" | "lines" | "rings" | "dots" | "solid";
  /** Real screenshot URL for the thumbnail (replaces pattern). */
  src?: string;
  /** Drag-and-drop screenshot slot id (image-slot.js); used when no src. */
  slotId?: string;
  href?: string;
  onClick?: () => void;
  /** Closes the ledger with a strong rule. */
  last?: boolean;
}
