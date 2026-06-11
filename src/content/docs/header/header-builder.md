---
title: Header builder
description: Use the drag-and-drop header builder to add elements into rows and columns, and configure row-level settings like height and colors.
sidebar:
  order: 1
---

Open **Appearance → Customize → Header** to open the header builder.

## Row structure

The header has three rows stacked vertically. Each row is divided into three columns — left, center, and right — so you can place elements on either side or in the middle.

| Row             | Description                                                                                                    |
| --------------- | -------------------------------------------------------------------------------------------------------------- |
| **Top bar**     | A narrow strip above the main header. Use it for announcements, social links, language and currency switchers. |
| **Main header** | The primary row with your logo, navigation menu, search, cart, and account icons.                              |
| **Bottom row**  | A row below the main header. Use it for category navigation, submenus, or any other element.                   |

![Header builder showing the three rows — top bar, main header, and bottom row](../../../assets/shared/placeholder.svg)

## Columns

Within each row, elements sit inside one of three columns:

- **Left column** — elements align to the left (e.g. logo)
- **Center column** — elements sit in the middle (e.g. menu)
- **Right column** — elements align to the right (e.g. cart, account)

You can add multiple elements to the same column — for example, cart and account icons both on the right.

## Add an element

1. Find the row and column where you want the element to appear.
2. Click **+ Add Element** in that column.
3. Choose an element from the list.
4. The element appears in the column. Drag it left or right within the column to change its position among other elements in the same column.

## Remove an element

Hover over the element and click the **X** icon that appears next to its label.

## Row settings

Each row has its own settings panel. Click the row to open it. You can configure:

| Setting              | Description                                                        |
| -------------------- | ------------------------------------------------------------------ |
| **Row height**       | Set a fixed height or let the row auto-size to fit its content.    |
| **Background color** | Background color for the row. Supports solid colors and gradients. |
| **Text color**       | Default text and link color for elements inside the row.           |
| **Element gap**      | Spacing between elements within the same column.                   |
| **Padding**          | Top and bottom padding for the row.                                |
| **Container width**  | Make the row full-width or constrained to the site container.      |
| **Border**           | Add a bottom border to separate the row from the content below.    |

![Row settings panel showing height, colors, gap, and padding options](../../../assets/shared/placeholder.svg)

## Templates

The header builder includes prebuilt header templates you can import to get started quickly. You can also save your own layouts as templates to reuse across sites.

Click **Templates** at the bottom right of the header builder to open the template dialog. From there you can:

- **Import a template** — browse the list of prebuilt headers and click one to apply it. It replaces your current header layout.
- **Save current layout** — save your header as a custom template with a name you choose.
- **Remove a template** — delete a custom template you no longer need.

![Template dialog showing prebuilt header templates](../../../assets/shared/placeholder.svg)

## Available elements

- [Logo](../logo/) — your site logo with alternative version for sticky/transparent states
- [Primary Menu](../primary-menu/) — navigation menu with dropdown options
- [Search](../search/) — search bar or icon with AJAX search
- [Cart](../cart/) — shopping cart icon with item count (requires WooCommerce)
- [Account](../account/) — login link or account icon (requires WooCommerce)
- [Phone](../phone/) — phone number with business hours
- [Email](../email/) — email address
- [Custom HTML](../custom-html/) — your own HTML content

## Next steps

- [Sticky header](../sticky-header/)
- [Transparent header](../transparent-header/)
- [Mobile header](../mobile-header/)
- [Top bar](../top-bar/)
