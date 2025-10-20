---
kind: task
title: Add song-level pages with full lyrics display
project: coherenceism-media
status: todo
updated: 2025-10-18
tags: [feature, content, seo]
git_status: none
---

# Add Song-Level Pages

## Purpose
Create individual song pages with full lyrics, style prompts, and shareable URLs. Improves SEO, enables direct song linking, and provides focused lyric reading experience.

## Current State
- Only album pages exist (`/albums/we-are-the-wire.html`)
- Lyrics only visible in slide-up panel while playing
- No way to share a specific song URL
- Limited SEO for individual songs

## Desired Structure
```
/songs/we-are-the-wire/carrier-wave.html
├── Song title + album breadcrumb
├── Play button (adds to queue)
├── Full lyrics with formatting
├── Style prompt details
├── Album artwork
├── Related tracks from same album
└── Share buttons
```

## Steps
1. Update build.js to generate song pages:
   - Walk `src/content/songs/` directory
   - Match songs to albums via slug
   - Generate HTML for each song
2. Create song page template
3. Add song-level routing to router.js
4. Link track titles on album pages to song pages
5. Add breadcrumb navigation (album → song)
6. Implement "Play Song" button that loads player
7. Add structured data (Schema.org MusicRecording)
8. Test deep linking and social sharing

## Acceptance
- Each song has individual page at `/songs/{album-slug}/{song-slug}.html`
- Pages are navigable via SPA router without breaking player
- Full lyrics display with proper formatting
- Play button adds song to queue and starts playback
- Breadcrumb links back to album page
- Meta tags enable rich social sharing
- Schema.org markup improves search appearance
- URLs are shareable and work on direct load

## Links
- Build script: `coherenceism-media/scripts/build.js`
- Song content: `coherenceism-media/src/content/songs/`
- Router: `coherenceism-media/src/templates/router.js`
- Schema.org MusicRecording: https://schema.org/MusicRecording

## Notes
- Lyrics formatting: preserve line breaks, verses, choruses
- Consider adding genius-style annotations (future)
- Could add "Download lyrics" as text file
- Rich snippets in search results boost discovery
- Song pages improve overall SEO footprint significantly
