---
title: Live sales notifications
description: Show a popup notification when someone makes a purchase — social proof for your store.
sidebar:
  order: 8
draft: false
---

Milano includes several social-proof features that show real-time or generated activity on your product and checkout pages. Turn them on in **Appearance → Customize → Product Page**.

## Live Visitors Counter

Show the number of people currently viewing a product. This creates a sense of activity and demand.

1. Open **Appearance → Customize → Product Page**.
2. Under the **Live Visitors Counter** section, turn on the toggle.

| Setting          | Description                                   |
| ---------------- | --------------------------------------------- |
| **Position**     | After Price, Short Description, ATC, or Meta. |
| **Min visitors** | Lowest number in the random range.            |
| **Max visitors** | Highest number in the random range.           |
| **Interval**     | How often the counter updates (in seconds).   |

## Sold Count

Display how many units of a product have been sold in a given time window. The count is generated per product based on a deterministic formula — no real sales data is used.

1. Open **Appearance → Customize → Product Page**.
2. Under the **Sold Count** section, turn on the toggle.

| Setting       | Description                                         |
| ------------- | --------------------------------------------------- |
| **Min hours** | Minimum time window for the sold count calculation. |
| **Max hours** | Maximum time window for the sold count calculation. |
| **Min rate**  | Lowest number of sales per hour.                    |
| **Max rate**  | Highest number of sales per hour.                   |

## Sale Countdown Timer

Show a countdown timer on products that are on sale. Useful for creating urgency during promotions.

1. Open **Appearance → Customize → Product Page**.
2. Under the **Sale Countdown** section, turn on the toggle.

| Setting          | Description                                             |
| ---------------- | ------------------------------------------------------- |
| **Position**     | Before Price, After Price, Before ATC, or After ATC.    |
| **Custom label** | Text shown above the countdown.                         |
| **Loop timer**   | Auto-generate a countdown when no sale end date is set. |
| **Duration**     | Length of the generated countdown when looping is on.   |

:::tip
Turn on **Loop timer** for stores that run ongoing sales. The timer resets for each visitor, creating urgency without requiring a real end date.
:::

## Urgency/FOMO Banner (Cart & Checkout)

Show a banner on the cart and checkout pages with a countdown or urgency message.

1. Open **Appearance → Customize → Product Page**.
2. Under the **Checkout FOMO** section, turn on the toggle.

| Setting            | Description                                        |
| ------------------ | -------------------------------------------------- |
| **Pages**          | Cart page, Checkout page, or Cart drawer.          |
| **Custom message** | Text shown in the banner. Use `{countdown}` token. |
| **Expiry message** | Text shown after the countdown reaches zero.       |
| **Duration**       | Length of the countdown timer.                     |

## Product Badges

Show badges on product thumbnails in the shop loop and on single product pages.

| Badge         | Description                                           |
| ------------- | ----------------------------------------------------- |
| **Sale**      | Marks products currently on sale with a custom label. |
| **New**       | Marks recently added products within a set period.    |
| **Pre-order** | Marks products available for pre-order.               |
| **Sold Out**  | Marks products that are out of stock.                 |

Each badge supports a custom label and color. Set the **New product detection period** to control how many days a product is marked as new after it is published.
