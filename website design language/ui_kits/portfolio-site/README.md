# UI kit — grayforrester.com

Interactive click-through of the portfolio site in the "Ledger with Specimens" direction.

- `index.html` — the whole site: ticker → header → view → footer. Click nav links,
  filter tags, ledger rows (→ case study), and the footer CTA (→ contact).
- `Home.jsx` — hero + filterable project ledger + elsewhere block
- `CaseStudy.jsx` — crumb, title, big specimen (screenshot pending), prose + facts, next-project row
- `About.jsx` — bio + contact strip
- `Resume.jsx` — CV template (bracketed placeholders await real facts)
- `Blog.jsx` — reserved empty state
- `Contact.jsx` — big mono email + elsewhere links
- `data.js` — the five seed projects; stacks/years are placeholders

All visuals come from `../../styles.css` tokens and `components/*` — no local styling inventions.
