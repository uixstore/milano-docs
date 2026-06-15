---
title: Translate your website
description: Translate Milano into any language using Loco Translate, WPML, or Polylang.
sidebar:
  order: 1
---

Translate Milano into any language. You can use a free plugin for basic translation, or a full multilingual solution if you need separate storefronts for each language.

## In this section

- [Translate Milano with Loco Translate](./translate-milano-with-loco-translate/) — use the free Loco Translate plugin to translate theme strings into any language. Best for single-language stores.
- [WPML guide](./wpml-guide/) — set up WPML to run a full multilingual store with separate product catalogs per language. WPML is a paid plugin.
- [Polylang guide](./polylang-guide/) — set up Polylang as a free alternative to WPML. The core plugin is free, but you need the paid Polylang for WooCommerce addon to translate products.

## Which method should you choose?

**Loco Translate** works well if you need your store in one language other than English. You translate theme text once and it stays that way.

**WPML** or **Polylang** are better if you need your store in multiple languages at the same time. Visitors see the site in their chosen language. Products, pages, and menus can each have separate translations.

WPML costs money but includes WooCommerce support out of the box. Polylang has a free core plugin, but you need the paid WooCommerce addon to translate products.

## Saving translation files safely

WordPress stores translation files as `.po` (readable text) and `.mo` (compiled binary) files. Where you save them determines whether they survive a theme update.

**Safe location for theme translations — `wp-content/languages/themes/`**

Files in `wp-content/languages/themes/` live outside the theme directory. Theme updates only replace files inside `/wp-content/themes/milano/`, so your translations remain untouched. This is the standard WordPress language location — translations also work after you deactivate the translation plugin you used to create them.

**Safe location for plugin translations — `wp-content/languages/plugins/`**

With Milano Addons plugin, its translation files belong in `wp-content/languages/plugins/`. The same principle applies — files outside the plugin's own folder survive updates.

**Unsafe location — within the theme or plugin folder**

Files saved inside `/wp-content/themes/milano/languages/` or a plugin's `/languages/` folder get overwritten every time you update. Loco Translate calls the theme folder the **author** location. Use these only if you are developing, not running a live site.

:::tip
Check your translation file paths after setup. If you see `themes/milano/languages/` in the path, create a new translation in the system location before the next theme update.
:::

All three translation methods in this section keep your files outside the theme directory when configured correctly. The individual guides explain how for each plugin.

## Set your site language

Before translations appear on your site, WordPress needs to know which language to use.

1. Go to **Settings → General** in your WordPress admin.
2. Find the **Site Language** option at the top of the page.
3. Select your language from the dropdown.
4. Click **Save Changes**.

WordPress loads the `.mo` file that matches the selected language. If your site language is set to French (`fr_FR`), WordPress looks for `milano-fr_FR.mo` in the translation folders.

:::tip
Setting the site language also downloads WordPress core language packs automatically. This translates admin interface text and system messages too.
:::

## What needs translating

A fully translated site involves more than just the theme. Here is what you need to cover:

| Layer                | What it includes                                                 | How to translate it                                                           |
| -------------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| **Theme strings**    | Button labels, product page text, navigation labels, footer text | Loco Translate, WPML String Translation, or Polylang                          |
| **Plugin strings**   | Milano Addons text, WooCommerce labels, other plugin text        | Loco Translate (plugins section), WPML, or Polylang                           |
| **Database content** | Theme settings saved in the Customizer, widget text, menu labels | Translate manually in the admin, or use WPML/Polylang for multilingual setups |

**Theme strings** come from the theme's code. These are handled by translation files (`.po` / `.mo` files) and are what the Loco Translate, WPML String Translation, and Polylang guides in this section cover.

**Plugin strings** work the same way but use separate translation files. For example, WooCommerce has its own set of translatable strings. If you use Milano Addons, translate its strings through **Loco Translate → Plugins** rather than **Loco Translate → Themes**.

**Database content** includes anything you typed into a field in the admin — Customizer settings, widget text, menu item labels, and page content. Translation files cannot reach these because they are stored in the database, not in the theme's code. With Loco Translate, you translate these manually by editing the fields directly in your language. With WPML or Polylang, you create separate translated versions of each piece of content.
