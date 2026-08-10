---
title: Contact page
description: Create a contact page with a form and map so visitors can get in touch with your store.
sidebar:
  order: 4
---

A contact page gives visitors a way to reach you. This guide covers creating a contact page with a form and optional map.

## Create the page

1. Go to **Pages → Add New**.
2. Enter **Contact** as the title.
3. Build the content with Elementor or the block editor.
4. Click **Publish**.

## Add a contact form

Milano doesn't include a built-in form builder. Use a form plugin instead. The two most popular options:

### Contact Form 7

1. Install and activate [Contact Form 7](https://wordpress.org/plugins/contact-form-7/).
2. Go to **Contact → Add New** to create a form.
3. Copy the shortcode (e.g., `[contact-form-7 id="123" title="Contact form"]`).
4. Open your contact page and paste the shortcode into a Shortcode block or Elementor's Shortcode widget.

#### Sample form

This is the form template from the Milano demo site. It uses the demo layout classes, so the fields line up with the theme's styles. Paste it into the **Form** tab of the Contact Form 7 editor to recreate the form:

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
  [acceptance acceptance-477] I agree to the Privacy Policy of the website.
  [/acceptance]
</div>
<div class="form-row trim-children">[submit "Send"]</div>
```

### WPForms

1. Install and activate [WPForms](https://wordpress.org/plugins/wpforms-lite/).
2. Go to **WPForms → Add New** and use the Simple Contact Form template.
3. Copy the shortcode.
4. Paste it into your contact page.

## Add a map

Use the **Mapbox** widget in Elementor to show your store location:

1. Open the contact page with Elementor.
2. Drag the **Mapbox** widget onto the page.
3. Enter your address or coordinates.
4. Adjust the zoom level and map style.

## Add contact details

Use the **Icon Box** widget to display your address, phone number, and email:

1. Drag an **Icon Box** widget onto the page.
2. Choose an icon (map pin, phone, envelope).
3. Enter your contact details.
4. Duplicate the widget for each piece of information.

## Page header

Set a background image for the contact page header:

1. Open the page with Elementor.
2. Click the **gear icon** (Page Settings) in the top-left corner.
3. Under **Page Header**, upload a background image.

See [Page header](./page-header/) for all available settings.

## Add to navigation

Add the contact page to your main menu so visitors can find it:

1. Go to **Appearance → Menus**.
2. Open the **Pages** panel and check **Contact**.
3. Click **Add to menu**.
4. Drag it to your preferred position.
5. Click **Save menu**.

See [Create a menu](../navigation/create-a-menu/) for detailed menu instructions.
