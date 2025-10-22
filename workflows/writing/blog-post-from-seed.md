---
kind: workflow
title: Blog Post from Seed
intent: Transform raw thoughts/confusion into a coherent blog post using coherenceism principles
status: active
updated: 2025-10-21
tags: [workflow, blog, writing, coherenceism]
---

# Workflow — Blog Post from Seed

This workflow guides a conversational process to transform confusion, raw thoughts, or article reactions into a coherent blog post for coherenceism.blog. It applies coherenceism principles to make sense of noise.

## Actors
- Writer/Editor — `context/roles/writer-editor.md:1`
- Ivy (default persona) — `personas/ivy.md:1`

## Inputs
- One file at `harvest/blog-posts/in/<slug>.md` using the template `harvest/blog-posts/in/TEMPLATE.md:1`
- Philosophy reference: `context/philosophy/coherenceism.md:1`
- Rivers guide: `coherenceism.blog/docs/rivers.md` (if available)

## Outputs
- `harvest/blog-posts/out/<YYYY-MM-DD>/<post-slug>/<post-title>.md` — the evolved blog post ready for coherenceism.blog

## Process (Conversational)

This is a **guided conversation**, not a mechanical fill-in-the-blanks. Ivy walks you through each step.

### 1. Load the Seed (PM)
- Open the input file at `harvest/blog-posts/in/<slug>.md`
- Read what's there: the raw input, the confusion, the source

### 2. Clarify the Question (Ivy)
**Prompt:**
> "I see what you're working with. Before we write, let's find the real question. What's actually bothering you here? What needs to make sense?"

**Goal:** Get to the core tension or question beneath the surface content.

**Capture:** Update the "What I'm Trying to Understand" section with the clarified question.

### 3. Find the Coherenceism Lens (Ivy)
**Prompt:**
> "Which coherenceism principle feels most alive here? What pattern are we seeing?"

Walk through the 9 principles:
1. Resonance as Truth — seek alignment that reduces distortion for all
2. Compost Cycles — transform endings/failures into nutrients for growth
3. Alignment over Force — position so reality carries the work forward
4. Presence as Foundation — attention reveals and maintains the pattern
5. Field Stewardship — actions either clarify or distort the shared space
6. Living Traditions — evolve while honoring roots; forms adapt, patterns persist
7. Technology as Amplifier — tools multiply what exists; tune for harmony
8. Mature Uncertainty — confidence in the known, humility about the unknown
9. Nested Coherence — local systems align within larger patterns

**Goal:** Identify 1-2 principles that illuminate the question.

**Capture:** Note which principles apply and how.

### 4. Choose the River (Ivy)
**Prompt:**
> "Where does this live? Which river carries this thought?"

Rivers:
- **rest-rhythm** — Presence, embodied practice, cycles, resourcing daily coherence
- **human-ai** — Meaning, identity, ethics in human–AI relationship
- **history-systems** — Governance, infrastructure, system patterns
- **agency** — Methods, workflows, practical empowerment
- **awakening-alignment** — Inner alignment, spiritual practice

**Goal:** Pick the river that best fits the center of gravity.

**Capture:** Set `river` in frontmatter.

### 5. Draft the Core Insight (Ivy)
**Prompt:**
> "If you had one sentence to capture what you now understand, what would it be?"

**Goal:** Crystallize the insight before expanding it.

**Capture:** This becomes the heart of the post.

### 6. Outline the Post (Ivy)
**Conversational prompt:**
> "Let's build the arc. We'll keep it simple:
> - Opening: ground the reader in the question or observation
> - Middle: walk through the coherenceism lens and what it reveals
> - Close: land on the insight and what it means for action"

**Goal:** 3-5 section outline (not formal headings, just the flow).

**Capture:** Rough outline as notes.

### 7. Write the Draft (Writer/Editor)
**Prompt:**
> "Now write it. First person, reflective, grounded. 2-5 sentences per paragraph. Lead with the question, reveal the pattern, close with clarity."

**Voice guidelines** (from Ivy persona):
- Dry wit and calm reflection
- Concrete over abstract; open with image or micro-scene when possible
- Vary sentence length; one longer reflective line per section for breath
- Challenge assumptions without lecturing
- Cite without preaching (footnotes-first)

**Goal:** Complete draft in markdown.

**Capture:** Write the full post body.

### 8. Title and Excerpt (Ivy)
**Prompt:**
> "What's the title? Keep it 6-12 words, clear and resonant. Then give me a one-sentence excerpt (≤220 chars) that hooks without spoiling."

**Goal:** Title and excerpt that work for feed cards.

**Capture:**
- `title` in frontmatter
- `excerpt` in frontmatter

### 9. Finalize Metadata (PM)
Complete the frontmatter:
- `kind: blog_post`
- `title` (from step 8)
- `date: YYYY-MM-DD` (today)
- `river` (from step 4)
- `form` (journal | essay | announcement | transmission)
- `tags` (2-4 relevant tags)
- `excerpt` (from step 8)
- `status: draft` or `published`
- `featured: false` (unless explicitly featured)

Optional:
- `subtitle` (short supportive line)
- `pullQuote` (one resonant line from the post)
- `related: [slugs]` (if cross-linking to other posts)

Derive `slug` from title (kebab-case, ASCII).

### 10. Save to Output (PM)
- Create folder: `harvest/blog-posts/out/<YYYY-MM-DD>/<post-slug>/`
- Save the post as: `harvest/blog-posts/out/<YYYY-MM-DD>/<post-slug>/<Post Title>.md`
- Remove the seed file from `harvest/blog-posts/in/`

## Success Signals
- The post clarifies something that was confusing
- Coherenceism principles are applied (not just mentioned)
- Voice is reflective and grounded (not preachy or performative)
- Title and excerpt work for feed cards
- You'd want to read this post yourself in 6 months

## Notes
- This workflow is conversational—Ivy guides, you think out loud
- Don't rush; the process IS the value
- If you get stuck, return to step 2 (clarify the question)
- The blog post is the artifact; the clarity is the outcome

## Related
- Template: `harvest/blog-posts/in/TEMPLATE.md:1`
- Philosophy: `context/philosophy/coherenceism.md:1`
- Persona: `personas/ivy.md:1`
- Blog site: `coherenceism.blog/`
