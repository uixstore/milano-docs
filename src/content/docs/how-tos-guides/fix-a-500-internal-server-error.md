---
title: Fix a 500 Internal Server Error
description: Diagnose and resolve the most common fatal error on your Milano store.
---

A 500 Internal Server Error means something went wrong on your server but the server cannot say what. The screen is blank or shows a generic error message. This guide walks you through the most common causes and how to fix each one.

## Find the actual error

The 500 error screen hides the real problem. You need to turn on WordPress debug mode to see it.

1. Connect to your site via FTP or your host's file manager.
2. Open `wp-config.php` in the root of your WordPress installation.
3. Find the line that says `define( 'WP_DEBUG', false );`.
4. Change it to these three lines:

```php
define( 'WP_DEBUG', true );
define( 'WP_DEBUG_LOG', true );
define( 'WP_DEBUG_DISPLAY', false );
```

1. Save the file and reload your site.
2. Check `wp-content/debug.log` for the error message.

The log tells you which file or function caused the error. Use it to identify the fix below.

:::danger
Turn off debug mode after you find the error. Set `WP_DEBUG` back to `false` and remove the debug lines. Leaving debug mode on exposes technical details to visitors.
:::

## Common causes and fixes

### Plugin conflict

A plugin may be incompatible with your WordPress version or with Milano.

1. Go to **Plugins → Installed Plugins**.
2. Select all plugins and choose **Deactivate** from the bulk actions dropdown.
3. Reload your site. If it works, a plugin is the cause.
4. Activate plugins one at a time, reloading after each, until the error returns.
5. The last plugin you activated is the cause. Leave it deactivated and contact the plugin author.

### Theme conflict

If deactivating plugins does not fix the error, the theme may be the cause.

1. Go to **Appearance → Themes**.
2. Activate a default WordPress theme (Twenty Twenty-Four or similar).
3. Reload your site. If it works, Milano is the cause.
4. Update Milano to the latest version and try again. If the error persists, contact support.

### PHP memory limit

Your server may not have enough memory for WordPress to run.

1. Open `wp-config.php`.
2. Add this line before the "That's all, stop editing" comment:

```php
define( 'WP_MEMORY_LIMIT', '256M' );
```

1. Save and reload your site.

If this fixes the error, your host's default memory limit was too low. You can keep this line or ask your host to increase the limit server-wide.

### Corrupt .htaccess file

A bad rewrite rule in your `.htaccess` file can cause a 500 error.

1. Connect to your site via FTP.
2. Rename `.htaccess` to `.htaccess-old`.
3. Reload your site.
4. If it works, go to **Settings → Permalinks** and click **Save Changes** to generate a fresh `.htaccess` file.

### PHP version mismatch

Milano requires PHP 7.4 or higher. An outdated PHP version can cause fatal errors.

1. Check your PHP version in your hosting control panel or by installing the **Site Health** plugin.
2. If your PHP version is below 7.4, update it through your hosting control panel.
3. Test your site after the update.

:::caution
Back up your site before changing the PHP version. Some plugins may not be compatible with newer PHP versions.
:::

## When to contact support

Contact Milano support if:

- The error persists after trying all the steps above.
- The debug log points to a Milano theme file.
- The error started after a Milano update.

Include your `debug.log` file and a description of what you were doing when the error appeared. See [Contact support](../support-updates/contact-support/) for what information to gather.

## Next steps

- [Contact support](../support-updates/contact-support/) — prepare the information support needs.
- [Troubleshooting](../support-updates/troubleshooting/) — other frequent problems and their fixes.
