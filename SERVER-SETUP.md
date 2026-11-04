# Cloudflare Pages deployment

Production: `https://esi-pro.by`, Pages project `esi-pro-by`. Build: `npm run build`; output: `dist/`. Existing originals remain available under `/images/`; generated image derivatives under `/_astro/` are content-fingerprinted. Only fingerprinted assets receive immutable caching. Robots, sitemap and original images use revalidation.

`public/_redirects` permanently redirects `/` to `/ru/`. A top-level `404.html` is built to disable Cloudflare's SPA fallback. HTTPS redirection is managed by the existing Cloudflare zone. Verify redirects, unknown URLs, resource MIME types and compression on the deployed host after release; local Astro does not emulate Pages redirect/header rules.

Security headers originate in `public/_headers`. HSTS starts with 86400 seconds and deliberately excludes subdomains/preload. `scripts/security-headers.mjs` hashes the compiled inline script/style bytes and emits a report-only CSP into `dist/_headers`. Do not enforce the policy until browser checks show that navigation, gallery, filtering and forms function without violations. Pages Functions generate their own headers; static `_headers` rules do not apply to function responses.

## Contact form status and data

The form is an explicitly labelled unavailable stub until Gmail recipient verification and a working email-worker service binding are complete. It posts personal data to the first-party `POST /api/contact`; never to a URL query string. JavaScript retains entered values on errors and prevents concurrent double submissions. Native submissions receive a no-store HTML response with alternative contacts. No successful delivery is claimed without an end-to-end recipient check.

Intended destination: `bula.esi@gmail.com`, controlled by ESIpro. Intended delivery: Cloudflare email worker via a private `EMAIL_SERVICE` binding; optional Telegram/Resend branches remain inactive unless explicitly configured. Cloudflare processes the request and Gmail would store delivered messages. This app creates no submission database and does not log form bodies. Rate limiting is best-effort per isolate, not a global abuse-control guarantee. Durable idempotency and an end-to-end delivery test remain prerequisites before announcing the form as operational.

## First-load dependencies

No external analytics, fonts, chat widgets, maps or embedded players are added. Fonts use the system stack. Images and JavaScript are served from the site's origin. Source facts, documents, names, contacts and project references are unchanged by this optimization; provenance is recorded in `ARCHIVE_AUDIT.md` and `ASSETS.md`.

## Release gate

`seo-landing` requires approval of the changed HTML appearance before its full validation suite. After approval: Astro check/build, local link/asset and JSON-LD checks, responsive/reduced-motion/keyboard/no-JS checks, W3C Nu and schema validation, deployment, status/header checks and three pinned Lighthouse runs per representative page. Do not reuse pre-change audit numbers as post-change results.
