---
title: Free Shipping Bar
description: Show a progress bar on the cart page that tells customers how close they are to free shipping.
sidebar:
  order: 7
---

The Free Shipping Bar shows a progress bar on the cart page. It tells customers how much more they need to spend to qualify for free shipping.

## Turn on Free Shipping Bar

1. Go to **Milano Dashboard → Modules**.
2. Find **Free Shipping Bar** and turn the toggle on.

## Set up a free shipping method

Before the bar can track progress, you need a free shipping method with a minimum order amount in WooCommerce:

1. Go to **WooCommerce → Settings → Shipping → Shipping zones**.
2. Select a shipping zone or add a new one.
3. Click **Add shipping method** and choose **Free shipping**.
4. Click **Edit** next to the Free shipping method you added.
5. In **Minimum order amount**, enter the amount customers must spend to qualify for free shipping.
6. Click **Save Changes**.

:::tip
Leave the **Threshold override** field blank — the bar will auto-detect the minimum amount from your WooCommerce shipping zone and stay in sync if you update it later.
:::

## Configure

1. Go to **WooCommerce → Settings → Shipping → Free Shipping Bar**.
2. Set:
   - **Threshold override** — Override the minimum amount from your shipping zone. Leave blank to auto-detect.
   - **Progress message** — Text shown before the goal is met. Use `{amount}` as a placeholder for the remaining amount. Default: "Spend {amount} more to enjoy free shipping!"
   - **Reached message** — Text shown when the goal is met. Default: "Congratulations! You've got free shipping!"
3. Click **Save Changes**.

The bar automatically calculates progress based on the cart total compared to the threshold.

## Requirements

- WooCommerce must be installed and active.
- A free shipping method with a minimum order amount must be set up in **WooCommerce → Settings → Shipping → Shipping zones**. See [Set up a free shipping method](#set-up-a-free-shipping-method) above.
