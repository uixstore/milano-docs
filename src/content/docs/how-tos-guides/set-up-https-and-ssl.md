---
title: Set up HTTPS and SSL
description: Secure your Milano store with an SSL certificate so all pages load over HTTPS.
---

HTTPS encrypts the connection between your visitor's browser and your server. It protects customer data during checkout and improves your search engine ranking. Most hosting providers offer free SSL certificates through Let's Encrypt.

## Check if your site already has SSL

Open your store URL in a browser. Look at the address bar:

- A padlock icon means HTTPS is active.
- "Not secure" or a warning means HTTPS is not set up.

You can also visit `https://yourdomain.com` directly. If the page loads with a padlock, SSL is installed.

## Install an SSL certificate

The steps depend on your hosting provider. Most hosts offer one-click SSL setup.

### cPanel hosting

1. Log in to your cPanel dashboard.
2. Find **SSL/TLS Status** or **Let's Encrypt SSL**.
3. Select your domain.
4. Click **Run AutoSSL** or **Issue Certificate**.
5. Wait for the certificate to install (usually under a minute).

### Managed WordPress hosting

Contact your host's support or check their dashboard for an SSL toggle. Most managed hosts (WP Engine, Kinsta, SiteGround) install SSL automatically.

### Manual installation

If your host does not offer automated SSL:

1. Generate a certificate through [Let's Encrypt](https://letsencrypt.org/) using Certbot on your server.
2. Install the certificate files in your web server configuration.
3. Restart your web server.

## Force HTTPS on your WordPress site

After the certificate is installed, you need to tell WordPress to use HTTPS for all pages.

1. Go to **Settings → General**.
2. Change both **WordPress Address (URL)** and **Site Address (URL)** from `http://` to `https://`.
3. Click **Save Changes**.

:::caution
Your site will become unreachable if the SSL certificate is not installed correctly. Double-check the padlock appears before changing these URLs.
:::

## Fix mixed content warnings

After switching to HTTPS, some images or scripts may still load over HTTP. This causes a "mixed content" warning in the browser.

To fix it:

1. Install the **Really Simple SSL** plugin from **Plugins → Add New Plugin**.
2. Activate the plugin.
3. The plugin automatically detects and fixes most mixed content issues.

If warnings remain, check your theme settings and replace any hardcoded `http://` URLs with `https://`.

## Update your site after switching

After moving to HTTPS:

- Submit your new HTTPS URLs to Google Search Console.
- Update any hardcoded links in your content (Really Simple SSL handles most of this).
- Check that your checkout page loads without warnings.

## Troubleshooting

**Problem:** Site is unreachable after changing URLs to HTTPS.
**Fix:** Revert the URLs back to `http://` in your database via phpMyAdmin, or ask your host to help. The SSL certificate may not be active.

**Problem:** Checkout page shows a security warning.
**Fix:** Check that all scripts, images, and styles on the checkout page load over HTTPS. Use your browser's developer console (F12) to find mixed content URLs.

## Next steps

- [Caching tips](../performance-seo/caching-tips/) — speed up your store after SSL is configured.
- [GDPR compliance](./gdpr-compliance/) — configure cookie notices for EU visitors.
