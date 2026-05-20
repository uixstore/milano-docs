---
title: Translate Milano with Loco Translate
description: Use the free Loco Translate plugin to translate Milano theme strings into any language.
sidebar:
  order: 2
---

Use Loco Translate to change every piece of text that comes from the Milano theme. This works well when you need your store in one language other than English.

Loco Translate is a free WordPress plugin. It reads the theme's translation template and lets you type in your own text for each string.

## Before you begin

- Install and activate the Milano theme.
- Make sure you know which language you want to translate into.
- Back up your site before installing new plugins.

## Install Loco Translate

1. Go to **Plugins → Add New Plugin** in your WordPress admin.
2. Search for "Loco Translate".
3. Click **Install Now** on the Loco Translate result by Tim Whitlock.
4. Click **Activate**.

![WordPress plugin search results showing Loco Translate by Tim Whitlock with the Install Now button visible](../../../assets/shared/placeholder.svg)

_Screenshot: WordPress plugin search results with Loco Translate highlighted_

## Create a new language for Milano

1. Go to **Loco Translate → Themes** in your WordPress admin.
2. Find "Milano" in the list and click it.
3. Click **New language** at the top of the screen.
4. Choose your target language from the "Choose a language" dropdown.
5. Select a location to save the translation file.
6. Click **Start translating**.

![Loco Translate new language screen with language dropdown and location options for Milano theme](../../../assets/shared/placeholder.svg)

_Screenshot: Loco Translate new language screen showing language selection and file location options_

:::caution
Save your translation file in the **custom** location, not the **author** or **system** location. Files saved in the author or system folders get overwritten when you update the theme. The custom folder lives outside the theme directory and keeps your translations safe.
:::

## Translate individual strings

You now see a list of every translatable string in Milano. The left column shows the original English text. The right column is where you type your translation.

1. Use the search box at the top to find a specific string.
2. Click on a string to open the translation field.
3. Type your translation in the bottom text box.
4. Click **Save** to store the translation.

![Loco Translate string editor showing original English text on the left and translation input field on the right](../../../assets/shared/placeholder.svg)

_Screenshot: Loco Translate string editor with a sample string being translated_

:::tip
Translate the most visible strings first. Focus on navigation labels, button text, and checkout messages. These affect the customer experience the most. You can always come back and translate the rest later.
:::

### Filter untranslated strings

The filter bar at the top lets you narrow down the list:

- Click **Untranslated** to see only strings that still need work.
- Click **Fuzzy** to see strings marked as needing review.
- Click **Translated** to review what you have already done.

## Save and compile translations

Loco Translate saves your work as you go. You can also compile the translation file manually.

1. Click the **Sync** button to pick up any new strings added in a recent theme update.
2. Click **Save** to write all changes to the file.
3. The compiled `.mo` file is generated automatically. Your site uses this file to show translated text.

:::note
The `.po` file holds your translations in a readable format. The `.mo` file is the compiled version that WordPress reads. Loco Translate builds the `.mo` file each time you save.
:::

## Update translations after a theme update

When you update Milano, new strings may appear. Your existing translations stay intact, but you should check for anything new.

1. Go to **Loco Translate → Themes** and click "Milano".
2. Click **Sync**. This pulls in any new strings from the updated theme.
3. Filter by **Untranslated** to see what needs work.
4. Translate the new strings and click **Save**.

:::caution
This is why you saved to the custom location. If you saved to the author location, a theme update would wipe out all your translations. Check that your file path includes `loco/themes/` rather than `themes/milano/languages/`.
:::

## Troubleshooting

**Problem:** Translations do not appear on the site.

**Fix:** Check that the translation file is in the custom location. Go to **Loco Translate → Themes → Milano** and look at the file path. It should read something like `/wp-content/languages/loco/themes/milano-xx_XX.po`. If it shows the theme folder instead, create a new translation in the custom location and re-enter your work.

**Problem:** Some strings still show in English.

**Fix:** Those strings may come from a plugin, not the theme. Loco Translate only handles theme strings. Go to **Loco Translate → Plugins** to translate plugin text separately.

**Problem:** The language does not show up in the list.

**Fix:** WordPress may not have the language pack installed. Go to **Settings → General** and check that your site language is set correctly. WordPress downloads language packs automatically when you change this setting.

## Next steps

- Running a multilingual store? Switch to [WPML](./wpml-guide/) or [Polylang](./polylang-guide/).
- Check [WPML compatibility notes](../plugin-compatibility/wpml/) and [Polylang compatibility notes](../plugin-compatibility/polylang/) for known issues with those plugins.
- Having trouble? See the [Common issues](../troubleshooting/common-issues/) page.
