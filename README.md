# grayforrester.com

Personal site — Next.js App Router, statically prerendered, deployed on Vercel.

## Editing content

All editable prose lives under `content/` (`site.json`, `about.json`, `cv.json`, `projects/*.md`) — nothing worth editing day-to-day is hardcoded in TypeScript.

Two ways to edit:

- **app.pagescms.org** — log in with GitHub, pick `gradyf/personal-website`, and edit through the form-based CMS UI. Configuration lives in `.pages.yml` at the repo root.
- **github.com** — edit files directly under `content/` in the browser or a local checkout.

Either way, every commit to `main` auto-deploys — there's no separate publish step.
