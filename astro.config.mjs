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
        { label: 'Getting Started', items: [{ autogenerate: { directory: 'getting-started' } }] },
        { label: 'Import Demo', items: [{ autogenerate: { directory: 'demos' } }] },
        { label: 'Homepages', items: [{ autogenerate: { directory: 'homepages' } }] },
        { label: 'Pre-built Pages', items: [{ autogenerate: { directory: 'pre-built-pages' } }] },
        { label: 'Customizer', items: [{ autogenerate: { directory: 'customizer' } }] },
        {
          label: 'Header & Footer Builder',
          items: [{ autogenerate: { directory: 'header-footer-builder' } }],
        },
        {
          label: 'Page Builder Integration',
          items: [{ autogenerate: { directory: 'page-builder-integration' } }],
        },
        { label: 'Menus', items: [{ autogenerate: { directory: 'menus' } }] },
        { label: 'Blog', items: [{ autogenerate: { directory: 'blog' } }] },
        { label: 'Shop', items: [{ autogenerate: { directory: 'shop' } }] },
        { label: 'Theme Modules', items: [{ autogenerate: { directory: 'theme-modules' } }] },
        {
          label: 'Plugin Compatibility',
          items: [{ autogenerate: { directory: 'plugin-compatibility' } }],
        },
        { label: 'Translation', items: [{ autogenerate: { directory: 'translation' } }] },
        { label: 'Performance & SEO', items: [{ autogenerate: { directory: 'performance-seo' } }] },
        {
          label: 'Customize Further',
          items: [{ autogenerate: { directory: 'customize-further' } }],
        },
        {
          label: 'Troubleshooting & FAQ',
          items: [{ autogenerate: { directory: 'troubleshooting-faq' } }],
        },
        { label: 'Glossary', link: '/glossary/' },
        { label: 'Support & Updates', items: [{ autogenerate: { directory: 'support-updates' } }] },
      ],
    }),
  ],
});
