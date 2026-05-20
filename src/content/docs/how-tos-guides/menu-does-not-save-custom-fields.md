---
title: Menu does not save custom fields
description: Fix missing mega menu settings in the WordPress menu editor.
---

When you add custom fields to menu items — such as mega menu column settings, icons, or descriptions — WordPress may not save them. This usually happens because the screen options hide the fields or a server limit cuts off the save request.

## Check screen options

The WordPress menu editor hides advanced fields by default.

1. Go to **Appearance → Menus**.
2. Click **Screen Options** at the top right of the screen.
3. Make sure **CSS Classes**, **Link Relationship (XFN)**, and **Description** are checked.
4. Close Screen Options.

Now when you expand a menu item, you will see these fields available.

## Mega menu fields are missing

Milano's mega menu settings appear as custom fields on menu items. If they do not show:

1. Confirm the mega menu feature is turned on. Go to **Milano → Theme Settings → Header** and check that mega menus are enabled.
2. Edit a menu item by clicking the arrow to expand its settings.
3. Look for the **Mega menu** section within the item settings.
4. If it does not appear, deactivate and reactivate the Milano companion plugin that provides mega menu functionality.

## Server limit cuts off the save

If you have a large menu with many items and custom fields, the save request may exceed your server's `max_input_vars` limit. WordPress silently drops fields past the limit.

### Check your current limit

1. Install a plugin like **Site Health Info** or create a `phpinfo.php` file.
2. Look for `max_input_vars`. The default is often 1000.

### Increase the limit

Add this line to your `wp-config.php` file:

```php
@ini_set( 'max_input_vars', 5000 );
```

If that does not work, add this to your `.htaccess` file:

```
php_value max_input_vars 5000
```

Or contact your host and ask them to increase `max_input_vars` to at least 5000.

:::caution
After increasing the limit, you must re-save your menu. The fields that were dropped before are not recovered automatically.
:::

## Plugin conflict

A navigation or menu-enhancing plugin may interfere with how Milano saves menu fields.

1. Deactivate all plugins except WooCommerce and Milano's companion plugins.
2. Try saving the menu again.
3. If it works, reactivate plugins one at a time to find the conflict.

## Troubleshooting

**Problem:** I re-saved my menu but mega menu settings are still missing.
**Fix:** Re-enter the mega menu settings after increasing `max_input_vars`. The old values were not saved.

**Problem:** Screen Options does not show the checkboxes I need.
**Fix:** Make sure you are on the **Menus** screen (Appearance → Menus), not the **Customize → Menus** screen. Screen Options only appears in the admin menu editor.

## Next steps

- [Mega menus](../navigation/mega-menus/) — set up rich dropdown menus with columns, images, and widgets.
- [Create a menu](../navigation/create-a-menu/) — build and assign navigation menus.
