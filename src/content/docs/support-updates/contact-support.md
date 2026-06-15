---
title: Contact support
description: What to try before opening a support ticket and what information to include.
sidebar:
  order: 4
---

We want to solve your problem as fast as possible. The steps below help us narrow down the cause and get you a fix sooner.

## Try these steps first

Most issues have a solution in this docs site. Before you open a ticket, work through this list:

1. **Read the common issues page.** Many problems have a documented fix. See [Common issues](../troubleshooting/common-issues/).
2. **Clear your cache.** Browser cache, caching plugin cache, and CDN cache can all make it look like something is broken when it is not. Do a hard refresh (Ctrl + F5 on Windows, Cmd + Shift + R on Mac), clear your caching plugin from its settings page, and purge your CDN if you use one.
3. **Disable all plugins except WooCommerce.** A plugin conflict is the most common cause of layout breaks, white screens, and missing features. Go to **Plugins**, select all plugins except WooCommerce, choose "Deactivate" from the bulk actions dropdown, and click **Apply**. Check if the issue goes away. If it does, re-enable plugins one at a time until the issue returns. The last plugin you enabled is the cause.
4. **Switch to a default WordPress theme.** Go to **Appearance → Themes** and activate Twenty Twenty-Four (or any default WordPress theme). If the issue persists, the problem is not with Milano — it is with your WordPress setup, a plugin, or your server.
5. **Check your PHP version and limits.** Go to **Tools → Site Health → Info**. Milano needs PHP 7.4 or higher, at least 256 MB of memory, and a `max_execution_time` of 120 seconds or more. If your limits are lower, ask your host to increase them.

## Gather this information

When you open a support ticket, include the following details. It saves a round of back-and-forth questions.

- **WordPress version.** Find it under **Dashboard → Updates** at the top of the page.
- **PHP version.** Find it under **Tools → Site Health → Info → Server**.
- **Milano version.** Find it under **Appearance → Themes** — the version number shows on the theme card.
- **WooCommerce version** (if you use it). Find it under **Plugins → Installed Plugins**.
- **A link to your site.** We need to see the issue to diagnose it.
- **A clear description of the problem.** What you expected to happen, what actually happened, and the steps to reproduce it.
- **Screenshots or a screen recording.** A picture shows us more than a paragraph of description.

:::tip
A screen recording is especially helpful for issues that happen during an action, like a demo import failing halfway through. Use a free tool like Loom or your browser's built-in recorder.
:::

## What to expect after you open a ticket

Support requests are handled Monday to Friday. You will receive a first reply within 48 hours in most cases. Complex issues may take longer to investigate.

If we need more information from you, we will ask. The faster you respond, the faster we can fix the issue.

:::caution
You must register your purchase code before you can receive support. Go to **Milano → Dashboard → License** and enter your code if you haven't already. See [Register your purchase code](../getting-started/register-purchase-code/).
:::

## Next steps

- [Support policy](./support-policy/) — what support covers and response times.
- [Update Milano](./update-milano/) — keep your theme up to date to avoid known issues.
