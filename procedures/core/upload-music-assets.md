---
name: upload-music-assets
intent: Re-upload corrected album covers and tracks to Vercel Blob and refresh CORA album metadata
inputs: [album_slug, assets_path, vercel_blob_token]
steps:
  - Verify the updated audio/cover files exist under {{assets_path}} (either per-album folders or assets/tracks/).
  - In coherenceism-media/, set BLOB_READ_WRITE_TOKEN in the shell and run `npm run upload:blob -- --force`.
  - Review script output; ensure each target track logs a new blob URL and note any "not found" warnings.
  - Run `npm run build` to sync new URLs into public/ and commit updated album.md files if applicable.
  - Push changes to origin/main (and deploy via Vercel if needed).
expected: Updated blob URLs in album.md, regenerated site assets, and confirmation of successful uploads
tags: [music, vercel, assets]
---

## Notes
- The upload script now accepts per-album layout (`assets/<album-slug>/...`) and global `assets/tracks/` paths, and supports `.jpg`, `.jpeg`, or `.png` covers.
- Use the `--force` flag to overwrite existing blob keys; without it, only Suno-hosted URLs are migrated.
- If only one album needs updates, prune the assets directory to that slug before running the script, or add a future filter flag to limit scope.
- Missing file warnings indicate the script could not locate the source asset locally; rerun after placing the corrected file in the assets directory.
