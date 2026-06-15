---
title: Push out-of-stock products to the bottom
description: Keep in-stock products visible by moving sold-out items to the end of your shop page.
---

When a product sells out, it stays in its original position on your shop page. This pushes available products further down and frustrates visitors. Milano lets you move out-of-stock products to the bottom automatically.

## Turn on out-of-stock sorting

1. Go to **Milano → Theme Settings → Shop**.
2. Find the **Out of stock products** section.
3. Turn on **Push to bottom**.
4. Click **Save Changes**.

Milano now lists all in-stock products first, then shows out-of-stock products at the end of each page.

## What visitors see

In-stock products appear in their normal sort order. Out-of-stock products appear after them with a faded appearance and an "Out of stock" label. Visitors can still see the product but know it is unavailable.

:::tip
If you have many out-of-stock products, consider hiding them entirely. Go to **WooCommerce → Settings → Products → Inventory** and turn off **Out of stock visibility**.
:::

## How it works with pagination

The sorting applies per page. If page one has 12 in-stock products and 3 out-of-stock products, all 12 in-stock items show first. The 3 out-of-stock items follow them. Page two starts with the next batch of in-stock products.

## Troubleshooting

**Problem:** Out-of-stock products still appear mixed with in-stock products.
**Fix:** Clear your site cache. Caching plugins may serve an old version of the shop page. Clear the cache from your caching plugin's settings page.

**Problem:** All products disappear from the shop page.
**Fix:** Check that you have products with the **Published** status. Draft or private products do not appear on the shop page regardless of stock status.

## Next steps

- [Shop page layout](../shop-layout/shop-page-layout/) — control columns, filters, and product count per page.
- [Product page options](../single-product/product-page-options/) — customize the single product view.
