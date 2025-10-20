---
kind: task
title: Lazy-load track metadata to reduce index.html size
project: coherenceism-media
status: todo
updated: 2025-10-18
tags: [performance, optimization]
depends_on: [fix-yaml-parsing-errors]
git_status: none
---

# Lazy-Load Track Metadata

## Purpose
Homepage index.html is 145KB due to embedding full track metadata (lyrics, style prompts) as inline JSON attributes. Lazy-loading will improve initial page load, especially on mobile.

## Current State
Album covers embed track data inline:
```html
<div class="album-cover-item"
     data-album-tracks='[{"title":"...","url":"...","lyrics":"...","stylePrompt":"..."}]'>
```

For 9 albums × 9 tracks avg × lyrics/prompts, this bloats fast.

## Steps
1. Move track metadata to separate JSON files:
   ```
   public/data/albums/we-are-the-wire.json
   ```
2. Update build.js to generate these JSON files
3. Modify homepage to embed only album slug + cover
4. Add fetch on album click to load track data:
   ```js
   async function loadAlbumTracks(slug) {
     const data = await fetch(`/data/albums/${slug}.json`);
     return data.json();
   }
   ```
5. Update player.js to handle async track loading
6. Test on 3G mobile network throttling
7. Measure before/after page size and load time

## Acceptance
- index.html < 50KB (down from 145KB)
- Track data loads on-demand when album is clicked
- Player still works smoothly after fetch
- No degradation in perceived performance
- 3G mobile load time improves noticeably
- Build process generates JSON files correctly

## Links
- Build script: `coherenceism-media/scripts/build.js:240-280`
- Player logic: `coherenceism-media/src/templates/player.js`
- Current homepage template: `coherenceism-media/src/templates/home.html`

## Notes
- Could also defer lyrics until slide-up panel opens
- Consider caching fetched JSON in localStorage
- Balance: too much lazy-loading adds latency
- Test perceived performance, not just payload size
- May need loading states/spinners for slow connections
