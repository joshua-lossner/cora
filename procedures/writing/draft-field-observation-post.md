---
kind: procedure
name: draft-field-observation-post
intent: Draft a blog post from a field signal seed using Ivy's voice and coherenceism principles
inputs: [seed_from_extraction, river_name]
steps:
  - Load seed (pattern, tension, coherenceism lens)
  - Apply Ivy persona voice
  - Draft post using coherenceism principles
  - Generate title and excerpt
  - Save draft to output folder
expected: Blog post draft ready for review/publish
tags: [writing, blog, coherenceism, Ivy]
updated: 2025-10-21
---

# Procedure — Draft Field Observation Post

## Purpose
Transform a seed from field extraction into a complete blog post draft. Written in Ivy's voice, grounded in coherenceism, addressing the universal mind (not just one person).

## Usage

### Operator Prompt
```
Run procedure: procedures/writing/draft-field-observation-post.md
Seed: [from extraction file, specify which seed number]
River: [river-name]
```

### Agent Instructions

1. **Load context**
   - Read the seed (pattern, tension, coherenceism lens, evidence)
   - Read Ivy persona: `personas/ivy.md`
   - Read river source list for tone/focus
   - Review coherenceism principles: `context/philosophy/coherenceism.md`

2. **Craft the insight**
   Start by crystallizing the core insight:
   - What does coherenceism reveal about this pattern?
   - What's the shift in perspective?
   - How does this help *us* (the universal mind) see more clearly?

3. **Draft the post**

   **Voice (from Ivy persona):**
   - First person, but speaking to collective experience
   - Dry wit, calm reflection
   - Concrete over abstract; open with image or micro-scene when possible
   - Vary sentence length; one longer reflective line per section
   - Challenge assumptions without lecturing
   - Warmth without performance

   **Structure:**
   - **Opening** (1-2 paragraphs)
     - Ground the reader in the pattern/observation
     - Optional: italic opening line that sets tone
     - Lead with the question or tension

   - **Middle** (2-4 paragraphs)
     - Walk through the coherenceism lens
     - What does this principle reveal?
     - Use concrete examples from the evidence
     - Avoid direct news references—translate signals into lived patterns

   - **Close** (1 paragraph)
     - Land on the insight
     - What does this mean for how we act?
     - One clear, resonant sentence at the end

   **Coherenceism application:**
   - Don't just mention principles—*apply* them
   - Show the pattern, don't just describe it
   - Test for resonance: does this reduce distortion?

4. **Generate title and excerpt**

   **Title:**
   - 6-12 words
   - Clear and resonant
   - Captures the insight, not the topic

   **Excerpt:**
   - 1-2 sentences (≤220 chars)
   - Hooks without spoiling
   - Works on feed cards

5. **Finalize metadata**

   Complete frontmatter:
   ```yaml
   ---
   title: "[Generated Title]"
   date: YYYY-MM-DD
   river: [river-name]
   rivers: []
   form: journal
   tags: [2-4 relevant tags]
   excerpt: "[Generated excerpt]"
   related: []
   status: draft
   featured: false
   ---
   ```

6. **Save draft**
   - Path: `harvest/blog-posts/drafts/[YYYY-MM]/[YYYY-MM-DD]-[slug].md`
   - Create the monthly subdirectory if it doesn't exist (e.g., `2025-10/`)
   - Slug: kebab-case from title
   - Include metadata + full post body
   - Status remains `draft` until approved for publication

7. **Report to operator**
   - Title of draft
   - Where it was saved
   - Brief note on what coherenceism lens was applied
   - Suggest: review for voice/clarity before publishing

## Publishing Workflow

When the draft is approved for publication:

1. **Update status** in the draft file: change `status: draft` to `status: published`
2. **Move to out/** directory: `mv harvest/blog-posts/drafts/[YYYY-MM]/[file].md harvest/blog-posts/out/[file].md`
3. **Blog auto-updates**: The blog site reads from `out/` via symlink and will detect the new file
4. **Archive note**: The monthly draft folder preserves the history; published files evolve into `out/`

## Success Signals
- Post clarifies the pattern (not just describes it)
- Coherenceism principles are *applied*, not just mentioned
- Voice is Ivy's (reflective, grounded, wry)
- Title and excerpt work for feed cards
- Speaks to collective experience (us, not just Joshua)
- Post would make sense to someone in 6 months

## Example Output Path
**Draft:** `harvest/blog-posts/drafts/2025-10/2025-10-21-ai-anxiety-or-insight.md`
**Published:** `harvest/blog-posts/out/2025-10-21-ai-anxiety-or-insight.md`

## Quality Checks

**Voice:**
- [ ] First person but collective ("I notice..." about patterns we all see)
- [ ] Concrete, not abstract
- [ ] Varied sentence rhythm
- [ ] Dry wit present (but not forced)
- [ ] No performative positivity

**Coherenceism:**
- [ ] Principles are applied (not just named)
- [ ] Pattern is revealed (not just described)
- [ ] Tests for resonance vs. noise
- [ ] Reduces distortion (adds clarity)

**Structure:**
- [ ] Opening grounds the reader
- [ ] Middle walks through the lens
- [ ] Close lands on actionable insight
- [ ] No fluff or filler

**Metadata:**
- [ ] Title is 6-12 words
- [ ] Excerpt is ≤220 chars
- [ ] River assignment makes sense
- [ ] Tags are relevant (not generic)

## Notes
- This is a *draft*—human review expected before publishing
- If the seed doesn't yield a clear insight, note that and skip
- Not every seed needs to become a post
- Voice should feel like Ivy observing the field, not Joshua processing feelings

## Related
- Persona: `personas/ivy.md`
- Philosophy: `context/philosophy/coherenceism.md`
- Input: `procedures/research/extract-field-signals.md`
- Output format: `harvest/blog-posts/OUTPUT-FORMAT.md`
- Blog site: coherenceism.blog
