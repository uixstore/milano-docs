---
title: Troubleshooting
description: Step-by-step checks to find out if a problem comes from Milano, a plugin, or your server.
sidebar:
  order: 2
---

When something does not work right, the first thing to find out is where the problem comes from. This page walks you through the checks we ask every user to run before opening a support ticket.

## Step 1 — Clear your cache

Cached files can make it look like something is broken when it is not. Clear these in order:

1. **Browser cache.** Do a hard refresh: Ctrl + F5 on Windows, Cmd + Shift + R on Mac.
2. **Caching plugin cache.** If you use WP Super Cache, W3 Total Cache, WP Rocket, or another caching plugin, clear its cache from the plugin's settings page.
3. **CDN cache.** If you use Cloudflare or another CDN, purge the cache there too.

Check your site after each step. If the problem goes away, the cache was the cause.

## Step 2 — Disable all plugins except WooCommerce

Plugin conflicts are the most common cause of layout breaks, white screens, and missing features.

1. Go to **Plugins** in your WordPress admin.
2. Select every plugin except WooCommerce.
3. Choose "Deactivate" from the bulk actions dropdown and click **Apply**.
4. Check your site. Does the problem still happen?

If the problem is gone, one of your plugins was the cause. Re-enable them one at a time, checking your site after each one. The last plugin you turned on before the problem returns is the one causing it.

:::tip
If you cannot access your WordPress admin at all, connect via FTP or your host's file manager. Rename the `wp-content/plugins/` folder to `plugins-disabled/`. This turns off all plugins at once. Rename it back to `plugins/` and then disable them one by one from the admin.
:::

## Step 3 — Switch to a default WordPress theme

This test tells you whether the issue comes from Milano or from something else on your site.

1. Go to **Appearance → Themes**.
2. Activate a default WordPress theme like Twenty Twenty-Four or Twenty Twenty-Five.
3. Check your site. Does the problem still happen?

**If the problem is gone with the default theme**, the issue is with Milano. Note what was broken and see the [support policy](../support-updates/support-policy/).

**If the problem still happens with the default theme**, the issue is not with Milano. It could be:

- A plugin conflict (go back to Step 2)
- Your server configuration (PHP version, memory limits)
- Your WordPress setup (corrupt database, missing files)

:::note
Switching themes does not delete your content. Your pages, products, and media stay in place. Your Customizer settings for Milano will not carry over to the default theme, but they return when you switch back to Milano.
:::

## Step 4 — Check your PHP version and limits

Milano needs PHP 7.4 or higher. Older PHP versions can cause errors or missing features.

1. Go to **Tools → Site Health → Info → Server**.
2. Check these values:

| Setting             | Minimum     | Recommended |
| ------------------- | ----------- | ----------- |
| PHP version         | 7.4         | 8.1+        |
| PHP memory limit    | 256 MB      | 512 MB      |
| Max execution time  | 120 seconds | 300 seconds |
| Upload max filesize | 16 MB       | 64 MB       |

1. If any value is below the minimum, contact your host and ask them to increase it.

:::tip
Some hosts let you change PHP settings yourself. Look for "PHP Settings", "Select PHP Version", or "PHP Configuration" in your hosting control panel (cPanel, Plesk, or your host's custom dashboard).
:::

## Step 5 — Check for JavaScript errors

Some problems only show up in your browser's developer console. This is especially true for issues with the Customizer, header builder, or demo importer.

1. Open your browser's developer tools:
   - **Chrome / Edge:** F12 or Ctrl + Shift + I (Cmd + Option + I on Mac)
   - **Firefox:** F12 or Ctrl + Shift + I (Cmd + Option + I on Mac)
   - **Safari:** Cmd + Option + I (turn on Developer menu in Safari → Settings → Advanced first)
2. Click the **Console** tab.
3. Reload the page where the problem happens.
4. Look for red error messages.

If you see errors, take a screenshot of the console and include it when you contact support. This helps us find the cause faster.

## Step 6 — Check your site URL settings

A mismatch between your WordPress address and your actual site URL can break the Customizer, media uploads, and login.

1. Go to **Settings → General**.
2. Check that both **WordPress Address (URL)** and **Site Address (URL)** match your actual site URL.
3. Make sure both use the same protocol (`https` or `http`) and the same domain (`www` or non-`www`).
4. If you change anything, click **Save Changes**.

:::caution
Changing these URLs to the wrong value can lock you out of your admin. Make sure the URL you enter is correct before saving.
:::

## What to do next

After you run through these steps, you should know whether the problem comes from Milano, a plugin, or your server.

- **The problem is with Milano.** See the [support policy](../support-updates/support-policy/) and include the results of the steps above.
- **The problem is a plugin.** Disable that plugin and look for an alternative. You can also check the plugin's own support page.
- **The problem is your server.** Contact your host with the details from Step 4.
