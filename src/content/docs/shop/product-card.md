---
title: Product card
description: Customize how products look in the grid — card style, thumbnail hover, swatches, and badges.
sidebar:
  order: 5
draft: false
---

Control how individual product cards appear in your shop grid. All settings live under **Appearance → Customize → Product Catalog → Product Card**.

## Card style

Milano provides three card styles:

| Style       | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| **Default** | Clean card with image, title, price, and add-to-cart button. |
| **Card**    | Elevated card with shadow and hover effects.                 |
| **Modern**  | Minimal card with quick-view overlay on hover.               |

Switch between styles to match your store's aesthetic.

## Thumbnail hover effect

Choose what happens when customers hover over a product image:

- **None** — no hover effect
- **Fade** — image fades to reveal a second image
- **Fade slide** — image fades and slides slightly
- **Zoom** — image zooms in
- **Slide in** — second image slides in from the side
- **Flip** — image flips horizontally

## Thumbnail ratio

Control the aspect ratio of product images in the grid:

- **Default** — follows WooCommerce's cropping settings
- **Adapt to image** — no cropping, original ratio
- **Landscape**, **Wide**, **Photo**, **Portrait**, **Square** — fixed ratios
- **Custom** — enter a CSS aspect-ratio value (for example, `16/9`)

## Text alignment

Align product card text to the **Left**, **Center**, or **Right**.

## Font sizes

Adjust the title and price font sizes independently with sliders (10–28 px each).

## What shows on the card

Toggle individual elements on or off:

| Element            | Description                                           |
| ------------------ | ----------------------------------------------------- |
| **Rating**         | Star rating from customer reviews.                    |
| **Wishlist**       | Wishlist heart button (requires WCBoost Wishlist).    |
| **Compare**        | Compare checkbox (requires WCBoost Products Compare). |
| **Quick view**     | Quick-view eye button.                                |
| **Sale countdown** | Countdown timer on sale products.                     |

## Card button behavior

Control what happens when customers click the primary button on a card:

| Behavior      | Description                                                           |
| ------------- | --------------------------------------------------------------------- |
| **Default**   | Opens the single product page.                                        |
| **Quick add** | Adds simple products to cart. Opens Quick View for variable products. |

## Video on cards

Turn on **Show Video** to replace the product thumbnail with a video when one is available. Videos play on hover and loop silently.

## Product card swatches

When the Product Card Swatches module is active, swatches appear directly on the card. Customers can switch between variations without opening the product page.

1. Go to **Appearance → Customize → Product Catalog → Product Card**.
2. Find the **Product Card Swatches** section and turn it on.

| Setting          | Options                                     | Description                                    |
| ---------------- | ------------------------------------------- | ---------------------------------------------- |
| **Source**       | Variation images, Swatches                  | Use variation images or WCBoost swatch data.   |
| **Attribute**    | First attribute, or a specific WC attribute | Which attribute drives the swatches.           |
| **Image change** | No change, On click, On hover               | When the card image updates for the variation. |
| **Limit**        | Number                                      | Maximum swatches to show per card.             |

### Swatch types

The module renders three swatch types depending on the attribute data:

- **Image swatches** — Variation images shown as small thumbnails.
- **Color swatches** — Color values shown as solid swatches.
- **Label swatches** — Text labels for attributes like Size or Material.

:::note
Product Card Swatches requires the WCBoost Variation Swatches plugin or variation images set on each product variation in WooCommerce.
:::
