---
title: Page header
description: Customize the banner area that appears above page content — background image, breadcrumbs, height, and colors.
sidebar:
  order: 2
---

The page header is the banner section that sits between the site header and your page content. It shows the page title, optional background image, and breadcrumbs.

You can control the page header globally for all pages, or override it per page.

## Global settings

Go to **Appearance → Customize → Pages → Page Header**.

### General

| Setting                | Default | What it does                                   |
| ---------------------- | ------- | ---------------------------------------------- |
| **Enable Page Header** | On      | Show or hide the page header on all pages      |
| **Image**              | —       | Default background image behind the page title |
| **Enable Overlay**     | Off     | Darken the image for better text readability   |
| **Show Breadcrumbs**   | On      | Show the navigation trail in the page header   |

### Design

| Setting              | Default | Range       | What it does                           |
| -------------------- | ------- | ----------- | -------------------------------------- |
| **Height**           | 190px   | 100 – 500px | How tall the page header is            |
| **Background Color** | —       | —           | Background behind the image            |
| **Text Color**       | —       | —           | Color of the title and breadcrumb text |

Click **Publish** to save your changes.

## Per-page overrides

You can override the global page header settings for individual pages using Elementor's Page Settings.

1. Open the page with Elementor.
2. Click the **gear icon** in the top-left corner to open Page Settings.
3. Find the **Page Header** section.

### Display control

| Setting            | Options                    | What it does                                     |
| ------------------ | -------------------------- | ------------------------------------------------ |
| **Display**        | Default / Enable / Disable | Override the global enable/disable for this page |
| **Image**          | —                          | Set a different background image for this page   |
| **Enable Overlay** | On / Off                   | Override the overlay setting                     |

### Style overrides

| Setting              | What it does                                |
| -------------------- | ------------------------------------------- |
| **Background Color** | Override the background color for this page |
| **Text Color**       | Override the text color for this page       |

## Hide the page header on a specific page

1. Open the page with Elementor.
2. Click the **gear icon** (Page Settings) in the top-left corner.
3. Under **Page Header → Display**, select **Disable**.

The page header is hidden on that page only. All other pages keep the global setting.

## Breadcrumbs

Breadcrumbs show the navigation path (e.g., Home → Pages → Contact). They help visitors understand where they are on your site.

To turn off breadcrumbs globally, go to **Appearance → Customize → Pages → Page Header** and toggle **Show Breadcrumbs** off.

To hide breadcrumbs on a single page, set **Page Header → Display** to **Disable** in the Elementor Page Settings. This hides the entire page header, including breadcrumbs.

## Page subtitle

The page header can display a subtitle below the page title. This subtitle uses the page's **excerpt** field.

To add or edit the subtitle:

1. Open the page with Elementor.
2. Click the **gear icon** (Page Settings) in the top-left corner.
3. Find the **Excerpt** field.
4. Enter your subtitle text.
5. Click **Update**.

If the excerpt field is empty, no subtitle appears in the page header.
