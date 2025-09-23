---
kind: documentation
title: COHERENCE — Content
intent: Centralize canonical content for the Coherenceism network; enable cross-site reuse
status: active
updated: 2025-09-21
tags: [content, coherence, publishing]
---

# COHERENCE — Content

## Purpose
Maintain a single source of truth for canonical content (essays, notes, media descriptions, primers) used across the Coherenceism network. Sites select content via the `sites` field in frontmatter.

## Structure
- `_templates/content-item.md` — recommended frontmatter + shape
- `articles/` — essays, long-form
- `notes/` — short-form ideas or references
- `media/` — track/album/video descriptors
- `shared/` — cross-site primers and canonical texts
- `REGISTRY.md` — optional, human-readable index of items

## Frontmatter Schema (recommended)
- kind: `content`
- type: `root|branch|leaf|seed|pattern`
- title: string
- summary: short abstract (optional, use first paragraph if omitted)
- status: `draft|active|archived|deprecated`
- updated: `YYYY-MM-DD`
- version: `YYYY.MM` or semver (optional)
- tags: `[ ... ]`
- sites: `[media, info, ai, blog, social, network, com, tech]`
- canonical_slug: `kebab-case`
- parent: canonical_slug of parent (omit for type: root)
- order: number for sibling ordering (optional)
- authors: `[ ... ]` (optional)
- related: `[canonical_slug, ...]` (optional)

### Patterns (type: pattern)
- Use for reusable solutions that can be applied across contexts.
- Recommended fields inside body:
  - Name — short, precise
  - Context — when this pattern applies
  - Problem — the tension it addresses
  - Forces — competing dynamics that shape the problem
  - Solution — the core move; how to enact it
  - Consequences — tradeoffs and follow‑on effects
  - Examples — 2–3 concrete instances
  - Anti‑Patterns — look‑alikes that fail
  - Related — links to seeds/branches/patterns

## Publish Map (filters)
- Per-site selection: files with `sites` containing the site key.
- Examples:
  - List blog items: `rg -l '^sites:.*\bblog\b' content`
  - List media items: `rg -l '^sites:.*\bmedia\b' content`
  - Show titles + slugs: `rg -n '^(title|canonical_slug):' content`

### Site Keys
- media → coherenceism.media
- info → coherenceism.info
- ai → coherenceism.ai
- blog → coherenceism.blog
- social → coherenceism.social
- network → coherenceism.network
- com → coherenceism.com
- tech → coherenceism.tech

## Notes
- Prefer canonical content here; use per-site overlays to adapt intros/CTAs.
- Keep media binaries outside this repo; store descriptors here, files elsewhere.

## Integration Examples

### Node/TypeScript (Next.js, Astro, etc.)
```ts
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

type Item = {
  title: string;
  status: string;
  updated: string;
  tags?: string[];
  sites: string[];
  canonical_slug: string;
  body: string;
  file: string;
};

const roots = [
  'content/shared',
  'content/articles',
  'content/notes',
  'content/media',
];

export function loadContent(site: string): Item[] {
  const files = roots.flatMap((r) =>
    fs.existsSync(r)
      ? fs
          .readdirSync(r)
          .filter((f) => f.endsWith('.md'))
          .map((f) => path.join(r, f))
      : []
  );
  return files
    .map((file) => {
      const raw = fs.readFileSync(file, 'utf8');
      const { data, content } = matter(raw);
      return { ...data, body: content, file } as Item;
    })
    .filter((it) => Array.isArray(it.sites) && it.sites.includes(site));
}
```

### Hugo (Front matter params.sites)
```go-html-template
{{/* In a list template: select items with .Params.sites containing "blog" */}}
{{ $items := where .Site.RegularPages ":path" "^content/" }}
{{ range $items }}
  {{ if in .Params.sites "blog" }}
    <a href="{{ .RelPermalink }}">{{ .Title }}</a>
  {{ end }}
{{ end }}
```

### CLI filter (bash)
```bash
# Files for blog
rg -l '^sites:.*\bblog\b' content

# Titles for blog
rg -n '^(title|canonical_slug|sites):' $(rg -l '^sites:.*\bblog\b' content)
```

## Root Navigation

To render a navigation for the living tree on coherenceism.info (or any site):

- Select branches under the root: items with `type: branch` and `parent: coherenceism-root`.
- Order by the `order` field (fallback to title if missing).

Examples

- Bash: list branch titles under the root
```bash
rg -n "^(type: branch|parent: coherenceism-root|title:)" content/branches \
  | awk '/^.*type: branch/{t=1} /^.*parent: coherenceism-root/{p=1} /^.*title:/{if(t&&p){print; t=p=0}}'
```

- TypeScript
```ts
type FM = { title: string; type: string; parent?: string; order?: number; canonical_slug: string };
const items: FM[] = loadFrontmatterSomehow();
const nav = items
  .filter(i => i.type === 'branch' && i.parent === 'coherenceism-root')
  .sort((a,b) => (a.order ?? 999) - (b.order ?? 999) || a.title.localeCompare(b.title))
  .map(i => ({ title: i.title, slug: i.canonical_slug }));
```
