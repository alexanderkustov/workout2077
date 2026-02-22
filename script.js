/*
Exercise schema (advanced):
{ n, s, t?, p?: { sets: [{ load?: string, reps: { min?: number, max?: number, target: number } }] } }
*/
const BUILTIN_RAW_DAYS = [
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
const ROUTINE_PROFILE_STORAGE_KEY = 'splitSysRoutineProfileV1';
const APP_STATE_VERSION = 3;
const ROUTINE_PROFILE_VERSION = 1;
const DAY_NAMES = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const DAY_SHORT_NAMES = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const DAY_NUMBER_INDEX = DAY_NAMES.reduce((map, _name, idx) => ({ ...map, [String(idx + 1)]: idx }), {});
const DAY_NAME_INDEX = {
  mon: 0,
  monday: 0,
  tue: 1,
  tues: 1,
  tuesday: 1,
  wed: 2,
  wednesday: 2,
  thu: 3,
  thur: 3,
  thurs: 3,
  thursday: 3,
  fri: 4,
  friday: 4,
  sat: 5,
  saturday: 5,
  sun: 6,
  sunday: 6,
};
const CSV_REQUIRED_HEADERS = ['day', 'category', 'duration', 'sets', 'is_rest', 'exercise', 'summary'];
const CSV_OPTIONAL_HEADERS = ['tag'];
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
const DAY_SWITCH_FADE_OUT_MS = 150;
const DAY_SWITCH_FADE_IN_MS = 300;
const SET_FILL_ANIM_WINDOW_MS = 900;

let appState = null;
let active = 0;
let restTimerEndsAt = null;
let restTimerInterval = null;
let restTimerDoneUntil = 0;
let undoExpiryTimeout = null;
let deferredInstallPrompt = null;
let audioCtx = null;
let daySwitchSwapTimeout = null;
let daySwitchClearTimeout = null;
let pendingSetFillAnim = null;
let DAYS = buildDaysFromRaw(BUILTIN_RAW_DAYS);

function clampDayIndex(idx) {
  if (!Number.isFinite(idx)) return 0;
  if (idx < 0) return 0;
  if (idx > DAYS.length - 1) return DAYS.length - 1;
  return idx;
}

function prefersReducedMotion() {
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function clearDaySwitchTransitionTimers() {
  if (daySwitchSwapTimeout) {
    clearTimeout(daySwitchSwapTimeout);
    daySwitchSwapTimeout = null;
  }
  if (daySwitchClearTimeout) {
    clearTimeout(daySwitchClearTimeout);
    daySwitchClearTimeout = null;
  }
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

function normalizeDashText(raw) {
  return String(raw || '').replaceAll('\u2013', '-').replaceAll('\u2014', '-');
}

function toPositiveInt(value, fallback = 1) {
  const num = Number(value);
  if (!Number.isFinite(num) || num <= 0) return fallback;
  return Math.round(num);
}

function parseRepRange(rawRepText) {
  const text = normalizeDashText(rawRepText).toLowerCase();
  const isTimed = /(sec|min|minute|minutes|hour|hours)/.test(text) && !/rep/.test(text);
  if (isTimed) return { target: 1, min: null, max: null };

  const rangeMatch = text.match(/(\d+)\s*-\s*(\d+)/);
  if (rangeMatch) {
    const min = toPositiveInt(rangeMatch[1], 1);
    const max = Math.max(min, toPositiveInt(rangeMatch[2], min));
    return { target: max, min, max };
  }

  const singleMatch = text.match(/(\d+)/);
  if (singleMatch) {
    const val = toPositiveInt(singleMatch[1], 1);
    return { target: val, min: val, max: val };
  }

  return { target: 1, min: null, max: null };
}

function parseLoadSequence(rawLeftText) {
  const left = normalizeDashText(rawLeftText).trim().toLowerCase();
  if (!left.includes('/')) return [];

  const unitMatch = left.match(/\b(kg|kgs|lb|lbs)\b/);
  const unit = unitMatch ? unitMatch[1].replace('kgs', 'kg').replace('lbs', 'lb') : '';
  const parts = left.split('/').map(part => part.trim()).filter(Boolean);
  if (parts.length < 2) return [];

  const loads = parts.map(part => {
    const numMatch = part.match(/-?\d+(?:\.\d+)?/);
    if (!numMatch) return null;
    const base = numMatch[0];
    return unit ? `${base} ${unit}` : base;
  });

  if (loads.some(load => !load)) return [];
  return loads;
}

function inferExercisePlan(summaryText) {
  const summary = String(summaryText || '').trim();
  const splitParts = summary.split('×');
  const hasMultiplier = splitParts.length > 1;
  const left = hasMultiplier ? splitParts[0] : '';
  const right = hasMultiplier ? splitParts.slice(1).join('×') : summary;
  const repMeta = parseRepRange(right);
  let sets = [];

  if (hasMultiplier) {
    const loads = parseLoadSequence(left);
    if (loads.length > 0) {
      sets = loads.map(load => ({ load, reps: { ...repMeta } }));
    } else {
      const countMatch = normalizeDashText(left).match(/(\d+)/);
      const setCount = toPositiveInt(countMatch ? countMatch[1] : 1, 1);
      sets = Array.from({ length: setCount }, () => ({ load: null, reps: { ...repMeta } }));
    }
  } else {
    sets = [{ load: null, reps: { ...repMeta } }];
  }

  if (sets.length === 0) sets = [{ load: null, reps: { target: 1, min: null, max: null } }];
  return { sets };
}

function normalizePlanSet(rawSet, fallbackSet) {
  const fallback = fallbackSet || { load: null, reps: { target: 1, min: null, max: null } };
  const rawReps = rawSet && typeof rawSet.reps === 'object' ? rawSet.reps : {};

  const target = toPositiveInt(
    rawSet?.targetReps ?? rawReps.target ?? rawReps.max ?? fallback.reps.target,
    fallback.reps.target,
  );

  const minCandidate = rawReps.min ?? rawSet?.minReps;
  const minNum = Number(minCandidate);
  const min = Number.isFinite(minNum) && minNum > 0 ? Math.min(target, Math.round(minNum)) : fallback.reps.min;

  const maxCandidate = rawReps.max ?? rawSet?.maxReps;
  const maxNum = Number(maxCandidate);
  const max = Number.isFinite(maxNum) && maxNum > 0
    ? Math.max(target, Math.round(maxNum))
    : fallback.reps.max && fallback.reps.max >= target
      ? fallback.reps.max
      : null;

  const loadVal = typeof rawSet?.load === 'string' ? rawSet.load.trim() : fallback.load;
  return {
    load: loadVal || null,
    reps: {
      target,
      min: min ?? null,
      max: max ?? null,
    },
  };
}

function normalizeExercisePlan(rawPlan, summaryText) {
  const inferred = inferExercisePlan(summaryText);
  if (!rawPlan || typeof rawPlan !== 'object' || !Array.isArray(rawPlan.sets) || rawPlan.sets.length === 0) return inferred;

  const sets = rawPlan.sets.map((set, idx) => {
    const fallback = inferred.sets[Math.min(idx, inferred.sets.length - 1)];
    return normalizePlanSet(set, fallback);
  });

  return {
    sets: sets.length > 0 ? sets : inferred.sets,
  };
}

function normalizeExerciseSchema(rawExercise) {
  const exercise = rawExercise && typeof rawExercise === 'object' ? rawExercise : {};
  const name = typeof exercise.n === 'string' ? exercise.n : 'Exercise';
  const summary = typeof exercise.s === 'string' ? exercise.s : '';
  const tag = typeof exercise.t === 'string' ? exercise.t : '';

  return {
    n: name,
    s: summary,
    t: tag,
    p: normalizeExercisePlan(exercise.p, summary),
  };
}

function normalizeDaySchema(rawDay) {
  const day = rawDay && typeof rawDay === 'object' ? rawDay : {};
  const exercises = Array.isArray(day.ex) ? day.ex.map(normalizeExerciseSchema) : [];
  const inferredSets = exercises.reduce((sum, exercise) => sum + exercise.p.sets.length, 0);
  const hasNumericSetCount = Number.isFinite(day.sets);
  const setCount = day.sets === null
    ? null
    : hasNumericSetCount
      ? Math.round(day.sets)
      : day.rest
        ? null
        : inferredSets;

  return {
    name: typeof day.name === 'string' ? day.name : 'Day',
    short: typeof day.short === 'string' ? day.short : '',
    cat: typeof day.cat === 'string' ? day.cat : '',
    idx: typeof day.idx === 'string' ? day.idx : '',
    sets: setCount,
    dur: typeof day.dur === 'string' ? day.dur : '\u2014',
    rest: Boolean(day.rest),
    ex: exercises,
  };
}

function dayIndexLabel(dayIdx) {
  return `DAY ${String(dayIdx + 1).padStart(2, '0')}`;
}

function buildDaysFromRaw(rawDays) {
  const source = Array.isArray(rawDays) ? rawDays : BUILTIN_RAW_DAYS;
  return DAY_NAMES.map((name, dayIdx) => {
    const raw = source[dayIdx] && typeof source[dayIdx] === 'object' ? source[dayIdx] : {};
    return normalizeDaySchema({
      ...raw,
      name,
      short: DAY_SHORT_NAMES[dayIdx],
      idx: dayIndexLabel(dayIdx),
    });
  });
}

function sanitizeRoutineProfile(rawProfile) {
  if (!rawProfile || typeof rawProfile !== 'object') return null;
  if (rawProfile.version !== ROUTINE_PROFILE_VERSION) return null;
  if (!Array.isArray(rawProfile.days) || rawProfile.days.length !== DAY_NAMES.length) return null;

  const days = buildDaysFromRaw(rawProfile.days);
  if (days.some(day => day.ex.length === 0)) return null;

  return {
    version: ROUTINE_PROFILE_VERSION,
    days: days.map(day => ({
      name: day.name,
      short: day.short,
      cat: day.cat,
      idx: day.idx,
      sets: day.sets,
      dur: day.dur,
      rest: day.rest,
      ex: day.ex.map(exercise => ({
        n: exercise.n,
        s: exercise.s,
        t: exercise.t,
        p: exercise.p,
      })),
    })),
  };
}

function loadRoutineProfile() {
  let parsed = null;
  try {
    const raw = localStorage.getItem(ROUTINE_PROFILE_STORAGE_KEY);
    if (!raw) return null;
    parsed = JSON.parse(raw);
  } catch {
    return null;
  }

  const sanitized = sanitizeRoutineProfile(parsed);
  if (sanitized) return sanitized;

  try {
    localStorage.removeItem(ROUTINE_PROFILE_STORAGE_KEY);
  } catch {
    // Ignore localStorage failures.
  }

  return null;
}

function saveRoutineProfile(profile) {
  const sanitized = sanitizeRoutineProfile(profile);
  if (!sanitized) return false;

  try {
    localStorage.setItem(ROUTINE_PROFILE_STORAGE_KEY, JSON.stringify(sanitized));
    return true;
  } catch {
    return false;
  }
}

function clearRoutineProfile() {
  try {
    localStorage.removeItem(ROUTINE_PROFILE_STORAGE_KEY);
    return true;
  } catch {
    return false;
  }
}

function initializeRoutineDays() {
  const storedProfile = loadRoutineProfile();
  DAYS = buildDaysFromRaw(storedProfile?.days || BUILTIN_RAW_DAYS);
}

function getUiPreferencesSnapshot() {
  return {
    soundEnabled: Boolean(appState?.ui?.soundEnabled),
    hapticsEnabled: appState?.ui?.hapticsEnabled !== false,
  };
}

function setRoutineFeedback(message, type = 'info') {
  const feedbackEl = document.getElementById('routine-feedback');
  if (!feedbackEl) return;

  feedbackEl.textContent = message || '';
  feedbackEl.classList.remove('success', 'error');
  if (!message) return;

  if (type === 'success') feedbackEl.classList.add('success');
  if (type === 'error') feedbackEl.classList.add('error');
}

function normalizeCsvHeader(rawHeader) {
  return String(rawHeader || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

function parseCsvText(csvText) {
  const source = String(csvText ?? '').replace(/^\uFEFF/, '');
  if (!source.trim()) throw new Error('CSV file is empty.');

  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;

  for (let i = 0; i < source.length; i += 1) {
    const char = source[i];

    if (inQuotes) {
      if (char === '"') {
        if (source[i + 1] === '"') {
          field += '"';
          i += 1;
        } else {
          inQuotes = false;
        }
      } else {
        field += char;
      }
      continue;
    }

    if (char === '"') {
      inQuotes = true;
      continue;
    }

    if (char === ',') {
      row.push(field);
      field = '';
      continue;
    }

    if (char === '\n' || char === '\r') {
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
      if (char === '\r' && source[i + 1] === '\n') i += 1;
      continue;
    }

    field += char;
  }

  if (inQuotes) throw new Error('CSV parsing failed: unmatched quote.');

  row.push(field);
  rows.push(row);

  const cleaned = rows.filter((current, idx) => idx === 0 || current.some(value => String(value).trim() !== ''));
  if (cleaned.length === 0 || cleaned[0].every(value => String(value).trim() === '')) {
    throw new Error('CSV must include a header row.');
  }

  return cleaned;
}

function parseCsvDayIndex(rawDay, rowNumber) {
  const value = String(rawDay || '').trim().toLowerCase();
  if (!value) throw new Error(`Row ${rowNumber}: day is required.`);

  if (Object.prototype.hasOwnProperty.call(DAY_NUMBER_INDEX, value)) return DAY_NUMBER_INDEX[value];
  const normalizedName = value.replace(/\./g, '');
  if (Object.prototype.hasOwnProperty.call(DAY_NAME_INDEX, normalizedName)) return DAY_NAME_INDEX[normalizedName];

  throw new Error(`Row ${rowNumber}: invalid day "${rawDay}". Use 1-7 or Mon-Sun.`);
}

function parseCsvSetCount(rawSets, rowNumber) {
  const text = String(rawSets || '').trim();
  if (!text) return null;

  const parsed = Number(text);
  if (!Number.isInteger(parsed) || parsed <= 0) {
    throw new Error(`Row ${rowNumber}: invalid sets value "${rawSets}". Use a positive integer or leave blank.`);
  }

  return parsed;
}

function parseCsvRestFlag(rawRest, rowNumber) {
  const text = String(rawRest || '').trim().toLowerCase();
  if (!text) return null;
  if (text === 'true' || text === '1') return true;
  if (text === 'false' || text === '0') return false;
  throw new Error(`Row ${rowNumber}: invalid is_rest value "${rawRest}". Use true/false/1/0.`);
}

function buildCsvDayMeta(rows, dayIdx) {
  let category = '';
  let duration = '';
  let sets = null;
  let rest = null;

  for (const row of rows) {
    if (row.category) {
      if (category && category !== row.category) {
        throw new Error(`Row ${row.rowNumber}: conflicting category for ${DAY_NAMES[dayIdx]}.`);
      }
      category = row.category;
    }

    if (row.duration) {
      if (duration && duration !== row.duration) {
        throw new Error(`Row ${row.rowNumber}: conflicting duration for ${DAY_NAMES[dayIdx]}.`);
      }
      duration = row.duration;
    }

    const parsedSets = parseCsvSetCount(row.sets, row.rowNumber);
    if (parsedSets !== null) {
      if (sets !== null && sets !== parsedSets) {
        throw new Error(`Row ${row.rowNumber}: conflicting sets value for ${DAY_NAMES[dayIdx]}.`);
      }
      sets = parsedSets;
    }

    const parsedRest = parseCsvRestFlag(row.isRest, row.rowNumber);
    if (parsedRest !== null) {
      if (rest !== null && rest !== parsedRest) {
        throw new Error(`Row ${row.rowNumber}: conflicting is_rest value for ${DAY_NAMES[dayIdx]}.`);
      }
      rest = parsedRest;
    }
  }

  return {
    category: category || (rest === true ? 'Rest Day' : 'Custom Day'),
    duration: duration || '\u2014',
    sets: rest === true ? null : sets,
    rest: rest === true,
  };
}

function buildCsvDayExercises(rows, dayIdx, isRestDay) {
  const exercises = [];

  for (const row of rows) {
    const name = row.exercise;
    const summary = row.summary;
    const tag = row.tag;

    if (!isRestDay) {
      if (!name || !summary) {
        throw new Error(`Row ${row.rowNumber}: exercise and summary are required for non-rest days.`);
      }

      exercises.push({
        n: name,
        s: summary,
        t: tag || '',
      });
      continue;
    }

    if (name || summary || tag) {
      exercises.push({
        n: name || 'Rest & Recovery',
        s: summary || 'Full day off - recover',
        t: tag || '',
      });
    }
  }

  if (exercises.length === 0) {
    throw new Error(`${DAY_NAMES[dayIdx]} has an empty day group. Add at least one exercise row.`);
  }

  return exercises;
}

function parseCsvRoutineProfile(csvText) {
  const rows = parseCsvText(csvText);
  if (rows.length < 2) throw new Error('CSV must include at least one data row.');

  const headerRow = rows[0];
  const headerIndex = {};
  headerRow.forEach((header, idx) => {
    const normalized = normalizeCsvHeader(header);
    if (!normalized) return;
    if (Object.prototype.hasOwnProperty.call(headerIndex, normalized)) {
      throw new Error(`CSV has duplicate header "${header}".`);
    }
    headerIndex[normalized] = idx;
  });

  const missingHeaders = CSV_REQUIRED_HEADERS.filter(header => !Object.prototype.hasOwnProperty.call(headerIndex, header));
  if (missingHeaders.length > 0) {
    throw new Error(`CSV missing required columns: ${missingHeaders.join(', ')}.`);
  }

  const validHeaders = new Set([...CSV_REQUIRED_HEADERS, ...CSV_OPTIONAL_HEADERS]);
  Object.keys(headerIndex).forEach(key => {
    if (!validHeaders.has(key)) {
      // Unknown columns are allowed for spreadsheet convenience.
      delete headerIndex[key];
    }
  });

  const dayRows = DAY_NAMES.map(() => []);

  for (let rowIdx = 1; rowIdx < rows.length; rowIdx += 1) {
    const rowNumber = rowIdx + 1;
    const row = rows[rowIdx];
    if (row.every(value => String(value).trim() === '')) continue;

    const get = key => {
      const colIdx = headerIndex[key];
      if (typeof colIdx !== 'number') return '';
      return String(row[colIdx] ?? '').trim();
    };

    const dayIdx = parseCsvDayIndex(get('day'), rowNumber);
    dayRows[dayIdx].push({
      rowNumber,
      category: get('category'),
      duration: get('duration'),
      sets: get('sets'),
      isRest: get('is_rest'),
      exercise: get('exercise'),
      summary: get('summary'),
      tag: get('tag'),
    });
  }

  const missingDayIdx = dayRows.findIndex(rowsForDay => rowsForDay.length === 0);
  if (missingDayIdx !== -1) {
    throw new Error(`Missing rows for ${DAY_NAMES[missingDayIdx]} (day ${missingDayIdx + 1}).`);
  }

  const days = dayRows.map((rowsForDay, dayIdx) => {
    const meta = buildCsvDayMeta(rowsForDay, dayIdx);
    return {
      name: DAY_NAMES[dayIdx],
      short: DAY_SHORT_NAMES[dayIdx],
      cat: meta.category,
      idx: dayIndexLabel(dayIdx),
      sets: meta.sets,
      dur: meta.duration,
      rest: meta.rest,
      ex: buildCsvDayExercises(rowsForDay, dayIdx, meta.rest),
    };
  });

  return sanitizeRoutineProfile({
    version: ROUTINE_PROFILE_VERSION,
    days,
  });
}

function resetStateForRoutineChange(dayIdx, prefs = getUiPreferencesSnapshot()) {
  const nextDayIdx = clampDayIndex(dayIdx);
  active = nextDayIdx;
  appState = createInitialAppState(nextDayIdx);
  appState.ui.soundEnabled = Boolean(prefs.soundEnabled);
  appState.ui.hapticsEnabled = prefs.hapticsEnabled !== false;

  clearLastUndo();
  clearDaySwitchTransitionTimers();
  document.body.classList.remove('theme-fade-out', 'theme-fade-in');
  pendingSetFillAnim = null;
  resetRestTimer();
  closeModal();
  saveAppState();
  scheduleUndoExpiry();
}

function applyRoutineDays(rawDays, dayIdx = active) {
  const nextDays = buildDaysFromRaw(rawDays);
  if (nextDays.length !== DAY_NAMES.length || nextDays.some(day => day.ex.length === 0)) {
    throw new Error('Routine must contain 7 days, and each day must have at least one exercise.');
  }

  const prefs = getUiPreferencesSnapshot();
  DAYS = nextDays;
  resetStateForRoutineChange(dayIdx, prefs);
  render(active, { animateRows: true });
}

function readTextFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => resolve(String(reader.result || '')));
    reader.addEventListener('error', () => reject(new Error('Unable to read selected CSV file.')));
    reader.readAsText(file);
  });
}

function openRoutineCsvPicker() {
  const input = document.getElementById('routine-csv-input');
  if (!input) return;
  input.value = '';
  input.click();
}

async function handleRoutineCsvInputChange(event) {
  const input = event.target;
  const file = input?.files?.[0];
  if (!file) return;

  setRoutineFeedback(`Importing ${file.name}...`);

  try {
    const csvText = await readTextFile(file);
    const profile = parseCsvRoutineProfile(csvText);
    if (!profile) throw new Error('CSV import failed. Could not normalize routine data.');

    if (!saveRoutineProfile(profile)) {
      throw new Error('Unable to save custom routine. Check browser storage permissions.');
    }

    applyRoutineDays(profile.days, active);
    setRoutineFeedback(`Imported custom routine from ${file.name}.`, 'success');
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to import CSV routine.';
    setRoutineFeedback(message, 'error');
  } finally {
    input.value = '';
  }
}

function resetRoutineToDefault() {
  const hasCustomRoutine = Boolean(loadRoutineProfile());
  if (!hasCustomRoutine) {
    setRoutineFeedback('Built-in routine is already active.');
    return;
  }

  const confirmed = window.confirm('Reset custom routine and restore the built-in weekly split?');
  if (!confirmed) return;

  if (!clearRoutineProfile()) {
    setRoutineFeedback('Unable to clear saved custom routine.', 'error');
    return;
  }

  applyRoutineDays(BUILTIN_RAW_DAYS, active);
  setRoutineFeedback('Restored built-in routine.', 'success');
}

function getExercisePlanSets(dayIdx, exIdx) {
  const exercise = DAYS[dayIdx]?.ex?.[exIdx];
  if (!exercise?.p?.sets || exercise.p.sets.length === 0) {
    return [{ load: null, reps: { target: 1, min: null, max: null } }];
  }
  return exercise.p.sets;
}

function createEmptySetProgress(dayIdx, exIdx) {
  return getExercisePlanSets(dayIdx, exIdx).map(() => ({ repsDone: 0, completedAt: null }));
}

function createEmptyDayState(dayIdx) {
  const exLen = DAYS[dayIdx].ex.length;
  return {
    started: false,
    startedAt: null,
    completed: Array.from({ length: exLen }, () => false),
    completedAt: Array.from({ length: exLen }, () => null),
    setProgress: Array.from({ length: exLen }, (_, exIdx) => createEmptySetProgress(dayIdx, exIdx)),
    notes: '',
  };
}

function createInitialAppState(defaultDayIdx) {
  const days = {};
  for (let i = 0; i < DAYS.length; i += 1) days[String(i)] = createEmptyDayState(i);

  return {
    version: APP_STATE_VERSION,
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

function normalizeSetProgress(rawSetProgress, planSet) {
  const raw = rawSetProgress && typeof rawSetProgress === 'object' ? rawSetProgress : {};
  const target = planSet.reps.target;
  const repsNum = Number(raw.repsDone);
  let repsDone = Number.isFinite(repsNum) ? Math.max(0, Math.round(repsNum)) : 0;
  if (raw.completed === true && repsDone < target) repsDone = target;
  repsDone = Math.min(repsDone, target);

  return {
    repsDone,
    completedAt: repsDone >= target && typeof raw.completedAt === 'string' ? raw.completedAt : null,
  };
}

function normalizeDayState(rawDay, dayIdx) {
  const fallback = createEmptyDayState(dayIdx);
  if (!rawDay || typeof rawDay !== 'object') return fallback;

  const exLen = DAYS[dayIdx].ex.length;
  const legacyCompleted = Array.isArray(rawDay.completed)
    ? rawDay.completed.slice(0, exLen).map(Boolean)
    : [];
  while (legacyCompleted.length < exLen) legacyCompleted.push(false);

  const legacyCompletedAt = Array.isArray(rawDay.completedAt)
    ? rawDay.completedAt.slice(0, exLen).map((val, idx) => (legacyCompleted[idx] ? (typeof val === 'string' ? val : null) : null))
    : [];
  while (legacyCompletedAt.length < exLen) legacyCompletedAt.push(null);

  const rawSetProgress = Array.isArray(rawDay.setProgress) ? rawDay.setProgress : [];
  const setProgress = Array.from({ length: exLen }, (_, exIdx) => {
    const planSets = getExercisePlanSets(dayIdx, exIdx);
    const rawExerciseProgress = Array.isArray(rawSetProgress[exIdx]) ? rawSetProgress[exIdx] : [];
    let sets = planSets.map((planSet, setIdx) => normalizeSetProgress(rawExerciseProgress[setIdx], planSet));

    if (legacyCompleted[exIdx]) {
      const fallbackCompletedAt = legacyCompletedAt[exIdx];
      sets = sets.map((setState, setIdx) => ({
        repsDone: planSets[setIdx].reps.target,
        completedAt: setState.completedAt || fallbackCompletedAt,
      }));
    }

    return sets;
  });

  const completed = Array.from({ length: exLen }, (_, exIdx) => {
    const planSets = getExercisePlanSets(dayIdx, exIdx);
    return planSets.every((planSet, setIdx) => setProgress[exIdx][setIdx].repsDone >= planSet.reps.target);
  });

  const completedAt = Array.from({ length: exLen }, (_, exIdx) => {
    if (!completed[exIdx]) return null;
    if (legacyCompletedAt[exIdx]) return legacyCompletedAt[exIdx];
    const completedSetTimes = setProgress[exIdx]
      .map(setState => setState.completedAt)
      .filter(val => typeof val === 'string');
    return completedSetTimes.length > 0 ? completedSetTimes[completedSetTimes.length - 1] : null;
  });

  return {
    started: Boolean(rawDay.started),
    startedAt: typeof rawDay.startedAt === 'string' ? rawDay.startedAt : null,
    completed,
    completedAt,
    setProgress,
    notes: typeof rawDay.notes === 'string' ? rawDay.notes : '',
  };
}

function sanitizeAppState(raw, defaultDayIdx) {
  const base = createInitialAppState(defaultDayIdx);
  if (!raw || typeof raw !== 'object' || (raw.version !== 2 && raw.version !== APP_STATE_VERSION)) return base;

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
    normalized.ui.lastUndo = {
      dayIdx: lu.dayIdx,
      exIdx: lu.exIdx,
      setIdx: Number.isInteger(lu.setIdx) ? lu.setIdx : null,
      at: lu.at,
    };
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
  let hasStoredState = false;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    hasStoredState = Boolean(raw);
    parsed = raw ? JSON.parse(raw) : null;
  } catch {
    parsed = null;
  }

  const state = sanitizeAppState(parsed, defaultDayIdx);

  if (!hasStoredState) {
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
  appState.days[key] = normalizeDayState(appState.days[key], dayIdx);
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

function ensureExerciseSetProgress(dayState, dayIdx, exIdx) {
  const exLen = DAYS[dayIdx].ex.length;
  if (!Array.isArray(dayState.setProgress)) {
    dayState.setProgress = Array.from({ length: exLen }, (_, idx) => createEmptySetProgress(dayIdx, idx));
  }
  while (dayState.setProgress.length < exLen) {
    dayState.setProgress.push(createEmptySetProgress(dayIdx, dayState.setProgress.length));
  }

  const planSets = getExercisePlanSets(dayIdx, exIdx);
  const rawSets = Array.isArray(dayState.setProgress[exIdx]) ? dayState.setProgress[exIdx] : [];
  const normalizedSets = planSets.map((planSet, setIdx) => normalizeSetProgress(rawSets[setIdx], planSet));
  dayState.setProgress[exIdx] = normalizedSets;
  return normalizedSets;
}

function getExerciseProgress(dayState, dayIdx, exIdx) {
  const planSets = getExercisePlanSets(dayIdx, exIdx);
  const setProgress = ensureExerciseSetProgress(dayState, dayIdx, exIdx);
  let repsDoneTotal = 0;
  let repsTargetTotal = 0;
  let setsDone = 0;
  let firstIncompleteSet = -1;

  for (let i = 0; i < planSets.length; i += 1) {
    const target = planSets[i].reps.target;
    const repsDone = Math.min(target, setProgress[i].repsDone);
    repsDoneTotal += repsDone;
    repsTargetTotal += target;
    if (repsDone >= target) {
      setsDone += 1;
    } else if (firstIncompleteSet === -1) {
      firstIncompleteSet = i;
    }
  }

  const allDone = setsDone === planSets.length;
  const currentSetIdx = firstIncompleteSet === -1 ? planSets.length - 1 : firstIncompleteSet;
  const currentSetTarget = planSets[currentSetIdx].reps.target;
  const currentSetReps = Math.min(currentSetTarget, setProgress[currentSetIdx].repsDone);

  return {
    allDone,
    setsDone,
    setsTotal: planSets.length,
    repsDoneTotal,
    repsTargetTotal,
    currentSetIdx,
    currentSetTarget,
    currentSetReps,
  };
}

function markSetFillAnim(dayIdx, exIdx, setIdx, mode = 'on') {
  pendingSetFillAnim = {
    dayIdx,
    exIdx,
    setIdx,
    mode: mode === 'off' ? 'off' : 'on',
    at: Date.now(),
  };
}

function consumeSetFillAnim(dayIdx, exIdx, setIdx) {
  if (!pendingSetFillAnim) return null;
  if (Date.now() - pendingSetFillAnim.at > SET_FILL_ANIM_WINDOW_MS) {
    pendingSetFillAnim = null;
    return null;
  }

  const match = pendingSetFillAnim.dayIdx === dayIdx
    && pendingSetFillAnim.exIdx === exIdx
    && pendingSetFillAnim.setIdx === setIdx;

  if (!match) return null;

  const mode = pendingSetFillAnim.mode === 'off' ? 'off' : 'on';
  pendingSetFillAnim = null;
  return mode;
}

function syncExerciseCompletionFromProgress(dayState, dayIdx, exIdx) {
  const progress = getExerciseProgress(dayState, dayIdx, exIdx);
  dayState.completed[exIdx] = progress.allDone;

  if (!progress.allDone) {
    dayState.completedAt[exIdx] = null;
    return;
  }

  if (dayState.completedAt[exIdx]) return;
  const setProgress = ensureExerciseSetProgress(dayState, dayIdx, exIdx);
  const completedTimes = setProgress
    .map(setState => setState.completedAt)
    .filter(val => typeof val === 'string');
  dayState.completedAt[exIdx] = completedTimes.length > 0 ? completedTimes[completedTimes.length - 1] : new Date().toISOString();
}

function resetExerciseProgress(dayState, dayIdx, exIdx) {
  const setProgress = ensureExerciseSetProgress(dayState, dayIdx, exIdx);
  for (let i = 0; i < setProgress.length; i += 1) {
    setProgress[i].repsDone = 0;
    setProgress[i].completedAt = null;
  }
  dayState.completed[exIdx] = false;
  dayState.completedAt[exIdx] = null;
}

function fillExerciseProgressAsDone(dayState, dayIdx, exIdx, completedAt) {
  const timestamp = completedAt || new Date().toISOString();
  const planSets = getExercisePlanSets(dayIdx, exIdx);
  const setProgress = ensureExerciseSetProgress(dayState, dayIdx, exIdx);

  for (let i = 0; i < setProgress.length; i += 1) {
    setProgress[i].repsDone = planSets[i].reps.target;
    setProgress[i].completedAt = setProgress[i].completedAt || timestamp;
  }

  dayState.completed[exIdx] = true;
  dayState.completedAt[exIdx] = timestamp;
}

function formatExerciseProgressLabel(progress) {
  if (progress.allDone) return `SETS ${progress.setsTotal}/${progress.setsTotal} • COMPLETE`;
  return `SETS ${progress.setsDone}/${progress.setsTotal} • NEXT ${progress.currentSetTarget} REPS`;
}

function formatExerciseSchemeLabel(dayIdx, exIdx) {
  const sets = getExercisePlanSets(dayIdx, exIdx);
  const highestTarget = sets.reduce((max, set) => Math.max(max, set.reps.target), 0);
  const topLoad = [...sets].reverse().find(set => set.load)?.load || null;
  return `${sets.length}×${highestTarget}${topLoad ? ` ${topLoad}` : ''}`;
}

function formatExercisePlanBreakdown(dayIdx, exIdx) {
  const sets = getExercisePlanSets(dayIdx, exIdx);
  return sets.map((set, idx) => {
    const loadPrefix = set.load ? `${set.load} \u00d7 ` : '';
    const repRange = set.reps.min && set.reps.max && set.reps.min !== set.reps.max
      ? `${set.reps.min}\u2013${set.reps.max}`
      : `${set.reps.target}`;
    return `S${idx + 1}: ${loadPrefix}${repRange}`;
  }).join(' \u2022 ');
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

function setLastUndo(dayIdx, exIdx, setIdx = null) {
  appState.ui.lastUndo = {
    dayIdx,
    exIdx,
    setIdx: Number.isInteger(setIdx) ? setIdx : null,
    at: Date.now(),
  };
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
  if (Number.isInteger(lu.setIdx)) {
    const planSets = getExercisePlanSets(lu.dayIdx, lu.exIdx);
    if (lu.setIdx < 0 || lu.setIdx >= planSets.length) {
      clearLastUndo();
      saveAppState();
      return false;
    }

    const setProgress = ensureExerciseSetProgress(dayState, lu.dayIdx, lu.exIdx);
    if (setProgress[lu.setIdx].repsDone < planSets[lu.setIdx].reps.target) {
      clearLastUndo();
      saveAppState();
      return false;
    }
  } else if (!dayState.completed[lu.exIdx]) {
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
  const { recordUndo = true, startRest = true, rerender = true, syncProgress = true } = opts;
  const dayState = getDayState(dayIdx);

  if (!dayState.started && done) {
    dayState.started = true;
    dayState.startedAt = new Date().toISOString();
  }

  if (syncProgress) {
    if (done) {
      fillExerciseProgressAsDone(dayState, dayIdx, exIdx, new Date().toISOString());
    } else {
      resetExerciseProgress(dayState, dayIdx, exIdx);
    }
  } else {
    dayState.completed[exIdx] = done;
    dayState.completedAt[exIdx] = done ? (dayState.completedAt[exIdx] || new Date().toISOString()) : null;
  }

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

function setExerciseSetDone(dayIdx, exIdx, setIdx, done, opts = {}) {
  const { recordUndo = true, startRest = true, rerender = true, triggerFeedback = true } = opts;
  const dayState = getDayState(dayIdx);
  const planSets = getExercisePlanSets(dayIdx, exIdx);
  if (!Number.isInteger(setIdx) || setIdx < 0 || setIdx >= planSets.length) return;

  if (!dayState.started) {
    dayState.started = true;
    dayState.startedAt = new Date().toISOString();
  }

  const setProgress = ensureExerciseSetProgress(dayState, dayIdx, exIdx);
  const target = planSets[setIdx].reps.target;
  const wasDone = setProgress[setIdx].repsDone >= target;
  setProgress[setIdx].repsDone = done ? target : 0;
  setProgress[setIdx].completedAt = done ? new Date().toISOString() : null;
  syncExerciseCompletionFromProgress(dayState, dayIdx, exIdx);

  if (done && !wasDone && recordUndo) {
    setLastUndo(dayIdx, exIdx, setIdx);
    markSetFillAnim(dayIdx, exIdx, setIdx, 'on');
  } else if (!done && wasDone) {
    markSetFillAnim(dayIdx, exIdx, setIdx, 'off');
  } else if (!done && appState.ui.lastUndo && appState.ui.lastUndo.dayIdx === dayIdx && appState.ui.lastUndo.exIdx === exIdx && appState.ui.lastUndo.setIdx === setIdx) {
    clearLastUndo();
  }

  saveAppState();

  if (done && startRest && !wasDone) {
    startRestTimer(appState.rest.durationSec);
  }

  if (triggerFeedback) triggerHaptic(done ? [18, 12, 18] : 10);
  if (rerender) render(dayIdx);
}

function toggleExerciseSet(event, dayIdx, exIdx, setIdx) {
  event.stopPropagation();
  const dayState = getDayState(dayIdx);
  const planSets = getExercisePlanSets(dayIdx, exIdx);
  if (!Number.isInteger(setIdx) || setIdx < 0 || setIdx >= planSets.length) return;

  const setProgress = ensureExerciseSetProgress(dayState, dayIdx, exIdx);
  const isDone = setProgress[setIdx].repsDone >= planSets[setIdx].reps.target;
  setExerciseSetDone(dayIdx, exIdx, setIdx, !isDone, {
    recordUndo: !isDone,
    startRest: !isDone,
    rerender: true,
    triggerFeedback: true,
  });
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

  if (Number.isInteger(lu.setIdx)) {
    setExerciseSetDone(lu.dayIdx, lu.exIdx, lu.setIdx, false, {
      recordUndo: false,
      startRest: false,
      rerender: false,
      triggerFeedback: false,
    });
  } else {
    setExerciseDone(lu.dayIdx, lu.exIdx, false, { recordUndo: false, startRest: false, rerender: false, syncProgress: true });
  }
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
  const targetDay = clampDayIndex(dayIdx);
  if (targetDay === active) return;

  if (prefersReducedMotion()) {
    setActiveDay(targetDay);
    render(active, { animateRows: false });
    return;
  }

  clearDaySwitchTransitionTimers();
  document.body.classList.remove('theme-fade-in');
  void document.body.offsetWidth;
  document.body.classList.add('theme-fade-out');

  daySwitchSwapTimeout = setTimeout(() => {
    setActiveDay(targetDay);
    render(active, { animateRows: true });

    document.body.classList.remove('theme-fade-out');
    document.body.classList.add('theme-fade-in');

    daySwitchClearTimeout = setTimeout(() => {
      document.body.classList.remove('theme-fade-in');
      daySwitchClearTimeout = null;
    }, DAY_SWITCH_FADE_IN_MS);

    daySwitchSwapTimeout = null;
  }, DAY_SWITCH_FADE_OUT_MS);
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
  const safeDayIdx = clampDayIndex(dayIdx);
  const d = DAYS[safeDayIdx];
  const dayState = getDayState(safeDayIdx);
  const exIdx = Number.isInteger(focusExerciseIdx) ? Math.max(0, Math.min(d.ex.length - 1, focusExerciseIdx)) : 0;
  const ex = d.ex[exIdx];
  const progress = getExerciseProgress(dayState, safeDayIdx, exIdx);
  const doneTag = dayState.completed[exIdx] ? '<span class="m-tag done">DONE</span>' : tagEl(ex.t);

  document.getElementById('mh-sys').textContent = `// EXERCISE DETAILS \u2014 ${d.idx} / EX ${String(exIdx + 1).padStart(2, '0')}`;
  document.getElementById('mh-name').textContent = ex.n;
  document.getElementById('mh-cat').textContent = d.cat;

  document.getElementById('modal-body').innerHTML = `
    <div class="m-detail">
      <div class="m-detail-media" role="img" aria-label="Exercise image placeholder">
        <div class="m-detail-media-label">IMAGE PLACEHOLDER</div>
      </div>
      <div class="m-detail-meta">
        <div class="m-detail-row">
          <span class="m-detail-label">Sets / Reps</span>
          <span class="m-detail-value">${escapeHtml(ex.s)}</span>
        </div>
        <div class="m-detail-row">
          <span class="m-detail-label">Structured Plan</span>
          <span class="m-detail-value">${escapeHtml(formatExercisePlanBreakdown(safeDayIdx, exIdx))}</span>
        </div>
        <div class="m-detail-row">
          <span class="m-detail-label">Progress</span>
          <span class="m-detail-value">${escapeHtml(formatExerciseProgressLabel(progress))}</span>
        </div>
        <div class="m-detail-row">
          <span class="m-detail-label">Tag</span>
          <span class="m-detail-tags">${doneTag || '<span class="m-tag">LIFT</span>'}</span>
        </div>
      </div>
      <div class="m-detail-copy">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
      </div>
    </div>
  `;

  document.getElementById('modal-bg').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-bg').classList.remove('open');
  document.body.style.overflow = '';
}

function clearProgress() {
  const shouldClear = window.confirm('Clear all saved workout progress? This resets v3 session data.');
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

function render(dayIdx, opts = {}) {
  const { animateRows = false } = opts;
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

  const exPanel = document.getElementById('ex-panel');
  exPanel.classList.toggle('rows-animate', animateRows);

  exPanel.innerHTML =
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
      const progress = getExerciseProgress(dayState, active, i);
      const inProgress = !isDone && progress.repsDoneTotal > 0;
      const progressLabel = formatExerciseProgressLabel(progress);
      const schemeLabel = formatExerciseSchemeLabel(active, i);
      const planSets = getExercisePlanSets(active, i);
      const setProgress = ensureExerciseSetProgress(dayState, active, i);
      const setButtons = planSets.map((set, setIdx) => {
        const isSetDone = setProgress[setIdx].repsDone >= set.reps.target;
        const fillAnimMode = consumeSetFillAnim(active, i, setIdx);
        const fillAnimClass = fillAnimMode === 'on'
          ? ' fill-diag-on'
          : fillAnimMode === 'off'
            ? ' fill-diag-off'
            : '';
        return `<button type="button" class="set-dot ${isSetDone ? 'done' : ''}${fillAnimClass}" onclick="toggleExerciseSet(event, ${active}, ${i}, ${setIdx})" aria-pressed="${isSetDone ? 'true' : 'false'}" aria-label="${escapeHtml(`${e.n} set ${setIdx + 1} of ${planSets.length}`)}"><span class="set-dot-label">${set.reps.target}</span></button>`;
      }).join('');
      const rowAnimDelay = animateRows ? ` style="animation-delay:${i * 0.03}s"` : '';

      return `<div class="ex-row ${isDone ? 'done' : ''} ${inProgress ? 'in-progress' : ''}"${rowAnimDelay}>
        <div class="ex-head">
          <div class="ex-head-main">
            <div class="ex-name">${escapeHtml(e.n)}</div>
            <div class="ex-prescription">${escapeHtml(e.s)}</div>
          </div>
          <div class="ex-scheme">${escapeHtml(schemeLabel)}</div>
        </div>
        <div class="ex-set-track">
          ${setButtons}
        </div>
        <div class="ex-foot">
          <div class="ex-progress ${isDone ? 'done' : ''}">${escapeHtml(progressLabel)}</div>
          <div class="ex-actions">
            <button type="button" class="ex-complete-btn ${isDone ? 'done' : ''}" onclick="toggleExercise(event, ${active}, ${i})">${isDone ? 'Done' : 'Mark Done'}</button>
            <button type="button" class="ex-details-btn" onclick="openModal(${active}, ${i})">Details</button>
          </div>
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

  const importBtn = document.getElementById('import-csv-btn');
  if (importBtn) importBtn.addEventListener('click', openRoutineCsvPicker);

  const csvInput = document.getElementById('routine-csv-input');
  if (csvInput) csvInput.addEventListener('change', handleRoutineCsvInputChange);

  const resetRoutineBtn = document.getElementById('reset-default-routine-btn');
  if (resetRoutineBtn) resetRoutineBtn.addEventListener('click', resetRoutineToDefault);

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

  initializeRoutineDays();
  appState = loadAppState(defaultDay);
  active = clampDayIndex(appState.activeDay);

  saveAppState();
  initDayTabs();
  initGlobalHandlers();
  initInstallUX();
  initServiceWorker();
  updateNetworkStatus();
  scheduleUndoExpiry();
  render(active, { animateRows: true });
}

boot();
