# Weekly Workout Tracker

Simple single-page workout tracker built as plain HTML, CSS, and JavaScript.

## What this is

- One static page with a weekly split (Monday to Sunday).
- Cyberpunk neon theme that rotates by day.
- Start/end day flow, per-exercise done toggles, and a fixed mobile session dock.
- Automatic rest timer (`1:30`) after marking an exercise done.
- Undo window (`5s`) for the last done action.
- Set-level actual logging (reps + load) in `Details` with per-exercise recent history.
- Per-day notes and small UI preferences (haptics/sound).
- Installable PWA (Chromium prompt + iOS add-to-home guidance).
- Offline core usage after first online load (app shell + local progress).

## Run locally

No build step is required.

1. Open `/Users/aka/Code/personal/exercise/index.html` directly in your browser, or
2. Serve the folder with a local server:

```bash
cd /Users/aka/Code/personal/exercise
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages

This repo now includes a ready workflow at `/Users/aka/Code/personal/exercise/.github/workflows/deploy-pages.yml`.

1. Push this repository to GitHub.
2. In GitHub, open `Settings -> Pages`.
3. Set `Source` to `GitHub Actions`.
4. Push to `main` or `master` (or run `Actions -> Deploy to GitHub Pages -> Run workflow`).
5. Open the deployed URL shown in the workflow logs (typically `https://<username>.github.io/<repo>/`).

Notes:
- If your default branch is neither `main` nor `master`, update the branch list in `.github/workflows/deploy-pages.yml`.
- A `.nojekyll` file is included so Pages serves files directly without Jekyll processing.
- All app asset URLs are relative, so project-page subpaths work without extra path configuration.

## PWA install

- Chromium (Chrome/Edge): use the `INSTALL` button when it appears in the top bar.
- iOS Safari: tap Share, then choose `Add to Home Screen` (hint banner shown in-app).

## PWA updates

- When a new service worker version is waiting, the app shows an `Update ready` banner.
- `Apply Update` is enabled only when idle:
  - Rest timer is not running.
  - Active day is not started.
- `Dismiss` hides the banner for the current waiting version.
- Applying sends `SKIP_WAITING` to the waiting service worker and reloads on controller swap.

## Offline and file-mode behavior

- Offline shell works after first successful online load when served over `http://localhost` or `https`.
- Service worker is **not** registered on `file://`.
- On `file://`, core tracker behavior still works (day switching, done toggles, localStorage, timer), but install/offline cache features do not.

## Data model note

- App state now uses `splitSysAppStateV2`.
- Current schema version is `4` (`APP_STATE_VERSION` in `script.js`).
- Legacy key `splitSysWorkoutStateV1` is ignored and removed when V2 is initialized.
- v2/v3 state is normalized into v4 on load.
- Custom routine profile storage uses `splitSysRoutineProfileV1`.

## Set logging and history

- Open `Details` on an exercise to edit per-set `reps` and `load`.
- Set dots remain fast completion toggles and still trigger the rest timer flow.
- Completing a set with no load logged will auto-fill planned load when available.
- Ending a started day stores a session snapshot for logged sets.
- Recent history shown in `Details` is matched by day index + exercise name.
- History retention is rolling `60` days and is pruned automatically.
- `Clear Progress` also clears stored session history.

## Custom routine CSV import

- Use `Import CSV` in the sidebar to load a custom weekly routine.
- CSV required headers:
  - `day,category,duration,sets,is_rest,exercise,summary`
- Optional header:
  - `tag`
- `day` accepts `1..7` or weekday names (`Mon..Sun`).
- `is_rest` accepts `true|false|1|0`.
- `sets` accepts a positive integer or blank.
- Import requires rows for all 7 days.
- `Reset Routine` restores the built-in default plan.

## Edit workout content

- Open `/Users/aka/Code/personal/exercise/script.js`.
- Update the `BUILTIN_RAW_DAYS` array.
- Each day entry includes:
  - `name`, `short`, `cat`, `idx`
  - `sets`, `dur`
  - `ex` (exercise list with `n` = name, `s` = sets/reps, `t` = optional tag)

## Project files

- `/Users/aka/Code/personal/exercise/index.html`: page markup/layout
- `/Users/aka/Code/personal/exercise/styles.css`: styling
- `/Users/aka/Code/personal/exercise/script.js`: workout data + interactions
- `/Users/aka/Code/personal/exercise/manifest.webmanifest`: PWA manifest
- `/Users/aka/Code/personal/exercise/sw.js`: service worker
- `/Users/aka/Code/personal/exercise/icons/icon-192.png`: app icon
- `/Users/aka/Code/personal/exercise/icons/icon-512.png`: app icon
