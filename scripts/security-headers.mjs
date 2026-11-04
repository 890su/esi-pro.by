import { createHash } from 'node:crypto';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

// Derive CSP hashes from actual compiled bytes, never authorize arbitrary scripts.
const scripts = new Set();
const styles = new Set();
for (const filename of await readdir('dist', { recursive: true })) {
  if (!filename.endsWith('.html')) continue;
  const html = await readFile(path.join('dist', filename), 'utf8');
  for (const match of html.matchAll(/<(script|style)\b([^>]*)>([\s\S]*?)<\/\1>/g)) {
    if (match[1] === 'script' && /\bsrc=|application\/ld\+json/.test(match[2])) continue;
    const hash = `'sha256-${createHash('sha256').update(match[3]).digest('base64')}'`;
    (match[1] === 'script' ? scripts : styles).add(hash);
  }
}
const policy = ["default-src 'self'", `script-src 'self' ${[...scripts].join(' ')}`, `style-src 'self' ${[...styles].join(' ')}`, "img-src 'self' data:", "font-src 'self'", "connect-src 'self'", "object-src 'none'", "base-uri 'self'", "form-action 'self'", "frame-ancestors 'none'"].join('; ');
const headers = await readFile('public/_headers', 'utf8');
await writeFile('dist/_headers', headers.replace(/^\/\*\r?\n/, `/*\n  Content-Security-Policy-Report-Only: ${policy}\n`));
