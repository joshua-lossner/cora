---
kind: task
title: Add audio error handling with fallback UI
project: coherenceism-media
status: todo
updated: 2025-10-18
tags: [bug, ux, audio, critical]
git_status: none
---

# Add Audio Error Handling

## Purpose
Player.js loads audio URLs but has no error handling for 404s, network failures, or expired Vercel Blob URLs. Users see no feedback when tracks fail to load.

## Issue
Missing `onerror` handler on Audio element means:
- Silent failures when Blob URLs expire
- No fallback messaging when both Blob + Suno CDN fail
- Poor UX when network is unstable

## Steps
1. Add `onerror` event listener to Audio element in player.js
2. Implement fallback chain:
   - Try primary URL (Vercel Blob)
   - On failure, try Suno CDN if available
   - On total failure, show user-friendly error message
3. Add UI states for:
   - "Loading track..."
   - "Track unavailable, trying fallback..."
   - "Unable to load track. Skip to next?"
4. Log errors to console for debugging
5. Test with intentionally broken URLs

## Acceptance
- Audio errors display user-friendly messages in player UI
- Fallback URLs are attempted before showing error
- Error state includes "Skip" button to move to next track
- Console logs help diagnose which URL/service failed
- Player recovers gracefully and doesn't break queue

## Links
- Player code: `coherenceism-media/src/templates/player.js`
- Audio hosting: Vercel Blob (primary), Suno CDN (fallback)
- Related: Album metadata has both URL types

## Notes
- Common failure: Vercel Blob URLs may have expiration
- Suno CDN URLs are more stable but may be removed
- Consider retry logic with exponential backoff
- Don't auto-skip on first error; let user decide
