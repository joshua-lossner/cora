---
kind: procedure
title: Site — Migrate Song Outputs to Dated Folders
intent: Move `content/songs/out/<slug>/` outputs into `content/songs/out/YYYY-MM-DD/<slug>/` and update links
status: draft
updated: 2025-10-05
tags: [migration, music, suno]
---

# Procedure — Migrate Song Outputs to Dated Folders

Purpose
- Reduce directory overload and clarify chronology by adding a date segment to song output paths.

When
- Run once per batch when adopting the dated output convention.

Steps
- Choose a date for the batch (e.g., the original creation date).
- For each song folder under `content/songs/out/<slug>/`, move it to `content/songs/out/<YYYY-MM-DD>/<slug>/`.
- Update any album indexes that link to those outputs.
- Commit and push.

Notes
- Future outputs should already be generated in dated folders via workflows.
- If external sites deep‑link to the old paths, add redirects downstream.

