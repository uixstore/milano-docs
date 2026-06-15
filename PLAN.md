# Milano Theme — User Documentation Plan

User-facing documentation for the Milano WordPress theme (UIX Themes), hosted at `https://docs.uix.store/milano/`.

This file is the running plan. Each step is brainstormed one at a time, then locked here.

For current implementation state — what's built, what's deferred, what's blocking — see [`STATUS.md`](./STATUS.md).

---

## Decision Log

| Topic            | Decision                                                                                              |
| ---------------- | ----------------------------------------------------------------------------------------------------- |
| Primary audience | Non-technical store owners                                                                            |
| Distribution     | ThemeForest / marketplace                                                                             |
| Scope            | Install → Customizer → Header/Footer Builder → WooCommerce → Modules → all the way to advanced topics |
| Hosting URL      | `https://docs.uix.store/milano/` (subdirectory on existing docs subdomain)                            |
| Required plugins | WooCommerce, Elementor                                                                                |
| Purchase code    | **Milano → Dashboard → License**                                                                      |
| Plugin installer | TGMPA + Milano's own installer                                                                        |
| Demo importer    | Milano's own importer                                                                                 |
| WP / PHP minimum | WP ≥ 5.9, PHP ≥ 7.4                                                                                   |

---

## Step 1 — Tooling & Deploy Pipeline

**Status: Locked**

### Stack

| Layer                 | Choice                                                                        |
| --------------------- | ----------------------------------------------------------------------------- |
| Static site generator | **Starlight (Astro)**                                                         |
| Source host           | **GitHub** (private repo recommended)                                         |
| CI/CD                 | **GitHub Actions**, triggered on push to `main`                               |
| Build location        | **CI runner** — VPS stays static-only, no Node/Python on it                   |
| Deploy method         | **`rsync` over SSH** with dedicated deploy key                                |
| Web server            | **Nginx** — `location /milano/` block inside existing `docs.uix.store` server |
| CDN                   | **Cloudflare** — purge `/milano/*` after each deploy                          |
| TLS                   | Reuses existing `docs.uix.store` certificate                                  |
| Versioning            | **Deferred** — add `starlight-versions` plugin when Milano v1.1 ships         |

### Why Starlight over MkDocs Material

- Astro's "zero JS by default" gives best-in-class Core Web Vitals (SEO factor).
- Modern design out of the box matches a commercial theme product.
- Built-in: search (Pagefind), sitemap, OG image generation, i18n, dark mode.
- Pure Markdown for writers; Astro/components only needed if customizing.
- Deploy story identical to MkDocs (static HTML → rsync).
- Tradeoff accepted: versioning plugin is less mature than MkDocs' `mike`. Fine to defer.

### Subdirectory deploy — critical config points

1. **Astro config** must declare the base path:

   ```js
   // astro.config.mjs
   export default defineConfig({
     site: 'https://docs.uix.store',
     base: '/milano',
     // ...starlight integration
   });
   ```

   Without `base`, every internal link and asset URL breaks under `/milano/`.

2. **Trailing slash policy** — pick `always` (Starlight default) and stick with it. Mismatch causes Cloudflare cache misses and duplicate-URL SEO issues.

3. **Sitemap** lives at `https://docs.uix.store/milano/sitemap-index.xml` — submit that exact URL to Google Search Console.

### GitHub Actions workflow (high-level)

`.github/workflows/deploy.yml` on push to `main`:

1. Checkout repo
2. Setup Node + pnpm (with cache)
3. `pnpm install --frozen-lockfile`
4. `pnpm build` → produces `./dist/`
5. Install SSH deploy key from secret
6. `rsync -avz --delete ./dist/ "$VPS_USER@$VPS_HOST:$VPS_DEPLOY_PATH"`
7. Purge Cloudflare cache for `https://docs.uix.store/milano/*` via API

### Required GitHub repo secrets

- `VPS_SSH_HOST`
- `VPS_SSH_USER`
- `VPS_SSH_PORT` (if non-standard)
- `VPS_SSH_KEY` (private deploy key — public half goes in VPS user's `~/.ssh/authorized_keys`)
- `VPS_DEPLOY_PATH` (e.g. `/var/www/docs.uix.store/milano/`)
- `CLOUDFLARE_ZONE_ID`
- `CLOUDFLARE_API_TOKEN` (scoped to "Zone → Cache Purge" only)

### Nginx — add to existing `docs.uix.store` server block

```nginx
location /milano/ {
    alias /var/www/docs.uix.store/milano/;
    try_files $uri $uri/ $uri/index.html =404;
    index index.html;
}
```

Exact form depends on the existing config — confirm before applying.

### Open items to confirm during implementation

- [ ] Actual VPS deploy path (existing convention for sibling docs on `docs.uix.store`)
- [ ] SSH user and port on the VPS
- [ ] Whether Cloudflare cache rules / page rules already exist for `docs.uix.store` that might conflict
- [ ] Whether existing `docs.uix.store` Nginx config can be edited or if a drop-in include is preferred
- [ ] **Re-enable `push: [main]` trigger in `.github/workflows/deploy.yml`** once VPS is provisioned and all 7 secrets are added to the GitHub repo. Workflow is currently gated to `workflow_dispatch` (manual only) to avoid failing runs during the setup phase. **VPS provisioning deferred until content is ready for deploy.**

---

## Step 2 — Repository Structure & Project Bootstrap

**Status: Locked**

### Repo identity

- **Separate GitHub repo**, not a subfolder of the Milano theme (different stack, release cadence, audience).
- **Repo name**: `milano-docs`
- **Visibility**: **Public** (originally planned as private; switched for easier sharing during development).
- **Default branch**: `main` (= production). All work via feature branches + PRs. No `develop` branch.

### Tech baseline

- Package manager: **pnpm** (matches the Milano theme repo).
- Node: **22 LTS**, pinned via `.nvmrc`. (Updated during scaffolding — Node 20 reached end-of-maintenance in April 2026; 22 is the current LTS.)
- Config: Starlight defaults — `astro.config.mjs` + TypeScript schema in `src/content/config.ts`.

### Directory layout

```
milano-docs/
├── astro.config.mjs          # site, base: '/milano', sidebar config
├── package.json
├── pnpm-lock.yaml
├── .nvmrc                    # "22"
├── .editorconfig
├── .gitignore
├── .prettierrc
├── .markdownlint.json
├── .github/
│   └── workflows/
│       └── deploy.yml        # built per Step 1
├── .vscode/
│   ├── extensions.json       # Astro + Prettier
│   └── settings.json
├── public/                   # robots.txt, favicon, raw downloads
├── src/
│   ├── content/
│   │   ├── docs/             # all markdown pages; folders mirror nav (Step 4)
│   │   └── config.ts         # content collection schema
│   ├── assets/               # central image folder, mirrors docs/ tree
│   └── styles/
│       └── custom.css        # brand color overrides only
├── PLAN.md                   # this file
└── README.md                 # contributor-facing, not end-user
```

### Quality gates

- **Prettier** — format Markdown + config files.
- **Markdownlint** — catch broken/bad Markdown.
- **lint-staged + pre-commit hook** — auto-format & validate staged files before commit. Stops issues from reaching CI.

### Conventions locked

- Sidebar configured **explicitly** in `astro.config.mjs` (not auto-from-folders). Clearer for a 14-section doc.
- Folder structure under `src/content/docs/` mirrors the nav tree from Step 4.
- `src/assets/` mirrors `src/content/docs/` structure for image co-location by section, while keeping Astro image optimization.
- `draft: true` frontmatter enabled — WIP pages can be committed without showing in prod build.

### v1 simplifications (deferred until needed)

- Single author, English only — no `CONTRIBUTING.md` / PR template / i18n folders yet.
- Local preview only — no PR preview deploys to VPS.
- These can all be added later without restructuring.

### Open items for implementation

- [ ] Confirm Cloudflare API token scope is "Zone → Cache Purge" only (security hygiene)
- [ ] Decide on a single brand accent color for `src/styles/custom.css` (will derive from Milano theme)

## Step 3 — Writing Standards & Style Guide

**Status: Locked**

### Primary style reference

- **WordPress Documentation Style Guide** ([make.wordpress.org/docs/style-guide](https://make.wordpress.org/docs/style-guide/)) as the canonical base. Same audience and terminology baseline as our readers.
- **Google Developer Documentation Style Guide** as a fallback for topics WP's guide doesn't cover (callouts, meta tags, modern conventions).

### Voice & tone

- Second person ("you"); never "the user".
- Present tense, active voice.
- Contractions OK ("you'll", "don't").
- Friendly, professional, no marketing-speak. No exclamation marks except in genuine warnings.
- Target **Grade 8** reading level. Short sentences. Define WP/Woo terms on first use.

### Page titles

- **Sentence case**: "Change your logo".
- How-to pages = task verb. Reference pages = noun. Tutorial pages = "Get started with…".

### Page structure — non-mandatory patterns

- **No strict template** — writers adapt to the page's needs.
- Three reference _patterns_ live in the contributor README as examples (how-to / reference / tutorial). Borrow what fits, skip what doesn't.
- The only universal expectations: every page has a clear `title`, a `description` (used as meta description), and a "what's next" link or two where it makes sense.

### UI element conventions

- **Bold** for UI labels: "Click **Save Changes**".
- `Backticks` for filenames, paths, code, and exact values.
- Arrow for nav paths: "Go to **Appearance → Customize → Site Identity**".
- Button text matches WP UI exactly.

### Admonitions — fixed set, mapped to Starlight

| We call it | Starlight syntax | Use for                           |
| ---------- | ---------------- | --------------------------------- |
| Note       | `:::note`        | Neutral, useful info              |
| Tip        | `:::tip`         | Optional best practice            |
| Important  | `:::caution`     | Must do this or it won't work     |
| Warning    | `:::danger`      | Could break the site or lose data |

No other variants. No "Heads up", "Pro tip", "FYI", etc.

### Frontmatter schema (every page)

```yaml
---
title: Change your logo
description: Replace the default Milano logo, set a retina version, and adjust its size.
sidebar:
  order: 2
draft: false
---
```

`description` is **required** — it's the meta description, critical for SEO.

### Links

- Internal: relative paths, descriptive text. Never "click here".
- External: same tab (don't force `target="_blank"`).

### Numbers, dates, terminology

- Spell out one–nine; numerals for 10+. Always numerals in step counts and version numbers.
- Dates: "May 15, 2026" format.
- Terminology lock-ins (start of glossary): **Customizer** (not Theme Options), **demo content** (not sample data), **menu** (not nav), **sidebar** (not side panel), **header builder / footer builder** (lowercase mid-sentence).

### Linting & enforcement — strict, automated

- **Engine**: [Vale](https://vale.sh/).
- **Style packages**: `write-good`, `proselint`, `alex` (inclusive language).
- **Custom Milano rules** (in-repo at `.vale/styles/Milano/`):
  - Banned words: "easy", "simple", "just", "obviously", "merely", "of course".
  - Terminology enforcement (Customizer, demo content, etc.).
  - Title sentence-case check.
- **Where it runs**:
  - Locally via the editor (Vale plugin for VS Code).
  - Pre-commit via `lint-staged` on staged `.md` files.
  - CI job on every PR — failing Vale checks block merge.

### Inclusive language rules (enforced by `alex` + custom rules)

- No "easy", "simple", "just", "obviously" — patronizing.
- "They" instead of "he/she". Rewrite to "you" where possible.
- No idioms that don't translate ("piece of cake", "kill two birds…").
- No "guys" → "everyone" / "folks".

### Milano voice — five principles

Direction: **concise, friendly, nothing fancy.**

1. **Lead with the action, not the preamble.**
   - ✅ "To change your logo, go to **Appearance → Customize → Site Identity**."
   - ❌ "If you'd like to change your logo, the first thing you'll need to do is navigate to…"

2. **Talk like a helpful colleague — not a marketer or a lecturer.**
   - ✅ "Turn this on if you want a sticky header."
   - ❌ "Milano's incredible sticky header feature can be enabled with just one click!"

3. **Cut filler.** Drop "in order to" → "to", "at this point" → "now", "please note that" → drop entirely.
   - ✅ "To save, click **Publish**."
   - ❌ "In order to save your changes, please note that you'll need to click **Publish** at this point."

4. **Short sentences. One idea each.** Aim for 15–20 words on average. If a sentence runs past 25, break it.

5. **Skip celebrations and hedges.** No "Awesome!", "Great job!", "You're all set!". No "you might want to consider…" — say "do X" or "we recommend X".

### Plain-word preferences (enforced by Vale)

| Use           | Not                                    |
| ------------- | -------------------------------------- |
| use           | utilize                                |
| help          | assist                                 |
| show          | display (where natural)                |
| buy           | purchase                               |
| start         | initiate                               |
| turn on / off | enable / disable (in user-facing copy) |
| about         | regarding                              |
| change        | modify                                 |

### Open items

- [ ] Author the `.vale/styles/Milano/` custom rules file (during Step 2 implementation) — encode the banned words, terminology lock-ins, and plain-word preferences above
- [ ] Author the "common patterns" examples for the contributor README (during Step 6, alongside the first real pages)

## Step 4 — Information Architecture

**Status: Locked**

### Style

- **Flat sidebar** (no top-level grouping). Matches Flatsome (~15 sections) and Woodmart (~17). Long sidebar, but every page is one click away.
- Folder structure under `src/content/docs/` and `src/assets/` mirrors this tree.
- Sidebar configured **explicitly** in `astro.config.mjs` — not auto-from-folders (decided in Step 2).
- Ordering follows the user journey: install → import a demo → pick a homepage → customize → build → add content → extend → maintain.

### Full nav tree (18 top-level sections)

```
1.  Getting Started
    ├── Before you begin
    ├── Install Milano
    ├── Register your purchase code
    ├── Install required plugins
    └── First-time setup checklist

2.  Import Demo (renamed from "Demos")
    ├── Import demo overview    (section index; sidebar label: "Overview")
    └── Import a demo (one-click)
        └── ~~Demos catalog~~  (removed — not needed)

3.  Homepages
    ├── Homepages overview
    ├── Set a homepage as your front page
    └── Homepage layouts       (one page per layout)

4.  Pre-built Pages
    ├── Pre-built pages overview
    ├── About page
    ├── Contact page
    ├── Services page
    ├── FAQ page
    └── (others as Milano ships them)

5.  Customizer
    ├── Customizer overview
    ├── Site Identity (logo, favicon)
    ├── Colors
    ├── Typography
    ├── Layout & containers
    ├── Buttons
    ├── Blog settings
    ├── 404 page
    └── Custom CSS

6.  Header & Footer Builder
    ├── Builder overview
    ├── Build your header
    ├── Mobile header
    ├── Sticky & transparent header
    ├── Build your footer
    └── Footer widgets

7.  Page Builder Integration
    ├── Use Milano with Elementor
    ├── Use Milano with WPBakery
    ├── Use Milano with the Block Editor (Gutenberg)
    └── Milano-specific widgets & elements

8.  Menus
    ├── Create a menu
    └── Mega menus

9.  Blog
    ├── Blog layouts
    ├── Categories & tags
    └── Single post settings

10. Shop
    ├── Set up WooCommerce
    ├── Shop page layout
    ├── Product page options
    ├── Cart & checkout
    ├── Mini cart
    ├── Product variations & swatches
    ├── Live sales notifications
    ├── Store information
    ├── Wishlist
    └── Quick view

11. Theme Modules
    ├── Modules overview
    ├── Search popup
    ├── Back-to-top
    ├── Cookie notice
    └── (other general modules)

12. Plugin Compatibility
    ├── Yoast SEO
    ├── Rank Math
    ├── WPML
    ├── Polylang
    └── (others as tested)

13. Translation
    ├── Translate Milano with Loco
    ├── WPML guide
    └── Polylang guide

14. Customize Further (advanced)
    ├── Child themes
    └── Custom CSS snippets

15. Troubleshooting & FAQ
    ├── Common issues
    └── Before you contact support

16. Glossary
    └── (single page — WP/Woo/Milano terms defined once, linked from first use)

17. Support & Updates
    ├── Support policy
    ├── Update Milano
    └── Changelog
```

Approximate scale on day one: **~80–90 pages**.

### Open items for implementation

- [ ] Finalize the exact list of demos / homepages / pre-built pages / theme modules once the Milano theme features list is confirmed (currently placeholders)
- [ ] Decide which sections (if any) need a landing page beyond just the overview page (e.g. Shop might want a visual hub linking to its subpages)
- [ ] Review section 7 (Page Builder Integration) once we know which builders Milano officially supports — may consolidate or expand

## Step 5 — Screenshot & Asset Standards

**Status: Locked (demo store data pending from user)**

### Capture environment

- **WP version**: latest stable (WP 6.7+). Re-shoot when a Milano update changes the UI.
- **Admin color scheme**: default WordPress (blue).
- **Admin language**: English.
- **Browser**: Chrome, latest stable.
- **Window size**: 1440×900.
- **Resolution**: capture at **2x (retina)**. Astro downsizes for delivery.

### File standards

- **Format**: PNG source. Astro converts to AVIF/WebP at build.
- **Naming**: kebab-case, descriptive, numbered if sequential.
  - ✅ `step-1-open-customizer.png`, `customizer-colors-panel.png`
  - ❌ `Screenshot 2026-05-15 at 14.23.png`
- **Location**: `/src/assets/<section>/<page>/...` mirroring docs structure (decided in Step 2).
- **Max raw file size**: ~300 KB per image.
- **No watermarks**.

### Compression — enforced

- `oxipng` (or `imagemin-pngquant`) runs via `lint-staged` on staged PNG files. Pre-commit blocks if a file is over the size budget.
- Astro further optimizes at build time (no manual step needed at deploy).

### Annotation style (tool-agnostic)

Author's choice of tool — output must match these rules:

- **Color**: single accent color used consistently (matches Milano brand — set during implementation in `src/styles/custom.css`).
- **Strokes**: 3–4 px weight, slightly rounded corners on boxes.
- **Shapes**: prefer **boxes around regions**, not arrows. One annotation per screenshot when possible.
- **Number badges** for multi-step shots: solid filled circle, white digit inside.
- **No text labels on the screenshot itself** — describe in the surrounding Markdown instead. Keeps re-shoots easy and translations clean.

### Frontend vs admin framing

- **Admin screens**: crop to the WP admin pane, no browser chrome.
- **Frontend screens**: **naked content** — no browser frame. Caption + alt text provides context.

### Alt text — required on every image

- Describe what's shown; never lead with "Screenshot of…".
- ✅ "Customizer panel with the brand-blue color selected for primary buttons"
- ❌ "Screenshot of the Customizer"
- Enforced by Vale rule (`alt-text-required`).

### Demo data persona — "Milano Demo Store"

**User will define**: store name, currency, product list (~6 fixed products with names + prices + images), customer placeholder.

Once locked, the same data is reused across every shop screenshot for consistency.

Constants regardless of user spec:

- No real customer data, ever.
- Same demo data set used throughout every Shop section page.

### Motion (GIFs / video)

- **Default to screenshots.** Use motion only when the action must be seen — drag-and-drop, animations.
- When needed: **MP4, < 2 MB, < 10 seconds**, no audio, autoplay-loop-muted-playsinline.
- No animated GIFs.

### Image zoom

- Enable Starlight's click-to-expand on all screenshots — readers can inspect detail without bloating page width.

### Open items

- [ ] **Demo data persona** — user to define store name, currency, 6 product names + prices + images, customer placeholder. Lock before Step 6 shop content begins.
- [ ] **Accent color for annotations** — derive from Milano brand once we have the brand reference; encode in `src/styles/custom.css`.
- [ ] **Pre-commit `oxipng` size budget** — tune the threshold once we see a few real captures (start at 300 KB, adjust if too strict).

## Step 6 — First Content: Getting Started section

**Status: Locked (drafting blocked on Milano-specific inputs)**

This step defines the writing brief for the Getting Started section. Actual writing happens during implementation, once the repo is scaffolded and the open inputs below are provided.

### Why this section first

- Every buyer reads it.
- It anchors voice/tone and the page template for everything else.
- If it's bad, refunds spike.

### Writing order

1. **Install Milano** (page 2) — written **first** as the template-setter. Most representative how-to: numbered steps, screenshots, multiple methods, troubleshooting, next-step link.
2. Before you begin (page 1)
3. Register your purchase code (page 3)
4. Install required plugins (page 4)
5. First-time setup checklist (page 5)

### Page briefs

#### Page 1 — Before you begin

Goal: confirm the reader's environment is ready.
Sections:

- _What you'll need_ — WordPress ≥ 5.9, PHP ≥ 7.4, hosting specs, supported browser, Milano purchase ZIP.
- _What's in your download_ — theme zip, child theme zip, license, docs link.
- _Estimated time_ — ~30 minutes from install to working demo.
- _Next step_ → Install Milano.

#### Page 2 — Install Milano (template-setter, write first)

Goal: zero to activated theme.
Sections:

- _Before you begin_ — link back to page 1.
- _Method A — Upload through WordPress admin_ (recommended; full numbered steps + screenshots).
- _Method B — FTP upload_ (collapsed/secondary; for hosts with small upload limits).
- _Troubleshooting_ — "File is too large", "Are you sure you want to do this?", "Style.css missing".
- _Next step_ → Register your purchase code.

#### Page 3 — Register your purchase code

Goal: validate the Envato purchase to unlock updates and support.
Sections:

- _Why you need to register_ — updates, demo import, bundled premium plugins, support.
- _Find your purchase code_ — short Envato downloads-page walkthrough.
- _Enter it in Milano_ — exact WP admin location (Milano-specific).
- _Troubleshooting_ — invalid code, already registered elsewhere.
- _Next step_ → Install required plugins.

#### Page 4 — Install required plugins

Goal: set up companion plugins.
Sections:

- _Required plugins_ — one block per plugin (what it does, bundled vs external, install path, license notes).
- _Recommended plugins_ — same shape, lower priority.
- _Bulk install_ — via TGM Plugin Activation or Milano's custom installer (TBD).
- _Next step_ → Import a demo (links to Demos section) OR build from scratch.

#### Page 5 — First-time setup checklist

Goal: scannable "what's next" tying Getting Started to the rest of the docs.
Sections:

- Literal checklist with links:
  - Theme installed and activated → page 2
  - Purchase code registered → page 3
  - Required plugins installed → page 4
  - Imported a demo OR building from scratch → Demos
  - Replaced logo → Customizer → Site Identity
  - Set primary colors → Customizer → Colors
  - Configured menus → Menus
  - Set up WooCommerce essentials → Shop
- Two paths at the bottom: "Start from a demo" vs "Build from scratch".

### Acceptance criteria (every page)

- [ ] `title` and `description` frontmatter present.
- [ ] Voice matches Step 3 rules; Vale passes clean.
- [ ] Every image has descriptive alt text per Step 5 rules.
- [ ] Screenshots follow Step 5 standards (capture env, naming, compression).
- [ ] At least one "next step" link at the bottom.
- [ ] Self-reviewed against the 1-page contributor checklist (authored alongside page 2).

### Open items — inputs needed from user before drafting

- ✅ **Required plugins**: WooCommerce, Elementor.
- ✅ **Purchase-code UI in Milano**: **Milano → Dashboard → License**.
- ✅ **Plugin installer method**: TGMPA + Milano's own installer.
- ✅ **Demo importer**: Milano's own importer.
- ✅ **Required WordPress and PHP versions**: WP ≥ 5.9, PHP ≥ 7.4.

## Step 7 — Versioning Strategy

**Status: Not in scope for v1.**

Decided not to set up doc versioning. Single source of truth on `main`, deployed to `/milano/`. Revisit if a future Milano release needs parallel documentation for an older version still under support.

---

## Step 8 — Launch Checklist

**Status: Locked**

### Launch strategy

- **Public launch when 100% of sections are written.** No partial / "Coming soon" launch.
- **Private deploy** runs much earlier — as soon as Getting Started is drafted — to validate the pipeline and let the UIX Themes team review internally. Site is deployed but not yet linked from anywhere public; `robots.txt` blocks indexing until public-launch day.
- **Analytics**: Cloudflare Web Analytics (cookieless, no banner needed).
- **Per-page reader feedback**: "Was this helpful?" Yes/No widget.
- **Versioning**: not in scope (see Step 7).
- **Status banner**: none.
- **Per-page "Last updated" date**: enabled (auto from git history via Starlight).

### A. Infrastructure

- [ ] Confirm `docs.uix.store` is live and proxied through Cloudflare
- [ ] Create deploy directory on VPS — e.g. `/var/www/docs.uix.store/milano/`
- [ ] Generate fresh `ed25519` SSH deploy key — public half to VPS `~/.ssh/authorized_keys`, private half to GitHub secret `VPS_SSH_KEY`
- [ ] Add Nginx `location /milano/` block to existing `docs.uix.store` server block; reload
- [ ] Test: hit `https://docs.uix.store/milano/` — expect 404 (empty dir is fine)
- [ ] Create Cloudflare API token scoped to **Zone → Cache Purge** only; add to GitHub secret `CLOUDFLARE_API_TOKEN`
- [ ] Set GitHub secrets: `VPS_SSH_HOST`, `VPS_SSH_USER`, `VPS_SSH_PORT` (if non-22), `VPS_DEPLOY_PATH`, `CLOUDFLARE_ZONE_ID`

### B. Pipeline verification (private deploy)

- [ ] First deploy from a test branch — rsync succeeds, files land in the right path, Cloudflare purge fires
- [ ] Verify HTTPS resolves at `https://docs.uix.store/milano/`
- [ ] Verify trailing-slash policy is consistent (no 301 loops)
- [ ] Verify Astro `base: '/milano'` config — internal links, assets, sitemap all resolve correctly
- [ ] `robots.txt` blocks indexing during the private-deploy phase
- [ ] Internal review by UIX Themes team on the live URL

### C. SEO & discoverability (flipped on for public launch)

- [ ] Switch `robots.txt` to allow indexing
- [ ] Verify sitemap at `https://docs.uix.store/milano/sitemap-index.xml`
- [ ] Verify each page has `description` frontmatter (already enforced in Step 3)
- [ ] Verify canonical URL on every page
- [ ] Test Open Graph / social cards — share a URL on X, Facebook, LinkedIn
- [ ] Google Search Console — verify ownership of `docs.uix.store`, submit sitemap
- [ ] Bing Webmaster Tools — same

### D. Performance & quality gates

- [ ] Lighthouse audit on 5 representative pages — Performance ≥ 90, Accessibility ≥ 95, SEO 100
- [ ] Broken-link check on built site (`lychee` or `linkinator`) — zero broken internal links
- [ ] Mobile render check on a real phone
- [ ] Pagefind search returns relevant results for "install", "import demo", "logo", "color"
- [ ] Image zoom works on representative screenshots

### E. Analytics & feedback

- [ ] Cloudflare Web Analytics enabled for `docs.uix.store/milano/`
- [ ] "Was this helpful?" Yes/No widget on every page — record results somewhere we can review (Cloudflare Worker, simple webhook, or third-party like Doc Feedback)
- [ ] No cookie banner needed (analytics is cookieless)

### F. Compliance

- [ ] Privacy policy link in footer (point to UIX Themes' existing policy if available)
- [ ] No PII captured by the feedback widget

### G. Content readiness — gates for public launch

- [ ] All 17 sections complete (per Step 4 nav tree)
- [ ] Glossary seeded with the Step 3 terminology lock-ins
- [ ] 404 page customized — message + helpful links instead of generic Starlight 404
- [ ] Every page has a `description` and at least one "next step" link
- [ ] Per-page "Last updated" date is rendering correctly

### H. Launch day

- [ ] Final content review
- [ ] Push to `main` → deploy fires
- [ ] Verify site live and rendering
- [ ] Flip `robots.txt` to allow indexing (if not already)
- [ ] Submit sitemap to Search Console + Bing
- [ ] Add docs URL to:
  - Theme `style.css` header (add `Docs URI`)
  - Theme `readme.txt`
  - ThemeForest item description (link from "Documentation" tab)
  - UIX Themes website (Milano product page)
- [ ] Announce — newsletter, social, ThemeForest item update note

### I. Post-launch monitoring (first 30 days)

- [ ] Monitor Search Console for indexing issues
- [ ] Monitor 404s via Cloudflare Analytics
- [ ] Review "Was this helpful?" widget output weekly
- [ ] Identify content gaps from support tickets and Pagefind search logs (if available)
- [ ] Schedule first docs maintenance pass at 30-day mark

### Open items

- [ ] Confirm whether UIX Themes already has a privacy policy URL to link to (otherwise we need to draft one for the docs footer)
- [ ] Choose the "Was this helpful?" implementation — Cloudflare Worker + KV is the simplest, but third-party options exist
- [ ] Confirm final VPS deploy path convention for sibling docs on `docs.uix.store`
