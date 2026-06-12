---
title: Shop page layout
description: Configure your product archive — grid columns, sidebar, filters, and sorting.
sidebar:
  order: 3
draft: false
---

Control how your product archive pages look and behave. All settings live under **Appearance → Customize → Product Catalog → Shop Layout**.

## Filter sidebar position

Choose where product filters appear on your shop pages.

1. Open **Appearance → Customize → Product Catalog → Shop Layout**.
2. Find the **Filter Position** setting.
3. Pick a position from the dropdown.

| Option     | What it does                                                  |
| ---------- | ------------------------------------------------------------- |
| **None**   | No sidebar. Products span the full width of the content area. |
| **Left**   | Sidebar on the left using the **Shop Sidebar** widget area.   |
| **Right**  | Sidebar on the right using the **Shop Sidebar** widget area.  |
| **Top**    | Horizontal filter bar above the product grid.                 |
| **Drawer** | Slide-out panel from the left edge of the screen.             |

:::note
The **Left**, **Right**, and **Top** options use the **Shop Sidebar** widget area. Add widgets (small blocks that add features like filters or search) under **Appearance → Widgets → Shop Sidebar** to populate the filters.
:::

## Toolbar

The toolbar sits above the product grid and shows result count, a column switcher, and a sorting dropdown.

- Turn the toolbar on or off with the **Show Toolbar** toggle.
- Reorder elements with the **Toolbar Elements** setting — drag to arrange the result count, ordering dropdown, and column switcher in your preferred order.

## Grid columns

Let customers switch between different column widths. Under **Column Options**, pick which layouts appear in the column switcher:

- **2 columns** — large product cards, two per row.
- **3 columns** — the most common layout for medium-width grids.
- **4 columns** — compact cards, four per row.
- **List view** — full-width product rows with details to the right.

Milano saves the customer's column preference in a cookie, so it persists across page loads.

## Pagination style

Choose how customers move through product pages under **Pagination Type**.

| Option               | What it does                                                    |
| -------------------- | --------------------------------------------------------------- |
| **Numeric**          | Standard page numbers — 1, 2, 3, and so on.                     |
| **Load more button** | A button at the bottom of the grid that loads the next batch.   |
| **Infinite scroll**  | Automatically loads more products as the customer scrolls down. |

Turn on **Update URL** with **Load more** or **Infinite scroll** to change the browser URL as new products load. This keeps deep links working for shared pages.

## Out-of-stock products

Turn on **Out of Stock at End** to push sold-out products to the bottom of the grid. In-stock items always appear first, so customers see available products without scrolling past unavailable ones.

## Product filter widget

The **Milano - Products Filter** widget adds AJAX-powered filtering to your shop sidebar. Customers see results instantly — no page reloads.

### Filter sources

You can filter by:

- **Product groups** — Best Sellers, New, Sale, Featured.
- **Price** — set min/max ranges.
- **Attributes** — color, size, or any product attribute.
- **Rating** — filter by star rating.
- **Stock status** — in stock, out of stock.
- **Any taxonomy** — categories, tags, or custom taxonomies (grouping methods for organizing products).

### Display types

Choose how each filter group looks:

- **Slider** — a draggable range for price or numeric values.
- **Ranges** — predefined price brackets.
- **Dropdown** — a select menu for single-choice filters.
- **Vertical list** — a stacked list of checkboxes or radio buttons.
- **Horizontal list** — a row of filter options.
- **Checkbox list** — multi-select checkboxes.

### Features

- **Instant filtering** — results update without a page reload.
- **URL updating** — the browser URL reflects active filters for sharing and back-button support.
- **Active filter chips** — removable tags showing current filters.
- **Searchable terms** — customers can search within filter options.
- **Collapsible sections** — filter groups collapse to save space.

## Next steps

- [Product card](../product-card/) — customize how individual products look in the grid.
