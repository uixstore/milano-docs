---
title: Mobile bottom bar
description: Set up the persistent bottom navigation bar for mobile visitors — add icons for home, shop, cart, account, and wishlist.
sidebar:
  order: 4
---

The mobile bottom bar is a fixed row of icons at the bottom of the screen on phones and tablets. Visitors tap an icon to navigate — no scrolling up, no hunting for the hamburger menu.

This is a mobile-only feature. It does not appear on desktop screens.

## Turn on the bottom bar

1. Go to **Appearance → Customize → Mobile → Bottom Bar**.
2. Check the **Enable Bottom Bar** box.
3. Click **Publish**.

![Customizer showing the Bottom Bar section with the Enable checkbox](../../../assets/shared/placeholder.svg)

<!-- TODO(screenshot): Customizer Mobile → Bottom Bar panel with Enable checkbox and the bar items listed below -->

The bottom bar appears on all mobile pages once published.

## Choose which icons appear

You pick the navigation items that matter most to your visitors. Typical choices are **Home**, **Shop**, **Cart**, **Account**, and **Wishlist**.

1. Stay in **Appearance → Customize → Mobile → Bottom Bar**.
2. Find the list of bar items. Each item has a checkbox.
3. Check the items you want to show. Uncheck the ones you don't.
4. Arrange items by dragging them into your preferred order.
5. Click **Publish**.

The bar uses the icons built into Milano for each item. You don't need to upload icon images.

:::note
The **Wishlist** item only works if you have a wishlist plugin installed and active. If it's unchecked, you can add it later without losing your other settings.
:::

## Use cases for each item

| Item         | When to show it                                      |
| ------------ | ---------------------------------------------------- |
| **Home**     | Always useful — gives visitors a familiar reset      |
| **Shop**     | Great for stores where browsing is the main action   |
| **Cart**     | Essential for conversion — one tap to review items   |
| **Account**  | Helpful if you expect repeat buyers to sign in       |
| **Wishlist** | Best for stores where visitors save items to compare |

## Rearrange icon order

1. In the **Bottom Bar** panel, find the bar items list.
2. Drag any item left or right to change its position.
3. Click **Publish**.

The first item appears on the far left, the last on the far right.

## Customize the bar colors

1. In the **Bottom Bar** panel, look for the color settings.
2. Set the **Bar background** color and the **Icon color**.
3. Click **Publish**.

Colors apply to all icons in the bar. You cannot color individual icons differently.

## What happens on desktop

The bottom bar hides automatically on screens wider than the mobile breakpoint. You don't need to do anything. If you want a persistent navigation on desktop, use the [sticky header](../header/sticky-header/) instead.

## Troubleshooting

**Problem:** The bottom bar does not show on my phone.
**Fix:** Confirm you checked **Enable Bottom Bar** and clicked **Publish**. Also check that you are viewing the site on a screen narrower than about 768 px.

**Problem:** An icon I added does nothing when tapped.
**Fix:** The item might link to a feature that isn't set up yet. For example, **Wishlist** needs a wishlist plugin. **Account** needs the WooCommerce My Account page.

**Problem:** The bottom bar covers content at the bottom of the page.
**Fix:** Milano adds padding to pages automatically when the bottom bar is active. If a third-party plugin adds its own bottom bar, the padding can conflict. Try disabling the plugin's bar.

## Next steps

- [Create a menu](./create-a-menu/) to build the main navigation.
- [Mobile header](../header/mobile-header/) to customize the top bar on phones.
