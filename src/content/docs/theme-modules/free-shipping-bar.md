---
title: Free Shipping Bar
description: Show a progress bar on the cart page that tells customers how close they are to free shipping.
sidebar:
  order: 7
---

The Free Shipping Bar shows a progress bar on the cart page (and optionally in the cart drawer). It tells customers how much more they need to spend to qualify for free shipping.

## Turn on Free Shipping Bar

1. Go to **Milano Dashboard → Modules**.
2. Find **Free Shipping Bar** and turn the toggle on.

## Configure

1. Go to **WooCommerce → Settings → Shipping → Free Shipping Bar**.
2. Set:
   - **Free shipping threshold** — The minimum order amount for free shipping. Leave blank to auto-detect from your WooCommerce shipping zones.
   - **Goal message** — Text shown before the goal is met. Use `{amount}` as a placeholder for the remaining amount. For example: "Spend {amount} more for free shipping!"
   - **Success message** — Text shown when the goal is met. For example: "You've qualified for free shipping!"
   - **Display on** — Cart page, cart drawer, or both.
   - **Bar color** — The fill color of the progress bar.
3. Click **Save Changes**.

The bar automatically calculates progress based on the cart total compared to the threshold.

## Requirements

- WooCommerce must be installed and active.
- A free shipping method must be set up in **WooCommerce → Settings → Shipping → Free Shipping**.
