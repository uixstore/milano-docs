---
title: Image optimization
description: Reduce image file sizes without losing quality to speed up your site.
sidebar:
  order: 3
---

Large images slow down your store. Optimized images load faster and use less bandwidth. This page covers formats, tools, and size guidelines you can follow today.

## Image formats

The format you choose affects file size and quality.

**JPEG** — best for photographs and product images with many colors. JPEG compresses well but loses some quality each time you save.

**PNG** — best for images that need transparency, like logos with no background. PNG files are larger than JPEG.

**WebP** — modern format that produces smaller files than JPEG and PNG at the same quality. Most browsers support WebP. WordPress converts uploaded images to WebP automatically.

**AVIF** — newer format with even better compression than WebP. Browser support is growing but not universal yet.

:::tip
Use WebP for product photos and hero images. Keep PNG only for images that need transparency.
:::

## Convert images to WebP

WordPress handles WebP conversion for you. When you upload a JPEG or PNG, WordPress creates a WebP version alongside it.

To make sure WebP is turned on:

1. Go to **Settings → Media**.
2. Look for the WebP output option.
3. Make sure it is turned on.
4. Click **Save Changes**.

If you want to convert existing images, use a plugin like **ShortPixel** or **Imagify**. These plugins scan your media library and replace old formats with WebP.

## Compress images before uploading

WordPress compresses uploaded images, but starting with a smaller file gives better results.

Free tools you can use before uploading:

- **Squoosh** (squoosh.app) — drag an image in, adjust the quality slider, and download the compressed version. Works in your browser with no uploads to a server.
- **TinyPNG** (tinypng.com) — upload up to 20 images at once. Downloads compressed versions automatically.

WordPress plugins that compress on upload:

- **ShortPixel** — compresses images as you upload them. Offers WebP conversion too.
- **Imagify** — three compression levels: normal, aggressive, and ultra. Normal keeps the best quality.
- **Smush** — compresses images on upload and can bulk-optimize your existing library.

:::tip
Compress images before you upload them. Then use a plugin to catch anything you miss.
:::

## Image size guidelines

Upload images at the size they will appear. A 4000-pixel-wide photo shown at 400 pixels wastes bandwidth.

**Product photos** — 800 to 1200 pixels wide. Square or 4:3 ratio works well for store grids. Keep files under 200 KB.

**Hero images** (full-width banners at the top of a page) — 1920 pixels wide. Keep files under 400 KB. Crop to remove empty space at the top and bottom.

**Blog post images** — 1200 pixels wide. Keep files under 300 KB.

**Thumbnails** — WordPress creates these automatically. You do not need to upload separate thumbnail files.

**Logos** — upload at the exact size you want them to show, or up to 2x that size for retina screens. A logo shown at 200 pixels wide should be uploaded at 200 or 400 pixels wide. Keep files under 100 KB.

## Set image sizes in WordPress

WordPress creates several sizes of each image you upload. You can control these sizes.

1. Go to **Settings → Media**.
2. Set Thumbnail, Medium, and Large sizes to match your store's needs.
3. Click **Save Changes**.

Milano may define additional image sizes for product grids and banners. These appear in your theme settings.

## Lazy loading

Lazy loading delays images that are below the fold. The browser loads them only when the visitor scrolls near them. This speeds up the initial page load.

WordPress turns on lazy loading by default for most images. You do not need to configure anything.

If an image does not load when you scroll to it, check these:

- The image file exists in the media library
- Your caching plugin is not blocking lazy loading
- No custom code has turned off lazy loading

:::note
Lazy loading works on most modern browsers. Older browsers load images normally without lazy loading — no content is lost.
:::

## Optimize images already in your library

If you have uploaded images before reading this page, you can optimize them in bulk.

1. Install an optimization plugin like ShortPixel, Imagify, or Smush.
2. Go to the plugin's settings page.
3. Run a bulk optimization scan.
4. The plugin compresses existing images and creates WebP versions.

This process can take a while if you have hundreds of images. Run it during quiet hours.

## Troubleshooting

**Problem:** Images look blurry on retina screens.
**Fix:** Upload images at 2x the display size. A 400-pixel image should be uploaded at 800 pixels wide.

**Problem:** Product images look stretched or squashed.
**Fix:** Check the image ratio in **WooCommerce → Settings → Products → Display**. Set the crop option to match your image dimensions.

**Problem:** Page still loads slowly after optimizing images.
**Fix:** Check for other issues. Run a speed test with Google PageSpeed Insights. It tells you which files are slowing down the page.

## Next steps

- [Caching tips](./caching-tips/) — set up caching to speed up page delivery.
- [SEO plugin compatibility](./seo-plugin-compatibility/) — improve your store's visibility in search results.
- [Customizer settings](../customizer/) — adjust image display sizes in the Customizer.
