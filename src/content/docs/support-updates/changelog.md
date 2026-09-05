---
title: Changelog
description: Track what changed in each Milano release.
sidebar:
  order: 4
---

This page records every Milano release. Check it before updating to see what is new, what is fixed, and whether any changes affect your site.

## How to read the changelog

Each entry lists the version number, release date, and changes grouped by type:

- **Added** — new features or settings.
- **Changed** — existing features that work differently now.
- **Fixed** — bugs that are resolved in this version.

## Version history

### 1.7.0

**Added**

- Introduce two new demos: [**Prime Market**](https://market.wpmilano.com/) and [**Premium Market**](https://premium-market.wpmilano.com/).
- Add support for the new Variation gallery feature introduced in WooCommerce 11.1.
- Add "Product Sets" module: per-product sets pairing the main item with up to three complementary products, shown as a carousel on the product page.
- Add Button Marquee widget with customizable items and theme button styles.
- Add Inline Image Heading widget with token-based image spots.
- Add Fade Edges option to Marquee and Button Marquee widgets.
- Add an Inline layout option to the Countdown widget.
- Add customizable heading options to Product Tabs widget.
- Add Media Beside layout to Product Testimonial widget.
- Add product count to the Card v2 category layout.
- Add Input style controls to the Newsletter Form widget.
- Add primary color customization option for header rows.
- Add option to show the post author bio.

**Changed**

- Improve browse categories component with mega menu and submenu support.
- Improve mega menu layout with better row spacing.
- Improve search field and header categories customization options.
- Improve the style of WooCommerce My Account and order pages.
- Improve theme styling for the WooCommerce Cart and Checkout blocks.
- Load theme base styles and fonts in the block editor canvas.

**Fixed**

- Fix mega menu alignment.
- Fix mobile menu with sub-menu not scrollable.
- Fix low-res card image swap for variation-image swatches module.
- Fix Newsletter Form widget button type, size and animation settings not applying.
- Fix fatal error in the Products Filter widget on incomplete filters.
- Fix product gallery not switching correctly with WooCommerce variations in the Product Single widget.
- Fix the add to cart label being hidden in shoppable video modals.
- Fix inconsistent product title styling across product widgets.
- Fix the Featured Product countdown not aligning with the summary text alignment.
- Fix Slideshow widget background bleeding past rounded corners.

### 1.6.0

**Added**

- Add [**Timeless Jewelry**](https://jewelry.wpmilano.com/) template.
- Add [**Luxury Jewelry**](https://luxury-jewelry.wpmilano.com/) template.
- Add Newsletter form: a built-in subscribe form available as an Elementor widget and a WordPress widget.
- Add "Zoom out" content animation to the Slideshow widget.
- Add Yoast SEO and Rank Math breadcrumb integrations.
- Add option for the default state of footer widget accordions on mobile.

**Changed**

- Improve product list widget styling.
- Update mega menu Banner Image button to use the white variant.

**Fixed**

- Fix footer widget styling to remove the bottom border.
- Fix hide link and hide title options for mega menu items.

### 1.5.0

**Added**

- Introduce a new demo: [**Smart Furniture**](https://digital.wpmilano.com/).
- Add "Stock Progress Bar" module: a low-stock urgency bar on the product page with a Customizer position setting, per-product initial stock, and an option to hide the default WooCommerce stock text.

**Changed**

- Update the product widgets and Product Tabs with full WooCommerce catalog sorting (price, popularity, rating).
- Update the Product With Banner widget with a title field and columns gap control.
- Update the Countdown widget with countdown mode selection and loop duration controls.
- Update the Banner Image widget with a control to fill container height.

**Fixed**

- Fix the Default order option not applying in the category and brand widgets.
- Fix HTML stripped from product info and other rich-text fields in the Customizer.
- Fix toast notification background color variable for consistency.
- Fix variation image lookup incorrectly matching video, 3D, and 360 gallery slides.
- Fix mobile header icon labels showing when desktop display is set to icon and text.
- Fix slider no-touch-move option being applied on mobile viewports, stranding visitors on a slide.
- Fix product meta alignment in the product summary.

### 1.4.0

**Added**

- Introduce two new demos: [**Modern Furniture**](https://furniture.wpmilano.com/) and [**Elegant Furniture**](https://elegant-furniture.wpmilano.com/).
- Add customizable colors for search field text, background, and border.
- Add meta display option above the product name in product card.
- Add "Shop the Look" Elementor widget.
- Add default icon control to the Marquee widget.
- Add text stroke controls and hover effects to the Marquee widget.
- Add "Card Button" style to category widgets.
- Add responsive controls for image width and column gap in Image Box widgets.
- Add content container width options to the Slideshow widget.

**Changed**

- Improve RTL support with logical properties for padding, margin, and text alignment.
- Enhance Lookbook Slideshow with viewport and slider settings and rename it to Lookbook Slider.
- Enhance Category Carousel with manual category selection and custom image, title, and description controls.

**Fixed**

- Fix account navigation on mobile that has no gap.
- Fix mobile menu drawer z-index with admin bar.
- Fix builder layout configurations to include color property.
- Fix button color controls not applying to the Link button style.
- Fix Banner Image Carousel widget styling.

### 1.3.0

**Added**

- Introduce a new demo: [**Modern Eyewear**](https://eyewear.wpmilano.com/).
- Add Brand Carousel Elementor widget with styling and controls.
- Add Category Card Elementor widget.
- Add Category Grid Elementor widget.
- Add button animation control to Slideshow widget.
- Add border control option for Product Tabs header.
- Add mobile media opt-in for Product Testimonial widget.
- Add hover animation options for outline buttons.

**Changed**

- Improve product review layout styling.
- Enhance Brands Marquee widget with combobox source, query settings, and styling options.

**Fixed**

- Fix the issue with product brand in the product meta.
- Fix Product Testimonial content padding control not working.
- Fix Gap control selector in some widgets.

### 1.2.0

**Added**

- Introduce a new demo: [**Foot Wear**](https://footwear.wpmilano.com/).
- Add custom font library support and enhance typography controls in the Customizer.
- Add header v4 preset and improve builder preset settings capture/apply.
- Add option to toggle AJAX add to cart on product pages.
- Add gallery width setting for the single product layout.
- Add Relevanssi integration for enhanced product search.
- Add sticky header offset option for improved reveal behavior.
- Add Elementor support for boxed transparent header layout and live preview of per-page header settings.
- Allow HTML in Customizer repeater fields.
- Add Category Marquee Elementor widget.
- Add sticky position functionality for Elementor widgets and containers.
- Add product gap setttings for catalog pages.

**Changed**

- Improve Customizer image control UI and fix action buttons after upload.

**Fixed**

- Fix product search suggestions to return individual keywords.

### 1.1.0

**Added**

- Introduce a new demo: [**Organic**](https://organic.wpmilano.com/).
- Add Live Sales Notification module.
- Add menu color settings to Customizer.
- Add Brands Directory Elementor widget with A-Z filter and image support.
- Add Lookbook Slideshow Elementor widget with card positioning, transparent background, and hotspot controls.
- Add Product Single (Featured Product) widget for Elementor with countdown timer and styling controls.
- Add controls for category, excerpt, author, and date display in Blog Posts widget.
- Add typography control for product title in shoppable video carousel.
- Add option to make entire slide clickable in Slideshow widget.
- Add placement option for menu items in Mega Menu.

**Changed**

- Enhance quantity button styling.
- Enhance Testimonial Carousel with modern design, improved avatar positioning, typography controls, and responsive spacing.

**Fixed**

- Fix product navigation link colors.
- Fix mega menu positioning.

### 1.0.2

**Added**

- Add product search by SKU.
- Add a column layout option for header rows.

**Changed**

- Improve the search field layout and styling.
- Bundle small custom-element scripts into a single file for better performance.
- Tweak the Slideshow widget with more controls for button style.
- Update the Banner Image Carousel widget with more controls for single item.

**Fixed**

- Fix Category Carousel widget with the error with the category does not exist.
- Fix error message with Custom CSS module when Elementor Pro installed.

### 1.0.1

**Fixed**

- Fix the issue with plugin installation.

### 1.0.0

**Added**

- Initial release of Milano theme.
