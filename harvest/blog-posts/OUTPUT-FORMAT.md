# Blog Post Output Format

Posts created by the workflow should match the coherenceism.blog format exactly.

## Frontmatter (required)
```yaml
---
title: "Your Title Here"
date: YYYY-MM-DD
river: rest-rhythm | human-ai | history-systems | agency | awakening-alignment
rivers: []  # optional secondary rivers
form: journal | essay | announcement | transmission
tags: []
excerpt: "One-sentence teaser (≤220 chars)"
related: []  # optional slugs of related posts
status: draft | published
featured: false
---
```

## Frontmatter (optional)
```yaml
subtitle: "Short supportive line"
pullQuote: "One resonant line from the post"
orderInRiver: 1  # for curated river ordering
```

## Body Structure

### Opening (optional italic line)
```markdown
_Optional italic opening line that sets tone._
```

### Content
- First person, reflective voice
- 2-5 sentences per paragraph
- Concrete images and micro-scenes
- Avoid direct news references; translate signals into lived patterns

### Closing
One clear, resonant sentence.

## Example

See `/Users/joshua/Projects/coherenceism.blog/src/content/journal/` for live examples.

## File Placement

**During workflow (in CORA):**
- `harvest/blog-posts/out/<YYYY-MM-DD>/<post-slug>/<Post Title>.md`

**For publishing (in coherenceism.blog):**
- Copy to `coherenceism.blog/src/content/journal/<YYYY-MM-DD>-<slug>.md`
- Or create import script to sync from CORA harvest to blog repo

## Notes
- Excerpts should be short to keep feed cards uniform
- Titles should be 6-12 words
- Each post picks exactly one primary river
- Status can be 'draft' until ready to publish
