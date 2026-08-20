---
title: Stock Progress Bar
description: Show a progress bar on the product page that tells customers how few items are left in stock.
sidebar:
  order: 18
---

The Stock Progress Bar module shows a progress bar on the product page that tells customers how few items are left. It creates urgency and encourages shoppers to buy before stock runs out.

## Turn on Stock Progress Bar

1. Go to **Milano Dashboard → Modules**.
2. Find **Stock Progress Bar** and turn the toggle on.

## Configure the bar

1. Go to **WooCommerce → Settings → Products → Inventory**.
2. Scroll to the **Stock Progress Bar** section and set:
   - **Threshold source** — Choose the number the bar counts down from: a fixed number you set below, or WooCommerce's own low stock amount. WooCommerce's low stock amount defaults to 2, so the bar will rarely appear unless you raise it.
   - **Show when stock is at or below** — The quantity that triggers the bar. Default: 20.
   - **Message** — Shown once stock is at or below the threshold. Default: "Hurry up! Only {stock} {items} left in stock".
   - **Message above the threshold** — Shown on products with an initial stock set (see below), before stock has run low. Default: "{stock} {items} left in stock".
3. Click **Save changes**.

:::tip
Both messages accept placeholders: `{stock}` (remaining quantity), `{items}` ("item" or "items"), `{threshold}`, plus `{initial}` and `{sold}` on products with an initial stock set.
:::

## Set a per-product threshold or initial stock

Override the global settings for one product, or turn the bar into a running count of a batch:

1. Edit a product.
2. In the **Product data** meta box, go to the **Inventory** tab.
3. Set:
   - **Bar threshold** — Overrides the global "show when stock is at or below" value for this product. Leave blank to use the global setting.
   - **Initial stock** — The quantity this product started with. Set it and the bar shows at every stock level, filled to the proportion actually left. Leave blank to keep the bar hidden until stock reaches the threshold.
4. Update the product.

For a variable product, set **Initial stock** on each variation's own **Inventory** panel. A variation without one falls back to the parent product's value.

## Choose where the bar appears

1. Go to **Appearance → Customize → Product Summary**.
2. Under **Stock Progress Bar**, set **Position** to one of: After Price, After Short Description, Before Add to Cart (default), After Add to Cart, or After Meta.
3. Click **Publish**.

## Requirements

- WooCommerce must be installed and active.
- The product must have **Manage stock** turned on, in the product's **Inventory** tab.
- The product must not allow backorders, and must be in stock.
- Works on simple and variable products. Grouped and external products aren't supported.

## Troubleshooting

**Problem:** The bar doesn't show on a product.
**Fix:** Check that the product has **Manage stock** turned on, doesn't allow backorders, and is in stock. Also confirm the product type is simple or variable — grouped and external products never show the bar.

**Problem:** The bar barely ever appears.
**Fix:** If **Threshold source** is set to WooCommerce's low stock amount, that value defaults to 2. Raise it in the product's **Inventory** tab, or switch **Threshold source** to a fixed number in the module settings.
