---
title: Load Google Fonts locally
description: Serve Google Fonts from your own server to improve page speed and visitor privacy.
---

Google Fonts loads font files from Google's servers by default. This adds an external request to every page and sends visitor IP addresses to Google. Loading fonts locally removes that external request and keeps font files on your own server.

Milano includes a built-in option to download and serve Google Fonts locally.

## Turn on local Google Fonts

1. Go to **Milano → Theme Settings → Typography**.
2. Find the **Google Fonts** section.
3. Turn on **Load fonts locally**.
4. Click **Save Changes**.

Milano downloads the font files your site uses and stores them in your WordPress uploads folder. Future page loads serve these files from your own server instead of Google's CDN.

## What changes

- Font files download once when you turn on the option.
- Your site no longer makes requests to `fonts.googleapis.com` or `fonts.gstatic.com`.
- The fonts look identical — the same font files are used, just served from a different location.
- Page speed improves because you remove two external DNS lookups.

## Update local fonts after a theme update

When Milano updates, new font weights or styles may become available. Refresh your local copies:

1. Go to **Milano → Theme Settings → Typography**.
2. Turn off **Load fonts locally**.
3. Click **Save Changes**.
4. Turn it back on.
5. Click **Save Changes** again.

Milano re-downloads all active font files with the latest versions.

## Troubleshooting

**Problem:** Fonts look different after turning on local loading.
**Fix:** Clear your browser cache and your site cache. The old Google Fonts CSS may still be cached.

**Problem:** Font files use too much disk space.
**Fix:** Each font family uses about 200–500 KB depending on how many weights you use. If you selected many font families, reduce your typography selections under **Milano → Theme Settings → Typography**.
