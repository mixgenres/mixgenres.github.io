import { beatsPerBarOf } from '../sheet/grid';
import { supportsSolo, soloistAtBar } from '../sheet/solo';
import { GENRE_ID_ALIASES } from '../../data/performance/genreAliases';
import { KIT_COMPONENT_MIDI_ALIASES } from '../../data/instruments/kitComponentAliases';
import { kitHitIntent } from '../../data/performance/kitHitRules';
import { PATTERN_GESTURE_HINT_RULES } from '../../data/performance/patternGestureRules';
import type { GuestLens, Region, MusicalPattern } from '../../types';
import type { Sheet, Voice } from '../sheet/sheet.ts';
import type { InstrumentDef } from '../../data/instruments/schema/instrument-def';
import type { ResolvedStyle } from '../../data/styles/schema';
import { PATTERNS_BY_ID } from '../../data/genres';
import { INSTRUMENTS_BY_ID } from '../../engine/lookup/instruments';
import { getInstrumentPerformanceProfile, resolveGenreProfile, type InstrumentPerformanceProfile } from '../../engine/lookup/performance';
import { styleTheoryFor, blendGenreTheory } from '../../engine/lookup/theory';
import { getResolvedSectionStyle, partLensForPattern, phraseBarsForStyle } from '../sheet/sheet.ts';
import { getCanonicalStyle, getStyle } from '../../engine/style/registry';
import { calibratedTechniqueGestures } from '../../engine/style/performance-expectations';
import { parseChord, scalePcsForMode } from '../sheet/musicTheory.ts';
import { foldToRange, noteLengthBeats, voiceProfile } from '../sheet/instrumentRoles.ts';
import { resolveTuningSystem } from '../sheet/tuning.ts';
import { buildBarTimes, type BarTime, type Performance, type PerformancePhrase, type PerfNote, type PerfCC } from '../band/performanceData.ts';
import {
  buildHybridGrammar,
  createPhraseState,
  preferredGesture,
  realizeMidi,
  shouldDevelopPhrase,
  type PhraseContext,
  type PhraseState,
} from './phrasePerformance.ts';
import { GESTURE_NAMES, GESTURE_CODES, codeForGesture } from './gestures.ts';
import { bandoneonCandidates, BANDONEON_142_BUTTONS } from '../../engine/band/fingering/bandoneon';
import { findKitComponent } from './rhythmicIntent.ts';
import type { RhythmicIntent } from '../../data/performance/schema/rhythmic-intent';
import { optimizePerformanceByPhraseAndSong } from './songPhrasing.ts';
import { decide } from '../sheet/arrangementContext.ts';
import { activityFor } from '../sheet/sectionEnergy.ts';
import { velocityForEnergy } from './velocity.ts';
import { applyFeel, grooveForStyle, grooveVelocityMultiplier, type GrooveProfile } from './groove.ts';
import type { GrooveRole } from '../../data/instruments/schema/voice-profile';
import { resolveStyle } from '../../engine/style/resolve';
import { seedOf } from '../sheet/random.ts';
import { resolveDialect } from './genreDialect.ts';
import { scoreDurationSeconds, beatValue } from '../score/musicianScore';
import type { NotatedScore } from '../score/notatedScore';
import { contentKey } from '../cache/contentKey';
import { LRUMap, registerCache } from '../cache/lru';
import { interpretRelationships } from './interactions';
import { resolveWrittenTies } from './writtenTies';
import { realizeTechniquePerformance } from './techniquePerformance';

export { GESTURE_NAMES, GESTURE_CODES };

import { HIT_FUNCTIONS, type HitFunction } from '../../data/performance/hitFunctions';

export interface RhythmOnset {
  musicianNotation?: import('../../data/schema').PatternEvent['notation'];
  percussion?: import('../score/percussionNotation').NotatedDrum;
  pitch?: import('../../data/schema').PatternEvent['pitch'];
  position: number;
  accent: number;
  velocity: number;
  anticipationOffsetSteps?: number;
  duration: number;
  hit: HitFunction;
  sourceHit?: string;
  microtiming?: number;
  microtimingUnit?: 'milliseconds' | 'grid';
  sourceGenre: string;
  /** True when the pattern explicitly authored this onset duration. */
  durationAuthored?: boolean;
}

export interface RhythmIdea {
  id: string;
  name: string;
  sourceGenre: string;
  sourceInstrumentFamily: string;
  meter: string;
  subdivisions: number;
  cycleLength: number;
  onsets: RhythmOnset[];
  roleTendencies: string[];
  pattern: MusicalPattern;
}

export interface LensStack {
  hostGenre: string;
  sourceGenre: string;
  sourceStyleId: string;
  weight: number;
  provenance: string[];
}

export interface SongPlan {
  bars: BarTime[];
  phraseBoundaries: number[];
  tempoMap: Array<{ bar: number; bpm: number; reason: string }>;
  energy: number[];
  sections: Array<{ regionId: string; genre: string; start: number; end: number }>;
}

export interface BandPlan {
  song: SongPlan;
  lanes: Record<string, {
    trackId: string;
    instrumentId: string;
    role: string;
    sectionId: string;
    lens: LensStack;
    rhythm: RhythmIdea;
    groove: { offsetMs: number; swing: number; swingUnit?: number; subdivision: number; anticipationOffsetSteps?: number };
  }[]>;
}

function clamp(v: number, a = 0, b = 1): number { return Math.max(a, Math.min(b, v)); }
function techniqueRoleClass(role: string): string {
  const value = role.toLowerCase();
  if (/lead|melody|voice/.test(value)) return 'lead';
  if (/bass/.test(value)) return 'bass';
  if (/percussion|drum|pulse|perc/.test(value)) return 'percussion';
  if (/harmony|comp|chord/.test(value)) return 'harmony';
  return value;
}

/** Map normalized section energy (0.2..1) and a pattern velocity to MIDI velocity. */
export { velocityForEnergy } from './velocity.ts';

function hitFrom(pattern: MusicalPattern, i: number, rawHit?: string): HitFunction {
  const raw = String(rawHit ?? pattern.hitGrid?.[i] ?? '').toLowerCase();
  if (/kick|downbeat|bombo|bass-drum|grave/.test(raw)) return 'downbeat';
  if (/ghost|heel|toe|tap|tip|brush/.test(raw)) return 'ghost';
  if (/slap|quinto|strappata|golpe/.test(raw)) return 'slap';
  if (/mute|tapao|dead|chapa/.test(raw)) return 'muffled';
  if (/open|tumba|tone|tono/.test(raw)) return 'open';
  if (/rim|edge|cascara|campana|bell/.test(raw)) return 'edge';
  if (/fill|roll|tremolo/.test(raw)) return 'fill';
  if (/bell|punct|hit|chique|accent/.test(raw)) return 'punctuation';
  const a = Number(pattern.accentProfile?.[i] ?? 0.7);
  if (a >= 0.92) return 'downbeat';
  if (a <= 0.42) return 'ghost';
  const pos = Number(pattern.onsetGrid?.[i] ?? 0);
  const sub = Math.max(1, Number(pattern.subdivisions ?? 16));
  const stepsPerQuarter = Math.max(1, Math.round(sub / 4));
  if (pos % stepsPerQuarter !== 0) return 'offbeat-chop';
  return 'tone';
}

function rhythmIdeaFromPattern(p: MusicalPattern, sourceGenre: string, beatsPerBar = 4): RhythmIdea {
  const sub = Math.max(1, p.subdivisions ?? 16);
  // A duration grid is only authored when it covers every onset. Partial
  // arrays are malformed compatibility metadata; treating their missing cells
  // as authored would replace the performer's natural gap inference with a
  // one-step gate and make the part sound clipped.
  const durationGridAligned = Array.isArray(p.durationGrid)
    && p.durationGrid.length === (p.onsetGrid?.length ?? 0);
  const onsets = (p.onsetGrid ?? []).map((position: number, i: number) => ({
    position: (position + Number(p.anticipationOffset ?? 0)) / sub,
    accent: clamp(Number(p.accentProfile?.[i] ?? 0.72)),
    velocity: clamp(Number(p.velocityProfile?.[i] ?? p.accentProfile?.[i] ?? 0.72)),
    // A partial legacy duration array is not an authored gate. Do not let the
    // values that happen to exist shorten only the first attacks while the
    // remaining attacks use performer inference.
    duration: Math.max(0.001, Number(durationGridAligned ? p.durationGrid?.[i] ?? 1 : 1) / sub * beatsPerBar),
    durationAuthored: durationGridAligned,
    hit: hitFrom(p, i),
    // A pattern's display name is not a struck drum surface. Pass only an
    // authored per-event hit label; otherwise the explicit hit function below
    // carries the event's rhythmic meaning.
    sourceHit: p.hitGrid?.[i],
    sourceGenre: p.worldId || sourceGenre,
  }));
  return {
    id: p.id,
    name: p.name,
    sourceGenre: p.worldId || sourceGenre,
    sourceInstrumentFamily: (p.family ?? p.instruments?.[0] ?? 'unknown') as string,
    meter: p.meter,
    subdivisions: sub,
    cycleLength: Math.max(1, p.cycleLength ?? 1),
    onsets,
    roleTendencies: p.roles ?? [],
    pattern: p,
  };
}

function styleRegion(region: Region): Region {
  return region.genre && Object.hasOwn(GENRE_ID_ALIASES, region.genre) ? { ...region, genre: GENRE_ID_ALIASES[region.genre], styleId: region.styleId } : region;
}

function phraseDevelopmentGain(
  development: ReturnType<typeof shouldDevelopPhrase>,
  position: number,
  styleDynamicRange: number,
): number {
  const depth = clamp(styleDynamicRange * 0.1, 0.05, 0.16);
  if (development === 'variation') return 1 + depth * Math.sin(Math.PI * position);
  if (development === 'answer') return 1 - depth * 0.55 + depth * position;
  if (development === 'fill') return position >= 0.72 ? 1 + depth : 1;
  if (development === 'rest') return position >= 0.35 && position <= 0.65 ? 1 - depth * 1.5 : 1;
  if (development === 'cadence') return position >= 0.8 ? 1 + depth : 1;
  return 1;
}

function buildSongPlan(sheet: Sheet, bars: BarTime[]): SongPlan {
  const sections = sheet.regions.map(r => ({ regionId: r.id, genre: r.genre ?? sheet.worldId, start: r.start, end: r.end }));
  const energy = sheet.measures.map(m => clamp((sheet.regions.find(r => r.id === m.regionId)?.energy ?? 3) / 5));
  // Tempo comes from the authored section map. The old shared phrase curve
  // nudged every non-strict style up on phrase starts and down on every fourth
  // bar, imposing the same audible lilt on otherwise unrelated genres.
  const tempoMap = bars.map(b => ({ bar: b.index, bpm: b.bpm, reason: 'section-tempo' }));
  const phraseBoundaries = Array.from(new Set([0, ...sheet.regions.flatMap(r => {
    const xs: number[] = [r.end];
    const style = getResolvedSectionStyle(sheet, styleRegion(r));
    const phraseBars = phraseBarsForStyle(style);
    for (let b = r.start + phraseBars; b < r.end; b += phraseBars) xs.push(b);
    return xs;
  })])).sort((a, b) => a - b);
  return { bars, phraseBoundaries, tempoMap, energy, sections };
}

function resolveLens(sheet: Sheet, region: Region, track: Voice, selectedPattern?: MusicalPattern): LensStack {
  const host = region.genre ?? sheet.worldId;
  const explicit: GuestLens | undefined = sheet.partLens?.[region.id]?.[track.id];
  const hostStyle = getResolvedSectionStyle(sheet, styleRegion(region));
  const selectedLens = partLensForPattern(sheet, region, track.id, selectedPattern?.id);
  if (selectedLens) {
    const source = selectedLens.genreId;
    const sourceStyleId = selectedLens.styleId ?? getCanonicalStyle(source).id;
    const style = getStyle(sourceStyleId);
    if (!style || (style.primaryGenre !== source && !style.genres.includes(source))) {
      throw new Error(`Part style ${sourceStyleId} does not belong to source genre ${source}`);
    }
    const weight = clamp(selectedLens.weight);
    const provenanceKey = explicit ? 'part-lens' : 'assigned-pattern';
    return {
      hostGenre: host, sourceGenre: source, sourceStyleId, weight,
      provenance: [`host:${host}`, `${provenanceKey}:${source}/${sourceStyleId}:${weight.toFixed(3)}`],
    };
  }

  const sourceStyleId = hostStyle?.id ?? getCanonicalStyle(host).id;
  return { hostGenre: host, sourceGenre: host, sourceStyleId, weight: 0, provenance: [`host:${host}`] };
}

function chooseRhythm(sheet: Sheet, region: Region, track: Voice, style?: ResolvedStyle): RhythmIdea {
  const measure = sheet.measures.find(x => x.regionId === region.id && (x.patternByTrack?.[track.id] || x.patternDetailsByTrack?.[track.id]));
  const pid = measure?.patternByTrack?.[track.id] ?? measure?.patternDetailsByTrack?.[track.id]?.patternId;
  const g = region.genre ?? sheet.worldId;
  if (!pid) throw new Error(`No authored rhythm assignment for ${g}/${style?.id ?? 'missing-style'}/${region.id}/${track.id}`);
  const assigned = PATTERNS_BY_ID[pid];
  if (!assigned) throw new Error(`Unknown assigned rhythm pattern ${pid} in ${region.id}/${track.id}`);
  if (!assigned.worldId) throw new Error(`Assigned pattern ${pid} has no genre identity`);
  return rhythmIdeaFromPattern(assigned, assigned.worldId, beatsPerBarOf(sheet.timeSignature));
}

function patternGestureHint(pattern: MusicalPattern, instrumentId: string, styleId: string | undefined): string | undefined {
  const text = `${pattern?.id ?? ''} ${pattern?.name ?? ''} ${pattern?.family ?? ''} ${(pattern?.tags ?? []).join(' ')} ${(pattern?.approaches ?? []).join(' ')} ${styleId ?? ''}`.toLowerCase();
  const exists = (x: string) => Boolean(getInstrumentPerformanceProfile(instrumentId).gestures[x]);
  for (const rule of PATTERN_GESTURE_HINT_RULES) {
    if (!rule.pattern.test(text)) continue;
    for (const gesture of rule.gestures) if (exists(gesture)) return gesture;
  }
  return undefined;
}

function rhythmicIntentForKit(sourceHit: string | undefined, hit: HitFunction): RhythmicIntent {
  return kitHitIntent(sourceHit, hit);
}

function kitComponentMidi(def: InstrumentDef, sourceHit: string | undefined, hit: HitFunction, index: number): number {
  const comps = def?.kitComponents ?? [];
  if (!comps.length) {
    if (def?.drum?.mid !== undefined) return def.drum.mid;
    throw new Error(`No drum note mapping is authored for ${def?.id ?? 'unknown instrument'}`);
  }
  const raw = String(sourceHit ?? '').trim().toLowerCase();
  const exactAliases = KIT_COMPONENT_MIDI_ALIASES;
  for (const [rx, ids] of exactAliases) {
    if (rx.test(raw)) {
      for (const id of ids) {
        const c = comps.find(x => x.id === id);
        if (c) return c.midi;
      }
    }
  }
  const preferred = findKitComponent(def.id, rhythmicIntentForKit(sourceHit, hit), undefined, index);
  if (preferred) return preferred.midi;
  throw new Error(`No ${hit} kit component is authored for ${def.id}${sourceHit ? ` (${sourceHit})` : ''}`);
}

function baseMidiForPattern(def: InstrumentDef, onset: RhythmOnset, index: number): number[] {
  if (!(def?.voicing === 'unpitched' || def?.kit || def?.drum)) return [];
  const primary = kitComponentMidi(def, onset.sourceHit, onset.hit, index);
  return [primary];
}

function updatePhraseState(state: PhraseState, notes: PerfNote[], ctx: PhraseContext): void {
  const last = notes[notes.length - 1];
  if (!last) return;
  state.previousMidi = last.midi;
  state.previousPc = last.midi % 12;
  state.previousTime = last.time;
  state.previousAccent = last.accent;
  if (last.accent >= 0.8) state.lastStrongMidi = last.midi;
  state.lastPhraseIndex = ctx.phraseIndex;
  state.contour = Math.max(-1, Math.min(1, (last.midi - (state.lastStrongMidi ?? last.midi)) / 12));
}

function harmonyEventsAt(sheet: Sheet, bar: number): NonNullable<Sheet['measures'][number]['harmonyEvents']> {
  const events = sheet.measures[bar]?.harmonyEvents;
  if (!events?.length) throw new Error(`Missing authored harmony events at bar ${bar + 1}`);
  return events;
}

function chordAtBeat(sheet: Sheet, bar: number, beat: number): string {
  const events = harmonyEventsAt(sheet, bar);
  const active = events.filter(event => event.beat <= beat + 1e-8).at(-1);
  if (!active) throw new Error(`No harmony event at beat ${beat} in bar ${bar + 1}`);
  return active.chord;
}

function nextChordAtBeat(sheet: Sheet, bar: number, beat: number): string | undefined {
  const next = harmonyEventsAt(sheet, bar).find(event => event.beat > beat + 1e-8);
  return next?.chord ?? sheet.measures[bar + 1]?.harmonyEvents?.[0]?.chord;
}

function derivePassingMidi(state: PhraseState, current: number, ctx: PhraseContext): number | undefined {
  if (state.previousMidi === undefined) return undefined;
  if (Math.abs(current - state.previousMidi) < 3) return undefined;
  if (ctx.hybridGrammar.allowDerivedPitch < 0.25) return undefined;
  const direction = current >= state.previousMidi ? 1 : -1;
  const candidate = state.previousMidi + direction * (Math.abs(current - state.previousMidi) >= 7 ? 2 : 1);
  return foldToRange(candidate, voiceProfile(ctx.profile.instrumentId));
}

function nextScaleTone(from: number, toward: number, scale: number[], low: number, high: number): number | undefined {
  const direction = Math.sign(toward - from);
  if (!direction || Math.abs(toward - from) < 3) return undefined;
  for (let distance = 1; distance <= Math.abs(toward - from); distance++) {
    const candidate = from + direction * distance;
    if (candidate < low || candidate > high) break;
    if (candidate !== toward && scale.includes(((candidate % 12) + 12) % 12)) return candidate;
  }
  return undefined;
}

/**
 * Written cells are the student's rhythmic guide. A capable player may add a
 * restrained scalar connection in an actual gap when that style allows runs,
 * turns, slides, or other melodic development. Written pitches, rests,
 * percussion, and the pattern's attack grid remain untouched.
 */
function developLeadPhrase(
  phraseNotes: PerfNote[],
  development: ReturnType<typeof shouldDevelopPhrase> | undefined,
  grammar: ReturnType<typeof buildHybridGrammar>['hybrid'],
  style: ResolvedStyle,
  instrumentId: string,
  trackId: string,
  phraseId: string,
  soundContext: PerfNote['soundContext'],
  bars: BarTime[],
): PerfNote[] {
  if (!development || !['variation', 'answer', 'fill'].includes(development)) return [];
  if (grammar.allowDerivedAttacks < 0.28 || grammar.allowDerivedPitch < 0.22) return [];
  if (instrumentId === 'voice' || instrumentId === 'choir') {
    const vocalTechniqueLanguage = [
      ...Object.keys(style.calibration?.techniqueScopes ?? {}),
      ...(style.calibration?.techniques?.lead ?? []),
    ].join(' ');
    // A sustained-vowel SoundFont cannot make every added scale tone read as
    // a new lyric syllable. Add vocal ornaments only where the style explicitly
    // teaches melisma, breath-phrasing, or a closely related vocal gesture.
    if (!/melisma|meend|gamak|gamaka|taan|murki|soneo|falsetto|breath.?phrase|vocal.?ornament|ornament/i.test(vocalTechniqueLanguage)) return [];
  }
  const role = 'lead';
  const vocabulary = grammar.variationVocabulary?.[role] ?? grammar.variationVocabulary?.melody ?? [];
  if (!vocabulary.includes('scalar-connection')) return [];

  const profile = getInstrumentPerformanceProfile(instrumentId);
  const minMidi = profile.capabilities.lowMidi;
  const maxMidi = profile.capabilities.highMidi;
  const anchors = Array.from(new Map(phraseNotes
    .filter(note => note.originCode === 0 && !note.percussion)
    .sort((a, b) => a.time - b.time || a.midi - b.midi)
    .map(note => [note.attackId ?? `${note.time}:${note.midi}`, note])).values());
  if (anchors.length < 2) return [];

  const subdivisions = grammar.subdivisionVocabulary?.[role] ?? grammar.subdivisionVocabulary?.melody ?? [];
  if (!subdivisions.length) return [];
  const stepBeats = 1 / Math.max(...subdivisions);
  const maxAdds = Math.max(1, Math.min(4, Math.ceil(anchors.length * grammar.allowDerivedAttacks * 0.28)));
  const additions: PerfNote[] = [];
  for (let i = 0; i < anchors.length - 1 && additions.length < maxAdds; i++) {
    const from = anchors[i], to = anchors[i + 1];
    if (from.bar !== to.bar || from.harmonicChord === undefined || to.harmonicChord === undefined) continue;
    const bar = bars[from.bar];
    if (!bar) continue;
    const beatSec = 60 / bar.bpm;
    const restStart = from.time + from.dur;
    const restEnd = to.time;
    const rest = restEnd - restStart;
    const restBeats = rest / beatSec;
    // The old check added 80 ms to every required gap. A normal 0.30-beat
    // opening between the shared beginner cells' notes therefore failed at
    // every tempo, even when the style allowed a short 32nd-note connection.
    // Keep the requirement musical (in beats) and reserve air before the next
    // written attack so the guide stays audible and no note is clipped.
    if (restBeats < Math.max(0.2, stepBeats * 1.7) || restBeats > 1.6) continue;

    const chord = to.harmonicChord;
    const root = parseChord(chord).rootPc;
    const scale = scalePcsForMode(style.melody.scaleMode, root);
    const midi = nextScaleTone(from.midi, to.midi, scale, minMidi, maxMidi);
    if (midi === undefined || midi === from.midi || midi === to.midi) continue;
    const time = restStart + beatSec * stepBeats;
    const remainingBeats = (restEnd - time) / beatSec;
    // Let this connective note use the gap the player actually has, reserving
    // only a small breath before the next written attack. A fixed fraction of
    // the subdivision made fills sound clipped at some tempos and detached at
    // others.
    // Keep this fine enough for expressive timing while making the written
    // fraction stable through score/export round trips.
    const durationBeats = Math.round((remainingBeats - 0.04) * 960) / 960;
    if (durationBeats <= 0.04) continue;
    const fromBeat = from.notation?.beat ?? (from.time - bar.start) / beatSec;
    const fromDurationBeats = from.notation?.durationBeats ?? from.dur / beatSec;
    const noteBeat = fromBeat + fromDurationBeats + stepBeats;

    const tuningSystem = style.harmony.tuningSystem;
    if (!tuningSystem) throw new Error(`No authored tuning system for ${style.primaryGenre}/${style.id}`);
    const tuning = resolveTuningSystem(tuningSystem);
    const duration = scoreDurationSeconds({ bars }, from.bar, noteBeat, durationBeats);
    additions.push({
      soundContext,
      attackId: `${to.attackId ?? `${to.time}`}:performer-${additions.length}`,
      phraseId,
      time,
      dur: duration,
      midi,
      harmonicChord: chord,
      frequencyHz: tuning.getFrequencyHz(midi, root),
      vel: Math.max(20, Math.round(Math.min(from.vel, to.vel) * (development === 'fill' ? 0.72 : 0.62))),
      trackId,
      bar: from.bar,
      gestureCode: codeForGesture('legato'),
      hitFunctionCode: HIT_FUNCTIONS.indexOf('tone'),
      accent: 0.48,
      originCode: 1,
      exactPitch: false,
      authoredTechnique: false,
      authoredPitch: false,
      authoredDuration: false,
      // Keep the performed offset separate from the written subdivision so a
      // score export/import round trip retains these derived pickups exactly.
      notation: { bar: from.bar, beat: noteBeat, durationBeats },
    });
  }
  return additions;
}

function effectiveGesture(profile: InstrumentPerformanceProfile, ctx: PhraseContext, onset: RhythmOnset, authored?: string): string {
  const hint = patternGestureHint(ctx.pattern, profile.instrumentId, ctx.regionStyleId);
  return preferredGesture(ctx, onset.hit, authored ?? hint);
}

function performerArticulation(
  ctx: PhraseContext,
  base: string,
  authored: string | undefined,
  roughness: number,
  seed: number,
): string {
  const generic = new Set(['accent', 'staccato', 'legato', 'tenuto']);
  // A written articulation is part of the student's exercise. Generic authored
  // cues may be adapted by the existing lens/role compatibility path, but the
  // performer layer must not silently replace them while rendering that part.
  if (authored || !generic.has(base.toLowerCase())) return base;
  const role = techniqueRoleClass(ctx.role);
  const profile = ctx.profile;
  const candidates = Array.from(new Set([
    ...(ctx.hybridGrammar.articulationVocabulary?.[role] ?? []),
    ...ctx.hostTechniqueGestures,
    ...(ctx.lensWeight >= 0.5 ? ctx.sourceTechniqueGestures : []),
  ])).filter(gesture => Boolean(profile.gestures[gesture]) && !generic.has(gesture.toLowerCase()));
  if (!candidates.length) return base;

  // The beginner articulation remains the default. Phrase-level variation
  // occasionally calls on another instrument-supported style technique; the
  // tango mugre amount raises that chance and its contour without quantizing
  // or randomly changing every stroke.
  const chance = Math.min(0.64, 0.12 + ctx.hybridGrammar.allowDerivedAttacks * 0.12 + roughness * 0.42);
  const draw = (seed >>> 0) / 4294967296;
  if (draw >= chance) return base;
  const index = Math.floor(((seedOf(seed, ctx.phraseIndex, ctx.onsetIndex) >>> 0) / 4294967296) * candidates.length);
  return candidates[index] ?? base;
}

function grooveRoleFor(role: string, instrumentId: string): GrooveRole {
  const value = role.toLowerCase();
  if (/kick|bass-drum/.test(value)) return 'kick';
  if (/snare|clap/.test(value)) return 'snare';
  if (/hat|shaker|cymbal/.test(value)) return 'hat';
  if (/ride|bell/.test(value)) return 'ride';
  if (/bass|low-anchor/.test(value)) return 'bass';
  if (/lead|melody|voice|counterline/.test(value)) return 'lead';
  if (/harmony|comp|chord/.test(value)) return 'comp';
  if (/texture|pad|drone/.test(value)) return 'pad';
  if (/stab/.test(value)) return 'stab';
  return voiceProfile(instrumentId).role;
}

function grooveTime(
  bt: BarTime,
  onset: RhythmOnset,
  _onsetIndex: number,
  groove: BandPlan['lanes'][string][number]['groove'],
  hostFeel: GrooveProfile,
  sourceFeel: GrooveProfile,
  sourceWeight: number,
  role: GrooveRole,
  seed: number,
  ensembleSeed: number,
  ensemblePosition: number,
  energy: number,
  patternAccentAuthored: boolean,
  timingLocked: boolean,
): number {
  const beatSec = 60 / bt.bpm;
  const beat = onset.position * bt.beatsPerBar;
  const rawMicrotiming = Number(onset.microtiming ?? 0);
  const authoredMs = onset.microtimingUnit === 'milliseconds'
    || onset.microtimingUnit === undefined && Math.abs(rawMicrotiming) > 0.5
    ? rawMicrotiming
    : rawMicrotiming * beatSec * 1000 / Math.max(1, groove.subdivision);
  const input = {
    beatInBar: beat,
    beatsPerBar: bt.beatsPerBar,
    role,
    accent: onset.accent,
    seed,
    bpm: bt.bpm,
    authoredMs,
    // Written push/pull is the complete timing instruction for this attack.
    // Named ensemble cues also retain their exact shared placement across roles.
    authoredTimingOnly: timingLocked || Math.abs(rawMicrotiming) > 0,
    anticipated: Number(onset.anticipationOffsetSteps ?? 0) !== 0,
    intensity: energy,
    ensembleSeed,
    ensemblePosition,
    patternAccentAuthored,
  };
  const host = applyFeel(hostFeel, input);
  const source = sourceWeight > 0.02 ? applyFeel(sourceFeel, input) : host;
  const weight = Math.max(0, Math.min(1, sourceWeight));
  const offsetBeats = host.offsetBeats * (1 - weight) + source.offsetBeats * weight;
  const offsetMs = host.offsetMs * (1 - weight) + source.offsetMs * weight;
  const anticipation = (Number(onset.anticipationOffsetSteps ?? 0) + Number(groove.anticipationOffsetSteps ?? 0))
    * (beatSec * bt.beatsPerBar / 16);
  return bt.start + beat * beatSec + offsetBeats * beatSec + offsetMs / 1000 + anticipation;
}

export interface BandInteractionCues {
  leadOverlap: boolean;
  leadAttack: boolean;
  pulseAttack: boolean;
  harmonyAttack: boolean;
  unisonAttack: boolean;
}

/** Small role-aware gain moves for the style's declared ensemble grammar. */
export function roleInteractionMultiplier(
  model: string,
  role: string,
  cues: BandInteractionCues,
): number {
  const normalized = role.toLowerCase();
  if (model === 'homophonic') {
    if (/harmony|comp|keyboard|guitar/.test(normalized) && cues.leadOverlap) return 0.84;
    if (/lead|melody|voice/.test(normalized) && cues.harmonyAttack) return 1.035;
  } else if (model === 'interlock') {
    if (/harmony|comp|piano|guitar/.test(normalized) && cues.pulseAttack) return 0.84;
    if (/bass|percussion|drum|pulse/.test(normalized) && cues.harmonyAttack) return 1.03;
    if (/lead|melody|voice/.test(normalized) && cues.pulseAttack) return 1.04;
  } else if (model === 'unison' && cues.unisonAttack) {
    return 1.03;
  } else if (model === 'counterpoint') {
    if (/lead|melody|voice/.test(normalized) && cues.pulseAttack) return 1.02;
    if (/bass/.test(normalized) && cues.leadAttack) return 1.015;
  }
  return 1;
}


function applyPhraseBandInteraction(
  notes: PerfNote[],
  sheet: Sheet,
  region: Region,
  style: ResolvedStyle,
): void {
  const model = style?.contract?.interactionModel ?? 'interlock';
  const theory = styleTheoryFor(style?.id, region.genre ?? sheet.worldId);
  const roles = new Map((sheet.tracks as Voice[]).map(t => [t.id, String(sheet.partRoles?.[region.id]?.[t.id] ?? t.role).toLowerCase()]));
  const regionNotes = notes.filter(n => n.bar >= region.start && n.bar < region.end);
  if (!regionNotes.length) return;

  const phraseBars = phraseBarsForStyle(style);
  for (let phraseStart = region.start; phraseStart < region.end; phraseStart += phraseBars) {
    const phraseEnd = Math.min(region.end, phraseStart + phraseBars);
    const phrase = regionNotes.filter(n => n.bar >= phraseStart && n.bar < phraseEnd);
    if (!phrase.length) continue;
    const leads = phrase.filter(n => /lead|melody|voice/.test(roles.get(n.trackId) ?? ''));
    const pulse = phrase.filter(n => /bass|percussion|drum|pulse/.test(roles.get(n.trackId) ?? ''));
    const harmony = phrase.filter(n => /harmony|comp|piano|guitar|keyboard/.test(roles.get(n.trackId) ?? ''));
    const near = (a: PerfNote, b: PerfNote) => a.trackId !== b.trackId && Math.abs(a.time - b.time) <= 0.030;

    for (const n of phrase) {
      const role = roles.get(n.trackId);
      if (!role) throw new Error(`No authored role for track ${n.trackId} in section ${region.id}`);
      const mixKey = /lead|melody|voice/.test(role) ? 'lead' : /bass/.test(role) ? 'bass' : /perc|drum/.test(role) ? 'percussion' : /pad/.test(role) ? 'pad' : /comp|harmony|piano|guitar/.test(role) ? 'harmony' : role;
      const feature = theory.mixFocus[mixKey] ?? theory.mixFocus.melody ?? .5;
      const featureGain = 0.93 + Math.max(0, Math.min(1, feature)) * 0.14;
      const overlapsInRegister = (other: PerfNote) => n.trackId !== other.trackId
        && Math.abs(n.midi - other.midi) <= 18
        && Math.min(n.time + n.dur, other.time + other.dur) - Math.max(n.time, other.time) > 0.015;
      const leadOverlap = leads.some(overlapsInRegister);
      const leadAttack = leads.some(x => near(n, x));
      const pulseOverlap = pulse.some(x => near(n, x));
      const harmonyOverlap = harmony.some(x => near(n, x));
      const unisonAttack = phrase.some(x => near(n, x) && Math.abs(n.midi - x.midi) <= 12);

      n.vel = Math.max(1, Math.min(127, Math.round(n.vel * featureGain)));
      const interactionGain = roleInteractionMultiplier(model, role, {
        leadOverlap, leadAttack, pulseAttack: pulseOverlap, harmonyAttack: harmonyOverlap, unisonAttack,
      });
      n.vel = Math.max(1, Math.min(127, Math.round(n.vel * interactionGain)));

      // Four-bar breathing: phrase-final attacks get a controlled release rather
      // than a hard clip, while the preceding bar stays slightly more open.
      if (n.bar === phraseEnd - 1) {
        if (!n.authoredDuration && /lead|melody|voice/.test(role)) n.dur *= 1.04;
        if (/bass|percussion|drum/.test(role)) n.vel = Math.min(127, Math.round(n.vel * 1.025));
      }
      n.vel = Math.max(1, Math.min(127, n.vel));
      n.dur = Math.max(n.authoredDuration ? 0.000001 : 0.018, n.dur);
    }
  }
}

const partInterpretations = new LRUMap<string, { notes: PerfNote[]; phrases: PerformancePhrase[] }>(2048, 'bandPartSections');
registerCache(partInterpretations);

/** Layer 2 consumes the first-pass notation, never selects another hidden grid. */
export function interpretNotatedScore(sheet: Sheet, notation: NotatedScore): Performance {
  const bars = buildBarTimes(sheet);
  const song = buildSongPlan(sheet, bars);
  const lanes: BandPlan['lanes'] = {};

  for (const region of sheet.regions) {
    for (const baseTrack of sheet.tracks as Voice[]) {
      const track = { ...baseTrack, role: sheet.partRoles?.[region.id]?.[baseTrack.id] ?? baseTrack.role };
      if (sheet.arrangement[region.id]?.[track.id] === 'silent') continue;
      const preliminaryStyle = getResolvedSectionStyle(sheet, styleRegion(region));
      const rhythm = chooseRhythm(sheet, region, track, preliminaryStyle);
      const lens = resolveLens(sheet, region, track, rhythm.pattern);
      const role = track.role ?? voiceProfile(track.instrumentId).role;
      const host = resolveGenreProfile(track.instrumentId, lens.hostGenre);
      const source = resolveGenreProfile(track.instrumentId, lens.sourceGenre);
      const sourceStyle = getStyle(lens.sourceStyleId);
      const sourceSwing = Number(sourceStyle?.rhythm?.swingPercentage ?? source.timing.swing * 100) / 100;
      lanes[region.id] ??= [];
      lanes[region.id].push({
        trackId: track.id,
        instrumentId: track.instrumentId,
        role,
        sectionId: region.id,
        lens,
        rhythm,
        groove: {
          offsetMs: host.timing.offsetMs * (1 - lens.weight) + source.timing.offsetMs * lens.weight,
          swing: (preliminaryStyle.rhythm.swingPercentage / 100) * (1 - lens.weight) + sourceSwing * lens.weight,
          swingUnit: preliminaryStyle.contract.groove.swingUnit,
          subdivision: rhythm.subdivisions,
          anticipationOffsetSteps: Number(preliminaryStyle.rhythm?.anticipationOffsetSteps ?? 0),
        },
      });
    }
  }

  const band = { song, lanes } satisfies BandPlan;
  const notes: PerfNote[] = [];
  const phrases: PerformancePhrase[] = [];
  const ccs: PerfCC[] = [];

  for (const region of sheet.regions) {
    const regionStyle = getResolvedSectionStyle(sheet, styleRegion(region));
    const styleGroove = grooveForStyle(regionStyle);
    const context = sheet.arrangementContext?.[region.id];
    const sectionDecisions = new Map<string, ReturnType<typeof decide>>();
    for (const baseVoice of sheet.tracks as Voice[]) {
      const voice = { ...baseVoice, role: sheet.partRoles?.[region.id]?.[baseVoice.id] ?? baseVoice.role };
      const decision = decide(voice.id, context);
      sectionDecisions.set(voice.id, decision);
    }
    for (const baseTrack of sheet.tracks as Voice[]) {
      const track = { ...baseTrack, role: sheet.partRoles?.[region.id]?.[baseTrack.id] ?? baseTrack.role };
      const decision = sectionDecisions.get(track.id)!;
      if (!decision.plays) continue;
      const lane = band.lanes[region.id]?.find(x => x.trackId === track.id);
      if (!lane) continue;
      const soloPlan = context?.solo;
      if (soloPlan && !supportsSolo(soloPlan, track)) continue;
      const cell = notation.sections.find(section => section.id === region.id)?.cells[track.id];
      if (!cell) throw new Error(`Missing written part ${region.id}/${track.id}`);
      const lastWrittenBar = Math.max(region.end + 1, ...cell.bars.flatMap(bar => bar.attacks.map(attack => region.start + bar.bar
        + Math.ceil((beatValue(attack.position) + beatValue(attack.duration)) / bars[region.start].beatsPerBar))));
      const partKey = contentKey(['band-v1', cell.key, region.start, region.kind, regionStyle, decision, context?.solo,
        lane.lens, sheet.measures.slice(region.start, region.end + 1).map(m => m.chord),
        bars.slice(region.start, lastWrittenBar).map(b => b.bpm)]);
      const cachedPart = partInterpretations.get(partKey);
      const sectionTime = bars[region.start].start;
      if (cachedPart) {
        notes.push(...cachedPart.notes.map(note => ({ ...structuredClone(note), time: note.time + sectionTime })));
        phrases.push(...cachedPart.phrases.map(phrase => ({ ...phrase, start: phrase.start + sectionTime, end: phrase.end + sectionTime })));
        continue;
      }
      const firstNote = notes.length, firstPhrase = phrases.length;
      const profile = getInstrumentPerformanceProfile(track.instrumentId);
      const sourceFeelStyle = resolveStyle({ genreId: lane.lens.sourceGenre, styleId: lane.lens.sourceStyleId });
      const sourceFeel = grooveForStyle(sourceFeelStyle);
      const grooveRole = voiceProfile(track.instrumentId).role;
      const carriesBassLine = /bass|low-anchor/.test(String(track.role ?? '')) || grooveRole === 'bass';
      const carriesChordVoicing = !/lead|melody|voice/.test(String(track.role ?? '')) && profile.capabilities.polyphony > 1;
      let carriedBassMidi: number | undefined;
      let carriedBassTime: number | undefined;
      let carriedVoicing: number[] | undefined;
      let carriedMelodyMidi: number | undefined;
      const dialect = resolveDialect(track.instrumentId, region.genre ?? sheet.worldId, regionStyle.id, track.role, decision.sectionEnergy);
      const partDialect = lane.lens.weight > 0
        ? resolveDialect(track.instrumentId, lane.lens.sourceGenre, lane.lens.sourceStyleId, track.role, decision.sectionEnergy)
        : undefined;
      const cycle = Math.max(1, Number(regionStyle?.contract?.cycleLength ?? 1));
      const soloCandidates = soloPlan?.trackIds ?? [];
      const soloGrammar = soloPlan ? {
        ...regionStyle.contract.improvisationGrammar,
        scaleMode: soloPlan.policy.scaleMode === 'style'
          ? regionStyle.melody.scaleMode
          : soloPlan.policy.scaleMode ?? regionStyle.contract.improvisationGrammar.scaleMode,
        phraseBars: soloPlan.policy.phraseBars,
      } : undefined;
      const authoredPhraseBars = soloCandidates.includes(track.id) ? soloGrammar?.phraseBars : undefined;
      const phraseBars = authoredPhraseBars
        ? Math.max(cycle, Math.ceil(Number(authoredPhraseBars) / cycle) * cycle)
        : phraseBarsForStyle(regionStyle, lane.rhythm.pattern?.cycleLength ?? cycle);
      for (let phraseStart = region.start, phraseIndex = 0; phraseStart < region.end; phraseStart += phraseBars, phraseIndex++) {
        const phraseEnd = Math.min(region.end, phraseStart + phraseBars);
        const grammarBundle = buildHybridGrammar(regionStyle.id, lane.lens.sourceGenre, regionStyle, lane.lens.weight, lane.lens.sourceStyleId);
        const phraseId = `${track.id}:${region.id}:${phraseIndex}`;
        const timingLockedCue = lane.rhythm.pattern.timingLock === 'ensemble';
        const soundContext = { worldId: region.genre ?? sheet.worldId, styleId: regionStyle.id, role: track.role };
        const phrase: PerformancePhrase = {
          id: phraseId, trackId: track.id, regionId: region.id, startBar: phraseStart, endBar: phraseEnd,
          start: bars[phraseStart]?.start ?? 0, end: bars[phraseEnd - 1]?.end ?? 0, soundContext,
        };
        phrases.push(phrase);
        const state = createPhraseState(phraseIndex);
        // Phrase-local contour decisions reset, while physical voice-leading
        // memory for bass, chord voicings, and derived melodies carries across
        // the boundary. This preserves sentence shape without register jumps.
        if (carriesBassLine) {
          state.previousMidi = carriedBassMidi;
          state.previousTime = carriedBassTime;
        }
        // Phrase boundaries shape the melody; they should not teleport an
        // automatically realized line back to its default register. Explicit
        // score pitches still pass through unchanged, so authored octave
        // shifts remain available where the part actually writes one.
        if (!carriesBassLine && /^(lead|melody|counterline|voice)$/i.test(String(track.role ?? '')))
          state.previousMidi = carriedMelodyMidi;
        if (carriesChordVoicing && carriedVoicing?.length) state.previousVoicing = carriedVoicing.slice();
        const phraseNotes: PerfNote[] = [];
        let phraseDevelopment: ReturnType<typeof shouldDevelopPhrase> | undefined;
        for (let bar = phraseStart; bar < phraseEnd; bar++) {
          const currentSoloists = soloPlan ? soloistAtBar(soloPlan, region, bar, cycle) : [];
          const soloist = currentSoloists.includes(track.id);
          if (soloPlan && !supportsSolo(soloPlan, track, currentSoloists)) continue;
          if (soloPlan?.mode === 'trading' && soloCandidates.includes(track.id) && !soloist) continue;
          const bt = bars[bar];
          const measure = sheet.measures[bar];
          if (!bt || !measure) throw new Error(`Missing rebuilt measure/time data at bar ${bar + 1}`);
          if (measure.patternByTrack?.[track.id] === 'silent') continue;
          const detail = measure.patternDetailsByTrack?.[track.id];
          const writtenBar = cell.bars[bar - region.start];
          const rhythm: RhythmIdea = { ...lane.rhythm, pattern: PATTERNS_BY_ID[writtenBar.patternId] ?? lane.rhythm.pattern,
            onsets: writtenBar.attacks.map(attack => ({
              pitch: attack.pitch.kind === 'notes' ? attack.pitch.value : undefined,
              percussion: attack.pitch.kind === 'drum' ? attack.pitch.drum : undefined,
              musicianNotation: attack.notation,
              position: beatValue(attack.position) / bt.beatsPerBar, duration: beatValue(attack.duration),
              durationAuthored: attack.durationAuthored, accent: attack.accent, velocity: attack.velocity,
              hit: attack.hit, sourceHit: attack.sourceHit, microtiming: attack.microtiming.value,
              microtimingUnit: attack.microtiming.unit,
              sourceGenre: PATTERNS_BY_ID[writtenBar.patternId]?.worldId ?? lane.rhythm.sourceGenre,
            })) };
          if (!rhythm.onsets.length) continue;
          const energy = activityFor(regionStyle.contract, decision.sectionEnergy);
          const phrasePosition = ((bar - phraseStart) + 0.5) / Math.max(1, phraseEnd - phraseStart);
          const phraseAttackOffset = cell.bars.slice(phraseStart - region.start, bar - region.start)
            .reduce((count, phraseBar) => count + phraseBar.attacks.length, 0);
          const phraseStage = soloGrammar?.phraseStages?.length
            ? soloGrammar.phraseStages[phraseIndex % soloGrammar.phraseStages.length]
            : undefined;
          const sharedHostProfile = resolveGenreProfile(track.instrumentId, lane.lens.hostGenre);
          const sharedSourceProfile = resolveGenreProfile(track.instrumentId, lane.lens.sourceGenre);
          const sourceStyle = getStyle(lane.lens.sourceStyleId);
          if (!sourceStyle || (sourceStyle.primaryGenre !== lane.lens.sourceGenre && !sourceStyle.genres.includes(lane.lens.sourceGenre))) {
            throw new Error(`Missing authored source style ${lane.lens.sourceStyleId} for ${lane.lens.sourceGenre}`);
          }
          const hostTechniqueGestures = calibratedTechniqueGestures(regionStyle, profile, track.role);
          const sourceTechniqueGestures = calibratedTechniqueGestures(sourceStyle, profile, track.role);
          const hostTheory = styleTheoryFor(regionStyle.id, lane.lens.hostGenre);
          const sourceTheory = styleTheoryFor(sourceStyle.id, lane.lens.sourceGenre);
          const hybridTheory = blendGenreTheory(hostTheory, sourceTheory, lane.lens.weight);
          const barNotes: PerfNote[] = [];

          for (let i = 0; i < rhythm.onsets.length; i++) {
            const onset = rhythm.onsets[i];
            if (!onset.pitch && soloist && phraseStage === 'rest' && phrasePosition >= 0.38 && phrasePosition <= 0.62) continue;
            const onsetBeat = onset.position * bt.beatsPerBar;
            const chord = chordAtBeat(sheet, bar, onsetBeat);
            const nextChord = nextChordAtBeat(sheet, bar, onsetBeat);
            const ctx: PhraseContext = {
              sheetWorldId: sheet.worldId,
              hostGenre: lane.lens.hostGenre,
              sourceGenre: lane.lens.sourceGenre,
              regionStyleId: regionStyle.id,
              role: track.role,
              profile,
              hostProfile: sharedHostProfile,
              sourceProfile: sharedSourceProfile,
              hostTechniqueGestures,
              sourceTechniqueGestures,
              lensWeight: lane.lens.weight,
              hostGrammar: grammarBundle.host,
              sourceGrammar: grammarBundle.source,
              hybridGrammar: grammarBundle.hybrid,
              pattern: rhythm.pattern,
              measureDetails: detail,
              barIndex: bar,
              phraseStart,
              phraseEnd,
              phrasePosition,
              phraseIndex,
              phraseAttackIndex: phraseAttackOffset + i,
              onsetIndex: i,
              onsetPosition: onset.position,
              authoredPitch: onset.pitch,
              hit: onset.hit,
              chord,
              nextChord,
              energy,
              bassStyle: hybridTheory.bass.style,
              hostTheory,
              sourceTheory,
              hybridTheory,
              soloGrammar,
              soloist,
            };
            const authoredGesture = writtenBar.attacks[i].technique ?? (detail?.articulations?.length ? detail.articulations[i % detail.articulations.length] : detail?.articulation);
            const authoredHint = authoredGesture ?? patternGestureHint(ctx.pattern, profile.instrumentId, regionStyle.id);
            const dialectTechnique = lane.lens.weight >= 0.5
              ? partDialect?.defaultTechnique ?? dialect?.defaultTechnique
              : dialect?.defaultTechnique ?? partDialect?.defaultTechnique;
            let gestureName = !authoredHint && dialectTechnique && profile.gestures[dialectTechnique]
              ? dialectTechnique
              : effectiveGesture(profile, ctx, onset, authoredGesture);
            gestureName = performerArticulation(ctx, gestureName, authoredGesture, styleGroove.roughness ?? 0,
              seedOf(track.id, region.id, phraseStart, phraseIndex, i, onset.sourceHit ?? onset.hit));
            if (!authoredGesture && soloist && phraseStage === 'rapid-run') {
              const ornaments = [...(soloGrammar?.rapidRunOrnaments ?? []), ...(regionStyle.melody?.ornamentVocabulary ?? [])]
                .filter(name => profile.gestures[name]);
              if (ornaments.length) gestureName = ornaments[(i + phraseIndex) % ornaments.length];
            }
            ctx.gesture = gestureName;
            const authoredVariation = String(detail?.variationType ?? '').toLowerCase();
            const development = authoredVariation.includes('cadence') ? 'cadence'
              : authoredVariation.includes('transition') ? 'variation'
              : shouldDevelopPhrase(ctx);
            phraseDevelopment ??= development;
            const developmentAccentScale = phraseDevelopmentGain(development, phrasePosition, styleGroove.dynamicRange);

            const kitMidis = onset.percussion ? [onset.percussion.midi] : baseMidiForPattern(INSTRUMENTS_BY_ID[track.instrumentId], onset, i);
            const midis = onset.pitch?.midi !== undefined || !kitMidis.length ? realizeMidi(ctx, i, rhythm.onsets.length, state) : kitMidis;
            const gestureCode = codeForGesture(gestureName);
            const hitFunctionCode = Math.max(0, HIT_FUNCTIONS.indexOf(onset.hit));
            const accent = clamp(onset.accent * (0.72 + energy * 0.34) * developmentAccentScale);
            // Section energy owns the broad dynamic arc. Activity and brightness
            // add only a restrained lift; multiplying both directly used to push
            // most strong notes into MIDI 127 and erase their accent differences.
            const driveLift = 0.94 + clamp((decision.drive - 0.45) / 0.95) * 0.06;
            const brightnessLift = 0.96 + Math.max(0, Math.min(127, decision.brightness)) / 127 * 0.08;
            // Bring the genre's written accents and metric hierarchy into the
            // SoundFont velocity, where the sample layers can make them audible.
            // Keep it centered around unity and bounded so strong hits stay punchy
            // without flattening the section arc against the output limiter.
            const feelVelocity = grooveVelocityMultiplier(styleGroove, {
              beatInBar: onset.position * bt.beatsPerBar,
              beatsPerBar: bt.beatsPerBar,
              role: grooveRole,
              accent: onset.accent,
              seed: seedOf(track.id, region.id, bar, i),
              bpm: bt.bpm,
              intensity: energy,
              ensembleSeed: seedOf(region.id, phraseStart),
              ensemblePosition: (bar - phraseStart) * bt.beatsPerBar + onset.position * bt.beatsPerBar,
              patternAccentAuthored: ctx.pattern.events?.some(event => event.accent !== undefined) ?? false,
            });
            const grooveLift = clamp(1 + (feelVelocity - 0.72) * 0.55, 0.82, 1.16);
            const vel = Math.max(1, Math.min(127, Math.round(velocityForEnergy(energy, onset.velocity, sharedHostProfile.density.accentContrast) * driveLift * brightnessLift * grooveLift)));
            const phraseBeat = (bar - phraseStart) * bt.beatsPerBar + onset.position * bt.beatsPerBar;
            const time = Math.max(0, grooveTime(bt, onset, i, lane.groove, styleGroove, sourceFeel,
              lane.lens.weight, grooveRoleFor(track.role, track.instrumentId), seedOf(track.id, region.id, bar, i),
              seedOf(region.id, phraseStart), phraseBeat, energy,
              ctx.pattern.events?.some(event => event.accent !== undefined) ?? false,
              timingLockedCue || String(detail?.variationType ?? '').toLowerCase() === 'cadence'));
            const pv = voiceProfile(track.instrumentId);
            // Simultaneous tones belong to one rhythmic instant. They cannot
            // shorten each other's inferred gates; the final implicit note
            // has the remaining bar available, rather than a placeholder step.
            const nextPosition = rhythm.onsets.reduce((next, candidate) =>
              candidate.position > onset.position + 1e-9 ? Math.min(next, candidate.position) : next, 1);
            const localGapBeats = Math.max(0.08, (nextPosition - onset.position) * bt.beatsPerBar);
            const authoredIsDefaultStep = onset.durationAuthored !== true;
            const sustainEligible = pv.sustain === 'sustained' || pv.sustain === 'blown' || pv.sustain === 'decaying';
            const authoredBeats = Math.max(onset.durationAuthored ? 0.000001 : 0.04, sustainEligible && authoredIsDefaultStep ? localGapBeats : onset.duration);
            const durBeats = noteLengthBeats(authoredBeats, gestureName);
            const writtenDuration = onset.durationAuthored ? authoredBeats : durBeats;
            // An authored gate is already a deliberate rhythmic decision. Use
            // articulation-scaled duration only when a pattern leaves the gate
            // to the performer; multiplying an authored staccato/legato gate a
            // second time changes the written phrase and can break cadences.
            const dur = Math.max(onset.durationAuthored ? 0.000001 : 0.028,
              scoreDurationSeconds({ bars }, bar, onset.position * bt.beatsPerBar, writtenDuration));
            const tuningSystem = regionStyle.harmony.tuningSystem;
            if (!tuningSystem) throw new Error(`No authored tuning system for ${regionStyle.primaryGenre}/${regionStyle.id}`);
            const tuning = resolveTuningSystem(tuningSystem);
            const genericGesture = Boolean(authoredGesture && ['accent','staccato','legato','tenuto'].includes(authoredGesture.toLowerCase()));
            const roleClass = techniqueRoleClass(track.role);
            const hostRoles = sharedHostProfile.roles.map(techniqueRoleClass);
            const partRoleOutsideHost = !hostRoles.includes(roleClass);
            const patternRoleMismatch = !ctx.pattern.roles?.some(value => techniqueRoleClass(value) === roleClass)
              && !ctx.pattern.compatibleRoles?.some(value => techniqueRoleClass(value) === roleClass)
              && !ctx.pattern.canCrossRole;
            const shouldAdaptGenericGesture = genericGesture && (lane.lens.weight >= .5 || partRoleOutsideHost || patternRoleMismatch);

            for (let mi = 0; mi < midis.length; mi++) {
              const exactPitch = onset.pitch?.midi !== undefined || Boolean(onset.percussion);
              const midi = midis[mi] + (exactPitch ? 0 : decision.register);
              // Banjo harmony is voiced as a chord for harmonic access, but its
              // attack is a roll rather than a piano-style block chord. Stagger
              // the picked strings inside a few milliseconds while keeping the
              // underlying chord tones intact.
              const rolledChord = INSTRUMENTS_BY_ID[track.instrumentId]?.attackProfile?.chordAttack === 'rolled' && midis.length > 1;
              const stagger = (rolledChord || (/fingerstyle|arpegg/.test(gestureName.toLowerCase()) && midis.length > 1))
                ? mi * (rolledChord ? INSTRUMENTS_BY_ID[track.instrumentId]?.attackProfile?.rolledChordSpreadSeconds ?? 0.011 : 0.014)
                : 0;
              const note: PerfNote = {
                soundContext,
                musicianNotation: onset.musicianNotation,
                percussion: onset.percussion,
                notationEventId: `${track.id}:${region.id}:${bar - region.start}:${i}`,
                attackId: `${track.id}:${region.id}:${bar}:${i}`,
                phraseId,
                time: Math.max(0, time + stagger),
                dur: Math.max(onset.durationAuthored ? 0.000001 : 0.028, dur - stagger * 0.35),
                notation: { bar, beat: onset.position * bt.beatsPerBar, durationBeats: writtenDuration },
                exactPitch,
                tuningCents: onset.pitch?.cents,
                harmonicChord: chord,
                midi,
                frequencyHz: tuning.getFrequencyHz(midi, parseChord(chord).rootPc),
                vel: Math.max(1, Math.min(127, vel - (stagger ? mi * 4 : 0))),
                trackId: track.id,
                bar,
                gestureCode,
                hitFunctionCode,
                accent: Math.round(accent * 1000) / 1000,
                originCode: 0,
                // Generic articulation words establish a base articulation;
                // style calibration may realize a more specific playable
                // action when the part lens or assigned role changes its job.
                // Named techniques stay protected, as do authored articulations
                // when the pattern is being played in its intended role/style.
                authoredTechnique: Boolean(authoredGesture && profile.gestures[authoredGesture]
                  && !shouldAdaptGenericGesture),
                authoredPitch: Boolean(onset.pitch || onset.percussion),
                authoredDuration: Boolean(onset.durationAuthored),
              };
              barNotes.push(note);
            }

            // Phrase-level bass development: when the style calls for walking
            // motion, fill the larger spaces between authored attacks with a
            // theory-derived passing tone aimed at the next played degree.
            if (state.previousMidi !== undefined && state.previousTime !== undefined &&
                (profile.capabilities.polyphony <= 1 || voiceProfile(track.instrumentId).role === 'bass') && grammarBundle.hybrid.allowDerivedAttacks > 0.28 &&
                grammarBundle.hybrid.allowDerivedPitch > 0.2 && !onset.pitch && /bass/.test(String(ctx.role)) &&
                grammarBundle.hybrid.subdivisionVocabulary?.bass?.includes(2)) {
              const current = midis[0];
              const gap = time - state.previousTime;
              if (gap > (60 / bt.bpm) * 0.72 && gap < (60 / bt.bpm) * 1.8) {
                const passing = derivePassingMidi(state, current, ctx);
                if (passing !== undefined && passing !== state.previousMidi && passing !== current) {
                  const passTime = state.previousTime + gap * 0.5;
                  const passVel = Math.max(18, Math.round(vel * 0.68));
                  barNotes.push({
                    soundContext,
                    attackId: `${track.id}:${region.id}:${bar}:${i}:passing`,
                    phraseId,
                    time: passTime,
                    // The passing tone occupies a fixed share of its available
                    // gap; a 160 ms ceiling made it unnaturally tiny at slow
                    // tempos.
                    dur: gap * 0.42,
                    midi: passing,
                    harmonicChord: chord,
                    frequencyHz: tuning.getFrequencyHz(passing, parseChord(chord).rootPc),
                    vel: passVel,
                    trackId: track.id,
                    bar,
                    gestureCode: codeForGesture('legato'),
                    hitFunctionCode: HIT_FUNCTIONS.indexOf('tone'),
                    accent: Math.round(Math.min(0.7, accent * 0.7) * 1000) / 1000,
                    originCode: 1,
                  });
                }
              }
            }

            updatePhraseState(state, barNotes.length ? barNotes : phraseNotes, ctx);
          }

          // End-of-bar feedback/settling: preserve a sustained resonant answer
          // on continuous instruments when a phrase has a strong cadence attack.
          if (barNotes.length && !rhythm.onsets.at(-1)?.durationAuthored) {
            const last = barNotes[barNotes.length - 1];
            const resonance = profile.capabilities.sustained ? 1.18 : profile.capabilities.continuous ? 1.06 : 1.0;
            last.dur = Math.min(last.dur * resonance, Math.max(last.dur, (bt.end - last.time) * (0.52 + sharedHostProfile.phrase.sustain * 0.35)));
          }

          phraseNotes.push(...barNotes);
        }
        if (carriesBassLine) {
          carriedBassMidi = state.previousMidi;
          carriedBassTime = state.previousTime;
        }
        if (!carriesBassLine && /^(lead|melody|counterline|voice)$/i.test(String(track.role ?? '')))
          carriedMelodyMidi = state.previousMidi;
        if (carriesChordVoicing && state.previousVoicing?.length) carriedVoicing = state.previousVoicing.slice();
        if (/^(lead|melody|counterline|voice)$/i.test(String(track.role ?? '')) && !timingLockedCue) {
          phraseNotes.push(...developLeadPhrase(phraseNotes, phraseDevelopment, grammarBundle.hybrid,
            regionStyle, track.instrumentId, track.id, phraseId, soundContext, bars));
        }
        notes.push(...phraseNotes);
      }
      partInterpretations.set(partKey, {
        notes: notes.slice(firstNote).map(note => ({ ...structuredClone(note), time: note.time - sectionTime })),
        phrases: phrases.slice(firstPhrase).map(phrase => ({ ...phrase, start: phrase.start - sectionTime, end: phrase.end - sectionTime })),
      });
    }
    interpretRelationships(notes, sheet, region);
    applyPhraseBandInteraction(notes, sheet, region, regionStyle);
  }

  const byTrack = new Map<string, PerfNote[]>();
  for (const n of notes) {
    const arr = byTrack.get(n.trackId) ?? [];
    arr.push(n);
    byTrack.set(n.trackId, arr);
  }

  const resolved: PerfNote[] = [];
  for (const track of sheet.tracks as Voice[]) {
    const p = getInstrumentPerformanceProfile(track.instrumentId);
    const arr = (byTrack.get(track.id) ?? []).sort((a, b) => a.time - b.time || a.midi - b.midi);
    const kept: PerfNote[] = [];
    for (const n of arr) {
      // Preserve pitch class when an authored/generated note falls outside the
      // instrument's playable range. Clamping to an endpoint can turn a root
      // into a different pitch class; octave-folding cannot.
      if (!n.exactPitch) n.midi = foldToRange(n.midi, voiceProfile(track.instrumentId));
      // A new attack is never discarded because its predecessor still rings.
      // Single-player monophonic lines release their predecessor at the next
      // distinct attack; polyphonic parts keep authored overlaps intact.
      if (p.capabilities.polyphony <= 1) {
        for (let i = kept.length - 1; i >= 0; i--) {
          const prev = kept[i];
          if (prev.time < n.time && prev.time + prev.dur > n.time) prev.dur = n.time - prev.time;
        }
      }
      kept.push(n);
    }
    resolved.push(...kept);
  }

  for (const track of sheet.tracks as Voice[]) {
    const p = getInstrumentPerformanceProfile(track.instrumentId);
    if (p.family !== 'bellows') continue;
    const trackNotes = resolved.filter(x => x.trackId === track.id).sort((a, b) => a.time - b.time);

    if (track.instrumentId === 'bandoneon') {
      continue;
    }

    let reservoir = 0.5;
    let dir: 1 | 2 = 1;
    const attacks = new Map<string, PerfNote[]>();
    for (const note of trackNotes) {
      const key = note.attackId ?? String(note.time);
      const group = attacks.get(key) ?? [];
      group.push(note); attacks.set(key, group);
    }
    for (const group of attacks.values()) {
      const n = group[0];
      const accent = group.reduce((sum, note) => sum + note.accent, 0) / group.length;
      const need = 0.08 + accent * 0.18;
      if (reservoir < need || (n.gestureCode === GESTURE_CODES['accent'] && reservoir > 0.35)) {
        dir = dir === 1 ? 2 : 1;
        reservoir = 0.65;
      }
      reservoir = clamp(reservoir - need, 0.05, 0.95);
      for (const note of group) note.bellowsDirectionCode = dir;
    }
  }

  resolved.sort((a, b) => a.time - b.time || a.trackId.localeCompare(b.trackId) || a.midi - b.midi);
  const duration = bars[bars.length - 1]?.end ?? 0;
  const basePerformance: Performance = {
    notes: resolved,
    phrases,
    ccs,
    bars,
    duration,
    tail: Math.max(0.75, (resolved.reduce((m, n) => Math.max(m, n.time + n.dur), 0) - duration) + 0.6),
    blends: Object.fromEntries(Object.entries(lanes).flatMap(([rid, xs]) => xs.map(x => [`${rid}|${x.trackId}`, {
      hostStyleId: x.lens.hostGenre,
      guestStyleId: x.lens.sourceGenre,
      weight: x.lens.weight,
      applied: x.lens.weight > 0 ? x.lens.provenance.filter(v => !v.startsWith('host:')) : [],
      violations: [],
      summary: x.lens.weight > 0 ? `host ${x.lens.hostGenre} with ${x.lens.sourceGenre} lens at ${x.lens.weight.toFixed(2)}` : `host ${x.lens.hostGenre}`,
    }]))),
    worldId: sheet.worldId,
    trackInfo: Object.fromEntries((sheet.tracks as Voice[]).map(t => [t.id, { instrumentId: t.instrumentId, role: t.role }])),
  };
  const performance = optimizePerformanceByPhraseAndSong(sheet, basePerformance).performance;
  resolveWrittenTies(performance);
  // A sustained note cannot carry through a turn in which its player rests,
  // or into an explicitly unaccompanied passage owned by someone else.
  if (Object.values(sheet.arrangementContext ?? {}).some(context => context.solo)) {
    for (const note of performance.notes) {
      const track = sheet.tracks.find(t => t.id === note.trackId);
      if (!track) continue;
      for (let b = note.bar + 1; b < bars.length && bars[b].start < note.time + note.dur; b++) {
        const region = sheet.regions.find(r => r.id === bars[b].regionId);
        if (!region) continue;
        const solo = sheet.arrangementContext?.[region.id]?.solo;
        if (!solo) continue;
        const rests = !supportsSolo(solo, track, soloistAtBar(solo, region, b, getResolvedSectionStyle(sheet, region).contract.cycleLength)) || (solo.mode === 'trading' && solo.trackIds.includes(track.id)
          && !soloistAtBar(solo, region, b, getResolvedSectionStyle(sheet, region).contract.cycleLength).includes(track.id));
        if (rests) {
          note.dur = Math.max(0.008, bars[b].start - note.time);
          break;
        }
      }
    }
  }
  // Bisonoric fingering must agree with the final phrase-shaped pitches.
  for (const track of sheet.tracks as Voice[]) {
    if (track.instrumentId === 'bandoneon') resolveBandoneonPhysicalFingering(track,
      performance.notes.filter(note => note.trackId === track.id).sort((a, b) => a.time - b.time));
  }
  // Pitch shaping and range folding happen before frequency is finalized.
  for (const note of performance.notes) {
    const track = sheet.tracks.find(t => t.id === note.trackId);
    const region = sheet.regions.find(r => r.id === bars[note.bar]?.regionId);
    if (!track?.instrumentId || !region) continue;
    const genre = region.genre ?? sheet.worldId;
    if (!note.exactPitch) note.midi = foldToRange(note.midi, voiceProfile(track.instrumentId, genre));
    const style = getResolvedSectionStyle(sheet, region);
    const harmonicChord = note.harmonicChord;
    if (!harmonicChord) throw new Error(`Pitched note ${note.attackId ?? note.trackId} has no resolved harmony`);
    const tuningSystem = style.harmony.tuningSystem;
    if (!tuningSystem) throw new Error(`No authored tuning system for ${style.primaryGenre}/${style.id}`);
    note.frequencyHz = resolveTuningSystem(tuningSystem)
      .getFrequencyHz(note.midi, parseChord(harmonicChord).rootPc) * 2 ** ((note.tuningCents ?? 0) / 1200);
  }
  realizeTechniquePerformance(performance);
  return performance;
}


/**
 * Resolve the actual physical button/direction for the 142-tone Rheinische
 * bandoneón. This is deliberately separate from generic bellows logic: on a
 * bisonoric instrument the direction is part of the fingering, not merely a
 * timbral parameter.
 */
function resolveBandoneonPhysicalFingering(track: Voice, notes: PerfNote[]): void {
  let previousDirection: 1 | 2 = 1;
  let previousButton: string | undefined;
  const role = String(track.role ?? '').toLowerCase();
  const preferredSide: 1 | 2 = /bass|low|accompan|comp/.test(role) ? 2 : 1;
  const sorted = notes.slice().sort((a, b) => a.time - b.time || a.midi - b.midi);

  // A bisonoric bandoneón is not a collection of independent monophonic
  // switches. A chord is a physical event: its buttons must be playable under
  // one bellows direction. Resolve simultaneous attacks as a phrase-level
  // fingering problem before assigning individual buttons.
  for (let i = 0; i < sorted.length;) {
    const group: PerfNote[] = [sorted[i]];
    let j = i + 1;
    while (j < sorted.length && Math.abs(sorted[j].time - sorted[i].time) <= 0.014) {
      group.push(sorted[j++]);
    }

    const candidatesFor = (n: PerfNote, direction: 1 | 2) => {
      let targetMidi = Math.round(n.midi);
      let candidates = bandoneonCandidates(targetMidi, direction === 1 ? 'open' : 'close');
      if (!candidates.length && !n.exactPitch) {
        const alternatives = [targetMidi - 12, targetMidi + 12]
          .filter(m => m >= 36 && m <= 95 && bandoneonCandidates(m, direction === 1 ? 'open' : 'close').length)
          .sort((a, b) => Math.abs(a - targetMidi) - Math.abs(b - targetMidi));
        if (alternatives.length) {
          targetMidi = alternatives[0];
          candidates = bandoneonCandidates(targetMidi, direction === 1 ? 'open' : 'close');
        }
      }
      return { targetMidi, candidates };
    };

    const openScore = group.reduce((n, note) => n + (candidatesFor(note, 1).candidates.length ? 1 : 0), 0);
    const closeScore = group.reduce((n, note) => n + (candidatesFor(note, 2).candidates.length ? 1 : 0), 0);
    const exactPlayable = (direction: 1 | 2) => group.every(note => !note.exactPitch || candidatesFor(note, direction).candidates.length);
    if (!exactPlayable(1) && !exactPlayable(2)) throw new Error('Written bandoneon chord has no common bellows direction');
    const direction: 1 | 2 = !exactPlayable(1) ? 2 : !exactPlayable(2) ? 1 : openScore === closeScore
      ? previousDirection
      : openScore > closeScore ? 1 : 2;

    for (const n of group) {
      const selected = candidatesFor(n, direction);
      const targetMidi = selected.targetMidi;
      const chosenCandidates = selected.candidates;
      if (chosenCandidates.length && n.midi !== targetMidi) { n.midi = targetMidi; n.frequencyHz = undefined; }
      if (!chosenCandidates.length) continue;
      const chosen = chosenCandidates.slice().sort((a, b) => {
        const aSide = a.side === (preferredSide === 1 ? 'right' : 'left') ? 0 : 1;
        const bSide = b.side === (preferredSide === 1 ? 'right' : 'left') ? 0 : 1;
        const aRepeat = previousButton && a.id === previousButton ? -1 : 0;
        const bRepeat = previousButton && b.id === previousButton ? -1 : 0;
        return aRepeat - bRepeat || aSide - bSide || a.id.localeCompare(b.id);
      })[0];
      if (!chosen) continue;
      previousDirection = direction;
      previousButton = chosen.id;
      n.bellowsDirectionCode = direction;
      n.bandoneonButtonId = chosen.id;
      n.bandoneonButtonIndex = BANDONEON_142_BUTTONS.indexOf(chosen);
      n.bandoneonSideCode = chosen.side === 'right' ? 1 : 2;
    }
    i = j;
  }
}
