---
name: prepare_input
intent: Derive slug, title, and split unified input (frontmatter + notes) into operator artifacts
inputs: [content/essays/in/<file>.md]
steps:
  - Read YAML frontmatter; validate required fields
  - Derive Title from `title_hint` or `thesis`; compute `slug` (lower-kebab-case)
  - Emit `intent.yml` (frontmatter minus runner-specific keys)
  - Emit `notes.md` (the markdown body after the second `---`)
  - Archive originals under `content/essays/archive/YYYY-MM-DD/<slug>/`
expected: intent.yml, notes.md, title.txt, slug.txt, meta.json
tags: [writing, io]
---

# Prepare Input — Operator Prompt (S'Vektor)

Goal: From one input file with YAML frontmatter + notes, produce these files:
- `content/essays/archive/YYYY-MM-DD/<slug>/input.md` — exact original
- `.../intent.yml` — frontmatter only (cleaned)
- `.../notes.md` — body only
- `content/essays/out/YYYY-MM-DD/<slug>/title.txt` and `slug.txt`
- `.../meta.json` with `derived_title`, `slug`, and `input_path`

Constraints:
- Required frontmatter: `thesis, audience, stance, length_minutes`
- Derive Title from `title_hint` or `thesis`; ignore provided `title` if present
- Slug = lower-kebab-case of Title
- Keep notes verbatim (no rewriting)

Operator Steps:
1. Read the input file path. Parse YAML frontmatter and the body.
2. Validate required keys; if missing, return a minimal block listing missing keys.
3. Compute Title and Slug. Show them clearly.
4. Return blocks for each output with fenced markers and file paths as headings:
   - path: `.../archive/YYYY-MM-DD/<slug>/intent.yml`
   - path: `.../archive/YYYY-MM-DD/<slug>/notes.md`
   - path: `.../out/YYYY-MM-DD/<slug>/title.txt`
   - path: `.../out/YYYY-MM-DD/<slug>/slug.txt`
   - path: `.../archive/YYYY-MM-DD/<slug>/meta.json`

Example Return Shape:

```text
path: content/essays/out/2025-10-04/example/title.txt
---
Comfort vs. Coherence at Work
---

path: content/essays/out/2025-10-04/example/slug.txt
---
comfort-vs-coherence-at-work
---
```

