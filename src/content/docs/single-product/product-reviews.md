---
title: Product reviews
description: Show a rating summary, star histogram, and standalone review section on product pages.
sidebar:
  order: 5
draft: false
---

Milano replaces the default WooCommerce reviews tab with an optional standalone section and a rating summary with a star histogram.

## Before you begin

- WooCommerce must be active on your site.
- Product reviews must be enabled in WooCommerce. Go to **WooCommerce → Settings → Products** and turn on **Enable product reviews**.

## Turn on standalone reviews

By default, reviews appear inside the product tabs below the product summary. Turn on standalone mode to move them into a dedicated section below the product content.

1. Open **Appearance → Customize → Product Page → Product Reviews**.
2. Turn on the **Standalone reviews** toggle.

Reviews now render in their own section after the product content — outside the tabbed layout. The Reviews tab is removed from the tabs automatically.

## Turn on the rating summary

The rating summary adds an overall score, a star histogram, and a "Write a review" button above the review list.

1. Open **Appearance → Customize → Product Page → Product Reviews**.
2. Turn on the **Rating summary** toggle.

### What the rating summary shows

- **Overall score** — average rating displayed as "X out of 5" with filled stars.
- **Review count** — "Based on N reviews" or "Be the first to write a review" when no reviews exist.
- **Star histogram** — five rows (5-star to 1-star) with percentage bars and counts.
- **Write a review button** — scrolls the customer to the review form.

When a customer clicks **Write a review**, the form appears with a **Cancel review** button that scrolls back to the summary.

## Review form changes

Milano customizes the WooCommerce review form:

- Title changes to "Write a review".
- Submit label changes to "Submit review".
- Name and email fields appear inline with autocomplete support.
- Rating field uses a 5-star select with labels: Perfect, Good, Average, Not that bad, Very poor.

:::note
The review form respects the WooCommerce setting **Reviews can only be left by verified owners** (**WooCommerce → Settings → Products → Enable product reviews**).
:::

## Interaction with product tabs

- **Standalone on** — the Reviews tab is removed from the tabbed layout. Reviews render in their own section below the product content.
- **Standalone off** — reviews stay inside the tabs. When tabs are set to accordion mode, the reviews tab title shortens to "Reviews".
- **Tabs disabled** — if you turn off all product tabs (**Appearance → Customize → Product Page → Tabs**), the reviews tab is removed regardless of the standalone setting.

:::caution
If you disable product tabs and do not turn on standalone reviews, customers cannot see or leave reviews.
:::

## Troubleshooting

**Reviews don't appear on the product page.**

Check that product reviews are enabled in **WooCommerce → Settings → Products**. If tabs are disabled, turn on standalone reviews.

**Rating summary shows empty stars.**

No reviews have been submitted yet. The summary displays empty stars until the first review is posted.

**Review form is hidden.**

When the rating summary is enabled, the review form is hidden by default. Customers click **Write a review** to reveal it.
