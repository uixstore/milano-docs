---
title: GDPR compliance
description: Configure Milano's cookie notice and set up your store for EU visitor compliance.
---

The General Data Protection Regulation (GDPR) applies to any store that serves visitors in the European Union. Milano includes a built-in cookie notice module to help you meet the regulation's consent requirements.

:::note
This guide covers the technical steps Milano provides. It is not legal advice. Consult a qualified professional for guidance specific to your business.
:::

## Turn on the cookie notice

1. Go to **Milano → Theme Settings → Modules**.
2. Find the **Cookie notice** section.
3. Turn on **Cookie notice**.
4. Enter your notice text in the **Message** field.
5. Change the button text if needed (default: **Accept**).
6. Click **Save Changes**.

A banner appears at the bottom of every page until the visitor accepts cookies.

## Write your cookie notice message

Your message should tell visitors what cookies your store uses and why. Here is a starting point:

> We use cookies to ensure you get the best experience on our website. By continuing to browse, you agree to our use of cookies.

Link to your privacy policy so visitors can read more detail.

## Add a privacy policy page

1. Go to **Pages → Add New**.
2. Title the page "Privacy Policy".
3. Write your policy or paste one from a generator.
4. Click **Publish**.
5. Add the page to your footer menu so visitors can find it.

Your privacy policy should cover:

- What data you collect (orders, accounts, analytics)
- Why you collect it
- How long you keep it
- Who you share it with (payment processors, shipping companies)
- How visitors can request their data or ask for deletion

## WooCommerce and personal data

WooCommerce collects personal data during checkout. You do not need to do anything extra for this — WooCommerce handles consent through its checkout form. But you should mention it in your privacy policy.

WooCommerce also includes tools for data export and erasure requests:

1. Go to **WooCommerce → Tools**.
2. Use **Export personal data** or **Erase personal data** to handle visitor requests.

## Analytics cookies

If you use Google Analytics or similar tools, these set tracking cookies. Mention them in your privacy policy and consider whether you need explicit consent before they load. Some stores use a cookie consent plugin for granular control over which scripts run before acceptance.

## Troubleshooting

**Problem:** The cookie notice does not appear.
**Fix:** Make sure the module is turned on under **Milano → Theme Settings → Modules**. Clear your site cache.

**Problem:** Visitors see the notice on every page visit.
**Fix:** The acceptance cookie may not be saving. Check that your caching plugin excludes the cookie notice script from caching.

## Next steps

- [Cookie notice module](../theme-modules/cookie-notice/) — full documentation for the cookie notice settings.
- [Theme license Q&A](./theme-license-qa/) — questions about your Milano purchase and support.
