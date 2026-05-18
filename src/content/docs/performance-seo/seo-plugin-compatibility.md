---
title: SEO plugin compatibility
description: How Milano works with popular SEO plugins like Yoast SEO and Rank Math.
sidebar:
  order: 4
---

Milano produces clean HTML that search engines can read. It also works with the most popular SEO plugins. This page covers what Milano does on its own and how to pair it with an SEO plugin.

## Milano's built-in SEO features

Milano includes several SEO features without any extra plugins.

**Semantic HTML** — pages use proper heading structure (`h1`, `h2`, `h3`) and HTML5 elements (`article`, `section`, `nav`). Search engines use this structure to understand your content.

**Responsive design** — pages adapt to phone, tablet, and desktop screens. Google ranks mobile-friendly pages higher.

**Fast loading** — clean code and optimized asset loading keep pages quick. Page speed is a ranking factor.

**Open Graph tags** — Milano adds basic Open Graph meta tags so your links look good when shared on social media. These control the title, description, and image that appear on Facebook, X, and LinkedIn.

**Schema markup** — product pages include structured data that helps Google show rich results like price and availability in search listings.

:::note
Milano's built-in features cover the basics. An SEO plugin adds keyword targeting, XML sitemaps, and content analysis.
:::

## Yoast SEO

Yoast SEO is the most popular SEO plugin for WordPress. Milano works with it out of the box.

### Install Yoast SEO

1. Go to **Plugins → Add New Plugin**.
2. Search for "Yoast SEO".
3. Click **Install Now**, then **Activate**.
4. Follow the setup wizard to configure basic settings.

### Recommended Yoast settings with Milano

**Title and meta settings** — Yoast takes over page titles and meta descriptions. Set your defaults under **Yoast SEO → Settings → Site representation**.

**XML sitemaps** — Yoast generates these automatically. You can view your sitemap at `your-site.com/sitemap_index.xml`. Submit this URL to Google Search Console.

**Social tab** — Yoast adds its own Open Graph tags. Milano's built-in tags step aside when Yoast is active. Set your default social image under **Yoast SEO → Settings → Social profiles**.

**Breadcrumbs** — Yoast can add breadcrumb navigation to your pages. Milano supports Yoast breadcrumbs. Turn them on under **Yoast SEO → Settings → Breadcrumbs**.

### Edit SEO per page

After installing Yoast SEO, you will see an SEO panel below the content editor on every page and product. Use it to:

- Set a focus keyword
- Edit the page title that appears in search results
- Write a meta description
- Control whether the page appears in search results

## Rank Math

Rank Math is another popular SEO plugin. Milano works with it the same way it works with Yoast SEO.

### Install Rank Math

1. Go to **Plugins → Add New Plugin**.
2. Search for "Rank Math".
3. Click **Install Now**, then **Activate**.
4. Follow the setup wizard to choose your configuration.

### Recommended Rank Math settings with Milano

**Title and meta settings** — Rank Math controls page titles and descriptions. Set defaults under **Rank Math → Titles & Meta**.

**XML sitemaps** — Rank Math generates sitemaps. Find yours under **Rank Math → Sitemap Settings**. Submit the URL to Google Search Console.

**Social meta** — Rank Math handles Open Graph tags. Milano's built-in tags step aside. Set a default social image under **Rank Math → Titles & Meta → Social Meta**.

**Schema markup** — Rank Math adds structured data to pages and products. This works alongside Milano's built-in product schema. Configure schema types under **Rank Math → Titles & Meta**.

### Edit SEO per page

Rank Math adds an SEO score and settings panel to the content editor. Use it to:

- Set a focus keyword
- Edit the search result title and description
- Check your content against SEO best practices
- Control indexing for individual pages

## Pick one SEO plugin

Do not run Yoast SEO and Rank Math at the same time. They will conflict with each other. Pick one and stick with it.

:::caution
If you switch from one SEO plugin to another, deactivate the old one first. Then install and activate the new one. Some plugins offer import tools to carry over your settings.
:::

## Recommended settings for any SEO plugin

These settings apply whether you use Yoast SEO, Rank Math, or another plugin.

**Permalink structure** — use post-name permalinks so your URLs are readable. Go to **Settings → Permalinks** and select **Post name**. Your URLs will look like `your-site.com/product-name/` instead of `your-site.com/?p=123`.

**Meta descriptions** — write a unique meta description for every page. Keep it under 160 characters. This text appears under your page title in search results.

**Focus keywords** — pick one main keyword or phrase per page. Write content that answers what someone searching for that term would want to know.

**Image alt text** — describe every image in the alt text field. This helps search engines understand your images and improves accessibility. Add alt text when you upload an image or edit it later in the media library.

## Cross-reference

For detailed compatibility notes on individual plugins, see the [Plugin Compatibility](../plugin-compatibility/) section. It covers Yoast SEO, Rank Math, and other plugins tested with Milano.

## Next steps

- [Caching tips](./caching-tips/) — make your site faster with caching.
- [Image optimization](./image-optimization/) — optimize images for speed and SEO.
- [Plugin Compatibility](../plugin-compatibility/) — explore how Milano works with other WordPress plugins.
