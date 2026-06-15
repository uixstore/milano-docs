---
title: Show the registration form
description: Let customers create accounts on your Milano store by enabling the registration form.
---

By default, WooCommerce shows only a login form on the My Account page. You need to turn on registration so new customers can create accounts.

## Turn on account registration

1. Go to **WooCommerce → Settings → Accounts & privacy**.
2. Under **Account creation**, turn on **Allow customers to create an account on the "My account" page**.
3. Optionally turn on **Allow customers to create an account during checkout** if you want guest checkout users to save their details.
4. Click **Save changes**.

The registration form now appears on the My Account page alongside the login form.

## What customers see

Visitors who go to the My Account page see two tabs:

- **Login** — existing customers enter their email and password.
- **Register** — new customers enter their email, password, and any additional fields you require.

## Add extra registration fields

WooCommerce collects only email and password by default. If you need more information (first name, last name, phone number), you can add fields:

1. Install a plugin like **WooCommerce Custom Registration Fields** or add code to your child theme's `functions.php`.
2. Configure the fields you want to collect.
3. New registrations will include these fields.

:::tip
Keep registration simple. Ask for only what you need. Extra fields reduce the number of people who complete the form.
:::

## Control who can register

You can control registration from the same settings page:

- **Turn off registration** — only you (the admin) can create accounts. Useful for private stores.
- **Turn on during checkout only** — customers create accounts when they place an order, but cannot register from the My Account page.

## Troubleshooting

**Problem:** The registration form does not appear on the My Account page.
**Fix:** Confirm the setting is turned on under **WooCommerce → Settings → Accounts & privacy**. Clear your site cache.

**Problem:** Customers cannot log in after registering.
**Fix:** Check that WordPress is sending the account creation email. Go to **WooCommerce → Settings → Emails** and confirm the "New account" email is enabled. Some hosts block outgoing emails — use an SMTP plugin if needed.
