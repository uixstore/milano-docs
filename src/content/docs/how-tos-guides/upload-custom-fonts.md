---
title: Upload custom fonts
description: Add your own font files to WordPress and use them in Milano's typography settings.
---

Milano's typography settings pull font choices from the WordPress font library. WordPress 7.0 brought the native font library to classic themes, so you can upload your own font files and use them anywhere Milano lets you pick a font family.

:::caution
Your site must run **WordPress 7.0 or later** to use this feature. On older versions, the **Appearance → Fonts** menu isn't available and uploaded fonts won't appear in Milano's font family lists.
:::

## Upload a font

1. Go to **Appearance → Fonts** in the WordPress admin menu.
2. Open the **Upload** tab.
3. Drag a font file into the upload area, or click to browse your computer.
4. Click **Upload** to add the font to your library.

The font library supports `.ttf`, `.otf`, `.woff`, and `.woff2` files. Each file is one variant (for example, one weight or style) of a font family. Upload every variant you plan to use — regular, bold, italic, and so on.

After the upload finishes, the font appears in the **Library** tab with its active variants listed.

## Use an uploaded font in Milano

Once a font is in your library, Milano lists it in its font family dropdowns:

1. Go to **Appearance → Customize → Global**.
2. Open the **Typography** section.
3. Choose **Body font** or **Heading font**.
4. Click the **Font family** field and pick the font you uploaded.
5. Set the **Weight**, **Size**, **Line height**, and **Letter spacing** as needed.
6. Click **Publish** to save.

The uploaded font now applies wherever that typography setting is used.

## Remove a font

1. Go to **Appearance → Fonts**.
2. Open the **Library** tab.
3. Click the font family you want to remove.
4. Uncheck the variants you no longer need, then click **Update** to hide them, or check the family and click **Delete** to remove it entirely.

:::note
If you delete a font that Milano is still using, that typography setting falls back to the default font family. Re-upload the font or pick a different family to restore the original look.
:::

## Learn more

For the full details on the WordPress font library — supported formats, installing Google Fonts, and managing variants — see the <a href="https://wordpress.org/documentation/article/the-font-library/" target="_blank" rel="noopener">official WordPress tutorial on the Font Library</a>.
