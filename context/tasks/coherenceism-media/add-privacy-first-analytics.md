---
kind: task
title: Add privacy-first analytics (optional, minimal)
project: coherenceism-media
status: todo
updated: 2025-10-18
tags: [feature, analytics, privacy, future]
git_status: none
---

# Privacy-First Analytics

## Purpose
Gather minimal, anonymized usage data to understand which songs resonate, without compromising user privacy. Strictly optional and transparent.

## Principles
- **No personal data** - No user IDs, IPs, or tracking cookies
- **Aggregated only** - Individual sessions not identifiable
- **Transparent** - Users know what's collected and why
- **Local-first** - Data stays on device unless user opts in
- **Minimal** - Only actionable metrics, no vanity numbers

## Metrics Worth Tracking
1. **Play counts** (per song/album)
2. **Skip rate** (did user skip before 30s?)
3. **Complete rate** (listened to >80% of track)
4. **Popular hours** (when do people listen?)
5. **Queue patterns** (which songs often paired?)

## Implementation Options

### Option 1: Local Only (No Server)
- Store metrics in localStorage
- Display personal stats dashboard
- Export as JSON for self-analysis
- Zero privacy concerns

### Option 2: Plausible Analytics
- Privacy-focused alternative to Google Analytics
- GDPR compliant, no cookies
- Self-hosted or their service
- See: https://plausible.io/

### Option 3: Custom Minimal Endpoint
- POST aggregated counts to simple API
- No session IDs, just counters
- Store only: `{songSlug, action, timestamp}`
- Weekly aggregation, auto-delete raw data

## Recommended: Option 1 (Local Only) First
Then add opt-in aggregation later if needed.

## Steps (Local Only)
1. Create analytics module:
   ```js
   class LocalAnalytics {
     trackPlay(songSlug) { /* increment counter */ }
     trackSkip(songSlug) { /* record skip */ }
     trackComplete(songSlug) { /* record completion */ }
     getStats() { /* return aggregated data */ }
   }
   ```

2. Add tracking calls in player.js:
   - Play event → trackPlay()
   - Skip event → trackSkip()
   - Complete event (80% listened) → trackComplete()

3. Build stats dashboard:
   - Most played songs
   - Total listening time
   - Favorite albums
   - Listening streaks

4. Add export functionality:
   - Download stats as JSON
   - Share stats as image (optional)

5. Make it opt-in with clear explanation

## Acceptance
- Analytics module tracks plays, skips, completions
- All data stored locally in localStorage
- Stats dashboard shows personal listening history
- Export to JSON works correctly
- No data leaves user's device
- Clear opt-in UI with privacy explanation
- Easy to disable/clear all analytics data

## Links
- Plausible Analytics: https://plausible.io/
- Web Analytics without cookies: https://usefathom.com/
- Player code: `coherenceism-media/src/templates/player.js`

## Notes
- Could gamify with badges (100 plays, etc.)
- Year-in-review summaries (like Spotify Wrapped)
- Compare stats with friends (opt-in, manual share)
- If adding server-side, use Plausible for simplicity
- Never track what lyrics user is reading (too invasive)
- Consider GDPR even though local-only (good practice)
