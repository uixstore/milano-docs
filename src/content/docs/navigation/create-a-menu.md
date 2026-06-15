---
title: Create a menu
description: Build a navigation menu in WordPress and assign it to a Milano menu location.
sidebar:
  order: 2
---

You build menus in the WordPress menu editor. Milano then places your menu in the header, footer, or mobile view depending on where you assign it.

## Create a new menu

1. Go to **Appearance → Menus**.
2. Enter a name for your menu in the **Menu name** field. Use something descriptive like "Main menu" or "Footer links".
3. Click **Create menu**.

## Add items to your menu

The left panel shows pages, product categories, and custom links you can add.

### Add pages

1. Open the **Pages** panel on the left.
2. Select the pages you want in your menu.
3. Click **Add to menu**.

### Add product categories

1. Open the **Product categories** panel.
2. Select the categories you want to link to.
3. Click **Add to menu**.

:::note
The **Product categories** panel only appears if you have WooCommerce installed and active.
:::

### Add a custom link

1. Open the **Custom links** panel.
2. Enter the full URL in the **URL** field.
3. Enter the text you want visitors to see in the **Link text** field.
4. Click **Add to menu**.

Use custom links for external sites, anchor links to sections on a page, or URLs that don't match a WordPress page.

## Rearrange menu items

Items appear in the menu in the order you set.

1. Drag an item up or down to change its position.
2. Drag an item slightly to the right under another item to make it a dropdown child.
3. Click the arrow on any item to expand its settings.

:::tip
Keep your menu to seven items or fewer. Long menus overwhelm visitors and perform poorly on mobile screens.
:::

## Assign your menu to a location

Milano provides three menu locations.

| Location     | Where it appears                     |
| ------------ | ------------------------------------ |
| Primary menu | Main header menu on desktop          |
| Footer menu  | Links at the bottom of every page    |
| Mobile menu  | Hamburger menu on phones and tablets |

1. Scroll to the **Menu settings** section at the bottom of the page.
2. Check the box next to each location where you want this menu to appear.
3. Click **Save menu**.

:::caution
You must assign a menu to the **Primary menu** location for it to appear in the header. An unassigned menu will not show.
:::

## Edit or delete a menu item

### Change the label

1. Click the arrow on the menu item to expand its settings.
2. Change the text in the **Navigation label** field.
3. Click **Save menu**.

The label controls what visitors see. The URL stays the same.

### Remove an item

1. Click the arrow on the menu item to expand its settings.
2. Click **Remove**.
3. Click **Save menu**.

Removing an item from the menu does not delete the page itself.

## Troubleshooting

**Problem:** My menu does not appear in the header.
**Fix:** Check that the menu is assigned to the **Primary menu** location in **Menu settings**.

**Problem:** Changes I made are not showing on the site.
**Fix:** Click **Save menu** at the bottom of the page. WordPress does not auto-save.

**Problem:** I added a product category but the panel is missing.
**Fix:** Install and activate WooCommerce. The panel appears automatically after activation.
