---
name: draft-from-outline
intent: Generate a first draft post from an outline and thesis
inputs: [outline_path, slug]
steps:
  - Expand outline bullets into 600–1200 words
  - Add frontmatter (title, date, description, tags, river)
  - Preserve links and sources
expected: Draft saved to context/working/drafts/<project>/draft-YYYY-MM-DD-<slug>.md (or directly to blog repo)
tags: [writing, draft]
---

# Draft From Outline

## Purpose
Turn a clear outline into a well-structured first draft with minimal friction.

## Usage
- Provide the outline path and a slug; write the draft to the drafts folder or the blog repo.

## Notes
- Keep paragraphs short; use headings; link sources.

