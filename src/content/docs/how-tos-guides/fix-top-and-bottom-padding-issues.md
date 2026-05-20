---
title: Fix top and bottom padding issues
description: Remove unwanted spacing on pages and sections in your Milano store.
---

Extra space above or below a section usually comes from one of three sources: default theme spacing, page builder settings, or empty HTML elements. Here is how to track down the cause and fix it.

## Check the page template

Some page templates include extra padding for the content area.

1. Edit the page in Elementor or the Block Editor.
2. Open the page settings (gear icon in Elementor, or the page settings sidebar in the Block Editor).
3. Look for a **Page layout** or **Template** option.
4. Try switching between **Default**, **Full width**, and **Elementor full width**.

The full-width template often removes the default content padding.

## Adjust spacing in Elementor

If you are using Elementor to build the page:

1. Click the section that has extra spacing.
2. Go to the **Advanced** tab in the left panel.
3. Check the **Margin** and **Padding** values.
4. Set unwanted values to `0`.

:::tip
Use the chain icon to unlink margin and padding values so you can control top and bottom independently.
:::

### Remove the default section gap

Elementor adds a gap between sections by default.

1. Click the section handle (six dots at the top).
2. Go to **Advanced → Margin**.
3. Set **Bottom margin** to `0` on the section above, or **Top margin** to `0` on the section below.

## Adjust spacing in the Block Editor

1. Select the block or group that has extra spacing.
2. Open the **Styles** sidebar on the right.
3. Check **Spacing → Padding** and **Spacing → Margin**.
4. Reduce or remove values that create unwanted space.

## Check for empty elements

Empty paragraphs, line breaks, or spacer blocks add visible space.

1. Switch to the **Code editor** view (Block Editor) or inspect the page source.
2. Look for empty `<p></p>` tags, `<br>` tags, or spacer blocks.
3. Delete them.

## Use custom CSS for stubborn spacing

If the spacing comes from the theme and you cannot change it through settings, override it with CSS.

1. Go to **Milano → Theme Settings → Custom CSS**.
2. Add a rule targeting the specific element:

```css
.page-id-123 .entry-content {
  padding-top: 0;
  padding-bottom: 0;
}
```

Replace `page-id-123` with the actual page ID. You can find the page ID in the URL when editing the page (`post=123`).

:::caution
Custom CSS overrides theme defaults. If Milano updates its spacing, your CSS may need adjusting. Test after each theme update.
:::

## Troubleshooting

**Problem:** I removed padding but the space is still there.
**Fix:** The space may come from a margin on a child element, not padding on the parent. Use your browser's developer tools (F12) to inspect the element and find which property creates the space.

**Problem:** My custom CSS does not work.
**Fix:** Another CSS rule may have higher specificity. Add `!important` to your rule as a test. If it works, refine your selector to be more specific instead of relying on `!important`.

## Next steps

- [Custom CSS](../theme-settings/custom-css/) — add custom styles to override theme defaults.
- [Layout and containers](../theme-settings/layout-and-containers/) — control the overall page width and content area.
