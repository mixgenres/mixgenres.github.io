import { Sheet, Voice } from '../generators/arrange';
import { Measure, Region } from '../../types';
import { INSTRUMENTS_BY_ID } from '../../data/instruments';
import { PATTERNS_BY_ID } from '../../data/genres';
import { voiceProfile, noteLengthBeats, foldToRange, VoiceProfile } from '../theory/instrumentProfile';
import { grooveForStyle, applyFeel, seedOf, rand01, GrooveProfile, GrooveRole } from '../generators/groove';
import { parseChord, inferKey, KeyInfo } from '../theory/theory';
import { getResolvedSectionStyle } from '../generators/arrange';
import { voiceChord, styleFor } from '../theory/voicing';
import { bassNote, bassStyleForStyle, BassStyle, bassPitchBend } from '../generators/bass';
import { makeMotif, melodyGate, melodyNote, treatmentFor, Motif, MelodyTreatment, melodyPitchBend, generateStyleOrnaments } from '../generators/melody';
import { GM, kitVoicing, handPercVoicing, flavourForStyle, usesRideStyle, KitVoicing } from '../generators/drums';
import { interpretPattern } from '../performance/performanceInterpreter';
import { createInitialPhraseMemory, advancePhraseDevelopment, type PerformancePhraseMemory } from '../performance/phraseMemory';
import { getPerformanceGrammar } from '../performance/performanceGrammar';
import { decide, shapeOf, ArrangementDecision, SectionShape } from '../generators/arrangement';
import type { TransitionType, TransitionEvent } from './grid';
import { beatsPerBarOf, culturalCyclePosition, type NativeSlice, type RhythmicContext } from './grid';
import { getEffectiveBpm } from '../generators/arrange';
import { culturalRules, culturalPitchSet, culturalDronePitch, isCulturalWorld, shoCluster, celticOpenHarmony } from '../generators/cultural';
import { resolveStyle } from '../../data/styles/resolve';
import { getCanonicalStyle } from '../../data/styles/registry';
import { blendPartStyle, type BlendReport } from '../generators/blend';
import { activityFor, clampEnergy, energyOf, shapeScalarOf } from '../metadata/energy';
import { realizeArticulation, type ArticulationSpec } from '../theory/articulation';
import { resolveSupportedArticulationStack, resolveInstrumentArticulation } from '../performance/musicSemantics';
import type { GuestLens } from '../../types';

import { applyEnsembleInteraction } from '../performance/ensembleInteraction';
import { polishPerformance } from '../performance/performanceQuality';
import { resolveTuningSystem } from '../theory/tuning';
import { generateTiming, compileTracks } from '../ArrangementEngine.js';

/* --- event model ---------------------------------------------------------- */

export interface PitchBendPoint {
  /** seconds after note-on at which this bend value is sent */
  offset: number;
  /** MIDI pitch-bend value, 0..16383; 8192 is center */
  value: number;
}

export interface PerfNote {
  /** seconds from the start of the song */
  time: number;
  /** seconds */
  dur: number;
  midi: number;
  /** Composition-layer target frequency; keeps live/offline renderers on the same tuning. */
  frequencyHz?: number;
  /** Optional MIDI 0xE0 pitch-bend trajectory, scheduled relative to note-on. */
  pitchBend?: PitchBendPoint[];
  /** 1..127 */
  vel: number;
  trackId: string;
  bar: number;
  drum?: boolean;
  /** specific string identifier for the technique/articulation applied */
  articulation?: string;
  /** explicit bellows movement direction for free-reed instruments */
  bellowsDirection?: 'opening' | 'closing';
}

export interface PerfCC {
  time: number;
  trackId: string;
  cc: number;
  /** 0..127 */
  value: number;
}

export interface PerfProgram {
  time: number;
  trackId: string;
  program: number;
  bankMSB?: number;
  bankLSB?: number;
  drum?: boolean;
}

export interface BarTime {
  index: number;
  start: number;
  end: number;
  bpm: number;
  beatsPerBar: number;
  regionId: string;
}

export interface Performance {
  notes: PerfNote[];
  ccs: PerfCC[];
  bars: BarTime[];
  duration: number;
  /** seconds of tail to let ring after the last note */
  tail: number;
  /** `trackId|regionId` -> what the guest lens did, for the inspector. */
  blends: Record<string, BlendReport>;
  /** The active genre ID for offline rendering style matching */
  worldId?: string;
  trackInfo?: Record<string, { instrumentId: string; role?: string }>;
}

export interface CompileOptions {
}

/* --- meter and grid ------------------------------------------------------- */

export { sliceBarNative, beatsPerBarOf } from './grid';
export type { NativeSlice } from './grid';

/* --- tempo map ------------------------------------------------------------ */

export function buildBarTimes(sheet: Sheet): BarTime[] {
  const beatsPerBar = beatsPerBarOf(sheet.timeSignature);
  const bars: BarTime[] = [];
  let t = 0;
  sheet.measures.forEach((m, i) => {
    const { bpm } = getEffectiveBpm(sheet, m.regionId);
    const safeBpm = Math.max(20, Math.min(400, bpm || 110));
    const dur = (beatsPerBar * 60) / safeBpm;
    bars.push({ index: i, start: t, end: t + dur, bpm: safeBpm, beatsPerBar, regionId: m.regionId });
    t += dur;
  });
  return bars;
}

/* --- channel allocation --------------------------------------------------- */

function isPercussive(instrumentId: string): boolean {
  const d = INSTRUMENTS_BY_ID[instrumentId];
  return !!d && (d.kit === true || d.drum !== undefined);
}

export function allocateChannels(tracks: Voice[]): { channelOf: Record<string, number>; drumChannels: number[] } {
  const channelOf: Record<string, number> = {};
  const drumChannels: number[] = [];
  const melodicPool = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15];
  const percPool = [9, 15, 14, 13, 12, 11, 10, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  const used = new Set<number>();

  // percussion first — channel 9 is the one the soundfont already treats as a kit
  for (const t of tracks) {
    if (!isPercussive(t.instrumentId)) continue;
    const ch = percPool.find(c => !used.has(c));
    if (ch === undefined) continue;
    used.add(ch);
    channelOf[t.id] = ch;
    drumChannels.push(ch);
  }
  for (const t of tracks) {
    if (isPercussive(t.instrumentId)) continue;
    const ch = melodicPool.find(c => !used.has(c));
    if (ch === undefined) continue;
    used.add(ch);
    channelOf[t.id] = ch;
  }
  return { channelOf, drumChannels };
}

/* --- section intensity ---------------------------------------------------- */

const INTENSITY_LEVEL: Record<string, number> = {
  low: 0.3, medium: 0.55, high: 0.78, peak: 1.0,
};

export function intensityOf(region: Region | undefined): number {
  return INTENSITY_LEVEL[String(region?.intensity ?? 'medium')] ?? 0.55;
}

interface VoiceMemory {
  last: number[];
  lastNote: number;
  lastBar?: number;
}

export function thinForSustain(
  prof: VoiceProfile,
  attacks: { beatInBar: number; accent: number }[],
  beatsPerBar: number,
  intensity: number,
  prevLastKeptBeat?: number,
): boolean[] {
  const keep = attacks.map(() => true);
  if (prof.sustain !== 'sustained' && prof.sustain !== 'blown') return keep;

  const padLike = prof.role === 'pad' || prof.ring >= 4;
  const minGap = padLike
    ? (intensity > 0.8 ? beatsPerBar / 2 : beatsPerBar)
    : prof.sustain === 'blown' ? 0.5 : 1.0;

  let lastKept = prevLastKeptBeat !== undefined ? prevLastKeptBeat : -Infinity;
  attacks.forEach((a, i) => {
    if (a.beatInBar - lastKept + 1e-6 >= minGap || (prevLastKeptBeat === undefined && i === 0)) {
      lastKept = a.beatInBar;
    } else {
      keep[i] = false;
    }
  });
  return keep;
}

/* --- the compiler --------------------------------------------------------- */

interface Attack {
  trackId: string;
  bar: number;
  /** grid position in beats from the start of the bar, before feel */
  beatInBar: number;
  accent: number;
  durationSteps: number;
  stepsPerBar: number;
  authoredMs: number;
  articulation?: string;
  articulations?: string[];
  lens?: GuestLens;
  partEnergy?: 1 | 2 | 3 | 4 | 5;
  onsetIndex: number;
  chordSymbol: string;
  anticipated: boolean;
  hitType?: string;
  patternId?: string;
  styleId?: string;
  performanceKind?: string;
  pitchIntent?: string;
  registerOffset?: number;
}

export function authoredKitVoicing(hitType: string, accent: number): KitVoicing {
  const gain = Math.max(0.2, Math.min(1.2, 0.72 + accent * 0.34));
  switch (hitType) {
    case 'kick': return { key: GM.kick, limb: 'kick', gain };
    case 'snare': return { key: GM.snare, limb: 'snare', gain };
    case 'rim': return { key: GM.snareRim, limb: 'rim', gain: gain * 0.92 };
    case 'clap': return { key: GM.clap, limb: 'snare', gain: gain * 0.95 };
    case 'hat': return { key: GM.hatClosed, limb: 'hat', gain: gain * 0.72 };
    case 'openHat': return { key: GM.hatOpen, limb: 'openHat', gain: gain * 0.8 };
    case 'ride': return { key: GM.ride, limb: 'ride', gain: gain * 0.72 };
    case 'crash': return { key: GM.crash, limb: 'crash', gain: gain * 0.92 };
    case 'cowbell': return { key: GM.cowbell, limb: 'snare', gain: gain * 0.86 };
    case 'tom': return { key: GM.tomMid, limb: 'tom', gain: gain * 0.85 };
    case 'ghost': return { key: GM.snare, limb: 'ghost', gain: gain * 0.32 };
    case 'shaker': {
      const d = INSTRUMENTS_BY_ID['shaker']?.drum;
      return { key: d?.mid ?? 82, limb: 'hat', gain: gain * 0.55 };
    }
    default:
      return { key: GM.hatClosed, limb: 'hat', gain: gain * 0.6 };
  }
}



function energyForRegion(region: Region): 1 | 2 | 3 | 4 | 5 {
  return energyOf(region);
}

function authoredTransitionPattern(style: any, worldId: string, _type: TransitionType, role: string): any | undefined {
  if (!style?.contract?.transitionGrammar?.authoredPriority) return undefined;
  const candidates = Object.values(PATTERNS_BY_ID) as any[];
  return candidates
    .filter(p => p.worldId === worldId)
    .filter(p => p.category === 'fill' || p.category === 'transition' || p.tags?.some((t: string) => /fill|transition/i.test(t)))
    .filter(p => !p.roles?.length || p.roles.includes(role) || (role === 'percussion' && p.roles.includes('drums')))
    .filter(p => !style.patterns?.allowed?.length || style.patterns.allowed.includes(p.id))
    .sort((a, b) => {
      const af = a.category === 'fill' || a.tags?.some((t: string) => /fill/i.test(t)) ? 1 : 0;
      const bf = b.category === 'fill' || b.tags?.some((t: string) => /fill/i.test(t)) ? 1 : 0;
      return bf - af;
    })[0];
}

export function buildTransitionEvents(sheet: Sheet): Map<number, TransitionEvent> {
  const out = new Map<number, TransitionEvent>();
  for (let i = 0; i < sheet.regions.length - 1; i++) {
    const current = sheet.regions[i];
    const next = sheet.regions[i + 1];
    const style = getResolvedSectionStyle(sheet, current);
    const fromEnergy = energyForRegion(current);
    const toEnergy = energyForRegion(next);
    if (fromEnergy === toEnergy) continue;
    const grammar = style.contract.transitionGrammar;
    const type = (toEnergy > fromEnergy ? grammar.onEnergyRise : grammar.onEnergyFall) ??
      (toEnergy > fromEnergy ? 'fill' : 'drop-out');
    if (!grammar.types.includes(type)) continue;
    const cycleLength = Math.max(1, Math.round(style.contract.cycleLength || 1));
    const finalStart = Math.max(current.start, current.end - cycleLength);
    const roles = Array.from(new Set(['drums', 'percussion', 'bass', 'harmony', 'comp', 'lead', 'texture', 'pad', 'voice', ...(sheet.tracks ?? []).map(t => t.role)]));
    const authoredByRole: Record<string, string | undefined> = {};
    if (type === 'fill') {
      for (const r of roles) {
        const p = authoredTransitionPattern(style, current.genre ?? sheet.worldId, type, r);
        if (p) authoredByRole[r] = p.id;
      }
    }
    const authored = authoredByRole['drums'] ?? (type === 'fill'
      ? authoredTransitionPattern(style, current.genre ?? sheet.worldId, type, 'drums')?.id
      : undefined);
    const bar = current.end - 1;
    if (bar < finalStart) continue;
    {
      out.set(bar, {
        type,
        fromEnergy,
        toEnergy,
        cyclePosition: culturalCyclePosition(bar - current.start, cycleLength),
        cycleLength,
        authored: Object.keys(authoredByRole).length > 0 || !!authored,
        patternId: authoredByRole['drums'] ?? authored,
        authoredByRole,
      });
    }
  }
  return out;
}

/** True when the next section is heavier than this one. */
export function isBuildSection(regions: Region[], region: Region): boolean {
  const i = regions.findIndex(r => r.id === region.id);
  const next = regions[i + 1];
  return !!next && energyOf(next) > energyOf(region);
}

export function spotlightLeadRubatoOffset(spotlit: boolean, role: string, cyclePosition: number, cycleLength: number, secPerBeat: number, seed: number): number {
  if (!spotlit || role !== 'lead') return 0;
  // Small, deterministic timing breath independent of groove.ts pocket.
  const phase = ((cyclePosition % Math.max(1, cycleLength)) + Math.max(1, cycleLength)) % Math.max(1, cycleLength);
  const sign = ((seed ^ Math.round(phase * 17)) & 1) ? 1 : -1;
  const amount = (0.035 + (Math.abs(seed % 7) / 6) * 0.045) * secPerBeat;
  return sign * amount;
}

export function dragOffset(
  role: string,
  dragProfile: import('../../data/styles/contracts').DragProfile | undefined,
  cyclePosition: number,
  cycleLength: number,
  isCadenceBar: boolean,
  secPerBeat: number,
): number {
  if (!dragProfile || !dragProfile.roles.includes(role)) return 0;
  if (dragProfile.resolvesAtCadence && isCadenceBar) return 0; // snap back to on-time at phrase/cadence boundary
  const cycleLen = Math.max(1, cycleLength);
  const phase = ((cyclePosition % cycleLen) + cycleLen) % cycleLen;
  const t = phase / cycleLen; // 0..1 through the phrase
  const shaped = dragProfile.growthCurve === 'eased-in' ? t * t
    : dragProfile.growthCurve === 'eased-in-out' ? (1 - Math.cos(t * Math.PI)) / 2
    : t;
  // Always LATE (positive), never early: this is what "drag" means.
  return shaped * dragProfile.maxLagBeats * secPerBeat;
}

export function tempoMultiplierAt(
  phraseT: number,
  curve: 'rubato-pull' | 'none' = 'rubato-pull'
): number {
  if (curve !== 'rubato-pull') return 1;
  // Slightly slower through the middle of the phrase, resolving to on-tempo at cadence
  return 1 + 0.06 * Math.sin(phraseT * Math.PI);
}

export function compile(sheet: Sheet, _opts: CompileOptions = {}): Performance {
  const bars = buildBarTimes(sheet);
  const tracks = sheet.tracks as Voice[];
  const { channelOf } = allocateChannels(tracks);
  const regionById = new Map(sheet.regions.map(r => [r.id, r]));

  const notes: PerfNote[] = [];
  const ccs: PerfCC[] = [];
  const blendReports: Record<string, BlendReport> = {};

  if (!bars.length || !tracks.length) {
    return { notes, ccs, bars, duration: 0, tail: 0, blends: {} };
  }

  const transitionEvents = buildTransitionEvents(sheet);

  /* ---- 1. gather every attack, per track, in order --------------------- */
  const attacksByTrack = new Map<string, Attack[]>();
  for (const t of tracks) attacksByTrack.set(t.id, []);

  const trackPhraseMemories = new Map<string, PerformancePhraseMemory>();
  for (const t of tracks) {
    trackPhraseMemories.set(t.id, createInitialPhraseMemory());
  }
  const lastKeptBeatByTrack = new Map<string, { bar: number; beatInBar: number }>();

  sheet.measures.forEach((m: Measure, barIndex: number) => {
    const bt = bars[barIndex];
    if (!bt) return;
    const region = regionById.get(m.regionId);
    const nextMeasure = sheet.measures[barIndex + 1];
    const isSectionStart = region ? barIndex === region.start : barIndex === 0;
    const isSectionEnd = region ? barIndex === region.end - 1 : false;

    // Pre-calculate ensemble context for this measure across all tracks
    const kickTimesInBar: number[] = [];
    const leadActiveBeats: [number, number][] = [];
    const otherAccentsInBar: number[] = [];
    const occupiedSubdivisions: number[] = [];
    const trackRoleMap: Record<string, string> = {};

    for (const track of tracks) {
      if (track.muted) continue;
      const detail = m.patternDetailsByTrack?.[track.id];
      if (!detail) continue;
      const vProf = voiceProfile(track.instrumentId);
      trackRoleMap[track.id] = vProf.role;

      const rawP = detail.patternId ? PATTERNS_BY_ID[detail.patternId] : undefined;
      const onsets = rawP?.onsetGrid ?? (detail as any).perf?.onsets ?? detail.onsetGrid ?? [];
      const subDiv = rawP?.subdivisions ?? (detail as any).perf?.stepsPerBar ?? 16;
      const hitGrid = rawP?.hitGrid ?? (detail as any).perf?.hitTypes ?? [];
      const accGrid = rawP?.accentProfile ?? (detail as any).perf?.accents ?? [];

      for (let oi = 0; oi < onsets.length; oi++) {
        const step = onsets[oi];
        const bInB = (step / subDiv) * bt.beatsPerBar;
        const hit = hitGrid[oi];
        const acc = accGrid[oi] ?? 0.75;
        if (vProf.role === 'kick' || vProf.role === 'perc' || /kick|bombo|bass_drum/i.test(track.instrumentId) || hit === 'kick') {
          kickTimesInBar.push(bInB);
        }
        if (vProf.role === 'lead') {
          leadActiveBeats.push([bInB, bInB + 0.5]);
        }
        if (acc >= 0.85) {
          otherAccentsInBar.push(bInB);
        }
        occupiedSubdivisions.push(step);
      }
    }

    const ensembleContext = {
      kickTimesInBar,
      leadActiveBeats,
      otherAccentsInBar,
      occupiedSubdivisions,
      activeTrackIds: tracks.filter(t => !t.muted).map(t => t.id),
      trackRoleMap,
    };

    for (const t of tracks) {
      if (t.muted) continue;
      const d = m.patternDetailsByTrack?.[t.id];
      if (!d) continue;
      const def = INSTRUMENTS_BY_ID[t.instrumentId];
      if (!def) continue;

      const prof = voiceProfile(t.instrumentId);
      const resolvedStyle = region
        ? getResolvedSectionStyle(sheet, region)
        : resolveStyle({ genreId: sheet.worldId, styleId: getCanonicalStyle(sheet.worldId).id });

      let canAnticipate =
        prof.role === 'bass' || prof.role === 'comp' || prof.role === 'stab';

      const isSalsaTimba = /salsa|timba/i.test(resolvedStyle.id || '') || /salsa|timba/i.test(resolvedStyle.primaryGenre || '');
      if (isSalsaTimba) {
        const is32 = /3-2/i.test(resolvedStyle.rhythm?.timelineClave ?? resolvedStyle.contract?.timeline ?? '3-2');
        if (!is32) {
          canAnticipate = false; // in 2-3 clave, disable anticipation so changes are played on-time
        }
      }
      const list = attacksByTrack.get(t.id)!;

      const rawPattern = d.patternId ? PATTERNS_BY_ID[d.patternId] : undefined;
      const transition = transitionEvents.get(barIndex);
      const isDrum = !!def.kit || !!def.drum;

      const mem = trackPhraseMemories.get(t.id)!;
      const phraseBars = 4;
      const regionStart = region ? region.start : 0;
      const barInPhrase = ((barIndex - regionStart) % phraseBars + phraseBars) % phraseBars;
      const phraseIndex = Math.floor((barIndex - regionStart) / phraseBars);
      const isPhraseStart = barInPhrase === 0;
      const isPhraseEnd = barInPhrase === phraseBars - 1;
      const isCadenceBar = isPhraseEnd || (nextMeasure && nextMeasure.regionId !== m.regionId);

      const sectionStyle = resolvedStyle;
      const grammar = getPerformanceGrammar(sectionStyle, prof.role);

      advancePhraseDevelopment(
        mem,
        phraseIndex,
        grammar.phraseDevelopment,
        isCadenceBar,
        seedOf(t.id, barIndex, 'dev-advance'),
        prof.role
      );

      // Build track interaction directives
      const trackInteractions = [];
      if (prof.role === 'comp' || prof.role === 'pad') {
        if (leadActiveBeats.length > 0) {
          trackInteractions.push({ targetTrackId: 'lead', relationship: 'avoid' as const });
        }
        trackInteractions.push({ targetTrackId: 'drums', relationship: 'complement' as const });
      } else if (prof.role === 'stab') {
        trackInteractions.push({ targetTrackId: 'lead', relationship: 'accentWith' as const });
      }

      const transitionPatternId = transition?.authoredByRole?.[t.role] || (isDrum ? transition?.patternId : undefined);
      const isTransitionBar = !!transition;
      const transitionDirection = transition ? (transition.toEnergy > transition.fromEnergy ? 'build' : 'drop') : undefined;
      const effectivePattern = (transition?.type === 'fill' && transitionPatternId && PATTERNS_BY_ID[transitionPatternId])
        ? PATTERNS_BY_ID[transitionPatternId]
        : rawPattern;

      // If we have an authored pattern (or transition pattern),
      // run the culturally grounded performance interpreter!
      if (effectivePattern) {
        const currentParsedChord = parseChord(m.chord);
        const nextParsedChord = nextMeasure ? parseChord(nextMeasure.chord) : undefined;
        const partEnergy = (d as any).partEnergy ?? 3;

        const result = interpretPattern({
          trackId: t.id,
          role: prof.role,
          instrumentId: t.instrumentId,
          pattern: effectivePattern,
          grammar,
          chord: currentParsedChord,
          nextChord: nextParsedChord,
          sectionEnergy: partEnergy,
          beatsPerBar: bt.beatsPerBar,
          barIndex,
          barInPhrase,
          phraseBars,
          isPhraseStart,
          isPhraseEnd,
          isCadenceBar,
          isSectionStart,
          isSectionEnd,
          isTransitionBar,
          transitionDirection,
          sectionKind: region?.kind,
          memory: mem,
          seed: seedOf(t.id, barIndex, 'pattern-interpret'),
          ensembleContext,
          interactions: trackInteractions,
        });

        for (let i = 0; i < result.attacks.length; i++) {
          const ia = result.attacks[i];
          const beatInBar = ia.beat;
          const lastHalfBeat = beatInBar >= bt.beatsPerBar - 0.51;
          const chordChanges = !!nextMeasure && nextMeasure.chord !== m.chord;
          const anticipated = canAnticipate && (ia.kind === 'anticipation' || (lastHalfBeat && chordChanges));
          list.push({
            trackId: t.id,
            bar: barIndex,
            beatInBar,
            accent: ia.accent,
            durationSteps: ia.durationSteps,
            stepsPerBar: effectivePattern.subdivisions || 16,
            authoredMs: 0,
            articulation: ia.articulation || d.articulation,
            articulations: (d as any).articulations,
            lens: (d as any).lens,
            partEnergy: (d as any).partEnergy,
            onsetIndex: ia.onsetIndex ?? i,
            chordSymbol: anticipated ? nextMeasure!.chord : m.chord,
            anticipated,
            hitType: ia.hitType || (effectivePattern.hitGrid ? effectivePattern.hitGrid[ia.onsetIndex ?? i] : undefined),
            styleId: (d as any).styleId,
            patternId: (d as any).patternId,
            performanceKind: ia.kind,
            pitchIntent: ia.pitchIntent,
            registerOffset: ia.registerOffset,
          });
        }
        continue;
      }

      // Handle non-authored pattern fallback path
      if (mem.developmentStage === 'rest') {
        continue; // Intentional musical rest
      }

      const perf = (d as any).perf as NativeSlice | undefined;
      let onsets = perf?.onsets ?? d.onsetGrid ?? [];
      if (!onsets.length) continue;
      let stepsPerBar = perf?.stepsPerBar ?? 16;
      let accents = perf?.accents ?? d.accentProfile ?? [];
      let durations = perf?.durations ?? d.durationGrid ?? [];
      let micro = perf?.microtiming ?? [];
      let hitTypes = perf?.hitTypes ?? [];

      if (transition?.type === 'fill' && transitionPatternId) {
        const fill = PATTERNS_BY_ID[transitionPatternId];
        if (fill) {
          onsets = fill.onsetGrid ?? onsets;
          stepsPerBar = fill.subdivisions || 16;
          accents = fill.accentProfile ?? onsets.map(() => 0.82);
          durations = fill.durationGrid ?? onsets.map(() => 1);
          hitTypes = fill.hitGrid ?? onsets.map(() => (isDrum ? 'tom' : ''));
          micro = [];
        }
      }

      const staged = onsets.map((step, i) => ({
        beatInBar: (step / stepsPerBar) * bt.beatsPerBar,
        accent: accents[i] ?? 0.78,
      }));
      const melodicVoice = def.voicing === 'single' && prof.role !== 'bass' && prof.role !== 'pad';
      const percussiveVoice = !!def.kit || !!def.drum;

      const lastKeptInfo = lastKeptBeatByTrack.get(t.id);
      const prevLastKeptBeat = lastKeptInfo && lastKeptInfo.bar === barIndex - 1
        ? lastKeptInfo.beatInBar - bt.beatsPerBar
        : undefined;

      const keep = melodicVoice || percussiveVoice
        ? staged.map(() => true)
        : thinForSustain(prof, staged, bt.beatsPerBar, intensityOf(region), prevLastKeptBeat);

      let lastKeptInThisBar: number | undefined;
      onsets.forEach((step, i) => {
        if (!keep[i]) return;
        const beatInBar = (step / stepsPerBar) * bt.beatsPerBar;
        lastKeptInThisBar = beatInBar;
        const lastHalfBeat = beatInBar >= bt.beatsPerBar - 0.51;
        const chordChanges = !!nextMeasure && nextMeasure.chord !== m.chord;
        const anticipated = canAnticipate && lastHalfBeat && chordChanges;
        list.push({
          trackId: t.id,
          bar: barIndex,
          beatInBar,
          accent: accents[i] ?? 0.78,
          durationSteps: durations[i] ?? 1,
          stepsPerBar,
          authoredMs: micro[i] ?? 0,
          articulation: d.articulation,
          articulations: (d as any).articulations,
          lens: (d as any).lens,
          partEnergy: (d as any).partEnergy,
          onsetIndex: i,
          chordSymbol: anticipated ? nextMeasure!.chord : m.chord,
          anticipated,
          hitType: hitTypes[i] || undefined,
          styleId: (d as any).styleId,
          patternId: (d as any).patternId,
        });
      });
      if (lastKeptInThisBar !== undefined) {
        lastKeptBeatByTrack.set(t.id, { bar: barIndex, beatInBar: lastKeptInThisBar });
      }
    }
  });

  /* ---- 2. song harmonic context and motifs ---- */
  const allChords = sheet.measures.map(m => m.chord);
  const key: KeyInfo = inferKey(allChords.length ? allChords : ['Am']);
  const songStyle = resolveStyle({ genreId: sheet.worldId, styleId: sheet.styleId ?? getCanonicalStyle(sheet.worldId).id });
  // Non-functional contracts use one modal/ensemble center; functional styles retain
  // ordinary harmonic key inference.
  const culturalTonicPc = isCulturalWorld(songStyle)
    ? parseChord(sheet.measures[0]?.chord ?? 'D5').rootPc
    : key.tonicPc;
  const motif: Motif = makeMotif(
    seedOf(sheet.id, sheet.worldId, sheet.title, allChords.join(',')),
    bars[0]?.beatsPerBar ?? 4,
    sheet.styleId,
    sheet.worldId,
  );
  const phraseBars = motif.phraseBars ?? 4;

  const nextChangedChord: (string | undefined)[] = sheet.measures.map((m, i) => {
    for (let j = i + 1; j < Math.min(sheet.measures.length, i + 5); j++) {
      if (sheet.measures[j].chord !== m.chord) return sheet.measures[j].chord;
    }
    return sheet.measures[(i + 1) % sheet.measures.length]?.chord;
  });

  const melodicTracks = tracks.filter(t => {
    const d = INSTRUMENTS_BY_ID[t.instrumentId];
    const pr = voiceProfile(t.instrumentId);
    return d && !d.kit && !d.drum && d.voicing === 'single' && pr.role !== 'bass';
  });

  // Melody is not a percussion pattern. A vocal/lead track whose authored
  // pattern contains only a pickup cell must still be able to sing a phrase;
  // otherwise reggaeton, kizomba, bachata and similar styles collapse into a
  // handful of vocal notes over a full-length backing track. Seed additional
  // phrase attacks from the song motif, while retaining authored pattern hits
  // as anchors. Harmony is still resolved later against the current chord, so
  // these are compositional events, not a fixed MIDI melody.
  for (const t of melodicTracks) {
    const prof = voiceProfile(t.instrumentId);
    const isVoice = prof.role === 'lead' && /voice|choir|coro/i.test(t.instrumentId);
    if (prof.role !== 'lead' && !isVoice) continue;
    const list = attacksByTrack.get(t.id);
    if (!list) continue;
    for (const bt of bars) {
      const region = regionById.get(bt.regionId);
      if (!region) continue;
      const kind = String(region.kind ?? '').toLowerCase();
      const vocalSection = /verse|verso|chorus|coro|refrain|letra|preg|tema|head/.test(kind);
      const soloSection = /solo|trading|instrumental|falseta|variaci|descarga|mambo/.test(kind);
      const shouldPhrase = isVoice ? vocalSection : (vocalSection || soloSection);
      if (!shouldPhrase) continue;
      const phraseBar = ((bt.index - region.start) % phraseBars + phraseBars) % phraseBars;
      const barStart = phraseBar * bt.beatsPerBar;
      const barEnd = barStart + bt.beatsPerBar;
      const phraseNotes = motif.notes.filter(n => n.pos >= barStart && n.pos < barEnd);
      for (let mi = 0; mi < phraseNotes.length; mi++) {
        const mn = phraseNotes[mi];
        const beatInBar = mn.pos - barStart;
        const exists = list.some(a => a.bar === bt.index && Math.abs(a.beatInBar - beatInBar) < 0.08);
        if (exists) continue;
        list.push({
          trackId: t.id, bar: bt.index, beatInBar,
          accent: Math.max(0.62, Math.min(1, mn.weight ?? 0.75)),
          durationSteps: beatInBar < bt.beatsPerBar - 0.5 ? 2 : 1,
          stepsPerBar: 16, authoredMs: 0,
          onsetIndex: 1000 + mi, chordSymbol: sheet.measures[bt.index]?.chord ?? 'Am',
          anticipated: false, patternId: 'generated-motif-phrase', styleId: region.styleId,
        });
      }
    }
  }

  const melodyLayer = new Map<string, number>();
  melodicTracks.forEach((t, i) => melodyLayer.set(t.id, i));

  const hasBass = tracks.some(t => !t.muted && voiceProfile(t.instrumentId).role === 'bass');
  const occupied = new Map<number, number[]>();

  /* ---- arrangement shape and decisions ---- */
  const shapes = new Map<string, SectionShape>();
  sheet.regions.forEach((r, i) => {
    shapes.set(r.id, shapeOf(sheet.regions, i, intensityOf));
  });
  const decisions = new Map<string, ArrangementDecision>();
  const bandSize = tracks.filter(t => !t.muted).length;
  for (const t of tracks) {
    const prof = voiceProfile(t.instrumentId);
    for (const r of sheet.regions) {
      const shape = shapes.get(r.id)!;
      decisions.set(`${t.id}|${r.id}`, decide(t, prof, shape, bandSize, sheet.arrangementContext?.[r.id]));
    }
  }

  /* ---- 3. turn attacks into sounding notes ---- */
  const trackPhraseStates = new Map<string, {
    currentVoicing: { chordSymbol: string; pitches: number[] } | null;
    currentPhraseIndex: number;
    trajectory: 'pickup-and-target' | 'question-answer' | 'continuous-run' | 'sparse-accent';
    previousChord?: any;
  }>();

  // Identify anchorTrack (rhythm section pulse leader) to anchor microtiming
  const anchorTrack = tracks.find(t => {
    const prof = voiceProfile(t.instrumentId);
    return prof.role === 'kick' || prof.role === 'snare' || prof.role === 'hat' || prof.role === 'ride' || prof.role === 'perc' || t.instrumentId === 'drums' || t.instrumentId === 'kick' || t.instrumentId === 'cajon' || t.instrumentId === 'timbales';
  }) ?? tracks[0];
  const anchorTrackId = anchorTrack?.id;

  // Sort tracks so anchorTrack is processed first to establish the rhythmic pocket
  const sortedTracks = [...tracks].sort((a, b) => {
    if (a.id === anchorTrackId) return -1;
    if (b.id === anchorTrackId) return 1;
    return 0;
  });

  const anchorJitterMap = new Map<string, number>();

  for (const t of sortedTracks) {
    const channel = channelOf[t.id];
    if (channel === undefined || t.muted) continue;

    const def = INSTRUMENTS_BY_ID[t.instrumentId];
    if (!def) continue;
    const prof = voiceProfile(t.instrumentId);
    const list = (attacksByTrack.get(t.id) ?? []).sort(
      (a, b) => a.bar - b.bar || a.beatInBar - b.beatInBar,
    );
    if (!list.length) continue;

    const attacksByBar = new Map<number, typeof list>();
    for (const atk of list) {
      let arr = attacksByBar.get(atk.bar);
      if (!arr) {
        arr = [];
        attacksByBar.set(atk.bar, arr);
      }
      arr.push(atk);
    }

    const mem: VoiceMemory = { last: [], lastNote: prof.centre, lastBar: -1 };
    const lastVoiceEndTimes = new Map<string, number>();
    const isBass = prof.role === 'bass';
    const isMelodic = melodyLayer.has(t.id);
    const layer = melodyLayer.get(t.id) ?? 0;

    if (!trackPhraseStates.has(t.id)) {
      trackPhraseStates.set(t.id, {
        currentVoicing: null,
        currentPhraseIndex: -1,
        trajectory: 'question-answer',
        previousChord: undefined,
      });
    }
    const phraseState = trackPhraseStates.get(t.id)!;

    for (let i = 0; i < list.length; i++) {
      const a = list[i];
      if (mem.lastBar !== undefined && mem.lastBar >= 0 && (a.bar - mem.lastBar) > 2) {
        mem.last = [];
        mem.lastNote = prof.centre;
      }
      mem.lastBar = a.bar;
      const prevNoteMidi = mem.lastNote;
      const bt = bars[a.bar];
      if (!bt) continue;
      const region = regionById.get(bt.regionId);
      const regionGenreId = region?.genre ?? sheet.worldId;
      const sectionStyle = region
        ? getResolvedSectionStyle(sheet, region)
        : resolveStyle({ genreId: regionGenreId, styleId: getCanonicalStyle(regionGenreId).id });

      // The section decides the world. A guest lens on this part decides how
      // this one voice speaks inside it. Everything downstream — groove, bass
      // job, percussion dialect, articulation vocabulary — reads the blended
      // style, so a reggae skank inside a cumbia arrives with reggae phrasing
      // rather than being transcribed into cumbia phrasing.
      const blended = blendPartStyle(sectionStyle, a.lens, String(t.role));
      const resolvedStyle = blended.style;
      if (a.lens && blended.report.weight > 0) {
        blendReports[`${t.id}|${bt.regionId}`] = blended.report;
      }
      const regionStyleId = sectionStyle.id;
      const g: GrooveProfile = grooveForStyle(resolvedStyle);
      const bassStyle: BassStyle = bassStyleForStyle(resolvedStyle, t.instrumentId, t.role);
      const intensity = intensityOf(region);

      const decision = decisions.get(`${t.id}|${bt.regionId}`);
      if (decision && !decision.plays) continue;
      const rhythmicContext: RhythmicContext = {
        cyclePosition: culturalCyclePosition(a.bar - (region?.start ?? 0), resolvedStyle.contract.cycleLength),
        cycleLength: Math.max(1, Math.round(resolvedStyle.contract.cycleLength || 1)),
        sectionEnergy: decision?.sectionEnergy ?? 3,
        transition: transitionEvents.get(a.bar),
      };
      const spotlit = !!sheet.arrangementContext?.[bt.regionId]?.spotlightedTrackIds.includes(t.id);
      const spotlitLead = prof.role === 'lead' && spotlit;
      const isVocalLead = /voice|choir|coro/i.test(t.instrumentId) && spotlit;

      // How much of the authored material this part actually voices is the
      // world's decision, not a constant. `activity` comes straight from the
      // contract's energy mapping, so a world that says "the compás never
      // thins" (activity 0.95 at energy 1) keeps every stroke, while a world
      // that says energy 1 means a skeleton drops most of them.
      //
      // Two onsets are never dropped: the downbeat, and anything the pattern
      // accented hard enough to be structural. Thinning those is what turned
      // sparse sections into unrecognisable ones.
      const partEnergy = clampEnergy(a.partEnergy ?? decision?.sectionEnergy ?? 3);
      const activity = isVocalLead ? 1 : activityFor(resolvedStyle.contract, partEnergy);
      const structural = a.beatInBar < 0.12 || a.accent >= 0.88;
      // Keep the authored rhythm-section vocabulary intact at normal energy.
      // Randomly deleting 25–40% of kick/bass/comp hits makes a real pattern
      // sound like an isolated loop with holes rather than a band playing a
      // coherent part. Simplification belongs at the phrase/arrangement level;
      // note-level thinning is reserved for genuinely low-energy passages and
      // secondary melodic material.
      const roleKeepsPattern = ['bass', 'perc', 'comp'].includes(prof.role) || t.role === 'drums' || isPercussive(t.instrumentId);
      const effectiveActivity = roleKeepsPattern && partEnergy >= 3 ? Math.max(activity, 0.92) : activity;
      if (!structural && effectiveActivity < 0.99 &&
          rand01(seedOf(t.id, a.bar, a.onsetIndex, 'activity')) > effectiveActivity) {
        continue;
      }

      const secPerBeat = 60 / bt.bpm;
      const chord = parseChord(a.chordSymbol);
      const nextSym = nextChangedChord[a.bar];
      const nextChord = nextSym ? parseChord(nextSym) : undefined;
      const pattern = a.patternId ? PATTERNS_BY_ID[a.patternId] : undefined;
      const culture = culturalRules(resolvedStyle, t.instrumentId);
      const culturalHarmonyPattern = !!culture && pattern?.roles.includes('harmony') && !culture.heterophonic;
      const celticWorld = culture?.sourceModel === 'modal-drone' && /open fifth|drone/i.test(resolvedStyle.contract.harmonyVocabulary.join(' '));

      let treatment: MelodyTreatment = 'state';
      if (isMelodic && !culturalHarmonyPattern && !culture) {
        treatment = treatmentFor(String(region?.kind ?? 'verse'), intensity, regionStyleId, resolvedStyle.primaryGenre);
        const phraseBar = (a.bar - (region ? region.start : 0) + 64) % phraseBars;
        const phraseIndex = Math.floor((a.bar - (region ? region.start : 0) + 64) / phraseBars);
        if (phraseState.currentPhraseIndex !== phraseIndex) {
          phraseState.currentPhraseIndex = phraseIndex;
          const pSeed = seedOf(t.id, phraseIndex, 999, 'phrase-trajectory');
          const roll = rand01(pSeed);
          if (roll < 0.25) {
            phraseState.trajectory = 'pickup-and-target';
          } else if (roll < 0.55) {
            phraseState.trajectory = 'question-answer';
          } else if (roll < 0.8) {
            phraseState.trajectory = 'continuous-run';
          } else {
            phraseState.trajectory = 'sparse-accent';
          }
        }

        let trajectoryGate = true;
        const b = a.beatInBar;
        const traj = phraseState.trajectory;
        if (traj === 'pickup-and-target') {
          const isPickup = (phraseBar === 3 && b >= bt.beatsPerBar - 1.5) || (phraseBar === 0 && b >= bt.beatsPerBar - 1.5);
          const isTarget = b < 0.5 || (Math.abs(b - bt.beatsPerBar / 2) < 0.1);
          trajectoryGate = isPickup || isTarget;
        } else if (traj === 'question-answer') {
          if (phraseBar === 2) {
            trajectoryGate = b >= bt.beatsPerBar - 0.5;
          } else if (phraseBar === 3) {
            trajectoryGate = b < 2.0;
          }
        } else if (traj === 'sparse-accent') {
          trajectoryGate = b < 0.12 || Math.abs(b - bt.beatsPerBar / 2) < 0.12;
        }

        const currentBeats = a.bar * bt.beatsPerBar + a.beatInBar;
        const lastNoteTimeBeats = (mem as any).lastPlayedTimeBeats ?? -999;
        const deltaBeats = currentBeats - lastNoteTimeBeats;
        
        let consecutiveCount = (mem as any).consecutiveNotesCount ?? 0;
        if (consecutiveCount >= 8) {
          if (deltaBeats < 2.0) {
            continue; // Force 2-beat rest breath carving
          } else {
            (mem as any).consecutiveNotesCount = 0;
            consecutiveCount = 0;
          }
        }

        const gateOk = isVocalLead && /verse|verso|chorus|coro|refrain|letra|preg|tema|head/.test(String(region?.kind ?? '').toLowerCase())
          ? true
          : melodyGate({
          motif, key, chord, profile: prof, treatment,
          barInPhrase: phraseBar,
          beatInBar: a.beatInBar,
          beatsPerBar: bt.beatsPerBar,
          layer, intensity,
          previous: mem.lastNote,
          seed: seedOf(t.id, a.bar, a.onsetIndex, 'gate'),
          styleId: regionStyleId,
          genreId: resolvedStyle.primaryGenre,
          sectionKind: String(region?.kind ?? 'verse'),
          spotlit,
        });
        if (!gateOk || !trajectoryGate) {
          if (deltaBeats > 1.0) {
            (mem as any).consecutiveNotesCount = 0;
          }
          continue;
        }

        (mem as any).lastPlayedTimeBeats = currentBeats;
        (mem as any).consecutiveNotesCount = consecutiveCount + 1;
      }

      const feel = applyFeel(g, {
        beatInBar: a.beatInBar,
        beatsPerBar: bt.beatsPerBar,
        role: prof.role as GrooveRole,
        accent: a.accent,
        seed: seedOf(t.id, a.bar, a.onsetIndex, Math.round(a.beatInBar * 96)),
        ensembleSeed: seedOf(a.bar, Math.round(a.beatInBar * 96), resolvedStyle.id, 'ensemble-breath'),
        bpm: bt.bpm,
        authoredMs: a.authoredMs,
        anticipated: a.anticipated,
        intensity,
        pocketAmount: culture?.authoredTimingOnly ? 0 : 0.5,
        authoredTimingOnly: !!culture?.authoredTimingOnly,
      });

      const stepKey = `${a.bar}-${Math.round(a.beatInBar * 96)}`;
      let jitterSec = feel.offsetMs / 1000;

      if (t.id === anchorTrackId) {
        anchorJitterMap.set(stepKey, jitterSec);
      } else if (anchorJitterMap.has(stepKey) && (prof.role === 'bass' || prof.role === 'comp' || prof.role === 'pad' || prof.role === 'stab' || prof.role === 'perc')) {
        const anchorJitter = anchorJitterMap.get(stepKey)!;
        // Rhythmic Magnetism: blend 70% toward anchor track's jitter, 30% own jitter
        jitterSec = 0.70 * anchorJitter + 0.30 * jitterSec;
      }

      const dragProf = resolvedStyle.contract.performanceIdioms?.dragProfile;
      const isCadence = (a.bar - (region ? region.start : 0) + 1) % phraseBars === 0;
      const roleStr = String(prof.role);
      const drag = dragOffset(roleStr, dragProf, rhythmicContext.cyclePosition, rhythmicContext.cycleLength, isCadence, secPerBeat);
      const rubato = resolvedStyle.contract.performanceIdioms?.spotlightLeadRubato ? spotlightLeadRubatoOffset(spotlitLead, prof.role, rhythmicContext.cyclePosition, rhythmicContext.cycleLength, secPerBeat, seedOf(t.id, a.bar, a.onsetIndex, 'rubato')) : 0;
      const cycleLen = Math.max(1, rhythmicContext.cycleLength);
      const phraseT = (((rhythmicContext.cyclePosition % cycleLen) + cycleLen) % cycleLen) / cycleLen;
      const tempoScale = dragProf?.affectsTempo && (roleStr === 'lead' || roleStr === 'melody' || roleStr === 'comp' || roleStr === 'pad')
        ? tempoMultiplierAt(phraseT, 'rubato-pull')
        : 1.0;
      const time = bt.start + ((a.beatInBar + feel.offsetBeats) * secPerBeat * tempoScale) + jitterSec + rubato + drag;

      const next = list[i + 1];
      let gapBeats = 4;
      if (next) {
        gapBeats = (next.bar - a.bar) * bt.beatsPerBar + next.beatInBar - a.beatInBar;
        if (gapBeats <= 0) gapBeats = 0.25;
      }
      const authoredBeats = (a.durationSteps / a.stepsPerBar) * bt.beatsPerBar;
      const effectiveBeats = prof.ring && prof.ring > authoredBeats
        ? Math.min(gapBeats, Math.max(authoredBeats, prof.ring))
        : authoredBeats;
      // The instrument's own sustain class sets a baseline length; the
      // articulation engine then scales it. Passing the articulation name here
      // too would apply the same shaping twice.
      const lenBeats = noteLengthBeats(prof, Math.max(0.05, effectiveBeats), gapBeats);
      const dur = Math.max(0.03, lenBeats * secPerBeat);

      const energyMap = resolvedStyle.contract.energyMappings[rhythmicContext.sectionEnergy];
      const base = 58 + energyMap.brightness * 62;
      const vel = Math.max(6, Math.min(127, Math.round(
        base * feel.velocityMult * (decision?.drive ?? 1),
      )));

      if (def.kit || def.drum) {
        const regionStart = region?.start ?? 0;
        const regionEnd = region?.end ?? regionStart + 1;
        const barInPhrase = culturalCyclePosition(a.bar - regionStart, resolvedStyle.contract.cycleLength);
        const sameBar = attacksByBar.get(a.bar) ?? [];

        let kv: KitVoicing;
        if (def.kit && resolvedStyle.contract.percussion.kitMode === 'none') continue;
        if (a.hitType && def.kit) {
          if (resolvedStyle.contract.percussion.allowedHitTypes.length && !resolvedStyle.contract.percussion.allowedHitTypes.includes(a.hitType)) continue;
          if (resolvedStyle.contract.percussion.forbidSectionCrash && a.hitType === 'crash' && a.bar === regionStart) continue;
          kv = authoredKitVoicing(a.hitType, a.accent);
        } else if (def.kit) {
          kv = kitVoicing({
            beatInBar: a.beatInBar,
            beatsPerBar: bt.beatsPerBar,
            accent: a.accent,
            barOnsets: sameBar.map(x => x.beatInBar),
            index: sameBar.indexOf(a),
            intensity,
            allowTomFills: resolvedStyle.contract.percussion.allowTomFills,
            allowSectionCrash: !resolvedStyle.contract.percussion.forbidSectionCrash,
            forbidBackbeat: resolvedStyle.contract.percussion.forbidWesternBackbeat,
            barInPhrase,
            sectionStart: a.bar === regionStart,
            sectionEnd: a.bar === regionEnd - 1,
            phraseEnd: barInPhrase === rhythmicContext.cycleLength - 1,
            flavour: flavourForStyle(resolvedStyle, t.instrumentId),
            rideFeel: usesRideStyle(resolvedStyle, String(region?.kind ?? 'verse'), intensity),
            seed: seedOf(t.id, a.bar, a.onsetIndex, 'kit'),
            transition: rhythmicContext.transition,
          });
        } else {
          kv = handPercVoicing(
            def.drum!, a.accent, intensity, seedOf(t.id, a.bar, a.onsetIndex, 'perc'), a.hitType,
            {
              instrumentId: t.instrumentId,
              styleId: resolvedStyle.id,
              beatInBar: a.beatInBar,
              beatsPerBar: bt.beatsPerBar,
              onsetIndex: a.onsetIndex,
              barInPhrase,
            },
          );
        }

        if (kv.gain <= 0) continue;

        const drumBase = 64 + energyMap.brightness * 58;
        const kvVel = Math.max(4, Math.min(127, Math.round(
          drumBase * (0.58 + 0.42 * feel.velocityMult) * kv.gain,
        )));
        const kitDur = kv.limb === 'crash' || kv.limb === 'openHat' || kv.limb === 'ride'
          ? Math.min(dur * 3, 1.2) : Math.min(dur, 0.25);
        const renderedDrumArticulation = kv.articulation || a.hitType || a.articulation;

        if (kv.flamMs) {
          notes.push({
            time: time - kv.flamMs / 1000, dur: 0.06, midi: kv.key,
            vel: Math.max(4, Math.round(kvVel * 0.45)),
            trackId: t.id, bar: a.bar, drum: true, articulation: renderedDrumArticulation,
          });
        }
        notes.push({ 
          time, 
          dur: kitDur, 
          midi: kv.key, 
          vel: kvVel, 
          trackId: t.id, 
          bar: a.bar, 
          drum: true, 
          articulation: renderedDrumArticulation 
        });
        continue;
      }

      /* ---- the three jobs ----------------------------------------------- */
      let pitches: number[];
      let rapidRun = false;
      let rapidRunScalePcs: number[] | undefined;

      if (isBass && culture?.avoidBassFoundation) {
        // In styles organized around drones and melody, a bass part is a
        // color/continuity layer rather than a mandatory Western root engine.
        const n = culturalDronePitch(culture, culturalTonicPc, prof, seedOf(t.id, a.bar, a.onsetIndex, 'bass-drone'));
        mem.lastNote = n;
        pitches = [n];
      } else if (isBass) {
        const n = bassNote({
          chord, next: nextChord, key, profile: prof, style: bassStyle,
          beatInBar: a.beatInBar, beatsPerBar: bt.beatsPerBar,
          onsetIndex: a.onsetIndex,
          onsetCount: (attacksByBar.get(a.bar) ?? []).length,
          approaching: !!nextChord && a.beatInBar > bt.beatsPerBar - 1.51,
          anticipated: a.anticipated,
          intensity,
          seed: seedOf(t.id, a.bar, a.onsetIndex, 'bass'),
          previous: mem.lastNote,
          rhythmicContext,
          approach: resolvedStyle.contract.approaches?.[t.role]?.id,
        });
        let bassPitches = Array.isArray(n) ? n : [n];
        if (a.pitchIntent === 'fifth' && bassPitches.length > 0) {
          const rootPc = chord.bassPc ?? chord.rootPc;
          const fifthPc = (rootPc + 7) % 12;
          const refMidi = bassPitches[0];
          const refPc = ((refMidi % 12) + 12) % 12;
          let diff = (fifthPc - refPc) % 12;
          if (diff > 6) diff -= 12;
          if (diff < -6) diff += 12;
          bassPitches = [foldToRange(refMidi + diff, prof)];
        } else if (a.pitchIntent === 'octave' && bassPitches.length > 0) {
          const octaveShift = bassPitches[0] + 12 <= prof.high ? 12 : -12;
          bassPitches = [foldToRange(bassPitches[0] + octaveShift, prof)];
        }
        mem.lastNote = bassPitches[bassPitches.length - 1];
        pitches = bassPitches;
      } else if (culturalHarmonyPattern) {
        pitches = celticWorld
          ? celticOpenHarmony(chord.rootPc, prof, intensity, seedOf(t.id, a.bar, a.onsetIndex, 'celtic-open'))
          : [culturalDronePitch(culture!, culturalTonicPc, prof, seedOf(t.id, a.bar, a.onsetIndex, 'drone'))];
        mem.last = pitches;
        mem.lastNote = pitches[pitches.length - 1] ?? mem.lastNote;
      } else if (isMelodic) {
        const phraseBar = (a.bar - (region ? region.start : 0) + 64) % phraseBars;
        const resolved = resolvedStyle;
        const progress = region ? (a.bar - region.start) / Math.max(1, region.end - region.start) : 0;
        const nextMeasure = sheet.measures[a.bar + 1];
        const nextChord = nextMeasure ? parseChord(nextMeasure.chord || 'C') : undefined;
        
        const { note: n, isLeap, rapidRun: shouldRapidRun, rapidRunScalePcs: rapidRunScalePcsResult } = melodyNote({
          motif, key, chord, profile: prof, treatment,
          barInPhrase: phraseBar,
          beatInBar: a.beatInBar,
          beatsPerBar: bt.beatsPerBar,
          layer, intensity,
          previous: mem.lastNote,
          seed: seedOf(t.id, a.bar, a.onsetIndex, 'mel'),
          styleId: regionStyleId,
          genreId: resolvedStyle.primaryGenre,
          sectionKind: String(region?.kind ?? 'verse'),
          spotlit,
          pitchSet: culture ? culturalPitchSet(culture, culturalTonicPc) : undefined,
          tonicPc: culture ? culturalTonicPc : undefined,
          snapToChord: culture ? culture.snapToChord : resolved.melody?.snapToChord,
          rangePerSection: resolved.melody?.rangePerSection,
          chordToneTargeting: resolved.melody?.chordToneTargeting,
          callAndResponse: resolved.melody?.callAndResponse,
          heterophonic: resolved.melody?.heterophonic,
          wasLeap: (mem as any).wasLeap,
          nextChord,
          phraseStage: trackPhraseMemories.get(t.id)?.developmentStage,
          progress,
        });
        rapidRun = !!shouldRapidRun;
        rapidRunScalePcs = rapidRunScalePcsResult;
        (mem as any).wasLeap = isLeap;
        const melodyPitches = Array.isArray(n) ? n : [n];
        let pitchesToPlay = [...melodyPitches];
        const isChorus = String(region?.kind ?? '').toLowerCase().includes('chorus');
        if (isChorus) {
          if (t.role === 'pad' || t.instrumentId?.includes('strings') || t.instrumentId?.includes('synth') || t.instrumentId === 'slow-strings') {
            pitchesToPlay = [...pitchesToPlay, ...pitchesToPlay.map(p => foldToRange(p + 12, prof))];
          } else if (t.role === 'bass') {
            pitchesToPlay = pitchesToPlay.map(p => foldToRange(p - 12, prof));
          }
        }
        mem.lastNote = melodyPitches[melodyPitches.length - 1];
        pitches = pitchesToPlay;
      } else {
        if (culture?.harmonyModel === 'fixed-cluster' && t.instrumentId === 'shō') {
          pitches = shoCluster(culturalTonicPc, prof, intensity);
          mem.last = pitches;
          mem.lastNote = pitches[pitches.length - 1] ?? mem.lastNote;
        } else {
          const { style, size } = styleFor(prof, t.instrumentId, chord, intensity, resolvedStyle);
          const avoid = occupied.get(a.bar);
          const currentPhrase = Math.floor((a.bar - (region?.start ?? 0)) / 4);
          const barInPhrase = ((a.bar - (region?.start ?? 0)) % 4 + 4) % 4;

          const shouldRevoice =
            !phraseState.currentVoicing ||
            phraseState.currentVoicing.chordSymbol !== a.chordSymbol ||
            phraseState.currentPhraseIndex !== currentPhrase ||
            a.performanceKind === 'variation' ||
            barInPhrase === 0;

          if (!shouldRevoice && phraseState.currentVoicing) {
            pitches = phraseState.currentVoicing.pitches;
          } else {
            pitches = voiceChord({
              chord, profile: prof, style, size,
              previous: mem.last,
              intensity,
              bassCovered: hasBass,
              avoid,
              seed: seedOf(t.id, a.bar, a.onsetIndex, 'voice'),
              rhythmicContext,
              approach: resolvedStyle.contract.approaches?.[t.role]?.id,
              genreId: resolvedStyle.primaryGenre,
              styleId: resolvedStyle.id,
              previousChord: phraseState.previousChord,
            });
            phraseState.currentVoicing = { chordSymbol: a.chordSymbol, pitches };
            phraseState.previousChord = chord;
            phraseState.currentPhraseIndex = currentPhrase;
          }
          if (a.registerOffset) {
            pitches = pitches.map(p => foldToRange(p + a.registerOffset!, prof));
          }
          mem.last = pitches;
          mem.lastNote = pitches[pitches.length - 1] ?? mem.lastNote;
          const acc = occupied.get(a.bar) ?? [];
          occupied.set(a.bar, acc.concat(pitches));
        }
      }


      const shift = decision?.register ?? 0;
      if (shift) {
        pitches = pitches.map(n => {
          const moved = n + shift;
          return moved >= prof.low && moved <= prof.high ? moved : n;
        });
      }

      /* ---- realization ---------------------------------------------------
         Up to this point the engine has decided *what* to play. Everything
         from here decides *how* it is played, and it all goes through one
         path: the articulation stack for this bar is resolved once, and the
         articulation engine turns each written attack into the notes, bends
         and CC messages the Faust physical model actually receives.

         The stack is layered, lowest priority first:
           1. the world contract's articulation grammar for this role
           2. the pattern's own authored articulations
           3. the chosen variant's articulation
         so a style-level "marcato" is overridden by a cell that says
         "arrastre", which is overridden by a cadence variant that says "fall".
      ------------------------------------------------------------------- */
      const grammarArticulations =
        resolvedStyle.contract.articulationGrammar[prof.role]
        ?? resolvedStyle.contract.articulationGrammar[String(t.role)]
        ?? resolvedStyle.contract.articulationGrammar.ensemble
        ?? [];
      const requestedArticulations = [
        grammarArticulations[0],
        ...(a.articulations ?? []),
        a.articulation,
        // Culturally authored ornaments and the improvisation grammar's rapid
        // run are ordinary articulations now, not a parallel code path.
        ...(culture ? (resolvedStyle.melody?.ornamentVocabulary ?? []).slice(0, 1) : []),
        rapidRun ? 'rapid-run' : undefined,
      ];
      const specs: ArticulationSpec[] = resolveSupportedArticulationStack(t.instrumentId, requestedArticulations);

      const activePitchSet = culture
        ? culturalPitchSet(culture, culturalTonicPc)
        : (rapidRunScalePcs ?? key.pcs);

      const isPlucked = prof.sustain === 'decaying' && (
        t.instrumentId?.includes('guitar') ||
        t.instrumentId?.includes('bass') ||
        t.instrumentId?.includes('ukulele') ||
        t.instrumentId?.includes('banjo') ||
        t.instrumentId?.includes('tres') ||
        t.instrumentId?.includes('lute') ||
        t.instrumentId?.includes('harp') ||
        t.instrumentId?.includes('sitar') ||
        t.instrumentId?.includes('pipa') ||
        t.instrumentId?.includes('guzheng')
      );
      const isUpstroke = a.articulation === 'upstroke' || specs.some(s => s.id === 'upstroke' || s.id === 'up');

      // Dynamic Strum Delay: Inversely map delay per string to overall chord velocity
      // Velocity 110 yields ~4ms delay per string; velocity 40 yields ~35ms delay per string
      const velRatio = Math.max(0, Math.min(1, (vel - 30) / 90));
      const dynamicStrumMs = Math.max(3, Math.min(45, 35 - velRatio * 31));

      pitches.forEach((midi, vi) => {
        let rollMs = 0;
        const stringIndex = isUpstroke ? (pitches.length - 1 - vi) : vi;
        if (isPlucked && pitches.length > 1) {
          rollMs = stringIndex * (dynamicStrumMs + rand01(seedOf(t.id, a.bar, a.onsetIndex, vi)) * 4);
        } else {
          const isStringsSection = t.instrumentId?.includes('strings') || t.instrumentId === 'slow-strings' || t.instrumentId === 'tremolo-strings';
          const divisiDelayMs = isStringsSection ? 18 : 0.6;
          rollMs = vi * (prof.sustain === 'decaying' || prof.sustain === 'short'
            ? (1.6 + rand01(seedOf(t.id, a.bar, a.onsetIndex, vi)) * 2.4)
            : divisiDelayMs);
        }
        let voiceTime = time + rollMs / 1000;

        // Ornaments belong to the voice that carries the line
        let voiceSpecs = vi === 0 ? [...specs] : specs.filter(x => x.family === 'duration' || x.family === 'attack');

        // A little touch vocabulary goes into the performance layer only when the
        // pattern did not author a specific technique. This keeps culturally authored
        // articulations authoritative while letting generic guitar/bass lines breathe
        // with real-world muted, picked and popped attacks.
        if (vi === 0 && !a.articulation && !(a.articulations?.length)) {
          const lowId = t.instrumentId.toLowerCase();
          const genre = `${resolvedStyle.id} ${resolvedStyle.primaryGenre}`.toLowerCase();
          const isChordString = isPlucked && /guitar|tres|cuatro|cavaquinho|charango|banjo|mandolin|ukulele|lute|sitar|pipa|guzheng/.test(lowId);
          const isBassString = isBass && /bass|bajo|contrabajo|fretless/.test(lowId);
          let touch: string | undefined;
          if (isChordString && /rock|funk|pop|reggae|ska|indie|disco|rnb/.test(genre)) {
            touch = a.accent < 0.5 ? 'palm-mute' : (a.accent > 0.9 ? 'pick' : undefined);
          } else if (isBassString && /funk|rock|pop|disco|rnb|gospel/.test(genre)) {
            touch = a.accent < 0.48 ? 'palm-mute' : (a.accent > 0.92 ? 'pop' : undefined);
          }
          if (touch) {
            const touchSpec = resolveInstrumentArticulation(t.instrumentId, touch);
            if (touchSpec) voiceSpecs = [...voiceSpecs, touchSpec];
          }
        }

        // Logarithmic Velocity Curve & Upstroke Wrist Mechanics
        let velocityTarget = Math.max(6, Math.min(127, Math.round(vel * (vi > 0 && vi < pitches.length - 1 ? 0.88 : 1))));
        if (isUpstroke && isPlucked && pitches.length > 1) {
          // Subtle velocity decay across higher strings on upstroke to simulate wrist movement against gravity
          const gravityFactor = 1.0 - (stringIndex / pitches.length) * 0.12;
          velocityTarget = Math.max(6, Math.round(velocityTarget * gravityFactor));
        }
        if (t.instrumentId?.includes('piano') || t.instrumentId?.includes('rhodes') || t.instrumentId?.includes('clav') || t.instrumentId?.includes('ep-')) {
          const normalized = velocityTarget / 127;
          velocityTarget = Math.max(4, Math.round(127 * Math.pow(normalized, 1.45)));
          
          // Pianistic Independence (Prompt 10): Left hand and Right hand strike asynchronously
          const isLh = midi <= 52;
          const staggerMs = isLh ? -8 : 12;
          voiceTime += staggerMs / 1000;
        }

        // Plucked Strings Palm Muting & Resistance
        let adjustedLenBeats = lenBeats;
        if (isPlucked && velocityTarget < 52) {
          adjustedLenBeats = lenBeats * (0.35 + 0.65 * (velocityTarget / 52));
        }

        // Woodwinds & Brass slurring vs tonguing
        const isWindOrBrass = prof.sustain === 'blown' || t.instrumentId?.includes('flute') || t.instrumentId?.includes('trumpet') || t.instrumentId?.includes('sax') || t.instrumentId?.includes('horn') || t.instrumentId?.includes('whistle');
        const lastEndTime = lastVoiceEndTimes.get(`${t.id}-${vi}`) ?? 0;
        const isLegatoSlur = isWindOrBrass && (voiceTime < lastEndTime);
        if (isLegatoSlur) {
          voiceSpecs.push({
            id: 'legato',
            family: 'duration',
            aliases: ['legato'],
            uses: ['note-length'],
            fidelity: 'faithful',
            durationScale: 1.25
          });
        }

        const realized = realizeArticulation({
          specs: voiceSpecs,
          profile: prof,
          midi,
          velocity: velocityTarget,
          lengthBeats: adjustedLenBeats,
          gapBeats,
          beatsPerBar: bt.beatsPerBar,
          secPerBeat,
          time: voiceTime,
          pitchSet: activePitchSet,
          expression: 0.55,
          context: rhythmicContext,
          seed: seedOf(t.id, a.bar, a.onsetIndex, vi, 'art'),
        });

        // Track voice end time for slurring detection
        const computedDur = realized.notes[0]?.durSeconds ?? (adjustedLenBeats * secPerBeat);
        lastVoiceEndTimes.set(`${t.id}-${vi}`, voiceTime + computedDur);

        // Ornaments: generate only for the primary voice of the line
        if (vi === 0) {
          const ornaments = generateStyleOrnaments(
            midi, a.beatInBar, a.patternId, a.articulation,
            resolvedStyle.melody?.ornamentVocabulary,
            activePitchSet, prof, seedOf(t.id, a.bar, a.onsetIndex, 'ornament'), rapidRun, prevNoteMidi, resolvedStyle.primaryGenre
          );
          ornaments.forEach(orn => {
             const ornTime = voiceTime + (orn.timeOffsetBeats * secPerBeat);
             notes.push({
                 time: ornTime,
                 dur: orn.durBeats * secPerBeat,
                 midi: orn.midi,
                 vel: Math.max(1, Math.round(vel * orn.velocityMult)),
                 trackId: t.id, bar: a.bar,
                 articulation: orn.articulation || a.articulation || 'grace'
             });
          });
        }

        // True Inter-Note Portamento / Slide trajectory
        const prevMidi = prevNoteMidi || midi;
        const delta = prevMidi - midi;
        const hasSlideArt = voiceSpecs.some(s => s.id === 'slide' || s.id === 'gliss' || s.id === 'portamento' || (s.family as string) === 'pitch');
        const dropPortamento = !!resolvedStyle.contract.performanceIdioms?.dropPortamento;

        let slideBend: PitchBendPoint[] | undefined = undefined;
        if (Math.abs(delta) > 0 && Math.abs(delta) <= 12 && (hasSlideArt || dropPortamento)) {
          const initialValue = Math.max(0, Math.min(16383, 8192 + delta * 4096));
          const slideDurationSec = Math.min(0.15, computedDur * 0.25);
          slideBend = [
            { offset: 0, value: initialValue },
            { offset: slideDurationSec, value: 8192 }
          ];
        }

        // Tape Wow & Flutter for Lo-Fi and Neo-Soul genres
        const genreName = (resolvedStyle.id || '').toLowerCase();
        const isLofi = genreName.includes('lofi') || genreName.includes('lo-fi') || genreName.includes('neo-soul');
        if (isLofi && isMelodic && vi === 0 && !slideBend) {
          const lfoFreq = 1.25;
          const centsDepth = 12;
          const totalPoints = Math.ceil(computedDur * 8);
          const lofiPoints: PitchBendPoint[] = [];
          for (let pIdx = 0; pIdx < totalPoints; pIdx++) {
            const pointTime = (pIdx / totalPoints) * computedDur;
            const wave = Math.sin(2 * Math.PI * lfoFreq * (voiceTime + pointTime));
            const lofiBendValue = Math.round(8192 + (wave * centsDepth * 8192) / (2 * 100)); // assumes bendRange of 2 semitones
            lofiPoints.push({ offset: pointTime, value: lofiBendValue });
          }
          slideBend = lofiPoints;
        }

        // Genre-native pitch idioms
        const idiomBend = vi === 0
          ? (isBass
            ? bassPitchBend({ midi, context: rhythmicContext, profile: prof, genreId: resolvedStyle.primaryGenre, role: t.role, seed: seedOf(t.id, a.bar, a.onsetIndex, 'bend') })
            : (isMelodic
              ? melodyPitchBend({ midi, context: rhythmicContext, profile: prof, genreId: resolvedStyle.primaryGenre, role: t.role, chord, key, seed: seedOf(t.id, a.bar, a.onsetIndex, 'bend'), previousMidi: prevNoteMidi, durationSec: computedDur })
              : undefined))
          : undefined;

        // Keyboard pedaling CC64
        const isKeyboard = t.instrumentId?.includes('piano') || t.instrumentId?.includes('rhodes');
        if (isKeyboard && vi === 0) {
          if (a.beatInBar < 0.1) {
            ccs.push({ time: voiceTime, trackId: t.id, cc: 64, value: 127 });
          }
          if (a.beatInBar >= bt.beatsPerBar - 0.5) {
            ccs.push({ time: voiceTime + computedDur - 0.05, trackId: t.id, cc: 64, value: 0 });
          }
        }

        // Woodwind/brass breath is a phrase, not a single on-switch. A tiny
        // inhale -> body -> release contour gives blown lines changing air pressure
        // without pretending to simulate the whole instrument.
        if (isWindOrBrass) {
          const startBreath = Math.round(38 + velocityTarget * 0.62);
          const expressiveLift = Math.round(6 + Math.max(0, midi - prof.centre) * 0.25);
          ccs.push({ time: voiceTime, trackId: t.id, cc: 2, value: startBreath });
          ccs.push({ time: voiceTime, trackId: t.id, cc: 74, value: startBreath });
          if (computedDur > 0.12) {
            const swellAt = voiceTime + Math.min(computedDur * 0.42, 0.16);
            const swell = Math.max(0, Math.min(127, startBreath + expressiveLift));
            ccs.push({ time: swellAt, trackId: t.id, cc: 2, value: swell });
            ccs.push({ time: swellAt, trackId: t.id, cc: 74, value: Math.min(127, swell + 3) });
            const releaseAt = voiceTime + Math.max(0.03, computedDur - Math.min(0.07, computedDur * 0.18));
            const release = Math.max(18, Math.round(swell * 0.78));
            ccs.push({ time: releaseAt, trackId: t.id, cc: 2, value: release });
            ccs.push({ time: releaseAt, trackId: t.id, cc: 74, value: Math.max(12, release - 4) });
          }
        }

        // Acoustic & World Percussion round robin and pitch drift
        const isPercussion = prof.sustain === 'percussive' || t.role === 'drums' || t.instrumentId === 'kick' || t.instrumentId === 'snare' || t.instrumentId === 'hats' || t.instrumentId === 'ride';
        if (isPercussion) {
          const rrSeed = seedOf(t.id, a.bar, a.onsetIndex, vi, 'rr');
          const rrPitchJitter = (rand01(rrSeed) - 0.5) * 0.16;
          midi += rrPitchJitter;
          velocityTarget = Math.max(1, Math.min(127, Math.round(velocityTarget * (0.95 + rand01(rrSeed ^ 0x3af9) * 0.1))));

          if (velocityTarget > 92 && (t.instrumentId === 'kick' || t.instrumentId === 'snare' || t.role === 'drums')) {
            const driftCents = Math.round((velocityTarget - 92) * 35);
            slideBend = [
              { offset: 0, value: 8192 + driftCents },
              { offset: 0.012, value: 8192 }
            ];
          }
        }

        realized.notes.forEach((n, ni) => {
          const isHonkyTonk = /honky|old-time|old_time|saloon/i.test(`${resolvedStyle.id} ${resolvedStyle.primaryGenre}`.toLowerCase());
          const isPiano = t.instrumentId === 'piano';
          if (isPiano && isHonkyTonk) {
            const detuneCents = 4 + rand01(seedOf(t.id, a.bar, a.onsetIndex, vi, 'honky')) * 8; // 4 to 12 cents
            const detuneSemitones = detuneCents / 100;
            
            // Left voice: detuned flat
            notes.push({
              time: n.time,
              dur: n.durSeconds,
              midi: n.midi - detuneSemitones,
              pitchBend: n.pitchBend ?? slideBend ?? (ni === 0 ? idiomBend : undefined),
              vel: Math.max(1, Math.round(n.velocity * 0.95)),
              trackId: t.id, bar: a.bar,
              articulation: ([...voiceSpecs].reverse().find(s => s.id)?.id || a.articulation),
            });
            
            // Right voice: detuned sharp
            notes.push({
              time: n.time + 0.002, // slight phase offset
              dur: n.durSeconds,
              midi: n.midi + detuneSemitones,
              pitchBend: n.pitchBend ?? slideBend ?? (ni === 0 ? idiomBend : undefined),
              vel: Math.max(1, Math.round(n.velocity * 0.95)),
              trackId: t.id, bar: a.bar,
              articulation: ([...voiceSpecs].reverse().find(s => s.id)?.id || a.articulation),
            });
            
            // Pan left and right
            ccs.push({ time: n.time, trackId: t.id, cc: 10, value: 20 });
            ccs.push({ time: n.time + 0.002, trackId: t.id, cc: 10, value: 108 });
          } else {
            let finalVel = n.velocity;
            const isYumba = voiceSpecs.some(s => s.id === 'yumba' || s.aliases.includes('yumba')) || (resolvedStyle.id?.includes('tango') && (a.beatInBar === 0 || a.beatInBar === 2));
            if (isYumba && t.instrumentId === 'piano') {
              finalVel = 127;
              ccs.push({ time: n.time, trackId: t.id, cc: 11, value: 127 });
              ccs.push({ time: n.time + 0.04, trackId: t.id, cc: 11, value: 25 });
              ccs.push({ time: n.time + n.durSeconds - 0.01, trackId: t.id, cc: 11, value: 127 });
            }

            let finalArticulation = [...voiceSpecs].reverse().find(s => s.id)?.id || a.articulation;
            const instLow = t.instrumentId.toLowerCase();
            const isStringComp = isPlucked && /guitar|tres|cuatro|cavaquinho|charango|banjo|mandolin|ukulele|lute|sitar|pipa|harp|guzheng/.test(instLow);
            const isBassTouch = isBass && /bass|bajo|contrabajo|fretless/.test(instLow);
            if (!finalArticulation && vi === 0 && isStringComp) {
              finalArticulation = a.accent < 0.52 ? 'ghost' : (a.accent > 0.86 ? 'pick' : 'pluck');
            } else if (!finalArticulation && vi === 0 && isBassTouch && a.accent < 0.55) {
              finalArticulation = 'palm-mute';
            }
            const isViolin = t.instrumentId === 'violin' || t.instrumentId?.includes('string');
            if (resolvedStyle.id?.includes('tango') && isViolin && Math.abs(a.beatInBar - 3.5) < 0.1) {
              finalArticulation = 'chicharra';
            }

            // Explicit Bellows Direction for free-reed instruments (bandoneón, accordion, concertina)
            const isBellows = /bandoneon|accordion|concertina/.test(instLow);
            let bellowsDirection: 'opening' | 'closing' | undefined = undefined;
            if (isBellows) {
              bellowsDirection = (/cerrar|closing|close|push|pushing/i.test(finalArticulation || ''))
                ? 'closing'
                : (/abrir|opening|open|pull|pulling/i.test(finalArticulation || ''))
                ? 'opening'
                : (a.bar % 2 === 0 ? 'opening' : 'closing');
            }

            // Section Glue for Salsa/Jazz Horns: per-voice detune (±3–6 cents) and timing offset (5–15ms)
            let noteTime = n.time;
            let noteMidi = n.midi;
            const isHornOrBrass = isWindOrBrass || /trumpet|trombone|sax|brass|horn/.test(instLow);
            const isLatinOrJazzHorn = isHornOrBrass && (/salsa|mambo|jazz|latin|timba|son|funk/.test(`${resolvedStyle.id} ${resolvedStyle.primaryGenre}`.toLowerCase()));
            if (isLatinOrJazzHorn) {
              const hornSeed = seedOf(t.id, a.bar, a.onsetIndex, vi, 'horn_glue');
              const detuneCents = (rand01(hornSeed) - 0.5) * 8; // ±4 cents
              noteMidi = n.midi + (detuneCents / 100);
              const timingJitterSec = (rand01(hornSeed ^ 0x4f3e) - 0.5) * 0.012; // ±6ms
              noteTime = Math.max(0, n.time + timingJitterSec);
            }

            notes.push({
              time: noteTime,
              dur: n.durSeconds,
              midi: noteMidi,
              pitchBend: n.pitchBend ?? slideBend ?? (ni === 0 ? idiomBend : undefined),
              vel: finalVel,
              trackId: t.id, bar: a.bar,
              articulation: finalArticulation,
              bellowsDirection,
            });

            // Bandoneón Sub-Bass Coupling (zinc reed growl) (Prompt Tango 1)
            if (t.instrumentId === 'bandoneon' && n.midi < 48) {
              notes.push({
                time: noteTime + 0.003,
                dur: n.durSeconds,
                midi: noteMidi + 12,
                pitchBend: n.pitchBend ?? slideBend ?? (ni === 0 ? idiomBend : undefined),
                vel: Math.max(1, Math.round(finalVel * 0.4)),
                trackId: t.id, bar: a.bar,
                articulation: 'sub-bass-coupling',
                bellowsDirection,
              });
            }
          }
        });

        for (const cc of realized.ccs) {
          ccs.push({ time: cc.time, trackId: t.id, cc: cc.cc, value: cc.value });
        }
      });
    }
  }

  /* ---- 4. track setup: physical parameters, level, position ---- */
  for (const t of tracks) {
    if (t.muted) continue;
    const def = INSTRUMENTS_BY_ID[t.instrumentId];
    if (!def) continue;
    const prof = voiceProfile(t.instrumentId);

    const trim = Math.pow(10, prof.trim / 20);
    const level = Math.max(0, Math.min(1, (t.muted ? 0 : t.volume) * trim));
    ccs.push({ time: 0, trackId: t.id, cc: 7, value: Math.round(Math.pow(level, 0.6) * 127) });
    ccs.push({ time: 0, trackId: t.id, cc: 10, value: Math.round((prof.pan * 0.5 + 0.5) * 127) });
    ccs.push({ time: 0, trackId: t.id, cc: 74, value: 64 });
    ccs.push({ time: 0, trackId: t.id, cc: 11, value: 127 });
    ccs.push({ time: 0, trackId: t.id, cc: 6, value: 2 });
  }

  /* ---- 5. automation: the mix follows the arrangement ---- */
  for (const t of tracks) {
    if (t.muted) continue;
    const prof = voiceProfile(t.instrumentId);
    for (const r of sheet.regions) {
      const d = decisions.get(`${t.id}|${r.id}`);
      if (!d) continue;
      const firstBar = bars[r.start];
      if (!firstBar) continue;
      const at = Math.max(0, firstBar.start - 0.03);
      ccs.push({ time: at, trackId: t.id, cc: 74, value: Math.round(d.brightness) });

      const lastBar = bars[Math.max(r.start, r.end - 1)];
      if (lastBar && r.end - r.start >= 4) {
        const trimLin = Math.pow(10, prof.trim / 20);
        const base = Math.max(0, Math.min(1, (t.muted ? 0 : t.volume) * trimLin));
        const shape = shapeScalarOf(r);
        const swell = isBuildSection(sheet.regions, r) ? 0.06 : -0.015;
        const span = lastBar.end - firstBar.start;
        const points: [number, number][] = [
          [firstBar.start, base * (1 - swell * 0.5)],
          [firstBar.start + span * 0.6, base * (1 + swell * 0.35 + shape * 0.04)],
          [lastBar.end - 0.05, base * (1 + swell)],
        ];
        for (const [when, value] of points) {
          ccs.push({
            time: Math.max(0, when),
            trackId: t.id,
            cc: 7,
            value: Math.round(Math.pow(Math.max(0, Math.min(1, value)), 0.6) * 127),
          });
        }
      }
    }
  }

  const isMonoTrack = (tId: string): boolean => {
    const t = tracks.find(tr => tr.id === tId);
    if (!t) return false;
    const role = (t.role || '').toLowerCase();
    const kind = (t.kind || '').toLowerCase();
    const instId = (t.instrumentId || t.instrument || '').toLowerCase();
    if (role === 'bass' || role === 'melody' || role === 'lead' || role === 'voice' || role === 'counterline') return true;
    if (kind === 'bass' || kind === 'voice' || kind === 'flute' || kind === 'sax' || kind === 'trumpet' || kind === 'horn' || kind === 'violin') return true;
    return /bass|flute|whistle|trumpet|sax|erhu|dizi|xiao|pipe|oboe|clarinet|monophonic|lead/.test(instId);
  };

  const sortedNotes = notes.sort((a, b) => a.time - b.time);
  const MIN_GAP = 0.008;
  const dropped = new Set<number>();
  const lastNoteIndexByPitch = new Map<string, number>();
  for (let idx = 0; idx < sortedNotes.length; idx++) {
    const n = sortedNotes[idx];
    const isMono = isMonoTrack(n.trackId);
    const key = isMono ? `${n.trackId}` : `${n.trackId}:${n.midi}`;
    const prevIdx = lastNoteIndexByPitch.get(key);
    if (prevIdx !== undefined) {
      const prev = sortedNotes[prevIdx];
      const available = n.time - prev.time - MIN_GAP;
      if (available < 0.02) {
        if (n.vel > prev.vel) {
          dropped.add(prevIdx);
        } else {
          dropped.add(idx);
          continue;
        }
      } else if (prev.time + prev.dur > n.time - MIN_GAP) {
        const isChokingArt = n.articulation?.includes('mute') || n.articulation?.includes('stac') || n.articulation?.includes('damp');
        const gap = isChokingArt ? 0.002 : MIN_GAP;
        prev.dur = Math.max(0.01, n.time - prev.time - gap);
      }
    }
    lastNoteIndexByPitch.set(key, idx);
  }
  const initialPlayable = dropped.size ? sortedNotes.filter((_, i) => !dropped.has(i)) : sortedNotes;

  // =========================================================================
  // MACRO ARRANGEMENT & DYNAMIC TENSION PASS (Prompt 14)
  // =========================================================================
  const regionByIdForTuning = new Map(sheet.regions.map(r => [r.id, r]));
  const trackInfoMap = Object.fromEntries(tracks.map(t => [t.id, { instrumentId: t.instrumentId, role: t.role }]));

  // 1. Pre-Chorus Squeeze (Stereo Width and High-pass on Bass/Drums)
  const preChorusOrBuildBars = new Set<number>();
  bars.forEach((b, barIdx) => {
    const kind = String(regionByIdForTuning.get(b.regionId)?.kind ?? '').toLowerCase();
    if (kind.includes('pre-chorus') || kind.includes('build')) {
      preChorusOrBuildBars.add(barIdx);
    }
  });

  for (const n of initialPlayable) {
    if (preChorusOrBuildBars.has(n.bar)) {
      ccs.push({ time: n.time, trackId: n.trackId, cc: 10, value: 64 }); // Mono / Narrow pan
      const tInfo = trackInfoMap[n.trackId];
      if (tInfo?.role === 'bass' || tInfo?.role === 'drums') {
        ccs.push({ time: n.time, trackId: n.trackId, cc: 11, value: 50 }); // HPF thin out volume
      }
    } else {
      const prevBar = bars[n.bar - 1];
      if (prevBar && preChorusOrBuildBars.has(n.bar - 1)) {
        const tInfo = trackInfoMap[n.trackId];
        ccs.push({ time: n.time, trackId: n.trackId, cc: 10, value: tInfo?.role === 'comp' ? 32 : 64 }); // return to normal pan
        if (tInfo?.role === 'bass' || tInfo?.role === 'drums') {
          ccs.push({ time: n.time, trackId: n.trackId, cc: 11, value: 127 }); // restore full volume
        }
      }
    }
  }

  // 2. Drop Chorus Mute (1 beat before Drop or Chorus)
  const chorusStartTimes = new Set<number>();
  bars.forEach((b, barIdx) => {
    const kind = String(regionByIdForTuning.get(b.regionId)?.kind ?? '').toLowerCase();
    const isChorus = kind.includes('chorus') || kind.includes('drop') || kind.includes('peak');
    const prevB = bars[barIdx - 1];
    const prevKind = prevB ? String(regionByIdForTuning.get(prevB.regionId)?.kind ?? '').toLowerCase() : '';
    const prevIsChorus = prevKind.includes('chorus') || prevKind.includes('drop') || prevKind.includes('peak');
    if (isChorus && prevB && !prevIsChorus) {
      chorusStartTimes.add(b.start);
    }
  });

  let filteredPlayable = initialPlayable;
  const mutedNotes = new Set<PerfNote>();
  for (const n of initialPlayable) {
    for (const cStartTime of chorusStartTimes) {
      const bpm = bars[n.bar]?.bpm ?? 120;
      const secPerBeat = 60 / bpm;
      const muteStart = cStartTime - secPerBeat; // 1 beat before drop
      const muteEnd = cStartTime;
      if (n.time >= muteStart && n.time < muteEnd) {
        const tInfo = trackInfoMap[n.trackId];
        if (tInfo?.role !== 'drums' && tInfo?.role !== 'voice') {
          mutedNotes.add(n);
        }
      }
    }
  }
  if (mutedNotes.size > 0) {
    filteredPlayable = initialPlayable.filter(n => !mutedNotes.has(n));
  }

  // 3. Cymbal Swells (preceding Chorus or Drop)
  const drumTracks = tracks.filter(t => t.role === 'drums');
  bars.forEach((b, barIdx) => {
    const nextB = bars[barIdx + 1];
    const nextKind = nextB ? String(regionByIdForTuning.get(nextB.regionId)?.kind ?? '').toLowerCase() : '';
    const isNextChorusOrDrop = nextKind.includes('chorus') || nextKind.includes('drop');
    if (isNextChorusOrDrop && nextB) {
      const secPerBeat = 60 / b.bpm;
      const barDur = 4 * secPerBeat;
      const swellStart = b.start + barDur - 2 * secPerBeat; // last 2 beats of section
      for (const dTr of drumTracks) {
        for (let step = 0; step < 8; step++) {
          const swellTime = swellStart + step * (2 * secPerBeat / 8);
          const velocity = Math.round(20 + (step / 7) * 95);
          filteredPlayable.push({
            time: swellTime,
            dur: 0.15,
            midi: 49, // Crash Cymbal
            vel: velocity,
            trackId: dTr.id,
            bar: barIdx,
            articulation: 'swell',
          });
        }
      }
    }
  });

  // 4. Automated Reverb Throws
  for (let i = 0; i < filteredPlayable.length; i++) {
    const n = filteredPlayable[i];
    const tInfo = trackInfoMap[n.trackId];
    if (tInfo?.role === 'lead' || tInfo?.role === 'melody') {
      const nextN = filteredPlayable.find((x, xi) => xi > i && x.trackId === n.trackId);
      const bpm = bars[n.bar]?.bpm ?? 120;
      const secPerBeat = 60 / bpm;
      const restDurationSec = nextN ? (nextN.time - (n.time + n.dur)) : 999;
      if (restDurationSec >= 2.0 * secPerBeat) {
        const throwTime = n.time + n.dur - 0.05;
        ccs.push({ time: throwTime, trackId: n.trackId, cc: 91, value: 110 });
        ccs.push({ time: throwTime + secPerBeat, trackId: n.trackId, cc: 91, value: 40 });
      }
    }
  }

  // Map ArrangementEngine base layer computations (microalignments, groove map, band interactions)
  const trackGroups = tracks.map(t => ({
    id: t.id,
    role: t.role,
    notes: filteredPlayable
      .filter(n => n.trackId === t.id)
      .map(n => ({
        ...n,
        quantizedTime: n.time,
        time: n.time,
        duration: n.dur,
        velocity: n.vel / 127,
        measure: n.bar,
        isFill: n.articulation === 'fill',
      })),
  }));

  const compiledTracks = compileTracks(trackGroups, sheet.worldId);
  const compiledNotesMap = new Map<string, Array<any>>();
  compiledTracks.forEach((ct: any) => {
    compiledNotesMap.set(ct.id, ct.notes || []);
  });

  const baseLayerNotes = filteredPlayable.filter(n => {
    const trackNotes = compiledNotesMap.get(n.trackId);
    if (!trackNotes) return true;
    const match = trackNotes.find((tn: any) => Math.abs(tn.time - n.time) < 0.001);
    return !(match && match.muted);
  });

  const processedNotes = generateTiming(
    baseLayerNotes.map(n => ({
      ...n,
      quantizedTime: n.time,
      measure: n.bar,
      velocity: n.vel / 127,
    })),
    sheet.worldId
  );

  const playable = processedNotes.map((pn: any) => ({
    ...pn,
    time: pn.time ?? pn.quantizedTime,
    vel: Math.max(1, Math.min(127, Math.round((pn.velocity ?? 1.0) * 127))),
    articulation: pn.articulation || pn.articulation,
  }));

  // =========================================================================
  // POST-PROCESSING PASS: SIDECHAIN COMPRESSION & FREQUENCY SEPARATION / EQ CARVING
  // =========================================================================
  // 1. Sidechain Ducking (Ducking Bass volume CC11 on Kick Drum transient)
  const kickHits = playable.filter(n => {
    const t = tracks.find(track => track.id === n.trackId);
    return t && (t.role === 'drums' || t.instrumentId === 'kick') && (n.midi === 36 || n.midi === 35);
  });
  const bassTracks = tracks.filter(t => t.role === 'bass');
  for (const bassTr of bassTracks) {
    for (const kick of kickHits) {
      // Duck bass volume (CC11) by 3.5 dB (down to 72) for 85ms on kick strike
      ccs.push({ time: kick.time, trackId: bassTr.id, cc: 11, value: 72 });
      ccs.push({ time: kick.time + 0.085, trackId: bassTr.id, cc: 11, value: 127 });
    }
  }

  // 2. Frequency Separation (Carving accompaniment high-mids/brightness CC74 when Soloist/Lead is active)
  const leadNotes = playable.filter(n => {
    const t = tracks.find(track => track.id === n.trackId);
    return t && (t.role === 'lead' || t.role === 'melody' || melodyLayer.has(t.id));
  });
  if (leadNotes.length > 0) {
    const compTracks = tracks.filter(t => t.role === 'comp' || t.role === 'pad');
    for (const compTr of compTracks) {
      for (const ln of leadNotes) {
        // Carve accompaniment frequencies by reducing brightness (CC74) to 74 during lead note
        ccs.push({ time: ln.time, trackId: compTr.id, cc: 74, value: 74 });
        ccs.push({ time: ln.time + ln.dur, trackId: compTr.id, cc: 74, value: 127 });
      }
    }
  }

  const lastNote = playable.reduce((m, n) => Math.max(m, n.time + n.dur), 0);
  const songEnd = bars[bars.length - 1]?.end ?? 0;
  // Resolve culturally-authored tuning once the final notes are known.
  // The live sink already did this independently; carrying the frequency here
  // makes offline export identical instead of silently reverting to 12-TET.
  const finalStyle = resolveStyle({ genreId: sheet.worldId, styleId: sheet.styleId ?? getCanonicalStyle(sheet.worldId).id });
  for (const n of playable) {
    const bar = bars[n.bar];
    const region = bar ? regionByIdForTuning.get(bar.regionId) : undefined;
    const resolved = region ? getResolvedSectionStyle(sheet, region) : finalStyle;
    const tuningId = resolved.harmony?.tuningSystem || resolved.contract.tuningSystem || '12-tet';
    const tuning = resolveTuningSystem(tuningId);
    const tonicChord = region?.chords?.[0];
    const tonicPc = tonicChord ? ((parseChord(tonicChord).rootPc ?? 0) as number) : 0;
    
    let chordSymbol = region?.chords?.[0] ?? 'C';
    if (sheet.measures[n.bar]?.chord) {
      chordSymbol = sheet.measures[n.bar].chord;
    }
    const chord = parseChord(chordSymbol);
    const tInfo = trackInfoMap[n.trackId];

    n.frequencyHz = tuning.getFrequencyHz(n.midi, tonicPc, {
      instrumentId: tInfo?.instrumentId,
      styleId: resolved.id,
      genreId: sheet.worldId,
      activeChordSymbol: chordSymbol,
      activeChordPc: chord.rootPc,
      activeChordIntervals: chord.intervals,
      articulation: n.articulation,
    });
  }

  const rawPerf: Performance = {
    notes: playable,
    ccs: ccs.sort((a, b) => a.time - b.time),
    bars,
    duration: songEnd,
    tail: Math.max(0.6, lastNote - songEnd + 0.4),
    blends: blendReports,
    worldId: sheet.worldId,
    trackInfo: Object.fromEntries(tracks.map(t => [t.id, { instrumentId: t.instrumentId, role: t.role }])),
  };

  return polishPerformance(applyEnsembleInteraction(rawPerf), { timingScale: 1, velocityScale: 1 });
}
