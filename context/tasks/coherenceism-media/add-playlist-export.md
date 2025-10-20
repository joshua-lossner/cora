---
kind: task
title: Add playlist creation and export (M3U/JSON)
project: coherenceism-media
status: todo
updated: 2025-10-18
tags: [feature, playlists, export, future]
git_status: none
---

# Playlist Creation and Export

## Purpose
Allow users to create custom playlists, save them locally, and export as M3U or JSON for use in other players.

## Features
1. **Create Playlist**
   - "Save Queue as Playlist" button
   - Name and description
   - Stored in localStorage

2. **Manage Playlists**
   - View all saved playlists
   - Edit (add/remove/reorder tracks)
   - Delete playlists
   - Duplicate/copy

3. **Export Formats**
   - **M3U** - Standard playlist format (VLC, iTunes, etc.)
   - **JSON** - Custom format with full metadata
   - **Text** - Simple track list for sharing

4. **Import**
   - Load playlist from M3U file
   - Parse and match tracks by title/slug

## Steps
1. Add playlist storage layer:
   ```js
   class PlaylistManager {
     save(name, tracks) { /* localStorage */ }
     load(name) { /* localStorage */ }
     list() { /* all playlists */ }
     delete(name) { /* remove */ }
   }
   ```

2. Create playlist UI:
   - Modal/panel for playlist management
   - Add current queue as playlist
   - Browse and load saved playlists

3. Implement M3U export:
   ```m3u
   #EXTM3U
   #EXTINF:180,Artist - Song Title
   https://example.com/track.mp3
   ```

4. Implement JSON export:
   ```json
   {
     "name": "My Playlist",
     "tracks": [{ "title": "...", "url": "...", "album": "..." }]
   }
   ```

5. Add import functionality
6. Add share buttons (copy link, etc.)

## Acceptance
- Users can save current queue as named playlist
- Playlists persist in localStorage
- Playlist manager UI shows all saved playlists
- Export to M3U works in VLC and other players
- JSON export includes full metadata
- Import from M3U matches tracks correctly
- Share playlist as URL (future: via encoded hash)

## Links
- M3U format: https://en.wikipedia.org/wiki/M3U
- Player code: `coherenceism-media/src/templates/player.js`

## Notes
- Consider cloud sync (future: via account)
- Could generate playlist shareable links (base64 encoded)
- Collaborative playlists (very future)
- Playlist stats: duration, genre breakdown, etc.
- Integration with music services (Spotify, Apple Music) - far future
