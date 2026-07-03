/**
 * Rectangular, sharp-cornered action. Solid ink by default; inverts on hover.
 * Use sparingly — most navigation in this system is text links, not buttons.
 */
export interface ButtonProps {
  /** Label. UPPERCASE styling is applied automatically. */
  children?: React.ReactNode;
  /** Renders an <a> when set, otherwise a <button>. */
  href?: string;
  onClick?: () => void;
  /** solid = ink fill (default) · outline = hairline box · blue = accent fill (one per page, max) */
  variant?: "solid" | "outline" | "blue";
  /** md (default) or sm for inline contexts */
  size?: "md" | "sm";
}
