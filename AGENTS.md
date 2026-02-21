# AGENTS.md

## Project intent

This repo is a simple weekly workout tracker and should stay lightweight.

## Current stack

- Plain static HTML/CSS/JS (no framework, no bundler).
- Files:
  - `/Users/aka/Code/personal/exercise/index.html` (markup)
  - `/Users/aka/Code/personal/exercise/styles.css` (styles)
  - `/Users/aka/Code/personal/exercise/script.js` (workout data + behavior)

## Guidelines for future edits

- Prefer small, direct edits over architectural rewrites.
- Keep the app usable by opening `index.html` directly in a browser.
- Do not add build tooling unless explicitly requested.
- Keep the visual style and interaction model consistent.
- Preserve responsive behavior for desktop and mobile.

## Workout data changes

- Workout content is defined in the `DAYS` array in `script.js`.
- Keep data shape consistent for each day:
  - `name`, `short`, `cat`, `idx`, `sets`, `dur`, `ex[]`
  - `ex[]` items use `n`, `s`, and optional `t`.

## Validation checklist

- Day tabs switch correctly.
- Sidebar week list updates active day.
- `Start Day` and `Mark Done` update progress correctly.
- Rest timer starts at `1:30` when an exercise is marked done.
- Modal opens/closes and shows the correct day’s exercises.
- Initial render still maps to today’s day.
