# Agent discovery files

`public/llms.txt` is a concise Markdown guide to the existing ESIpro website. It has one H1, a summary, descriptions and absolute links to real sections. RU, BY and EN remain ordinary website versions, not separate bot-only marketing content. This file does not grant training rights or replace `robots.txt`.

`public/.well-known/ard.json` is an ARD manifest with an empty `entries` array. ESIpro currently exposes no public MCP, A2A, agent skill or other agentic service. Do not label the enquiry form, equipment catalogue or sitemap as an implemented agent API. Add entries only after a real service and its protocol descriptor exist. The authoritative ARD v0.91 `ArdManifest` schema allows an empty array.

The static Cloudflare Pages `_headers` file publishes `Link` discovery relations, explicit MIME types and revalidation for both files. No crawler/training policy or Cloudflare bot-protection setting is changed.

## Checks

After a build: `node scripts/check-agent-discovery.mjs dist`.

After deployment: `node scripts/check-agent-discovery.mjs https://esi-pro.by`.

These targeted checks reject HTML fallbacks, require Markdown headings/links, check all linked resources and parse the ARD JSON. They are not a claim that the entire Lighthouse agentic-browsing audit, AI indexing or rankings passed.

## References

- llms.txt proposal: https://llmstxt.org/
- ARD specification: https://agenticresourcediscovery.org/spec/
- Authoritative manifest schema: https://github.com/ards-project/ard-spec/blob/main/spec/schemas/ard-entry.schema.json
