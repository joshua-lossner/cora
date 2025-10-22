---
kind: procedure
name: scan-rss-sources
intent: Fetch and parse RSS feeds from a source list to capture field temperature
inputs: [source_list_path]
steps:
  - Load source list file
  - Extract RSS feed URLs
  - Fetch each feed using WebFetch or curl
  - Parse and extract: title, date, link, excerpt
  - Save results to scan output file
expected: Markdown file with headlines, snippets, and links
tags: [research, rss, scanning]
updated: 2025-10-21
---

# Procedure — Scan RSS Sources

## Purpose
Fetch RSS feeds from a river's source list and compile headlines, excerpts, and links into a single markdown scan file. This captures the current "field temperature" for a river.

## Usage

### Operator Prompt
```
Run procedure: procedures/research/scan-rss-sources.md
Source list: context/sources/rivers/[river-name].md
```

### Agent Instructions

1. **Load the source list**
   - Read the specified source list file
   - Extract all URLs under `## RSS Feeds`
   - Note the river name and focus areas

2. **Fetch each RSS feed**
   - For each feed URL:
     - Use WebFetch to retrieve the feed content
     - If WebFetch fails, try curl via Bash
     - Parse the XML/JSON for entries

3. **Extract key data**
   - For each entry, capture:
     - **Title** (entry title)
     - **Date** (publication date)
     - **Link** (canonical URL)
     - **Excerpt** (description or summary, first 200 chars)
   - Limit to the 10 most recent entries per feed

4. **Compile scan results**
   - Create output file at: `harvest/blog-posts/scans/[YYYY-MM]/[river]-[YYYY-MM-DD].md`
   - Create the monthly subdirectory if it doesn't exist (e.g., `2025-10/`)
   - Structure:
     ```markdown
     ---
     kind: field_scan
     river: [river-name]
     date: YYYY-MM-DD
     sources: [feed1, feed2, ...]
     ---

     # Field Scan — [River Name] — YYYY-MM-DD

     ## [Feed Name]

     ### [Entry Title]
     - **Date**: YYYY-MM-DD
     - **Link**: [URL]
     - **Excerpt**: [First 200 chars]

     ---

     (repeat for all entries from all feeds)
     ```

5. **Report summary**
   - Tell operator:
     - How many feeds scanned
     - How many entries captured
     - Where the scan file was saved

## Success Signals
- All RSS feeds successfully fetched (or errors logged)
- Scan file created with structured entries
- Entries are recent (within last 7 days preferred)
- Operator knows where to find the scan results

## Example Output Path
`harvest/blog-posts/scans/2025-10/human-ai-2025-10-21.md`

## Error Handling
- If a feed is unreachable, log the error and continue with remaining feeds
- If no entries are found, note that in the scan file
- Always create an output file, even if partial results

## Notes
- RSS parsing may vary by feed format (Atom vs RSS 2.0)
- Some feeds may return full content, others just excerpts—take what's available
- Date parsing should be flexible (handle various timestamp formats)
- If a feed returns more than 10 entries, take only the 10 most recent

## Related
- Source lists: `context/sources/rivers/`
- Next step: `procedures/research/extract-field-signals.md`
