# AGENTS.md

## Project intent

This repo is a simple weekly workout tracker and should stay lightweight.

## Current stack

- Plain static HTML/CSS/JS (no framework, no bundler).
- Files:
  - `/Users/aka/Code/personal/exercise/index.html` (markup)
  - `/Users/aka/Code/personal/exercise/styles.css` (styles)
  - `/Users/aka/Code/personal/exercise/script.js` (state + behavior)
  - `/Users/aka/Code/personal/exercise/manifest.webmanifest` (PWA config)
  - `/Users/aka/Code/personal/exercise/sw.js` (offline cache behavior)

## Guidelines for future edits

- Prefer small, direct edits over architectural rewrites.
- Keep the app usable by opening `index.html` directly in a browser.
- Do not add build tooling unless explicitly requested.
- Preserve responsive behavior for desktop and mobile.
- Keep accessibility support (focus-visible, keyboard actions, reduced motion) intact.

## Workout data changes

- Workout content is defined in the `DAYS` array in `script.js`.
- Keep data shape consistent for each day:
  - `name`, `short`, `cat`, `idx`, `sets`, `dur`, `ex[]`
  - `ex[]` items use `n`, `s`, and optional `t`.

## Validation checklist

- Day tabs and week list switch days correctly.
- `Start/End Day`, `Mark Done`, `Undo`, and `+30s/Skip Rest` flows work.
- Rest timer starts at `1:30` when exercise is marked done.
- Mobile session dock actions are reachable and usable on <=768px.
- Modal opens only through explicit `Details` action.
- PWA install UX works:
  - Chromium install button appears when prompt is available.
  - iOS add-to-home hint appears in Safari (non-standalone).
- Offline works after first online load when served over localhost/https.
- File-mode fallback works without runtime errors.
