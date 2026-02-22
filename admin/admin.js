const ROUTINE_PROFILE_STORAGE_KEY = 'splitSysRoutineProfileV1';
const ROUTINE_PROFILE_VERSION = 1;
const DAY_NAMES = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const DAY_SHORT_NAMES = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const BUILTIN_RAW_DAYS = [
  { name: 'Monday', short: 'Mon', cat: 'Upper Body', idx: 'DAY 01', sets: 32, dur: '80 min',
    ex: [
      { n: 'Flat Barbell Bench Press', s: '60 / 80 / 90 / 95 kg × 6–8 reps', t: '' },
      { n: 'Incline Dumbbell Press', s: '24 / 28 / 30 / 30 kg × 8–10 reps', t: '' },
      { n: 'Dips (Chest Focus)', s: '3 × 8–10 reps — bodyweight', t: '' },
      { n: 'Cable Fly Crossovers', s: '12.5 / 15 / 17.5 kg × 12–15 reps', t: '' },
      { n: 'Overhead Press (Barbell)', s: '40 / 50 / 55 / 55 kg × 6–8 reps', t: '' },
      { n: 'Lateral Raise (Dumbbell)', s: '8 / 10 / 12 / 12 kg × 15–20 reps', t: '' },
      { n: 'Tricep Pushdown (Cable)', s: '25 / 30 / 35 kg × 12–15 reps', t: '' },
      { n: 'Dead Hang', s: '1 × 60 sec', t: 'finisher' },
    ] },
  { name: 'Tuesday', short: 'Tue', cat: 'Lower Body', idx: 'DAY 02', sets: 30, dur: '75 min',
    ex: [
      { n: 'Hack Squat (Machine)', s: '80 / 100 / 110 / 110 kg × 10 reps', t: '' },
      { n: 'Leg Press (Machine)', s: '180 / 220 / 230 kg × 12 reps', t: '' },
      { n: 'Leg Extensions (Machine)', s: '40 / 50 / 55 kg × 12–15 reps', t: '' },
      { n: 'Walking Lunges (Dumbbell)', s: '15 / 18 / 20 kg × 12 reps / leg', t: '' },
      { n: 'Seated Leg Curl (Machine)', s: '55 / 60 / 65 kg × 12 reps', t: '' },
      { n: 'Lying Leg Curl (Machine)', s: '35 / 40 / 45 kg × 12 reps', t: '' },
      { n: 'Standing Calf Raise', s: '80 / 90 / 95 / 95 kg × 12–15 reps', t: '' },
      { n: 'Dead Hang', s: '1 × 60 sec', t: 'finisher' },
    ] },
  { name: 'Wednesday', short: 'Wed', cat: 'Pull — Back & Biceps', idx: 'DAY 03', sets: 30, dur: '75 min',
    ex: [
      { n: 'Weighted Pull-Ups (Wide Grip)', s: '0 / 5 / 10 / 10 kg × 6–8 reps', t: '' },
      { n: 'Barbell Row', s: '60 / 80 / 90 / 90 kg × 8–10 reps', t: '' },
      { n: 'Seated Cable Row', s: '50 / 60 / 65 kg × 10–12 reps', t: '' },
      { n: 'Single Arm Lat Pulldown', s: '30 / 35 / 35 kg × 10–12 reps', t: '' },
      { n: 'Face Pulls (Cable)', s: '20 / 25 / 25 kg × 15–20 reps', t: '' },
      { n: 'Barbell Curl', s: '25 / 30 / 30 / 30 kg × 8–10 reps', t: '' },
      { n: 'Hammer Curl (Dumbbell)', s: '12 / 15 / 15 kg × 10–12 reps', t: '' },
      { n: 'Dead Hang', s: '1 × 60 sec', t: 'finisher' },
    ] },
  { name: 'Thursday', short: 'Thu', cat: 'Delts + Arms', idx: 'DAY 04', sets: 34, dur: '90 min',
    ex: [
      { n: 'Dumbbell Shoulder Press', s: '20 / 24 / 26 / 26 kg × 10–12 reps', t: '' },
      { n: 'Lateral Raise (Dumbbell)', s: '8 / 10 / 12 / 12 / 12 kg × 15–20 reps', t: '' },
      { n: 'Rear Delt Cable Fly', s: '10 / 12.5 / 15 / 15 kg × 15 / arm', t: '' },
      { n: 'Overhead Tricep Extension', s: '20 / 24 / 26 / 26 kg × 10–12 reps', t: '' },
      { n: 'Tricep Pushdown (Cable)', s: '25 / 30 / 35 / 35 kg × 12–15 reps', t: '' },
      { n: 'Dips (Tricep Focus)', s: '3 × 10–12 reps — bodyweight', t: '' },
      { n: 'Preacher Curl (Barbell)', s: '25 / 30 / 30 kg × 10–12 reps', t: '' },
      { n: 'Cable Curl', s: '15 / 20 / 20 kg × 12–15 reps', t: '' },
      { n: 'Hanging Leg Raise', s: '3 × 9–12 reps', t: 'core' },
      { n: 'Dead Hang', s: '1 × 60 sec', t: 'finisher' },
    ] },
  { name: 'Friday', short: 'Fri', cat: 'Posterior Chain + Core', idx: 'DAY 05', sets: 18, dur: '70 min',
    ex: [
      { n: 'Romanian Deadlift (Barbell)', s: '60 / 80 / 100 / 100 kg × 8 reps', t: '' },
      { n: 'Hip Thrust (Barbell)', s: '80 / 100 / 120 kg × 10–12 reps', t: '' },
      { n: 'Stiff Leg Deadlift (Barbell)', s: '60 / 70 / 70 kg × 10 reps', t: '' },
      { n: 'Hanging Leg Raise', s: '3 × 10–12 reps', t: 'core' },
      { n: 'Cable Crunches', s: '30 / 35 / 35 kg × 15 reps', t: 'core' },
      { n: 'Treadmill / Cardio', s: '15–20 min steady state', t: 'cardio' },
    ] },
  { name: 'Saturday', short: 'Sat', cat: 'Cardio', idx: 'DAY 06', sets: null, dur: '~30 min',
    ex: [
      { n: '5km Run', s: 'Steady state — Zone 2', t: 'cardio' },
      { n: 'Warm-up Walk', s: '5 min — pre run', t: '' },
      { n: 'Cool-down Stretch', s: '10 min — post run', t: '' },
    ] },
  { name: 'Sunday', short: 'Sun', cat: 'Rest Day', idx: 'DAY 07', sets: null, dur: '—', rest: true,
    ex: [{ n: 'Rest & Recovery', s: 'Full day off — sleep, eat, recover', t: '' }] },
];

let routineState = { version: ROUTINE_PROFILE_VERSION, days: [] };
let selectedNode = { type: 'root', dayIdx: null, exIdx: null };

function dayIndexLabel(dayIdx) {
  return `DAY ${String(dayIdx + 1).padStart(2, '0')}`;
}

function isPlainObject(value) {
  return Boolean(value && typeof value === 'object' && !Array.isArray(value));
}

function cloneJson(value) {
  return JSON.parse(JSON.stringify(value));
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function normalizePlanSet(rawSet, contextLabel) {
  if (!isPlainObject(rawSet)) throw new Error(`${contextLabel}: each plan set must be an object.`);
  const reps = rawSet.reps;
  if (!isPlainObject(reps)) throw new Error(`${contextLabel}: plan set is missing reps object.`);

  const targetNum = Number(reps.target);
  if (!Number.isFinite(targetNum) || targetNum <= 0) throw new Error(`${contextLabel}: reps.target must be a positive number.`);
  const target = Math.round(targetNum);

  const minNum = reps.min == null ? null : Number(reps.min);
  const maxNum = reps.max == null ? null : Number(reps.max);
  const min = minNum == null ? null : Math.max(1, Math.round(minNum));
  const max = maxNum == null ? null : Math.max(1, Math.round(maxNum));

  if (min != null && min > target) throw new Error(`${contextLabel}: reps.min cannot be greater than reps.target.`);
  if (max != null && max < target) throw new Error(`${contextLabel}: reps.max cannot be less than reps.target.`);

  const load = rawSet.load == null ? null : String(rawSet.load).trim();
  return {
    load: load || null,
    reps: { target, min, max },
  };
}

function normalizeExercise(rawExercise, contextLabel) {
  if (!isPlainObject(rawExercise)) throw new Error(`${contextLabel}: exercise must be an object.`);
  if (typeof rawExercise.n !== 'string' || !rawExercise.n.trim()) throw new Error(`${contextLabel}: exercise.n is required.`);
  if (typeof rawExercise.s !== 'string' || !rawExercise.s.trim()) throw new Error(`${contextLabel}: exercise.s is required.`);

  const normalized = {
    n: rawExercise.n.trim(),
    s: rawExercise.s.trim(),
    t: typeof rawExercise.t === 'string' ? rawExercise.t.trim() : '',
    d: typeof rawExercise.d === 'string'
      ? rawExercise.d
      : typeof rawExercise.desc === 'string'
        ? rawExercise.desc
        : '',
  };

  if (rawExercise.p != null) {
    if (!isPlainObject(rawExercise.p) || !Array.isArray(rawExercise.p.sets) || rawExercise.p.sets.length === 0) {
      throw new Error(`${contextLabel}: exercise.p.sets must be a non-empty array when provided.`);
    }
    normalized.p = {
      sets: rawExercise.p.sets.map((set, idx) => normalizePlanSet(set, `${contextLabel} plan set ${idx + 1}`)),
    };
  }

  return normalized;
}

function normalizeDay(rawDay, dayIdx) {
  if (!isPlainObject(rawDay)) throw new Error(`Day ${dayIdx + 1} must be an object.`);
  if (!Array.isArray(rawDay.ex) || rawDay.ex.length === 0) throw new Error(`Day ${dayIdx + 1} must include at least one exercise in ex[].`);

  const rest = Boolean(rawDay.rest);
  let sets = null;
  if (rawDay.sets === null) {
    sets = null;
  } else if (rawDay.sets != null) {
    const parsed = Number(rawDay.sets);
    if (!Number.isFinite(parsed) || parsed < 0) throw new Error(`Day ${dayIdx + 1}: sets must be a positive number or null.`);
    sets = Math.round(parsed);
  }

  return {
    name: DAY_NAMES[dayIdx],
    short: DAY_SHORT_NAMES[dayIdx],
    cat: typeof rawDay.cat === 'string' && rawDay.cat.trim() ? rawDay.cat.trim() : `Day ${dayIdx + 1}`,
    idx: dayIndexLabel(dayIdx),
    sets,
    dur: typeof rawDay.dur === 'string' && rawDay.dur.trim() ? rawDay.dur.trim() : '—',
    rest,
    ex: rawDay.ex.map((exercise, exIdx) => normalizeExercise(exercise, `Day ${dayIdx + 1}, exercise ${exIdx + 1}`)),
  };
}

function sanitizeRoutineProfilePayload(rawInput) {
  const daysCandidate = Array.isArray(rawInput) ? rawInput : rawInput?.days;
  if (!Array.isArray(daysCandidate)) throw new Error('Input must be a JSON array or object with days[].');
  if (daysCandidate.length !== DAY_NAMES.length) throw new Error('days must contain exactly 7 entries.');

  const days = daysCandidate.map((day, dayIdx) => normalizeDay(day, dayIdx));
  return {
    version: ROUTINE_PROFILE_VERSION,
    days,
  };
}

function parseStoredRoutineProfile() {
  try {
    const raw = localStorage.getItem(ROUTINE_PROFILE_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!isPlainObject(parsed) || parsed.version !== ROUTINE_PROFILE_VERSION || !Array.isArray(parsed.days)) return null;
    return sanitizeRoutineProfilePayload(parsed.days);
  } catch {
    return null;
  }
}

function getStatusEl() {
  return document.getElementById('admin-status');
}

function getRawEditorEl() {
  return document.getElementById('routine-json-input');
}

function setStatus(message, type = 'info') {
  const statusEl = getStatusEl();
  if (!statusEl) return;
  statusEl.textContent = message;
  statusEl.classList.remove('success', 'error');
  if (type === 'success') statusEl.classList.add('success');
  if (type === 'error') statusEl.classList.add('error');
}

function syncRawEditor(force = false) {
  const editor = getRawEditorEl();
  if (!editor) return;
  if (!force && document.activeElement === editor) return;
  editor.value = JSON.stringify({ days: routineState.days }, null, 2);
}

function renderDayPreview(days) {
  const list = document.getElementById('day-preview-list');
  if (!list) return;

  list.innerHTML = days.map((day, idx) => `
    <li>
      <span class="preview-day">DAY ${idx + 1} • ${escapeHtml(day.name)}</span>
      <span class="preview-cat">${escapeHtml(day.cat)}</span>
      <span class="preview-meta">${day.ex.length} exercises • ${escapeHtml(day.dur)}</span>
    </li>
  `).join('');
}

function computeSummary(days) {
  const exerciseCount = days.reduce((sum, day) => sum + day.ex.length, 0);
  const restDays = days.filter(day => day.rest).length;
  return { dayCount: days.length, exerciseCount, restDays };
}

function isSelectedRoot() {
  return selectedNode.type === 'root';
}

function isSelectedDay(dayIdx) {
  return selectedNode.type === 'day' && selectedNode.dayIdx === dayIdx;
}

function isSelectedExercise(dayIdx, exIdx) {
  return selectedNode.type === 'exercise' && selectedNode.dayIdx === dayIdx && selectedNode.exIdx === exIdx;
}

function normalizeSelection() {
  if (!Array.isArray(routineState.days) || routineState.days.length === 0) {
    selectedNode = { type: 'root', dayIdx: null, exIdx: null };
    return;
  }

  if (selectedNode.type === 'root') return;

  const day = routineState.days[selectedNode.dayIdx];
  if (!day) {
    selectedNode = { type: 'root', dayIdx: null, exIdx: null };
    return;
  }

  if (selectedNode.type === 'day') {
    selectedNode.exIdx = null;
    return;
  }

  if (!day.ex[selectedNode.exIdx]) {
    selectedNode = { type: 'day', dayIdx: selectedNode.dayIdx, exIdx: null };
  }
}

function updateDerivedViews() {
  renderGraph();
  renderDayPreview(routineState.days);
  syncRawEditor();
}

function renderGraph() {
  const canvas = document.getElementById('graph-canvas');
  if (!canvas) return;

  const days = routineState.days;
  const summary = computeSummary(days);

  canvas.innerHTML = `
    <button type="button" class="json-node root-node ${isSelectedRoot() ? 'selected' : ''}" data-action="select-root">
      <span class="node-k">root</span>
      <span class="node-v">routine.days[${summary.dayCount}]</span>
      <div class="node-pills">
        <span class="node-pill">${summary.exerciseCount} exercises</span>
        <span class="node-pill">${summary.restDays} rest days</span>
      </div>
    </button>
    ${days.map((day, dayIdx) => `
      <section class="day-branch">
        <div class="day-node-wrap">
          <button type="button" class="json-node day-node ${isSelectedDay(dayIdx) ? 'selected' : ''}" data-action="select-day" data-day-idx="${dayIdx}">
            <span class="node-k">day[${dayIdx + 1}] ${escapeHtml(day.name)}</span>
            <span class="node-v">${escapeHtml(day.cat)}</span>
            <span class="node-meta">${day.ex.length} exercises • ${escapeHtml(day.dur)} • rest: ${day.rest ? 'true' : 'false'}</span>
          </button>
          <button type="button" class="add-ex-btn" data-action="add-exercise" data-day-idx="${dayIdx}">+ Exercise</button>
        </div>
        <div class="exercise-list">
          ${day.ex.map((exercise, exIdx) => `
            <div class="exercise-item">
              <button type="button" class="json-node exercise-node ${isSelectedExercise(dayIdx, exIdx) ? 'selected' : ''}" data-action="select-exercise" data-day-idx="${dayIdx}" data-ex-idx="${exIdx}">
                <span class="node-k">ex[${exIdx + 1}] ${escapeHtml(exercise.t || 'lift')}</span>
                <span class="node-v">${escapeHtml(exercise.n)}</span>
                <span class="node-meta">${escapeHtml(exercise.s)}</span>
              </button>
            </div>
          `).join('')}
        </div>
      </section>
    `).join('')}
  `;
}

function selectRoot() {
  selectedNode = { type: 'root', dayIdx: null, exIdx: null };
  renderGraph();
  renderInspector();
}

function selectDay(dayIdx) {
  selectedNode = { type: 'day', dayIdx, exIdx: null };
  renderGraph();
  renderInspector();
}

function selectExercise(dayIdx, exIdx) {
  selectedNode = { type: 'exercise', dayIdx, exIdx };
  renderGraph();
  renderInspector();
}

function buildNewExerciseForDay(dayIdx) {
  const day = routineState.days[dayIdx];
  if (day?.rest) {
    return { n: 'Recovery Notes', s: 'Light movement / mobility / recovery', t: '', d: '' };
  }
  return { n: `Exercise ${day.ex.length + 1}`, s: '3 × 10 reps', t: '', d: '' };
}

function addExercise(dayIdx) {
  const day = routineState.days[dayIdx];
  if (!day) return;
  day.ex.push(buildNewExerciseForDay(dayIdx));
  selectExercise(dayIdx, day.ex.length - 1);
  updateDerivedViews();
  setStatus(`Added exercise to day ${dayIdx + 1}.`, 'success');
}

function swapExercises(dayIdx, fromIdx, toIdx) {
  const day = routineState.days[dayIdx];
  if (!day || !day.ex[fromIdx] || !day.ex[toIdx]) return;
  const next = day.ex[fromIdx];
  day.ex[fromIdx] = day.ex[toIdx];
  day.ex[toIdx] = next;
  selectedNode = { type: 'exercise', dayIdx, exIdx: toIdx };
  renderGraph();
  renderInspector();
  syncRawEditor();
  renderDayPreview(routineState.days);
}

function removeExercise(dayIdx, exIdx) {
  const day = routineState.days[dayIdx];
  if (!day || !day.ex[exIdx]) return;
  if (day.ex.length <= 1) {
    setStatus(`Day ${dayIdx + 1} must keep at least one exercise.`, 'error');
    return;
  }
  day.ex.splice(exIdx, 1);
  selectedNode = { type: 'day', dayIdx, exIdx: null };
  renderGraph();
  renderInspector();
  syncRawEditor();
  renderDayPreview(routineState.days);
  setStatus(`Removed exercise from day ${dayIdx + 1}.`, 'success');
}

function renderRootInspector(container) {
  const summary = computeSummary(routineState.days);
  container.innerHTML = `
    <div class="inspector-card">
      <div class="inspector-headline">Root Node</div>
      <div class="inspector-sub">routine.days[]</div>
      <div class="summary-grid">
        <div class="summary-item"><span class="summary-key">Days</span><span class="summary-val">${summary.dayCount}</span></div>
        <div class="summary-item"><span class="summary-key">Exercises</span><span class="summary-val">${summary.exerciseCount}</span></div>
        <div class="summary-item"><span class="summary-key">Rest Days</span><span class="summary-val">${summary.restDays}</span></div>
        <div class="summary-item"><span class="summary-key">Storage Key</span><span class="summary-val">${ROUTINE_PROFILE_STORAGE_KEY}</span></div>
      </div>
      <div class="inline-actions">
        <button type="button" class="admin-btn" id="jump-first-day-btn">Open Day 1</button>
      </div>
      <div class="inline-note">Pick a Day or Exercise node in the graph to edit its fields.</div>
    </div>
  `;

  const jumpBtn = document.getElementById('jump-first-day-btn');
  if (jumpBtn) jumpBtn.addEventListener('click', () => selectDay(0));
}

function renderDayInspector(container, dayIdx) {
  const day = routineState.days[dayIdx];
  if (!day) {
    container.innerHTML = '<div class="empty-inspector">Day node not found.</div>';
    return;
  }

  container.innerHTML = `
    <div class="inspector-card">
      <div class="inspector-headline">Day ${dayIdx + 1} • ${escapeHtml(day.name)}</div>
      <div class="inspector-sub">${escapeHtml(day.idx)} • ${escapeHtml(day.short)}</div>
      <div class="field-grid">
        <label class="field">
          <span>Category (cat)</span>
          <input type="text" id="day-cat-input" value="${escapeHtml(day.cat)}">
        </label>
        <label class="field">
          <span>Duration (dur)</span>
          <input type="text" id="day-dur-input" value="${escapeHtml(day.dur)}">
        </label>
        <label class="field">
          <span>Sets (sets, blank = null)</span>
          <input type="number" min="0" step="1" id="day-sets-input" value="${day.sets == null ? '' : escapeHtml(day.sets)}">
        </label>
        <label class="field check">
          <input type="checkbox" id="day-rest-input" ${day.rest ? 'checked' : ''}>
          <span>Rest Day (rest)</span>
        </label>
      </div>
      <div class="inline-actions">
        <button type="button" class="admin-btn" id="select-first-ex-btn">Open First Exercise</button>
      </div>
      <div class="inline-note">Name, short label, and day index are fixed by day position.</div>
    </div>
  `;

  const catInput = document.getElementById('day-cat-input');
  const durInput = document.getElementById('day-dur-input');
  const setsInput = document.getElementById('day-sets-input');
  const restInput = document.getElementById('day-rest-input');
  const firstExerciseBtn = document.getElementById('select-first-ex-btn');

  if (catInput) {
    catInput.addEventListener('input', event => {
      day.cat = event.target.value;
      updateDerivedViews();
    });
  }

  if (durInput) {
    durInput.addEventListener('input', event => {
      day.dur = event.target.value;
      updateDerivedViews();
    });
  }

  if (setsInput) {
    setsInput.addEventListener('input', event => {
      const raw = String(event.target.value || '').trim();
      if (!raw) {
        day.sets = null;
      } else {
        const parsed = Number(raw);
        day.sets = Number.isFinite(parsed) && parsed >= 0 ? Math.round(parsed) : day.sets;
      }
      updateDerivedViews();
    });
  }

  if (restInput) {
    restInput.addEventListener('change', event => {
      day.rest = Boolean(event.target.checked);
      updateDerivedViews();
    });
  }

  if (firstExerciseBtn) {
    firstExerciseBtn.addEventListener('click', () => selectExercise(dayIdx, 0));
  }
}

function applyExercisePlanJson(dayIdx, exIdx) {
  const day = routineState.days[dayIdx];
  const exercise = day?.ex?.[exIdx];
  const planInput = document.getElementById('exercise-plan-input');
  if (!exercise || !planInput) return;

  const raw = String(planInput.value || '').trim();
  if (!raw) {
    delete exercise.p;
    updateDerivedViews();
    setStatus('Cleared plan sets for selected exercise.', 'success');
    return;
  }

  const parsed = JSON.parse(raw);
  if (!isPlainObject(parsed) || !Array.isArray(parsed.sets) || parsed.sets.length === 0) {
    throw new Error('Plan JSON must be an object with non-empty sets array.');
  }

  exercise.p = {
    sets: parsed.sets.map((set, idx) => normalizePlanSet(set, `Selected exercise plan set ${idx + 1}`)),
  };
  updateDerivedViews();
  setStatus('Updated plan sets JSON for selected exercise.', 'success');
}

function renderExerciseInspector(container, dayIdx, exIdx) {
  const day = routineState.days[dayIdx];
  const exercise = day?.ex?.[exIdx];
  if (!day || !exercise) {
    container.innerHTML = '<div class="empty-inspector">Exercise node not found.</div>';
    return;
  }

  const planJson = exercise.p ? JSON.stringify(exercise.p, null, 2) : '';

  container.innerHTML = `
    <div class="inspector-card">
      <div class="inspector-headline">Exercise ${exIdx + 1} • Day ${dayIdx + 1}</div>
      <div class="inspector-sub">${escapeHtml(day.name)} • ${escapeHtml(day.cat)}</div>
      <div class="field-grid">
        <label class="field">
          <span>Name (n)</span>
          <input type="text" id="exercise-name-input" value="${escapeHtml(exercise.n)}">
        </label>
        <label class="field">
          <span>Summary (s)</span>
          <textarea id="exercise-summary-input">${escapeHtml(exercise.s)}</textarea>
        </label>
        <label class="field short">
          <span>Tag (t)</span>
          <input type="text" id="exercise-tag-input" value="${escapeHtml(exercise.t || '')}">
        </label>
        <label class="field">
          <span>Description (d)</span>
          <textarea id="exercise-description-input">${escapeHtml(exercise.d || '')}</textarea>
        </label>
        <label class="field">
          <span>Plan JSON (p, optional)</span>
          <textarea id="exercise-plan-input">${escapeHtml(planJson)}</textarea>
        </label>
      </div>
      <div class="inline-actions">
        <button type="button" class="admin-btn" id="apply-plan-btn">Apply Plan JSON</button>
        <button type="button" class="admin-btn" id="clear-plan-btn">Clear Plan</button>
        <button type="button" class="admin-btn" id="move-ex-up-btn" ${exIdx === 0 ? 'disabled' : ''}>Move Up</button>
        <button type="button" class="admin-btn" id="move-ex-down-btn" ${exIdx === day.ex.length - 1 ? 'disabled' : ''}>Move Down</button>
        <button type="button" class="admin-btn admin-btn-danger" id="remove-ex-btn">Remove Exercise</button>
      </div>
      <div class="inline-note">Exercise names and summaries are required. Plan JSON is optional.</div>
    </div>
  `;

  const nameInput = document.getElementById('exercise-name-input');
  const summaryInput = document.getElementById('exercise-summary-input');
  const tagInput = document.getElementById('exercise-tag-input');
  const descriptionInput = document.getElementById('exercise-description-input');
  const applyPlanBtn = document.getElementById('apply-plan-btn');
  const clearPlanBtn = document.getElementById('clear-plan-btn');
  const moveUpBtn = document.getElementById('move-ex-up-btn');
  const moveDownBtn = document.getElementById('move-ex-down-btn');
  const removeBtn = document.getElementById('remove-ex-btn');

  if (nameInput) {
    nameInput.addEventListener('input', event => {
      exercise.n = event.target.value;
      updateDerivedViews();
    });
  }

  if (summaryInput) {
    summaryInput.addEventListener('input', event => {
      exercise.s = event.target.value;
      updateDerivedViews();
    });
  }

  if (tagInput) {
    tagInput.addEventListener('input', event => {
      exercise.t = event.target.value;
      updateDerivedViews();
    });
  }

  if (descriptionInput) {
    descriptionInput.addEventListener('input', event => {
      exercise.d = event.target.value;
      updateDerivedViews();
    });
  }

  if (applyPlanBtn) {
    applyPlanBtn.addEventListener('click', () => {
      try {
        applyExercisePlanJson(dayIdx, exIdx);
      } catch (error) {
        setStatus(error instanceof Error ? error.message : 'Unable to apply plan JSON.', 'error');
      }
    });
  }

  if (clearPlanBtn) {
    clearPlanBtn.addEventListener('click', () => {
      delete exercise.p;
      renderInspector();
      updateDerivedViews();
      setStatus('Removed plan JSON from selected exercise.', 'success');
    });
  }

  if (moveUpBtn) {
    moveUpBtn.addEventListener('click', () => swapExercises(dayIdx, exIdx, exIdx - 1));
  }

  if (moveDownBtn) {
    moveDownBtn.addEventListener('click', () => swapExercises(dayIdx, exIdx, exIdx + 1));
  }

  if (removeBtn) {
    removeBtn.addEventListener('click', () => removeExercise(dayIdx, exIdx));
  }
}

function renderInspector() {
  const inspector = document.getElementById('inspector-body');
  if (!inspector) return;

  normalizeSelection();

  if (selectedNode.type === 'root') {
    renderRootInspector(inspector);
    return;
  }

  if (selectedNode.type === 'day') {
    renderDayInspector(inspector, selectedNode.dayIdx);
    return;
  }

  renderExerciseInspector(inspector, selectedNode.dayIdx, selectedNode.exIdx);
}

function renderAll(forceRawSync = false) {
  normalizeSelection();
  renderGraph();
  renderInspector();
  renderDayPreview(routineState.days);
  syncRawEditor(forceRawSync);
}

function validateCurrentState() {
  const sanitized = sanitizeRoutineProfilePayload(routineState.days);
  routineState = { ...sanitized, days: cloneJson(sanitized.days) };
  renderAll(true);
  setStatus('Validation passed.', 'success');
  return sanitized;
}

function saveRoutineToStorage() {
  const sanitized = validateCurrentState();
  localStorage.setItem(ROUTINE_PROFILE_STORAGE_KEY, JSON.stringify(sanitized));
  setStatus('Saved routine to localStorage. Open the main app to use it.', 'success');
}

function applyRawEditorPayload() {
  const editor = getRawEditorEl();
  if (!editor) return;
  const source = String(editor.value || '').trim();
  if (!source) throw new Error('Raw JSON field is empty.');

  const parsed = JSON.parse(source);
  const sanitized = sanitizeRoutineProfilePayload(parsed);
  routineState = { ...sanitized, days: cloneJson(sanitized.days) };
  selectedNode = { type: 'root', dayIdx: null, exIdx: null };
  renderAll(true);
  setStatus('Applied raw JSON into visual graph.', 'success');
}

function loadDefaultRoutine() {
  const sanitized = sanitizeRoutineProfilePayload({ days: cloneJson(BUILTIN_RAW_DAYS) });
  routineState = { ...sanitized, days: cloneJson(sanitized.days) };
  selectedNode = { type: 'day', dayIdx: 0, exIdx: null };
  renderAll(true);
  setStatus('Loaded built-in routine.', 'info');
}

function loadCurrentRoutine() {
  const stored = parseStoredRoutineProfile();
  if (stored) {
    routineState = { ...stored, days: cloneJson(stored.days) };
    selectedNode = { type: 'day', dayIdx: 0, exIdx: null };
    renderAll(true);
    setStatus('Loaded custom routine from localStorage.', 'success');
    return;
  }

  loadDefaultRoutine();
  setStatus('No custom routine found. Loaded built-in routine.', 'info');
}

function clearCustomRoutine() {
  localStorage.removeItem(ROUTINE_PROFILE_STORAGE_KEY);
  loadDefaultRoutine();
  setStatus('Cleared custom routine from localStorage.', 'success');
}

function onGraphClick(event) {
  const trigger = event.target.closest('[data-action]');
  if (!trigger) return;

  const action = trigger.dataset.action;
  const dayIdx = Number(trigger.dataset.dayIdx);
  const exIdx = Number(trigger.dataset.exIdx);

  if (action === 'select-root') {
    selectRoot();
    return;
  }
  if (action === 'select-day') {
    selectDay(dayIdx);
    return;
  }
  if (action === 'select-exercise') {
    selectExercise(dayIdx, exIdx);
    return;
  }
  if (action === 'add-exercise') {
    addExercise(dayIdx);
  }
}

function bindToolbar() {
  const loadCurrentBtn = document.getElementById('load-current-btn');
  const loadDefaultBtn = document.getElementById('load-default-btn');
  const validateBtn = document.getElementById('validate-btn');
  const saveBtn = document.getElementById('save-btn');
  const clearBtn = document.getElementById('clear-btn');
  const applyJsonBtn = document.getElementById('apply-json-btn');
  const graphCanvas = document.getElementById('graph-canvas');

  if (loadCurrentBtn) loadCurrentBtn.addEventListener('click', () => withErrorGuard(loadCurrentRoutine));
  if (loadDefaultBtn) loadDefaultBtn.addEventListener('click', () => withErrorGuard(loadDefaultRoutine));
  if (validateBtn) validateBtn.addEventListener('click', () => withErrorGuard(validateCurrentState));
  if (saveBtn) saveBtn.addEventListener('click', () => withErrorGuard(saveRoutineToStorage));
  if (clearBtn) clearBtn.addEventListener('click', () => withErrorGuard(clearCustomRoutine));
  if (applyJsonBtn) applyJsonBtn.addEventListener('click', () => withErrorGuard(applyRawEditorPayload));
  if (graphCanvas) graphCanvas.addEventListener('click', onGraphClick);
}

function withErrorGuard(action) {
  try {
    action();
  } catch (error) {
    setStatus(error instanceof Error ? error.message : 'Unexpected error.', 'error');
  }
}

function initAdmin() {
  bindToolbar();
  withErrorGuard(loadCurrentRoutine);
}

initAdmin();
