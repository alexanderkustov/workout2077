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

const STORAGE_KEY = 'splitSysWorkoutStateV1';
const DAY_THEME_COLORS = [
  '#00d9ff',
  '#ff2bd6',
  '#a6ff00',
  '#ffe600',
  '#00f5b8',
  '#6f7bff',
  '#ff4fb2',
];
const REST_TIMER_DURATION_MS = 90 * 1000;

let active = 0;
let workoutState = loadState();
let restTimerEndsAt = null;
let restTimerInterval = null;

function hexToRgb(hex) {
  const clean = hex.replace('#', '').trim();
  const full = clean.length === 3 ? clean.split('').map(ch => ch + ch).join('') : clean;
  const intVal = parseInt(full, 16);
  return {
    r: (intVal >> 16) & 255,
    g: (intVal >> 8) & 255,
    b: intVal & 255,
  };
}

function rgbToList(rgb) {
  return `${rgb.r},${rgb.g},${rgb.b}`;
}

function getInkForAccent(rgb) {
  const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
  // Bright accents need dark text; dark accents need light text.
  if (luminance > 0.62) return { r: 0, g: 0, b: 0 };
  return { r: 232, g: 240, b: 247 };
}

function applyDayTheme(idx) {
  const accentHex = DAY_THEME_COLORS[idx] || DAY_THEME_COLORS[0];
  const accentRgb = hexToRgb(accentHex);
  const inkRgb = getInkForAccent(accentRgb);
  const root = document.documentElement;

  root.style.setProperty('--accent', accentHex);
  root.style.setProperty('--accent-rgb', rgbToList(accentRgb));
  root.style.setProperty('--accent-ink', `rgb(${rgbToList(inkRgb)})`);
  root.style.setProperty('--accent-ink-rgb', rgbToList(inkRgb));
  root.style.setProperty('--accent-ink-muted', `rgba(${rgbToList(inkRgb)},0.58)`);
  root.style.setProperty('--accent-ink-border', `rgba(${rgbToList(inkRgb)},0.28)`);
}

function formatTimer(ms) {
  const totalSeconds = Math.max(0, Math.ceil(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function clearRestTimerInterval() {
  if (!restTimerInterval) return;
  clearInterval(restTimerInterval);
  restTimerInterval = null;
}

function updateRestTimerWidget() {
  const widget = document.getElementById('rest-timer-widget');
  const title = document.getElementById('rest-title');
  const time = document.getElementById('rest-time');
  const fill = document.getElementById('rest-fill');
  const skipBtn = document.getElementById('rest-skip-btn');
  if (!widget || !title || !time || !fill || !skipBtn) return;

  const remaining = restTimerEndsAt ? Math.max(0, restTimerEndsAt - Date.now()) : 0;
  const activeTimer = remaining > 0;
  const progress = activeTimer ? remaining / REST_TIMER_DURATION_MS : 0;

  widget.classList.toggle('active', activeTimer);
  widget.classList.toggle('done', !activeTimer && !!restTimerEndsAt);
  title.textContent = activeTimer ? 'REST TIMER' : restTimerEndsAt ? 'REST COMPLETE' : 'REST TIMER';
  time.textContent = formatTimer(remaining);
  fill.style.width = `${Math.max(0, Math.min(100, progress * 100))}%`;
  skipBtn.disabled = !activeTimer;
}

function startRestTimer() {
  restTimerEndsAt = Date.now() + REST_TIMER_DURATION_MS;
  clearRestTimerInterval();
  updateRestTimerWidget();

  restTimerInterval = setInterval(() => {
    const remaining = restTimerEndsAt ? restTimerEndsAt - Date.now() : 0;
    if (remaining <= 0) {
      clearRestTimerInterval();
      updateRestTimerWidget();
      return;
    }
    updateRestTimerWidget();
  }, 200);
}

function skipRestTimer() {
  if (!restTimerEndsAt) return;
  restTimerEndsAt = Date.now();
  clearRestTimerInterval();
  updateRestTimerWidget();
}

function resetRestTimer() {
  restTimerEndsAt = null;
  clearRestTimerInterval();
  updateRestTimerWidget();
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(workoutState));
  } catch {
    // Ignore storage failures (private mode / storage blocked)
  }
}

function ensureDayState(idx) {
  const key = String(idx);
  const existing = workoutState[key] || {};
  const completed = Array.isArray(existing.completed)
    ? existing.completed.slice(0, DAYS[idx].ex.length).map(Boolean)
    : [];

  while (completed.length < DAYS[idx].ex.length) completed.push(false);

  const next = {
    started: Boolean(existing.started),
    startedAt: existing.startedAt || null,
    completed,
  };
  workoutState[key] = next;
  return next;
}

function doneCount(dayState) {
  return dayState.completed.filter(Boolean).length;
}

function tagEl(t) {
  if (!t) return '';
  const cls = t === 'core' ? 'core' : t === 'cardio' ? 'cardio' : '';
  const lbl = t === 'finisher' ? 'FINISHER' : t.toUpperCase();
  return `<span class="m-tag ${cls}">${lbl}</span>`;
}

function startDay(idx) {
  const dayState = ensureDayState(idx);
  if (!dayState.started) {
    dayState.started = true;
    dayState.startedAt = new Date().toISOString();
    saveState();
  }
  active = idx;
  render(idx);
}

function toggleExercise(event, idx, exIdx) {
  event.stopPropagation();
  const dayState = ensureDayState(idx);

  if (!dayState.started) {
    dayState.started = true;
    dayState.startedAt = new Date().toISOString();
  }

  const nextDoneState = !dayState.completed[exIdx];
  dayState.completed[exIdx] = nextDoneState;
  if (nextDoneState) startRestTimer();

  saveState();
  render(idx);
}

function render(idx) {
  const d = DAYS[idx];
  const dayState = ensureDayState(idx);
  const completed = doneCount(dayState);
  const totalExercises = d.ex.length;
  const allDone = totalExercises > 0 && completed === totalExercises;
  const statusText = !dayState.started ? 'Not started' : allDone ? 'Completed' : 'In progress';
  const startBtnLabel = dayState.started ? 'Day Started' : d.rest ? 'Start Rest Day' : 'Start Day';
  applyDayTheme(idx);

  document.getElementById('bg-text').textContent = d.name.toUpperCase();
  document.getElementById('hero-label').textContent = `${d.idx} \u2014 ${d.name.toUpperCase()}`;
  document.getElementById('hero-cat-badge').textContent = d.cat.toUpperCase();
  document.getElementById('hero-name').textContent = d.name;

  const chipsHtml = `
    <div class="hchip"><div class="hchip-label">Duration</div><div class="hchip-val">${d.dur}</div></div>
    <div class="hchip"><div class="hchip-label">Volume</div><div class="hchip-val">${d.sets ? d.sets + ' sets' : '\u2014'}</div></div>
    <div class="hchip"><div class="hchip-label">Progress</div><div class="hchip-val">${completed}/${totalExercises}</div></div>
  `;
  document.getElementById('hero-chips').innerHTML = chipsHtml;

  const bbHtml = `
    <div class="bb-chip"><div class="bb-label">Duration</div><div class="bb-val">${d.dur}</div></div>
    <div class="bb-chip"><div class="bb-label">Volume</div><div class="bb-val">${d.sets ? d.sets + 's' : '\u2014'}</div></div>
    <div class="bb-chip"><div class="bb-label">Progress</div><div class="bb-val">${completed}/${totalExercises}</div></div>
  `;
  document.getElementById('bottom-bar-inner').innerHTML = bbHtml;

  document.getElementById('ex-panel').innerHTML =
    `<div class="ex-section-label">
      <span class="ex-section-title">EXERCISES // ${d.idx} ${d.cat.toUpperCase()}</span>
      <div class="day-controls">
        <span class="day-progress">${completed}/${totalExercises} done \u2022 ${statusText}</span>
        <button type="button" class="day-start-btn ${dayState.started ? 'started' : ''}" onclick="startDay(${idx})">${startBtnLabel}</button>
      </div>
    </div>` +
    d.ex.map((e, i) => {
      const isDone = dayState.completed[i];
      return `<div class="ex-row ${isDone ? 'done' : ''}" style="animation-delay:${i * 0.03}s" onclick="openModal(${idx})">
        <span class="ex-num">${String(i + 1).padStart(2,'0')}</span>
        <div class="ex-name">${e.n}</div>
        <div class="ex-sets">${e.s}</div>
        <button type="button" class="ex-complete-btn ${isDone ? 'done' : ''}" onclick="toggleExercise(event, ${idx}, ${i})">${isDone ? 'Done' : 'Mark Done'}</button>
      </div>`;
    }).join('');

  document.getElementById('week-list').innerHTML = DAYS.map((dd, i) => {
    const ddState = ensureDayState(i);
    const ddDone = doneCount(ddState);
    const ddAllDone = dd.ex.length > 0 && ddDone === dd.ex.length;
    const ddVol = ddState.started || ddDone > 0
      ? `${ddDone}/${dd.ex.length}`
      : dd.sets ? dd.sets + 's' : dd.rest ? 'REST' : 'RUN';
    return `<div class="wi ${dd.rest ? 'rest' : ''} ${ddAllDone ? 'complete' : ''} ${i === idx ? 'active' : ''}" onclick="switchDay(${i})">
      <span class="wi-idx">${dd.short}</span>
      <div class="wi-info">
        <div class="wi-name">${dd.name}</div>
        <div class="wi-cat">${dd.cat}</div>
      </div>
      <div class="wi-vol">${ddVol}</div>
    </div>`;
  }).join('');

  document.querySelectorAll('.day-tab').forEach((t, i) => t.classList.toggle('active', i === idx));
}

function switchDay(i) {
  active = i;
  render(i);
}

document.querySelectorAll('.day-tab').forEach(t => {
  t.addEventListener('click', () => switchDay(+t.dataset.day));
});

function openModal(idx) {
  const d = DAYS[idx];
  const dayState = ensureDayState(idx);
  document.getElementById('mh-sys').textContent = `// WORKOUT LOG \u2014 ${d.idx}`;
  document.getElementById('mh-name').textContent = d.name;
  document.getElementById('mh-cat').textContent = d.cat;
  document.getElementById('modal-body').innerHTML = d.ex.map((e, i) => {
    const doneTag = dayState.completed[i] ? '<span class="m-tag done">DONE</span>' : tagEl(e.t);
    return `<div class="m-ex">
      <div class="m-num">${String(i+1).padStart(2,'0')}</div>
      <div>
        <div class="m-name">${e.n}</div>
        <div class="m-sets">${e.s}</div>
      </div>
      ${doneTag}
    </div>`;
  }).join('');
  document.getElementById('modal-bg').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function clearProgress() {
  const shouldClear = window.confirm('Clear all saved workout progress?');
  if (!shouldClear) return;

  workoutState = {};
  resetRestTimer();
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Ignore storage failures
  }

  closeModal();
  render(active);
}

function closeModal() {
  document.getElementById('modal-bg').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-bg').addEventListener('click', e => {
  if (e.target === document.getElementById('modal-bg')) closeModal();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

const clearProgressBtn = document.getElementById('clear-progress-btn');
if (clearProgressBtn) {
  clearProgressBtn.addEventListener('click', clearProgress);
}

const restSkipBtn = document.getElementById('rest-skip-btn');
if (restSkipBtn) {
  restSkipBtn.addEventListener('click', skipRestTimer);
}

// Map JS day (0=Sun, 1=Mon ... 6=Sat) to our DAYS array index
const jsDayToIdx = { 1:0, 2:1, 3:2, 4:3, 5:4, 6:5, 0:6 };
const todayIdx = jsDayToIdx[new Date().getDay()];
active = todayIdx;
render(todayIdx);
updateRestTimerWidget();
