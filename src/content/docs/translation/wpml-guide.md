---
title: WPML guide
description: Set up WPML to run a multilingual store with Milano.
sidebar:
  order: 3
---

This guide walks you through setting up WPML with Milano. WPML lets you run a store in multiple languages. Each language gets its own pages, products, and menus.

WPML is a paid plugin. You need at least the **Multilingual CMS** tier to translate WooCommerce products. You also need the **WPML String Translation** addon to translate theme text.

## What you will build

A multilingual Milano store where visitors can switch between languages. Each language has its own homepage, product catalog, and navigation menu.

![Milano storefront with a language switcher in the header showing English and French options](../../../assets/shared/placeholder.svg)

_Screenshot: Milano storefront with language switcher visible in the header_

## What you will need

- Milano theme installed and active.
- WooCommerce installed if you are running a store.
- A WPML license (paid). The Multilingual CMS tier or higher.
- The WPML String Translation addon (included with your license).

## Step 1 — Install and configure WPML

1. Buy a WPML license from [wpml.org](https://wpml.org/).
2. Download the WPML plugin files from your WPML account.
3. Go to **Plugins → Add New Plugin** in WordPress.
4. Click **Upload Plugin** at the top.
5. Upload the WPML core plugin file and click **Install Now**.
6. Activate the plugin.
7. Repeat the upload step for these WPML addons:
   - WPML String Translation
   - WPML Translation Management
   - WPML Media Translation
   - WooCommerce Multilingual (if you use WooCommerce)
8. Go to **WPML → Setup** to start the configuration wizard.

![WordPress plugins screen showing WPML core plugin and addons all activated](../../../assets/shared/placeholder.svg)

_Screenshot: WordPress plugins list with WPML core and all required addons activated_

## Step 2 — Set up languages

The WPML setup wizard guides you through language configuration.

1. Enter your WPML site key when asked. This activates your license.
2. Choose the default language for your site. This is the language your content is currently in.
3. Select the languages you want to add. You can pick more than one.
4. Choose how the language appears in URLs. You have three options:
   - **Different languages in directories** — `yoursite.com/fr/` for French. This is the most common choice.
   - **Different languages in domains** — `yoursite.fr` for French. You need separate domains set up.
   - **Different languages in parameters** — `yoursite.com/?lang=fr`. This works but is not ideal for SEO.
5. Add a language switcher. You can place it in the menu, in the footer, or both.
6. Complete the wizard. WPML saves your settings.

:::tip
Use language directories for most stores. They work well with search engines and do not require extra domain setup. You can add a language switcher to your header menu later through **Appearance → Menus**.
:::

## Step 3 — Translate pages and products

### Translate pages

1. Go to **Pages → All Pages**.
2. You will see language columns next to each page. Click the **+** icon under the language you want to add.
3. The translation editor opens. You can use the built-in editor or translate on the front end.
4. Enter your translated title and content.
5. Click **Save**.

![WordPress pages list showing English pages with plus icons to add French translations](../../../assets/shared/placeholder.svg)

_Screenshot: WordPress pages list with translation status columns showing plus icons for adding translations_

### Translate products

The process is the same for products.

1. Go to **Products → All Products**.
2. Click the **+** icon under the target language.
3. Fill in the translated product title, description, price, and other fields.
4. Click **Save**.

:::note
WooCommerce Multilingual handles product variations, categories, and tags. Each of these needs its own translation. Set up product categories first, then translate individual products.
:::

### Translate with the translation editor

WPML offers a visual translation editor. It shows the original and translation side by side.

1. Go to **WPML → Translation Management**.
2. Select the content you want to translate.
3. Click **Translate selected items**.
4. Work through each string in the editor.
5. Mark each translation as complete when you are done.

## Step 4 — Translate theme strings through WPML String Translation

Milano has text strings that come from the theme itself. These include labels like "Add to cart", "Related products", and pagination text. WPML String Translation handles these.

1. Go to **WPML → String Translation**.
2. Wait for WPML to scan for strings. This may take a moment.
3. Use the "Select domain within admin texts" dropdown and choose **milano** to filter to theme strings.
4. Find the string you want to translate. Click the **+** icons under each language.
5. Type your translation and click **Save**.

![WPML String Translation screen showing Milano theme strings with translation fields for each language](../../../assets/shared/placeholder.svg)

_Screenshot: WPML String Translation interface filtered to the Milano theme domain with translation fields visible_

:::tip
Scan for new strings after updating Milano. Go to **WPML → Theme and plugins localization**, select Milano, and click **Scan the theme for strings**. This picks up any new text added in the update.
:::

## Step 5 — Set up the language switcher in Milano

You can add the WPML language switcher to your Milano header or footer.

### Add to a menu

1. Go to **Appearance → Menus**.
2. Select the menu you want to edit.
3. Check the "Language switcher" option in the left panel.
4. Click **Add to menu**.
5. Drag the language switcher to your preferred position.
6. Click **Save Menu**.

### Add through the Customizer

1. Go to **Appearance → Customize**.
2. Find the header or footer builder section.
3. Add a WPML language switcher widget or element.
4. Configure the display options (flags, language names, or both).
5. Click **Publish**.

## Recommended settings for Milano

These settings work well with Milano's header and footer builder.

| Setting                              | Recommended value     | Why                                                      |
| ------------------------------------ | --------------------- | -------------------------------------------------------- |
| URL format                           | Language directories  | Works with SEO and needs no extra domain setup           |
| Language switcher type               | Menu item             | Fits naturally in Milano's header builder                |
| Hide language if translation missing | Turn on               | Prevents visitors from landing on empty pages            |
| SEO options                          | Turn on hreflang tags | Helps search engines understand your language structure  |
| Copy media on translation            | Turn off              | Saves disk space. Images usually do not need translating |

## Troubleshooting

**Problem:** The language switcher does not appear in the header.

**Fix:** Check that you added the switcher to the correct menu. Go to **Appearance → Menus** and confirm the language switcher is in the menu assigned to the header location. If you use Milano's header builder, add the WPML widget through the Customizer instead.

**Problem:** Theme strings still show in English after translation.

**Fix:** Go to **WPML → Theme and plugins localization** and scan Milano again. Some strings only register after the theme loads them on a page. Visit the front end of your site, then rescan.

**Problem:** Product translations are missing pricing or stock status.

**Fix:** WooCommerce Multilingual syncs product data. Go to **WooCommerce → WooCommerce Multilingual** and check the sync status. Run a manual sync if needed.

## Next steps

- Read the [WPML compatibility notes](../plugin-compatibility/wpml/) for known issues with Milano.
- Compare with the [Polylang guide](./polylang-guide/) if you want a free alternative.
- Need help translating without a multilingual plugin? Try [Loco Translate](./translate-milano-with-loco-translate/).
