# Gray Forrester — Portfolio Design System

The design system for **grayforrester.com**: a personal portfolio of computer-science
projects, concepts, and (eventually) blog posts — work from school and from building
with Claude Code. The direction is called **“The Ledger with Specimens”**: an editorial,
print-flavored index with the warmth of old-school internet. Clean but visually
interesting; minimal but not corporate.

Owner: Gray Forrester — product owner / forward-deployed engineer at Deloitte
(ConvergeHealth, agentic platform for healthcare revenue cycle) and CS student.
Audience: recruiters/hiring managers + friends.
Light mode only. Blog is scaffolded but opens later.

## Sources & lineage

Ported 1:1 from the attached codebase `Portfolio design system foundation/`
(mounted read-only via File System Access; exploration screenshots remain in its
`uploads/`). Chosen direction was synthesized from the owner's references:

- erictimothycarlson.com — plain-text nav, quiet index grid, clean-but-interesting
- publicofficial.co — electric blue on cream, marquee tickers, old-internet warmth
- burocratik.com — numbered rows, big-type minimal/maximal balance
- cinecity.nyc, blogembranco.org, theunexpectedtimetraveler.com — energy references (tempered)
- Explicit dislikes: rounded corners, accent “ears”, corporate blandness, black-wall pages

## Hard rules

1. **No rounded corners.** `--radius: 0px` everywhere, always.
2. **No accent “ears”** (colored left-border cards) — structure comes from hairlines.
3. **No shadows** except the poster block shadow (`--shadow-poster`) if a poster element ever appears.
4. **One accent.** Electric blue `--blue` only. No secondary palette, no gradients.
5. **Light only.** Paper ground; never a dark page.
6. **Real imagery > drawn imagery.** Until a project has a real screenshot, use the
   abstract specimen patterns (`--pattern-*`) — never hand-drawn illustrations or stock.

## CONTENT FUNDAMENTALS

Voice: first person (“I”), plain and direct, with **dry humor in small doses** —
the joke is always load-bearing understatement, never a pun parade. Confidence
without inflation; self-deprecation is allowed one beat, max.

- Prose: sentence case, short declaratives, em dashes for asides, parentheticals
  for the joke: “apps that (usually) ship.”
- Metadata/apparatus: UPPERCASE mono. `REINFORCEMENT LEARNING · PYTHON`,
  `2024 → NOW`, `(PORTFOLIO, V1)`, `N°01`.
- Separators: `·` between facts, `—` for breath, `→` for direction/links out of a row,
  `↗` for external links.
- No emoji. No exclamation marks in UI copy.
- **School coursework is never linked publicly** (honor code): case studies say
  “SOURCE — AVAILABLE UPON REQUEST.” Personal projects may link GitHub.
- Examples in-system:
  - Hero: “Projects, concepts & other evidence.” (accent color on the last phrase)
  - Lede: “Agents that learn, controllers that settle, small tools for large rabbit holes.”
  - Empty state: “The blog opens when there’s something worth reading. Soon-ish.”
  - Footer: “Built by hand. Debugged with Claude.” / “DROP ME A LINE”
  - Tagline candidate: “Software & other controlled experiments.”

## VISUAL FOUNDATIONS

- **Color:** one warm paper family (`--paper` ground, `--paper-raised` hover,
  `--paper-tile`/`--paper-tint` fills), warm near-black ink `--ink`, warm gray
  metadata `--ink-meta`, and a single electric blue `--blue`. Blue is scarce:
  index numbers, links, active states, hover flips, one accent phrase per page.
- **Backgrounds:** flat paper. No images, no gradients, no textures at page level.
  Texture lives only inside specimen tiles (hairline patterns).
- **Type:** three registers. Archivo carries display voice (hero 46/800/-1px; titles
  29/700; sub-heads 20/600; wordmark, buttons). Work Sans carries body prose
  (15/400/1.6, max-width 540px). Red Hat Mono carries apparatus (nav 13/400;
  meta 11 and micro 10 uppercase at weight 500 — `--w-meta`; index numbers 500).
  Oversized numerals may drop to weight 300.
- **Borders & structure:** the hairline system is the architecture.
  `--line-strong` (full ink) opens/closes sections and tables; `--line` divides rows
  and frames tiles; `--line-faint` draws in-pattern strokes; `--line-blue` on blue chrome.
  Rules are always 1px, full-bleed across the content column.
- **Corners:** square. `--radius: 0`.
- **Shadows/blur/transparency:** none, none, none. Depth = paper tones + hairlines.
- **Cards:** there are no floating cards. “Cards” are hairline-framed tiles or
  ledger rows on the shared ground.
- **Imagery color vibe:** when real screenshots arrive, frame them in specimen
  tiles (hairline border on `--paper-tile`); prefer light captures.
- **Animation:** subtle only. Hover flips (`--speed`), link color changes
  (`--speed-fast`), one slow ticker (`gf-marquee`, `--ticker-duration`),
  optional staggered entrance (`gf-rise`) on the index page. `--ease-out` everywhere.
  No parallax, no scroll-jacking.
- **Hover states:** rows lift to `--bg-hover` and their title + arrow flip to blue;
  text links flip to blue and/or underline (`text-underline-offset: 3px`);
  specimen tiles may invert to solid blue in the tiled variant.
- **Press states:** no scale effects; a pressed element renders as its hover state
  at full opacity (optionally `--paper-tint` background).
- **Layout:** desktop content width `--page-max` (1240px), gutter `--page-pad` (40px).
  Ledger row grid: `52px / 136px / 1fr / 70px / 36px` (index · specimen · title+meta ·
  year · arrow). Nothing is position:fixed except (optionally) the top ticker.
- **The ticker:** full-width marquee strip between strong hairlines, mono 11px,
  ink by default (blue variant for special chrome). One per page, top only.

## ICONOGRAPHY

There is **no icon set, no icon font, no SVG icons, no emoji**. The system uses
typographic glyphs as its entire iconography:

- `→` forward / open a row
- `↗` external link
- `·` fact separator
- `—` breath, ranges (`2024 → NOW` uses the arrow)
- `N°` numbering prefix, `( )` aside markers
- Index numbers `01 02 03…` are the closest thing to brand marks

If an interface genuinely needs pictographic icons someday, the rule is: hairline,
square-cornered, 1px-stroke glyphs consistent with Red Hat Mono — but prefer words.

## Index

- `styles.css` — global entry; imports everything under `tokens/`
- `tokens/` — `fonts.css` (Google CDN), `colors.css` (incl. `--pattern-*` specimen fills),
  `typography.css`, `spacing.css`, `motion.css` (incl. `gf-marquee`, `gf-rise` keyframes)
- `guidelines/` — foundation specimen cards (Design System tab)
- `components/core/` — Button, Tag, SectionStrip, Specimen
- `components/content/` — PageHero, LedgerRow, PostRow
- `components/navigation/` — SiteHeader, Ticker, SiteFooter
- `templates/index-page/` — “Index page” starting template for consuming projects
  (ticker · header · hero · strip · ledger rows · footer, all directly editable)
- `ui_kits/portfolio-site/` — interactive click-through of the site
  (home / case study / about / CV / blog / contact)
- `image-slot.js` — drag-and-drop screenshot slots (thumbs + case-study heroes use it)
- `ds-loader.js` — resolves the component bundle for cards & kits (compiles sources as fallback)
- `SKILL.md` — agent-facing usage guide

## Caveats / open items

- **Fonts load from Google Fonts CDN** (`tokens/fonts.css`). Self-host the Archivo,
  Work Sans + Red Hat Mono binaries later if offline use matters.
- `hello@grayforrester.com`, GitHub/LinkedIn URLs, and project years/stacks are
  **placeholders** — confirm and replace.
- Specimen patterns stand in for real project screenshots — in the UI kit every
  thumbnail and case-study hero is a **drag-and-drop slot**: drop a capture on it
  and it persists (one drop fills both, since they share a slot id).
