const DAYS = [
  { name:'Monday', short:'Mon', cat:'Upper Body', idx:'DAY 01', sets:32, dur:'80 min',
    ex:[
      {n:'Flat Barbell Bench Press', s:'60 / 80 / 90 / 95 kg \u00d7 6\u20138 reps', t:''},
      {n:'Incline Dumbbell Press', s:'24 / 28 / 30 / 30 kg \u00d7 8\u201310 reps', t:''},
      {n:'Dips (Chest Focus)', s:'3 \u00d7 8\u201310 reps \u2014 bodyweight', t:''},
      {n:'Cable Fly Crossovers', s:'12.5 / 15 / 17.5 kg \u00d7 12\u201315 reps', t:''},
      {n:'Overhead Press (Barbell)', s:'40 / 50 / 55 / 55 kg \u00d7 6\u20138 reps', t:''},
      {n:'Lateral Raise (Dumbbell)', s:'8 / 10 / 12 / 12 kg \u00d7 15\u201320 reps', t:''},
      {n:'Tricep Pushdown (Cable)', s:'25 / 30 / 35 kg \u00d7 12\u201315 reps', t:''},
      {n:'Dead Hang', s:'1 \u00d7 60 sec', t:'finisher'},
    ]},
  { name:'Tuesday', short:'Tue', cat:'Lower Body', idx:'DAY 02', sets:30, dur:'75 min',
    ex:[
      {n:'Hack Squat (Machine)', s:'80 / 100 / 110 / 110 kg \u00d7 10 reps', t:''},
      {n:'Leg Press (Machine)', s:'180 / 220 / 230 kg \u00d7 12 reps', t:''},
      {n:'Leg Extensions (Machine)', s:'40 / 50 / 55 kg \u00d7 12\u201315 reps', t:''},
      {n:'Walking Lunges (Dumbbell)', s:'15 / 18 / 20 kg \u00d7 12 reps / leg', t:''},
      {n:'Seated Leg Curl (Machine)', s:'55 / 60 / 65 kg \u00d7 12 reps', t:''},
      {n:'Lying Leg Curl (Machine)', s:'35 / 40 / 45 kg \u00d7 12 reps', t:''},
      {n:'Standing Calf Raise', s:'80 / 90 / 95 / 95 kg \u00d7 12\u201315 reps', t:''},
      {n:'Dead Hang', s:'1 \u00d7 60 sec', t:'finisher'},
    ]},
  { name:'Wednesday', short:'Wed', cat:'Pull \u2014 Back & Biceps', idx:'DAY 03', sets:30, dur:'75 min',
    ex:[
      {n:'Weighted Pull-Ups (Wide Grip)', s:'0 / 5 / 10 / 10 kg \u00d7 6\u20138 reps', t:''},
      {n:'Barbell Row', s:'60 / 80 / 90 / 90 kg \u00d7 8\u201310 reps', t:''},
      {n:'Seated Cable Row', s:'50 / 60 / 65 kg \u00d7 10\u201312 reps', t:''},
      {n:'Single Arm Lat Pulldown', s:'30 / 35 / 35 kg \u00d7 10\u201312 reps', t:''},
      {n:'Face Pulls (Cable)', s:'20 / 25 / 25 kg \u00d7 15\u201320 reps', t:''},
      {n:'Barbell Curl', s:'25 / 30 / 30 / 30 kg \u00d7 8\u201310 reps', t:''},
      {n:'Hammer Curl (Dumbbell)', s:'12 / 15 / 15 kg \u00d7 10\u201312 reps', t:''},
      {n:'Dead Hang', s:'1 \u00d7 60 sec', t:'finisher'},
    ]},
  { name:'Thursday', short:'Thu', cat:'Delts + Arms', idx:'DAY 04', sets:34, dur:'90 min',
    ex:[
      {n:'Dumbbell Shoulder Press', s:'20 / 24 / 26 / 26 kg \u00d7 10\u201312 reps', t:''},
      {n:'Lateral Raise (Dumbbell)', s:'8 / 10 / 12 / 12 / 12 kg \u00d7 15\u201320 reps', t:''},
      {n:'Rear Delt Cable Fly', s:'10 / 12.5 / 15 / 15 kg \u00d7 15 / arm', t:''},
      {n:'Overhead Tricep Extension', s:'20 / 24 / 26 / 26 kg \u00d7 10\u201312 reps', t:''},
      {n:'Tricep Pushdown (Cable)', s:'25 / 30 / 35 / 35 kg \u00d7 12\u201315 reps', t:''},
      {n:'Dips (Tricep Focus)', s:'3 \u00d7 10\u201312 reps \u2014 bodyweight', t:''},
      {n:'Preacher Curl (Barbell)', s:'25 / 30 / 30 kg \u00d7 10\u201312 reps', t:''},
      {n:'Cable Curl', s:'15 / 20 / 20 kg \u00d7 12\u201315 reps', t:''},
      {n:'Hanging Leg Raise', s:'3 \u00d7 9\u201312 reps', t:'core'},
      {n:'Dead Hang', s:'1 \u00d7 60 sec', t:'finisher'},
    ]},
  { name:'Friday', short:'Fri', cat:'Posterior Chain + Core', idx:'DAY 05', sets:18, dur:'70 min',
    ex:[
      {n:'Romanian Deadlift (Barbell)', s:'60 / 80 / 100 / 100 kg \u00d7 8 reps', t:''},
      {n:'Hip Thrust (Barbell)', s:'80 / 100 / 120 kg \u00d7 10\u201312 reps', t:''},
      {n:'Stiff Leg Deadlift (Barbell)', s:'60 / 70 / 70 kg \u00d7 10 reps', t:''},
      {n:'Hanging Leg Raise', s:'3 \u00d7 10\u201312 reps', t:'core'},
      {n:'Cable Crunches', s:'30 / 35 / 35 kg \u00d7 15 reps', t:'core'},
      {n:'Treadmill / Cardio', s:'15\u201320 min steady state', t:'cardio'},
    ]},
  { name:'Saturday', short:'Sat', cat:'Cardio', idx:'DAY 06', sets:null, dur:'~30 min',
    ex:[
      {n:'5km Run', s:'Steady state \u2014 Zone 2', t:'cardio'},
      {n:'Warm-up Walk', s:'5 min \u2014 pre run', t:''},
      {n:'Cool-down Stretch', s:'10 min \u2014 post run', t:''},
    ]},
  { name:'Sunday', short:'Sun', cat:'Rest Day', idx:'DAY 07', sets:null, dur:'\u2014', rest:true,
    ex:[{n:'Rest & Recovery', s:'Full day off \u2014 sleep, eat, recover', t:''}]},
];

const STORAGE_KEY = 'splitSysAppStateV2';
const OLD_STORAGE_KEY = 'splitSysWorkoutStateV1';
const DAY_THEME_COLORS = [
  '#00d9ff',
  '#ff2bd6',
  '#a6ff00',
  '#ffe600',
  '#00f5b8',
  '#6f7bff',
  '#ff4fb2',
];
const REST_TIMER_DURATION_SEC = 90;
const UNDO_WINDOW_MS = 5000;
const IOS_HINT_DISMISSED_KEY = 'splitSysIosHintDismissedV1';

let appState = null;
let active = 0;
let restTimerEndsAt = null;
let restTimerInterval = null;
let restTimerDoneUntil = 0;
let undoExpiryTimeout = null;
let deferredInstallPrompt = null;
let audioCtx = null;

function clampDayIndex(idx) {
  if (!Number.isFinite(idx)) return 0;
  if (idx < 0) return 0;
  if (idx > DAYS.length - 1) return DAYS.length - 1;
  return idx;
}

function hexToRgb(hex) {
  const clean = String(hex).replace('#', '').trim();
  const full = clean.length === 3 ? clean.split('').map(ch => ch + ch).join('') : clean;
  const intVal = Number.parseInt(full, 16);
  if (Number.isNaN(intVal)) return { r: 0, g: 217, b: 255 };
  return {
    r: (intVal >> 16) & 255,
    g: (intVal >> 8) & 255,
    b: intVal & 255,
  };
}

function createEmptyDayState(dayIdx) {
  const exLen = DAYS[dayIdx].ex.length;
  return {
    started: false,
    startedAt: null,
    completed: Array.from({ length: exLen }, () => false),
    completedAt: Array.from({ length: exLen }, () => null),
    notes: '',
  };
}

function createInitialAppState(defaultDayIdx) {
  const days = {};
  for (let i = 0; i < DAYS.length; i += 1) days[String(i)] = createEmptyDayState(i);

  return {
    version: 2,
    activeDay: clampDayIndex(defaultDayIdx),
    days,
    rest: {
      durationSec: REST_TIMER_DURATION_SEC,
      endsAt: null,
    },
    ui: {
      soundEnabled: false,
      hapticsEnabled: true,
      lastUndo: null,
    },
  };
}

function normalizeDayState(rawDay, dayIdx) {
  const fallback = createEmptyDayState(dayIdx);
  if (!rawDay || typeof rawDay !== 'object') return fallback;

  const exLen = DAYS[dayIdx].ex.length;
  const completed = Array.isArray(rawDay.completed)
    ? rawDay.completed.slice(0, exLen).map(Boolean)
    : [];
  while (completed.length < exLen) completed.push(false);

  const completedAt = Array.isArray(rawDay.completedAt)
    ? rawDay.completedAt.slice(0, exLen).map((val, idx) => (completed[idx] ? (typeof val === 'string' ? val : null) : null))
    : [];
  while (completedAt.length < exLen) completedAt.push(null);

  return {
    started: Boolean(rawDay.started),
    startedAt: typeof rawDay.startedAt === 'string' ? rawDay.startedAt : null,
    completed,
    completedAt,
    notes: typeof rawDay.notes === 'string' ? rawDay.notes : '',
  };
}

function sanitizeAppState(raw, defaultDayIdx) {
  const base = createInitialAppState(defaultDayIdx);
  if (!raw || typeof raw !== 'object' || raw.version !== 2) return base;

  const normalized = {
    ...base,
    activeDay: clampDayIndex(raw.activeDay),
    rest: {
      durationSec: Number.isFinite(raw.rest?.durationSec) && raw.rest.durationSec > 0 ? Math.round(raw.rest.durationSec) : REST_TIMER_DURATION_SEC,
      endsAt: null,
    },
    ui: {
      soundEnabled: Boolean(raw.ui?.soundEnabled),
      hapticsEnabled: raw.ui?.hapticsEnabled === false ? false : true,
      lastUndo: null,
    },
  };

  for (let i = 0; i < DAYS.length; i += 1) {
    normalized.days[String(i)] = normalizeDayState(raw.days?.[String(i)], i);
  }

  const lu = raw.ui?.lastUndo;
  if (lu && Number.isInteger(lu.dayIdx) && Number.isInteger(lu.exIdx) && Number.isFinite(lu.at)) {
    normalized.ui.lastUndo = { dayIdx: lu.dayIdx, exIdx: lu.exIdx, at: lu.at };
  }

  return normalized;
}

function saveAppState() {
  if (!appState) return;
  const payload = {
    ...appState,
    rest: {
      ...appState.rest,
      endsAt: null,
    },
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // Ignore localStorage failures.
  }
}

function loadAppState(defaultDayIdx) {
  let parsed = null;
  let hasV2 = false;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    hasV2 = Boolean(raw);
    parsed = raw ? JSON.parse(raw) : null;
  } catch {
    parsed = null;
  }

  const state = sanitizeAppState(parsed, defaultDayIdx);

  if (!hasV2) {
    try {
      localStorage.removeItem(OLD_STORAGE_KEY);
    } catch {
      // Ignore localStorage failures.
    }
  }

  return state;
}

function getDayState(dayIdx) {
  const key = String(dayIdx);
  if (!appState.days[key]) appState.days[key] = createEmptyDayState(dayIdx);
  return appState.days[key];
}

function setActiveDay(dayIdx) {
  active = clampDayIndex(dayIdx);
  appState.activeDay = active;
  saveAppState();
}

function doneCount(dayState) {
  return dayState.completed.filter(Boolean).length;
}

function escapeHtml(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function triggerHaptic(pattern) {
  if (!appState.ui.hapticsEnabled) return;
  if (typeof navigator.vibrate !== 'function') return;
  navigator.vibrate(pattern);
}

function playBeep() {
  if (!appState.ui.soundEnabled) return;

  try {
    if (!audioCtx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      audioCtx = new AudioCtx();
    }

    if (audioCtx.state === 'suspended') audioCtx.resume();

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'square';
    osc.frequency.value = 820;
    gain.gain.setValueAtTime(0.0001, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.08, audioCtx.currentTime + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.14);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.15);
  } catch {
    // Ignore audio API failures.
  }
}

function setLastUndo(dayIdx, exIdx) {
  appState.ui.lastUndo = { dayIdx, exIdx, at: Date.now() };
  scheduleUndoExpiry();
}

function clearLastUndo() {
  appState.ui.lastUndo = null;
  if (undoExpiryTimeout) {
    clearTimeout(undoExpiryTimeout);
    undoExpiryTimeout = null;
  }
}

function canUndoLast() {
  const lu = appState.ui.lastUndo;
  if (!lu) return false;

  const age = Date.now() - lu.at;
  if (age > UNDO_WINDOW_MS) {
    clearLastUndo();
    saveAppState();
    return false;
  }

  const dayState = getDayState(lu.dayIdx);
  if (!dayState.completed[lu.exIdx]) {
    clearLastUndo();
    saveAppState();
    return false;
  }

  return true;
}

function scheduleUndoExpiry() {
  if (undoExpiryTimeout) clearTimeout(undoExpiryTimeout);
  if (!appState.ui.lastUndo) return;

  const remaining = Math.max(0, UNDO_WINDOW_MS - (Date.now() - appState.ui.lastUndo.at));
  undoExpiryTimeout = setTimeout(() => {
    clearLastUndo();
    saveAppState();
    render(active);
  }, remaining + 20);
}

function formatTimer(ms) {
  const totalSeconds = Math.max(0, Math.ceil(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function isRestTimerActive() {
  return Boolean(restTimerEndsAt && restTimerEndsAt > Date.now());
}

function clearRestTimerInterval() {
  if (!restTimerInterval) return;
  clearInterval(restTimerInterval);
  restTimerInterval = null;
}

function onRestTimerComplete() {
  clearRestTimerInterval();
  restTimerEndsAt = null;
  restTimerDoneUntil = Date.now() + 1500;
  triggerHaptic([35, 30, 35]);
  playBeep();
  updateRestTimerWidget();
  setTimeout(updateRestTimerWidget, 1600);
}

function updateRestTimerWidget() {
  const widget = document.getElementById('rest-timer-widget');
  const title = document.getElementById('rest-title');
  const time = document.getElementById('rest-time');
  const fill = document.getElementById('rest-fill');
  const skipBtn = document.getElementById('rest-skip-btn');
  if (!widget || !title || !time || !fill || !skipBtn) return;

  const now = Date.now();
  const remaining = restTimerEndsAt ? Math.max(0, restTimerEndsAt - now) : 0;
  const activeTimer = remaining > 0;
  const doneFlash = !activeTimer && restTimerDoneUntil > now;
  const progress = activeTimer ? remaining / (appState.rest.durationSec * 1000) : 0;

  widget.classList.toggle('active', activeTimer);
  widget.classList.toggle('done', doneFlash);

  if (activeTimer) {
    title.textContent = 'REST TIMER';
    time.textContent = formatTimer(remaining);
  } else if (doneFlash) {
    title.textContent = 'REST COMPLETE';
    time.textContent = '00:00';
  } else {
    title.textContent = 'REST TIMER';
    time.textContent = '00:00';
  }

  fill.style.width = `${Math.max(0, Math.min(100, progress * 100))}%`;
  skipBtn.disabled = !activeTimer;

  updateSessionDock();
}

function startRestTimer(durationSec = appState.rest.durationSec) {
  const safeDuration = Math.max(1, Number(durationSec) || REST_TIMER_DURATION_SEC);
  restTimerDoneUntil = 0;
  restTimerEndsAt = Date.now() + safeDuration * 1000;
  clearRestTimerInterval();
  updateRestTimerWidget();

  restTimerInterval = setInterval(() => {
    if (!isRestTimerActive()) {
      onRestTimerComplete();
      return;
    }
    updateRestTimerWidget();
  }, 200);
}

function addRestTime(seconds) {
  const addMs = Math.max(1, Number(seconds) || 0) * 1000;
  if (isRestTimerActive()) {
    restTimerEndsAt += addMs;
    triggerHaptic(20);
    updateRestTimerWidget();
    return;
  }

  startRestTimer(seconds);
  triggerHaptic(20);
}

function skipRestTimer(silent = false) {
  clearRestTimerInterval();
  restTimerEndsAt = null;
  restTimerDoneUntil = 0;
  if (!silent) triggerHaptic(12);
  updateRestTimerWidget();
}

function resetRestTimer() {
  clearRestTimerInterval();
  restTimerEndsAt = null;
  restTimerDoneUntil = 0;
  updateRestTimerWidget();
}

function setExerciseDone(dayIdx, exIdx, done, opts = {}) {
  const { recordUndo = true, startRest = true, rerender = true } = opts;
  const dayState = getDayState(dayIdx);

  if (!dayState.started && done) {
    dayState.started = true;
    dayState.startedAt = new Date().toISOString();
  }

  dayState.completed[exIdx] = done;
  dayState.completedAt[exIdx] = done ? new Date().toISOString() : null;

  if (done && recordUndo) {
    setLastUndo(dayIdx, exIdx);
  } else if (!done && appState.ui.lastUndo && appState.ui.lastUndo.dayIdx === dayIdx && appState.ui.lastUndo.exIdx === exIdx) {
    clearLastUndo();
  }

  saveAppState();

  if (done && startRest) startRestTimer(appState.rest.durationSec);
  if (done) triggerHaptic(25);

  if (rerender) render(dayIdx);
}

function toggleExercise(event, idx, exIdx) {
  event.stopPropagation();
  const dayState = getDayState(idx);
  const nextDoneState = !dayState.completed[exIdx];
  setExerciseDone(idx, exIdx, nextDoneState, { recordUndo: nextDoneState, startRest: nextDoneState, rerender: true });
}

function undoLastAction() {
  if (!canUndoLast()) {
    render(active);
    return;
  }

  const lu = appState.ui.lastUndo;
  if (!lu) return;

  setExerciseDone(lu.dayIdx, lu.exIdx, false, { recordUndo: false, startRest: false, rerender: false });
  clearLastUndo();
  saveAppState();
  resetRestTimer();
  triggerHaptic([15, 20, 15]);
  render(active);
}

function toggleDayStarted(dayIdx) {
  const dayState = getDayState(dayIdx);
  dayState.started = !dayState.started;
  if (dayState.started && !dayState.startedAt) dayState.startedAt = new Date().toISOString();
  if (!dayState.started) skipRestTimer(true);
  saveAppState();
  triggerHaptic(18);
  render(dayIdx);
}

function startDay(dayIdx) {
  const dayState = getDayState(dayIdx);
  if (!dayState.started) {
    dayState.started = true;
    dayState.startedAt = new Date().toISOString();
    saveAppState();
    triggerHaptic(18);
  }
  render(dayIdx);
}

function switchDay(dayIdx) {
  setActiveDay(dayIdx);
  render(active);
}

function setDayNotes(dayIdx, notes) {
  const dayState = getDayState(dayIdx);
  dayState.notes = notes;
  saveAppState();
}

function updateDayNotes(event, dayIdx) {
  setDayNotes(dayIdx, event.target.value);
}

function setSoundEnabled(event) {
  appState.ui.soundEnabled = Boolean(event.target.checked);
  saveAppState();
}

function setHapticsEnabled(event) {
  appState.ui.hapticsEnabled = Boolean(event.target.checked);
  saveAppState();
  if (appState.ui.hapticsEnabled) triggerHaptic(12);
}

function tagEl(t) {
  if (!t) return '';
  const cls = t === 'core' ? 'core' : t === 'cardio' ? 'cardio' : '';
  const lbl = t === 'finisher' ? 'FINISHER' : t.toUpperCase();
  return `<span class="m-tag ${cls}">${lbl}</span>`;
}

function openModal(dayIdx, focusExerciseIdx = null) {
  const d = DAYS[dayIdx];
  const dayState = getDayState(dayIdx);

  document.getElementById('mh-sys').textContent = `// WORKOUT LOG \u2014 ${d.idx}`;
  document.getElementById('mh-name').textContent = d.name;
  document.getElementById('mh-cat').textContent = d.cat;

  document.getElementById('modal-body').innerHTML = d.ex.map((e, i) => {
    const doneTag = dayState.completed[i] ? '<span class="m-tag done">DONE</span>' : tagEl(e.t);
    const focused = focusExerciseIdx === i ? ' focused' : '';
    return `<div class="m-ex${focused}">
      <div class="m-num">${String(i + 1).padStart(2, '0')}</div>
      <div>
        <div class="m-name">${escapeHtml(e.n)}</div>
        <div class="m-sets">${escapeHtml(e.s)}</div>
      </div>
      ${doneTag}
    </div>`;
  }).join('');

  document.getElementById('modal-bg').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-bg').classList.remove('open');
  document.body.style.overflow = '';
}

function clearProgress() {
  const shouldClear = window.confirm('Clear all saved workout progress? This resets v2 session data.');
  if (!shouldClear) return;

  const currentDay = active;
  appState = createInitialAppState(currentDay);
  clearLastUndo();
  resetRestTimer();

  try {
    localStorage.removeItem(OLD_STORAGE_KEY);
  } catch {
    // Ignore localStorage failures.
  }

  saveAppState();
  closeModal();
  render(currentDay);
}

function getUndoCountdown() {
  const lu = appState.ui.lastUndo;
  if (!lu) return 0;
  return Math.max(0, Math.ceil((UNDO_WINDOW_MS - (Date.now() - lu.at)) / 1000));
}

function updateSessionDock() {
  const dock = document.getElementById('session-dock');
  const startBtn = document.getElementById('dock-start-end-btn');
  const undoBtn = document.getElementById('dock-undo-btn');
  const plusRestBtn = document.getElementById('dock-plus-rest-btn');
  const skipRestBtn = document.getElementById('dock-skip-rest-btn');
  const meta = document.getElementById('dock-meta');
  if (!dock || !startBtn || !undoBtn || !plusRestBtn || !skipRestBtn || !meta) return;

  const dayState = getDayState(active);
  const canUndo = canUndoLast();
  const undoSeconds = getUndoCountdown();
  const restActive = isRestTimerActive();
  const done = doneCount(dayState);
  const total = DAYS[active].ex.length;

  startBtn.textContent = dayState.started ? 'END DAY' : 'START DAY';
  undoBtn.textContent = canUndo ? `UNDO (${undoSeconds})` : 'UNDO';
  undoBtn.disabled = !canUndo;
  plusRestBtn.disabled = false;
  skipRestBtn.disabled = !restActive;

  if (restActive && restTimerEndsAt) {
    meta.textContent = `REST ${formatTimer(restTimerEndsAt - Date.now())}`;
  } else {
    meta.textContent = `${done}/${total} DONE`;
  }

  dock.classList.toggle('with-rest', restActive);
}

function applyDayTheme(idx) {
  const accentHex = DAY_THEME_COLORS[idx] || DAY_THEME_COLORS[0];
  const accentRgb = hexToRgb(accentHex);
  const luminance = (0.299 * accentRgb.r + 0.587 * accentRgb.g + 0.114 * accentRgb.b) / 255;
  const ink = luminance > 0.62 ? { r: 0, g: 0, b: 0 } : { r: 232, g: 240, b: 247 };

  const root = document.documentElement;
  root.style.setProperty('--accent', accentHex);
  root.style.setProperty('--accent-rgb', `${accentRgb.r},${accentRgb.g},${accentRgb.b}`);
  root.style.setProperty('--accent-ink', `rgb(${ink.r},${ink.g},${ink.b})`);
  root.style.setProperty('--accent-ink-rgb', `${ink.r},${ink.g},${ink.b}`);
  root.style.setProperty('--accent-ink-muted', `rgba(${ink.r},${ink.g},${ink.b},0.58)`);
  root.style.setProperty('--accent-ink-border', `rgba(${ink.r},${ink.g},${ink.b},0.28)`);

  const themeMeta = document.querySelector('meta[name="theme-color"]');
  if (themeMeta) themeMeta.setAttribute('content', accentHex);
}

function render(dayIdx) {
  active = clampDayIndex(dayIdx);
  const d = DAYS[active];
  const dayState = getDayState(active);
  const completed = doneCount(dayState);
  const totalExercises = d.ex.length;
  const allDone = totalExercises > 0 && completed === totalExercises;
  const statusText = !dayState.started ? 'Not started' : allDone ? 'Completed' : 'In progress';
  const startBtnLabel = dayState.started ? 'End Day' : d.rest ? 'Start Rest Day' : 'Start Day';
  const notesOpen = dayState.notes.trim().length > 0 ? 'open' : '';

  applyDayTheme(active);

  document.getElementById('bg-text').textContent = d.name.toUpperCase();
  document.getElementById('hero-label').textContent = `${d.idx} \u2014 ${d.name.toUpperCase()}`;
  document.getElementById('hero-cat-badge').textContent = d.cat.toUpperCase();
  document.getElementById('hero-name').textContent = d.name;

  document.getElementById('hero-chips').innerHTML = `
    <div class="hchip"><div class="hchip-label">Duration</div><div class="hchip-val">${d.dur}</div></div>
    <div class="hchip"><div class="hchip-label">Volume</div><div class="hchip-val">${d.sets ? `${d.sets} sets` : '\u2014'}</div></div>
    <div class="hchip"><div class="hchip-label">Progress</div><div class="hchip-val">${completed}/${totalExercises}</div></div>
  `;

  document.getElementById('ex-panel').innerHTML =
    `<div class="ex-section-label">
      <span class="ex-section-title">EXERCISES // ${d.idx} ${d.cat.toUpperCase()}</span>
      <div class="day-controls">
        <span class="day-progress">${completed}/${totalExercises} done \u2022 ${statusText}</span>
        <button type="button" class="day-start-btn ${dayState.started ? 'started' : ''}" onclick="toggleDayStarted(${active})">${startBtnLabel}</button>
      </div>
    </div>
    <details class="notes-panel" ${notesOpen}>
      <summary>DAY NOTES + SETTINGS</summary>
      <div class="notes-body">
        <textarea class="notes-input" placeholder="Add quick training notes, form cues, RPE..." oninput="updateDayNotes(event, ${active})">${escapeHtml(dayState.notes)}</textarea>
        <div class="pref-row">
          <label class="pref-item"><input type="checkbox" ${appState.ui.hapticsEnabled ? 'checked' : ''} onchange="setHapticsEnabled(event)"> Haptics</label>
          <label class="pref-item"><input type="checkbox" ${appState.ui.soundEnabled ? 'checked' : ''} onchange="setSoundEnabled(event)"> Sound</label>
        </div>
      </div>
    </details>` +
    d.ex.map((e, i) => {
      const isDone = dayState.completed[i];
      return `<div class="ex-row ${isDone ? 'done' : ''}" style="animation-delay:${i * 0.03}s">
        <span class="ex-num">${String(i + 1).padStart(2, '0')}</span>
        <div class="ex-name">${escapeHtml(e.n)}</div>
        <div class="ex-sets">${escapeHtml(e.s)}</div>
        <div class="ex-actions">
          <button type="button" class="ex-complete-btn ${isDone ? 'done' : ''}" onclick="toggleExercise(event, ${active}, ${i})">${isDone ? 'Done' : 'Mark Done'}</button>
          <button type="button" class="ex-details-btn" onclick="openModal(${active}, ${i})">Details</button>
        </div>
      </div>`;
    }).join('');

  document.getElementById('week-list').innerHTML = DAYS.map((dd, i) => {
    const ddState = getDayState(i);
    const ddDone = doneCount(ddState);
    const ddAllDone = dd.ex.length > 0 && ddDone === dd.ex.length;
    const ddVol = ddState.started || ddDone > 0
      ? `${ddDone}/${dd.ex.length}`
      : dd.sets ? `${dd.sets}s` : dd.rest ? 'REST' : 'RUN';

    return `<button type="button" class="wi ${dd.rest ? 'rest' : ''} ${ddAllDone ? 'complete' : ''} ${i === active ? 'active' : ''}" onclick="switchDay(${i})">
      <span class="wi-idx">${dd.short}</span>
      <div class="wi-info">
        <div class="wi-name">${dd.name}</div>
        <div class="wi-cat">${dd.cat}</div>
      </div>
      <div class="wi-vol">${ddVol}</div>
    </button>`;
  }).join('');

  document.querySelectorAll('.day-tab').forEach((tab, i) => {
    tab.classList.toggle('active', i === active);
  });

  updateSessionDock();
  updateRestTimerWidget();
}

function updateNetworkStatus() {
  const badge = document.getElementById('network-status');
  if (!badge) return;

  const online = navigator.onLine;
  badge.textContent = online ? 'ONLINE' : 'OFFLINE';
  badge.classList.toggle('offline', !online);
}

function setInstallButtonVisible(visible) {
  const installBtn = document.getElementById('install-app-btn');
  if (!installBtn) return;
  installBtn.classList.toggle('hidden', !visible);
}

async function installApp() {
  if (!deferredInstallPrompt) return;

  deferredInstallPrompt.prompt();
  try {
    await deferredInstallPrompt.userChoice;
  } catch {
    // Ignore prompt flow errors.
  }

  deferredInstallPrompt = null;
  setInstallButtonVisible(false);
}

function shouldShowIosInstallHint() {
  const ua = navigator.userAgent.toLowerCase();
  const isIOS = /iphone|ipad|ipod/.test(ua);
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  const isCriOS = /crios|fxios|edgios/.test(ua);
  if (!isIOS || isStandalone || isCriOS) return false;

  try {
    return localStorage.getItem(IOS_HINT_DISMISSED_KEY) !== '1';
  } catch {
    return true;
  }
}

function hideIosInstallHint(persist = true) {
  const hint = document.getElementById('ios-install-hint');
  if (hint) hint.classList.add('hidden');

  if (!persist) return;
  try {
    localStorage.setItem(IOS_HINT_DISMISSED_KEY, '1');
  } catch {
    // Ignore localStorage failures.
  }
}

function initInstallUX() {
  const installBtn = document.getElementById('install-app-btn');
  const iosClose = document.getElementById('ios-hint-close-btn');
  const iosHint = document.getElementById('ios-install-hint');

  if (installBtn) installBtn.addEventListener('click', installApp);
  if (iosClose) iosClose.addEventListener('click', () => hideIosInstallHint(true));

  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    deferredInstallPrompt = event;
    setInstallButtonVisible(true);
  });

  window.addEventListener('appinstalled', () => {
    deferredInstallPrompt = null;
    setInstallButtonVisible(false);
    hideIosInstallHint(true);
  });

  if (iosHint && shouldShowIosInstallHint()) iosHint.classList.remove('hidden');
}

function initServiceWorker() {
  if (!('serviceWorker' in navigator)) return;

  const isLocalhost = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  const canRegister = location.protocol === 'https:' || isLocalhost;
  if (!canRegister) return;

  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {
      // Ignore SW registration errors; app should still work without PWA layer.
    });
  });
}

function initDayTabs() {
  document.querySelectorAll('.day-tab').forEach(tab => {
    tab.setAttribute('role', 'button');
    tab.setAttribute('tabindex', '0');

    const dayIdx = Number(tab.dataset.day);
    tab.addEventListener('click', () => switchDay(dayIdx));
    tab.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        switchDay(dayIdx);
      }
    });
  });
}

function initGlobalHandlers() {
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal-bg').addEventListener('click', event => {
    if (event.target === document.getElementById('modal-bg')) closeModal();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeModal();
  });

  const clearBtn = document.getElementById('clear-progress-btn');
  if (clearBtn) clearBtn.addEventListener('click', clearProgress);

  const restSkipBtn = document.getElementById('rest-skip-btn');
  if (restSkipBtn) restSkipBtn.addEventListener('click', () => skipRestTimer());

  const dockStartEndBtn = document.getElementById('dock-start-end-btn');
  if (dockStartEndBtn) dockStartEndBtn.addEventListener('click', () => toggleDayStarted(active));

  const dockUndoBtn = document.getElementById('dock-undo-btn');
  if (dockUndoBtn) dockUndoBtn.addEventListener('click', undoLastAction);

  const dockPlusRestBtn = document.getElementById('dock-plus-rest-btn');
  if (dockPlusRestBtn) dockPlusRestBtn.addEventListener('click', () => addRestTime(30));

  const dockSkipRestBtn = document.getElementById('dock-skip-rest-btn');
  if (dockSkipRestBtn) dockSkipRestBtn.addEventListener('click', () => skipRestTimer());

  window.addEventListener('online', updateNetworkStatus);
  window.addEventListener('offline', updateNetworkStatus);
}

function boot() {
  const jsDayToIdx = { 1: 0, 2: 1, 3: 2, 4: 3, 5: 4, 6: 5, 0: 6 };
  const defaultDay = jsDayToIdx[new Date().getDay()] ?? 0;

  appState = loadAppState(defaultDay);
  active = clampDayIndex(appState.activeDay);

  saveAppState();
  initDayTabs();
  initGlobalHandlers();
  initInstallUX();
  initServiceWorker();
  updateNetworkStatus();
  scheduleUndoExpiry();
  render(active);
}

boot();
