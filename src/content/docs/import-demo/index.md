---
title: Import a demo
description: Start with a pre-built Milano storefront in one click, then customize it to match your brand.
sidebar:
  label: Overview
  order: 1
---

Milano ships with a set of pre-built demos — full storefronts with pages, products, menus, and Customizer settings already configured. Importing a demo is the fastest way to a working site. You can then replace the content, products, and images with your own.

The setup wizard offers the demo import as its last step, right after registering your purchase code and installing the required plugins. You can also import a demo at any time from the WP admin.

## In this section

- [Import a demo](./import-a-demo/) — run a full or partial import from the demo importer.

## Before you import

You need three things in place first:

1. **Milano is installed and activated** — see [Install Milano](../../getting-started/install-milano/).
2. **WooCommerce and Elementor are installed and active** — see [Install required plugins](../../getting-started/install-required-plugins/).
3. **A clean site is recommended** — demos work best on a fresh WordPress install. If you have existing content, back it up first.

## What a demo import does

A full import adds a complete storefront to your site:

- **Pages** — home, shop, product, cart, checkout, blog, contact, and any demo-specific pages.
- **Products** — sample products with placeholder images, descriptions, and prices.
- **Menus** — pre-built navigation matching the demo.
- **Customizer settings** — colors, typography, and layout options matching the demo.
- **Widgets** — sidebar and footer widgets matching the demo.
- **Media** — demo images, icons, and the site logo.

You can also run a **custom import** to bring across only specific parts — for example, only the Customizer settings without overwriting your existing content.

## When to skip the demo

A demo import is the fastest way to a working site, but it is not always the right choice:

- **You have an existing site with content** — importing over your content will overwrite it. Back up first, or use a **custom import** with only Customizer settings selected.
- **You want a fully custom design** — starting from scratch in Elementor and the Customizer gives you a clean canvas.
- **You are on shared hosting with tight resource limits** — a full import can take several minutes and may hit PHP limits. Increase `max_execution_time` and `memory_limit` before importing, or import parts separately.

## Next steps

- [Import a demo](./import-a-demo/) — run the importer, full or custom.
- [Getting Started](../../getting-started/) — back to the main install and setup flow.
