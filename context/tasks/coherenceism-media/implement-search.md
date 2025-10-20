---
kind: task
title: Implement search across albums, songs, and lyrics
project: coherenceism-media
status: todo
updated: 2025-10-18
tags: [feature, search, ux, future]
git_status: none
---

# Implement Search Functionality

## Purpose
Enable users to find songs, albums, and lyrics quickly via search. Improves discoverability and user experience for large music collections.

## Scope
Search across:
- Album titles and genres
- Song titles
- Lyrics text
- Style prompts and moods

## Approach Options
1. **Client-side Lunr.js** - Fast, no backend, works offline
2. **Fuse.js** - Lightweight fuzzy search
3. **Static search index** - Pre-generated JSON, custom impl
4. **Algolia/Typesense** - External service (overkill for now)

Recommend: Fuse.js for simplicity and fuzzy matching.

## Steps
1. Generate search index during build:
   ```js
   // scripts/build.js
   const searchIndex = albums.flatMap(album =>
     album.tracks.map(track => ({
       type: 'song',
       albumTitle: album.title,
       songTitle: track.title,
       lyrics: track.lyrics,
       slug: track.slug
     }))
   );
   fs.writeFileSync('public/search-index.json', JSON.stringify(searchIndex));
   ```

2. Add search UI component:
   - Search bar in header/nav
   - Keyboard shortcut (Cmd+K / Ctrl+K)
   - Dropdown results overlay
   - Highlight matching text

3. Implement search with Fuse.js:
   - Load index on page load
   - Debounced search as user types
   - Fuzzy matching for typos
   - Weight: song title > album > lyrics

4. Display results with context:
   - Song/album title
   - Snippet of matching lyrics
   - Click to play or navigate

5. Add search analytics (optional, privacy-first)

## Acceptance
- Search bar visible in header on all pages
- Keyboard shortcut (Cmd+K) focuses search
- Results appear as user types (debounced)
- Fuzzy matching handles common typos
- Clicking result plays song or navigates to page
- Search index is small and loads quickly
- Works without network after initial load
- No external services or tracking

## Links
- Fuse.js: https://fusejs.io/
- Search index generation: `coherenceism-media/scripts/build.js`
- UI implementation: `coherenceism-media/src/templates/`

## Notes
- Keep search index < 200KB for performance
- Could lazy-load lyrics text (index only titles first)
- Consider search history (localStorage)
- Highlight search terms in results
- Future: search filters (genre, mood, BPM)
- Future: voice search for accessibility
