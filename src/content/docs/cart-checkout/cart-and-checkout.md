---
title: Default cart and checkout
description: Set up block-based cart and checkout pages using WooCommerce blocks.
sidebar:
  order: 2
---

WooCommerce includes block-based cart and checkout pages that work out of the box. These pages use the **Cart** and **Checkout** blocks and don't require shortcodes or templates.

## Create the pages

If you installed WooCommerce after activating Milano, the default cart and checkout pages may not exist yet.

1. Go to **WooCommerce → Settings → Advanced → Page setup**.
2. Check the **Cart** and **Checkout** dropdowns. If either says "Select a page," choose **Create new page**.
3. Click **Save changes**.

WooCommerce creates the pages with the Cart and Checkout blocks already placed.

## Customize with the block editor

To edit these pages:

1. Go to **Pages → All Pages** and open the cart or checkout page.
2. The block editor shows the Cart or Checkout block. You can:
   - Change colors, typography, and spacing from the block settings panel on the right.
   - Enable or disable optional features like the order note field, coupon form, or shipping address.
   - Add additional blocks above or below the main block — trust content, banners, or payment icons.

:::tip
Block-based cart and checkout pages use client-side rendering. Milano's classic cart features — auto-update, urgency banner, trust badges, recommendations — only work with the classic shortcode pages. If you want those features, switch to the [classic cart and checkout](./classic-cart-checkout/).
:::

## Switch back to classic

To use the classic shortcode cart and checkout instead:

1. Create two new pages.
2. Add the shortcode `[woocommerce_cart]` to the cart page and `[woocommerce_checkout]` to the checkout page.
3. Go to **WooCommerce → Settings → Advanced → Page setup** and assign the new pages.

Then configure the classic features: [Classic cart & checkout](./classic-cart-checkout/).
