---
name: compile_leaf
intent: Assemble final content leaf and PDF from best available body
inputs: [title.txt, slug.txt, refined.md?, draft_checked.md?, draft.md?, notes.md?]
steps:
  - Select body in priority: refined > draft_checked > draft > notes
  - Compose content-leaf frontmatter
  - Append references section if `citations.md` exists
  - Emit `final.md` and `final.pdf`
expected: final.md, final.pdf
tags: [writing, assemble]
---

# Compile — Operator Prompt (S'Vektor)

Inputs: `title.txt`, `slug.txt`, and available draft files

Do:
- Choose the body by priority (refined > draft_checked > draft > notes).
- Write content-leaf frontmatter:
  - `kind: content`, `type: leaf`, `title`, `status: draft`, `updated: YYYY-MM-DD`, `tags: [...]`, `canonical_slug`, `authors: [Coherence Network]`, `related: []`
- Concatenate frontmatter + body. If `citations.md` exists and is non-empty, add a `## References` section at the end.
- Emit `final.md` and a best-effort `final.pdf` using any available local tool, or return `final.pdf` omitted if not available.

Output:
- `path: .../out/YYYY-MM-DD/<slug>/final.md`
- `path: .../out/YYYY-MM-DD/<slug>/final.pdf` (optional)

