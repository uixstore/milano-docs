---
name: write-docs
description: Draft, edit, or review a Milano theme user documentation page end-to-end. Invoke when the user asks to write/draft/author a docs page, fill in a stub under src/content/docs/, edit or rewrite an existing page, or review a draft against the Milano style guide. Handles voice/tone enforcement, frontmatter, page structure (how-to / reference / tutorial), screenshot guidance, and inclusive language. Do NOT use for repo infra, Astro config, or build issues.
---

# Milano docs — writing skill

You are drafting user-facing documentation for the **Milano WordPress theme** at `https://docs.uix.store/milano/`. Audience: **non-technical store owners** who bought Milano on ThemeForest.

This skill is a **one-shot drafter**. Given a page brief (path, topic, or stub), produce a complete, publish-ready Markdown page in one pass, then report back what was written and any open questions for the user to fill in.

---

## 0. Pre-flight — before you write a single line

Run this checklist silently. If anything is unclear, ASK before drafting — don't invent.

1. **Locate the page**. Is there a stub under `src/content/docs/<section>/`? If so, read it. If the user gave a topic but no path, propose one based on `astro.config.mjs` sidebar.
2. **Identify the page type** — how-to, reference, tutorial, or landing (see §3). The type dictates structure.
3. **Check `PLAN.md`** for the section's brief if one exists (Step 6 has full briefs for Getting Started pages).
4. **Check `STATUS.md`** for blocking inputs. If the page depends on Milano-specific data you don't have (purchase-code screen, plugin list, demo persona, etc.), draft what you can and leave a clearly-marked `<!-- TODO(user): ... -->` block rather than guessing.
5. **Confirm scope with the user** if the brief is ambiguous (one paragraph? full page? rewrite vs. patch?). Default: a complete page.

---

> **Before drafting or reviewing any prose, read [`examples/voice-examples.md`](./examples/voice-examples.md).** It contains ~25 before/after rewrites grouped by rule. Pattern-match against those examples — they're the canonical demonstration of the voice rules below.

## 1. Voice — the five Milano principles

Direction: **concise, friendly, nothing fancy.**

1. **Lead with the action, not the preamble.**
   - ✅ "To change your logo, go to **Appearance → Customize → Site Identity**."
   - ❌ "If you'd like to change your logo, the first thing you'll need to do is navigate to…"
2. **Talk like a helpful colleague** — not a marketer, not a lecturer.
3. **Cut filler.** "in order to" → "to", "at this point" → "now", "please note that" → drop.
4. **Short sentences.** 15–20 words average. Break anything past 25.
5. **Skip celebrations and hedges.** No "Awesome!", "Great job!", "you might want to consider…". Say "do X" or "we recommend X".

**Voice rules** (non-negotiable):

- Second person ("you"). Never "the user".
- Present tense, active voice.
- Contractions OK ("you'll", "don't").
- Grade-8 reading level. Define WP/Woo terms on first use.
- No exclamation marks except in genuine warnings.

---

## 2. Banned words & plain-word swaps (Vale enforces; pre-empt it)

**Banned outright** — they patronize the reader:

> easy, simple, just, obviously, merely, of course

**Plain-word swaps:**

| Use           | Not                                     |
| ------------- | --------------------------------------- |
| use           | utilize                                 |
| help          | assist                                  |
| show          | display (where natural)                 |
| buy           | purchase                                |
| start         | initiate                                |
| turn on / off | enable / disable (in user-facing copy)  |
| about         | regarding                               |
| change        | modify                                  |

**Terminology lock-ins:**

- **Customizer** (not Theme Options)
- **demo content** (not sample data)
- **menu** (not nav)
- **sidebar** (not side panel)
- **header builder / footer builder** (lowercase mid-sentence)
- **WordPress** (full word, not "WP" in body copy — "WP" only inside code/paths)
- **WooCommerce** (full word, not "Woo" except `Woo` as a casual aside is fine in tips)

**Inclusive language:**

- No "guys" → "everyone" / "folks".
- "They" instead of "he/she". Better: rewrite to "you".
- No idioms that don't translate ("piece of cake", "kill two birds…").

---

## 3. Page structure — pick a pattern, then adapt

There is **no strict template**. Pick the pattern that fits the page, then bend it to the topic.

### Pattern A — How-to (most common)

The default. Reader has a goal; you walk them to it.

```
# <Task-verb title>            ← e.g. "Change your logo"

<1–2 sentence intro: what this page covers, who it's for.>

## Before you begin            ← optional, only if real prerequisites
- Bullet 1
- Bullet 2

## <Step group 1>
1. Numbered step. **Bold** the UI labels.
2. Next step. Reference paths as **Appearance → Customize → Site Identity**.
   ![Alt text describing the screenshot](../../assets/<section>/<page>/step-1.png)
3. …

## <Step group 2>              ← if the task has phases
…

## Troubleshooting             ← only if there are known gotchas
**Problem:** Short symptom.
**Fix:** What to do.

## Next steps
- [Link to logical next page](../next-page/)
```

### Pattern B — Reference

Reader knows what they want to look up. Optimize for **scan**, not flow.

```
# <Noun title>                 ← e.g. "Customizer settings"

<1–2 sentence intro defining what this is.>

## <Setting / option name>
**What it does.** One sentence.
**Where to find it.** **Appearance → Customize → …**
**Default.** Off / On / value.
**When to change it.** One sentence.

## <Next setting>
…
```

Use a **table** instead of repeated sections when the rows are uniform (e.g. a list of widgets with two columns).

### Pattern C — Tutorial

Longer, narrative, "Get started with…". Multiple steps that build on each other, with the reader producing something by the end.

```
# Get started with <X>

## What you'll build
1–2 sentences + screenshot of the final result.

## What you'll need
- Bullets.

## Step 1 — <verb phrase>
…
## Step 2 — <verb phrase>
…

## What's next
- Link
- Link
```

### Pattern D — Landing page (section index)

One per top-level section. Short. Routes the reader.

```
# <Section name>

<1–2 sentence intro: what this section covers.>

## In this section
- [Page A](./page-a/) — one-line hook.
- [Page B](./page-b/) — one-line hook.
- …
```

---

## 4. Frontmatter — required on every page

```yaml
---
title: Change your logo               # sentence case, required
description: Replace the default Milano logo, set a retina version, and adjust its size.  # ≤160 chars, required
sidebar:
  order: 2                            # optional; controls section ordering
draft: false                          # set true for WIP commits
---
```

- **`title`** — sentence case. How-to = task verb ("Change your logo"). Reference = noun ("Customizer settings"). Tutorial = "Get started with…".
- **`description`** — used as `<meta description>`. Must summarize the page in one sentence. SEO-critical.
- Never use H1 (`#`) in the body — Starlight renders it from `title`.

---

## 5. Formatting conventions

- **Bold** UI labels: "Click **Save Changes**".
- `Backticks` for filenames, paths, code, exact values: `style.css`, `wp-content/themes/milano/`.
- Arrow for nav paths: **Appearance → Customize → Site Identity** (no `>`, no `/`).
- Numbers: spell out one–nine; numerals for 10+. Always numerals for step counts and version numbers.
- Dates: "May 15, 2026".
- Links: relative paths, descriptive text. Never "click here". External links open in the same tab — don't set `target="_blank"`.

**Admonitions — only these four, mapped to Starlight syntax:**

| Tag          | Use for                           |
| ------------ | --------------------------------- |
| `:::note`    | Neutral, useful info              |
| `:::tip`     | Optional best practice            |
| `:::caution` | Must do this or it won't work     |
| `:::danger`  | Could break the site or lose data |

No "Heads up", "Pro tip", "FYI", or any custom variants.

```markdown
:::caution
You must register your purchase code before Milano can check for updates.
:::
```

---

## 6. Screenshots — apply Step 5 standards

When you reference a screenshot, use this exact pattern:

```markdown
![Customizer panel with the brand-blue color selected for primary buttons](../../assets/customizer/colors/primary-button.png)
```

- **Alt text** describes what's shown. Never lead with "Screenshot of…".
- **Path** is relative, mirrors `src/content/docs/` tree under `src/assets/`.
- **Filenames** are kebab-case, descriptive, numbered if sequential: `step-1-open-customizer.png`.

If the actual image file doesn't exist yet, still write the reference and add a `<!-- TODO(screenshot): describe what to capture -->` comment immediately after, so the author knows exactly what to shoot.

**Capture rules** (for guidance you give the user, or if you're describing a shot to take):

- WP admin in default blue color scheme, English, latest stable WP.
- Chrome, 1440×900 window, **2x retina** capture.
- PNG source. ≤ 300 KB raw. Crop admin to the WP admin pane (no browser chrome). Frontend = naked content, no browser frame.
- Annotation = single accent color, 3–4 px stroke, **boxes around regions** preferred over arrows. No text labels burned into the image — put labels in the surrounding Markdown.

Motion (GIF/video): default is **don't**. Only when drag-and-drop or animation is essential. Then: MP4, < 2 MB, < 10 s, no audio.

---

## 7. Self-check before reporting "done"

Run this mental pass on the page you just wrote. If you can't tick a box, fix it or call it out in your final report.

- [ ] `title` is sentence case and reflects the page type (verb / noun / "Get started with…").
- [ ] `description` is one sentence, ≤160 chars, and would make sense as a Google snippet.
- [ ] First line of body leads with the action, not preamble.
- [ ] No banned word (`easy`, `simple`, `just`, `obviously`, `merely`, `of course`) anywhere.
- [ ] No plain-word violations (`utilize`, `purchase`, `enable/disable` in body copy, etc.).
- [ ] Terminology matches lock-ins (Customizer, demo content, menu, sidebar).
- [ ] Every UI label is **bold**, every path uses **→**, every filename is in `backticks`.
- [ ] Every image reference has descriptive alt text (no "Screenshot of…").
- [ ] At least one "Next step" link at the bottom (unless landing page).
- [ ] No exclamation marks outside genuine warnings.
- [ ] No sentences over ~25 words.
- [ ] Admonitions use only `:::note|tip|caution|danger`.
- [ ] No H1 in body. Headings start at `##`.

---

## 8. Reviewing / editing an existing page

When the user asks you to **review** or **edit** a draft (not write fresh):

1. Read the file in full.
2. Run the §7 self-check against it.
3. Produce a **diff-style edit** (use the Edit tool), not a rewrite from scratch, unless the page is fundamentally off-pattern.
4. In your final report, list the categories of changes made (voice tightening, banned-word swaps, structure, frontmatter) — not every individual edit.

For a **lighter review** (user asks "look at this, what would you change?"): give a short bulleted critique grouped by §7 categories. Don't edit yet — wait for the go-ahead.

---

## 9. Output format — how to report back

After drafting, your reply to the user should be **terse**:

1. One sentence: what you wrote and where (path).
2. Bulleted list of `TODO(user)` / `TODO(screenshot)` markers you left, if any — so the user knows what inputs are still needed.
3. Bulleted list of any judgment calls you made that the user might want to revisit.

Do not paste the page contents back into the chat — the file is the artifact.

---

## 10. When to stop and ask

Ask before drafting when:

- The page brief is ambiguous (what's the goal? who's the reader on this specific page?).
- The page depends on Milano-specific facts you don't have and that aren't in `PLAN.md` / `STATUS.md` (e.g. the exact name of a Milano admin screen).
- The user gave a one-word topic and there's no stub or brief to anchor against.

Do **not** ask before drafting when:

- The brief is in `PLAN.md` Step 6 (Getting Started pages).
- The stub already has frontmatter that pins down title + description.
- The page is a landing / index page — structure is fixed by Pattern D.

---

## Reference links

- Voice before/after examples: [`examples/voice-examples.md`](./examples/voice-examples.md)
- Full plan & decisions: `PLAN.md`
- Current state & blocking inputs: `STATUS.md`
- Sidebar / nav tree: `astro.config.mjs`
- Vale custom rules: `.vale/styles/Milano/`
