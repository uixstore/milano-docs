---
title: Rank Math
description: How Milano integrates with Rank Math for search engine optimization.
sidebar:
  order: 3
draft: false
---

Milano has its own breadcrumb system with built-in Schema.org structured data. Rank Math works alongside the theme without conflicts.

## Breadcrumbs and structured data

Milano outputs `BreadcrumbList` schema by default. The theme replaces WooCommerce's built-in breadcrumb with its own, so you get consistent structured data across your store.

You do not need Rank Math (or any other SEO plugin) for breadcrumbs to work. Milano handles them on its own.

## Turning breadcrumbs on or off

Breadcrumbs are controlled per context in the Customizer. Toggle them independently for your shop pages, product pages, and other areas.

- **Shop pages**: Go to **Appearance → Customize → Product Catalog → Page Header** and toggle the breadcrumb setting.
- **Product pages**: Go to **Appearance → Customize → Product Page → Layout** and toggle the breadcrumb setting.
- **Blog and other pages**: Breadcrumbs follow your general page header settings under **Appearance → Customize → Page Header**.

## Using Rank Math with Milano

Install and activate Rank Math as you normally would. The plugin handles meta titles, descriptions, Open Graph tags, XML sitemaps, and advanced schema.

Milano's breadcrumb schema does not overlap with Rank Math's breadcrumb features. Both can run at the same time. If you prefer Rank Math's breadcrumb output, you can turn off Milano's breadcrumbs in the Customizer and use Rank Math's instead.

:::tip
Turn off Rank Math's built-in breadcrumb module if you want Milano to handle breadcrumbs. Having two breadcrumb systems active can confuse search engines.
:::

## Open Graph and social sharing

Rank Math manages Open Graph and Twitter Card meta tags. Milano's product images, titles, and descriptions feed into these tags through standard WooCommerce hooks. No extra configuration is needed.

## Schema markup

Milano outputs `BreadcrumbList` schema. Rank Math outputs additional schema types (Article, Organization, Product, etc.). These do not conflict — they are separate schema entries on the same page.
