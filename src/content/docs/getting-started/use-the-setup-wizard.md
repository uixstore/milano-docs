---
title: Use the setup wizard
description: Let Milano's setup wizard handle purchase code, child theme, plugins, and demo import automatically.
sidebar:
  order: 3
draft: false
---

When you activate Milano for the first time, the setup wizard opens automatically. It walks you through every required step in order — enter your purchase code, install the child theme, install the required plugins, and import a demo — so you have a working store in about 30 minutes.

If you would rather set things up by hand, or you need to redo a single step, see [Install Milano](../install-milano/) for the manual path.

## What the wizard does

The wizard runs five steps in this order. Steps 1–4 are skippable; the final **Done** step is the confirmation screen.

| Step | What it does                                                                         |
| ---- | ------------------------------------------------------------------------------------ |
| 1    | **Welcome** — enter your purchase code and accept the ThemeForest license terms      |
| 2    | **Child Theme** — install and activate the child theme                               |
| 3    | **Plugins** — install the required and recommended plugins in one batch              |
| 4    | **Prebuilt Templates** — pick a demo and import it, or apply Elementor settings only |
| 5    | **Done** — confirmation screen with shortcuts to the dashboard, Customizer, and site |

:::note
The wizard runs as a full-screen page with the WordPress admin chrome hidden. It looks like a separate onboarding flow, not a normal admin page.
:::

## What you'll see

A stepper bar at the top shows all five steps and which one is active. The current step fills the main panel. You move between steps with **Continue** and **Back** buttons; most steps also have a **Skip this step** link.

![Setup wizard with the stepper bar at the top and the Welcome step active](../../../assets/shared/placeholder.svg)

_Setup wizard with the five steps visible at the top and the Welcome step active in the panel — purchase-code field and license-agreement checkbox._

## Re-launch the wizard

The wizard only opens automatically once — the first time you activate the theme. To run it again, open the License section of the Milano dashboard:

1. Go to **Milano → Dashboard** in your WordPress admin.
2. Click the **License** tab.
3. Click **Re-run the Setup Wizard** at the bottom of the page.

The wizard opens on the Welcome step and runs through the flow again.

:::tip
The **License** tab is only visible in the side menu while your license is inactive. After activation, bookmark the URL `wp-admin/admin.php?page=milano-dashboard&tab=license` or navigate to it directly to reach the **Re-run the Setup Wizard** link.
:::

## Skip the wizard

The wizard is optional. Every step except the final **Done** screen has a **Skip this step** link that lets you complete it later from the WP admin. Use this if you want to:

- Register your purchase code with a different license.
- Install the child theme yourself.
- Choose your own plugins instead of the default set.
- Build a custom site without importing a demo.

If you skip the wizard entirely, the same four steps are still available as manual guides in the section below.

## Manual equivalents

The wizard's steps are documented in detail on their own pages. If you skipped the wizard, or want to redo a step by hand, follow them in this order:

1. [Before you begin](../before-you-begin/) — confirm your hosting meets Milano's requirements.
2. [Install Milano](../install-milano/) — upload and activate the theme. The wizard opens right after this step.
3. [Register your purchase code](../register-purchase-code/) — license, updates, and support.
4. [Install the child theme](../install-the-child-theme/) — keep your customizations safe across updates.
5. [Install required plugins](../install-required-plugins/) — WooCommerce and Elementor.
6. [Import a demo](./import-demo/) — start with a pre-built storefront.

:::note
The wizard runs steps 3–6 for you. Steps 1 and 2 are always manual — you have to install the theme before the wizard can open.
:::

## Troubleshooting

**Problem:** The wizard does not appear after activation.
**Fix:** Some hosts delay admin notices on a fresh install. Refresh the WordPress admin, then re-launch the wizard from **Milano → Dashboard → License → Re-run the Setup Wizard**. If the wizard is still missing, deactivate and reactivate the theme under **Appearance → Themes**.

**Problem:** A wizard step fails or shows an error.
**Fix:** The wizard stops on the failing step. Identify which step is stuck — Welcome, Child Theme, Plugins, or Templates — and check the [Troubleshooting](../register-purchase-code/) section on the corresponding guide page. Fix the underlying issue, then re-run the wizard to retry.

**Problem:** I want to change a step I already completed.
**Fix:** Re-run the wizard. It starts from the Welcome step regardless of completion state, so you can redo any step.

## Next steps

If the wizard finished successfully, your store is ready to customize. If you want to redo a step or set things up by hand, the pages above cover every step in detail.
