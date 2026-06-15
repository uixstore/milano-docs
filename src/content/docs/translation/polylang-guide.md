---
title: Polylang guide
description: Set up Polylang to run a multilingual store with Milano.
sidebar:
  order: 4
---

This guide walks you through setting up Polylang with Milano. Polylang lets you run a store in multiple languages. Each language gets its own pages, products, and menus.

The core Polylang plugin is free. You need the paid **Polylang for WooCommerce** addon to translate products, categories, and other WooCommerce data.

## What you will build

A multilingual Milano store where visitors can switch between languages. Each language has its own homepage, product catalog, and navigation menu.

## What you will need

- Milano theme installed and active.
- WooCommerce installed if you are running a store.
- Polylang (free) from the WordPress plugin directory.
- Polylang for WooCommerce (paid) if you need to translate products.

## Step 1 — Install and configure Polylang

1. Go to **Plugins → Add New Plugin** in your WordPress admin.
2. Search for "Polylang".
3. Click **Install Now** on the Polylang result by WP SYNTEX.
4. Click **Activate**.
5. The Polylang setup wizard opens automatically. If it does not, go to **Languages** in your admin sidebar.

## Step 2 — Set up languages

The setup wizard walks you through language configuration.

1. Choose your default language. This is the language your existing content is in.
2. Add the languages you want to support. Use the search box to find a language quickly.
3. Choose the URL format for your languages:
   - **Language code in the URL** — `yoursite.com/en/` and `yoursite.com/fr/`. This is the recommended option.
   - **Subdomain** — `en.yoursite.com` and `fr.yoursite.com`. You need wildcard subdomain support from your host.
   - **Domain** — `yoursite.com` and `yoursite.fr`. You need separate domains.
4. Decide whether to detect the browser language. Turning this on sends visitors to their browser language automatically.
5. Click **Continue** to save.

:::tip
Use the language code in the URL option for most stores. It works with every host and does not need extra DNS configuration.
:::

## Step 3 — Translate pages and products

### Translate pages

1. Go to **Pages → All Pages**.
2. You will see flag icons next to each page. Hover over a flag and click the plus icon to add a translation.
3. The translation editor opens with a blank page.
4. Enter your translated title and content. You can copy content from the original and translate it yourself, or write from scratch.
5. Click **Publish**.

### Translate products

You need **Polylang for WooCommerce** to translate products. Without it, products appear in all languages with the same content.

1. Install and activate Polylang for WooCommerce from your Polylang account.
2. Go to **Products → All Products**.
3. Click the plus icon under the target language flag.
4. Fill in the translated product title, description, price, and other fields.
5. Click **Publish**.

:::note
Polylang for WooCommerce also handles product categories, tags, attributes, and variations. Translate your categories first so translated products can be assigned to the correct translated category.
:::

### Translate product categories

1. Go to **Products → Categories**.
2. You will see language columns next to each category.
3. Click the plus icon to add a translation for a category.
4. Enter the translated name and description.
5. Click **Add new category**.

## Step 4 — Translate theme strings

Polylang does not translate theme strings on its own. You have two options.

### Option 1 — Use Loco Translate with Polylang

This is the most common approach.

1. Install Loco Translate (free) from the WordPress plugin directory.
2. Go to **Loco Translate → Themes** and click "Milano".
3. Create a new language for each language you set up in Polylang.
4. Translate the strings you need.
5. Save to the **custom** location so updates do not overwrite your work.

See the full [Loco Translate guide](./translate-milano-with-loco-translate/) for step-by-step instructions.

### Option 2 — Use Polylang's string translation

Polylang has a built-in string translation screen for some theme text.

1. Go to **Languages → String translations** in your admin.
2. You will see a list of translatable strings.
3. Click the text box under each language flag and type your translation.
4. Click **Save changes**.

:::note
Polylang's string translation covers fewer strings than Loco Translate. If you find theme text that does not appear in the Polylang string list, use Loco Translate instead.
:::

## Step 5 — Set up the language switcher in Milano

Polylang adds a language switcher widget you can place in your header or footer.

### Add to a menu

1. Go to **Appearance → Menus**.
2. Select the menu you want to edit.
3. Find the "Language switcher" panel on the left.
4. Check the languages you want to show and click **Add to menu**.
5. Drag the switcher to your preferred position.
6. Click **Save Menu**.

### Add through the Customizer

1. Go to **Appearance → Customize**.
2. Find the header or footer builder section.
3. Add the Polylang language switcher widget.
4. Configure the display options. You can show flags, language names, or both.
5. Click **Publish**.

## Recommended settings for Milano

These settings work well with Milano's header and footer builder.

| Setting                           | Recommended value    | Why                                                      |
| --------------------------------- | -------------------- | -------------------------------------------------------- |
| URL format                        | Language code in URL | Works with every host and needs no extra setup           |
| Language switcher                 | Menu item            | Fits naturally in Milano's header builder                |
| Hide translations without content | Turn on              | Prevents visitors from landing on empty pages            |
| Browser language detection        | Turn off             | Lets visitors choose their language instead of assuming  |
| Media translation                 | Turn off             | Images usually do not need translating. Saves disk space |

## Troubleshooting

**Problem:** The language switcher does not appear.

**Fix:** Check that you added the switcher to the correct menu. Go to **Appearance → Menus** and confirm the language switcher items are in the menu assigned to the header location. If you use Milano's header builder, add the Polylang widget through the Customizer instead.

**Problem:** Products show in all languages with the same content.

**Fix:** You need Polylang for WooCommerce. The free Polylang plugin does not translate WooCommerce data. Buy the addon from [polylang.pro](https://polylang.pro/), install it, and then translate each product.

**Problem:** Theme strings still show in English after translation.

**Fix:** If you used Loco Translate, check that you saved to the custom location. If you used Polylang's string translation, some theme strings may not register there. Switch to Loco Translate for full coverage.

**Problem:** Translated products lose their connection to the original.

**Fix:** When creating a translation, make sure you use the plus icon from the original product. This links the translation to the source. If you create a new product manually, Polylang does not know it is a translation.
