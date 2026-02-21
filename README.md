# Weekly Workout Tracker

Simple single-page workout tracker built as plain HTML, CSS, and JavaScript.

## What this is

- One static page with a weekly split (Monday to Sunday).
- Click a day to view that day’s plan.
- Press `Start Day` to begin a session.
- Press `Mark Done` on an exercise when you complete its sets/reps.
- Pressing `Mark Done` starts a 1:30 rest timer automatically.
- Use `SKIP` in the rest timer panel if you want to end rest early.
- Use `Clear Progress` in the right sidebar to reset saved progress.
- Click any exercise row to open the detailed workout modal.
- Automatically opens to the current day based on your local browser date.
- Accent theme shifts Monday to Sunday using a cyberpunk neon palette.
- Progress is saved in your browser (`localStorage`).

## Run locally

No build step is required.

1. Open `/Users/aka/Code/personal/exercise/index.html` directly in your browser, or
2. Serve the folder with a local server:

```bash
cd /Users/aka/Code/personal/exercise
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Edit the workout plan

- Open `/Users/aka/Code/personal/exercise/script.js`.
- Update the `DAYS` array.
- Each day entry includes:
  - `name`, `short`, `cat`, `idx`
  - `sets`, `dur`
  - `ex` (exercise list with `n` = name, `s` = sets/reps, `t` = optional tag)

## Project files

- `/Users/aka/Code/personal/exercise/index.html`: page markup/layout
- `/Users/aka/Code/personal/exercise/styles.css`: styling
- `/Users/aka/Code/personal/exercise/script.js`: workout data + interactions

## Notes

- Keeping this as plain HTML is a good fit for the current scope.
- CSS and JavaScript are split out for easier maintenance while staying fully static.
