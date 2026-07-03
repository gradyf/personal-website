/**
 * Blog index row: mono date, title (flips blue on hover), mono read time.
 * Same ledger logic as LedgerRow, lighter anatomy — no thumbnail, no number.
 */
export interface PostRowProps {
  /** e.g. "JUL 2026" */
  date?: React.ReactNode;
  title: React.ReactNode;
  /** e.g. "4 MIN" */
  readTime?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  /** Closes the list with a strong rule. */
  last?: boolean;
}
