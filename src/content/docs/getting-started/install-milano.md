---
title: Install Milano
description: Upload the Milano theme to your WordPress site and activate it using the admin dashboard or FTP.
sidebar:
  order: 2
draft: false
---

This page walks you through installing the Milano theme on your WordPress site. You can upload it through the WordPress admin (recommended) or via FTP if your host has a small upload limit.

## Before you begin

- A working WordPress site (WordPress 5.9 or higher, PHP 7.4 or higher).
- The Milano theme zip file from your ThemeForest download. **Do not extract it** — you will upload the zip as-is.
- Admin access to your WordPress dashboard.

If you haven't downloaded Milano yet, go to your ThemeForest **Downloads** page and click **Download** next to Milano. Choose the "Installable WordPress theme only" option.

Next: [Before you begin](../before-you-begin/) for a full checklist of what you need.

## Method A — Upload through WordPress admin (recommended)

1. Log in to your WordPress admin dashboard.

2. Go to **Appearance → Themes**.

3. Click **Add New** at the top of the page.

   ![WordPress Themes screen with the Add New button highlighted](../../../assets/getting-started/install-milano/themes-add-new.png)

   <!-- TODO(screenshot): Capture the WordPress Themes screen at 1440×900, default admin colors. Box around the "Add New" button at the top. -->

4. Click **Upload Theme** at the top of the Add Themes page.

   ![Add Themes page with the Upload Theme button highlighted](../../../assets/getting-started/install-milano/upload-theme-button.png)

   <!-- TODO(screenshot): Capture the Add Themes page. Box around the "Upload Theme" button. -->

5. Click **Choose File**, select the Milano zip file from your computer, then click **Install Now**.

   ![Theme upload form with the Milano zip file selected](../../../assets/getting-started/install-milano/choose-file.png)

   <!-- TODO(screenshot): Capture the theme upload form after selecting the zip. Box around the file name and the "Install Now" button. -->

6. Wait for WordPress to upload and install the theme. You will see a success message when it finishes.

   ![Theme installation success message with the Activate link highlighted](../../../assets/getting-started/install-milano/install-success.png)

   <!-- TODO(screenshot): Capture the success screen after theme install. Box around the "Activate" link. -->

7. Click **Activate** to turn Milano on.

Milano is now your active theme. You will see a prompt to install the required plugins — we cover that on the next page.

## Method B — Upload via FTP

Use this method if your host has a low upload limit and Method A fails with a "File is too large" error.

1. Connect to your site via FTP (or SFTP) using your host's credentials.

2. Navigate to `wp-content/themes/` inside your WordPress installation.

3. Extract the Milano zip file on your computer. You should see a folder called `milano/`.

4. Upload the entire `milano/` folder to `wp-content/themes/`.

5. Go to **Appearance → Themes** in your WordPress admin.

6. Find Milano and click **Activate**.

:::note
FTP uploads take longer than the WordPress admin method, but they bypass the PHP upload size limit. If your host allows it, you can also upload the zip through your hosting control panel's file manager and extract it there.
:::

## Troubleshooting

**Problem:** "The uploaded file exceeds the maximum upload size."
**Fix:** Your host has a low PHP upload limit. Use [Method B (FTP)](#method-b--upload-via-ftp) instead, or ask your host to increase `upload_max_filesize` to at least 16 MB.

**Problem:** "Are you sure you want to do this?"
**Fix:** This usually means your session expired. Refresh the page, log in again, and retry the upload. If it keeps happening, increase your PHP `max_execution_time` to at least 120 seconds.

**Problem:** "The package could not be installed. The theme is missing the style.css stylesheet."
**Fix:** You may have uploaded the wrong file. Make sure you downloaded the "Installable WordPress theme only" zip from ThemeForest, not the "All files & documentation" package. The correct zip contains `style.css` at its root.

## Next steps

Now that Milano is installed and active, register your purchase code to unlock updates and support.

Next: [Register your purchase code](../register-purchase-code/).
