/**
 * Top navigation: uppercase wordmark left, mono dot-suffixed links right.
 * Active link is blue + underlined. Sits directly under the Ticker.
 */
export interface SiteHeaderProps {
  /** Key of the active link: "index" | "about" | "cv" | "blog" | "contact". */
  active?: string;
  /** Called with the clicked link's key (including "index" for the wordmark). */
  onNav?: (key: string) => void;
  /** Wordmark text. */
  name?: string;
  /** Override the default link set. */
  links?: { key: string; label: string }[];
}
