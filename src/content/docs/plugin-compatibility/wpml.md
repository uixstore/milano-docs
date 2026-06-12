---
title: WPML
description: Use Milano with WPML to create a multilingual store.
sidebar:
  order: 4
draft: false
---

Milano includes full WPML integration. You can translate your store into multiple languages with a language switcher, translated theme strings, and RTL support.

## What gets translated

Milano registers the following with WPML's String Translation:

- Topbar text strings (announcements, promotional messages)
- Checkout FOMO messages (urgency banners)
- Cart trust content
- Badge labels (Sale, New, Pre-order, Sold Out)
- Announcement content via filters

The theme includes `wpml-config.xml` files for both the base theme and the addon plugin. These tell WPML which admin texts and theme options are translatable.

## Language switcher

Milano provides a custom language switcher built with a `<uix-disclosure>` dropdown. It shows each language's flag, code, and native name.

You can add the language switcher to:

- **The topbar**: Turn on the language switcher in **Appearance → Customize → Topbar**.
- **The main menu**: Add the WPML language switcher widget to your menu area.

## Translating theme strings

1. Open **WPML → String Translation**.
2. Search for the string you want to translate (for example, a topbar announcement).
3. Click the pencil icon next to the string and enter your translation.
4. Repeat for each active language.

Translatable admin texts include checkout FOMO messages, cart trust content, and badge labels. These appear in WPML's String Translation interface under the "Theme and Plugin Texts" domain.

## RTL support

Milano includes dedicated RTL (right-to-left) stylesheets for languages like Arabic, Hebrew, and Persian. The theme swaps stylesheets automatically when an RTL language is active.

RTL support includes:

- Flipped navigation and layout direction
- Dedicated icon flipping for RTL contexts
- Adjusted spacing and alignment in all theme components

No manual setup is required for RTL. WPML handles the language detection, and Milano applies the correct styles.

## Translating WooCommerce content

WPML's WooCommerce Multilingual addon handles product translations, category translations, and order translations. Milano's product cards, gallery, and shop pages read from WooCommerce's translated content automatically.

:::note
Install the WPML WooCommerce Multilingual addon to translate products, categories, and attributes. Milano does not add extra steps beyond what WPML provides.
:::

## Setup checklist

1. Install and activate WPML with the String Translation, Translation Management, and WooCommerce Multilingual addons.
2. Activate the WPML compatibility config in **WPML → Theme and Plugins Compatibility**.
3. Add the language switcher to your topbar or menu.
4. Translate theme strings in **WPML → String Translation**.
5. Translate products in **WPML → Translation Management**.
