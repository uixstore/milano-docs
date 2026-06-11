---
title: Add a Mailchimp signup form
description: Grow your email list by adding a Mailchimp newsletter form to your Milano store.
---

Mailchimp is a popular email marketing service. Adding a signup form to your store lets visitors subscribe to your newsletter, promotions, or product announcements.

## Create a form in Mailchimp

1. Log in to your [Mailchimp account](https://mailchimp.com/).
2. Go to **Audience → Signup forms**.
3. Choose **Embedded forms** or **Form builder**.
4. Design your form and copy the embed code (for embedded forms) or note the form settings (for the plugin method below).

## Method 1 — Use the Mailchimp for WP plugin (recommended)

This method gives you a shortcode you can place anywhere in your store.

1. Go to **Plugins → Add New Plugin**.
2. Search for "Mailchimp for WP".
3. Click **Install Now**, then **Activate**.
4. Go to **Mailchimp for WP → Mailchimp** in your dashboard.
5. Enter your Mailchimp API key (find it in Mailchimp under **Account → Extras → API keys**).
6. Click **Save changes**.
7. Go to **Mailchimp for WP → Form** to design your form.
8. Copy the shortcode from the plugin settings page.

### Add the form to a page

1. Edit the page where you want the form.
2. Add a **Shortcode** block (Block Editor) or **Shortcode** widget (Elementor).
3. Paste the shortcode.
4. Save or publish the page.

### Add the form to your footer

1. Go to **Appearance → Widgets**.
2. Find the **Footer** widget area.
3. Add a **Shortcode** widget.
4. Paste the Mailchimp shortcode.
5. Click **Update**.

## Method 2 — Use the embed code

If you prefer the HTML embed code from Mailchimp:

1. Edit the page in Elementor or the Block Editor.
2. Add an **HTML** block or widget.
3. Paste the embed code from Mailchimp.
4. Save the page.

:::note
The embed code method gives you less control over styling. The plugin method lets you match the form to your store's colors and fonts.
:::

## Style the form to match Milano

The Mailchimp for WP plugin inherits your theme's form styles. If the form looks out of place:

1. Go to **Mailchimp for WP → Form**.
2. Add custom CSS classes to the form wrapper.
3. Add custom CSS under **Milano → Theme Settings → Custom CSS** to match your store's button colors and input styles.

## Troubleshooting

**Problem:** Subscribers do not appear in Mailchimp.
**Fix:** Check that your API key is correct. Test the form yourself and check the plugin's log under **Mailchimp for WP → Logs**.

**Problem:** The form shows an error when submitting.
**Fix:** Make sure your Mailchimp audience is set up correctly and the form fields match the audience fields. Check that your site can reach Mailchimp's API (some firewalls block external API calls).

## Next steps

- [Custom CSS](../theme-settings/custom-css/) — style your signup form to match Milano.
- [Footer builder](../footer/footer-builder/) — place your signup form in the footer for maximum visibility.
