---
title: Upload custom fonts
description: Add your own font files to Milano and use them across your store.
---

You can upload your own font files to use a brand typeface that is not available through Google Fonts. Milano supports WOFF and WOFF2 formats.

## Prepare your font files

You need font files in **WOFF** or **WOFF2** format. Most font foundries provide these formats. If you have TTF or OTF files, convert them using a tool like [Font Squirrel Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator).

For each font family you upload, include the weights you plan to use:

- Regular (400)
- Bold (700)
- Italic (400 italic)
- Bold Italic (700 italic)

## Upload your fonts

1. Go to **Milano → Theme Settings → Typography**.
2. Find the **Custom fonts** section.
3. Click **Add new font**.
4. Enter a name for your font family (for example, "Brand Sans").
5. Upload the font files for each weight you want to use.
6. Click **Save Changes**.

## Use your custom font

After uploading, your custom font appears in the font family dropdowns throughout the Typography settings. Select it for headings, body text, or any other typography element.

1. Go to **Milano → Theme Settings → Typography**.
2. Find the element you want to change (for example, **Heading font**).
3. Open the font family dropdown and select your custom font.
4. Click **Save Changes**.

:::caution
If you switch away from your custom font, the uploaded files remain on your server. Delete unused fonts from the Custom fonts section to free up space.
:::

## Troubleshooting

**Problem:** My font does not appear in the dropdown after uploading.
**Fix:** Refresh the page. The font list updates after you save changes.

**Problem:** The font file format is not accepted.
**Fix:** Milano accepts WOFF and WOFF2 only. Convert TTF or OTF files to WOFF2 using an online converter.

## Next steps

- [Load Google Fonts locally](./load-google-fonts-locally/) — an alternative to custom fonts that uses Google Fonts served from your own server.
- [Typography settings](../theme-settings/typography/) — set font sizes, line heights, and letter spacing.
