---
kind: task
title: Run Lighthouse accessibility audit and fix issues
project: coherenceism-media
status: todo
updated: 2025-10-18
tags: [a11y, audit, quality]
git_status: none
---

# Run Lighthouse Accessibility Audit

## Purpose
README claims "Accessibility First" but no evidence of testing. Need to verify a11y score is ≥95 and fix any issues found.

## Steps
1. Start preview server: `npm run preview`
2. Run Lighthouse audit:
   ```bash
   npx lighthouse http://localhost:8001 --only-categories=accessibility --output=html --output-path=lighthouse-a11y.html
   ```
3. Review report for issues:
   - Color contrast ratios
   - ARIA labels and roles
   - Keyboard navigation
   - Screen reader compatibility
   - Focus management
4. Fix any issues found (create subtasks as needed)
5. Re-run until score ≥95
6. Document results in project notes

## Acceptance
- Lighthouse accessibility score ≥95
- All critical a11y issues resolved
- Color contrast meets WCAG AA standards
- Keyboard navigation works for all interactive elements
- Screen reader announces all important content
- Focus indicators are visible and clear
- Audit report saved and documented

## Links
- Lighthouse docs: https://developers.google.com/web/tools/lighthouse
- WCAG 2.1 AA: https://www.w3.org/WAI/WCAG21/quickref/
- Player UI: `coherenceism-media/src/templates/player.js`
- Styles: `coherenceism-media/src/templates/styles.css`

## Notes
- Run audit on both homepage and album detail pages
- Test with actual screen reader (VoiceOver on macOS)
- Consider testing with keyboard only (no mouse)
- Mobile a11y also matters (touch targets, zoom)
- Document any acceptable <95 scores with rationale
