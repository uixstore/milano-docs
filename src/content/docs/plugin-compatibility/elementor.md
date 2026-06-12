---
title: Elementor
description: Build pages with Elementor using Milano's theme builder locations and widgets.
sidebar:
  order: 6
draft: false
---

Milano works with Elementor's Theme Builder and provides custom widget locations for headers, footers, singles, and archives.

## Theme builder locations

Milano registers four Theme Builder locations that Elementor can use:

- **Header** — Build a custom header and assign it globally or per page.
- **Footer** — Build a custom footer and assign it globally.
- **Single** — Override the single post or product layout.
- **Archive** — Override the blog or product archive layout.

Open Elementor's Theme Builder (**Appearance → Theme Builder**) and assign templates to these locations.

## Per-page site header controls

Each page and post has its own Site Header settings in the editor sidebar. You can override the global header on any page:

- **Transparent header** — Turn on a transparent header that sits over your page content.
- **Alternative logo** — Show a different logo when the transparent header is active.
- **Bottom border** — Add or remove a border at the bottom of the header.
- **Header colors** — Change the background, text, and link colors for that page.

These settings appear in the **Page** or **Post** editor under the Milano Site Header panel.

## Per-page page header controls

Each page also has its own Page Header settings:

- **Turn on or off** the page header (title bar with breadcrumbs) for that page.
- **Custom background image** — Set a unique background image for the page header.
- **Overlay** — Add a color overlay over the background image.
- **Colors** — Change the text and background colors of the page header.

## Full-width containers

Milano sets Elementor containers to full width by default. Your Elementor sections stretch across the entire page without extra CSS.

## Recommended Elementor settings

When you activate Elementor with Milano, the theme shows an admin notice recommending specific settings:

- Turn off Elementor's default color scheme so Milano's colors take priority.
- Turn off Elementor's default typography scheme so Milano's fonts are used.
- Set the Elementor container width to match Milano's layout.

Follow the links in the admin notice to apply these settings in one click.

## Milano Addons Elementor widgets

Milano includes over 30 custom Elementor widgets through the Milano Addons plugin. These widgets are designed specifically for the theme:

- **Banner Image** — Hero banners with text overlays and CTAs.
- **Blog Posts** — Grid or list layouts for blog post listings.
- **FAQ** — Accordion-style FAQ sections.
- **Product Carousel** — Horizontal scrolling product carousel.
- **Product Grid** — Product card grid with filtering options.
- **Product Tabs** — Tabbed product category displays.
- **Testimonials** — Customer testimonial carousels.
- **Instagram Feed** — Show your Instagram feed in a grid.

Search for "Milano" in the Elementor widget panel to find all available widgets.

:::tip
Milano Addons must be installed and activated for the Elementor widgets to appear. The widgets are bundled with the theme.
:::

## Using Elementor with WooCommerce

Elementor's Theme Builder can override WooCommerce templates. Milano's WooCommerce integration — product cards, gallery layouts, AJAX add-to-cart — works inside Elementor sections using the Milano Addons widgets.

Use the **Product Carousel**, **Product Grid**, and **Product Tabs** widgets to build custom shop pages without writing code.
