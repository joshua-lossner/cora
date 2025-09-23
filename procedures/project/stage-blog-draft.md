---
name: stage-blog-draft
intent: Move a draft into the coherenceism.blog repo and stage it for commit
inputs: [draft_path, slug]
steps:
  - Copy draft into ~/Projects/coherenceism.blog/src/content/journal/YYYY-MM-DD-<slug>.md
  - Run git add and suggest a commit message
expected: Draft staged in the blog repo ready for review/publish
tags: [project, blog]
---

# Stage Blog Draft

## Purpose
Place a completed draft into the blog repository’s content folder and stage it for commit.

## Usage
- Set `BLOG_ROOT` in your `.env` (defaults to your blog repo path).
- Example (macOS):
```
BLOG_ROOT=${BLOG_ROOT:-$HOME/Projects/coherenceism.blog}
DATE=YYYY-MM-DD
SLUG=<slug>
cp context/working/drafts/coherenceism.blog/draft-${DATE}-${SLUG}.md "$BLOG_ROOT/src/content/journal/${DATE}-${SLUG}.md"
cd "$BLOG_ROOT" && git add "src/content/journal/${DATE}-${SLUG}.md"
```
- Proceed with review/commit as usual.

