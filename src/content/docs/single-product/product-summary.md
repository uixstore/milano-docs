---
title: Product summary
description: Toggle summary elements, social-proof features, share buttons, and safe checkout on product pages.
sidebar:
  order: 3
draft: false
---

Control what appears in the product summary — the area next to the gallery that shows the title, price, add-to-cart button, and supporting information.

All settings live under **Appearance → Customize → Product Page → Summary**.

## Summary component visibility

Toggle individual elements in the product summary:

| Element                | Default | Description                                   |
| ---------------------- | ------: | --------------------------------------------- |
| **Product overline**   |     Off | Small taxonomy label above the product title. |
| **Excerpt**            |      On | Short product description.                    |
| **Product meta**       |      On | SKU, categories, tags, and brand.             |
| **Share button**       |     Off | Social share icon in the product actions.     |
| **Safe checkout**      |     Off | "Guaranteed Safe Checkout" trust message.     |
| **Product info items** |     Off | Custom information list with icons.           |

## Product overline

Show a small label above the product title — for example, the product category.

1. Turn on the **Product overline** toggle.
2. Choose which taxonomy to display — **Product Category** is the default.

### Overline design

<!-- markdownlint-disable MD060 -->

| Setting        | Description                                            |
| -------------- | ------------------------------------------------------ |
| **Text color** | Override the default overline color.                   |
| **Typography** | Font size, weight, letter spacing, and text transform. |

<!-- markdownlint-enable MD060 -->

## Short description

The excerpt (short description) appears below the price. Turn on **Limit text lines** to truncate long descriptions:

<!-- markdownlint-disable MD060 -->

| Setting         | Description                                       |
| --------------- | ------------------------------------------------- |
| **Limit lines** | Toggle to enable text truncation.                 |
| **Max lines**   | Number of visible lines before truncation (1–20). |

<!-- markdownlint-enable MD060 -->

A "Read more" link appears when the text is truncated.

## Product meta

Choose which meta elements appear below the product description:

- **SKU** — the product stock-keeping unit.
- **Categories** — product category links.
- **Tags** — product tag links.
- **Brand** — product brand (if using a brand taxonomy).

Turn each on or off in the **Meta elements** setting.

## Product share

Turn on the share button to let customers share the product on social media.

1. Turn on the **Share button** toggle.

A share icon appears in the product actions row. Clicking it opens a modal with links to Facebook, X (Twitter), and Pinterest.

![Product page share modal showing Facebook, X, and Pinterest options](../../../assets/shared/placeholder.svg)

:::tip
Developers can add or remove networks via the `milano/product_share/networks` filter.
:::

## Safe checkout

Show a "Guaranteed Safe Checkout" message below the product summary to build trust.

1. Turn on the **Safe Checkout** toggle.
2. Set the **Position** — where the message appears: After Price, After Short Description, After Add to Cart, or After Meta.
3. Edit the **Content** — HTML with two placeholder tokens:
   - `{payment_icons}` — replaced with your configured payment method icons.
   - `{return_policy}` — replaced with your return policy text.

### Safe checkout design

| Setting              | Description                                          |
| -------------------- | ---------------------------------------------------- |
| **Text alignment**   | Left, center, or right.                              |
| **Text color**       | Overrides the default text color.                    |
| **Background color** | Sets the section background.                         |
| **Padding**          | Space around the content (top, right, bottom, left). |

## Product info items

Show a custom information list with icons and text — for example, shipping details, material info, or care instructions.

1. Turn on the **Product info items** toggle.
2. Choose a **Layout** — **List** (vertical) or **Boxes** (grid).
3. Set the **Position** — where the list appears: After Price, After Short Description, After Add to Cart, or After Meta.
4. Add items using the repeater — each item has an **Image** (icon) and **Text** (HTML allowed).

## Live visitors counter

Show the number of people currently viewing a product. This creates a sense of activity and demand.

1. Turn on the **Live Visitors Counter** toggle.
2. Configure the settings:

| Setting          | Description                                   |
| ---------------- | --------------------------------------------- |
| **Position**     | After Price, Short Description, ATC, or Meta. |
| **Min visitors** | Lowest number in the random range.            |
| **Max visitors** | Highest number in the random range.           |
| **Interval**     | How often the counter updates (in seconds).   |

## Sold count

Display how many units of a product have been sold in a given time window. The count is generated per product — no real sales data is used.

1. Turn on the **Sold Count** toggle.
2. Configure the settings:

| Setting       | Description                                         |
| ------------- | --------------------------------------------------- |
| **Min hours** | Minimum time window for the sold count calculation. |
| **Max hours** | Maximum time window for the sold count calculation. |
| **Min rate**  | Lowest number of sales per hour.                    |
| **Max rate**  | Highest number of sales per hour.                   |

## Sale countdown timer

Show a countdown timer on products that are on sale. Useful for creating urgency during promotions.

1. Turn on the **Sale Countdown** toggle.
2. Configure the settings:

| Setting          | Description                                             |
| ---------------- | ------------------------------------------------------- |
| **Position**     | Before Price, After Price, Before ATC, or After ATC.    |
| **Custom label** | Text shown above the countdown.                         |
| **Loop timer**   | Auto-generate a countdown when no sale end date is set. |
| **Duration**     | Length of the generated countdown when looping is on.   |

![Product page with a sale countdown timer showing hours, minutes, and seconds](../../../assets/shared/placeholder.svg)

:::tip
Turn on **Loop timer** for stores that run ongoing sales. The timer resets for each visitor, creating urgency without requiring a real end date.
:::

## Product badges

Show badges on product thumbnails in the shop loop and on single product pages. All badge settings live under **Appearance → Customize → Store → Badges**.

| Badge         | Description                                           |
| ------------- | ----------------------------------------------------- |
| **Sale**      | Marks products currently on sale with a custom label. |
| **New**       | Marks recently added products within a set period.    |
| **Pre-order** | Marks products available for pre-order.               |
| **Sold Out**  | Marks products that are out of stock.                 |

Each badge supports a custom label and color. Set the **New product detection period** to control how many days a product is marked as new after it is published.

### Badge priority

When multiple conditions apply, only one badge shows. The priority order is:

1. Sold Out
2. Pre-order
3. Sale
4. New

For example, a product that is both on sale and sold out shows the Sold Out badge.

## Sticky summary

Keep the product name, price, and add-to-cart button visible as customers scroll down the page.

| Setting                | Description                                         |
| ---------------------- | --------------------------------------------------- |
| **Sticky summary**     | Pin the summary section on scroll. On by default.   |
| **Sticky add to cart** | Show a sticky add-to-cart bar at the screen bottom. |
| **Content spacing**    | Gap between the gallery and summary, 0–100 px.      |

![Product page with the sticky summary pinning the price and add-to-cart button while the gallery scrolls](../../../assets/shared/placeholder.svg)

### Sticky summary vs. sticky add to cart

- **Sticky summary** pins the entire summary section (title, price, options, add-to-cart) in place as the gallery scrolls.
- **Sticky add to cart** shows a minimal bar at the bottom of the screen with the product thumbnail, price, and a buy button. It appears only when the main add-to-cart button scrolls out of view.

You can turn on both, one, or neither.
