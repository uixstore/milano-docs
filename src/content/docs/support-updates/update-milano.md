---
title: Update Milano
description: Keep Milano up to date with the latest features and security fixes.
sidebar:
  order: 3
---

This page shows you how to update Milano to the latest version. You can update automatically through the WordPress admin or upload the new version manually.

## Before you begin

:::danger
Back up your site before updating. A failed update can break your site or lose content. Use a backup plugin or your host's backup tool to save both your files and database.
:::

- A recent backup of your WordPress files and database.
- Your purchase code registered in **Milano → Dashboard → License**. Automatic updates only work after registration.
- If you use a child theme, check the [Child theme compatibility](#child-theme-compatibility) section below.

## Method A — Automatic update (recommended)

Milano can check for updates and install them from your WordPress dashboard once you register your purchase code.

1. Make sure your purchase code is registered. Go to **Milano → Dashboard → License** and confirm your code is active.

   :::caution
   Automatic updates will not work until you register your purchase code. See [Register your purchase code](../getting-started/register-purchase-code/) if you need help.
   :::

2. Go to **Dashboard → Updates** in your WordPress admin.

   ![WordPress Updates page showing an available update for the Milano theme](../../../assets/shared/placeholder.svg)

   _WordPress Dashboard → Updates screen with the Milano theme update notification._

3. If a Milano update is available, you will see it listed under the Themes section. Click **Update Now** next to Milano.

4. Wait for WordPress to download and install the update. The page will show a success message when it finishes.

5. Visit your site and check that everything looks correct. Clear your cache if you use a caching plugin.

:::tip
Turn on automatic updates for Milano if you want WordPress to install minor updates (security and bug fixes) without asking you. Go to **Dashboard → Updates** and click **Enable auto-updates** next to Milano.
:::

## Method B — Manual update

Use this method if automatic updates are not working or if you prefer to control the update process yourself.

1. Download the latest Milano version from your ThemeForest **Downloads** page. Click **Download** and choose "Installable WordPress theme only".

2. Back up your current Milano installation. Connect to your site via FTP or your host's file manager and copy the `wp-content/themes/milano/` folder to your computer.

3. Go to **Appearance → Themes** in your WordPress admin.

4. If you have a child theme active, leave it activated. If Milano itself is active, you can keep it active during the update — WordPress will use the new files once the upload finishes.

5. Go to **Appearance → Themes → Add New → Upload Theme**.

6. Click **Choose File**, select the new Milano zip file, then click **Install Now**.

   ![Theme upload form with the new Milano zip file selected](../../../assets/shared/placeholder.svg)

   _Add Themes → Upload Theme screen with the Milano zip file selected and the "Install Now" button highlighted._

7. WordPress will tell you that the theme is already installed. This is expected. **Do not click "Replace current with uploaded" yet** — read the next step first.

8. If you have made any direct changes to Milano's files (not recommended), those changes will be lost. If you only use the Customizer and a child theme, you can safely click **Replace current with uploaded**.

9. After the update finishes, visit your site and check that everything works. Clear your cache if needed.

## Child theme compatibility

A child theme inherits Milano's styles and templates. When you update Milano, your child theme stays in place and continues to work.

There is one thing to watch for. If a Milano update changes a template file that your child theme overrides, you may need to update your child theme's copy of that file. Check the [changelog](./changelog/) for each release to see if any templates changed.

:::note
If you are not sure whether you use a child theme, go to **Appearance → Themes**. If you see "Milano Child" listed as your active theme, you are using one.
:::

## Troubleshooting

**Problem:** "The update failed and my site looks broken."
**Fix:** Restore your backup. Then try the manual update method. If the problem repeats, contact [support](./support-policy/) with your WordPress version, PHP version, and a description of what broke.

**Problem:** "I don't see an update notification."
**Fix:** Make sure your purchase code is registered under **Milano → Dashboard → License**. If it is registered and you still see no update, check that you downloaded Milano directly from ThemeForest — grey-market copies do not receive updates.

**Problem:** "The update says 'Destination folder already exists'."
**Fix:** You are using the manual method and did not go through the WordPress updater. Delete the existing `milano/` folder via FTP first, then upload the new version. Or use [Method A](#method-a--automatic-update-recommended) instead.

## Next steps

See what changed in the latest release.

- [Changelog](./changelog/) — review the changes in each version.
- [Support policy](./support-policy/) — find out what support covers if something goes wrong after updating.
