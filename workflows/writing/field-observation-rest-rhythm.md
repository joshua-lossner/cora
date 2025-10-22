---
kind: workflow
title: Field Observation — Rest-Rhythm River
intent: Scan rest-rhythm field temperature, extract seeds, draft blog posts
status: active
updated: 2025-10-21
tags: [workflow, blog, field-observation, rest-rhythm]
---

# Workflow — Field Observation (Rest-Rhythm River)

## Purpose
Capture patterns of embodiment, presence, cycles, and resourcing from the field. Scan sources for cultural exhaustion and renewal patterns, and draft blog posts that apply coherenceism principles to rest-rhythm dynamics.

## Actors
- Ivy (default persona) — `personas/ivy.md`
- Researcher — `context/roles/researcher.md` (optional)
- Writer/Editor — `context/roles/writer-editor.md` (optional)

## Inputs
- Source list: `context/sources/rivers/rest-rhythm.md`
- Coherenceism philosophy: `context/philosophy/coherenceism.md`

## Outputs
- Field scan: `harvest/blog-posts/scans/[YYYY-MM]/rest-rhythm-[YYYY-MM-DD].md`
- Extraction: `harvest/blog-posts/extractions/[YYYY-MM]/rest-rhythm-[YYYY-MM-DD].md`
- Draft posts: `harvest/blog-posts/drafts/[YYYY-MM]/[YYYY-MM-DD]-[slug].md` (1-3 posts)
- Published posts: `harvest/blog-posts/out/[YYYY-MM-DD]-[slug].md` (blog reads from here)

## Process

### Step 1: Scan Sources
**Run:** `procedures/research/scan-rss-sources.md`

**Operator prompt:**
```
Run procedure: procedures/research/scan-rss-sources.md
Source list: context/sources/rivers/rest-rhythm.md
```

**What happens:**
- Fetches RSS feeds from rest-rhythm source list
- Compiles headlines, excerpts, links into a scan file
- Saves to `harvest/blog-posts/scans/rest-rhythm-[YYYY-MM-DD].md`

**Expected time:** 2-3 minutes

---

### Step 2: Extract Field Signals
**Run:** `procedures/research/extract-field-signals.md`

**Operator prompt:**
```
Run procedure: procedures/research/extract-field-signals.md
Scan file: harvest/blog-posts/scans/rest-rhythm-[YYYY-MM-DD].md
River sources: context/sources/rivers/rest-rhythm.md
```

**What happens:**
- Analyzes the scan for patterns, tensions, resonance
- Applies rest-rhythm river lens (Does this change how I pace today?)
- Extracts 3-5 seeds worth developing
- Saves to `harvest/blog-posts/extractions/rest-rhythm-[YYYY-MM-DD].md`

**Expected time:** 3-5 minutes

---

### Step 3: Review Seeds
**Operator action:** Read the extraction file and decide which seeds to develop.

**Questions to ask:**
- Which seed speaks to embodied experience (not just theory)?
- Which one reveals a cycle or pattern worth naming?
- Which addresses how we resource ourselves?

**Decision:** Pick 1-3 seeds to draft (don't draft all of them).

---

### Step 4: Draft Posts
**Run:** `procedures/writing/draft-field-observation-post.md` (once per seed)

**Operator prompt:**
```
Run procedure: procedures/writing/draft-field-observation-post.md
Seed: [specify seed number from extraction, e.g., "Seed 2"]
River: rest-rhythm
```

**What happens:**
- Loads the seed (pattern, tension, coherenceism lens)
- Drafts post in Ivy's voice
- Generates title and excerpt
- Saves to `harvest/blog-posts/drafts/[YYYY-MM-DD]-[slug].md`

**Expected time:** 5-7 minutes per post

---

### Step 5: Review and Publish
**Operator action:** Review drafts for voice, clarity, coherence.

**Quality checks:**
- Does this speak to embodied experience (not abstract)?
- Is Ivy's voice present (dry wit, grounded, reflective)?
- Are coherenceism principles *applied* (not just mentioned)?
- Does it change how someone might pace themselves?

**If approved:**
- Change `status: draft` to `status: published` in the draft file
- Move draft to `harvest/blog-posts/out/[YYYY-MM-DD]-[slug].md`
- Blog auto-detects via symlink (coherenceism.blog reads from CORA `out/` directory)
- No manual copying needed—CORA is single source of truth

**If needs revision:**
- Edit the draft file directly
- Re-run quality checks

---

## Cadence Recommendations

**Daily (quick pulse):**
- Step 1: Scan sources (captures headlines)
- Step 2: Extract seeds (identifies patterns)
- Review seeds, note what's emerging

**Weekly (publishing rhythm):**
- Steps 3-5: Draft and publish 1-2 posts from accumulated seeds

**Why this cadence:**
- Daily scans build a log of field temperature
- Weekly drafting allows patterns to mature
- You're not chasing every wellness trend, just watching what persists

---

## Success Signals
- Scans capture cultural exhaustion/renewal patterns
- Extractions identify embodied patterns (not wellness tips)
- Drafts ground theory in lived experience
- Posts speak to how we resource coherence
- Publishing feels sustainable (not exhausting)

## Example Session

**Day 1 (Monday morning):**
```
"Run the rest-rhythm scan and extraction"
```
Output: scan + extraction with 4 seeds

**Day 3 (Wednesday):**
```
"Draft post from Seed 3 (burnout pattern)"
```
Output: draft post at `harvest/blog-posts/drafts/2025-10-21-the-pace-that-breaks.md`

**Day 4 (Thursday):**
Review draft, approve, publish to blog.

---

## Notes
- Not every scan yields publishable seeds—that's fine
- Not every seed becomes a post—pick the strongest
- If nothing resonates for a week, skip publishing—coherenceism over obligation
- The field temperature log (scans) is valuable even without posts

## Related Workflows
- `workflows/writing/field-observation-human-ai.md`
- `workflows/writing/field-observation-agency.md`
- `workflows/writing/field-observation-history-systems.md`
- `workflows/writing/field-observation-awakening-alignment.md`

## Related Files
- Source list: `context/sources/rivers/rest-rhythm.md`
- Procedures: `procedures/research/scan-rss-sources.md`, `procedures/research/extract-field-signals.md`, `procedures/writing/draft-field-observation-post.md`
- Persona: `personas/ivy.md`
- Philosophy: `context/philosophy/coherenceism.md`
- Blog site: coherenceism.blog
