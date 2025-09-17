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
- Adjust the blog repo path if different from `~/Projects/coherenceism.blog`.
- Run git add and proceed with review/commit as usual.

