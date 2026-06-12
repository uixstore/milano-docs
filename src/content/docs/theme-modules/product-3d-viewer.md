---
title: Product 3D Viewer
description: Display an interactive 3D product model in the WooCommerce product gallery using GLB files.
sidebar:
  order: 10
---

The Product 3D Viewer adds an interactive 3D model to the product gallery. It uses Google's `<model-viewer>` web component so customers can rotate, pan, and zoom the model from any angle.

## Turn on Product 3D Viewer

1. Go to **Milano Dashboard → Modules**.
2. Find **Product 3D Viewer** and turn the toggle on.

## Add a 3D model to a product

1. Edit a product.
2. Scroll to the **Product Data** meta box.
3. Find the **3D Viewer** section.
4. Upload your files:
   - **3D model (GLB)** — Upload a `.glb` file (the 3D model). This is required.
   - **Poster image** — A static image shown before the model loads. This is optional but recommended.
5. **Update** the product.

A **3D** slide appears in the product gallery with the interactive model.

## Controls

- **Rotate** — Drag with one finger (mobile) or click and drag (desktop).
- **Pan** — Right-click and drag, or two-finger drag on mobile.
- **Zoom** — Scroll wheel or pinch.
- **Auto-rotate** — The model rotates slowly by default.

## Configure

Settings are under **WooCommerce → Settings → Products → 3D Viewer**:

- **Auto-rotate** — Turn on/off the default rotation.
- **Camera controls** — Show/hide the on-screen control buttons.
- **Background color** — The color behind the model.

## Requirements

- WooCommerce must be installed and active.
- Models must be in GLB format (glTF Binary).
