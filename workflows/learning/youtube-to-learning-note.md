---
kind: workflow
title: YouTube Video to Learning Note (Automated)
intent: Automatically extract transcript, analyze content, generate structured note with fact-checking
actor: ivy
status: active
updated: 2025-10-19
tags: [learning, youtube, automation]
---

# YouTube Video to Learning Note — Automated Workflow

## Purpose
Transform a YouTube video into a structured, searchable learning note with automatic transcript extraction, intelligent analysis, and fact-checking. User provides URL, Ivy does the rest.

## Inputs
- YouTube URL (required)
- Topic category (optional—will be inferred if not provided)

## Outputs
- Markdown learning note in `learning/active/[topic]/`
- Log entry in `logs/YYYY/YYYY-MM-DD.md`

## Steps

### 1. Extract Video Metadata & Transcript

**Command pattern:**
```bash
# Get metadata (title, channel, duration)
yt-dlp --skip-download --print "%(title)s|%(channel)s|%(duration)s" [URL]

# Get transcript
yt-dlp --skip-download --write-auto-subs --sub-lang en --convert-subs srt --output "transcript" [URL]
```

**Fallback:** If auto-subs not available, try manual subs:
```bash
yt-dlp --skip-download --write-subs --sub-lang en --convert-subs srt --output "transcript" [URL]
```

**Success signal:** Metadata extracted and transcript file retrieved

### 2. Parse Transcript
- Read the .srt file
- Strip timestamps and formatting
- Combine into clean, readable text
- Identify natural sections/breaks in content

**Success signal:** Clean transcript text ready for analysis

### 3. Analyze Content & Identify Topic
Based on transcript content:
- Determine primary domain (e.g., finance, devops, philosophy, cooking, health)
- Use topic tags if patterns are clear (e.g., mentions Docker → devops, compound interest → personal-finance)
- If ambiguous, default to `general` or ask user for clarification

**Success signal:** Topic identified and folder path determined

### 4. Generate Summary
Write 2-3 sentence overview:
- What is the video about?
- What's the main argument or teaching?
- Who is this for?

**Success signal:** Clear, concise summary

### 5. Extract Highlights
Identify 3-7 key takeaways:
- Actionable insights
- Important definitions or concepts
- Memorable examples or frameworks
- Critical warnings or best practices

Format as bullet points with enough context to be useful standalone.

**Success signal:** Concrete, memorable highlights captured

### 6. Create Detailed Breakdown
Organize transcript into logical sections:
- Intro/Overview
- Main Points (subsections as needed)
- Conclusion/Summary
- Code examples, formulas, or diagrams mentioned

Include timestamps for important moments or dense sections.

**Success signal:** Structured breakdown that could be learned from without watching the video

### 7. Fact-Check Major Claims
Identify claims that:
- Sound too good to be true
- Contradict common knowledge
- Lack supporting evidence in the video
- Are controversial or disputed

For each flagged claim:
- Extract the claim verbatim
- Note approximate timestamp
- Use WebSearch or existing knowledge to verify
- Document: ✓ Verified / ⚠️ Needs review / ✗ Incorrect
- Cite sources if checked

**Keep it pragmatic:** Verify 2-4 major claims. Don't fact-check the entire video unless it's making extraordinary assertions.

**Success signal:** Major claims reviewed, questionable items flagged with sources

### 7a. Run Entropy & Judge Sanity Checks
- When relying on model-generated reflections, summaries, or judge scores, request at least 3 variants (e.g., `temperature 0.8`) and check for near-identical phrasing.
- Flag collapse if outputs reuse the same sentences, ordering, or conclusions; rerun with different seed or mark the section as ⚠️ Needs review.
- If an LLM judge is used, require the judge to cite concrete evidence (timestamps, transcript quotes). No evidence → treat the judgment as advisory only.
- Spot-check one result manually: confirm the transcript supports the judged outcome.

**Success signal:** Model assistance shows diversity with evidence; any collapse or unsupported judgments are flagged for human follow-up.

### 8. Capture Questions & Next Steps
- List unresolved questions or topics that need deeper exploration
- Suggest related learning (other videos, books, practice ideas)
- Link to existing notes if relevant

**Success signal:** Clear follow-up paths identified

### 9. Generate Filename & Save Note
**File path:** `learning/active/[topic]/[slug].md`
- Create topic folder if it doesn't exist
- Generate slug from video title (kebab-case, max 50 chars)
- Example: `learning/active/personal-finance/compound-interest-explained.md`

**Template:** Use structure from `learning/active/_examples/_enhanced-video-note.md`

Populate all fields:
- Frontmatter: topic, source_type, source_url, source_title, source_channel, date_consumed, duration, tags, status
- Summary
- Highlights
- Detailed Breakdown
- Fact-Check & Verification
- Questions / Follow-ups
- Related Learning
- Application / Next Steps

**Success signal:** Note file created and saved in correct location

### 10. Log the Capture
Append to `logs/YYYY/YYYY-MM-DD.md`:

```markdown
### [ISO-timestamp] — learning-note — auto-captured YouTube video

- Actor: ivy
- Paths: [learning/active/[topic]/[filename].md]
- Workflow: workflows/personal/youtube-to-learning-note.md
- Summary: Extracted transcript and created learning note for "[video title]"
- Outcome: Note created with summary, highlights, breakdown, and fact-checking
- Follow-ups: [any flagged claims or questions for deeper research]
```

**Success signal:** Log entry appended

### 11. Respond to User
Inform user:
- Where the note was saved
- What topic it was filed under
- If any claims were flagged for review
- Next steps or related learning suggestions

Example:
> "Learning note saved to `learning/active/devops/docker-containers-explained.md`. Verified 3 major claims—all checked out. Flagged one best practice for further testing. Let me know if you want to explore any of the follow-up questions."

**Success signal:** User knows where to find the note and any important caveats

## Example Usage

**User:** "Run the YouTube workflow on https://youtube.com/watch?v=abc123"

**Ivy:**
1. Extracts metadata: "Docker Containers Explained - Complete Beginner's Guide" (45 min)
2. Pulls auto-generated transcript
3. Identifies topic: `devops`
4. Generates 3-sentence summary
5. Extracts 5 key highlights
6. Creates detailed breakdown with 4 sections and timestamps
7. Fact-checks 3 claims: 2 verified, 1 flagged for review
8. Captures 2 follow-up questions
9. Saves to `learning/active/devops/docker-containers-explained.md`
10. Logs the capture
11. Responds: "Learning note created at `learning/active/devops/docker-containers-explained.md`. Flagged one claim about container performance for verification."

## Error Handling

**No transcript available:**
- Note this in the file
- Create note based on metadata and any available description
- Suggest user watch and use the conversational workflow instead

**Topic unclear:**
- Default to `general` folder
- User can move the file later

**Fact-check blocked (no WebSearch available):**
- Flag claims with ⚠️ Needs review
- Skip verification step but preserve the claim for user review

## Notes
- This workflow is fully automated—user just provides URL
- For conversational/guided capture, use `workflows/personal/capture-learning-note.md` instead
- Balance thoroughness with speed—aim for useful notes, not perfect ones
- Transcript quality varies; note when auto-generated subs are messy

## Related
- Template: `learning/active/_examples/_enhanced-video-note.md`
- Conversational workflow: `workflows/personal/capture-learning-note.md`
- Structure guide: `learning/active/_examples/README.md`
