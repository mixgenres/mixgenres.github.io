import { beatsPerBarOf } from '../sheet/grid';
import { supportsSolo, soloistAtBar } from '../sheet/solo';
import { GENRE_ID_ALIASES } from '../../data/performance/genreAliases';
import { KIT_COMPONENT_MIDI_ALIASES } from '../../data/instruments/kitComponentAliases';
import { KIT_HIT_INTENT_FALLBACK, KIT_HIT_INTENT_RULES, KIT_HIT_OPEN_PATTERN } from '../../data/performance/kitHitRules';
import { PATTERN_GESTURE_HINT_RULES } from '../../data/performance/patternGestureRules';
import type { GuestLens, Region, MusicalPattern, Role } from '../../types';
import type { Sheet, Voice } from '../sheet/sheet.ts';
import type { InstrumentDef } from '../../data/instruments/schema/instrument-def';
import type { ResolvedStyle } from '../../data/styles/schema';
import { PATTERNS_BY_ID } from '../../data/genres';
import { INSTRUMENTS_BY_ID } from '../../engine/lookup/instruments';
import { getInstrumentPerformanceProfile, resolveGenreProfile, type InstrumentPerformanceProfile } from '../../engine/lookup/performance';
import { getGenreTheory, styleTheoryFor, blendGenreTheory } from '../../engine/lookup/theory';
import { getResolvedSectionStyle } from '../sheet/sheet.ts';
import { parseChord } from '../sheet/musicTheory.ts';
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
import { resolveDialect } from './genreDialect.ts';
import { scoreDurationSeconds, beatValue } from '../score/musicianScore';
import type { NotatedScore } from '../score/notatedScore';
import { contentKey } from '../cache/contentKey';
import { LRUMap, registerCache } from '../cache/lru';
import { interpretRelationships } from './interactions';
import { resolveWrittenTies } from './writtenTies';

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
  const onsets = (p.onsetGrid ?? []).map((position: number, i: number) => ({
    position: (position + Number(p.anticipationOffset ?? 0)) / sub,
    accent: clamp(Number(p.accentProfile?.[i] ?? 0.72)),
    velocity: clamp(Number(p.velocityProfile?.[i] ?? p.accentProfile?.[i] ?? 0.72)),
    duration: Math.max(0.001, Number(p.durationGrid?.[i] ?? 1) / sub * beatsPerBar),
    durationAuthored: Array.isArray(p.durationGrid),
    hit: hitFrom(p, i),
    sourceHit: p.hitGrid?.[i] ?? (p.instruments?.includes('drums') || p.family?.toLowerCase().includes('drum') ? `${p.id} ${p.name}` : undefined),
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

function buildSongPlan(sheet: Sheet, bars: BarTime[]): SongPlan {
  const sections = sheet.regions.map(r => ({ regionId: r.id, genre: r.genre ?? sheet.worldId, start: r.start, end: r.end }));
  const energy = sheet.measures.map(m => clamp((sheet.regions.find(r => r.id === m.regionId)?.energy ?? 3) / 5));
  const tempoMap = bars.map((b, i) => {
    const r = sheet.regions.find(x => x.id === b.regionId)!;
    const style = getResolvedSectionStyle(sheet, styleRegion(r));
    const strict = Boolean(style?.contract?.groove?.name && /strict|quant/i.test(style.contract.groove.name));
    const cycle = Math.max(1, Number(style?.contract?.cycleLength ?? 1));
    const phraseBars = Math.max(cycle, Number(style?.melody?.phraseLengthsBars?.find((x: number) => x % cycle === 0) ?? cycle));
    const phrasePos = i % phraseBars;
    const phraseCurve = strict ? 0 : (phrasePos === 3 ? -0.025 : phrasePos === 0 ? 0.01 : 0);
    return { bar: i, bpm: Math.round(b.bpm * (1 + phraseCurve) * 1000) / 1000, reason: strict ? 'style-strict' : 'phrase-feel' };
  });
  const phraseBoundaries = Array.from(new Set([0, ...sheet.regions.flatMap(r => {
    const xs: number[] = [r.end];
    const style = getResolvedSectionStyle(sheet, styleRegion(r));
    const cycle = Math.max(1, Number(style?.contract?.cycleLength ?? 1));
    const phraseBars = Math.max(cycle, Number(style?.melody?.phraseLengthsBars?.find((x: number) => x % cycle === 0) ?? cycle));
    for (let b = r.start + phraseBars; b < r.end; b += phraseBars) xs.push(b);
    return xs;
  })])).sort((a, b) => a - b);
  return { bars, phraseBoundaries, tempoMap, energy, sections };
}

function resolveLens(sheet: Sheet, region: Region, track: Voice): LensStack {
  const host = region.genre ?? sheet.worldId;
  const explicit: GuestLens | undefined = sheet.partLens?.[region.id]?.[track.id];
  const source = explicit?.genreId ?? host;
  const weight = explicit ? clamp(explicit.weight) : 0;
  const provenance: string[] = [`host:${host}`];
  if (explicit) provenance.push(`part-lens:${source}:${weight.toFixed(3)}`);
  return { hostGenre: host, sourceGenre: source, weight, provenance };
}

function chooseRhythm(sheet: Sheet, region: Region, track: Voice, style?: ResolvedStyle): RhythmIdea {
  const measure = sheet.measures.find(x => x.regionId === region.id && (x.patternByTrack?.[track.id] || x.patternDetailsByTrack?.[track.id]));
  const pid = measure?.patternByTrack?.[track.id] ?? measure?.patternDetailsByTrack?.[track.id]?.patternId;
  if (pid && PATTERNS_BY_ID[pid]) return rhythmIdeaFromPattern(PATTERNS_BY_ID[pid], region.genre ?? sheet.worldId, beatsPerBarOf(sheet.timeSignature));
  const g = region.genre ?? sheet.worldId;
  const role = voiceProfile(track.instrumentId).role;
  const styleText = `${style?.id ?? ''} ${style?.name ?? ''} ${(style?.rhythm?.signatureCell ?? '')} ${(style?.signatureTraits ?? []).join(' ')}`.toLowerCase();
  const candidates = Object.values(PATTERNS_BY_ID).filter(p =>
    p.worldId === g &&
    (!p.roles?.length || p.roles.includes(track.role) || p.roles.includes(role as Role) || p.canCrossRole)
  );
  const theory = getGenreTheory(g);
  const score = (p: MusicalPattern) => {
    const text = `${p.id ?? ''} ${p.name ?? ''} ${p.family ?? ''} ${(p.tags ?? []).join(' ')} ${(p.approaches ?? []).join(' ')} ${(p.authenticityTags ?? []).join(' ')}`.toLowerCase();
    let v = 0;
    if (p.worldId === g) v += 8;
    if (p.styleIds?.some((id: string) => styleText.includes(id.toLowerCase()) || id.toLowerCase().includes(String(style?.id ?? '').toLowerCase()))) v += 7;
    if (p.roles?.includes(track.role) || p.roles?.includes(role)) v += 6;
    for (const sig of theory.rhythm.signature) if (text.includes(sig.toLowerCase().replace(/[^a-z0-9]+/g, ' '))) v += 2;
    for (const tag of [theory.bass.style, theory.rhythm.subdivision + 'ths', ...theory.rhythm.signature]) if (text.includes(String(tag).toLowerCase())) v += 1;
    if (styleText && styleText.split(/\s+/).some((w:string) => w.length > 4 && text.includes(w))) v += 1.5;
    return v;
  };
  const p = candidates.sort((a,b) => score(b) - score(a) || a.id.localeCompare(b.id))[0] ?? Object.values(PATTERNS_BY_ID).sort((a,b)=>a.id.localeCompare(b.id))[0];
  if (!p) throw new Error('No rhythm definitions available');
  return rhythmIdeaFromPattern(p, g, beatsPerBarOf(sheet.timeSignature));
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
  const raw = String(sourceHit ?? '').toLowerCase();
  const rule = KIT_HIT_INTENT_RULES.find(candidate => candidate.pattern.test(raw) || candidate.hits?.includes(hit));
  if (!rule) return KIT_HIT_INTENT_FALLBACK;
  return rule.dynamicOpen && KIT_HIT_OPEN_PATTERN.test(raw) ? 'open' : rule.intent;
}

function kitComponentMidi(def: InstrumentDef, sourceHit: string | undefined, hit: HitFunction, index: number): number {
  const comps = def?.kitComponents ?? [];
  if (!comps.length) return def?.drum?.mid ?? 60;
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
  return comps[index % comps.length].midi;
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

function derivePassingMidi(state: PhraseState, current: number, ctx: PhraseContext): number | undefined {
  if (state.previousMidi === undefined) return undefined;
  if (Math.abs(current - state.previousMidi) < 3) return undefined;
  if (ctx.hybridGrammar.allowDerivedPitch < 0.25) return undefined;
  const direction = current >= state.previousMidi ? 1 : -1;
  const candidate = state.previousMidi + direction * (Math.abs(current - state.previousMidi) >= 7 ? 2 : 1);
  return foldToRange(candidate, voiceProfile(ctx.profile.instrumentId));
}

function effectiveGesture(profile: InstrumentPerformanceProfile, ctx: PhraseContext, onset: RhythmOnset, authored?: string): string {
  const hint = patternGestureHint(ctx.pattern, profile.instrumentId, ctx.regionStyleId);
  return preferredGesture(ctx, onset.hit, authored ?? hint);
}

function grooveTime(
  bt: BarTime,
  onset: RhythmOnset,
  _onsetIndex: number,
  groove: BandPlan['lanes'][string][number]['groove'],
): number {
  const beatSec = 60 / bt.bpm;
  const beat = onset.position * bt.beatsPerBar;
  const anticipation = (Number(onset.anticipationOffsetSteps ?? 0) + Number(groove.anticipationOffsetSteps ?? 0)) * (beatSec * bt.beatsPerBar / 16);
  const unit = groove.swingUnit === 16 ? 0.25 : 0.5;
  const swingPosition = beat / unit;
  const swingDelta = Math.abs(swingPosition - Math.round(swingPosition)) < 0.001 && Math.round(swingPosition) % 2 === 1
    ? (groove.swing - 0.5) * beatSec * unit * 2 : 0;
  const authoredMicro = onset.microtiming ?? 0;
  const microSec = Math.abs(authoredMicro) > 0.5 ? authoredMicro / 1000 : authoredMicro * beatSec / Math.max(1, groove.subdivision);
  return bt.start + beat * beatSec + groove.offsetMs / 1000 + anticipation + swingDelta + microSec;
}


function applyPhraseBandInteraction(
  notes: PerfNote[],
  sheet: Sheet,
  region: Region,
  style: ResolvedStyle,
): void {
  const model = style?.contract?.interactionModel ?? 'interlock';
  const theory = styleTheoryFor(style?.id, region.genre ?? sheet.worldId);
  const roles = new Map((sheet.tracks as Voice[]).map(t => [t.id, String(sheet.partRoles?.[region.id]?.[t.id] ?? t.role ?? 'harmony').toLowerCase()]));
  const regionNotes = notes.filter(n => n.bar >= region.start && n.bar < region.end);
  if (!regionNotes.length) return;

  const cycle = Math.max(1, Number(style?.contract?.cycleLength ?? 1));
  const phraseBars = Math.max(cycle, Number(style?.melody?.phraseLengthsBars?.find((x: number) => x % cycle === 0) ?? cycle));
  for (let phraseStart = region.start; phraseStart < region.end; phraseStart += phraseBars) {
    const phraseEnd = Math.min(region.end, phraseStart + phraseBars);
    const phrase = regionNotes.filter(n => n.bar >= phraseStart && n.bar < phraseEnd);
    if (!phrase.length) continue;
    const leads = phrase.filter(n => /lead|melody|voice/.test(roles.get(n.trackId) ?? ''));
    const pulse = phrase.filter(n => /bass|percussion|drum|pulse/.test(roles.get(n.trackId) ?? ''));
    const harmony = phrase.filter(n => /harmony|comp|piano|guitar|keyboard/.test(roles.get(n.trackId) ?? ''));
    const near = (a: PerfNote, b: PerfNote) => a.trackId !== b.trackId && Math.abs(a.time - b.time) <= 0.030;

    for (const n of phrase) {
      const role = roles.get(n.trackId) ?? 'harmony';
      const mixKey = /lead|melody|voice/.test(role) ? 'lead' : /bass/.test(role) ? 'bass' : /perc|drum/.test(role) ? 'percussion' : /pad/.test(role) ? 'pad' : /comp|harmony|piano|guitar/.test(role) ? 'harmony' : role;
      const feature = theory.mixFocus[mixKey] ?? theory.mixFocus.melody ?? .5;
      const featureGain = 0.93 + Math.max(0, Math.min(1, feature)) * 0.14;
      const leadOverlap = leads.some(x => near(n, x));
      const pulseOverlap = pulse.some(x => near(n, x));
      const harmonyOverlap = harmony.some(x => near(n, x));

      n.vel = Math.max(1, Math.min(127, Math.round(n.vel * featureGain)));
      if (model === 'homophonic') {
        if (/harmony|comp|keyboard|guitar/.test(role) && leadOverlap) {
          n.vel = Math.max(1, Math.round(n.vel * 0.90));
        }
        if (/lead|melody|voice/.test(role) && harmonyOverlap) n.vel = Math.min(127, Math.round(n.vel * 1.025));
      } else if (model === 'interlock') {
        if (/harmony|comp|piano|guitar/.test(role) && pulseOverlap) {
          n.vel = Math.max(1, Math.round(n.vel * 0.92));
        }
        if (/bass|percussion|drum|pulse/.test(role) && harmonyOverlap) n.vel = Math.min(127, Math.round(n.vel * 1.025));
        if (/lead|melody|voice/.test(role) && pulseOverlap) n.vel = Math.min(127, Math.round(n.vel * 1.035));
      } else if (model === 'unison') {
        const companions = phrase.filter(x => near(n, x));
        if (companions.length) n.vel = Math.min(127, Math.round(n.vel * 1.03));
      } else if (model === 'counterpoint') {
        if (/lead|melody|voice/.test(role) && pulseOverlap) {
          n.vel = Math.min(127, Math.round(n.vel * 1.02));
        }
        if (/bass/.test(role) && leadOverlap) n.vel = Math.min(127, Math.round(n.vel * 1.015));
      }

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
      const lens = resolveLens(sheet, region, track);
      const role = track.role ?? voiceProfile(track.instrumentId).role;
      const host = resolveGenreProfile(track.instrumentId, lens.hostGenre);
      const source = resolveGenreProfile(track.instrumentId, lens.sourceGenre);
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
          swing: (preliminaryStyle.rhythm.swingPercentage / 100) * (1 - lens.weight) + source.timing.swing * lens.weight,
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
      const dialect = resolveDialect(track.instrumentId, region.genre ?? sheet.worldId, regionStyle.id, track.role, decision.sectionEnergy);
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
      const preferredPhraseBars = authoredPhraseBars ?? regionStyle?.melody?.phraseLengthsBars?.find((x: number) => x % cycle === 0) ?? cycle;
      const phraseBars = Math.max(cycle, Math.ceil(Number(preferredPhraseBars) / cycle) * cycle);
      for (let phraseStart = region.start, phraseIndex = 0; phraseStart < region.end; phraseStart += phraseBars, phraseIndex++) {
        const phraseEnd = Math.min(region.end, phraseStart + phraseBars);
        const phraseId = `${track.id}:${region.id}:${phraseIndex}`;
        const soundContext = { worldId: region.genre ?? sheet.worldId, styleId: regionStyle.id, role: track.role };
        const phrase: PerformancePhrase = {
          id: phraseId, trackId: track.id, regionId: region.id, startBar: phraseStart, endBar: phraseEnd,
          start: bars[phraseStart]?.start ?? 0, end: bars[phraseEnd - 1]?.end ?? 0, soundContext,
        };
        phrases.push(phrase);
        const state = createPhraseState(phraseIndex);
        const phraseNotes: PerfNote[] = [];
        for (let bar = phraseStart; bar < phraseEnd; bar++) {
          const currentSoloists = soloPlan ? soloistAtBar(soloPlan, region, bar, cycle) : [];
          const soloist = currentSoloists.includes(track.id);
          if (soloPlan && !supportsSolo(soloPlan, track, currentSoloists)) continue;
          if (soloPlan?.mode === 'trading' && soloCandidates.includes(track.id) && !soloist) continue;
          const bt = bars[bar];
          const measure = sheet.measures[bar];
          if (!bt || !measure) continue;
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
              hit: attack.hit, sourceHit: attack.sourceHit, microtiming: attack.microtiming.value, sourceGenre: lane.rhythm.sourceGenre,
            })) };
          if (!rhythm.onsets.length) continue;
          const chord = measure.chord || 'C';
          const nextChord = sheet.measures[bar + 1]?.chord;
          const energy = activityFor(regionStyle.contract, decision.sectionEnergy);
          const phrasePosition = ((bar - phraseStart) + 0.5) / Math.max(1, phraseEnd - phraseStart);
          const phraseStage = soloGrammar?.phraseStages?.length
            ? soloGrammar.phraseStages[phraseIndex % soloGrammar.phraseStages.length]
            : undefined;
          const grammarBundle = buildHybridGrammar(regionStyle.id, lane.lens.sourceGenre, regionStyle, lane.lens.weight);
          const sharedHostProfile = resolveGenreProfile(track.instrumentId, lane.lens.hostGenre);
          const sharedSourceProfile = resolveGenreProfile(track.instrumentId, lane.lens.sourceGenre);
          const hostTheory = styleTheoryFor(regionStyle.id, lane.lens.hostGenre);
          const sourceTheory = getGenreTheory(lane.lens.sourceGenre);
          const hybridTheory = blendGenreTheory(hostTheory, sourceTheory, lane.lens.weight);
          const barNotes: PerfNote[] = [];

          for (let i = 0; i < rhythm.onsets.length; i++) {
            const onset = rhythm.onsets[i];
            if (!onset.pitch && soloist && phraseStage === 'rest' && phrasePosition >= 0.38 && phrasePosition <= 0.62) continue;
          const ctx: PhraseContext = {
              sheetWorldId: sheet.worldId,
              hostGenre: lane.lens.hostGenre,
              sourceGenre: lane.lens.sourceGenre,
              regionStyleId: regionStyle.id,
              role: track.role,
              profile,
              hostProfile: sharedHostProfile,
              sourceProfile: sharedSourceProfile,
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
            const authoredGesture = detail?.articulations?.length ? detail.articulations[i % detail.articulations.length] : detail?.articulation;
            const authoredHint = authoredGesture ?? patternGestureHint(ctx.pattern, profile.instrumentId, regionStyle.id);
            const dialectTechnique = dialect?.defaultTechnique;
            let gestureName = !authoredHint && dialectTechnique && profile.gestures[dialectTechnique]
              ? dialectTechnique
              : effectiveGesture(profile, ctx, onset, authoredGesture);
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
            const developmentAccentScale = development === 'cadence' ? 1.08 : development === 'answer' ? 0.92 : development === 'fill' ? 1.04 : development === 'rest' ? 0.82 : development === 'variation' ? 0.97 : 1;

            const kitMidis = onset.percussion ? [onset.percussion.midi] : baseMidiForPattern(INSTRUMENTS_BY_ID[track.instrumentId], onset, i);
            const midis = onset.pitch?.midi !== undefined || !kitMidis.length ? realizeMidi(ctx, i, rhythm.onsets.length, state) : kitMidis;
            const gestureCode = codeForGesture(gestureName);
            const hitFunctionCode = Math.max(0, HIT_FUNCTIONS.indexOf(onset.hit));
            const accent = clamp(onset.accent * (0.72 + energy * 0.34) * developmentAccentScale);
            // Give section energy a real dynamic span while retaining accent contrast.
            // Energy 1 lives roughly in the quiet/mid range; energy 5 can reach the
            // normal forte ceiling without forcing every note above 100.
            const brightnessLift = 0.88 + Math.max(0, Math.min(127, decision.brightness)) / 127 * 0.24;
            const vel = Math.max(1, Math.min(127, Math.round(velocityForEnergy(energy, onset.velocity, sharedHostProfile.density.accentContrast) * decision.drive * brightnessLift)));
            const time = Math.max(0, grooveTime(bt, onset, i, lane.groove));
            const pv = voiceProfile(track.instrumentId);
            const nextPosition = rhythm.onsets[i + 1]?.position ?? (onset.position + onset.duration / bt.beatsPerBar);
            const localGapBeats = Math.max(0.08, (nextPosition - onset.position) * bt.beatsPerBar);
            const authoredIsDefaultStep = onset.durationAuthored !== true;
            const sustainEligible = pv.sustain === 'sustained' || pv.sustain === 'blown' || pv.sustain === 'decaying';
            const authoredBeats = Math.max(onset.durationAuthored ? 0.000001 : 0.04, sustainEligible && authoredIsDefaultStep ? localGapBeats : onset.duration);
            const gapBeats = Math.max(localGapBeats, onset.hit === 'sustain' ? 1.0 : 0.18);
            const durBeats = noteLengthBeats(pv, authoredBeats, Math.max(gapBeats, onset.durationAuthored ? authoredBeats : 0) * (onset.hit === 'sustain' ? 3.5 : 1.7), gestureName);
            const writtenDuration = onset.durationAuthored ? authoredBeats : durBeats;
            const dur = Math.max(onset.durationAuthored ? 0.000001 : 0.028,
              scoreDurationSeconds({ bars }, bar, onset.position * bt.beatsPerBar, writtenDuration)
              * (onset.durationAuthored ? 1 : 0.82 + ctx.hostProfile.phrase.sustain * 0.32));
            const tuning = resolveTuningSystem(regionStyle.harmony?.tuningSystem ?? '12-tet');

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
                midi,
                frequencyHz: tuning.getFrequencyHz(midi, parseChord(chord).rootPc ?? 0),
                vel: Math.max(1, Math.min(127, vel - (stagger ? mi * 4 : 0))),
                trackId: track.id,
                bar,
                gestureCode,
                hitFunctionCode,
                accent: Math.round(accent * 1000) / 1000,
                originCode: 0,
                authoredTechnique: Boolean(authoredGesture && profile.gestures[authoredGesture]),
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
                    dur: Math.min(0.16, gap * 0.42),
                    midi: passing,
                    frequencyHz: tuning.getFrequencyHz(passing, parseChord(chord).rootPc ?? 0),
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
    note.frequencyHz = resolveTuningSystem(style.harmony?.tuningSystem ?? '12-tet')
      .getFrequencyHz(note.midi, parseChord(sheet.measures[note.bar]?.chord || 'C').rootPc) * 2 ** ((note.tuningCents ?? 0) / 1200);
  }
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
