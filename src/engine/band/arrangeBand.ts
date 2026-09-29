import type { GuestLens, Measure, Region, MusicalPattern, Role } from '../../types';
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
import { buildBarTimes, type BarTime, type Performance, type PerfNote, type PerfCC } from '../band/performanceData.ts';
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
import { bandoneonCandidates, bandoneonPlayable, BANDONEON_142_BUTTONS } from '../../engine/band/fingering/bandoneon';
import { findKitComponent, type RhythmicIntent } from './rhythmicIntent.ts';
import { optimizePerformanceByPhraseAndSong } from './songPhrasing.ts';

export { GESTURE_NAMES, GESTURE_CODES };

export type HitFunction =
  | 'downbeat' | 'tone' | 'open' | 'slap' | 'muffled' | 'ghost'
  | 'bass-tone' | 'edge' | 'offbeat-chop' | 'sustain' | 'fill' | 'punctuation';

export const HIT_FUNCTIONS: HitFunction[] = [
  'downbeat', 'tone', 'open', 'slap', 'muffled', 'ghost', 'bass-tone',
  'edge', 'offbeat-chop', 'sustain', 'fill', 'punctuation'
];

export interface RhythmOnset {
  position: number;
  accent: number;
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
    groove: { offsetMs: number; swing: number; subdivision: number };
    ownership: 'foreground' | 'background' | 'pulse' | 'answer' | 'tacet';
  }[]>;
}

function clamp(v: number, a = 0, b = 1): number { return Math.max(a, Math.min(b, v)); }

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
  if (pos % sub > sub * 0.7) return 'offbeat-chop';
  return 'tone';
}

function rhythmIdeaFromPattern(p: MusicalPattern, sourceGenre: string): RhythmIdea {
  const sub = Math.max(1, p.subdivisions ?? 16);
  const onsets = (p.onsetGrid ?? []).map((position: number, i: number) => ({
    position: position / sub,
    accent: clamp(Number(p.accentProfile?.[i] ?? 0.72)),
    duration: clamp(Number(p.durationGrid?.[i] ?? 1) / sub * 4, 0.05, 2),
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

interface PatternPerformanceDetails {
  stepsPerBar?: number;
  onsets?: number[];
  accents?: number[];
  durations?: number[];
  hitTypes?: string[];
  microtiming?: number[];
  durationsAuthored?: boolean;
}

type RuntimePatternDetails = NonNullable<Measure['patternDetailsByTrack']>[string] & {
  perf?: PatternPerformanceDetails;
};

function isPatternPerformanceDetails(value: unknown): value is PatternPerformanceDetails {
  return typeof value === 'object' && value !== null;
}

function rhythmIdeaFromMeasure(detail: NonNullable<Measure['patternDetailsByTrack']>[string] | undefined, fallback: RhythmIdea): RhythmIdea {
  if (!detail) return fallback;
  const p = PATTERNS_BY_ID[detail.patternId] ?? fallback.pattern;
  const runtimeDetail = detail as RuntimePatternDetails;
  const perf = isPatternPerformanceDetails(runtimeDetail.perf) ? runtimeDetail.perf : undefined;
  const steps = Math.max(1, Number(perf?.stepsPerBar ?? p.subdivisions ?? fallback.subdivisions));
  const nativeOnsets = Array.isArray(perf?.onsets) ? perf.onsets : [];
  const nativeAccents = Array.isArray(perf?.accents) ? perf.accents : [];
  const nativeDurations = Array.isArray(perf?.durations) ? perf.durations : [];
  const nativeHitTypes = Array.isArray(perf?.hitTypes) ? perf.hitTypes : [];
  const nativeSteps = Math.max(1, Number(perf?.stepsPerBar ?? p.subdivisions ?? fallback.subdivisions));
  const onsets = nativeOnsets.map((position: number, i: number) => ({
    position: position / nativeSteps,
    accent: clamp(Number(nativeAccents[i] ?? detail.accentProfile?.[i] ?? 0.72)),
    duration: clamp(Number(nativeDurations[i] ?? detail.durationGrid?.[i] ?? 1) / nativeSteps * 4, 0.05, 2),
    durationAuthored: Boolean(perf?.durationsAuthored) || Array.isArray(detail.durationGrid),
    hit: hitFrom(p, i, nativeHitTypes[i] ?? detail.hitTypes?.[i]),
    sourceHit: nativeHitTypes[i] || detail.hitTypes?.[i] || p.hitGrid?.[i] || (p.instruments?.includes('drums') || p.family?.toLowerCase().includes('drum') ? `${p.id} ${p.name}` : undefined),
    microtiming: Number(perf?.microtiming?.[i] ?? 0),
    sourceGenre: p.worldId ?? fallback.sourceGenre,
  }));
  return {
    ...fallback,
    id: p.id,
    name: p.name,
    sourceGenre: p.worldId ?? fallback.sourceGenre,
    sourceInstrumentFamily: (p.family ?? fallback.sourceInstrumentFamily) as string,
    meter: p.meter,
    subdivisions: steps,
    cycleLength: 1,
    onsets,
    roleTendencies: p.roles ?? fallback.roleTendencies,
    pattern: p,
  };
}

function styleRegion(region: Region): Region {
  return region.genre === 'milonga' ? { ...region, genre: 'tango', styleId: region.styleId } : region;
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

function ownership(track: Voice, role: string, energy: number): BandPlan['lanes'][string][number]['ownership'] {
  if (track.muted) return 'tacet';
  if (role === 'bass' || role === 'percussion' || role === 'pulse') return 'pulse';
  if (role === 'lead' || role === 'melody' || role === 'voice') return energy > 0.65 ? 'foreground' : 'answer';
  return energy > 0.8 ? 'background' : 'answer';
}

function chooseRhythm(sheet: Sheet, region: Region, track: Voice, style?: ResolvedStyle): RhythmIdea {
  const measure = sheet.measures.find(x => x.regionId === region.id && (x.patternByTrack?.[track.id] || x.patternDetailsByTrack?.[track.id]));
  const pid = measure?.patternByTrack?.[track.id] ?? measure?.patternDetailsByTrack?.[track.id]?.patternId;
  if (pid && PATTERNS_BY_ID[pid]) return rhythmIdeaFromPattern(PATTERNS_BY_ID[pid], region.genre ?? sheet.worldId);
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
  return rhythmIdeaFromPattern(p, g);
}

function patternGestureHint(pattern: MusicalPattern, instrumentId: string, styleId: string | undefined): string | undefined {
  const text = `${pattern?.id ?? ''} ${pattern?.name ?? ''} ${pattern?.family ?? ''} ${(pattern?.tags ?? []).join(' ')} ${(pattern?.approaches ?? []).join(' ')} ${styleId ?? ''}`.toLowerCase();
  const exists = (x: string) => Boolean(getInstrumentPerformanceProfile(instrumentId).gestures[x]);
  if (/milonga/.test(text)) {
    for (const g of ['staccato', 'marcato', 'accent', 'pizzicato']) if (exists(g)) return g;
  }
  if (/marcato|yumba/.test(text)) {
    for (const g of ['marcato', 'accent', 'staccato', 'chapa', 'cluster']) if (exists(g)) return g;
  }
  if (/sincopa|syncop|anticipat/.test(text)) {
    for (const g of ['staccato', 'marcato', 'accent', 'pizzicato', 'fingerstyle']) if (exists(g)) return g;
  }
  if (/bordoneo/.test(text)) {
    for (const g of ['pizzicato', 'fingerstyle', 'staccato', 'accent', 'legato']) if (exists(g)) return g;
  }
  if (/tumbao/.test(text)) {
    for (const g of ['open', 'heel', 'toe', 'slap', 'pizzicato', 'staccato']) if (exists(g)) return g;
  }
  if (/fingerstyle|flatpick|bluegrass/.test(text)) {
    for (const g of ['fingerstyle', 'flatpick', 'accent', 'staccato']) if (exists(g)) return g;
  }
  return undefined;
}

function rhythmicIntentForKit(sourceHit: string | undefined, hit: HitFunction): RhythmicIntent {
  const raw = String(sourceHit ?? '').toLowerCase();
  if (/kick|bass-drum|bombo|grave/.test(raw) || hit === 'downbeat' || hit === 'bass-tone') return 'low';
  if (/ride.*bell|bell/.test(raw)) return 'bell';
  if (/crash/.test(raw)) return 'accent';
  if (/ride|hat|hihat|hi-hat|cymbal/.test(raw)) return /open/.test(raw) ? 'open' : 'offbeat';
  if (/rim|side-stick|cross-stick|cascara|edge/.test(raw) || hit === 'edge') return 'rim';
  if (/ghost|heel|toe|tip|brush/.test(raw) || hit === 'ghost') return 'ghost';
  if (/slap|rimshot|quinto/.test(raw) || hit === 'slap') return 'slap';
  if (/mute|tapao|dead|chapa|closed|pedal/.test(raw) || hit === 'muffled') return 'mute';
  if (/open|tone|tumba/.test(raw) || hit === 'open') return 'open';
  if (/fill|roll/.test(raw) || hit === 'fill') return 'roll';
  return 'backbeat';
}

function kitComponentMidi(def: InstrumentDef, sourceHit: string | undefined, hit: HitFunction, index: number): number {
  const comps = def?.kitComponents ?? [];
  if (!comps.length) return def?.drum?.mid ?? 60;
  const raw = String(sourceHit ?? '').trim().toLowerCase();
  const exactAliases: Array<[RegExp, string[]]> = [
    [/kick|bass.?drum|\bbd\b|bombo|grave/, ['kick']],
    [/snare|\bsd\b|backbeat/, ['snare-center', 'snare']],
    [/rimshot/, ['snare-rimshot']],
    [/cross.?stick|side.?stick|rim.?click/, ['snare-cross-stick']],
    [/ghost/, ['snare-ghost', 'snare-center']],
    [/closed.?hat|\bhat\b|hi.?hat.*closed|hihat.*closed/, ['hihat-closed']],
    [/open.?hat|hi.?hat.*open|hihat.*open/, ['hihat-open']],
    [/pedal.?hat|hat.?pedal|foot.?chick/, ['hihat-pedal']],
    [/high.?tom|tom.?high|high.?tom/, ['tom-high']],
    [/mid.?tom|tom.?mid/, ['tom-mid']],
    [/low.?tom|floor.?tom|tom.?low/, ['tom-low']],
    [/crash/, ['crash-1']],
    [/ride.?bell|bell/, ['ride-bell']],
    [/ride/, ['ride-bow']],
  ];
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
  onsetIndex: number,
  groove: BandPlan['lanes'][string][number]['groove'],
): number {
  const beatSec = 60 / Math.max(20, bt.bpm);
  const beat = onset.position * bt.beatsPerBar;
  const swingDelta = onsetIndex % 2 === 1 ? (groove.swing - 0.5) * beatSec * 0.5 : 0;
  const authoredMicro = onset.microtiming ?? 0;
  const microSec = Math.abs(authoredMicro) > 0.5 ? authoredMicro / 1000 : authoredMicro * beatSec / Math.max(1, groove.subdivision);
  return bt.start + beat * beatSec + groove.offsetMs / 1000 + swingDelta + microSec;
}


function applyPhraseBandInteraction(
  notes: PerfNote[],
  sheet: Sheet,
  region: Region,
  style: ResolvedStyle,
): void {
  const model = style?.contract?.interactionModel ?? 'interlock';
  const theory = styleTheoryFor(style?.id, region.genre ?? sheet.worldId);
  const roles = new Map((sheet.tracks as Voice[]).map(t => [t.id, String(t.role ?? 'harmony').toLowerCase()]));
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
        if (/lead|melody|voice/.test(role)) n.dur *= 1.04;
        if (/bass|percussion|drum/.test(role)) n.vel = Math.min(127, Math.round(n.vel * 1.025));
      }
      n.vel = Math.max(1, Math.min(127, n.vel));
      n.dur = Math.max(0.018, n.dur);
    }
  }
}

export function arrangeBand(sheet: Sheet, _seed = 0): Performance {
  const bars = buildBarTimes(sheet);
  const song = buildSongPlan(sheet, bars);
  const lanes: BandPlan['lanes'] = {};

  for (const region of sheet.regions) {
    for (const track of sheet.tracks as Voice[]) {
      if (track.muted) continue;
      const preliminaryStyle = getResolvedSectionStyle(sheet, styleRegion(region));
      const rhythm = chooseRhythm(sheet, region, track, preliminaryStyle);
      const lens = resolveLens(sheet, region, track);
      const role = voiceProfile(track.instrumentId).role;
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
          swing: host.timing.swing * (1 - lens.weight) + source.timing.swing * lens.weight,
          subdivision: rhythm.subdivisions,
        },
        ownership: ownership(track, role, song.energy[region.start] ?? 0.6),
      });
    }
  }

  const band = { song, lanes } satisfies BandPlan;
  const notes: PerfNote[] = [];
  const ccs: PerfCC[] = [];

  for (const region of sheet.regions) {
    const regionStyle = getResolvedSectionStyle(sheet, styleRegion(region));
    for (const track of sheet.tracks as Voice[]) {
      const lane = band.lanes[region.id]?.find(x => x.trackId === track.id);
      if (!lane) continue;
      const profile = getInstrumentPerformanceProfile(track.instrumentId);
      const cycle = Math.max(1, Number(regionStyle?.contract?.cycleLength ?? 1));
      const phraseBars = Math.max(cycle, Number(regionStyle?.melody?.phraseLengthsBars?.find((x: number) => x % cycle === 0) ?? cycle));
      for (let phraseStart = region.start, phraseIndex = 0; phraseStart < region.end; phraseStart += phraseBars, phraseIndex++) {
        const phraseEnd = Math.min(region.end, phraseStart + phraseBars);
        const state = createPhraseState(phraseIndex);
        const phraseNotes: PerfNote[] = [];
        for (let bar = phraseStart; bar < phraseEnd; bar++) {
          const bt = bars[bar];
          const measure = sheet.measures[bar];
          if (!bt || !measure) continue;
          const detail = measure.patternDetailsByTrack?.[track.id];
          const rhythm = rhythmIdeaFromMeasure(detail, lane.rhythm);
          if (!rhythm.onsets.length) continue;
          const chord = measure.chord || 'C';
          const nextChord = sheet.measures[bar + 1]?.chord;
          const energy = song.energy[bar] ?? 0.6;
          const phrasePosition = ((bar - phraseStart) + 0.5) / Math.max(1, phraseEnd - phraseStart);
          const grammarBundle = buildHybridGrammar(regionStyle.id, lane.lens.sourceGenre, regionStyle, lane.lens.weight);
          const sharedHostProfile = resolveGenreProfile(track.instrumentId, lane.lens.hostGenre);
          const sharedSourceProfile = resolveGenreProfile(track.instrumentId, lane.lens.sourceGenre);
          const hostTheory = styleTheoryFor(regionStyle.id, lane.lens.hostGenre);
          const sourceTheory = getGenreTheory(lane.lens.sourceGenre);
          const hybridTheory = blendGenreTheory(hostTheory, sourceTheory, lane.lens.weight);
          const barNotes: PerfNote[] = [];

          for (let i = 0; i < rhythm.onsets.length; i++) {
            const onset = rhythm.onsets[i];
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
              hit: onset.hit,
              chord,
              nextChord,
              energy,
              bassStyle: hybridTheory.bass.style,
              hostTheory,
              sourceTheory,
              hybridTheory,
            };
            const authoredGesture = detail?.articulations?.length ? detail.articulations[i % detail.articulations.length] : detail?.articulation;
            const gestureName = effectiveGesture(profile, ctx, onset, authoredGesture);
            ctx.gesture = gestureName;
            const authoredVariation = String(detail?.variationType ?? '').toLowerCase();
            const development = authoredVariation.includes('cadence') ? 'cadence'
              : authoredVariation.includes('transition') ? 'variation'
              : shouldDevelopPhrase(ctx);
            const developmentAccentScale = development === 'cadence' ? 1.08 : development === 'answer' ? 0.92 : development === 'fill' ? 1.04 : development === 'rest' ? 0.82 : development === 'variation' ? 0.97 : 1;

            const kitMidis = baseMidiForPattern(INSTRUMENTS_BY_ID[track.instrumentId], onset, i);
            const midis = kitMidis.length ? kitMidis : realizeMidi(ctx, i, rhythm.onsets.length, state);
            const gestureCode = codeForGesture(gestureName);
            const hitFunctionCode = Math.max(0, HIT_FUNCTIONS.indexOf(onset.hit));
            const accent = clamp(onset.accent * (0.72 + energy * 0.34) * developmentAccentScale);
            // Give section energy a real dynamic span while retaining accent contrast.
            // Energy 1 lives roughly in the quiet/mid range; energy 5 can reach the
            // normal forte ceiling without forcing every note above 100.
            const energyFloor = 0.28 + (energy - 1) * 0.105;
            const energyCeiling = 0.52 + (energy - 1) * 0.115;
            const velNorm = clamp(energyFloor + accent * (energyCeiling - energyFloor) * sharedHostProfile.density.accentContrast, 0.18, 0.94);
            const vel = Math.round(velNorm * 127);
            const time = Math.max(0, grooveTime(bt, onset, i, lane.groove));
            const pv = voiceProfile(track.instrumentId);
            const nextPosition = rhythm.onsets[i + 1]?.position ?? (onset.position + Math.max(onset.duration, 1 / Math.max(1, rhythm.subdivisions)));
            const localGapBeats = Math.max(0.08, (nextPosition - onset.position) * bt.beatsPerBar);
            const defaultStepBeats = bt.beatsPerBar / Math.max(1, rhythm.subdivisions);
            const authoredIsDefaultStep = onset.durationAuthored !== true || Math.abs(onset.duration - defaultStepBeats) < 0.0001;
            const sustainEligible = pv.sustain === 'sustained' || pv.sustain === 'blown' || pv.sustain === 'decaying';
            const authoredBeats = Math.max(0.04, sustainEligible && authoredIsDefaultStep ? localGapBeats : onset.duration);
            const gapBeats = Math.max(localGapBeats, onset.hit === 'sustain' ? 1.0 : 0.18);
            const durBeats = noteLengthBeats(pv, authoredBeats, gapBeats * (onset.hit === 'sustain' ? 3.5 : 1.7), gestureName);
            const dur = Math.max(0.028, durBeats * (60 / Math.max(20, bt.bpm)) * (0.82 + ctx.hostProfile.phrase.sustain * 0.32));
            const tuning = resolveTuningSystem(regionStyle.harmony?.tuningSystem ?? '12-tet');

            for (let mi = 0; mi < midis.length; mi++) {
              const midi = midis[mi];
              // Banjo harmony is voiced as a chord for harmonic access, but its
              // attack is a roll rather than a piano-style block chord. Stagger
              // the picked strings inside a few milliseconds while keeping the
              // underlying chord tones intact.
              const banjoRoll = track.instrumentId === 'banjo' && midis.length > 1;
              const stagger = (banjoRoll || (/fingerstyle|arpegg/.test(gestureName.toLowerCase()) && midis.length > 1))
                ? mi * (banjoRoll ? 0.011 : 0.014)
                : 0;
              const note: PerfNote = {
                time: Math.max(0, time + stagger),
                dur: Math.max(0.028, dur - stagger * 0.35),
                midi,
                frequencyHz: tuning.getFrequencyHz(midi, parseChord(chord).rootPc ?? 0),
                vel: Math.max(1, Math.min(127, vel - (stagger ? mi * 4 : 0))),
                trackId: track.id,
                bar,
                gestureCode,
                hitFunctionCode,
                accent: Math.round(accent * 1000) / 1000,
                originCode: 0,
              };
              barNotes.push(note);
            }

            // Phrase-level bass development: when the style calls for walking
            // motion, fill the larger spaces between authored attacks with a
            // theory-derived passing tone aimed at the next played degree.
            if (state.previousMidi !== undefined && state.previousTime !== undefined &&
                (profile.capabilities.polyphony <= 1 || voiceProfile(track.instrumentId).role === 'bass') && grammarBundle.hybrid.allowDerivedAttacks > 0.28 &&
                grammarBundle.hybrid.allowDerivedPitch > 0.2 && /bass/.test(String(ctx.role)) &&
                grammarBundle.hybrid.subdivisionVocabulary?.bass?.includes(2)) {
              const current = midis[0];
              const gap = time - state.previousTime;
              if (gap > (60 / Math.max(20, bt.bpm)) * 0.72 && gap < (60 / Math.max(20, bt.bpm)) * 1.8) {
                const passing = derivePassingMidi(state, current, ctx);
                if (passing !== undefined && passing !== state.previousMidi && passing !== current) {
                  const passTime = state.previousTime + gap * 0.5;
                  const passVel = Math.max(18, Math.round(vel * 0.68));
                  barNotes.push({
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
          if (barNotes.length) {
            const last = barNotes[barNotes.length - 1];
            const resonance = profile.capabilities.sustained ? 1.18 : profile.capabilities.continuous ? 1.06 : 1.0;
            last.dur = Math.min(last.dur * resonance, Math.max(last.dur, (bt.end - last.time) * (0.52 + profile.genreProfiles[lane.lens.hostGenre].phrase.sustain * 0.35)));
          }

          phraseNotes.push(...barNotes);
        }
        notes.push(...phraseNotes);
      }
    }
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
      n.midi = foldToRange(n.midi, voiceProfile(track.instrumentId));
      if (kept.length) {
        const prev = kept[kept.length - 1];
        const minGap = p.capabilities.polyphony <= 1 ? 0.004 : 0.001;
        if (n.time < prev.time + minGap && p.capabilities.polyphony <= 1) {
          if (n.vel <= prev.vel) continue;
          prev.dur = Math.max(0.008, n.time - prev.time - minGap);
        }
      }
      const active = kept.filter(x => x.time <= n.time && x.time + x.dur > n.time);
      if (active.length >= p.capabilities.polyphony) continue;
      kept.push(n);
    }
    resolved.push(...kept);
  }

  for (const track of sheet.tracks as Voice[]) {
    const p = getInstrumentPerformanceProfile(track.instrumentId);
    if (p.family !== 'bellows') continue;
    const trackNotes = resolved.filter(x => x.trackId === track.id).sort((a, b) => a.time - b.time);

    if (track.instrumentId === 'bandoneon') {
      resolveBandoneonPhysicalFingering(track, trackNotes);
      continue;
    }

    let reservoir = 0.5;
    let dir: 1 | 2 = 1;
    for (const n of trackNotes) {
      const need = 0.08 + n.accent * 0.18;
      if (reservoir < need || (n.gestureCode === GESTURE_CODES['accent'] && reservoir > 0.35)) {
        dir = dir === 1 ? 2 : 1;
        reservoir = 0.65;
      }
      reservoir = clamp(reservoir - need, 0.05, 0.95);
      n.bellowsDirectionCode = dir;
    }
  }

  resolved.sort((a, b) => a.time - b.time || a.trackId.localeCompare(b.trackId) || a.midi - b.midi);
  const duration = bars[bars.length - 1]?.end ?? 0;
  const basePerformance: Performance = {
    notes: resolved,
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
  return optimizePerformanceByPhraseAndSong(sheet, basePerformance).performance;
}

/** Compatibility alias for existing callers. New orchestration should say arrangeBand. */
export const compileWholeSong = arrangeBand;


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
      if (!candidates.length) {
        const alternatives = [targetMidi - 12, targetMidi + 12]
          .filter(m => m >= 36 && m <= 95 && bandoneonPlayable(m))
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
    const direction: 1 | 2 = openScore === closeScore
      ? previousDirection
      : openScore > closeScore ? 1 : 2;

    for (const n of group) {
      let targetMidi = Math.round(n.midi);
      let chosenCandidates = candidatesFor(n, direction).candidates;
      if (!chosenCandidates.length) {
        const other: 1 | 2 = direction === 1 ? 2 : 1;
        chosenCandidates = candidatesFor(n, other).candidates;
        if (!chosenCandidates.length) {
          const octaveAlternatives = [targetMidi - 12, targetMidi + 12]
            .filter(m => m >= 36 && m <= 95 && bandoneonPlayable(m))
            .sort((a, b) => Math.abs(a - targetMidi) - Math.abs(b - targetMidi));
          if (octaveAlternatives.length) {
            targetMidi = octaveAlternatives[0];
            n.midi = targetMidi;
            n.frequencyHz = undefined;
            chosenCandidates = bandoneonCandidates(targetMidi, direction === 1 ? 'open' : 'close');
          }
        }
      }
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
