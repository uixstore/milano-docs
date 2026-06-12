---
title: Mini cart
description: Configure the slide-out cart drawer, choose icon behavior, and enable auto-open, coupon field, shipping calculator, and recommendations.
sidebar:
  order: 4
---

Milano's mini cart is an off-canvas drawer that slides in from the right. Customers can review items, change quantities, apply coupons, estimate shipping, and add order notes — all without leaving the current page.

## Cart icon in the header

Configure the cart icon under **Appearance → Customize → Header → Cart Icon**.

| Setting                | Description                                                                                         | Default          |
| ---------------------- | --------------------------------------------------------------------------------------------------- | ---------------- |
| **Cart icon display**  | **Icon only** shows just the cart icon. **Icon and text** adds a label and subtotal                 | Icon only        |
| **Cart icon behavior** | **Open cart drawer** opens the slide-out panel. **Link to cart page** goes to the cart page instead | Open cart drawer |

## Cart drawer settings

Configure the drawer under **Appearance → Customize → Store → Cart Drawer**.

![Cart drawer customizer section with toggle settings for edit icon, recommendations, note, shipping, coupon, and auto-open](../../../assets/shared/placeholder.svg)

### General settings

| Setting                      | Description                                                                       | Default |
| ---------------------------- | --------------------------------------------------------------------------------- | ------- |
| **Show edit icon**           | Shows an edit button on variable products so customers can change their variation | On      |
| **Auto-open on add to cart** | Opens the drawer automatically when an item is added to the cart                  | Off     |

### Product recommendations

When the cart has items, a recommendations slider appears at the bottom of the drawer body.

| Setting                  | Description                               | Default |
| ------------------------ | ----------------------------------------- | ------- |
| **Show recommendations** | Turn the recommendations slider on or off | On      |
| **Number of products**   | How many products to show                 | 5       |

### Free shipping bar

If the Free Shipping Bar module is active, you can control its behavior in the drawer.

| Setting                        | Description                                                  | Default |
| ------------------------------ | ------------------------------------------------------------ | ------- |
| **Show free shipping bar**     | Show the free shipping progress bar at the top of the drawer | On      |
| **Keep visible on empty cart** | Show the shipping progress bar even when the cart is empty   | On      |

### Footer action panels

The drawer footer has three toggle buttons that open inline panels: order note, shipping calculator, and coupon.

| Setting                        | Description                                                                               | Default |
| ------------------------------ | ----------------------------------------------------------------------------------------- | ------- |
| **Enable order note field**    | Customers can add an order note in the drawer. The note carries over to the checkout page | On      |
| **Enable shipping calculator** | Customers can estimate shipping costs by entering their address                           | On      |
| **Enable coupon field**        | Customers can enter a discount coupon code                                                | On      |

## What the drawer looks like

![Cart drawer open with product list, quantity controls, and footer action buttons](../../../assets/shared/placeholder.svg)

The drawer has three sections:

1. **Header** — "Shopping Cart (count)" title with a close button
2. **Body** — cart items with thumbnails, quantity +/- buttons, price, and a remove link. Empty carts show a message and **Continue Shopping** button
3. **Footer** — action buttons for note, shipping, and coupon; subtotal; and **View Cart** / **Checkout** buttons

Variable products show an edit icon that opens a modal for changing the variation and quantity.
