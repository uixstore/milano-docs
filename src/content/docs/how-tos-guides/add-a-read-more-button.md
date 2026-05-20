---
title: Add a Read More button to text sections
description: Split long content with a collapsible Read More section on your Milano store.
---

Long blocks of text overwhelm visitors. A Read More button lets you show a short preview and hide the rest until the visitor chooses to expand it.

## In the Block Editor (Gutenberg)

### Use the Details block

WordPress includes a built-in toggle block.

1. Edit your page in the Block Editor.
2. Add a **Details** block.
3. Enter the summary text in the **Summary** field (for example, "Read more about our shipping policy").
4. Add the full content inside the block.

Visitors see the summary text with a dropdown arrow. Clicking it reveals the hidden content.

### Use the More block

The More block splits content at a specific point.

1. Place your cursor where you want the split.
2. Add a **More** block.
3. Content before the block shows on archive pages. Content after it is hidden.

:::note
The More block affects how content appears on blog archive pages, not on the single page itself. Use the Details block for on-page collapsing.
:::

## In Elementor

### Use the Toggle widget

1. Edit your page with Elementor.
2. Search for the **Toggle** widget in the left panel.
3. Drag it onto your page.
4. Enter your summary as the **Title**.
5. Add the full content in the **Content** area.
6. You can add multiple toggle items for different sections.

### Use the Inner Section with a button and hidden column

For a custom Read More button:

1. Add an **Inner Section** below your preview text.
2. Add a **Button** widget with the text "Read More".
3. Add another section below it with the hidden content.
4. Use Elementor's **Motion Effects** to show the content on button click.

## In WPBakery

### Use the Toggle element

1. Edit your page with WPBakery.
2. Add a **Toggle** element.
3. Add sections inside the toggle, each with a title and content.
4. Save and preview the page.

## Style the Read More button

To match the button to your Milano store's style:

1. Go to **Milano → Theme Settings → Buttons**.
2. The toggle and details blocks inherit your theme's link and button styles.
3. For custom styling, add CSS under **Milano → Theme Settings → Custom CSS**.

## Troubleshooting

**Problem:** The toggle does not expand when clicked.
**Fix:** A JavaScript error on the page may be blocking the toggle. Check your browser console (F12) for errors. A plugin conflict is the most common cause.

**Problem:** The Read More content looks unstyled.
**Fix:** The toggled content inherits your theme's typography settings. Check **Milano → Theme Settings → Typography** to ensure your body text styles are set.

## Next steps

- [Use Milano with the Block Editor](../page-builder/use-milano-with-the-block-editor/) — learn about Milano's Gutenberg blocks.
- [Buttons](../theme-settings/buttons/) — customize button styles across your store.
