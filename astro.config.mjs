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
          label: 'Header Builder',
          items: [{ autogenerate: { directory: 'header-builder' } }],
        },
        {
          label: 'Footer Builder',
          items: [{ autogenerate: { directory: 'footer-builder' } }],
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
          label: 'Page Builder',
          items: [{ autogenerate: { directory: 'page-builder' } }],
        },
        {
          label: 'Theme Modules',
          items: [{ autogenerate: { directory: 'theme-modules' } }],
        },
        {
          label: 'Advanced Features',
          items: [{ autogenerate: { directory: 'advanced-features' } }],
        },
        {
          label: 'Performance & SEO',
          items: [{ autogenerate: { directory: 'performance-seo' } }],
        },
        {
          label: 'Translation',
          items: [{ autogenerate: { directory: 'translation' } }],
        },
        {
          label: 'Plugin Compatibility',
          items: [{ autogenerate: { directory: 'plugin-compatibility' } }],
        },
        {
          label: 'Troubleshooting',
          items: [{ autogenerate: { directory: 'troubleshooting' } }],
        },
        { label: 'Glossary', link: '/glossary/' },
        {
          label: 'Support & Updates',
          items: [{ autogenerate: { directory: 'support-updates' } }],
        },
      ],
    }),
  ],
});
