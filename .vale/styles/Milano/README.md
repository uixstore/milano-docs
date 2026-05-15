# Milano Vale style

Custom Vale rules for Milano documentation. See `PLAN.md` Step 3 for the writing standards these enforce.

## Rule files

- `Terminology.yml` — terminology lock-ins (e.g. "Customizer" not "Theme Options").
- `BannedWords.yml` — patronizing words to avoid.
- `PlainWords.yml` — plain-word preferences.

## Running Vale locally

Vale is a Go binary, not an npm package. Install once:

```bash
brew install vale
```

Then sync the third-party packages (write-good, proselint, alex):

```bash
vale sync
```

Lint:

```bash
vale src/content/docs
```
