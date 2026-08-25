import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL('https://esipro.by');
  return new Response(`User-agent: *\nAllow: /\nDisallow: /api/\nSitemap: ${new URL('/sitemap.xml', origin)}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
