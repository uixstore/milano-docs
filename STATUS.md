# Milano Docs — Implementation Status

**Last updated**: 2026-05-16

Companion to [`PLAN.md`](./PLAN.md). The plan locks decisions; this file tracks what's actually been built so a future session can resume cleanly.

## Snapshot

- Repo scaffolded with Starlight (Astro 6.3.3 + Starlight 0.39.2).
- All 18 sections wired into the sidebar with stub `index.md` pages.
- Quality gates in place: Prettier, markdownlint, husky pre-commit, Vale config skeleton.
- GitHub Actions deploy workflow written (`.github/workflows/deploy.yml`).
- Build verified: 25 pages generated locally; both Prettier and markdownlint pass clean.
- Git initialised on `main` and pushed to a **public** GitHub repo `milano-docs`.
- No VPS provisioning, no deploys yet.

## What's implemented (by plan step)

### Step 1 — Tooling & Deploy Pipeline

- ✅ `.github/workflows/deploy.yml` — checkout, pnpm install, build, SSH agent, rsync, Cloudflare purge scoped to `/milano/*`
- ⚠️ Workflow trigger temporarily limited to `workflow_dispatch` (manual only). `push: [main]` trigger is commented out in the YAML to avoid failing runs while VPS secrets are missing. **Re-enable after secrets land.**
- ⏳ GitHub secrets — not added (VPS provisioning deferred until content is ready)
- ⏳ VPS infrastructure — deferred until content is ready to deploy
- ⏳ First deploy — not run

### Step 2 — Repository Structure & Bootstrap

- ✅ `package.json` with scripts: `dev`, `build`, `preview`, `check`, `format`, `format:check`, `lint:md`, `prepare`
- ✅ `astro.config.mjs` — site `https://docs.uix.store`, base `/milano`, `trailingSlash: 'always'`, 18-section sidebar
- ✅ `src/content.config.ts` — Starlight docs collection schema
- ✅ `tsconfig.json` — extends `astro/tsconfigs/strict`
- ✅ `.nvmrc` — Node 22 (note: bumped from plan's "20" since Node 20 reached EOL April 2026)
- ✅ `.gitignore`, `.editorconfig`
- ✅ `.prettierrc` + `.prettierignore` (with `prettier-plugin-astro`)
- ✅ `.markdownlint-cli2.jsonc` (config + ignores)
- ✅ `.vscode/extensions.json` + `settings.json`
- ✅ `.husky/pre-commit` — runs `lint-staged`
- ✅ `lint-staged` config in `package.json`
- ✅ `README.md` — contributor-facing
- ✅ `src/styles/custom.css` — placeholder for brand override
- ⏳ `oxipng` pre-commit — deferred until screenshots arrive

### Step 3 — Writing Standards

- ✅ `.vale.ini` — uses write-good, proselint, alex, plus Milano package
- ✅ `.vale/styles/Milano/Terminology.yml` — Customizer/demo content/sidebar/menu lock-ins
- ✅ `.vale/styles/Milano/BannedWords.yml` — easy, simple, just, obviously, merely, of course
- ✅ `.vale/styles/Milano/PlainWords.yml` — utilize→use, assist→help, modify→change, etc.
- ✅ `.vale/styles/Milano/README.md` — install + usage notes
- ⏳ Vale binary not installed locally (documented in README: `brew install vale && vale sync`)
- ⏳ Vale not in CI yet — defer until content is real

### Step 4 — Information Architecture

- ✅ All 18 top-level sections in `astro.config.mjs` sidebar (using `items: [{ autogenerate: ... }]` per Starlight 0.39 syntax)
- ✅ All 18 section folders with `index.md` stub pages (frontmatter + "being written" body)
- ✅ Homepage `src/content/docs/index.mdx` — splash template with hero + 4-card grid linking to top sections
- ⏳ Sub-pages (per the full Step 4 nav tree) — Getting Started section complete (5 pages); other sections not started

### Step 5 — Screenshot & Asset Standards

- ✅ `src/assets/` directory reserved with placeholder images for Getting Started section
- ⏳ Real screenshots deferred until Milano is running on a live WordPress install

### Step 6 — Getting Started content

- ✅ Brief is locked in PLAN.md — all Milano-specific inputs provided
- ✅ All 5 pages drafted: Before you begin, Install Milano, Register purchase code, Install required plugins, First-time setup checklist

### Step 8 — Launch Checklist

- ✅ Deploy pipeline file in place
- ⏳ All infra, content, and launch steps not started

## Tooling versions installed

| Package               | Version |
| --------------------- | ------- |
| astro                 | 6.3.3   |
| @astrojs/starlight    | 0.39.2  |
| sharp                 | 0.34.5  |
| prettier              | 3.8.3   |
| prettier-plugin-astro | 0.14.1  |
| markdownlint-cli2     | 0.22.1  |
| husky                 | 9.1.7   |
| lint-staged           | 17.0.4  |

## Inputs blocking next steps

Grouped by what they unlock.

### To make the first deploy (Step 8.A/B — private deploy phase) — **DEFERRED until content is ready**

- VPS deploy path on `docs.uix.store` (existing convention for sibling docs)
- VPS SSH user, host, and port
- 7 GitHub secrets: `VPS_SSH_HOST`, `VPS_SSH_USER`, `VPS_SSH_KEY`, `VPS_DEPLOY_PATH`, `VPS_SSH_PORT` (optional), `CLOUDFLARE_ZONE_ID`, `CLOUDFLARE_API_TOKEN`
- Nginx `location /milano/` block added to existing `docs.uix.store` server

### To start drafting Getting Started content (Step 6) — **COMPLETE**

- ✅ Required plugins: WooCommerce, Elementor
- ✅ Purchase code screen: **Milano → Dashboard → License**
- ✅ Plugin installer: TGMPA + Milano's own installer
- ✅ Demo importer: Milano's own importer
- ✅ WP minimum: 5.9; PHP minimum: 7.4

### To finalise visual polish

- Milano brand accent colour → fill in `src/styles/custom.css` (currently commented placeholder)
- Brand logo / favicon assets

### To start writing Shop content (Step 5/6)

- Demo store persona: store name, currency, 6 product names + prices + images, customer placeholder

### To finalise launch

- UIX Themes privacy policy URL (or decision to create one)
- Decision on "Was this helpful?" feedback widget implementation (Cloudflare Worker + KV is simplest)

## How to resume next session

```bash
cd /Users/hoanglt/Dev/Experiments/milano-docs
nvm use            # picks Node 22 from .nvmrc
pnpm install
pnpm dev           # local preview at http://localhost:4321/milano/
```

Suggested next sessions, in priority order:

1. ~~**Commit + push** — create the private GitHub repo `milano-docs`, push the scaffold.~~ ✅ **Done** (public repo).
2. ~~**Provision the VPS** — deploy directory, Nginx block, SSH key, add GitHub secrets.~~ **Deferred** until content is ready.
3. ~~**Gather Milano-specific inputs** for Step 6 and draft Page 2 (Install Milano).~~ ✅ **Done**.
4. **Brand polish** — drop in the accent colour, logo, and favicon.
5. **Define demo store persona** — store name, currency, 6 products with names/prices/images, customer placeholder.
6. **Write remaining sections** — work through the 18-section tree, leaning on the Install Milano template.
7. **Provision VPS & deploy** — when content is ready for private review.

## Open questions to keep in mind

- Should we add a `ci.yml` workflow for PR validation (Vale + lint + build), or stay with pre-commit only? Decision deferred until a second contributor joins.
- Sub-pages within each section — do we create all of them as stubs upfront, or only when about to write? Current state is "only section landing pages exist". A future session could decide.
