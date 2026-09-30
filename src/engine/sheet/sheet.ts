import type { Song, Region, Track, Measure, SectionType, PatternVariant, MusicalPattern, SpotlightMode, SectionEnergy, GuestLens } from '../../types';
import { GENRE_WORLDS_BY_ID, ALL_PATTERNS, PATTERNS_BY_ID, PATTERNS_BY_WORLD } from '../../data/genres';
import { INSTRUMENTS_BY_ID, INSTRUMENT_CATALOG, instrument, instrumentPatternKinds } from '../../engine/lookup/instruments';
import { sliceBarNative } from './grid.ts';
import { progressionForSection, buildArrangementContext, ArrangementContext } from './arrangementContext.ts';
import { inferKey, parseChord, assertValidChordProgression } from './musicTheory.ts';
import { SHARP_NAMES } from '../../data/musicTheory/pitchClasses';
import { voiceProfile } from '../sheet/instrumentRoles.ts';
import { resolveStyle, StyleRuntime, StyleInfluence, SongStyle, getCanonicalStyle, getStyle } from '../../engine/style';
import { contractForGenre, type ApproachSpec } from '../../engine/style/contracts';
import { suggestedPaletteForGenre } from '../../engine/lookup/theory';
import { clampEnergy, energyForFormIntensity, energyOf, formIntensityForEnergy, shapeScalarOf } from './sectionEnergy.ts';
import { FEELS, type TempoFeel } from '../../data/tempoFeels';
import { SECTION_ENERGY_DEFAULT } from '../../data/performance/sectionEnergyDefaults';
import { BASS_INSTRUMENT_ROLE_PATTERN, VOICE_INSTRUMENT_ROLE_PATTERN, VOICE_FAMILY_ROLE_PATTERN } from '../../data/instruments/roleAssignmentPatterns';
import { ELECTRONIC_TRACK_GENRE_PATTERN, ACOUSTIC_BASS_TRACK_VOLUME_STEPS, ELECTRONIC_BASS_TRACK_VOLUME_STEPS, FIXED_INSTRUMENT_TRACK_VOLUME, TRACK_VOLUME_BY_ROLE, DEFAULT_TRACK_VOLUME } from '../../data/sound/mix/trackVolume';

export interface Voice extends Track {
  instrumentId: string;
}

/** regionId -> trackId -> patternId */
import { LRUMap, registerCache } from '../cache/lru.ts';

export type Arrangement = Record<string, Record<string, string>>;

const persistentPhrasePatternCache = new LRUMap<string, string>(1000, 'persistentPhrasePatternCache');
registerCache(persistentPhrasePatternCache);

export function clearPersistentPhrasePatternCache(): void {
  persistentPhrasePatternCache.clear();
}


export function phraseSpanBars(cycleLength: number): number {
  const cycle = Math.max(1, Math.round(cycleLength || 1));
  return Math.max(cycle, cycle * Math.max(1, Math.ceil(4 / cycle)));
}


/**
 * Single source of truth for section musical identity. A section that has its
 * own genre must resolve its own style; only sections in the song's base genre
 * may inherit sheet.styleId.
 */
export function getResolvedSectionStyle(sheet: Sheet, region: Region): ReturnType<typeof resolveStyle> {
  const genreId = region.genre ?? sheet.worldId;
  const styleId = region.styleId ?? (genreId === sheet.worldId ? sheet.styleId : undefined) ?? getCanonicalStyle(genreId).id;
  return resolveStyle({ genreId, styleId });
}

export function getSectionStyleId(sheet: Sheet, region: Region): string {
  return getResolvedSectionStyle(sheet, region).id;
}

export interface CustomProgression {
  id: string;
  name: string;
  chords: string[];
}

export interface Sheet extends Song {
  arrangement: Arrangement;
  energies?: Record<string, Record<string, SectionEnergy>>;
  worldId: string;
  patternMemory?: Record<string, Record<string, string>>;
  phrasePatternCache?: Record<string, string>;
  tempoShift?: string;
  customProgressions?: (CustomProgression | string[])[];
  /**
   * Per-part playing style. regionId -> trackId -> lens. An entry with weight 0
   * explicitly pins the part to the host style, suppressing inference.
   */
  partLens?: Record<string, Record<string, GuestLens>>;
  /** Per-section interaction state propagated by rebuild into performance compilation. */
  arrangementContext?: Record<string, ArrangementContext>;
}

export function getEffectiveBpm(
  sheet: Sheet,
  regionId?: string
): { bpm: number; feel: TempoFeel; isSectionOverride: boolean } {
  const defaultFeel = FEELS.find(f => f.id === 'as-written') ?? FEELS[3];
  const songFeel = FEELS.find(f => f.id === sheet.tempoShift) ?? defaultFeel;

  if (regionId) {
    const region = sheet.regions.find(r => r.id === regionId);
    if (region) {
      if (region.bpm || region.tempoShift) {
        const baseBpm = region.bpm ?? sheet.bpm;
        const sectionFeel = region.tempoShift
          ? (FEELS.find(f => f.id === region.tempoShift) ?? defaultFeel)
          : songFeel;
        return {
          bpm: Math.round(baseBpm * (region.tempoShift ? sectionFeel.mult : 1)),
          feel: sectionFeel,
          isSectionOverride: true,
        };
      }
    }
  }

  return {
    bpm: Math.round(sheet.bpm * songFeel.mult),
    feel: songFeel,
    isSectionOverride: false,
  };
}

import {
  FormIntensity,
  FormStep,
  GenreForm,
  GENRE_FORMS,
  DEFAULT_PATTERN_PREFERENCES,
  PROGRESSIONS,
  TEMPOS,
  TITLES,
} from "../../data/genreForms";

export type { FormIntensity, FormStep, GenreForm };
export {
  GENRE_FORMS,
  DEFAULT_PATTERN_PREFERENCES,
  PROGRESSIONS,
  TEMPOS,
  TITLES,
};


/**
 * A musician-facing form should have a little connective tissue between the
 * headline sections. Keep the genre grammar intact, but give compact forms a
 * short turnaround/transition so phrases have somewhere to breathe and lead
 * into the next major section.
 */
function expandedFormSteps(worldId: string): FormStep[] {
  return getGenreForm(worldId).steps;
}

export function getGenreForm(worldId: string): GenreForm {
  return GENRE_FORMS[worldId] ?? GENRE_FORMS.rock;
}

export function getFormStep(stepKey: string, worldId: string): FormStep | undefined {
  const form = { ...getGenreForm(worldId), steps: expandedFormSteps(worldId) };
  return form.steps.find(s => s.key === stepKey || s.kind === stepKey);
}


/* --- deterministic wobble so a repeat is never a photocopy ---------------- */
function hash(s: string, n: number) {
  let h = 2166136261 ^ n;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return ((h >>> 0) % 100000) / 100000;
}

function stableSeed(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}

function pickIndex(key: string, length: number): number {
  return length > 0 ? Math.floor(hash(key, stableSeed(key)) * length) : 0;
}


/* --- pattern normalisation --- */
export function toBar(
  onsets: number[], accents: number[] | undefined, durations: number[] | undefined,
  subdivisions: number, barInCycle: number,
): { onsets: number[]; accents?: number[]; durations?: number[] } {
  const declared = Math.max(1, subdivisions || 16);
  const authoredMax = onsets.length ? Math.max(...onsets) : -1;
  // Legacy entries occasionally contain 16-step attacks while labelled as an
  // odd/compound grid. Preserve the authored attacks instead of dropping them.
  const sourceGrid = authoredMax >= declared ? Math.max(16, authoredMax + 1) : declared;

  if (sourceGrid === 16) {
    return {
      onsets: onsets.filter(o => o >= 0 && o < 16),
      accents: accents?.slice(0, onsets.length),
      durations: durations?.slice(0, onsets.length),
    };
  }

  if (sourceGrid > 16 && sourceGrid % 16 === 0) {
    const bars = sourceGrid / 16;
    const from = (barInCycle % bars) * 16;
    const keep: number[] = [], a: number[] = [], d: number[] = [];
    onsets.forEach((o, i) => {
      if (o >= from && o < from + 16) {
        keep.push(o - from);
        if (accents) a.push(accents[i] ?? 0.75);
        if (durations) d.push(durations[i] ?? 1);
      }
    });
    return { onsets: keep, accents: accents ? a : undefined, durations: durations ? d : undefined };
  }

  const seen = new Set<number>();
  const keep: number[] = [], a: number[] = [], d: number[] = [];
  onsets.forEach((o, i) => {
    if (o < 0 || o >= sourceGrid) return;
    const mapped = Math.min(15, Math.max(0, Math.round((o * 16) / sourceGrid)));
    if (seen.has(mapped)) return;
    seen.add(mapped); keep.push(mapped);
    if (accents) a.push(accents[i] ?? 0.75);
    if (durations) d.push(durations[i] ?? 1);
  });
  return { onsets: keep, accents: accents ? a : undefined, durations: durations ? d : undefined };
}

/**
 * Worlds a genre explicitly cross-links to. These are the neighbours the
 * adventure dial reaches into first, because the catalog author already said
 * these two universes talk to each other.
 */
export function guestWorldIdsFor(worldId: string): string[] {
  const world = GENRE_WORLDS_BY_ID[worldId];
  const links = world?.crossLinks ?? [];
  return links.filter(id => id !== worldId && !!GENRE_WORLDS_BY_ID[id]);
}

/* --- roles fall out of the instrument, not the other way round ------------ */
export function roleForInstrument(instrumentId: string): string {
  const def = INSTRUMENTS_BY_ID[instrumentId];
  if (!def) return 'harmony';
  if (def.voicing === 'bass' || BASS_INSTRUMENT_ROLE_PATTERN.test(instrumentId)) return 'bass';
  if (def.voicing === 'unpitched') return 'percussion';
  // Keep the composition role vocabulary aligned with instrumentProfile.
  if (VOICE_INSTRUMENT_ROLE_PATTERN.test(instrumentId) || VOICE_FAMILY_ROLE_PATTERN.test(def.family ?? '')) return 'voice';
  if (def.voicing === 'single') {
    const role = voiceProfile(instrumentId).role;
    return role === 'perc' ? 'percussion' : role;
  }
  return 'harmony';
}

function calibratedTrackVolume(genreId: string, instrumentId: string, role: string): number {
  const forward = contractForGenre(genreId).timbreSpace.mixCharacter?.bassForward ?? 0.5;
  const acoustic = !ELECTRONIC_TRACK_GENRE_PATTERN.test(genreId);
  if (role === 'bass') {
    const steps = acoustic ? ACOUSTIC_BASS_TRACK_VOLUME_STEPS : ELECTRONIC_BASS_TRACK_VOLUME_STEPS;
    return steps.find(step => forward < step.upperBound)?.level ?? steps[steps.length - 1].level;
  }
  if (Object.hasOwn(FIXED_INSTRUMENT_TRACK_VOLUME, instrumentId)) return FIXED_INSTRUMENT_TRACK_VOLUME[instrumentId];
  if (Object.hasOwn(TRACK_VOLUME_BY_ROLE, role)) return TRACK_VOLUME_BY_ROLE[role];
  return DEFAULT_TRACK_VOLUME;
}


/**
 * How well a pattern belongs to a style.
 *
 * `adventure` (0..1) decides whether "does not belong" means *forbidden* or
 * merely *unusual*. Two things stay forbidden at any setting, because they are
 * statements the style author made on purpose rather than defaults:
 *
 *   - an explicit `patterns.avoid` entry
 *   - a tag the style's `rules.forbid` names
 *
 * Everything else becomes a penalty that shrinks as the dial opens. At
 * adventure 0 the behaviour is the old hard veto; at 1 a foreign cell is
 * roughly as available as a native one, and the blend engine supplies the
 * phrasing that makes it sound intentional rather than mistaken.
 */

function canonicalPatternSection(sectionKind?: string): string | undefined {
  const k = String(sectionKind ?? '').toLowerCase();
  if (!k) return undefined;
  if (/intro|introduc|salida|opening/.test(k)) return 'intro';
  if (/chorus|coro|refrain|hook|montuno|remate/.test(k)) return 'chorus';
  if (/verse|verso|tema|letra|preg|a$|b$/.test(k)) return 'verse';
  if (/solo|trading|instrumental|falseta|variaci|descarga|mambo|development/.test(k)) return 'solo';
  if (/bridge|puente|break|drop|breakdown/.test(k)) return 'bridge';
  if (/coda|cierre|outro|ending|tag/.test(k)) return 'ending';
  return k;
}

export function patternStyleFit(
  pattern: MusicalPattern,
  styleId?: string,
  genreId?: string,
  adventure: number = 0.25,
): number {
  if (!styleId) return 0;
  const resolved = resolveStyle({ genreId, styleId });
  const stylePatternIds = resolved.patterns ?? {};
  const daring = Math.max(0, Math.min(1, adventure));

  let penalty = 0;
  if (stylePatternIds.avoid?.includes(pattern.id)) penalty -= 80;
  if (pattern.tags?.some(tag => resolved.rules?.forbid?.some(r => r.tag === tag || r.tag === `tag:${tag}`))) {
    penalty -= 80;
  }

  // Filter styleIds to only those that actually exist in our registry.
  // Stale styleIds from catalog rebuilds should be treated as unowned/unscoped fallback material
  // rather than a "sibling style" mismatch which would veto the pattern.
  const ids = new Set((pattern.styleIds ?? []).filter(id => !!getStyle(id)));
  if (ids.has(styleId)) return 100 + penalty;
  if (stylePatternIds.inferred?.includes(pattern.id)) return 50 + penalty;
  if (stylePatternIds.require?.includes(pattern.id)) return 90 + penalty;
  if (stylePatternIds.preferred?.includes(pattern.id)) return 70 + penalty;

  // Owned by a sibling style: soft preference penalty, never a hard veto in an exploratory engine.
  if (ids.size > 0 && !ids.has(styleId)) {
    return -40 + daring * 50 + penalty;
  }
  // Outside the style's curated set but unowned.
  if (stylePatternIds.allowed?.length && !stylePatternIds.allowed.includes(pattern.id)) {
    return -20 + daring * 35 + penalty;
  }
  // Unscoped material: ordinary fallback.
  return penalty;
}

/** Resolve the behavioral approach from the target world's contract. */
export function approachForVoice(voice: Voice, worldId: string, styleId?: string): ApproachSpec | undefined {
  const resolved = styleId ? resolveStyle({ genreId: worldId, styleId }) : undefined;
  return resolved?.contract.approaches?.[voice.role] ?? resolved?.contract.approaches?.[String(voice.role).toLowerCase()];
}

function approachFit(pattern: MusicalPattern, approach?: ApproachSpec): number {
  if (!approach) return 0;
  const hay = [pattern.id, pattern.name, pattern.family, pattern.description, ...pattern.tags, ...(pattern.approaches ?? [])].join(' ').toLowerCase();
  const hits = approach.tags.filter(t => hay.includes(t.toLowerCase())).length;
  const explicit = (pattern.approaches ?? []).some(a => a.toLowerCase() === approach.id.toLowerCase());
  return (explicit ? 45 : 0) + hits * 12;
}

/** How well a pattern sits on a voice. Never a veto — only an ordering. */
export function affinity(
  patternId: string,
  voice: Voice,
  worldId: string,
  styleId?: string,
  adventure: number = 0.25,
): number {
  const p = PATTERNS_BY_ID[patternId];
  if (!p) return Number.NEGATIVE_INFINITY;

  const sFit = styleId ? patternStyleFit(p, styleId, worldId, adventure) : 0;

  const kinds = new Set(instrumentPatternKinds(voice.instrumentId));
  const explicitTargets = new Set([...(p.instruments ?? []).map(String), ...(p.compatibleInstruments ?? []).map(String)]);
  const instrumentMatch = [...explicitTargets].some(k => kinds.has(k));
  const explicitMismatch = explicitTargets.size > 0 && !instrumentMatch;
  const roleMatch = p.roles.some(r => r === voice.role || p.compatibleRoles?.includes(voice.role) || kinds.has(r));
  const vocalMismatch = kinds.has('voice') && !p.roles.includes('voice') && !p.canCrossRole;

  const daring = Math.max(0, Math.min(1, adventure));
  let score = p.worldId === worldId ? 50 : -30 + daring * 50;

  if (vocalMismatch) score -= 50;
  if (explicitMismatch) score -= p.canCrossRole ? 85 : 140;
  if (instrumentMatch) score += 30;
  if (roleMatch) score += 14;
  else if (p.roles.length) score -= 10;

  if (styleId) {
    score += sFit;
  }

  // Pattern weight is a tie-breaker among otherwise compatible cells.
  if (typeof p.weight === 'number') score += (p.weight - 0.5) * 10;
  if (kinds.has('coro') && p.roles.includes('voice')) score += 8;
  if (kinds.has('drums') && p.roles.includes('drums')) score += 8;
  return score;
}


/**
 * The weight a form role usually carries when nothing else says otherwise.
 * A default, not a rule: the style's own `arrangement.energyMappings` and the
 * user's section dial both override it.
 */
/**
 * Roughly two thirds of the catalog's patterns have no authored
 * cadence/fill/phraseEnd or transition/phraseStart variant at all (some
 * genre files — bossa nova among them — have none whatsoever). Without one,
 * every 4-bar phrase boundary plays the exact same bar it always does, which
 * is what reads to the ear as an "abrupt" cut rather than a turnaround.
 *
 * This synthesizes a light, deterministic boundary gesture straight from the
 * pattern's own onsetGrid/accentProfile whenever no authored variant exists,
 * so every genre gets *some* lead-in/lead-out at phrase boundaries. It is a
 * safety net, not a replacement for hand-authored variants — an authored
 * cadence/transition variant, when present, always wins (see call site).
 */
function synthesizeBoundaryVariant(
  p: MusicalPattern,
  phraseRole: 'transition' | 'cadence',
  seed: string,
  styleId?: string,
): PatternVariant | undefined {
  const baseOnsets = p.onsetGrid;
  if (!baseOnsets?.length) return undefined;

  const styleGenre = styleId ? getStyle(styleId)?.primaryGenre : undefined;
  let resolvedStyle = styleId && styleGenre ? resolveStyle({ genreId: styleGenre, styleId }) : undefined;
  const gestures = resolvedStyle?.gestures || {};

  // Check if style forbids cadence or has explicit gesture rates
  if (gestures['arrastre'] && gestures['arrastre'].probability === 0 && phraseRole === 'cadence') {
    // A zero rate disables arrastre.
  }

  // Apply probabilistically
  if (hash(`synthBoundaryApply:${seed}`, 3) > 0.65) return undefined;

  const onsets = [...baseOnsets];
  const accents = p.accentProfile ? [...p.accentProfile] : onsets.map(() => 0.75);
  const durations = p.durationGrid ? [...p.durationGrid] : undefined;
  const sub = p.subdivisions || 16;
  const roll = hash(`synthBoundaryShape:${seed}`, 5);

  // Dembow fill gesture
  if (phraseRole === 'cadence' && gestures['dembow-fill']?.probability) {
    const isDrums = p.roles.includes('drums') || p.roles.includes('percussion');
    if (isDrums) {
      return {
        id: `${p.id}-dembow-fill`, parentPatternId: p.id,
        name: `${p.name} — dembow fill`, variationType: 'fill', probability: 0.9,
        description: 'Idiomatic dembow cadence fill with 16th-note snare stutter.',
        onsetGrid: [0, 3, 6, 8, 10, 12, 13, 14, 15],
        accentProfile: [0.9, 0.7, 0.8, 0.75, 0.8, 0.85, 0.9, 0.95, 1.0],
        durationGrid: [1, 1, 1, 1, 1, 1, 1, 1, 1],
      };
    }
  }

  // Tango arrastre gesture (pickup anticipation on step 14 or 15)
  if (phraseRole === 'cadence' && gestures['arrastre']?.probability && gestures['arrastre']?.probability !== 0) {
    const isBassOrPiano = p.roles.includes('bass')
      || (p.instruments ?? []).some(id => /piano|bandoneon/i.test(String(id)))
      || (p.compatibleInstruments ?? []).some(id => /piano|bandoneon/i.test(String(id)));
    if (isBassOrPiano) {
      return {
        id: `${p.id}-arrastre-cadence`, parentPatternId: p.id,
        name: `${p.name} — arrastre`, variationType: 'cadence', probability: 0.85,
        description: 'Tango arrastre dragging smoothly into the downbeat.',
        onsetGrid: [0, 4, 8, 14, 15],
        accentProfile: [0.9, 0.6, 0.85, 0.5, 0.95],
        durationGrid: [2, 2, 2, 1, 1],
      };
    }
  }

  // 3-3-2 Piazzolla gesture
  if ((styleId?.includes('nuevo') || gestures['332-piazzolla']?.probability) && p.meter === '4/4') {
    return {
      id: `${p.id}-332-variant`, parentPatternId: p.id,
      name: `${p.name} — 3+3+2 cell`, variationType: 'syncopated', probability: 0.8,
      description: 'Piazzolla 3+3+2 additive accent cadence.',
      onsetGrid: [0, 3, 6, 8, 10, 12],
      accentProfile: [1.0, 0.95, 0.9, 0.6, 0.8, 0.7],
      durationGrid: [3, 3, 2, 2, 2, 2],
    };
  }

  if (phraseRole === 'cadence') {
    // Open a little space before the close, then land a soft pickup a step
    // or two before the bar ends — a miniature turnaround instead of a
    // mid-groove truncation.
    if (onsets.length > 2 && roll > 0.4) {
      onsets.pop(); accents.pop(); durations?.pop();
    }
    const pickupStep = Math.max(0, sub - (sub >= 12 ? 2 : 1));
    if (!onsets.includes(pickupStep)) {
      onsets.push(pickupStep);
      accents.push(Math.min(1, (accents[accents.length - 1] ?? 0.75) * 0.85));
      durations?.push(1);
    }
    if (accents.length) accents[accents.length - 1] = Math.max(0.3, accents[accents.length - 1] * 0.8);
    return {
      id: `${p.id}-auto-cadence`, parentPatternId: p.id,
      name: `${p.name} — auto cadence`, variationType: 'cadence', probability: 1,
      description: 'Algorithmically softened phrase ending; add an authored cadence variant to replace this.',
      onsetGrid: onsets, accentProfile: accents, durationGrid: durations,
    };
  }

  // transition: thin/nudge the very first attack so the new phrase doesn't
  // land as an exact carbon copy of the downbeat that just played.
  if (onsets.length > 1 && onsets[0] === 0 && roll > 0.35) {
    onsets[0] = sub >= 12 ? 1 : 1;
  }
  if (accents.length) accents[0] = Math.max(0.55, accents[0] * 0.9);
  return {
    id: `${p.id}-auto-transition`, parentPatternId: p.id,
    name: `${p.name} — auto transition`, variationType: 'transition', probability: 1,
    description: 'Algorithmically softened phrase entry; add an authored transition variant to replace this.',
    onsetGrid: onsets, accentProfile: accents, durationGrid: durations,
  };
}

/**
 * Choose a base pattern or one of its authored variants.
 *
 * Part weight biases the choice: low weight favours sparse/breakdown variants,
 * high weight favours dense/syncopated/ornamented ones, and the middle prefers
 * the canonical cell. `development` decides how willing the engine is to leave
 * the canonical cell at all — at 0 it almost never does, which is what a
 * hypnotic vamp needs.
 */
function choosePatternVariant(
  variants: PatternVariant[] | undefined,
  phraseRole: 'body' | 'transition' | 'cadence',
  seed: string,
  partEnergy: SectionEnergy = 3,
): PatternVariant | undefined {
  if (!variants?.length) return undefined;
  const eligible = variants.filter(v => {
    if (phraseRole === 'cadence') return ['cadence', 'fill', 'phraseEnd'].includes(v.variationType);
    if (phraseRole === 'transition') return ['transition', 'phraseStart'].includes(v.variationType);
    return !['cadence', 'fill', 'phraseEnd', 'transition', 'phraseStart'].includes(v.variationType);
  });
  if (!eligible.length) return undefined;

  const SPARSE: string[] = ['sparse', 'breakdown'];
  const BUSY: string[] = ['dense', 'syncopated', 'anticipated', 'ornamented', 'development'];

  const variantWeight = (v: PatternVariant) => {
    let base = Math.max(0, Number(v.probability) || 0.25);
    if (partEnergy <= 2) {
      if (SPARSE.includes(v.variationType)) base *= 4.0;
      else if (v.variationType === 'dense' || v.variationType === 'ornamented') base *= 0.1;
    } else if (partEnergy >= 5) {
      if (BUSY.includes(v.variationType)) base *= 3.5;
      else if (SPARSE.includes(v.variationType)) base *= 0.1;
    } else {
      if (SPARSE.includes(v.variationType) || v.variationType === 'dense') base *= 0.6;
    }
    return base;
  };

  const totalVariantsWeight = eligible.reduce((sum, v) => sum + variantWeight(v), 0);
  const dev = 0.45;
  const energyBias = partEnergy >= 5 ? 0.35 : partEnergy <= 2 ? 0.15 : 0;
  // A high canonical weight means "keep playing the cell as written".
  // Development lowers it proportionally to variant weights, so the part develops organically.
  const canonicalWeight = Math.max(0.05, totalVariantsWeight * Math.max(0.08, 1.15 - dev * 1.45 - energyBias));
  const total = canonicalWeight + totalVariantsWeight;
  const roll = hash(`variant:${seed}`, 0) * total;
  if (roll < canonicalWeight) return undefined;
  let cursor = canonicalWeight;
  for (const v of eligible) {
    cursor += variantWeight(v);
    if (roll < cursor) return v;
  }
  return eligible[eligible.length - 1];
}

/**
 * Choose a pattern for one voice in one section. `taken` holds what the rest
 * of the band is already playing here, so two voices don't end up doubling the
 * same figure — which was what made every section sound the same.
 */
export function suggestPattern(
  voice: Voice, worldId: string, salt: number,
  sectionKind?: string, taken?: Set<string>,
  partEnergy?: SectionEnergy,
  styleId?: string,
): string | undefined {
  const patternSection = canonicalPatternSection(sectionKind);
  const want = partEnergy ?? (sectionKind ? SECTION_ENERGY_DEFAULT[sectionKind] : undefined);
  const resolved = styleId ? resolveStyle({ genreId: worldId, styleId }) : undefined;
  const approach = approachForVoice(voice, worldId, styleId);
  // The curated set is the default menu. Adventure widens it to the whole
  // world, then to neighbouring worlds the style explicitly cross-links to.
  const curated = resolved?.patterns?.allowed?.length ? resolved.patterns.allowed : undefined;
  const worldWide = (PATTERNS_BY_WORLD[worldId] || []).map(p => p.id);
  const guestWorlds = guestWorldIdsFor(worldId);
  const guestIds = guestWorlds.flatMap(g => (PATTERNS_BY_WORLD[g] || []).map(p => p.id));
  const candidateIds = Array.from(new Set([...(curated ?? []), ...worldWide, ...guestIds, ...Object.keys(PATTERNS_BY_ID)]));
  const scored = candidateIds
    .map(id => PATTERNS_BY_ID[id])
    .filter((p): p is MusicalPattern => !!p && p.enabled !== false)
    .map(p => {
      let n = affinity(p.id, voice, worldId, styleId);
      const behavioralFit = approachFit(p, approach);
      if (approach && behavioralFit > 0) n += behavioralFit;
      if (!Number.isFinite(n)) return { id: p.id, n: -999 };
      if (p.id === DEFAULT_PATTERN_PREFERENCES[worldId]?.[voice.instrumentId]) n += 8;
      if (styleId && p.styleIds?.includes(styleId)) n += 30;
      if (resolved?.contract.timelineRequired && resolved.contract.timelineGrid.length) {
        const authored = new Set(p.onsetGrid ?? []);
        const overlap = resolved.contract.timelineGrid.filter(x => authored.has(x)).length / resolved.contract.timelineGrid.length;
        n += overlap * 18;
        if (overlap < 0.2 && p.category !== 'melody' && p.category !== 'texture') n -= 20;
      }
      if (sectionKind) {
        const usesSection = !!patternSection && p.sectionUsage?.some(u => canonicalPatternSection(u) === patternSection);
        if (usesSection) n += 32;
        else if (p.sectionUsage?.length) n -= 7;
      }
      if (partEnergy) {
        if (p.supportedEnergy?.includes(partEnergy)) n += 18;
        else if (partEnergy === 1 && p.category === 'fill') n -= 15;
        else if (p.supportedEnergy?.length) n -= 6;
      } else if (want && p.supportedEnergy?.includes(want)) n += 2;
      if (sectionKind && ['verse', 'pre-chorus', 'bridge'].includes(sectionKind) && ['fill', 'cadence', 'sectionPattern'].includes(p.category)) n -= 12;
      if (taken?.has(p.id)) n -= 75;
      return { id: p.id, n: n + hash(`${p.id}:${sectionKind ?? 'body'}`, salt) * 3 };
    })
    .sort((a, b) => b.n - a.n);

  const viable = scored.filter(x => x.n > -150);
  if (!viable.length) return scored[0]?.id;
  const best = viable[0].n;
  const window = viable.filter(x => x.n >= best - 25).slice(0, 10);
  return window[Math.floor(hash(`pick:${worldId}:${voice.instrumentId}:${sectionKind ?? 'body'}`, salt) * window.length)]?.id
    ?? window[0].id;
}

/**
 * The full articulation stack for a bar: the pattern's own list, plus whatever
 * the chosen variant adds. Order matters — later entries layer over earlier
 * ones in `resolveArticulationStack`.
 */
function mergeArticulations(p: MusicalPattern, v?: PatternVariant): string[] {
  const out: string[] = [];
  for (const a of p.articulations ?? []) if (a && !out.includes(a)) out.push(a);
  if (v?.articulation && !out.includes(v.articulation)) out.push(v.articulation);
  return out;
}

// Tier 1 Arrangement Cell Cache
type PatternDetails = NonNullable<Measure['patternDetailsByTrack']>[string];

interface CachedArrangementCell {
  fingerprint: string;
  detailsByBar: (PatternDetails | undefined)[];
}

const arrangementCellDetailsCache = new Map<string, CachedArrangementCell>();

export function clearArrangementCellDetailsCache(): void {
  arrangementCellDetailsCache.clear();
}

/* --- measures are derived, never hand-maintained -------------------------- */
export function rebuild(sheet: Sheet): Sheet {
  // Chords are a hard engine invariant. Validate before creating measures so
  // malformed symbols cannot be carried into voicing/audio generation.
  for (const region of sheet.regions) {
    if (region.chords?.length) assertValidChordProgression(region.chords, `section ${region.id}`);
  }

  // Energy is the authoritative section weight. `intensity` is recomputed from
  // it on every rebuild so the two can never drift apart, and so songs written
  // before the migration are normalised the first time they are touched.
  const regions: Region[] = [];
  let cursor = 0;
  for (const r of sheet.regions) {
    const bars = Math.max(1, r.bars ?? (r.end - r.start));
    const energy = energyOf(r);
    regions.push({
      ...r,
      start: cursor,
      end: cursor + bars,
      bars,
      energy,
      intensity: formIntensityForEnergy(energy),
    } as Region);
    cursor += bars;
  }

  // Migrate old songs that lack energies
  const energies = { ...sheet.energies };
  let migrated = false;
  for (const r of regions) {
    if (!energies[r.id]) {
      energies[r.id] = {};
      migrated = true;
    }
    for (const track of sheet.tracks) {
      if (!energies[r.id][track.id]) {
        migrated = true;
        // Unset parts inherit section energy uniformly. Pattern capabilities
        // may guide cell selection, but must never silently rewrite energy.
        energies[r.id][track.id] = clampEnergy(energyOf(r));
      }
    }
  }

  // Resolve interaction context once per section. This is deliberately kept
  // on the rebuilt sheet so the performance compiler sees the same spotlight
  // decisions that the UI is showing.
  const arrangementContext: Record<string, ArrangementContext> = {};
  for (const r of regions) {
    const resolved = getResolvedSectionStyle(sheet, r);
    arrangementContext[r.id] = buildArrangementContext(
      sheet.tracks as Voice[],
      resolved.contract,
      shapeScalarOf(r),
      energies[r.id],
    );
  }

  const phrasePatternCache = new Map<string, string>([
    ...persistentPhrasePatternCache.entries(),
    ...Object.entries(sheet.phrasePatternCache ?? {}),
  ]);

  const measures: Measure[] = [];
  for (const r of regions) {
    const chords = r.chords?.length ? r.chords : ['Am'];
    const bars = r.end - r.start;
    const byTrack = sheet.arrangement[r.id] ?? {};
    const interaction = arrangementContext[r.id];

    // Compute or retrieve cached pattern details for each track in this region
    const trackBarDetails = new Map<string, (PatternDetails | undefined)[]>();

    for (const track of sheet.tracks) {
      const basePatternId = byTrack[track.id];
      if (!basePatternId || basePatternId === 'silent') {
        trackBarDetails.set(track.id, new Array(bars).fill(undefined));
        continue;
      }

      const partEnergy: SectionEnergy = clampEnergy(energies[r.id]?.[track.id] ?? energyOf(r));

      const cellKey = `${r.id}:${track.id}`;
      const cellFp = `${r.id}:${track.id}:${track.instrumentId}:${r.genre ?? sheet.worldId}:${getSectionStyleId(sheet, r)}:${bars}:${r.kind}:${r.formKey}:${chords.join(',')}:${basePatternId}:${partEnergy}:${sheet.generationSeed ?? 0}:${JSON.stringify(sheet.partLens?.[r.id]?.[track.id] ?? '')}:${interaction?.spotlightedTrackIds?.includes(track.id)}:${interaction?.energyByTrack?.[track.id] ?? ''}`;

      const cached = arrangementCellDetailsCache.get(cellKey);
      if (cached && cached.fingerprint === cellFp && cached.detailsByBar.length === bars) {
        trackBarDetails.set(track.id, cached.detailsByBar);
        continue;
      }

      // Compute fresh bar details for this cell
      const detailsByBar: (PatternDetails | undefined)[] = [];
      const isRhythm = ['bass', 'drums', 'comp'].includes(track.role);

      for (let i = 0; i < bars; i++) {
        const index = r.start + i;
        const phrase = Math.floor(i / phraseSpanBars(getResolvedSectionStyle(sheet, r).contract.cycleLength));
        let patternId = basePatternId;
        if (phrase > 0) {
          const cacheKey = `${basePatternId}:${r.genre ?? sheet.worldId}:${track.id}:${r.id}:${phrase}`;
          const cachedPat = phrasePatternCache.get(cacheKey);
          if (cachedPat !== undefined) {
            patternId = cachedPat;
          } else {
            const base = PATTERNS_BY_ID[basePatternId];
            const resolvedForPatterns = getResolvedSectionStyle(sheet, r);
            const styleId = resolvedForPatterns.id;
            const allowedIds = resolvedForPatterns?.patterns?.allowed?.length ? new Set(resolvedForPatterns.patterns.allowed) : undefined;
            const candidates = (PATTERNS_BY_WORLD[r.genre ?? sheet.worldId] || [])
              .filter(p => !allowedIds || allowedIds.has(p.id))
              .filter(p => p.enabled !== false)
              .filter(p => !base || p.family === base.family || p.category === base.category)
              .filter(p => {
                if (!styleId) return true;
                const ids = p.styleIds ?? [];
                const baseIds = base?.styleIds ?? [];
                return ids.length === 0 || ids.includes(styleId) || (baseIds.includes(styleId) && ids.some(id => baseIds.includes(id)));
              })
              .map(p => {
                let score = affinity(p.id, track as Voice, r.genre ?? sheet.worldId, getSectionStyleId(sheet, r));
                if (p.id === basePatternId) score += 4;
                else score += 14;
                if (base && p.family === base.family) score += 12;
                if (base && p.category === base.category) score += 6;
                if (p.sectionUsage?.includes(r.kind)) score += 5;
                if (p.phrasePosition?.includes((i % phraseSpanBars(getResolvedSectionStyle(sheet, r).contract.cycleLength)) === 0 ? 'start' : 'middle')) score += 2;
                return { p, score: score + hash(`${basePatternId}:${p.id}:${r.id}`, phrase) * 3 };
              })
              .filter(x => x.score > 20)
              .sort((a,b) => b.score-a.score);

            const devHashKey = isRhythm ? `develop:rhythm:${r.id}` : `develop:${track.id}:${r.id}`;
            const pickHashKey = isRhythm ? `rhythm:${r.id}` : `${track.id}:${r.id}`;
            const moves = hash(devHashKey, phrase) < 0.45;
            if (candidates.length && moves) {
              const reach = Math.max(1, Math.round(1 + 0.45 * 6));
              const top = candidates.slice(0, Math.min(reach, candidates.length));
              patternId = top[Math.floor(hash(pickHashKey, phrase) * top.length)].p.id;
            }
            phrasePatternCache.set(cacheKey, patternId);
            persistentPhrasePatternCache.set(cacheKey, patternId);
          }
        }

        const p = PATTERNS_BY_ID[patternId];
        if (!p) {
          detailsByBar.push(undefined);
          continue;
        }

        const cycleBars = phraseSpanBars(getResolvedSectionStyle(sheet, r).contract.cycleLength);
        const atPhraseStart = i % cycleBars === 0;
        const atPhraseEnd = (i + 1) % cycleBars === 0;
        const hasCadenceVariant = (p.variants ?? []).some(v => ['cadence', 'fill', 'phraseEnd'].includes(v.variationType));
        const hasTransitionVariant = (p.variants ?? []).some(v => ['transition', 'phraseStart'].includes(v.variationType));
        const phraseRole = atPhraseEnd ? 'cadence' as const
          : atPhraseStart ? 'transition' as const
          : 'body' as const;

        const variantSeed = isRhythm ? `rhythm:${r.id}:${index}` : `${patternId}:${r.id}:${index}`;
        let v = choosePatternVariant(
          p.variants, phraseRole, variantSeed, partEnergy,
        );
        const styleIdForRegion = getSectionStyleId(sheet, r);
        if (!v && phraseRole === 'cadence' && !hasCadenceVariant) {
          v = synthesizeBoundaryVariant(p, 'cadence', `${patternId}:${r.id}:${index}`, styleIdForRegion);
        } else if (!v && phraseRole === 'transition' && !hasTransitionVariant) {
          v = synthesizeBoundaryVariant(p, 'transition', `${patternId}:${r.id}:${index}`, styleIdForRegion);
        }

        const rawOnsets = v?.onsetGrid ?? p.onsetGrid;
        const sub = p.subdivisions || 16;
        const patternCycleBars = Math.max(1, p.cycleLength || Math.ceil(sub / 16));
        const rawAccents = v?.accentProfile ?? p.accentProfile;
        const rawVelocities = v?.velocityProfile ?? p.velocityProfile;
        const rawDurations = v?.durationGrid ?? p.durationGrid;
        const rawMicro = v?.microtimingOffset;
        const candidateHitTypes = v?.hitGrid ?? p.hitGrid;
        const rawHitTypes = candidateHitTypes && candidateHitTypes.length === rawOnsets.length
          ? candidateHitTypes
          : undefined;

        const bar = toBar(rawOnsets, rawAccents, rawDurations, sub, i % patternCycleBars);
        const perf = sliceBarNative(
          rawOnsets, rawAccents, rawVelocities, rawDurations, rawMicro, rawHitTypes, sub, patternCycleBars, i % patternCycleBars,
        );

        const explicitLens = sheet.partLens?.[r.id]?.[track.id];
        const lens = explicitLens && explicitLens.weight > 0 ? explicitLens : undefined;

        detailsByBar.push({
          patternId: p.id,
          styleId: getSectionStyleId(sheet, r),
          variantId: v?.id,
          onsetGrid: bar.onsets,
          accentProfile: bar.accents,
          durationGrid: bar.durations,
          articulation: v?.articulation ?? p.articulations?.[0],
          articulations: mergeArticulations(p, v),
          variationType: v?.variationType,
          lens,
          partEnergy,
          perf,
        });
      }

      arrangementCellDetailsCache.set(cellKey, {
        fingerprint: cellFp,
        detailsByBar,
      });
      trackBarDetails.set(track.id, detailsByBar);
    }

    // Assemble measures for this region from the track bar details
    for (let i = 0; i < bars; i++) {
      const index = r.start + i;
      const chord = chords[i % chords.length];
      const details: Measure['patternDetailsByTrack'] = {};
      for (const track of sheet.tracks) {
        const d = trackBarDetails.get(track.id)?.[i];
        if (d) {
          details[track.id] = d;
        }
      }
      measures.push({
        id: `m${index}`,
        index,
        regionId: r.id,
        chord,
        root: parseChord(chord).rootName,
        patternByTrack: {},
        patternDetailsByTrack: details,
      });
    }
  }

  return {
    ...sheet,
    regions,
    measures,
    durationMeasures: measures.length,
    energies: migrated ? energies : sheet.energies,
    arrangementContext,
    phrasePatternCache: Object.fromEntries(phrasePatternCache.entries()),
  };
}

/* --- section operations --------------------------------------------------- */
export function setBars(sheet: Sheet, regionId: string, bars: number): Sheet {
  return rebuild({
    ...sheet,
    regions: sheet.regions.map(r => (r.id === regionId ? ({ ...r, bars } as Region) : r)),
  });
}

export function setKind(sheet: Sheet, regionId: string, formKey: string): Sheet {
  const region = sheet.regions.find(r => r.id === regionId);
  const worldId = region?.genre ?? sheet.worldId;
  const styleId = region ? getSectionStyleId(sheet, region) : getCanonicalStyle(worldId).id;
  const resolved = resolveStyle({ genreId: worldId, styleId });
  const templates = resolved.form?.templates;
  const styleSteps = templates?.[0]?.value ?? [];
  const foundStep = styleSteps.find(s => s.key === formKey || s.kind === formKey);

  const step = foundStep || getFormStep(formKey, worldId);
  if (!step) return sheet;
  return rebuild({
    ...sheet,
    regions: sheet.regions.map(r => (r.id === regionId ? {
      ...r,
      kind: step.kind,
      formKey: step.key,
      formLabel: step.label,
      intensity: step.intensity,
      name: step.label,
      bars: step.bars ?? r.bars,
    } : r)),
  });
}

export function setSectionTitle(sheet: Sheet, regionId: string, title: string): Sheet {
  return rebuild({
    ...sheet,
    regions: sheet.regions.map(r => (r.id === regionId ? { ...r, formLabel: title, name: title } : r)),
  });
}

export function setSectionTempoShift(sheet: Sheet, regionId: string, tempoShift?: string): Sheet {
  return rebuild({
    ...sheet,
    regions: sheet.regions.map(r => (r.id === regionId ? { ...r, tempoShift: tempoShift || undefined } : r)),
  });
}

export function setSongTempoShift(sheet: Sheet, tempoShift?: string): Sheet {
  return {
    ...sheet,
    tempoShift: tempoShift || undefined,
  };
}

export function duplicateSection(sheet: Sheet, regionId: string): { sheet: Sheet; newRegionId: string } {
  const i = sheet.regions.findIndex(r => r.id === regionId);
  if (i < 0) return { sheet, newRegionId: regionId };
  const src = sheet.regions[i];
  let id = `r${sheet.regions.length}`;
  while (sheet.regions.some(r => r.id === id)) id = `r${sheet.regions.length + 1}`;
  const bars = Math.max(1, src.bars ?? (src.end - src.start));
  const fresh: Region = {
    ...src,
    id,
    name: src.name,
    kind: src.kind,
    formKey: src.formKey,
    formLabel: src.formLabel,
    intensity: src.intensity,
    bars,
    energy: src.energy,
    tempoShift: src.tempoShift,
    chords: src.chords?.length ? [...src.chords] : ['Am'],
    genre: src?.genre ?? sheet.worldId,
    styleId: src ? getSectionStyleId(sheet, src) : sheet.styleId,
  } as Region;
  const regions = [...sheet.regions];
  regions.splice(i + 1, 0, fresh);
  
  const arrangement = { ...sheet.arrangement, [id]: { ...(sheet.arrangement[regionId] ?? {}) } };
  const energies = { ...sheet.energies, [id]: { ...(sheet.energies?.[regionId] ?? {}) } };
  
  return {
    sheet: rebuild({
      ...sheet,
      regions,
      arrangement,
      energies,
    }),
    newRegionId: id,
  };
}

export function addSensibleSectionAfter(sheet: Sheet, regionId: string): { sheet: Sheet; newRegionId: string } {
  const i = sheet.regions.findIndex(r => r.id === regionId);
  const src = i >= 0 ? sheet.regions[i] : sheet.regions[sheet.regions.length - 1];
  const worldId = src?.genre ?? sheet.worldId ?? 'rock';
  const styleId = src ? getSectionStyleId(sheet, src) : getCanonicalStyle(worldId).id;
  const resolved = resolveStyle({ genreId: worldId, styleId });
  const templates = resolved.form?.templates;
  const steps = (templates && templates.length > 0 && templates[0].value)
    ? templates[0].value
    : [{ key: 'verse', label: 'Verse', kind: 'verse', bars: 8, intensity: 'medium' as const }];

  // Choose the next unused form step.
  let nextStep: FormStep | undefined;
  if (src && steps.length > 0) {
    const currIdx = steps.findIndex(s => s.key === src.formKey || s.key === src.kind || s.kind === src.kind);
    if (currIdx >= 0 && currIdx + 1 < steps.length) {
      nextStep = steps[currIdx + 1];
    } else {
      // Find the first step in the form not yet present in the song, or next musical step
      const existingKeys = new Set(sheet.regions.map(r => r.formKey ?? r.kind));
      nextStep = steps.find(s => !existingKeys.has(s.key))
        ?? steps.find(s => s.kind === 'chorus' || s.kind === 'verse')
        ?? steps[(Math.max(0, currIdx) + 1) % steps.length]
        ?? steps[0];
    }
  } else if (steps.length > 0) {
    nextStep = steps[0];
  }

  const kind = (nextStep?.kind ?? 'verse') as SectionType;
  let key = nextStep?.key ?? `${kind}-${sheet.regions.length + 1}`;
  while (sheet.regions.some(r => (r.formKey ?? r.kind) === key)) key = `${kind}-${sheet.regions.length + 1}-${sheet.regions.filter(r => r.kind === kind).length + 1}`;

  // Disambiguate label if a part with this label already exists
  let label = nextStep?.label ?? (kind.charAt(0).toUpperCase() + kind.slice(1));
  const sameKindCount = sheet.regions.filter(r => r.kind === kind).length;
  if (sheet.regions.some(r => r.formLabel === label || r.name === label)) {
    label = `${kind.charAt(0).toUpperCase() + kind.slice(1)} ${sameKindCount + 1}`;
  }

  const intensity = nextStep?.intensity ?? 'medium';
  const bars = nextStep?.bars ?? Math.max(2, src?.bars ?? (src ? src.end - src.start : 8));
  const energy: SectionEnergy = intensity === 'low' ? 1 : (intensity === 'medium' ? 3 : (intensity === 'high' ? 4 : 5));

  const sectionChords = (resolved.harmony?.sectionProgressions as Record<string, string[]>) ?? {};
  const chordsFallback = (resolved.harmony?.progressionTemplates?.[0]?.value as string[] | undefined)
    ?? (suggestedPaletteForGenre(worldId)[0]?.chords as string[] | undefined)
    ?? PROGRESSIONS[worldId]
    ?? PROGRESSIONS.tango;
  const pickedChords = progressionForSection(sectionChords, key, kind, chordsFallback, resolved.contract);

  let id = `r${sheet.regions.length}`;
  while (sheet.regions.some(r => r.id === id)) id = `r${sheet.regions.length + 1}`;
  const fresh: Region = {
    id,
    name: label,
    kind,
    formKey: key,
    formLabel: label,
    intensity,
    bars,
    energy,
    chords: pickedChords,
    genre: worldId,
    styleId,
    start: 0,
    end: bars,
  } as Region;

  const insertIndex = i >= 0 ? i + 1 : sheet.regions.length;
  const regions = [...sheet.regions];
  regions.splice(insertIndex, 0, fresh);

  // Assign section energies and initial patterns.
  const styleEnergyMappings = resolved.arrangement?.energyMappings ?? {};
  const formEnergies: Record<string, SectionEnergy> = Object.fromEntries(Object.entries(styleEnergyMappings).map(([k, v]) => [k, v as SectionEnergy]));
  const sectionEnergy: SectionEnergy = formEnergies[key] ?? formEnergies[kind] ?? energy;
  const arrangement = { ...sheet.arrangement, [id]: {} as Record<string, string> };
  const energies = { ...sheet.energies, [id]: {} as Record<string, SectionEnergy> };

  const taken = new Set<string>();
  for (const [ti, v] of (sheet.tracks as Voice[]).entries()) {
    const d: SectionEnergy = sectionEnergy;
    energies[id][v.id] = d;

    const p = suggestPattern(v, worldId, insertIndex * 31 + ti * 13 + 7, String(kind), taken, d, styleId);
    if (p) {
      arrangement[id][v.id] = p;
      if (p) taken.add(p);
    }
  }

  return {
    sheet: rebuild({
      ...sheet,
      regions,
      arrangement,
      energies,
    }),
    newRegionId: id,
  };
}

export function addSectionAfter(sheet: Sheet, regionId: string): Sheet {
  return addSensibleSectionAfter(sheet, regionId).sheet;
}

export function removeSection(sheet: Sheet, regionId: string): Sheet {
  if (sheet.regions.length <= 1) return sheet;
  const arrangement = { ...sheet.arrangement };
  delete arrangement[regionId];
  
  const energies = { ...sheet.energies };
  delete energies[regionId];
  
  return rebuild({ ...sheet, regions: sheet.regions.filter(r => r.id !== regionId), arrangement, energies });
}

export function moveSection(sheet: Sheet, regionId: string, delta: number): Sheet {
  const i = sheet.regions.findIndex(r => r.id === regionId);
  const j = i + delta;
  if (i < 0 || j < 0 || j >= sheet.regions.length) return sheet;
  const regions = [...sheet.regions];
  const [x] = regions.splice(i, 1);
  regions.splice(j, 0, x);
  return rebuild({ ...sheet, regions });
}

/* --- voice operations ----------------------------------------------------- */
export function setInstrument(sheet: Sheet, trackId: string, instrumentId: string): Sheet {
  const def = instrument(instrumentId);
  const newVoice = {
    ...(sheet.tracks.find(t => t.id === trackId) as Voice),
    instrumentId, instrument: def.name, name: def.name, kind: instrumentId, role: roleForInstrument(instrumentId)
  };
  
  const tracks = sheet.tracks.map(t => t.id === trackId ? newVoice : t) as Voice[];
  const arrangement = { ...sheet.arrangement };
  
  for (const [ri, region] of sheet.regions.entries()) {
    const current = arrangement[region.id]?.[trackId];
    if (current && current !== 'silent') {
      const used = new Set(Object.values(arrangement[region.id] ?? {}));
      used.delete(current);
      const energy = sheet.energies?.[region.id]?.[trackId] ?? region.energy ?? 3;
      const p = suggestPattern(newVoice, region.genre ?? sheet.worldId, ri * 31 + 17, String(region.kind), used, energy, getSectionStyleId(sheet, region));
      if (p) {
        arrangement[region.id] = { ...(arrangement[region.id] ?? {}), [trackId]: p };
      }
    }
  }

  return rebuild({ ...sheet, tracks, arrangement });
}

/** Set one voice's pattern. Scope 'section' touches only here; 'song' everywhere. */

function uniqueInstrumentIds(ids: string[], count: number): string[] {
  const out: string[] = [];
  for (const id of ids) {
    if (INSTRUMENTS_BY_ID[id] && !out.includes(id)) out.push(id);
    if (out.length >= count) break;
  }
  return out;
}

const rankCache = new Map<string, string[]>();
let rankCacheWorldId = '';

/**
 * Find strong genre-native instrument choices for a slot. Genre hints get a
 * strong boost, but the broader catalog is searched too, so randomisation can
 * actually produce a new ensemble instead of shuffling the same five names.
 */
function rankInstrumentsForWorld(worldId: string, targetRole?: string, styleId?: string): string[] {
  if (rankCacheWorldId !== worldId) {
    rankCache.clear();
    rankCacheWorldId = worldId;
  }
  const cacheKey = `${styleId ?? ''}|${targetRole ?? ''}`;
  if (rankCache.has(cacheKey)) {
    return rankCache.get(cacheKey)!;
  }

  const hintIds: string[] = [];
  const scored = INSTRUMENT_CATALOG
    .filter(def => def.id !== 'silence' && !!INSTRUMENTS_BY_ID[def.id])
    .map(def => {
      const fakeVoice = {
        id: 'candidate', instrumentId: def.id, name: def.name, instrument: def.name,
        role: roleForInstrument(def.id), kind: def.id,
        muted: false, volume: 0.85, lensIds: [], spotlight: 'auto',
      } as Voice;
      const best = (PATTERNS_BY_WORLD[worldId] || [])
        .filter(p => p.enabled !== false)
        .map(p => affinity(p.id, fakeVoice, worldId, styleId))
        .filter(Number.isFinite)
        .sort((a, b) => b - a)[0] ?? -100;
      let n = best * 0.55;
      const hi = hintIds.indexOf(def.id);
      if (hi >= 0) n += 48 - hi * 3;
      if (targetRole && roleForInstrument(def.id) === targetRole) n += 18;
      if (def.voicing === 'bass') n += targetRole === 'bass' ? 8 : 0;
      if (def.voicing === 'unpitched') n += targetRole === 'percussion' ? 8 : 0;
      return { id: def.id, score: n };
    })
    .sort((a, b) => b.score - a.score)
    .map(x => x.id);
  const result = uniqueInstrumentIds(scored, scored.length);
  rankCache.set(cacheKey, result);
  return result;
}

function patternCandidatesForVoice(
  voice: Voice,
  worldId: string,
  sectionKind: string,
  taken: Set<string>,
  previousPatternId?: string,
  partEnergy?: SectionEnergy,
  styleId?: string,
) {
  const want = partEnergy ?? SECTION_ENERGY_DEFAULT[sectionKind];
  const previous = previousPatternId ? PATTERNS_BY_ID[previousPatternId] : undefined;
  const resolvedForPatterns = styleId ? resolveStyle({ genreId: worldId, styleId }) : undefined;
  const allowedIds = resolvedForPatterns?.patterns?.allowed?.length ? new Set(resolvedForPatterns.patterns.allowed) : undefined;
  const approach = approachForVoice(voice, worldId, styleId);
  const pool = Array.from(new Set([
    ...(PATTERNS_BY_WORLD[worldId] || []),
    ...guestWorldIdsFor(worldId).flatMap(g => PATTERNS_BY_WORLD[g] || []),
    ...Object.values(PATTERNS_BY_ID)
  ]));
  return pool
    .filter(p => p.enabled !== false)
    .map(p => {
      let n = affinity(p.id, voice, worldId, styleId);
      const behavioralFit = approachFit(p, approach);
      if (approach && behavioralFit > 0) n += behavioralFit;
      if (!Number.isFinite(n)) return { p, score: -999 };
      if (p.sectionUsage?.includes(sectionKind)) n += 11;
      if (allowedIds) {
        if (allowedIds.has(p.id)) n += 20;
        else n -= 15;
      }
      if (partEnergy) {
        if (p.supportedEnergy?.includes(partEnergy)) n += 15;
        else if (p.supportedEnergy?.length) n -= 10;
      } else if (want && p.supportedEnergy?.includes(want)) n += 4;
      if (p.id === DEFAULT_PATTERN_PREFERENCES[worldId]?.[voice.instrumentId]) n += 20;
      if (taken.has(p.id)) n -= 10;
      if (previous) {
        if (p.id === previous.id) n += 10;
        if (p.family === previous.family) n += 8;
        if (styleId && p.styleIds?.includes(styleId) && previous?.styleIds?.includes(styleId)) n += 6;
        if (p.category === previous.category) n += 3;
      }
      if (['verse', 'pre-chorus', 'bridge'].includes(sectionKind) && ['fill', 'cadence', 'sectionPattern'].includes(p.category)) n -= 15;
      return { p, score: n };
    })
    .filter(x => x.score > -200)
    .sort((a, b) => b.score - a.score);
}

/** Randomise instruments while staying inside the current genre's strongest vocabulary. */
export function randomizeInstruments(sheet: Sheet, repickPatterns = true): Sheet {
  const worldId = sheet.worldId;
  const styleId = sheet.styleId ?? getCanonicalStyle(worldId).id;
  const ranked = rankInstrumentsForWorld(worldId, undefined, styleId);
  const current = sheet.tracks.map(t => t.instrumentId);
  const selected: string[] = [];
  for (let i = 0; i < sheet.tracks.length; i++) {
    const role = (sheet.tracks[i] as Voice).role;
    const roleRanked = rankInstrumentsForWorld(worldId, role, styleId);
    const pool = roleRanked.filter(id => !selected.includes(id));
    const fallback = ranked.filter(id => !selected.includes(id));
    const candidates = (pool.length ? pool : fallback).slice(0, Math.min(10, (pool.length ? pool : fallback).length));
    const nonCurrent = candidates.filter(id => id !== current[i]);
    const choices = nonCurrent.length ? nonCurrent : candidates;
    const roll = choices.length ? pickIndex(`instrument:${sheet.id}:${i}:${choices.join(',')}`, choices.length) : 0;
    selected.push(choices[roll] ?? current[i]);
  }

  const tracks = sheet.tracks.map((t, i) => {
    const id = selected[i] ?? t.instrumentId;
    const def = instrument(id);
    return { ...t, instrumentId: id, instrument: def.name, name: def.name, kind: id, role: roleForInstrument(id) };
  }) as Voice[];

  // Re-pick patterns after an instrument swap: a new instrument deserves its
  // own idiomatic cells in every part, rather than inheriting the old role's patterns.
  // Callers that are about to re-pick every pattern anyway (see
  // randomizeEverythingForSong) can skip this pass and its per-section rebuilds.
  if (!repickPatterns) return rebuild({ ...sheet, tracks });
  let out = rebuild({ ...sheet, tracks });
  for (const r of out.regions) {
    out = randomizePatternsForSection(out, r.id);
  }
  return out;
}

/** Remove every instrument while preserving song form, genre, tempo and chords. */
export function removeAllInstruments(sheet: Sheet): Sheet {
  const arrangement: Arrangement = {};
  for (const r of sheet.regions) arrangement[r.id] = {};
  return rebuild({ ...sheet, tracks: [], arrangement, patternMemory: {} });
}

/** Randomise every part in one section, favouring strong genre/instrument matches. */
export function randomizePatternsForSection(sheet: Sheet, regionId: string): Sheet {
  const region = sheet.regions.find(r => r.id === regionId);
  if (!region) return sheet;
  const worldId = region.genre ?? sheet.worldId;
  const arrangement = { ...sheet.arrangement };
  const next = { ...(arrangement[regionId] ?? {}) };
  const used = new Set<string>();

  for (const track of sheet.tracks) {
    const current = next[track.id];
    if (current === 'silent') continue;
    const partDensity = sheet.energies?.[regionId]?.[track.id];
    const styleId = getSectionStyleId(sheet, region);
    const candidates = patternCandidatesForVoice(track as Voice, worldId, String(region.kind), used, current, partDensity, styleId);
    if (!candidates.length) continue;
    const top = candidates.slice(0, Math.min(8, candidates.length));
    // Prefer a different realization from the current one so every click takes effect immediately
    const nonCurrent = top.filter(x => x.p.id !== current);
    const pool = nonCurrent.length ? nonCurrent : top;
    const pick = pool[pickIndex(`pattern-section:${sheet.id}:${regionId}:${track.id}:${pool.map(x => x.p.id).join(',')}`, pool.length)];
    const picked = pick?.p.id ?? current;
    next[track.id] = picked;
    used.add(picked);
  }

  arrangement[regionId] = next;
  return rebuild({ ...sheet, arrangement });
}

/**
 * Randomise the full song as an arrangement, not as independent dice rolls.
 * Each section stays inside its genre vocabulary, instruments retain coherent
 * families across neighbouring sections, and duplicate cells are discouraged.
 */
export function randomizePatternsForSong(sheet: Sheet): Sheet {
  let out = sheet;
  const chosenByTrack: Record<string, string | undefined> = {};

  for (const region of out.regions) {
    const arrangement = { ...out.arrangement };
    const next = { ...(arrangement[region.id] ?? {}) };
    const worldId = region.genre ?? out.worldId;
    const styleId = getSectionStyleId(out, region);
    const used = new Set<string>();
    for (const track of out.tracks) {
      const current = next[track.id];
      if (current === 'silent') continue;
      const previous = chosenByTrack[track.id] ?? current;
      const partDensity = out.energies?.[region.id]?.[track.id];
      const candidates = patternCandidatesForVoice(track as Voice, worldId, String(region.kind), used, previous, partDensity, styleId);
      if (!candidates.length) continue;

      const top = candidates.slice(0, Math.min(7, candidates.length));
      const nonCurrent = top.filter(x => x.p.id !== current);
      const pool = nonCurrent.length ? nonCurrent : top;
      const picked = pool[pickIndex(`pattern:${sheet.id}:${region.id}:${track.id}:${[...pool.map(x => x.p.id)].join(',')}`, pool.length)]?.p.id;
      if (!picked) continue;
      next[track.id] = picked;
      chosenByTrack[track.id] = picked;
      used.add(picked);
    }

    arrangement[region.id] = next;
    // nothing in this loop reads `measures`, so defer the (expensive) rebuild
    // to a single pass at the end instead of one per section
    out = { ...out, arrangement };
  }
  return rebuild(out);
}


/**
 * Collect authored harmonic templates for a style and genre. Templates come from the
 * style's own harmonic grammars first, with genre fallbacks as a last resort.
 */
function chordTemplatesForRegion(worldId: string, _region: Region, styleId?: string): string[][] {
  if (styleId) {
    const resolved = resolveStyle({ genreId: worldId, styleId });
    const styleTemplates = (resolved.harmony?.progressionTemplates ?? []).map(x => x.value as string[]);
    if (styleTemplates.length) return styleTemplates;
  }
  return suggestedPaletteForGenre(worldId).map(cell => cell.chords as string[]);
}

function transposeChordSymbol(symbol: string, delta: number): string {
  const match = String(symbol ?? '').trim().match(/^([A-G](?:#|b)?)(.*?)(?:\/([A-G](?:#|b)?))?$/);
  if (!match) return symbol;
  const transposeName = (name: string) => {
    const pc = ({ C:0, 'C#':1, Db:1, D:2, 'D#':3, Eb:3, E:4, Fb:4, 'E#':5,
      F:5, 'F#':6, Gb:6, G:7, 'G#':8, Ab:8, A:9, 'A#':10, Bb:10, B:11, Cb:11, 'B#':0 } as Record<string, number>)[name];
    if (pc == null) return name;
    return SHARP_NAMES[(pc + delta + 120) % 12];
  };
  return `${transposeName(match[1])}${match[2] ?? ''}${match[3] ? `/${transposeName(match[3])}` : ''}`;
}

function chordTemplateInKey(template: string[], targetKeyName: string): string[] {
  if (!template.length) return template;
  const source = inferKey(template);
  const target = inferKey([targetKeyName]);
  return template.map(c => transposeChordSymbol(c, target.tonicPc - source.tonicPc));
}

function chordRootDistance(a: string, b: string): number {
  const pa = parseChord(a).rootPc;
  const pb = parseChord(b).rootPc;
  let d = Math.abs(pb - pa) % 12;
  return Math.min(d, 12 - d);
}

function rankChordCandidate(
  candidate: string[],
  current: string[],
  previousLast: string | undefined,
  targetLength: number,
): number {
  let score = 0;
  score -= Math.abs(candidate.length - targetLength) * 1.5;
  if (current.length && candidate.join('|') === current.join('|')) score -= 1.2;
  if (previousLast && candidate.length) {
    score += (3 - Math.min(3, chordRootDistance(previousLast, candidate[0]))) * 0.55;
  }
  if (candidate.length) {
    const last = parseChord(candidate[candidate.length - 1]);
    const first = parseChord(candidate[0]);
    if (last.rootPc === first.rootPc) score += 1.4;
    if (last.quality === 'dominant') score += 0.45;
  }
  return score;
}

/** Randomise the harmonic language of one section, but keep its genre and key. */
export function randomizeChordsForSection(sheet: Sheet, regionId: string): Sheet {
  const region = sheet.regions.find(r => r.id === regionId);
  if (!region) return sheet;
  const worldId = region.genre ?? sheet.worldId;
  const allCurrent = sheet.regions.flatMap(r => r.chords ?? []);
  const key = inferKey(allCurrent.length ? allCurrent : ((suggestedPaletteForGenre(worldId)[0]?.chords as string[]) ?? PROGRESSIONS[worldId] ?? PROGRESSIONS.tango));
  const targetKey = key.name;
  const current = region.chords ?? ((suggestedPaletteForGenre(worldId)[0]?.chords as string[]) ?? PROGRESSIONS[worldId] ?? PROGRESSIONS.tango);
  const currentStr = current.join(',');
  const templates = chordTemplatesForRegion(worldId, region, getSectionStyleId(sheet, region))
    .map(t => chordTemplateInKey(t, targetKey))
        .filter(t => t.length);
  if (!templates.length) return sheet;

  const scored = templates
    .map(t => ({ t, score: rankChordCandidate(t, current, undefined, current.length) }))
    .sort((a, b) => b.score - a.score);
  const pool = scored.slice(0, Math.min(8, scored.length));
  const nonCurrent = pool.filter(x => x.t.join(',') !== currentStr);
  const choices = nonCurrent.length ? nonCurrent : pool;
  const index = pickIndex(`chords-section:${sheet.id}:${regionId}:${choices.map(x => x.t.join(',')).join('|')}`, choices.length);
  const picked = choices[index]?.t ?? current;
  return setSectionChords(sheet, regionId, picked);
}

/**
 * Randomise the whole song's harmony while keeping one coherent tonal centre,
 * repeated form sections related, and neighbouring sections harmonically close.
 */
export function randomizeChordsForSong(sheet: Sheet): Sheet {
  const allCurrent = sheet.regions.flatMap(r => r.chords ?? []);
  const inferred = inferKey(allCurrent.length ? allCurrent : (PROGRESSIONS[sheet.worldId] ?? PROGRESSIONS.tango));
  const targetKey = inferred.name;
  const repeated: Record<string, string[]> = {};
  const chosen: Region[] = [];
  let previousLast: string | undefined;

  for (const [i, region] of sheet.regions.entries()) {
    const group = region.repetitionGroup;
    if (group && repeated[group]) {
      chosen.push({ ...region, chords: repeated[group].slice() });
      previousLast = repeated[group][repeated[group].length - 1];
      continue;
    }

    const current = region.chords ?? PROGRESSIONS[region.genre ?? sheet.worldId] ?? PROGRESSIONS.tango;
    const currentStr = current.join(',');
    const worldId = region.genre ?? sheet.worldId;
    const candidates = chordTemplatesForRegion(worldId, region, getSectionStyleId(sheet, region))
      .map(t => chordTemplateInKey(t, targetKey))
            .filter(t => t.length);
    if (!candidates.length) {
      chosen.push(region);
      previousLast = current[current.length - 1];
      continue;
    }

    const scored = candidates.map(t => ({
      t,
      score: rankChordCandidate(t, current, previousLast, current.length) - Math.abs(i) * 0.001,
    })).sort((a, b) => b.score - a.score);
    const pool = scored.slice(0, Math.min(8, scored.length));
    const nonCurrent = pool.filter(x => x.t.join(',') !== currentStr);
    const choices = nonCurrent.length ? nonCurrent : pool;
    const pick = choices[pickIndex(`chords-song:${sheet.id}:${i}:${choices.map(x => x.t.join(',')).join('|')}`, choices.length)]?.t ?? current;
    chosen.push({ ...region, chords: pick });
    if (group) repeated[group] = pick.slice();
    previousLast = pick[pick.length - 1];
  }


  return rebuild({ ...sheet, regions: chosen });
}

/**
 * Randomise everything in one section: rhythms and chords.
 */
export function randomizeEverythingForSection(sheet: Sheet, regionId: string): Sheet {
  let out = sheet;
  const energies = { ...out.energies };
  const options: SectionEnergy[] = [1, 2, 3, 4, 5];
  const sectionEnergies: Record<string, SectionEnergy> = {};
  for (const t of out.tracks) {
    const roll = pickIndex(`energy:${sheet.id}:${regionId}:${t.id}`, options.length);
    sectionEnergies[t.id] = options[roll];
  }
  energies[regionId] = sectionEnergies;
  out = rebuild({ ...out, energies });

  out = randomizeChordsForSection(out, regionId);
  out = randomizePatternsForSection(out, regionId);
  return out;
}

/**
 * Randomise everything across the entire song: instruments, rhythms, and chords.
 */
export function randomizeEverythingForSong(sheet: Sheet): Sheet {
  let out = randomizeInstruments(sheet, false); // patterns are re-picked below

  const energies: Record<string, Record<string, SectionEnergy>> = {};
  const options: SectionEnergy[] = [1, 2, 3, 4, 5];
  for (const r of out.regions) {
    energies[r.id] = {};
    for (const t of out.tracks) {
      const roll = pickIndex(`energy-song:${sheet.id}:${r.id}:${t.id}`, options.length);
      energies[r.id][t.id] = options[roll];
    }
  }
  out = rebuild({ ...out, energies });

  out = randomizeChordsForSong(out);
  out = randomizePatternsForSong(out);
  return out;
}

export function setPattern(sheet: Sheet, trackId: string, regionId: string, patternId: string, scope: 'section' | 'song' = 'section'): Sheet {
  const arrangement = { ...sheet.arrangement };
  const ids = scope === 'song' ? sheet.regions.map(r => r.id) : [regionId];
  for (const id of ids) arrangement[id] = { ...(arrangement[id] ?? {}), [trackId]: patternId };
  return rebuild({ ...sheet, arrangement });
}

export function clearPattern(sheet: Sheet, trackId: string, regionId: string): Sheet {
  const arrangement = { ...sheet.arrangement };
  const inner = { ...(arrangement[regionId] ?? {}) };
  delete inner[trackId];
  arrangement[regionId] = inner;
  return rebuild({ ...sheet, arrangement });
}

export function isVoiceSilentInSection(sheet: Sheet, trackId: string, regionId: string): boolean {
  const t = sheet.tracks.find(x => x.id === trackId);
  if (t?.muted) return true;
  const pId = sheet.arrangement[regionId]?.[trackId];
  return !pId || pId === 'silent';
}

export function isVoiceSilentInAll(sheet: Sheet, trackId: string): boolean {
  const t = sheet.tracks.find(x => x.id === trackId);
  if (t?.muted) return true;
  if (!sheet.regions.length) return true;
  return sheet.regions.every(r => {
    const pId = sheet.arrangement[r.id]?.[trackId];
    return !pId || pId === 'silent';
  });
}

export function silenceVoiceInSection(sheet: Sheet, trackId: string, regionId: string): Sheet {
  const cur = sheet.arrangement[regionId]?.[trackId];
  const memory = { ...(sheet.patternMemory ?? {}) };
  if (cur && cur !== 'silent') {
    memory[regionId] = { ...(memory[regionId] ?? {}), [trackId]: cur };
  }
  const arrangement = { ...sheet.arrangement };
  arrangement[regionId] = { ...(arrangement[regionId] ?? {}), [trackId]: 'silent' };
  return rebuild({ ...sheet, arrangement, patternMemory: memory });
}

export function silenceVoiceInAll(sheet: Sheet, trackId: string): Sheet {
  const memory = { ...(sheet.patternMemory ?? {}) };
  const arrangement = { ...sheet.arrangement };
  for (const r of sheet.regions) {
    const cur = arrangement[r.id]?.[trackId];
    if (cur && cur !== 'silent') {
      memory[r.id] = { ...(memory[r.id] ?? {}), [trackId]: cur };
    }
    arrangement[r.id] = { ...(arrangement[r.id] ?? {}), [trackId]: 'silent' };
  }
  return rebuild({ ...sheet, arrangement, patternMemory: memory });
}

export function unsilenceVoiceInSection(sheet: Sheet, trackId: string, regionId: string): Sheet {
  const voice = sheet.tracks.find(t => t.id === trackId) as Voice | undefined;
  if (!voice) return sheet;
  const remembered = sheet.patternMemory?.[regionId]?.[trackId];
  let pId = remembered && remembered !== 'silent' ? remembered : undefined;
  if (!pId) {
    const region = sheet.regions.find(r => r.id === regionId);
    const taken = new Set(Object.values(sheet.arrangement[regionId] ?? {}));
    pId = suggestPattern(voice, region?.genre ?? sheet.worldId, sheet.tracks.length * 17 + 5, String(region?.kind ?? 'verse'), taken, sheet.energies?.[regionId]?.[voice.id], region ? getSectionStyleId(sheet, region) : undefined)
      ?? ALL_PATTERNS.find(p => p.roles.includes(voice.role))?.id
      ?? ALL_PATTERNS[0]?.id;
  }
  const arrangement = { ...sheet.arrangement };
  arrangement[regionId] = { ...(arrangement[regionId] ?? {}), [trackId]: pId };
  const tracks = sheet.tracks.map(t => (t.id === trackId ? { ...t, muted: false } : t));
  return rebuild({ ...sheet, tracks, arrangement });
}

export function unsilenceVoiceInAll(sheet: Sheet, trackId: string): Sheet {
  const voice = sheet.tracks.find(t => t.id === trackId) as Voice | undefined;
  if (!voice) return sheet;
  const memory = { ...(sheet.patternMemory ?? {}) };
  const arrangement = { ...sheet.arrangement };

  for (const [ri, r] of sheet.regions.entries()) {
    const remembered = memory[r.id]?.[trackId];
    let pId = remembered && remembered !== 'silent' ? remembered : undefined;
    if (!pId) {
      const taken = new Set(Object.values(arrangement[r.id] ?? {}));
      pId = suggestPattern(voice, r.genre ?? sheet.worldId, ri * 31 + sheet.tracks.length * 13 + 7, String(r.kind), taken, sheet.energies?.[r.id]?.[voice.id], getSectionStyleId(sheet, r))
        ?? ALL_PATTERNS.find(p => p.roles.includes(voice.role))?.id
        ?? ALL_PATTERNS[0]?.id;
    }
    arrangement[r.id] = { ...(arrangement[r.id] ?? {}), [trackId]: pId };
  }
  const tracks = sheet.tracks.map(t => (t.id === trackId ? { ...t, muted: false } : t));
  return rebuild({ ...sheet, tracks, arrangement });
}

export function toggleVoiceInSection(sheet: Sheet, trackId: string, regionId: string): Sheet {
  if (isVoiceSilentInSection(sheet, trackId, regionId)) {
    return unsilenceVoiceInSection(sheet, trackId, regionId);
  } else {
    return silenceVoiceInSection(sheet, trackId, regionId);
  }
}

export function toggleVoiceInAll(sheet: Sheet, trackId: string): Sheet {
  if (isVoiceSilentInAll(sheet, trackId)) {
    return unsilenceVoiceInAll(sheet, trackId);
  } else {
    return silenceVoiceInAll(sheet, trackId);
  }
}

/**
 * Set a whole section's weight. This is the section dial: it moves the section
 * and every part inside it, then re-picks each part's cell so the change is
 * audible immediately rather than only on the next edit.
 */
export function setSectionEnergy(sheet: Sheet, regionId: string, energy: SectionEnergy): Sheet {
  const next = clampEnergy(energy);
  const regions = sheet.regions.map(r =>
    r.id === regionId ? { ...r, energy: next, intensity: formIntensityForEnergy(next) } : r);
  const energies = { ...sheet.energies };
  
  const regionTrackEnergies: Record<string, SectionEnergy> = {};
  for (const track of sheet.tracks) {
    regionTrackEnergies[track.id] = next;
  }
  energies[regionId] = regionTrackEnergies;

  const arrangement = { ...sheet.arrangement };
  const region = regions.find(r => r.id === regionId);
  if (region) {
    const taken = new Set<string>();
    for (const [i, track] of sheet.tracks.entries()) {
      const current = arrangement[regionId]?.[track.id];
      if (current && current !== 'silent') {
        const p = suggestPattern(
          track as Voice,
          region.genre ?? sheet.worldId,
          i * 31 + 17,
          String(region.kind),
          taken,
          next,
          getSectionStyleId(sheet, region),
        );
        if (p) {
          arrangement[regionId] = { ...(arrangement[regionId] ?? {}), [track.id]: p };
          taken.add(p);
        }
      }
    }
  }

  return rebuild({ ...sheet, regions, energies, arrangement });
}

/** Set one voice's weight inside one section. The section's own weight is unchanged. */
export function setPartEnergy(sheet: Sheet, regionId: string, trackId: string, energy: SectionEnergy): Sheet {
  const energies = {
    ...sheet.energies,
    [regionId]: {
      ...(sheet.energies?.[regionId] ?? {}),
      [trackId]: energy,
    },
  };

  const arrangement = { ...sheet.arrangement };
  const region = sheet.regions.find(r => r.id === regionId);
  const track = sheet.tracks.find(t => t.id === trackId);
  if (region && track) {
    const current = arrangement[regionId]?.[trackId];
    if (current && current !== 'silent') {
      const used = new Set(Object.values(arrangement[regionId] ?? {}));
      used.delete(current);
      const p = suggestPattern(
        track as Voice,
        region.genre ?? sheet.worldId,
        stableSeed(`${sheet.id}:${regionId}:${trackId}:${energy}`),
        String(region.kind),
        used,
        energy,
        getSectionStyleId(sheet, region),
      );
      if (p) {
        arrangement[regionId] = { ...(arrangement[regionId] ?? {}), [trackId]: p };
      }
    }
  }

  return rebuild({ ...sheet, energies, arrangement });
}

/** Set a part's playing style. Weight 0 pins it to the host and suppresses inference. */
export function setPartLens(sheet: Sheet, regionId: string, trackId: string, lens?: GuestLens): Sheet {
  const partLens = { ...(sheet.partLens ?? {}) };
  const inner = { ...(partLens[regionId] ?? {}) };
  if (lens) inner[trackId] = lens;
  else delete inner[trackId];
  partLens[regionId] = inner;
  return rebuild({ ...sheet, partLens });
}

export function silenceAllVoicesInSection(sheet: Sheet, regionId: string): Sheet {
  let s = sheet;
  for (const t of sheet.tracks) {
    s = silenceVoiceInSection(s, t.id, regionId);
  }
  return s;
}

export function unsilenceAllVoicesInSection(sheet: Sheet, regionId: string): Sheet {
  let s = sheet;
  for (const t of sheet.tracks) {
    s = unsilenceVoiceInSection(s, t.id, regionId);
  }
  return s;
}

export function addVoice(
  sheet: Sheet,
  instrumentId: string,
  regionId?: string,
  scope: 'section' | 'song' = 'section'
): Sheet {
  const def = instrument(instrumentId);
  let id = `v${sheet.tracks.length}`;
  while (sheet.tracks.some(t => t.id === id)) id = `v${sheet.tracks.length + 1}`;
  const voice: Voice = {
    id, instrumentId, name: def.name, instrument: def.name,
    role: roleForInstrument(instrumentId), kind: instrumentId,
    muted: false, volume: 0.85, lensIds: [], spotlight: 'auto',
  };
  const arrangement = { ...sheet.arrangement };
  const energies = { ...sheet.energies };
  for (const r of sheet.regions) {
    energies[r.id] = { ...(energies[r.id] ?? {}), [id]: 3 };
  }

  if (scope === 'section' && regionId) {
    const targetRegion = sheet.regions.find(r => r.id === regionId) ?? sheet.regions[0];
    const taken = new Set(Object.values(arrangement[targetRegion.id] ?? {}));
    const p = suggestPattern(voice, targetRegion.genre ?? sheet.worldId, sheet.tracks.length * 19 + 7, String(targetRegion.kind), taken, 3, getSectionStyleId(sheet, targetRegion));

    for (const r of sheet.regions) {
      if (r.id === targetRegion.id) {
        arrangement[r.id] = { ...(arrangement[r.id] ?? {}), [id]: p ?? 'silent' };
      } else {
        arrangement[r.id] = { ...(arrangement[r.id] ?? {}), [id]: 'silent' };
      }
    }
  } else {
    for (const [ri, r] of sheet.regions.entries()) {
      const taken = new Set(Object.values(arrangement[r.id] ?? {}));
      const p = suggestPattern(voice, r.genre ?? sheet.worldId, ri * 31 + sheet.tracks.length * 13 + 7, String(r.kind), taken, 3, getSectionStyleId(sheet, r));
      if (p) arrangement[r.id] = { ...(arrangement[r.id] ?? {}), [id]: p };
    }
  }

  return rebuild({ ...sheet, tracks: [...sheet.tracks, voice], arrangement, energies });
}

/** Add one fresh instrument, chosen at random from strong genre-native picks. */
export function addRandomInstrument(
  sheet: Sheet,
  regionId?: string,
  scope: 'section' | 'song' = 'section'
): Sheet {
  const worldId = sheet.worldId;
  const styleId = sheet.styleId ?? getCanonicalStyle(worldId).id;
  const ranked = rankInstrumentsForWorld(worldId, undefined, styleId);
  const current = new Set(sheet.tracks.map(t => t.instrumentId));
  const fresh = ranked.filter(id => !current.has(id));
  const pool = fresh.length ? fresh : ranked;
  if (!pool.length) return sheet;
  const candidates = pool.slice(0, Math.min(10, pool.length));
  const roll = pickIndex(`add-random:${sheet.id}:${regionId ?? 'song'}:${candidates.join(',')}`, candidates.length);
  const chosen = candidates[roll] ?? candidates[0];
  return addVoice(sheet, chosen, regionId, scope);
}

export function removeVoice(sheet: Sheet, trackId: string): Sheet {
  const arrangement: Arrangement = {};
  for (const [rid, inner] of Object.entries(sheet.arrangement)) {
    const copy = { ...inner };
    delete copy[trackId];
    arrangement[rid] = copy;
  }
  const energies = { ...sheet.energies };
  for (const rid of Object.keys(energies)) {
    if (energies[rid]) {
      const copy = { ...energies[rid] };
      delete copy[trackId];
      energies[rid] = copy;
    }
  }
  return rebuild({ ...sheet, tracks: sheet.tracks.filter(t => t.id !== trackId), arrangement, energies });
}

export function toggleVoice(sheet: Sheet, trackId: string): Sheet {
  return { ...sheet, tracks: sheet.tracks.map(t => (t.id === trackId ? { ...t, muted: !t.muted } : t)) };
}

export function setTrackSpotlight(sheet: Sheet, trackId: string, spotlight: SpotlightMode): Sheet {
  const tracks = sheet.tracks.map(t => t.id === trackId ? { ...t, spotlight } : t);
  return rebuild({ ...sheet, tracks });
}




/**
 * The meter the world's patterns are actually written in.
 *
 * Traditional Styles declare the meter a musicologist would name — tango as 2/4,
 * flamenco as 12/8, math rock as 7/8 — but the patterns themselves are almost
 * always authored as one 4/4 bar, with the compás expressed as a 12- or
 * 14-step subdivision inside it. Taking the style's meter literally made
 * every tango bar half the length its patterns expected, so the grooves ran at
 * double speed. Trust what the patterns say.
 */
export function dominantMeter(worldId: string): string {
  const world = GENRE_WORLDS_BY_ID[worldId];
  const counts: Record<string, number> = {};
  for (const p of world?.patterns ?? []) counts[p.meter] = (counts[p.meter] ?? 0) + 1;
  const best = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
  return best?.[0] ?? '4/4';
}

/** Build a complete, already-playing song in a world. Never an empty canvas. */
export function makeSheet(
  worldOrOptions: string | { genreId: string; styleId?: string; influences?: StyleInfluence[]; overrides?: Partial<SongStyle> },
  explicitStyleId?: string,
  influences?: StyleInfluence[],
  overrides?: Partial<SongStyle>
): Sheet {
  const genreId = typeof worldOrOptions === 'string' ? worldOrOptions : worldOrOptions.genreId;
  const styleId = (typeof worldOrOptions === 'string' ? explicitStyleId : worldOrOptions.styleId) ?? getCanonicalStyle(genreId).id;
  const appliedInfluences = typeof worldOrOptions === 'string' ? influences : worldOrOptions.influences;
  const appliedOverrides = typeof worldOrOptions === 'string' ? overrides : worldOrOptions.overrides;

  const resolved = resolveStyle({
    genreId,
    styleId,
    influences: appliedInfluences,
    userOverrides: appliedOverrides,
  });
  const runtime = new StyleRuntime(resolved);

  const formTemplates = runtime.getFormTemplate(42);
  const form = formTemplates && formTemplates.length > 0
    ? formTemplates
    : [{ key: 'verse', label: 'Verse', kind: 'verse', bars: 8, intensity: 'medium' as const }];
  const styleChordCells = (resolved.harmony?.progressionTemplates ?? []).map(x => x.value as string[]);
  const paletteChordCells = suggestedPaletteForGenre(genreId).map(cell => cell.chords as string[]);
  const chordCells = styleChordCells.length ? styleChordCells : paletteChordCells;
  const chords = chordCells[0] ?? ['C','G','Am','F'];

  const sectionProgressions = (resolved.harmony?.sectionProgressions as Record<string, string[]>) ?? {};
  const regions: Region[] = form.map((f, i) => {
    const fallback = chordCells[i % Math.max(1, chordCells.length)] ?? chords;
    const pickedRaw = progressionForSection(sectionProgressions, f.key, f.kind, fallback, resolved.contract);
    // Section templates describe harmonic function, not an automatic key change.
    // Keep the whole song in the first section's tonic unless the user explicitly
    // changes the song key elsewhere.
    const picked = chordTemplateInKey(pickedRaw, chords[0]);
    const energy = energyForFormIntensity(f.intensity);
    return {
      id: `r${i}`, name: f.label, kind: f.kind, formKey: f.key, formLabel: f.label,
      intensity: f.intensity, energy, start: 0, end: f.bars,
      bars: f.bars,
      genre: genreId,
      styleId: resolved.id,
      chords: picked,
    } as Region;
  });


  // Instrument hints from resolved style palette or genre defaults
  const stylePalette = runtime.getInstrumentPalette();
  const ensembleIds = (resolved.arrangement?.ensemble ?? [])
    .flatMap(e => e.instrumentIds ?? []);
  // The style's instrument palette is the authored band. The default song
  // constructor below intentionally starts with a compact five-piece ensemble;
  // this is only a starter-song presentation choice. The engine itself has no
  // maximum instrument count, and user-added voices are preserved everywhere
  // after construction.
  const candidates = [...stylePalette, ...ensembleIds]
    .filter((id, i, arr) => INSTRUMENTS_BY_ID[id] && arr.indexOf(id) === i);
  const targetCount = Math.min(5, Math.max(4, stylePalette.length || candidates.length));
  const hints = candidates.slice(0, targetCount);

  const tracks: Voice[] = hints.map((instrumentId, i) => {
    const def = instrument(instrumentId);
    return {
      id: `v${i}`, instrumentId, name: def.name, instrument: def.name,
      role: roleForInstrument(instrumentId), kind: instrumentId,
      muted: false, volume: calibratedTrackVolume(genreId, instrumentId, roleForInstrument(instrumentId)), lensIds: [], spotlight: 'auto',
    };
  });

  const arrangement: Arrangement = {};
  const energies: Record<string, Record<string, SectionEnergy>> = {};
  
  for (const [ri, r] of regions.entries()) {
    arrangement[r.id] = {};
    energies[r.id] = {};
    
    // Weight is part of the selected SongStyle's arrangement grammar.
    const styleEnergy = resolved.arrangement?.energyMappings?.[r.formKey ?? ''] ?? resolved.arrangement?.energyMappings?.[r.kind];
    const taken = new Set<string>();
    for (const [i, v] of tracks.entries()) {
      const d: SectionEnergy = clampEnergy(styleEnergy ?? energyOf(r));
      energies[r.id][v.id] = d;

      const p = suggestPattern(v, genreId, ri * 31 + i * 13 + 7, String(r.kind), taken, d, resolved.id);
      if (p) {
        arrangement[r.id][v.id] = p;
        taken.add(p);
      }
    }
  }

  const effectiveBpm = runtime.getTempo(0.5);
  const effectiveMeter = runtime.getMeter() || dominantMeter(genreId);

  return rebuild({
    id: 'sheet', title: TITLES[genreId] ?? 'Untitled',
    bpm: effectiveBpm,
    timeSignature: effectiveMeter,
    durationMeasures: 0,
    tracks, measures: [], regions,
    relationships: [], activeLensIds: [genreId], applied: [],
    arrangement, energies, worldId: genreId,
    styleId: resolved.id,
    styleInfluences: appliedInfluences,
    styleOverrides: appliedOverrides,
  });
}

/**
 * Switch world. A whole-song replacement reprints the complete musician-facing
 * form, its connective phrases, the default instrument palette, and every
 * section's pattern vocabulary. Switching back and forth is a full genre reset.
 */
export function switchWorld(sheet: Sheet, worldId: string, styleId?: string): Sheet {
  clearPersistentPhrasePatternCache();
  // A whole-song genre change is a form change, not a recolor. Replace the
  // section grammar, bars, labels, intensity, chords, instruments, and
  // pattern assignments in one deterministic rebuild. Preserve the user's
  // identity/title so a genre change does not unexpectedly rename the song.
  const canonical = getCanonicalStyle(worldId);
  const targetStyleId = styleId ?? canonical.id;
  const fresh = makeSheet(worldId, targetStyleId);
  return rebuild({
    ...fresh,
    id: sheet.id,
    title: sheet.title,
    customProgressions: sheet.customProgressions,
  });
}

/**
 * Switch lens only. Transforms the component / plate / theme, but modifies
 * nothing in the song arrangement, instruments, tempo, or notes.
 */
export function switchLensOnly(sheet: Sheet, worldId: string): Sheet {
  const canonical = getCanonicalStyle(worldId);
  return rebuild({
    ...sheet,
    worldId,
    styleId: sheet.worldId === worldId ? (sheet.styleId ?? canonical.id) : canonical.id,
    activeLensIds: [worldId],
  });
}

/**
 * Switch a single section to a world/lens. Transforms this section's
 * patterns and chords using the specified world's musical style, leaving
 * all other sections, instruments, tempo, and song structure untouched.
 */
export function switchSectionWorld(sheet: Sheet, regionId: string, worldId: string = sheet.worldId, styleId?: string): Sheet {
  const regionIndex = sheet.regions.findIndex(r => r.id === regionId);
  if (regionIndex === -1) return sheet;
  const r = sheet.regions[regionIndex];

  const canonical = getCanonicalStyle(worldId);
  const targetStyleId = styleId ?? canonical.id;
  const resolved = resolveStyle({ genreId: worldId, styleId: targetStyleId });

  // Resolve harmonic material from the section style before using genre defaults.
  const styleChordCells = (resolved.harmony?.progressionTemplates ?? [])
    .map(x => x.value as string[])
    .filter(x => Array.isArray(x) && x.length);
  const newChords = styleChordCells[0]
    ?? (suggestedPaletteForGenre(worldId)[0]?.chords as string[])
    ?? PROGRESSIONS[worldId]
    ?? PROGRESSIONS.tango;
  const regions = sheet.regions.map(reg => {
    if (reg.id !== regionId) return reg;
    const formStep = getFormStep(String(reg.formKey ?? reg.kind), worldId);
    return {
      ...reg,
      genre: worldId,
      styleId: targetStyleId,
      formKey: formStep?.key ?? reg.formKey ?? reg.kind,
      formLabel: formStep?.label ?? reg.formLabel ?? reg.name,
      intensity: formStep?.intensity ?? reg.intensity,
      chords: newChords,
    };
  });

  const arrangement: Arrangement = { ...sheet.arrangement };
  arrangement[regionId] = { ...(sheet.arrangement[regionId] ?? {}) };

  const taken = new Set<string>();
  for (const [i, v] of (sheet.tracks as Voice[]).entries()) {
    const p = suggestPattern(v, worldId, regionIndex * 31 + i * 13 + 7, String(r.kind), taken, sheet.energies?.[regionId]?.[v.id], targetStyleId);
    if (p) {
      arrangement[regionId][v.id] = p;
      taken.add(p);
    }
  }

  return rebuild({
    ...sheet,
    regions,
    arrangement,
  });
}

/**
 * Returns the genre assigned to the section, defaulting to the song's worldId.
 */
export function getSectionGenre(sheet: Sheet, regionId?: string): string {
  if (regionId) {
    const r = sheet.regions.find(reg => reg.id === regionId);
    if (r?.genre) return r.genre;
  }
  return sheet.worldId;
}

/**
 * Switch the entire song to a world/lens. Transforms everything: instruments,
 * all section patterns, chords, tempo, and title.
 */
export function switchSongWorld(sheet: Sheet, worldId: string = sheet.worldId): Sheet {
  return switchWorld(sheet, worldId);
}

/**
 * Manually set the chord progression for a specific section.
 */
export function setSectionChords(sheet: Sheet, regionId: string, chords: string[]): Sheet {
  const nextChords = chords.length ? chords : ['Am'];
  assertValidChordProgression(nextChords, `section ${regionId}`);
  const regions = sheet.regions.map(r => {
    if (r.id !== regionId) return r;
    return { ...r, chords: nextChords.slice() };
  });
  return rebuild({ ...sheet, regions });
}

/**
 * Set the song base BPM.
 */
export function setSongBpm(sheet: Sheet, bpm: number): Sheet {
  const clamped = Math.max(30, Math.min(300, Math.round(bpm)));
  return rebuild({ ...sheet, bpm: clamped });
}

/**
 * Set a specific section BPM (or remove the section override if bpm is undefined).
 */
export function setSectionBpm(sheet: Sheet, regionId: string, bpm?: number): Sheet {
  const regions = sheet.regions.map(r => {
    if (r.id !== regionId) return r;
    return {
      ...r,
      bpm: bpm ? Math.max(30, Math.min(300, Math.round(bpm))) : undefined,
    };
  });
  return rebuild({ ...sheet, regions });
}

export type PartDensity = 'sparse' | 'normal' | 'busy';

export function setPartDensity(sheet: Sheet, regionId: string, density: PartDensity): Sheet {
  const energyMap: Record<PartDensity, 1 | 3 | 5> = { sparse: 1, normal: 3, busy: 5 };
  return setSectionEnergy(sheet, regionId, energyMap[density]);
}

export const setSectionDensity = setPartDensity;

/** The first engine phase: interpret musical definitions into an editable sheet. */
export const createSheet = makeSheet;
