# Milano Docs

User documentation for the [Milano](https://milano.uix.store/) WordPress theme by UIX Themes.

Live site (once launched): `https://docs.uix.store/milano/`

This is the contributor README. The full plan, decisions, and writing standards live in [`PLAN.md`](./PLAN.md).

## Setup

Requirements: **Node 22 LTS** and **pnpm**.

```bash
nvm use            # picks up Node 22 from .nvmrc
pnpm install
pnpm dev           # http://localhost:4321/milano/
```

## Useful scripts

| Script         | What it does                          |
| -------------- | ------------------------------------- |
| `pnpm dev`     | Start the local dev server            |
| `pnpm build`   | Build the production site to `./dist` |
| `pnpm preview` | Preview the built site                |
| `pnpm check`   | Run Astro type-checking               |

## Writing a page

Every page lives in `src/content/docs/<section>/`. Filename becomes the URL slug.

Required frontmatter:

```yaml
---
title: Change your logo
description: Replace the default Milano logo, set a retina version, and adjust its size.
---
```

`description` is the meta description — keep it specific and under ~160 characters.

Voice and style rules are in [`PLAN.md`](./PLAN.md) Step 3. The short version: concise, friendly, second person, present tense, no patronizing words.

## Quality gates

Pre-commit runs automatically and formats / lints staged files:

- **Prettier** — formats Markdown and config files.
- **Markdownlint** — catches broken Markdown.
- **Vale** — prose linter (terminology, banned words, plain language). Optional locally; install with `brew install vale && vale sync`.

To run any of these manually:

```bash
pnpm exec prettier --check .
pnpm exec markdownlint-cli2 "**/*.md"
vale src/content/docs            # only if Vale is installed locally
```

## Deploying

`main` is production. Every push to `main` triggers `.github/workflows/deploy.yml`, which:

1. Builds the site with Astro.
2. `rsync`s `./dist/` to the VPS over SSH.
3. Purges Cloudflare cache for `/milano/*`.

Required GitHub repo secrets (see [`PLAN.md`](./PLAN.md) Step 1):

- `VPS_SSH_HOST`, `VPS_SSH_USER`, `VPS_SSH_KEY`, `VPS_DEPLOY_PATH`
- `VPS_SSH_PORT` (optional, defaults to 22)
- `CLOUDFLARE_ZONE_ID`, `CLOUDFLARE_API_TOKEN`

## Project structure

```text
.
├── astro.config.mjs            # site, base, sidebar
├── src/
│   ├── content.config.ts       # Starlight content collection schema
│   ├── content/docs/           # all docs pages
│   ├── assets/                 # screenshots & images (mirror docs structure)
│   └── styles/custom.css       # brand overrides
├── public/                     # static files served as-is
├── .vale/                      # Vale style configuration
├── .github/workflows/          # CI / deploy
└── PLAN.md                     # the plan that drives this repo
```
