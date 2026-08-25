// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://esi-pro.by',
  output: 'static',
  i18n: {
    defaultLocale: 'ru',
    locales: [
      'ru',
      { path: 'by', codes: ['be', 'be-BY'] },
      'en',
    ],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  redirects: {
    '/portfolio/': { status: 301, destination: '/ru/objects/' },
    '/home/catalog/': { status: 301, destination: '/ru/catalog/' },
    '/about-us/': { status: 301, destination: '/ru/about/' },
    '/contact/': { status: 301, destination: '/ru/contacts/' },
    '/for-business/': { status: 301, destination: '/ru/catalog/' },
    '/kotelnoje-oborudovanie-hamech/': { status: 301, destination: '/ru/catalog/boiler-houses/' },
    '/suszilnye-kompleksy/': { status: 301, destination: '/ru/catalog/drying-complexes/' },
    '/toplivo/': { status: 301, destination: '/ru/catalog/boiler-houses/' },
  },
});
