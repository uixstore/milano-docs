---
title: WooCommerce
description: Milano's deep integration with WooCommerce for online stores.
sidebar:
  order: 1
draft: false
---

Milano includes a deep integration with WooCommerce through 18+ sub-modules. The theme replaces default WooCommerce templates with its own styled versions and adds features you normally need extra plugins for.

## Product cards

Milano provides three product card styles:

- **Default** — Clean card with image, title, price, and add-to-cart button.
- **Card** — Elevated card with shadow and hover effects.
- **Modern** — Minimal card with quick-view overlay.

Change the card style in **Appearance → Customize → Product Catalog → Product Card**.

## Product gallery

Four gallery layouts are available for single product pages:

- **Slider** — Horizontal image carousel with thumbnails.
- **Stacked** — Images stacked vertically below the main image.
- **Grid** — Equal-size image grid.
- **Masonry** — Pinterest-style masonry layout.

Change the gallery layout in **Appearance → Customize → Product Page → Gallery**.

## AJAX add-to-cart and cart drawer

Milano replaces the default WooCommerce add-to-cart behavior with AJAX. Products are added to the cart without a page reload. A slide-out cart drawer appears after each addition.

Turn on or off the AJAX add-to-cart in **Appearance → Customize → WooCommerce → Cart**.

The cart drawer includes:

- Product thumbnails and quantities
- Update quantity controls
- Proceed to checkout button
- Free shipping progress bar

## Mini cart

The mini cart icon in the header shows the current item count and total. Clicking it opens the cart drawer. Configure the mini cart in **Appearance → Customize → WooCommerce → Mini Cart**.

## Product badges

Milano supports four badge types on product cards:

- **Sale** — Shows the discount percentage or amount.
- **New** — Marks recently added products.
- **Pre-order** — Indicates products available for pre-order.
- **Sold Out** — Marks out-of-stock products.

Badge labels and colors are configurable in **Appearance → Customize → WooCommerce → Badges**.

## Quick view

Clicking the quick-view button on a product card opens a modal with the product image, description, price, and add-to-cart button. Turn on quick view in **Appearance → Customize → WooCommerce → Quick View**.

## Sticky add-to-cart

On product pages, the add-to-cart bar sticks to the bottom of the screen as you scroll. This keeps the buy button visible at all times. Turn it on in **Appearance → Customize → Product Page → Sticky Add to Cart**.

## Product recommendations

Milano includes built-in product recommendation sections:

- **Cross-sells** — Show on the cart page based on cart contents.
- **Up-sells** — Show on the single product page.
- **Best sellers** — Grid of your top-selling products.
- **Recently viewed** — Shows products the visitor recently browsed.
- **Related products** — Related items based on categories and tags.

Configure these in **Appearance → Customize → WooCommerce → Recommendations**.

## Product badges and labels

Milano adds visual indicators beyond the standard sale badge:

- **Sale badge** — Shows discount percentage or amount.
- **New badge** — Marks recently added products.
- **Pre-order badge** — Shows items available for pre-order.
- **Sold out badge** — Marks out-of-stock products.

Customize badge text and colors in **Appearance → Customize → WooCommerce → Badges**.

## Product search

Milano's product search includes trending keyword suggestions. The search bar shows popular search terms as visitors type. Configure the search in **Appearance → Customize → WooCommerce → Product Search**.

## FOMO urgency banner

A banner on the cart and checkout pages shows urgency messages like "X people are viewing this item" or "Only Y left in stock." These messages are translatable via WPML.

Configure the urgency banner in **Appearance → Customize → WooCommerce → Urgency Banner**.

## Live visitors counter and sold count

Milano can show a live visitors counter and sold count on product pages. These elements build social proof by showing real-time activity.

Turn them on in **Appearance → Customize → Product Page → Social Proof**.

## Sale countdown timer

A countdown timer on sale products shows when the sale ends. This creates urgency and encourages faster purchases. Configure the timer in **Appearance → Customize → WooCommerce → Sale Countdown**.

## Shop sidebar

Milano registers a **Shop Sidebar** widget area. Add widgets like price filters, category filters, or promotional banners to the sidebar on shop and category pages.

Go to **Appearance → Widgets** and add widgets to the **Shop Sidebar** area.

## Theme support

Milano declares WooCommerce theme support for:

- **Product thumbnails** at 540×540 pixels
- **Product grid** with 4 columns on desktop

These settings are declared in the theme's `functions.php`. No manual setup is needed.

## WooCommerce template overrides

Milano overrides the following WooCommerce templates:

- Single product page
- Product archive/shop page
- Cart page
- Checkout page
- Mini cart
- Product search form

The overridden templates live in the `woocommerce/` directory within the theme. Update them through a child theme to preserve changes across updates.
