---
title: Common issues
description: Solutions for the most frequently reported Milano problems.
sidebar:
  order: 2
---

This page covers the issues most often reported by Milano users. Each entry includes the cause and a fix you can apply right away.

## Demo import fails or stops halfway

The demo importer needs enough server resources to process all the content at once.

**Cause:** PHP memory limit too low or execution time too short.

**Fix:**

1. Check your current limits. Go to **Tools → Site Health → Info** in your WordPress admin. Look for "PHP memory limit" and "Max execution time".
2. Milano needs at least 256 MB of PHP memory and 120 seconds of execution time.
3. If your limits are lower, contact your host and ask them to increase `memory_limit` to 256M and `max_execution_time` to 120.
4. After your host makes the change, try the demo import again.

:::tip
Some hosts let you change PHP settings yourself through the hosting control panel. Look for "PHP Settings" or "Select PHP Version" in cPanel or your host's dashboard.
:::

## White screen after activating a plugin

A white screen (sometimes called the "white screen of death") means PHP encountered an error it could not recover from.

**Cause:** A plugin conflict. Two plugins may use the same function name, or a plugin may be incompatible with your PHP version.

**Fix:**

1. Connect to your site via FTP or your host's file manager.
2. Go to `wp-content/plugins/`.
3. Rename the folder of the plugin you activated right before the white screen appeared. Add `-disabled` to the end of the folder name.
4. Your site should load again. Go to **Plugins** in your WordPress admin and delete the renamed plugin.
5. If you are not sure which plugin caused the issue, rename the entire `plugins/` folder to `plugins-disabled/`. Your site will load with no plugins active. Then rename it back and disable plugins one at a time until you find the conflict.

:::note
Milano itself rarely causes white screens. If the white screen appeared after activating Milano, rename the `milano/` folder in `wp-content/themes/` to `milano-disabled/` and WordPress will fall back to a default theme.
:::

## Styles look broken or the site looks unstyled

**Cause:** Cached CSS files or a caching plugin serving old files.

**Fix:**

1. Clear your browser cache. Do a hard refresh: Ctrl + F5 on Windows, Cmd + Shift + R on Mac.
2. Clear your caching plugin cache from the plugin's settings page.
3. If you use a CDN, purge the CDN cache.
4. Check that all Milano files uploaded correctly. Go to **Appearance → Theme File Editor**. If you see an error about missing files, re-upload the theme. See [Update Milano](../support-updates/update-milano/) for the manual upload method.

## Menu items do not drop down on mobile

**Cause:** The menu may not be assigned to the mobile menu location, or too many items are set as mega menus.

**Fix:**

1. Go to **Appearance → Menus**.
2. At the bottom of the page, under "Menu settings", make sure your menu is assigned to the "Primary menu" location.
3. If you use mega menus, check that only top-level items have the mega menu option turned on. Mega menus on submenu items can break the mobile dropdown.
4. Clear your cache and test on a real phone, not only the browser's mobile view.

## Product images look blurry or pixelated

**Cause:** The uploaded image is smaller than the size it displays at, or WooCommerce image sizes are not regenerated after a theme change.

**Fix:**

1. Upload images at least 800 pixels wide for product photos. For retina screens, upload at 2x the display size.
2. Regenerate thumbnails after switching themes. Install the **Regenerate Thumbnails** plugin, go to **Tools → Regenerate Thumbnails**, and run it on all images.
3. Check WooCommerce image settings. Go to **WooCommerce → Settings → Products → Display** and set the shop image size to match your uploaded images.

## Customizer changes do not save

**Cause:** A PHP error, a caching issue, or a plugin conflict.

**Fix:**

1. Check for PHP errors. Go to **Tools → Site Health → Info** and look for any reported errors. If you see errors, fix those first.
2. Clear your browser cache and try again.
3. Disable all plugins except WooCommerce and try saving again. If it works, one of your plugins was blocking the save. Re-enable them one at a time to find which one.
4. Check that your site URL in **Settings → General** matches the URL you are using to access the Customizer. A mismatch between `http` and `https` or between `www` and non-`www` can prevent saves.

## Sidebar appears below content on some pages

**Cause:** A page builder element or custom code is breaking the page layout.

**Fix:**

1. Edit the affected page with your page builder.
2. Check that the page layout is set to "Content + Sidebar" and not "Full width".
3. If you added custom HTML or shortcode widgets, check for unclosed `<div>` tags. An unclosed div pushes the sidebar below the content.
4. Switch to the default WordPress theme temporarily. If the sidebar still appears below content, the issue is with the page content itself, not Milano.
