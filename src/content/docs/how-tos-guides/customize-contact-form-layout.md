---
title: Customize the contact form layout
description: Replace the default Contact Form 7 markup with Milano-styled form code to match the demo layout.
sidebar:
  label: Customize contact form
draft: false
---

The default Contact Form 7 form works out of the box, but its layout doesn't match the Milano demo. Use the markup below to restyle your form with a two-column name/email row, a full-width message field, and a privacy-policy acceptance checkbox.

## Before you begin

- Install and activate [Contact Form 7](https://wordpress.org/plugins/contact-form-7/) (included with Milano demo content).
- Create a new contact form or open an existing one in **WordPress Admin → Contact → Contact Forms**.

## Step 1 — Replace the form markup

1. Open the contact form you want to edit.
1. Delete everything in the **Form** editor.
1. Paste the following code then click **Save**.

```html
<div class="form-row mb-4 grid grid-cols-1 md:grid-cols-2 gap-4 trim-children">
  <p class="my-0">
    [text* your-name autocomplete:name class:w-full placeholder "Your name*"]
  </p>
  <p class="my-0">
    [email* your-email class:w-full autocomplete:email placeholder "Your email"]
  </p>
</div>

<div class="form-row mb-4">
  [textarea* your-message class:w-full placeholder] Your message* [/textarea*]
</div>
<div class="form-row mb-6">
  [acceptance your-privacy] I agree to the Privacy Policy of the website.
  [/acceptance]
</div>
<div class="form-row trim-children">[submit "Send"]</div>
```

## Step 2 — Add the form to your contact page

1. Go to **Pages → Contact** (or whichever page you use for the contact form).
2. Add a **Contact Form 7** block (or shortcode block) and select the form you just edited.
3. Click **Update**.

## What the markup does

| Row       | Fields                    | Layout                                   |
| --------- | ------------------------- | ---------------------------------------- |
| **Row 1** | Name and email            | Two columns on desktop, stacks on mobile |
| **Row 2** | Message                   | Full-width textarea                      |
| **Row 3** | Privacy policy acceptance | Checkbox with agreement text             |
| **Row 4** | Submit button             | Full-width button                        |

## Troubleshooting

**The form looks unstyled.**
Make sure you pasted the markup into the **Form** editor, not the **Mail** or **Messages** tab. The Form tab is where Contact Form 7 renders the front-end HTML.

**The two columns don't appear.**
On screens smaller than 768px, the name and email fields stack vertically by design. This is the responsive behavior — no fix needed.
