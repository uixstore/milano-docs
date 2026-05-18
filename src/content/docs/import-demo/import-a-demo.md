---
title: Import a demo
description: Import a Milano demo in one click using the built-in demo importer.
sidebar:
  order: 2
draft: false
---

Milano includes its own demo importer. You can import a full demo or pick specific parts (content, Customizer settings, widgets) to import separately.

## Before you begin

- **WooCommerce and Elementor installed and activated** — [Install required plugins](../getting-started/install-required-plugins/).
- **A fresh WordPress install** — demos work best on a clean site. If you have existing content, back it up first.
- **Enough server resources** — demo imports can take a few minutes. Make sure your PHP `max_execution_time` is at least 300 seconds and `memory_limit` is at least 256 MB.

## Import a full demo

1. Go to **Milano → Demos** in your WordPress admin.

   ![Milano Demos screen showing available demo cards](../../../assets/shared/placeholder.svg)

   _Milano → Demos screen with the grid of demo cards and thumbnails._

2. Browse the demos and click **Import** on the one you want.

3. A confirmation dialog appears. Click **Import** to start.

   ![Demo import confirmation dialog](../../../assets/shared/placeholder.svg)

   _Import confirmation dialog with the "Import" button highlighted._

4. Wait for the import to finish. You will see a progress bar for each step: installing plugins, importing content, Customizer settings, and widgets.

   ![Demo import progress screen](../../../assets/shared/placeholder.svg)

   _Import progress screen showing step-by-step progress bars._

5. When the import is complete, click **View your site** to see the result.

:::tip
Keep the demo importer tab open until the import finishes. Closing the tab mid-import may leave your site in a partial state.
:::

## Import specific parts

If you only want certain parts of a demo, click **Custom Import** on the demo card instead of **Import**. You can then choose which items to import:

- **Content** — pages, posts, products, and media.
- **Customizer settings** — colors, typography, layout options.
- **Widgets** — sidebar and footer widget areas.

Select the items you want and click **Import Selected**.

## Troubleshooting

**Problem:** The import stops at a certain percentage and does not continue.
**Fix:** This is usually a server timeout. Increase your PHP `max_execution_time` to at least 300 seconds and `memory_limit` to 256 MB or higher. Then retry the import.

**Problem:** "Failed to import content" error.
**Fix:** Check that WooCommerce and Elementor are installed and activated. The demo content depends on these plugins.

**Problem:** The imported demo looks different from the preview.
**Fix:** Make sure the Customizer settings were imported. Go to **Milano → Demos** and run a Custom Import with only "Customizer settings" selected.

## Next steps

With a demo imported, customize it to match your brand.

Next: [Site Identity](../customizer/site-identity/) to change your logo and site title.
