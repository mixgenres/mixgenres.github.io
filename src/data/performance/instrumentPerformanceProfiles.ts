import {
  INSTRUMENT_CATALOG,
  WORLD_INSTRUMENT_HINTS,
} from '../instruments';
import type { InstrumentDef } from '../instruments/types';

export type PerformanceFamily =
  | 'bellows' | 'bowed-string' | 'plucked-string' | 'keyboard'
  | 'wind' | 'brass' | 'membrane' | 'metal-wood-percussion'
  | 'kit' | 'voice' | 'electronic' | 'body-percussion' | 'effect';

export type EvidenceLevel = 'authored' | 'derived' | 'missing';

export interface GestureSpec {
  id: string;
  family: PerformanceFamily;
  intent: 'tone' | 'accent' | 'ghost' | 'mute' | 'sustain' | 'ornament' | 'transition' | 'punctuation' | 'noise';
  attack: number;
  length: number;
  damping: number;
  pressure: number;
  pitchMotion: number;
  fidelity: 'faithful' | 'approximate' | 'symbolic';
  sourceTechniques: string[];
}

export interface GenrePerformanceProfile {
  genreId: string;
  evidence: EvidenceLevel;
  idiomatic: boolean;
  roles: string[];
  gestureIds: string[];
  preferredGestures: string[];
  density: { min: number; max: number; accentContrast: number };
  timing: { feel: 'push' | 'neutral' | 'layback'; offsetMs: number; swing: number };
  register: { centerOffset: number; lowBias: number; highBias: number };
  phrase: { attack: number; sustain: number; cadenceRelease: number; ornamentCap: number };
  forbiddenGestures: string[];
  sourceGenres: string[];
}

export interface InstrumentPerformanceProfile {
  instrumentId: string;
  family: PerformanceFamily;
  authoredGenres: string[];
  primaryGenres: string[];
  capabilities: {
    lowMidi: number;
    highMidi: number;
    comfortableLowMidi: number;
    comfortableHighMidi: number;
    maxSimultaneousPitches: number;
    sustained: boolean;
    continuous: boolean;
    finiteExciter: boolean;
    handCount: number;
    maxActuationHz: number;
  };
  gestures: Record<string, GestureSpec>;
  genreProfiles: Record<string, GenrePerformanceProfile>;
  adaptationOrder: string[];
  scope: {
    roles: string[];
    primaryGenres: string[];
    authoredTechniqueCount: number;
    hasPhysicalModel: boolean;
  };
  evidence: {
    physical: EvidenceLevel;
    range: EvidenceLevel;
    techniques: EvidenceLevel;
    genres: EvidenceLevel;
  };
}

const GENRES = [...Object.keys(WORLD_INSTRUMENT_HINTS), 'milonga'];

function familyOf(d: InstrumentDef): PerformanceFamily {
  const f = d.family;
  if (/bellows|free-reed/.test(f)) return 'bellows';
  if (f === 'bowed') return 'bowed-string';
  if (/plucked|string/.test(f) || d.excitationType === 'plectrum' || d.excitationType === 'nail' || d.excitationType === 'fingerpad') return 'plucked-string';
  if (/keyboard/.test(f) || ['piano','organ','harpsichord'].some(x => d.id.includes(x))) return 'keyboard';
  if (f === 'brass') return 'brass';
  if (f === 'winds') return 'wind';
  if (f === 'voice') return 'voice';
  if (f === 'hand-drums' || f === 'body-percussion') return 'membrane';
  if (f === 'kit') return 'kit';
  if (f === 'metal-and-wood') return 'metal-wood-percussion';
  if (f === 'electronic') return 'electronic';
  if (f === 'free-reed') return 'bellows';
  return 'effect';
}

function roleOf(d: InstrumentDef): string {
  if (d.voicing === 'bass' || d.acousticProfile?.role === 'bass') return 'bass';
  if (d.voicing === 'unpitched' || d.drum || d.kit) return 'percussion';
  if (d.acousticProfile?.role) return d.acousticProfile.role;
  if (d.voicing === 'chord') return 'comp';
  return 'melody';
}

function rangeOf(d: InstrumentDef) {
  const playable = d.playability?.practicalRange;
  if (playable) {
    return {
      low: playable.lowMidi,
      high: playable.highMidi,
      comfortableLow: d.playability?.comfortableRange?.lowMidi,
      comfortableHigh: d.playability?.comfortableRange?.highMidi,
    };
  }
  const r = d.tuningAndMechanics?.keyRange;
  if (r) return { low: r.lowMidi, high: r.highMidi };
  // AcousticProfile is authoritative when an instrument does not expose a
  // mechanical/tuning keyRange. Do not invent a ±30-semitone range around
  // centre: bass instruments in particular may legitimately live far below it.
  const acoustic = d.acousticProfile;
  if (acoustic && Number.isFinite(acoustic.low) && Number.isFinite(acoustic.high)) {
    return { low: Math.max(0, acoustic.low), high: Math.min(127, acoustic.high) };
  }
  if (d.drum?.low !== undefined) return { low: Math.max(0,d.drum.low-12), high: Math.min(127,d.drum.high+12) };
  const center = Math.round((d.acousticProfile?.centre ?? 60));
  const low = Math.max(0, center - (d.family === 'winds' || d.family === 'brass' ? 24 : 30));
  const high = Math.min(127, center + (d.family === 'winds' || d.family === 'brass' ? 24 : 30));
  return { low, high };
}

function intentOf(a: string): GestureSpec['intent'] {
  const s = a.toLowerCase();
  if (/ghost|heel|toe|tap|mute|chop|dead|muffled|tapao/.test(s)) return 'ghost';
  if (/slap|accent|marcato|strappata|attack|hit|strike|punch|golpe/.test(s)) return 'accent';
  if (/legato|tenuto|arco|open|ring|sustain|long/.test(s)) return 'sustain';
  if (/grace|turn|mordent|tremolo|shake|vibrato|ornament|roll/.test(s)) return 'ornament';
  if (/fall|doit|scoop|bend|arrastre|slide|portamento|gliss/.test(s)) return 'transition';
  if (/fill|punct|stacc|seco|stab|chapa|campana/.test(s)) return 'punctuation';
  if (/noise|scrape|lija|buzz/.test(s)) return 'noise';
  return 'tone';
}

function gestureSpec(d: InstrumentDef, id: string): GestureSpec {
  const p = d.performanceArticulations;
  const s = id.toLowerCase();
  const family = familyOf(d);
  const intent = intentOf(id);
  const key = id as keyof NonNullable<InstrumentDef['performanceArticulations']>;
  const normalizedKey = s.replace(/-/g, '') as keyof NonNullable<InstrumentDef['performanceArticulations']>;
  const explicit = p?.[key] ?? p?.[normalizedKey] ?? undefined;
  const explicitTransientSharpness = explicit && 'transientSharpness' in explicit ? explicit.transientSharpness : undefined;
  const explicitDampingFactor = explicit && 'dampingFactor' in explicit ? explicit.dampingFactor : undefined;
  const attack =
    explicitTransientSharpness ??
    (d.dspProfile?.excitationDynamics.attackCollision ?? d.physicalModel?.parameters?.transientSharpness ?? 0.5);
  const damping =
    explicitDampingFactor ??
    (d.acousticProfile?.ring ? Math.max(0, Math.min(1, 1 - d.acousticProfile.ring / 5)) : 0.35);
  const pressure = d.dspProfile?.excitationDynamics.pressureSensitivity ?? d.physicalModel?.parameters?.bowPressure ?? 0.5;
  const pitchMotion = /arrastre|slide|bend|fall|doit|scoop|gliss|portamento/i.test(s) ? 1 : 0;
  const length = /ghost|staccato|slap|tap|chop|punct/i.test(s) ? 0.25 : /sustain|arco|legato|tenuto|open/i.test(s) ? 0.9 : 0.55;
  const fidelity = (d.techniques.articulations.includes(id) ? 'faithful' : 'symbolic') as GestureSpec['fidelity'];
  return { id, family, intent, attack, length, damping, pressure, pitchMotion, fidelity, sourceTechniques: [id] };
}

const FAMILY_PRIMARY_GENRES: Record<PerformanceFamily,string[]> = {
  'bellows': ['tango','folk','cumbia','salsa'],
  'bowed-string': ['classical','jazz','folk','tango'],
  'plucked-string': ['folk','jazz','blues','flamenco'],
  'keyboard': ['jazz','gospel','funk','rock'],
  'wind': ['jazz','folk','classical','blues'],
  'brass': ['jazz','salsa','funk','ska'],
  'membrane': ['salsa','timba','folk','flamenco'],
  'metal-wood-percussion': ['folk','salsa','jazz','classical'],
  'kit': ['jazz','rock','funk','swing'],
  'voice': ['folk','jazz','gospel','soul'],
  'electronic': ['electronic','house','funk','hip-hop'],
  'body-percussion': ['flamenco','folk','salsa','tango'],
  'effect': ['electronic','dub','rock','ambient'],
};

const CURATED_GENRE_OVERRIDES: Record<string, Record<string, string[]>> = {
  'upright-bass': {
    tango: ['arrastre','strappata','lija','tambor','chicharra','pizzicato','arco','staccato','accent'],
    salsa: ['pizzicato','accent','ghost','staccato'],
    timba: ['pizzicato','accent','ghost','staccato'],
    blues: ['pizzicato','ghost','accent','legato'],
    jazz: ['pizzicato','accent','ghost','legato'],
    swing: ['pizzicato','accent','ghost','legato'],
    flamenco: ['pizzicato','slap','tambor','accent'],
  },
  'slap-bass': {
    funk: ['slap','pop','ghost','accent'],
    blues: ['slap','ghost','accent','staccato'],
    salsa: ['slap','ghost','accent','staccato'],
    timba: ['slap','ghost','accent','staccato'],
    tango: ['slap','ghost','accent','staccato'],
  },
  'bandoneon': {
    tango: ['marcato','arrastre','staccato','legato'],
    milonga: ['staccato','marcato','legato'],
    salsa: ['staccato','accent','legato'],
    cumbia: ['staccato','accent','legato'],
  },
  congas: {
    salsa: ['open','slap','ghost','heel','toe','slap-tapao','conga-open','tumba-open'],
    timba: ['open','slap','ghost','heel','toe','slap-tapao','conga-open','tumba-open'],
    rumba: ['open','slap','ghost','heel','toe'],
    cumbia: ['open','accent','ghost'],
  },
  trumpet: {
    salsa: ['accent','staccato','legato','fall','doit','shake'],
    timba: ['accent','staccato','legato','fall','doit','shake'],
    jazz: ['accent','staccato','legato','fall','doit','shake'],
    swing: ['accent','staccato','legato','fall','doit','shake'],
    blues: ['accent','staccato','legato','fall','doit'],
  },
  piano: {
    salsa: ['marcato','staccato','accent','chapa','cluster'],
    timba: ['marcato','staccato','accent','chapa','cluster'],
    jazz: ['legato','staccato','accent','tenuto'],
    blues: ['staccato','accent','tenuto'],
    gospel: ['legato','accent','tenuto','cluster'],
  },
};

function primaryGenres(d: InstrumentDef): string[] {
  const explicit = d.techniques.playingStyles.map(x => x.toLowerCase());
  const hints = GENRES.filter(g => WORLD_INSTRUMENT_HINTS[g]?.includes(d.id));
  const mapped = explicit.flatMap(x => {
    const direct = GENRES.filter(g => x === g);
    const fuzzy = GENRES.filter(g => x.includes(g) || g.includes(x));
    return [...direct, ...fuzzy];
  });
  const genreTech = Object.keys(d.techniques.genreTechniques ?? {});
  const curated = CURATED_GENRE_OVERRIDES[d.id] ? Object.keys(CURATED_GENRE_OVERRIDES[d.id]) : [];
  const familyDefaults = FAMILY_PRIMARY_GENRES[familyOf(d)] ?? [];
  return Array.from(new Set([...genreTech, ...mapped, ...hints, ...curated, ...familyDefaults]))
    .filter(g => GENRES.includes(g));
}

function rolesForGenre(d: InstrumentDef, genre: string): string[] {
  const base = roleOf(d);
  const extra: string[] = [];
  if (genre === 'salsa' || genre === 'timba') {
    if (familyOf(d) === 'membrane') extra.push('pulse','break');
    if (d.id.includes('bass')) extra.push('tumbao-bass');
    if (d.id.includes('piano')) extra.push('montuno','comp');
    if (/trumpet|trombone|horn/.test(d.id)) extra.push('punctuation');
  }
  if (genre === 'jazz' || genre === 'swing' || genre === 'blues') {
    if (d.voicing === 'bass') extra.push('walking-bass');
    if (familyOf(d) === 'brass' || familyOf(d) === 'wind') extra.push('swing-phrasing');
  }
  if (genre === 'tango' && (d.id.includes('bass') || familyOf(d) === 'bellows' || familyOf(d) === 'bowed-string')) extra.push('marcato','sincopa','punctuation');
  return Array.from(new Set([base, ...extra]));
}

function timingForGenre(genre: string, d: InstrumentDef) {
  const g = genre.toLowerCase();
  const explicit = d.dspProfile?.genreDialects?.[g];
  const text = `${d.techniques.playingStyles.join(' ')} ${(d.techniques.genreTechniques?.[g] ?? []).join(' ')}`.toLowerCase();
  const push = /anticip|push|ahead|driving/.test(text);
  const lay = /laid|behind|layback|swing|blues|jazz/.test(text) || /jazz|swing|blues/.test(g);
  const offset = explicit?.attack !== undefined ? (explicit.attack - 1) * 12 : push ? -10 : lay ? 10 : 0;
  const feel: 'push' | 'layback' | 'neutral' = push ? 'push' : lay ? 'layback' : 'neutral';
  const swing = /swing|blues|jazz|shuffle/.test(g) ? 0.58 : 0.5;
  return { feel, offsetMs: offset, swing };
}

function profileFor(d: InstrumentDef, genre: string, authored: boolean): GenrePerformanceProfile {
  const authoredGenre = d.techniques.genreTechniques?.[genre] ?? [];
  const curated = CURATED_GENRE_OVERRIDES[d.id]?.[genre] ?? [];
  const all = d.techniques.articulations ?? [];
  // Additive vocabulary: authored genre techniques are retained, curated genre
  // extensions are layered on top, and the full physical technique catalog stays
  // available for adaptation. We never turn an instrument into a closed whitelist
  // merely because one genre profile omitted a technique.
  const selected = Array.from(new Set([...curated, ...authoredGenre, ...all]));
  const preferred = Array.from(new Set([...curated, ...authoredGenre]));
  const roles = rolesForGenre(d, genre);
  const timing = timingForGenre(genre, d);
  const isPerc = familyOf(d) === 'membrane' || familyOf(d) === 'kit' || d.voicing === 'unpitched';
  const densityMax = isPerc ? 1 : d.voicing === 'chord' ? 0.7 : 0.85;
  const ornamentCap = /tango|salsa|timba|flamenco/.test(genre) ? 0.22 : /jazz|blues|swing/.test(genre) ? 0.16 : 0.12;
  const forbidden: string[] = [];
  return {
    genreId: genre,
    evidence: authored ? 'authored' : (selected.length ? 'derived' : 'missing'),
    idiomatic: authored,
    roles,
    gestureIds: selected,
    preferredGestures: (preferred.length ? preferred : selected).slice(0, Math.min(8, (preferred.length ? preferred : selected).length)),
    density: { min: isPerc ? 0.4 : 0.18, max: densityMax, accentContrast: /marcato|funk|salsa|timba|tango/.test(`${genre} ${selected.join(' ')}`) ? 1.35 : 1.18 },
    timing,
    register: {
      centerOffset: /bass/.test(roleOf(d)) ? -12 : /lead|melody/.test(roleOf(d)) ? 5 : 0,
      lowBias: /bass|tumbao|walking/.test(roles.join(' ')) ? 0.75 : 0.45,
      highBias: /lead|punctuation|montuno/.test(roles.join(' ')) ? 0.65 : 0.4,
    },
    phrase: {
      attack: timing.feel === 'push' ? 0.65 : 0.5,
      sustain: d.acousticProfile?.sustain === 'sustained' || d.acousticProfile?.sustain === 'blown' ? 0.72 : 0.45,
      cadenceRelease: /tango|flamenco|jazz|blues/.test(genre) ? 0.8 : 0.62,
      ornamentCap,
    },
    forbiddenGestures: forbidden,
    sourceGenres: authored ? [genre] : primaryGenres(d),
  };
}

export const INSTRUMENT_PERFORMANCE_PROFILES: Record<string, InstrumentPerformanceProfile> = Object.fromEntries(
  INSTRUMENT_CATALOG.map(d => {
    const range = rangeOf(d);
    const { low, high } = range;
    const comfortableLow = Math.max(low, range.comfortableLow ?? Math.round(low + (high-low)*0.08));
    const comfortableHigh = Math.min(high, range.comfortableHigh ?? Math.round(high - (high-low)*0.10));
    const family = familyOf(d);
    const authoredGenres = Array.from(new Set([
      ...Object.keys(d.techniques.genreTechniques ?? {}).filter(g => GENRES.includes(g)),
      ...Object.keys(CURATED_GENRE_OVERRIDES[d.id] ?? {}).filter(g => GENRES.includes(g)),
    ]));
    const primaries = primaryGenres(d);
    const genres: Record<string, GenrePerformanceProfile> = {};
    for (const genre of GENRES) {
      genres[genre] = profileFor(d, genre, authoredGenres.includes(genre));
    }
    const gestureIds = Array.from(new Set(d.techniques.articulations));
    const gestures = Object.fromEntries(gestureIds.map(a => [a, gestureSpec(d, a)]));
    const adaptationOrder = Array.from(new Set([
      ...authoredGenres,
      ...primaries,
      ...GENRES.filter(g => g === 'jazz' || g === 'folk' || g === 'classical' || g === 'latin'),
    ]));
    return [d.id, {
      instrumentId: d.id,
      family,
      authoredGenres,
      primaryGenres: primaries,
      capabilities: {
        lowMidi: low,
        highMidi: high,
        comfortableLowMidi: comfortableLow,
        comfortableHighMidi: comfortableHigh,
        maxSimultaneousPitches: Math.max(1, d.maxSimultaneousPitches ?? (
          d.voicing === 'single' || d.voicing === 'bass'
            ? 1
            : d.voicing === 'chord'
              ? d.tuningAndMechanics?.openStrings?.length ?? Math.min(d.polyphony ?? 6, 6)
              : d.polyphony ?? 8
        )),
        sustained: d.acousticProfile?.sustain === 'sustained' || d.acousticProfile?.sustain === 'blown',
        continuous: !!d.continuousExciter || family === 'bowed-string' || family === 'wind' || family === 'brass' || family === 'bellows',
        finiteExciter: !!d.biomechanicsAndKinematics?.finiteExciters,
        handCount: d.biomechanicsAndKinematics?.handCount ?? 2,
        maxActuationHz: d.biomechanicsAndKinematics?.maxActuationHz ?? 14,
      },
      gestures,
      genreProfiles: genres,
      adaptationOrder,
      scope: {
        roles: Array.from(new Set(Object.values(genres).flatMap(g => g.roles))),
        primaryGenres: primaries,
        authoredTechniqueCount: d.techniques.articulations.length,
        hasPhysicalModel: Boolean(d.dspProfile || d.physicalModel || d.luthierPhysics),
      },
      evidence: {
        physical: d.dspProfile || d.physicalModel || d.luthierPhysics ? 'authored' : 'missing',
        range: d.tuningAndMechanics?.keyRange || (d.acousticProfile?.low !== undefined && d.acousticProfile?.high !== undefined) ? 'authored' : 'derived',
        techniques: d.techniques.articulations.length ? 'authored' : 'missing',
        genres: authoredGenres.length ? 'authored' : 'derived',
      },
    } satisfies InstrumentPerformanceProfile];
  })
);
