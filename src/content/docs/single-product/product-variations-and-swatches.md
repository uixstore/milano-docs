---
title: Product variations and swatches
description: Display product attributes as color, image, or label swatches.
sidebar:
  label: Variations & Swatches
  order: 7
draft: false
---

Milano gives you multiple ways to present product variations — from the default WooCommerce dropdown to visual swatches.

## Built-in variation options

WooCommerce variable products show each attribute as a `<select>` dropdown. Milano expands "Any" attribute values into concrete combinations so customers see every available option.

Pre-selection works automatically when you set default attributes in WooCommerce. The matching variation loads its image, price, and stock status without a page reload.

## Variation Compare module

The Variation Compare module adds a modal to single product pages. It lets shoppers browse variation images by a primary attribute (for example, Color).

How it works:

- Image swatches appear in the modal.
- Clicking a swatch updates the main product image.
- Customers can browse through variations without closing the modal.

## WCBoost Variation Swatches integration

When the [WCBoost Variation Swatches](https://wordpress.org/plugins/wcboost-variation-swatches/) plugin is active, Milano integrates with it automatically. No extra configuration is needed.

The integration:

- Registers the swatches feature in the theme.
- Maps term meta so swatches render on both product cards and single product pages.
