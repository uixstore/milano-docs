---
title: Mega menus
description: Set up mega menus to show rich content in your navigation dropdowns.
sidebar:
  order: 3
---

A mega menu expands into a large panel when a visitor hovers over a menu item. You can fill it with columns, images, widgets, and product categories instead of a plain list of links.

## When to use a mega menu

Use a mega menu when a single dropdown list grows too long. They work well for:

- Stores with many product categories
- Menus that need images or descriptions alongside links
- Footers that show recent posts or promotional content

:::tip
Mega menus suit desktop screens. On mobile, Milano collapses all menu items into a standard accordion list regardless of mega menu settings.
:::

## Turn on a mega menu for a menu item

1. Go to **Appearance → Menus**.
2. Select the menu that contains the item you want to convert.
3. Click the arrow on the menu item to expand its settings.
4. Check the box labeled **Use as mega menu**.
5. Click **Save menu**.

![Menu item settings with the Use as mega menu checkbox highlighted](../../../assets/shared/placeholder.svg)

_Screenshot: Expanded menu item settings showing the Use as mega menu checkbox._

The item now opens a wide panel on hover instead of a narrow dropdown.

## Add columns to your mega menu

You control how content arranges inside the mega panel.

1. Expand the mega menu item settings.
2. Find the **Mega menu columns** field.
3. Enter a number between two and four.
4. Click **Save menu**.

Child items of the mega menu parent distribute across the columns you set. Add more child items to fill each column.

:::note
The column setting only affects the layout of child menu items. It does not create empty columns on its own.
:::

## Add images to a mega menu

You can place images inside a mega menu through a text widget.

1. Go to **Appearance → Widgets**.
2. Find the widget area that matches your mega menu item. Milano creates one for each mega menu item you turn on.
3. Add a **Custom HTML** widget to that area.
4. Insert your image HTML:

```html
<img src="/wp-content/uploads/your-image.jpg" alt="Description of image" />
```

1. Click **Update** to save the widget.

The image appears inside the mega menu panel on the front end.

:::caution
Upload your image through **Media → Add New** before adding it to the widget. The widget needs a URL that already exists on your server.
:::

## Add widgets to a mega menu

Milano creates a widget area for each mega menu item. You can fill it with any standard WordPress widget.

1. Go to **Appearance → Widgets**.
2. Look for the widget area named after your mega menu item.
3. Add widgets such as:
   - **Recent posts** to show your latest articles
   - **Product categories** to list WooCommerce categories
   - **Custom HTML** for banners or promotional content
   - **Text** for headings or descriptions
4. Arrange the widgets in your preferred order.
5. Click **Update**.

![Widgets screen showing a mega menu widget area with a Recent posts widget added](../../../assets/shared/placeholder.svg)

_Screenshot: WordPress widgets screen with a mega menu widget area containing a Recent posts widget._

## Set the mega menu width

You can control how wide the mega panel appears.

1. Expand the mega menu item settings in **Appearance → Menus**.
2. Find the **Mega menu width** field.
3. Choose between **Full width** or **Container width**.

- **Full width** stretches the panel across the entire screen.
- **Container width** keeps the panel aligned with your site content area.

1. Click **Save menu**.

## Remove a mega menu

1. Go to **Appearance → Menus**.
2. Expand the mega menu item settings.
3. Uncheck the **Use as mega menu** box.
4. Click **Save menu**.

The item returns to a standard dropdown. Any widgets you added to its widget area remain saved and reactivate if you turn the mega menu back on.

## Troubleshooting

**Problem:** The mega menu panel looks empty.
**Fix:** Add child menu items to the parent item, or place widgets in the matching widget area under **Appearance → Widgets**.

**Problem:** The mega menu does not appear on mobile.
**Fix:** This is expected. Milano shows a standard accordion menu on mobile devices. Mega menus only show on desktop screens.

**Problem:** I don't see a widget area for my mega menu item.
**Fix:** Make sure the **Use as mega menu** checkbox is checked and you have clicked **Save menu**. The widget area appears after you save.

## Next steps

- [Create a menu](./create-a-menu/) to build the structure your mega menus depend on.
- [Header and footer builder](../header-footer-builder/) to adjust menu placement and surrounding header elements.
