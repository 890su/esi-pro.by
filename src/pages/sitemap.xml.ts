import type { APIRoute } from 'astro';
import { sitemapUrls } from '../data/routes';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL('https://esi-pro.by');
  const urls = sitemapUrls.map((path) => `<url><loc>${new URL(path, origin)}</loc></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
