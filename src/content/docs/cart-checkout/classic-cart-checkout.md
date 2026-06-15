---
title: Classic cart and checkout
description: Set up classic shortcode cart and checkout pages with urgency banners, product recommendations, trust badges, and trust content.
sidebar:
  order: 3
---

Milano's classic cart and checkout pages use WooCommerce shortcodes. They support extra features that block-based pages don't: urgency banners, trust badges, product recommendations, trust content, and auto-update.

## Before you begin

Two things about these pages:

- The **Cart** and **Checkout** blocks in the block editor must **not** be present on the page. Milano checks for them and disables its classic features if found. Use shortcodes instead.
- Make sure you're using the `[woocommerce_cart]` and `[woocommerce_checkout]` shortcodes, not WooCommerce blocks.

## Create the pages

1. Go to **Pages → Add New**.
2. Create a page called "Cart" and add this shortcode to the content:

   ```
   [woocommerce_cart]
   ```

3. Create a page called "Checkout" and add this shortcode:

   ```
   [woocommerce_checkout]
   ```

4. Go to **WooCommerce → Settings → Advanced → Page setup**.
5. Assign both pages to the **Cart** and **Checkout** dropdowns.
6. Click **Save changes**.

## Cart page settings

Configure the cart page under **Appearance → Customize → Store → Cart Page**.

### Auto-update cart

When the customer changes a quantity, the cart updates automatically. No **Update Cart** button needed.

### Product recommendations

Show a slider of recommended products below the cart. The theme suggests products based on cross-sells, up-sells, recently viewed, and best-selling products.

| Setting                  | Description                               | Default |
| ------------------------ | ----------------------------------------- | ------- |
| **Show recommendations** | Turn the recommendations slider on or off | On      |
| **Number of products**   | How many products to show                 | 4       |

### Trust badges

Trust badges appear below the cart table in a three-column grid. They typically show customer service info, security guarantees, and privacy promises.

| Setting               | Description                                            | Default                                                                |
| --------------------- | ------------------------------------------------------ | ---------------------------------------------------------------------- |
| **Show trust badges** | Turn trust badges on or off                            | On                                                                     |
| Trust badge items     | Repeater with **Icon**, **Title**, and **Text** fields | 3 default badges (Have Questions, Secure Shopping, Privacy Protection) |

To edit a badge, click the **Edit** button on a badge row. Change the icon image, title, and description text. You can reorder badges with drag and drop, remove them, or add more.

### Trust content

Trust content is an HTML block below the cart totals. Use it to show shipping policies, return guarantees, or payment methods.

| Setting           | Description                           | Default                                                        |
| ----------------- | ------------------------------------- | -------------------------------------------------------------- |
| **Trust content** | Textarea, HTML and shortcodes allowed | "Free shipping on orders over $50" + "30-day return guarantee" |

Use these tokens inside the content:

- `{payment_icons}` — renders the payment icons you selected in **Appearance → Customize → Store → Payment Icons**
- `{return_policy}` — renders a link to your return policy page

:::tip
The trust content area also supports shortcodes, so you can embed a shortcodes element if needed.
:::

## Checkout page

Milano adds a few refinements to the classic checkout page. You don't need to configure anything — they work automatically.

- **Product thumbnail** — each item in the order review table shows a 48px thumbnail next to its name
- **Quantity display** — the order review shows a clean quantity number instead of an HTML input
- **Your order heading** — an `Your order` heading appears above the order review table
- **Login and coupon forms** — both forms are wrapped in a responsive row so they sit side by side on larger screens

## Urgency banner

The urgency banner shows a countdown timer on the cart page, checkout page, or cart drawer. It creates a sense of urgency to encourage checkout.

Configure it under **Appearance → Customize → Store → Urgency Banner**.

| Setting                          | Description                                                                        | Default                                                        |
| -------------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| **Enable urgency banner**        | Turn the banner on or off                                                          | Off                                                            |
| **Display on**                   | Choose where the banner appears: Cart page, Checkout page, Cart drawer             | Cart page                                                      |
| **Message**                      | The banner text. Use `{countdown}` to place the timer                              | "Products are limited, checkout within {countdown}"            |
| **Expired message**              | Text shown when the countdown reaches zero. Leave empty to loop the timer silently | "You're out of time! Checkout now to avoid losing your order!" |
| **Countdown duration (seconds)** | How long the timer counts down                                                     | 120                                                            |

The `{countdown}` token renders a live timer in minutes and seconds format (e.g. `02m 00s`). When it expires, the banner switches to the expired message or silently restarts.

:::note
The urgency banner works on the classic cart and checkout pages (shortcodes). It won't appear on block-based cart and checkout pages.
:::

## Upsell and related products

Configure upsells from **Appearance → Customize → Product → Related & Upsell Products**.

The upsell and related products sections appear on the **single product page**, not the cart or checkout pages. They use the same recommendation engine that powers cart recommendations.
