---
title: Install required plugins
description: Install WooCommerce and Elementor, the two plugins Milano needs to run.
sidebar:
  order: 6
draft: false
---

Milano requires two plugins to work: WooCommerce and Elementor. The [setup wizard](../use-the-setup-wizard/) installs them for you on its **Plugins** step. This page covers the wizard flow plus the manual path for users who skipped the wizard or want to install a different set of plugins.

## Required plugins

### WooCommerce

**What it does.** Adds online store functionality to WordPress — products, cart, checkout, and payments.
**Where to install.** The wizard's Plugins step, or **Milano → Dashboard → Plugins** in your WordPress admin.
**License.** Free. No paid plan needed for basic store features.

### Elementor

**What it does.** A drag-and-drop page builder for creating and editing pages visually. Milano's demo content and page templates are built with Elementor.
**Where to install.** The wizard's Plugins step, or **Milano → Dashboard → Plugins** in your WordPress admin.
**License.** Free. The free version covers all Milano demo imports. Elementor Pro is optional.

## Install through the setup wizard

The wizard shows a checklist of plugins on its **Plugins** step. Required plugins are pre-selected; you can deselect any you don't want, then click **Continue** to install and activate the whole batch in one go.

![Milano Plugins step with WooCommerce and Elementor pre-selected](../../../assets/shared/placeholder.svg)

_Setup wizard Plugins step with the required plugins pre-selected and the bulk-install button highlighted._

The button shows a spinner while each plugin is installed and activated. When the queue finishes, the wizard advances to the Templates (demo import) step.

## Install from the Milano Plugins tab

If you skipped the wizard or want to manage plugins later, use the Plugins tab:

1. Go to **Milano → Dashboard** in your WordPress admin.
2. Click the **Plugins** tab.
3. Check the boxes next to the plugins you want.
4. Click **Install** (or **Activate**, if they're already installed) to apply the selection.

The Plugins tab uses the same checklist as the wizard, so the install and activate actions behave identically.

## Install manually through WordPress

If the Milano installer is unavailable, install the plugins yourself through the WordPress plugin directory:

1. Go to **Plugins → Add New**.
2. Search for "WooCommerce". Click **Install Now**, then **Activate**.
3. Search for "Elementor". Click **Install Now**, then **Activate**.

## Next steps

With WooCommerce and Elementor installed and active, import a demo or start building from scratch.

Next: [Import a demo](./import-demo/) or jump to the [First-time setup checklist](./first-time-setup-checklist/).
