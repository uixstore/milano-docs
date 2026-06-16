---
title: Quick view
description: Let customers preview a product in a popup without leaving the shop page.
sidebar:
  order: 11
draft: false
---

Quick view lets customers open a product in a modal overlay directly from the shop page. They can browse images, check the price, and add the product to their cart without navigating away.

## Turn on Quick view

1. Open **Appearance → Customize → Product Catalog → Product Card**.
2. Find the **Quick View** section and turn the toggle on.

## Button behavior

The **Card Button Behavior** setting controls what happens when customers click the primary button on a product card:

| Behavior      | Description                                                           |
| ------------- | --------------------------------------------------------------------- |
| **Default**   | Opens the single product page.                                        |
| **Quick add** | Adds simple products to cart. Opens Quick View for variable products. |

## What appears in the modal

The quick view modal loads via AJAX and shows:

- Product image gallery
- Product badges (sale, new, pre-order, sold out)
- Product title and rating
- Price (including sale price)
- Short excerpt
- Add-to-cart form (including variation selectors for variable products)
- **View full details** link to the single product page

:::note
Quick view uses web components and AJAX. It does not require a page reload and works with variable products that have swatches or dropdown selectors.
:::
