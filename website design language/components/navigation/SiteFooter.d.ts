/**
 * Page-closing strip: strong top rule, mono micro-caps, copyright left,
 * call-to-action right ("DROP ME A LINE").
 */
export interface SiteFooterProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
  /** Makes the right label an interactive link (hover flips blue). */
  onRight?: () => void;
}
