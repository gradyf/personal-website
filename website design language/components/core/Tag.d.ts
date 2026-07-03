/**
 * Mono uppercase category chip with a hairline frame.
 * Used for project categories and filters (RL, ROBOTICS, MOBILE, MUSIC, WEB).
 */
export interface TagProps {
  children?: React.ReactNode;
  /** Active filter state — blue frame + blue text. */
  active?: boolean;
  onClick?: () => void;
  /** Renders an <a> when set. */
  href?: string;
}
