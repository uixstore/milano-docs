---
title: Polylang
description: Use Milano with Polylang to create a multilingual store.
sidebar:
  order: 5
draft: false
---

Milano does not include built-in Polylang integration. The theme's multilingual features are designed for WPML.

## Current status

There is no official Polylang support in Milano. The theme does not register Polylang-specific string translation hooks, language switcher components, or RTL auto-swap logic.

You can still use Polylang with Milano for basic content translation (posts, pages, categories). However, theme-specific strings — such as topbar text, checkout FOMO messages, badge labels, and cart trust content — will not appear in Polylang's string translation interface.

## What works without integration

- Translating posts and pages
- Translating WooCommerce products (with Polylang for WooCommerce)
- Basic language switching via Polylang's widget

## What does not work

- Automatic translation of Milano theme strings (topbar, badges, checkout messages)
- Built-in language switcher component
- RTL stylesheet auto-swapping
- `wpml-config.xml` compatibility

## Recommendation

If you need a multilingual store with full theme string translation, use WPML instead. Milano has deep WPML integration that covers theme strings, RTL support, and WooCommerce product translations.

See the [WPML documentation](./wpml/) for setup instructions.
