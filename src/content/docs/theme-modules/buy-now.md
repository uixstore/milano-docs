---
title: Buy Now
description: Add a Buy Now button to WooCommerce products that skips the cart and sends customers directly to checkout.
sidebar:
  order: 6
---

The Buy Now module adds a second button on the product page that takes customers straight to checkout with the selected item, skipping the cart entirely.

## Turn on Buy Now

1. Go to **Milano Dashboard → Modules**.
2. Find **Buy Now** and turn the toggle on.

## Configure

1. Go to **WooCommerce → Settings → Products → Buy Now**.
2. You'll find these options:
   - **Button text** — Change the label (default: "Buy Now").
   - **Button position** — Show it next to the Add to Cart button, below it, or replace Add to Cart entirely.
   - **Button style** — Choose a predefined style or set your own colors.
   - **Redirect to checkout** — If turned off, the button adds the item to the cart and stays on the page (like a regular AJAX add-to-cart).
3. Click **Save Changes**.

## How it works

When a customer clicks **Buy Now**:

1. The product (with its selected variation and quantity) is added to the cart.
2. Only that product is in the cart — any previously added items stay.
3. The customer is redirected to the checkout page.

## Requirements

- WooCommerce must be installed and active.
