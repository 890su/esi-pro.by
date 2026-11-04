import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import path from 'node:path';

// Local: node scripts/check-agent-discovery.mjs dist
// Deployed: node scripts/check-agent-discovery.mjs https://esi-pro.by
const target = process.argv[2] || 'dist';
const remote = /^https?:\/\//.test(target);
const read = async (pathname, type) => {
  if (!remote) return readFile(path.join(target, pathname), 'utf8');
  const response = await fetch(new URL(pathname, target), { redirect: 'manual', signal: AbortSignal.timeout(15000) });
  assert.equal(response.status, 200, `${pathname}: expected HTTP 200`);
  assert.match(response.headers.get('content-type') || '', type, `${pathname}: wrong MIME type`);
  const body = await response.text();
  assert.doesNotMatch(body, /^\s*<!doctype\s+html/i, `${pathname}: HTML fallback`);
  return body;
};
const markdown = await read('/llms.txt', /^text\/(plain|markdown)\b/i);
assert.match(markdown, /^# [^\r\n]+/m, 'llms.txt: missing H1');
assert.match(markdown, /^> .+/m, 'llms.txt: missing summary');
const links = [...markdown.matchAll(/\[[^\]\n]+\]\((https:\/\/[^)\s]+)\)/g)].map((match) => match[1]);
assert.ok(links.length > 0, 'llms.txt: missing Markdown links');
for (const link of new Set(links)) {
  const url = new URL(link);
  assert.equal(url.origin, 'https://esi-pro.by', `Unexpected external link: ${link}`);
  if (remote) {
    const response = await fetch(new URL(url.pathname, target), { method: 'HEAD', redirect: 'manual', signal: AbortSignal.timeout(15000) });
    assert.equal(response.status, 200, `${link}: expected direct HTTP 200`);
    await response.body?.cancel();
  } else {
    const filename = path.join(target, decodeURIComponent(url.pathname), url.pathname.endsWith('/') ? 'index.html' : '');
    await access(filename);
  }
}
const manifest = JSON.parse(await read('/.well-known/ard.json', /^application\/(?:ard\+)?json\b/i));
assert.deepEqual(manifest, { entries: [] }, 'ARD must not advertise unimplemented services');
console.log(JSON.stringify({ target, markdownH1: true, markdownLinks: new Set(links).size, linkedResources: 'pass', ardJson: 'valid', ardEntries: manifest.entries.length }, null, 2));
