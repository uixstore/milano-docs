---
title: Frequently Bought Together
description: Pair each product with hand-picked companions so shoppers can add the bundle to the cart in one click, with an optional bundle discount.
sidebar:
  order: 20
---

Frequently Bought Together lets you pair a product with hand-picked companions. Shoppers tick the items they want and add the whole bundle to the cart in one click. You can take a percentage off every item once enough of them go together.

## Turn on Frequently Bought Together

1. Go to **Milano Dashboard → Modules**.
2. Find **Frequently Bought Together** and turn the toggle on.

## Add companions to a product

1. Edit a product.
2. Open the **Product data** meta box and go to the **Linked Products** tab.
3. Set:
   - **Frequently bought together** — Search for and select the products that go with this one. Type to search; you can pick products and individual variations. Drag to reorder them.
   - **Bundle discount (%)** — The percentage taken off every item once enough of them go together. Range: 0–100. Leave empty for no discount.
   - **Minimum items for discount** — How many items, this product included, must go together before the discount applies. Minimum: 2. Leave blank to require 2.
   - **Select all by default** — Turn on to pre-tick every item. When off, shoppers tick the ones they want.
4. Click **Update**.

<!-- TODO(screenshot): Product data meta box with the Linked Products tab open, showing the Frequently bought together search field with two products picked, a Bundle discount of 10, and Minimum items for discount set to 2. Capture at 2x, crop to the Product data pane. Drop the file at src/assets/theme-modules/frequently-bought-together-setup.png, then uncomment the block below.

![Product data panel with the Linked Products tab open and two products picked in the Frequently bought together field](../../../assets/theme-modules/frequently-bought-together-setup.png)

_Placeholder: replace with the actual screenshot once Milano is running on a live WordPress install._
-->

Milano skips any product it can't add in one click: grouped and external products, out-of-stock items, hidden catalog items, and variations with an "Any" attribute. For a variation with an "Any" attribute, pick a concrete variation or its parent product instead.

## What shoppers see

- An image strip of the bundle, with a **+** between the items.
- A checklist under the strip. The product being viewed sits on top, labeled "This item:", and stays ticked.
- A dropdown beside each variable product, labeled **Options for [product name]**. Milano pre-selects your default attribute choice from WooCommerce, if you set one.
- A **Total Price** box with the **Add All To Cart** button. When the bundle total drops, it shows the struck-through original and a "You are saving" line.

The prices and total update as shoppers tick and untick items, and the discount switches on or off to match.

<!-- TODO(screenshot): Single product page with the Frequently Bought Together section above the tabs — image strip, checklist with one variable product dropdown, total price box with Add All To Cart button. Capture at 2x, frontend only, no browser frame. Drop the file at src/assets/theme-modules/frequently-bought-together-frontend.png, then uncomment the block below.

![Product page showing the Frequently Bought Together bundle with the image strip, checklist, and total price box](../../../assets/theme-modules/frequently-bought-together-frontend.png)

_Placeholder: replace with the actual screenshot once Milano is running on a live WordPress install._
-->

## Choose the heading and position

1. Go to **Appearance → Customize → Product Page → Frequently Bought Together**.
2. Change:
   - **Heading** — The title above the bundle. Default: `Frequently Bought Together`. Leave blank to hide the heading.
   - **Position** — Where the bundle appears on the single product page.

     | Value                   | Placement                                    |
     | ----------------------- | -------------------------------------------- |
     | Before product tabs     | Above the Description/Reviews tabs (default) |
     | After product tabs      | Below the tabs, before upsells               |
     | Before upsells          | Before the "You may also like" upsells       |
     | Before related products | Before the related products grid             |

3. Click **Publish**.

## How the bundle discount works

The discount applies once the number of ticked items reaches **Minimum items for discount**, the main product included. In the cart, the discount holds while the main product and enough bundle items stay in the cart together.

Bundle lines are ordinary cart lines. Shoppers can change quantities or remove them, and the discount recalculates on every cart update. It stops as soon as the bundle falls apart below the minimum.

The discount covers as many complete bundles as the smallest quantity allows. Extra units keep their regular price. Discounted lines show a **Bought together** row with the percentage, for example `-10%`, on the cart and checkout pages.

## Requirements

- WooCommerce must be installed and active.
- The product must be in stock and buyable on its own. Grouped and external products can't be part of a bundle.
- The product needs at least one companion that is in stock and visible in the catalog.

## Troubleshooting

**Problem:** The bundle does not appear on the product page.
**Fix:** Check that the module is turned on under **Milano Dashboard → Modules**, and that the product has at least one companion saved in the **Linked Products** tab. The product itself must be in stock and buyable.

**Problem:** A product you picked is missing from the bundle.
**Fix:** Milano skips grouped and external products, out-of-stock items, hidden catalog items, and variations with an "Any" attribute. Pick a concrete variation or the parent variable product.

**Problem:** The discount does not apply in the cart.
**Fix:** The main product must still be in the cart with at least **Minimum items for discount** lines. Check that **Bundle discount (%)** is above 0 on the main product.

**Problem:** Add to cart reports "Please choose an option for [product]".
**Fix:** That companion is a variable product without a usable default. Pick an option from its **Options for [product name]** dropdown, or set default attributes on the product in WooCommerce.
