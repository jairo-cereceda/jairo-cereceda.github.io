// @ts-check
import { defineConfig } from 'astro/config';

import { VitePWA } from 'vite-plugin-pwa';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://jairo-cereceda.github.io',
  trailingSlash: 'never',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        manifest: {
          name: 'Jairo Cereceda Berciano - Desarrollador UI/UX',
          short_name: 'Portfolio Jairo Cereceda',
          description: 'Diseñador y desarrollador de UI/UX',
          theme_color: '#2861c9',
          icons: [
            {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
          ],
        },
        workbox: {
          navigateFallback: '/',
          globPatterns: ['**/*.{js,css,html,ico,png,svg,webp}'],
        },
        devOptions: {
          enabled: true,
        },
      }),
    ],

    build: {
      assetsInlineLimit: 10000,
    },
  },
  integrations: [icon(), mdx(), sitemap()],
});
