import { equipment } from './content';
import { locales, type Locale, localizePath } from './i18n';

export type PageKind =
  | 'home'
  | 'about'
  | 'catalog'
  | 'category'
  | 'equipment'
  | 'services'
  | 'objects'
  | 'object'
  | 'reviews'
  | 'documents'
  | 'contacts'
  | 'privacy';

export interface RouteDefinition {
  slug: string;
  kind: PageKind;
  id?: string;
}

const fixedRoutes: RouteDefinition[] = [
  { slug: '', kind: 'home' },
  { slug: 'about', kind: 'about' },
  { slug: 'catalog', kind: 'catalog' },
  { slug: 'catalog/boiler-houses', kind: 'category', id: 'boiler' },
  { slug: 'catalog/drying-complexes', kind: 'category', id: 'drying' },
  { slug: 'services', kind: 'services' },
  { slug: 'objects', kind: 'objects' },
  { slug: 'objects/logoysk-boiler-2', kind: 'object', id: 'logoysk-boiler-2' },
  { slug: 'reviews', kind: 'reviews' },
  { slug: 'documents', kind: 'documents' },
  { slug: 'contacts', kind: 'contacts' },
  { slug: 'privacy', kind: 'privacy' },
];

const equipmentRoutes: RouteDefinition[] = equipment.map((item) => ({
  slug: `catalog/equipment/${item.slug}`,
  kind: 'equipment',
  id: item.slug,
}));

export const routeDefinitions = [...fixedRoutes, ...equipmentRoutes];

export const staticRouteParams = locales.flatMap((locale) =>
  routeDefinitions.map((route) => ({
    params: { locale, slug: route.slug || undefined },
    props: { locale, route },
  })),
);
export const translatedUrl = (locale: Locale, currentSlug: string) =>
  localizePath(locale, currentSlug);

export const sitemapUrls = locales.flatMap((locale) =>
  routeDefinitions.map((route) => localizePath(locale, route.slug)),
);
