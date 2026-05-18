---
title: Caching tips
description: Set up caching to speed up your Milano site.
sidebar:
  order: 2
---

Caching stores a copy of your pages so WordPress does not build them from scratch each time someone visits. This cuts load times and reduces server strain.

## What caching does

When a visitor opens your store, WordPress runs PHP code, queries the database, and assembles the page. Caching saves the finished HTML. The next visitor gets that saved copy instead.

Your store still works normally. When you update a product or change a setting, the cache refreshes with the new content.

## Choose a caching plugin

Milano works with most popular caching plugins. Pick one — do not run two at the same time.

**WP Super Cache** — free, lightweight, and a good starting point. It generates static HTML files and serves them to most visitors.

**W3 Total Cache** — free with more configuration options. You can control page caching, browser caching, and database caching separately.

**WP Rocket** — paid plugin with a streamlined setup. It turns on page caching, browser caching, and lazy loading with minimal configuration.

:::tip
Start with WP Super Cache if you want a free option. Switch to WP Rocket if you need more features and prefer fewer settings to manage.
:::

## Set up WP Super Cache

1. Go to **Plugins → Add New Plugin**.
2. Search for "WP Super Cache".
3. Click **Install Now**, then **Activate**.
4. Go to **Settings → WP Super Cache**.
5. Turn on **Caching On** under Cache Status.
6. Click **Save Changes**.

The plugin recommends additional settings on the same page. The defaults work for most stores.

## Set up W3 Total Cache

1. Go to **Plugins → Add New Plugin**.
2. Search for "W3 Total Cache".
3. Click **Install Now**, then **Activate**.
4. Go to **Performance → Dashboard**.
5. Click **Set all master toggle options to recommended**.
6. Click **Save all settings**.

W3 Total Cache has many options. The recommended preset covers page caching, browser caching, and minification.

## Set up WP Rocket

1. Buy and download WP Rocket from the official site.
2. Go to **Plugins → Add New Plugin → Upload Plugin**.
3. Upload the zip file and click **Activate**.
4. WP Rocket turns on caching automatically. No configuration needed to start.

You can fine-tune settings under **Settings → WP Rocket**. The preloads tab lets you warm the cache so first-time visitors also get fast pages.

## Clear the cache after changes

Your cache holds old versions of pages. You must clear it after you make changes so visitors see the new content.

Clear the cache when you:

- Update a product description or price
- Change a page layout in the Customizer
- Add or remove a menu item
- Update the theme or a plugin

**WP Super Cache:** Go to **Settings → WP Super Cache** and click **Delete Cache**.

**W3 Total Cache:** Go to **Performance → Dashboard** and click **Purge all caches**.

**WP Rocket:** Go to the top admin bar and click **WP Rocket → Clear Cache**.

:::caution
If you change Customizer settings and your site looks the same, the cache is likely the cause. Clear it and reload the page.
:::

## CDN basics

A CDN (content delivery network) stores copies of your files on servers around the world. Visitors download files from the server closest to them.

CDNs help when your visitors live far from your hosting server. A customer in Australia loads your images faster from a Sydney CDN edge than from a US-based host.

Popular CDN options include Cloudflare, StackPath, and BunnyCDN. Cloudflare offers a free tier that covers most small stores.

To use a CDN:

1. Sign up for a CDN service.
2. Install the CDN provider's WordPress plugin if available.
3. Enter your API key or account details in the plugin settings.
4. Turn on CDN delivery in the plugin.

:::tip
If you use a caching plugin and a CDN, set up the caching plugin first. Then add the CDN on top.
:::

## Troubleshooting

**Problem:** Changes do not appear on the frontend.
**Fix:** Clear the cache. If you use a CDN, purge the CDN cache too.

**Problem:** Cart or checkout pages show the wrong customer's data.
**Fix:** Good caching plugins exclude cart and checkout pages by default. Check your plugin's exclusion list and add `cart` and `checkout` URLs if they are missing.

**Problem:** The site looks broken after clearing the cache.
**Fix:** A CSS or JavaScript file may have cached an old version. Clear the cache again and do a hard refresh in your browser (Ctrl + F5 on Windows, Cmd + Shift + R on Mac).

## Next steps

- [Image optimization](./image-optimization/) — reduce image file sizes for faster page loads.
- [SEO plugin compatibility](./seo-plugin-compatibility/) — set up Yoast SEO or Rank Math with Milano.
- [Plugin Compatibility](../plugin-compatibility/) — see how Milano works with other popular plugins.
