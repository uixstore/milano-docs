---
title: Product recommendations
description: Show cross-sells, up-sells, best-sellers, and recently viewed products on product and cart pages.
sidebar:
  order: 6
draft: false
---

Milano includes a recommendation engine that suggests products across your store. It pulls from five sources and fills results automatically.

## Recommendation sources

<!-- markdownlint-disable MD060 -->

| Source               | What it shows                                          | Where to set it                                             |
| -------------------- | ------------------------------------------------------ | ----------------------------------------------------------- |
| **Cross-sells**      | Products you pair together (for example, phone + case) | **Products → Product data → Linked Products → Cross-sells** |
| **Up-sells**         | Higher-end alternatives                                | **Products → Product data → Linked Products → Up-sells**    |
| **Related products** | Products with matching tags or categories              | Automatic — based on product tags                           |
| **Best-selling**     | Products ranked by total sales                         | Automatic — no setup needed                                 |
| **Recently viewed**  | Products the visitor previously browsed                | Automatic — cookie-based tracking                           |

<!-- markdownlint-enable MD060 -->

## Where recommendations appear

### Single product page

Related products, up-sells, and recently viewed products each render in their own section below the product content. See [Product layout](./) for sticky behavior and header settings.

### Cart page

A "You may also like..." carousel appears below the cart table. The engine pulls from cross-sells, up-sells, best-sellers, and recently viewed products.

### Cart drawer

The same carousel appears inside the slide-in cart drawer. It updates live as customers add or remove items.

## How the engine works

The engine tries sources in order — cross-sells first, then up-sells, then best-selling, then recently viewed. It stops when it reaches the product limit you set. Out-of-stock and non-purchasable products are excluded automatically.

If a product appears in multiple sources, it is shown once. The engine uses the first source that provides it.

## Configure cart page recommendations

1. Open **Appearance → Customize → Cart Page**.
2. Find the **Recommendations** section.
3. Turn on the **Enable** toggle.
4. Set the **Limit** — the number of products to show (1–12).

## Configure cart drawer recommendations

1. Open **Appearance → Customize → Cart Drawer**.
2. Find the **Recommendations** section.
3. Turn on the **Enable** toggle.
4. Set the **Limit** — the number of products to show (1–10).

## Set up cross-sells and up-sells

Cross-sells and up-sells are configured per product in WooCommerce.

1. Go to **Products** and edit a product.
2. Open the **Product data** panel.
3. Click the **Linked Products** tab.
4. Add products to **Cross-sells** or **Up-sells**.

:::tip
Cross-sells appear on the cart page and cart drawer. Up-sells appear on single product pages. Add 2–4 products to each field for the best results.
:::
