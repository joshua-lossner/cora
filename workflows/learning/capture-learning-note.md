---
kind: workflow
title: Capture Learning Note
intent: Guide user through capturing notes from videos, articles, books, courses
status: active
updated: 2025-10-19
tags: [learning, notes, guided]
persona: ivy
---

# Capture Learning Note — Guided Workflow

## Purpose
Walk through capturing a learning note in Ivy's voice—one question at a time. Works for videos, articles, books, courses, podcasts, conversations.

## Workflow Steps

### 1. Opening
Start with a simple invitation:
> "Let's capture what you learned. We'll go through it together—one question at a time. Ready?"

### 2. Topic
Ask:
> "What topic does this fit under? Could be something like 'devops,' 'python,' 'design,' 'finance'—whatever helps you find it later."

**Capture:**
- `topic` (string, lowercase, kebab-case preferred: e.g., "devops", "web-development")

### 3. Source Type
Ask:
> "What kind of source was this? Video, article, book, course, podcast, or conversation?"

**Capture:**
- `source_type` (one of: `video`, `article`, `book`, `course`, `podcast`, `conversation`)

### 4. Source Details
Ask:
> "What's the title and where can I find it? URL if it's online, book title if it's a book, or just a description if it's a conversation."

**Capture:**
- `source_title` (string)
- `source_url` (URL or "N/A" if not applicable)
- `source_author` (optional, if it's a book or article)

### 5. Date
Ask:
> "When did you watch/read/learn this? Today, or another date?"

**Capture:**
- `date_consumed` (YYYY-MM-DD, default to today if they say "today")

### 6. Duration (Optional, for videos/courses/podcasts)
If source_type is video, course, or podcast, ask:
> "How long was it? Just ballpark—15 minutes, an hour, whatever."

**Capture:**
- `duration` (optional, string like "45 min" or "2 hours")

### 7. Key Takeaways
Ask:
> "What are the 3-5 most important things you learned? Just the highlights—we'll get into detail next."

**Capture:**
- `key_takeaways` (list of bullet points)

### 8. Detailed Notes
Ask:
> "Want to add any detailed notes? Code snippets, explanations, examples—whatever you want to remember. Or just say 'skip' if the takeaways are enough."

**Capture:**
- `detailed_notes` (freeform text, can be multiple sections, optional)

### 9. Questions / Follow-ups
Ask:
> "Any questions this raised, or things you want to explore next?"

**Capture:**
- `questions` (list of questions, optional)

### 10. Related Learning
Ask:
> "Does this connect to other notes you've taken, or is there a next step in this learning path?"

**Capture:**
- `related_learning` (optional links or descriptions)

### 11. Practice / Application
Ask:
> "How will you use this? Any projects, experiments, or practice you want to do with this knowledge?"

**Capture:**
- `practice` (optional freeform text)

### 12. Tags (Optional)
Ask:
> "Any tags to help you find this later? Things like 'beginner,' 'advanced,' specific tools or concepts."

**Capture:**
- `tags` (array of strings)

### 13. Review & Filename
Summarize what you've captured and ask:
> "Does that capture it? I'll save this in `learning/active/{topic}/{slug}.md`. Sound good, or want to adjust the filename?"

**Generate filename:**
- Default: `learning/active/{topic}/{source-title-slug}.md`
- If topic doesn't have a folder yet, create it
- Allow user to override if desired

### 14. Write the File

Create the learning note at `learning/active/{topic}/{filename}` with this structure:

```markdown
---
kind: learning-note
topic: {topic}
source_type: {source_type}
source_url: {source_url or N/A}
source_title: {source_title}
source_author: {source_author if provided}
date_consumed: {date_consumed}
duration: {duration if provided}
tags: {tags array}
status: active
---

# {source_title}

## Source
- **Type**: {source_type}
- **Title**: {source_title}
{if author: - **Author**: {source_author}}
{if url: - **URL**: {source_url}}
{if duration: - **Duration**: {duration}}
- **Date**: {date_consumed}

## Key Takeaways
{key_takeaways as bullet list}

{if detailed_notes:
## Detailed Notes
{detailed_notes}
}

{if questions:
## Questions / Follow-ups
{questions as bullet list}
}

{if related_learning:
## Related Learning
{related_learning}
}

{if practice:
## Practice / Application
{practice}
}
```

### 15. Closing
Confirm:
> "Learning note saved to `learning/active/{topic}/{filename}`. It's there when you need it."

## Success Signals
- User feels heard, not interrogated
- Note captures enough to jog memory later
- Filename and topic make it findable
- File structure is consistent with other learning notes

## Notes for Ivy
- One question at a time; don't rush
- If they skip a question, that's fine—move on
- Reflect what they say back to show you're listening
- Keep tone warm but not performative
- If they want to revise something, let them
- Don't push for more detail than they want to give
- For code snippets or technical detail, preserve formatting
