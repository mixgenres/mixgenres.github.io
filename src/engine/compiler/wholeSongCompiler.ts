import type { GuestLens, Measure, Region } from '../../types';
import type { Sheet, Voice } from '../generators/arrange';
import { PATTERNS_BY_ID } from '../../data/genres';
import { INSTRUMENTS_BY_ID } from '../../data/instruments';
import { getInstrumentPerformanceProfile, resolveGenreProfile } from '../../data/performance/instrumentPerformanceProfiles';
import { getResolvedSectionStyle } from '../generators/arrange';
import { parseChord } from '../theory/theory';
import { foldToRange, noteLengthBeats, voiceProfile } from '../theory/instrumentProfile';
import { resolveTuningSystem } from '../theory/tuning';
import { buildBarTimes, type BarTime, type Performance, type PerfNote, type PerfCC } from '../sequencing/perform';
import {
  buildHybridGrammar,
  createPhraseState,
  preferredGesture,
  realizeMidi,
  shouldDevelopPhrase,
  type PhraseContext,
  type PhraseState,
} from '../performance/phrasePerformance';
import { GESTURE_NAMES, GESTURE_CODES } from './gestureCodes';

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
  pattern: any;
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

function hitFrom(pattern: any, i: number, rawHit?: string): HitFunction {
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

function rhythmIdeaFromPattern(p: any, sourceGenre: string): RhythmIdea {
  const sub = Math.max(1, p.subdivisions ?? 16);
  const onsets = (p.onsetGrid ?? []).map((position: number, i: number) => ({
    position: position / sub,
    accent: clamp(Number(p.accentProfile?.[i] ?? 0.72)),
    duration: clamp(Number(p.durationGrid?.[i] ?? 1) / sub * 4, 0.05, 2),
    hit: hitFrom(p, i),
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

function rhythmIdeaFromMeasure(detail: Measure['patternDetailsByTrack'][string] | undefined, fallback: RhythmIdea): RhythmIdea {
  if (!detail) return fallback;
  const p = PATTERNS_BY_ID[detail.patternId] ?? fallback.pattern;
  const steps = Math.max(1, Number((detail as any).perf?.stepsPerBar ?? p.subdivisions ?? fallback.subdivisions));
  const onsets = (detail.onsetGrid ?? []).map((position: number, i: number) => ({
    position: position / steps,
    accent: clamp(Number(detail.accentProfile?.[i] ?? 0.72)),
    duration: clamp(Number(detail.durationGrid?.[i] ?? 1) / steps * 4, 0.05, 2),
    hit: hitFrom(p, i, (detail.hitTypes as any)?.[i]),
    sourceHit: (detail.hitTypes as any)?.[i] ?? p.hitGrid?.[i],
    microtiming: Number((detail as any).perf?.microtiming?.[i] ?? 0),
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
    const phrasePos = i % 4;
    const phraseCurve = strict ? 0 : (phrasePos === 3 ? -0.025 : phrasePos === 0 ? 0.01 : 0);
    return { bar: i, bpm: Math.round(b.bpm * (1 + phraseCurve) * 1000) / 1000, reason: strict ? 'style-strict' : 'phrase-feel' };
  });
  const phraseBoundaries = Array.from(new Set([0, ...sheet.regions.flatMap(r => {
    const xs: number[] = [r.end];
    for (let b = r.start + 4; b < r.end; b += 4) xs.push(b);
    return xs;
  })])).sort((a, b) => a - b);
  return { bars, phraseBoundaries, tempoMap, energy, sections };
}

function resolveLens(sheet: Sheet, region: Region, track: Voice, pattern: any): LensStack {
  const host = region.genre ?? sheet.worldId;
  const explicit: GuestLens | undefined = sheet.partLens?.[region.id]?.[track.id];
  const inferredGenre = pattern?.worldId && pattern.worldId !== host ? pattern.worldId : host;
  const source = explicit?.genreId ?? inferredGenre;
  const weight = explicit ? clamp(explicit.weight) : source !== host ? 0.72 : 0;
  const provenance: string[] = [`host:${host}`];
  if (explicit) provenance.push(`part-lens:${source}:${weight.toFixed(3)}`);
  if (!explicit && source !== host) provenance.push(`pattern-source:${pattern.id}`);
  return { hostGenre: host, sourceGenre: source, weight, provenance };
}

function ownership(track: Voice, role: string, energy: number): BandPlan['lanes'][string][number]['ownership'] {
  if (track.muted) return 'tacet';
  if (role === 'bass' || role === 'percussion' || role === 'pulse') return 'pulse';
  if (role === 'lead' || role === 'melody' || role === 'voice') return energy > 0.65 ? 'foreground' : 'answer';
  return energy > 0.8 ? 'background' : 'answer';
}

function chooseRhythm(sheet: Sheet, region: Region, track: Voice): RhythmIdea {
  const measure = sheet.measures.find(x => x.regionId === region.id && (x.patternByTrack?.[track.id] || x.patternDetailsByTrack?.[track.id]));
  const pid = measure?.patternByTrack?.[track.id] ?? measure?.patternDetailsByTrack?.[track.id]?.patternId;
  if (pid && PATTERNS_BY_ID[pid]) return rhythmIdeaFromPattern(PATTERNS_BY_ID[pid], region.genre ?? sheet.worldId);
  const g = region.genre ?? sheet.worldId;
  const candidates = Object.values(PATTERNS_BY_ID).filter(p => p.worldId === g && (!p.roles?.length || p.roles.includes(track.role) || p.roles.includes(voiceProfile(track.instrumentId).role)));
  const p = candidates[0] ?? Object.values(PATTERNS_BY_ID)[0];
  if (!p) throw new Error('No rhythm definitions available');
  return rhythmIdeaFromPattern(p, g);
}

function patternGestureHint(pattern: any, instrumentId: string, styleId: string | undefined): string | undefined {
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

function kitMidiFor(def: any, sourceHit: string | undefined, hit: HitFunction, index: number): number {
  const comps = def?.kitComponents ?? [];
  if (!comps.length) return def?.drum?.mid ?? 60;
  const raw = String(sourceHit ?? '').toLowerCase();
  const patterns: RegExp[] = [];
  if (/heel/.test(raw)) patterns.push(/heel/i, /center|ghost/i);
  if (/toe|tip/.test(raw)) patterns.push(/toe|tip/i, /ghost/i);
  if (/slap.?tapao|tapao/.test(raw)) patterns.push(/tapao|muted|closed/i);
  if (/quinto.?slap|quinto/.test(raw)) patterns.push(/quinto.*slap|slap/i);
  if (/conga-open|open|tumba-open|tone|tono/.test(raw)) patterns.push(/tumba-open|conga-open|open|tone/i);
  if (hit === 'downbeat') patterns.push(/kick|low|bass|grave/i);
  if (hit === 'edge') patterns.push(/rim|edge|bell|cascara/i);
  if (hit === 'slap') patterns.push(/slap|snare|agudo/i);
  if (hit === 'muffled') patterns.push(/mute|tapao|cross-stick|closed/i);
  if (hit === 'ghost') patterns.push(/ghost|tip|toe|heel/i);
  for (const rx of patterns) {
    const found = comps.find((c: any) => rx.test(`${c.id} ${c.name}`));
    if (found) return found.midi;
  }
  return comps[index % comps.length].midi;
}

function baseMidiForPattern(def: any, onset: RhythmOnset, index: number): number[] {
  if (def?.voicing === 'unpitched' || def?.kit || def?.drum) {
    return [kitMidiFor(def, onset.sourceHit, onset.hit, index)];
  }
  return [];
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

function effectiveGesture(profile: any, ctx: PhraseContext, onset: RhythmOnset, authored?: string): string {
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
  style: any,
): void {
  const model = style?.contract?.interactionModel ?? 'interlock';
  const roles = new Map((sheet.tracks as Voice[]).map(t => [t.id, String(t.role ?? 'harmony').toLowerCase()]));
  const regionNotes = notes.filter(n => n.bar >= region.start && n.bar < region.end);
  if (!regionNotes.length) return;

  for (let phraseStart = region.start; phraseStart < region.end; phraseStart += 4) {
    const phraseEnd = Math.min(region.end, phraseStart + 4);
    const phrase = regionNotes.filter(n => n.bar >= phraseStart && n.bar < phraseEnd);
    if (!phrase.length) continue;
    const leads = phrase.filter(n => /lead|melody|voice/.test(roles.get(n.trackId) ?? ''));
    const pulse = phrase.filter(n => /bass|percussion|drum|pulse/.test(roles.get(n.trackId) ?? ''));
    const harmony = phrase.filter(n => /harmony|comp|piano|guitar|keyboard/.test(roles.get(n.trackId) ?? ''));
    const near = (a: PerfNote, b: PerfNote) => a.trackId !== b.trackId && Math.abs(a.time - b.time) <= 0.030;

    for (const n of phrase) {
      const role = roles.get(n.trackId) ?? 'harmony';
      const leadOverlap = leads.some(x => near(n, x));
      const pulseOverlap = pulse.some(x => near(n, x));
      const harmonyOverlap = harmony.some(x => near(n, x));

      if (model === 'homophonic') {
        if (/harmony|comp|keyboard|guitar/.test(role) && leadOverlap) {
          n.vel = Math.max(1, Math.round(n.vel * 0.90));
          n.dur *= 0.94;
        }
        if (/lead|melody|voice/.test(role) && harmonyOverlap) n.vel = Math.min(127, Math.round(n.vel * 1.025));
      } else if (model === 'interlock') {
        if (/harmony|comp|piano|guitar/.test(role) && pulseOverlap) {
          n.vel = Math.max(1, Math.round(n.vel * 0.92));
          n.dur *= 0.90;
        }
        if (/bass|percussion|drum|pulse/.test(role) && harmonyOverlap) n.vel = Math.min(127, Math.round(n.vel * 1.025));
        if (/lead|melody|voice/.test(role) && pulseOverlap) n.vel = Math.min(127, Math.round(n.vel * 1.035));
      } else if (model === 'unison') {
        const companions = phrase.filter(x => near(n, x));
        if (companions.length) n.vel = Math.min(127, Math.round(n.vel * 1.03));
      } else if (model === 'counterpoint') {
        if (/lead|melody|voice/.test(role) && pulseOverlap) {
          n.vel = Math.min(127, Math.round(n.vel * 1.02));
          n.dur *= 0.96;
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

export function compileWholeSong(sheet: Sheet, _seed = 0): Performance {
  const bars = buildBarTimes(sheet);
  const song = buildSongPlan(sheet, bars);
  const lanes: BandPlan['lanes'] = {};

  for (const region of sheet.regions) {
    for (const track of sheet.tracks as Voice[]) {
      if (track.muted) continue;
      const rhythm = chooseRhythm(sheet, region, track);
      const lens = resolveLens(sheet, region, track, rhythm.pattern);
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
      for (let phraseStart = region.start, phraseIndex = 0; phraseStart < region.end; phraseStart += 4, phraseIndex++) {
        const phraseEnd = Math.min(region.end, phraseStart + 4);
        const state = createPhraseState(phraseIndex);
        const phraseNotes: PerfNote[] = [];
        for (let bar = phraseStart; bar < phraseEnd; bar++) {
          const bt = bars[bar];
          const measure = sheet.measures[bar];
          if (!bt || !measure) continue;
          const detail = measure.patternDetailsByTrack?.[track.id] as any;
          const rhythm = rhythmIdeaFromMeasure(detail, lane.rhythm);
          if (!rhythm.onsets.length) continue;
          const chord = measure.chord || 'C';
          const nextChord = sheet.measures[bar + 1]?.chord;
          const energy = song.energy[bar] ?? 0.6;
          const phrasePosition = ((bar - phraseStart) + 0.5) / Math.max(1, phraseEnd - phraseStart);
          const grammarBundle = buildHybridGrammar(regionStyle.id, lane.lens.sourceGenre, regionStyle, lane.lens.weight);
          const sharedHostProfile = resolveGenreProfile(track.instrumentId, lane.lens.hostGenre);
          const sharedSourceProfile = resolveGenreProfile(track.instrumentId, lane.lens.sourceGenre);
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
              hit: onset.hit,
              chord,
              nextChord,
              energy,
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
            const gestureCode = GESTURE_CODES[gestureName] ?? codeForGesture(gestureName);
            const hitFunctionCode = Math.max(0, HIT_FUNCTIONS.indexOf(onset.hit));
            const accent = clamp(onset.accent * (0.82 + energy * 0.28) * developmentAccentScale);
            const vel = Math.round(clamp(0.32 + accent * 0.52 * sharedHostProfile.density.accentContrast, 0.07, 1) * 127);
            const time = Math.max(0, grooveTime(bt, onset, i, lane.groove));
            const authoredBeats = Math.max(0.04, onset.duration);
            const pv = voiceProfile(track.instrumentId);
            const nextPosition = rhythm.onsets[i + 1]?.position ?? (onset.position + Math.max(onset.duration, 1 / Math.max(1, rhythm.subdivisions)));
            const localGapBeats = Math.max(0.08, (nextPosition - onset.position) * bt.beatsPerBar);
            const gapBeats = Math.max(localGapBeats, onset.hit === 'sustain' ? 1.0 : 0.18);
            const durBeats = noteLengthBeats(pv, authoredBeats, gapBeats * (onset.hit === 'sustain' ? 3.5 : 1.7), gestureName);
            const dur = Math.max(0.028, durBeats * (60 / Math.max(20, bt.bpm)) * (0.82 + ctx.hostProfile.phrase.sustain * 0.32));
            const tuning = resolveTuningSystem(regionStyle.harmony?.tuningSystem ?? '12-tet');

            for (let mi = 0; mi < midis.length; mi++) {
              const midi = midis[mi];
              const stagger = (/fingerstyle|arpegg/.test(gestureName.toLowerCase()) && midis.length > 1) ? mi * 0.014 : 0;
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
                    gestureCode: GESTURE_CODES['legato'] ?? codeForGesture('legato'),
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
      n.midi = Math.max(p.capabilities.lowMidi, Math.min(p.capabilities.highMidi, n.midi));
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
    let reservoir = 0.5;
    let dir: 1 | 2 = 1;
    for (const n of resolved.filter(x => x.trackId === track.id).sort((a, b) => a.time - b.time)) {
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
  return {
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
}

// Numeric gesture registry lives at the compiler boundary so the renderers
// receive a closed, deterministic code rather than selecting techniques at playback time.
function codeForGesture(id: string): number {
  return GESTURE_CODES[id] ?? (() => {
    const base = Array.from(id).reduce((h, c) => Math.imul(h ^ c.charCodeAt(0), 16777619) >>> 0, 2166136261);
    const code = 1000 + (base % 50000);
    GESTURE_CODES[id] = code;
    GESTURE_NAMES[code] = id;
    return code;
  })();
}
