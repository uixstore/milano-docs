---
title: Product badges
description: Show sale, new, pre-order, and sold-out badges on products.
sidebar:
  order: 6
draft: false
---

Product badges highlight key product status on thumbnails and single product pages. All badge settings live under **Appearance → Customize → Store → Badges**.

## Badge types

Milano supports four badge types:

| Badge         | Description                             |
| ------------- | --------------------------------------- |
| **Sale**      | Marks products currently on sale.       |
| **New**       | Marks recently published products.      |
| **Pre-order** | Marks products available for pre-order. |
| **Sold Out**  | Marks products that are out of stock.   |

Turn each badge on or off independently.

## Custom labels

Each badge accepts a custom label. Leave the field blank to use the default text:

- Sale — default "Sale"
- New — default "New"
- Pre-order — default "Pre-order"
- Sold Out — default "Sold out"

## Sale badge options

- **Show percentage** — display the discount percentage instead of the "Sale" label. For example, "30% off" instead of "Sale".
- **Custom label** — override the default label text.

## New badge options

- **Detection period** — set how many days a product is marked as "New" after it is published (1–365 days, default 30).
- **Custom label** — override the default label text.

## Pre-order badge options

- **Treat backorder as pre-order** — show the pre-order badge on products set to "On backorder" in WooCommerce.
- **Custom label** — override the default label text.

## Sold Out badge options

- **Custom label** — override the default label text.

## Badge colors

Each badge type has its own background and text color. Set them in the **Design** tab of the Badges section to match your store's branding.

## Badge priority

When multiple conditions apply to a product, Milano shows only one badge. The priority order is:

1. Sold Out
2. Pre-order
3. Sale
4. New

For example, a product that is both on sale and sold out shows the Sold Out badge.
