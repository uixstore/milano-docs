# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

User documentation for the Milano WordPress theme, built with **Astro 6 + Starlight 0.39**. Hosted at `https://docs.uix.store/milano/`. Pure documentation site — no API routes, no server code, no database.

## Developer commands

```bash
nvm use            # Node 22 LTS (pinned in .nvmrc)
pnpm install
pnpm dev           # http://localhost:4321/milano/
pnpm build         # production build → ./dist/
pnpm check         # Astro type-check
pnpm exec prettier --check .
pnpm exec markdownlint-cli2 "**/*.md"
vale src/content/docs   # requires `brew install vale && vale sync`
```

Pre-commit (husky + lint-staged) auto-formats and lints staged `.md` files. Do not bypass it.

## Architecture

- **Framework**: Starlight (Astro). Pages are plain Markdown/MDX in `src/content/docs/<section>/`.
- **`base: '/milano'`** in `astro.config.mjs` — all internal links/assets are prefixed. Never change this.
- **Sidebar is explicitly configured** in `astro.config.mjs` — not auto-generated from folders. 18 sections.
- **Images** live in `src/assets/<section>/<page>/`, mirroring the docs folder structure. Astro optimizes at build.
- **No code logic** — this is a pure documentation site.

## Content structure

```
src/content/docs/
├── index.mdx                     # homepage
├── getting-started/index.md      # 18 section landing pages exist as stubs
├── demos/
├── customizer/
└── ... (18 sections total — see astro.config.mjs sidebar)
```

Folder names become URL slugs. Filenames become URL slugs within a folder.

## Frontmatter (every page)

```yaml
---
title: Change your logo # sentence case, required
description: Replace the default... # meta description, required, ≤160 chars
sidebar:
  order: 2 # optional, controls position in section
draft: false # set true to hide from prod build
---
```

## Writing standards (from PLAN.md Step 3)

- **Voice**: second person ("you"), present tense, active voice, contractions OK.
- **No**: "easy", "simple", "just", "obviously", "merely", "of course" (enforced by Vale).
- **UI labels**: **bold** — "Click **Save Changes**".
- **Paths**: **Appearance → Customize → Site Identity**.
- **Admonitions**: `:::note`, `:::tip`, `:::caution`, `:::danger` only.
- **Plain words**: use not utilize, help not assist, change not modify, turn on/off not enable/disable.
- Full style guide: `PLAN.md` Step 3. Vale rules: `.vale/styles/Milano/`.

## Current state (see STATUS.md for details)

- Scaffold complete: 18 section stubs, quality gates, deploy workflow.
- **Nothing committed to a remote yet.** Repo is local-only on `main`.
- Deploy workflow (`.github/workflows/deploy.yml`) is gated to `workflow_dispatch` (manual). `push: [main]` trigger is commented out until VPS secrets are configured.
- Content not started — blocked on Milano-specific inputs (plugins list, purchase code screen, demo data persona, etc.). See `STATUS.md` "Inputs blocking next steps".

## Key files

| File                    | Purpose                                                          |
| ----------------------- | ---------------------------------------------------------------- |
| `PLAN.md`               | All decisions, writing standards, nav tree, screenshot standards |
| `STATUS.md`             | What's built, what's deferred, blocking inputs                   |
| `astro.config.mjs`      | Site config, base path, sidebar                                  |
| `src/content.config.ts` | Starlight content collection schema                              |
| `.vale/styles/Milano/`  | Custom terminology, banned words, plain-word rules               |

## Conventions

- Package manager: **pnpm** (not npm or yarn).
- Markdown files only for content. Astro components only if customizing Starlight.
- `draft: true` hides a page from production builds — safe to commit WIP.
- Internal links use relative paths. Never use absolute URLs for internal pages.
