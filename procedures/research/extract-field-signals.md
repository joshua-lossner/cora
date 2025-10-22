---
kind: procedure
name: extract-field-signals
intent: Analyze a field scan to identify resonant patterns and potential blog post seeds
inputs: [scan_file_path, river_source_list_path]
steps:
  - Read scan file
  - Read river focus areas and coherenceism guidance
  - Identify recurring themes and tensions
  - Extract 3-5 seeds worth developing
  - Save seeds to extraction output file
expected: Markdown file with 3-5 seeds, each with pattern + coherenceism lens
tags: [research, analysis, pattern-detection]
updated: 2025-10-21
---

# Procedure — Extract Field Signals

## Purpose
Analyze a field scan to identify patterns, tensions, and resonant themes. Extract 3-5 "seeds"—observations worth developing into blog posts.

## Usage

### Operator Prompt
```
Run procedure: procedures/research/extract-field-signals.md
Scan file: harvest/blog-posts/scans/[river]-[YYYY-MM-DD].md
River sources: context/sources/rivers/[river].md
```

### Agent Instructions

1. **Load inputs**
   - Read the scan file (all headlines, excerpts, links)
   - Read the river source list for:
     - Focus areas
     - Inclusion test
     - Extraction guidance
     - Relevant coherenceism principles

2. **Identify patterns**
   Look across all scan entries for:
   - **Recurring themes**: What topics appear multiple times?
   - **Tensions**: What conflicts or contradictions emerge?
   - **Resonance**: What aligns with coherenceism principles?
   - **Dissonance**: What reveals misalignment or confusion?
   - **Emergence**: What new patterns are forming?

3. **Apply river lens**
   - Use the river's inclusion test to filter
   - Focus on the river's core question:
     - **human-ai**: Is the relationship itself the subject?
     - **agency**: Can someone reuse this tomorrow?
     - **rest-rhythm**: Does this change how I pace today?
     - **history-systems**: Does it name a reusable system pattern?
     - **awakening-alignment**: Is inner alignment the center of gravity?

4. **Extract seeds**
   - Identify 3-5 seeds (fewer is better than more)
   - For each seed, capture:
     - **Pattern**: What's actually happening (1-2 sentences)
     - **Tension**: What's the question or conflict? (1 sentence)
     - **Coherenceism lens**: Which 1-2 principles illuminate this?
     - **Supporting evidence**: 2-3 headlines/links from the scan
     - **River fit**: Why this belongs in this river

5. **Create extraction file**
   - Save to: `harvest/blog-posts/extractions/[YYYY-MM]/[river]-[YYYY-MM-DD].md`
   - Create the monthly subdirectory if it doesn't exist (e.g., `2025-10/`)
   - Structure:
     ```markdown
     ---
     kind: field_extraction
     river: [river-name]
     scan_date: YYYY-MM-DD
     seeds_extracted: [number]
     ---

     # Field Extraction — [River Name] — YYYY-MM-DD

     ## Seed 1: [Short Title]

     ### Pattern
     [What's happening - 1-2 sentences]

     ### Tension
     [The question or conflict - 1 sentence]

     ### Coherenceism Lens
     - **Primary**: [Principle name] - [How it applies]
     - **Secondary**: [Principle name] - [How it applies]

     ### Evidence
     - [Headline 1] ([source])
     - [Headline 2] ([source])
     - [Headline 3] ([source])

     ### River Fit
     [Why this belongs in this river - 1 sentence]

     ---

     (repeat for each seed)
     ```

6. **Report to operator**
   - How many seeds extracted
   - Brief summary of each seed
   - Where extraction file was saved

## Success Signals
- 3-5 seeds identified (quality over quantity)
- Each seed has a clear pattern + tension
- Coherenceism principles are applied (not just mentioned)
- Seeds pass the river's inclusion test
- Extraction file is clear and actionable for next step

## Example Output Path
`harvest/blog-posts/extractions/2025-10/human-ai-2025-10-21.md`

## Quality Checks
- **Pattern clarity**: Can you explain the pattern in 1-2 sentences?
- **Tension presence**: Is there an actual question or conflict?
- **Coherenceism depth**: Does the lens reveal something (not just label it)?
- **River alignment**: Does the seed truly belong in this river?
- **Actionability**: Could this seed become a blog post?

## Notes
- Not every scan will yield 5 seeds—that's fine
- If nothing resonates, note that and move on
- Seeds can overlap with multiple principles—pick the strongest 2
- The extraction is a draft; seeds can be refined in the drafting step

## Related
- Input: `procedures/research/scan-rss-sources.md`
- Next step: `procedures/writing/draft-field-observation-post.md`
- Philosophy: `context/philosophy/coherenceism.md`
