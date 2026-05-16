---
title: Import Demo
description: Import a Milano demo in one click using the built-in demo importer.
---

Milano ships with several pre-built demos you can import in one click. Each demo includes pages, content, images, and Customizer settings — giving you a working site in minutes.

## What a demo import includes

When you import a demo, Milano installs:

- **Pages** — all the demo pages with their content and layout.
- **Customizer settings** — colors, typography, header/footer layout, and other theme options.
- **Menus** — primary and footer menus matching the demo structure.
- **Widgets** — sidebar and footer widget areas populated with demo content.
- **Demo content** — sample products, blog posts, and portfolio items (if the demo includes them).

## What a demo import does not change

- **Your plugins** — demo imports do not install or remove plugins. Make sure WooCommerce and Elementor are installed before importing.
- **Your existing content** — if you already have pages or posts, the demo adds to them rather than replacing them.
- **Your WordPress settings** — site title, tagline, permalinks, and other core settings stay as you set them.

:::caution
Import a demo on a fresh WordPress install for the best results. If you already have content, back up your site first — the demo adds pages and settings that may conflict with existing data.
:::

## Before you begin

- **WooCommerce and Elementor installed and activated** — [Install required plugins](../getting-started/install-required-plugins/).
- **A fresh WordPress install** — demos work best on a clean site. If you have existing content, back it up first.
- **Enough server resources** — demo imports can take a few minutes. Make sure your PHP `max_execution_time` is at least 300 seconds and `memory_limit` is at least 256 MB.

## Import a full demo

1. Go to **Milano → Demos** in your WordPress admin.

   ![Milano Demos screen showing available demo cards](../../../assets/demos/import-a-demo/demos-screen.png)

   <!-- TODO(screenshot): Capture the Milano → Demos screen. Show the grid of demo cards with thumbnails. -->

2. Browse the demos and click **Import** on the one you want.

3. A confirmation dialog appears. Click **Import** to start.

   ![Demo import confirmation dialog](../../../assets/demos/import-a-demo/import-confirm.png)

   <!-- TODO(screenshot): Capture the import confirmation dialog. Box around the "Import" button. -->

4. Wait for the import to finish. You will see a progress bar for each step: installing plugins, importing content, Customizer settings, and widgets.

   ![Demo import progress screen](../../../assets/demos/import-a-demo/import-progress.png)

   <!-- TODO(screenshot): Capture the import progress screen showing the step-by-step progress bars. -->

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
