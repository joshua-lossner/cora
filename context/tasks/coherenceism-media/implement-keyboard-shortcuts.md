---
kind: task
title: Implement keyboard shortcuts for player controls
project: coherenceism-media
status: todo
updated: 2025-10-18
tags: [feature, a11y, ux]
git_status: none
---

# Implement Keyboard Shortcuts

## Purpose
Add keyboard shortcuts for common player actions, improving accessibility and power-user experience.

## Shortcuts to Implement
- **Space** - Play/Pause
- **Arrow Left** - Previous track (or seek back 10s if held)
- **Arrow Right** - Next track (or seek forward 10s if held)
- **Arrow Up** - Volume up
- **Arrow Down** - Volume down
- **M** - Mute/Unmute
- **S** - Shuffle toggle
- **R** - Repeat toggle
- **L** - Show/Hide lyrics panel
- **Q** - Show/Hide queue panel
- **?** - Show keyboard shortcuts help

## Steps
1. Add global keyboard event listener in player.js
2. Prevent default only when shortcuts are triggered
3. Don't interfere with text input fields
4. Add visual feedback for shortcut actions
5. Create help modal/overlay showing all shortcuts
6. Add "Keyboard Shortcuts" link in footer or player
7. Test with screen readers (ensure they still work)
8. Document in README

## Acceptance
- All listed shortcuts work reliably
- Shortcuts don't fire when typing in inputs
- Visual feedback confirms action (flash icon, toast, etc.)
- Help modal shows all shortcuts with descriptions
- Screen reader users can still navigate normally
- Keyboard-only navigation works for all player features
- Documented in README and in-app help

## Links
- Player code: `coherenceism-media/src/templates/player.js`
- Similar implementations: YouTube, Spotify, SoundCloud

## Notes
- Consider customizable shortcuts (future enhancement)
- Test on different keyboard layouts
- Some shortcuts may conflict with browser defaults
- Mobile virtual keyboards won't trigger these
- Could add toast notifications for shortcut actions
