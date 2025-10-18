---
name: downstream-check
intent: Doc-only preflight to verify Lean Load scaffolding and readiness in downstream sites (no writes, no builds).
inputs: [repo_path]
steps:
  - Navigate to downstream repo root
  - Verify AGENTS.md exists with Lean Load section
  - Verify COHERENCE.md has frontmatter with init.files and scope: directory
  - List init.files and confirm each path exists
  - Confirm cora linkage (cora/ present or CORA_ROOT documented)
  - Inspect package.json scripts (dev, build, sync, preview)
  - Confirm generator/templates paths for the repo type
expected: AGENTS+COHERENCE present; minimal init.files set; key files exist; scripts available; cora linkage OK
tags: [site, procedure, doc-only]
---

# Procedure — Downstream Check (Doc‑Only)

Purpose
- Standardize a quick, non-destructive preflight for any downstream site (e.g., coherenceism-media, coherenceism-info) to ensure Lean Load and basic ops are in place.

Usage
- Run these checks manually or have an agent perform them read-only. Avoid builds/writes unless explicitly requested.

## QuickCheck (copy/paste)

```bash
# 0) Go to downstream repo root
cd /path/to/downstream

# 1) Presence
[ -f AGENTS.md ] || echo "Missing: AGENTS.md"
[ -f COHERENCE.md ] || echo "Missing: COHERENCE.md"

# 2) Parse init.files from COHERENCE frontmatter (Ruby/Psych)
ruby -ryaml -e 's=File.read("COHERENCE.md"); m=s[/\A---\s*\n(.*?)\n---/m,1]; y=YAML.load(m); puts((y&&y["init"]&&y["init"]["files"])||[])' 2>/dev/null || true

# 3) Verify listed files exist
while read -r f; do [ -e "$f" ] || echo "Missing: $f"; done < <(ruby -ryaml -e 's=File.read("COHERENCE.md"); m=s[/\A---\s*\n(.*?)\n---/m,1]; y=YAML.load(m); ((y&&y["init"]&&y["init"]["files"])||[]).each{|p| puts p }')

# 4) CORA linkage
[ -d cora ] || echo "Note: cora/ missing — document CORA_ROOT in README/AGENTS if intentional"

# 5) Scripts
node -e 'const j=require("./package.json"); console.log(Object.keys(j.scripts||{}))' 2>/dev/null || true
```

## Repo-specific expectations

- coherenceism-media
  - Required: `scripts/build.js`, `scripts/sync-content.js`
  - Templates: `src/templates/player.js`, `src/templates/router.js`, `src/templates/styles.css`
  - Scripts present: `build`, `dev`, `watch`, `preview`, `sync` (and optionally `sync:suno`)

- coherenceism-info
  - Required: `scripts/build.js`, `scripts/sync-content.js`
  - Templates: `src/templates/default.html`, `src/templates/home.html`, `src/templates/styles.css`
  - Scripts present: `dev`, `build`, `sync`, `preview`

Notes
- Keep init.files minimal to speed up Lean Load; all other paths remain index-only initially.
- Do not write logs or modify files as part of this check.
- If mismatch is found, fix downstream AGENTS/COHERENCE accordingly and update CORA seeds/projects to reflect the change.
