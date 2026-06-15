---
title: Changelog
description: Track what changed in each Milano release.
sidebar:
  order: 4
---

This page records every Milano release. Check it before updating to see what is new, what is fixed, and whether any changes affect your site.

## How to read the changelog

Each entry lists the version number, release date, and changes grouped by type:

- **Added** — new features or settings.
- **Changed** — existing features that work differently now.
- **Fixed** — bugs that are resolved in this version.

## Version history

<!-- TODO(user): Populate with the actual Milano version history. The format below shows the expected structure. Add new versions at the top. -->

### 1.2.0 — May 10, 2026

**Added**

- Cookie notice module with customizable text and button label.
- Quick view support for WooCommerce product archives.
- New footer layout option with centered logo and split menus.

**Changed**

- Header builder now allows up to four rows instead of three.
- Product swatches render as color circles by default instead of square labels.

**Fixed**

- Sticky header flicker on Safari when scrolling quickly.
- Mega menu dropdown hidden behind WooCommerce product gallery on mobile.
- Typography settings not applying to heading elements in the Block Editor.

### 1.1.1 — March 22, 2026

**Fixed**

- Demo import failing on hosts with `max_execution_time` set below 120 seconds.
- Wishlist icon misaligned on product cards in Firefox.
- Custom CSS field stripping valid `@media` queries.

### 1.1.0 — February 5, 2026

**Added**

- Back-to-top module with configurable scroll threshold and icon.
- Live sales notification module for WooCommerce orders.
- Support for WordPress 6.7.

**Changed**

- Demo importer now installs required plugins automatically before importing content.
- Search popup results include product listings when WooCommerce is active.

**Fixed**

- Mobile menu not closing after selecting a mega menu item.
- Cart page layout breaking when a product name exceeds 60 characters.
- Font weight setting ignored for body text when using Google Fonts.

### 1.0.0 — December 1, 2025

**Added**

- Initial release of Milano theme.
- Header and footer builder with drag-and-drop elements.
- Three demo layouts for retail, fashion, and electronics stores.
- WooCommerce integration with custom product page and shop layouts.
- Elementor and WPBakery page builder support.
- Customizer settings for colors, typography, layout, buttons, and blog.
