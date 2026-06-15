import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://docs.uix.store',
  base: '/milano',
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'Milano Docs',
      description: 'User documentation for the Milano WordPress theme by UIX Themes.',
      customCss: ['./src/styles/custom.css'],
      lastUpdated: true,
      sidebar: [
        {
          label: 'Getting Started',
          items: [{ autogenerate: { directory: 'getting-started' } }],
        },
        {
          label: 'Theme Settings',
          items: [{ autogenerate: { directory: 'theme-settings' } }],
        },
        {
          label: 'Header',
          items: [{ autogenerate: { directory: 'header' } }],
        },
        {
          label: 'Footer',
          items: [{ autogenerate: { directory: 'footer' } }],
        },
        {
          label: 'Navigation',
          items: [{ autogenerate: { directory: 'navigation' } }],
        },
        {
          label: 'Shop Layout',
          items: [{ autogenerate: { directory: 'shop-layout' } }],
        },
        {
          label: 'Single Product',
          items: [{ autogenerate: { directory: 'single-product' } }],
        },
        {
          label: 'Cart & Checkout',
          items: [{ autogenerate: { directory: 'cart-checkout' } }],
        },
        { label: 'Blog', items: [{ autogenerate: { directory: 'blog' } }] },

        {
          label: 'Theme Modules',
          items: [{ autogenerate: { directory: 'theme-modules' } }],
        },

        {
          label: 'Translation',
          items: [{ autogenerate: { directory: 'translation' } }],
        },

        {
          label: "How to's & Guides",
          items: [
            { link: 'how-tos-guides/add-a-mailchimp-signup-form' },
            { link: 'how-tos-guides/load-google-fonts-locally' },
            { link: 'how-tos-guides/show-the-registration-form' },
            { link: 'how-tos-guides/push-out-of-stock-products-to-the-bottom' },
          ],
        },
        {
          label: 'Support & Updates',
          items: [{ autogenerate: { directory: 'support-updates' } }],
        },
      ],
    }),
  ],
});
