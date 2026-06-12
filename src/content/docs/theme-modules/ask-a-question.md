---
title: Ask a Question
description: Add an "Ask a question" button and popup to product pages so customers can inquire before buying.
sidebar:
  order: 6
---

The Ask a Question module adds a button to the product page that opens a contact form in a modal. Customers can ask about sizing, materials, or anything else before placing an order. Inquiries are emailed to the site admin.

The module is active by default after you install Milano, but the button stays hidden until you turn it on in the Customizer.

## Turn on the button

1. Go to **Appearance → Customize → Product Page**.
2. Find the **Ask a Question** section.
3. Turn on **Show ask a question button**.
4. Click **Publish**.

The button appears in the product actions row with a question-mark icon and "Ask a question" label.

## Choose a form type

You can use Milano's built-in form or replace it with a form from a third-party plugin like Contact Form 7 or WPForms.

### Default form

The built-in form collects:

- **Name** (required)
- **Email** (required)
- **Phone** (optional)
- **Message** (required)

When a customer submits the form, the message is sent to the site admin email address via WordPress mail. The email includes the product name with a link, the customer's name, email, phone, and their message.

### Custom shortcode

To use a third-party form:

1. Go to **Appearance → Customize → Product Page**.
2. In the **Ask a Question** section, set **Form Type** to **Custom Shortcode**.
3. Enter the form shortcode in the **Form Shortcode** field. For example:
   - `[contact-form-7 id="123"]`
   - `[wpforms id="456"]`
4. Click **Publish**.

The modal will render your form instead of the default one.

## Requirements

- WooCommerce must be installed and active.
