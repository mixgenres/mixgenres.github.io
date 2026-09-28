/**
 * TIERED COMPILATION & CELL-LEVEL CACHING ENGINE
 * ==============================================
 * Core principle: Cost should scale with the scope of the edit, not the size of the song.
 *
 * Tier 0: Structure (bars, skeleton, tempo map) - cached by structure fingerprint
 * Tier 1: Arrangement (pattern assignment per region x track) - cached by arrangement cell fingerprint
 * Tier 2: Performance (timed notes and content CCs per region x track) - cached by performance cell fingerprint
 * Tier 3: Mix (volume, pan, mute, solo, spotlight) - live path, never touches cached notes
 * Tier 4: Live Audio (per-track Elementary signal caching & single dirty-flag batching)
 */

import type { Sheet, Voice } from '../generators/arrange';
import { getResolvedSectionStyle } from '../generators/arrange';
import { shapeOf, type SectionShape } from '../generators/arrangement';
import type { Region, Measure, SpotlightMode } from '../../types';
import type {
  Performance,
  PerfNote,
  PerfCC,
  BarTime,
  CompileOptions,
} from './perform';
import {
  buildBarTimes,
  buildTransitionEvents,
  thinForSustain,
  isBuildSection,
  intensityOf,
} from './perform';
import { inferKey, parseChord, type KeyInfo } from '../theory/theory';
import { makeMotif, melodyNote, treatmentFor, type Motif } from '../generators/melody';
import { seedOf } from '../generators/groove';
import { shapeScalarOf } from '../metadata/energy';
import { applyEnsembleInteraction } from '../performance/ensembleInteraction';
import { polishPerformance } from '../performance/performanceQuality';
import { PATTERNS_BY_ID } from '../../data/genres';
import { INSTRUMENTS_BY_ID } from '../../data/instruments';
import { voiceProfile } from '../theory/instrumentProfile';
import { resolveStyle } from '../../data/styles/resolve';
import { translateRhythmToInstrument } from '../performance/musicSemantics';
import { getCanonicalStyle } from '../../data/styles/registry';
import { resolveTuningSystem } from '../theory/tuning';
import { getPerformanceGrammar } from '../performance/performanceGrammar';
import { interpretPattern } from '../performance/performanceInterpreter';
import { compilePhrasePerformance } from './phrase';
import {
  createInitialPhraseMemory,
  advancePhraseDevelopment,
} from '../performance/phraseMemory';

// ============================================================================
// DATA STRUCTURES (§5)
// ============================================================================

export interface CompiledStructure {
  bars: BarTime[];
  structureFingerprint: string;
}

export interface ArrangementCell {
  key: string;              // `${regionId}:${trackId}`
  inputFingerprint: string; // hash of Tier-1 fields
  regionId: string;
  trackId: string;
  detailsByBar: {
    relativeBar: number;
    details: any;
  }[];
}

export interface PerformanceCell {
  key: string;              // `${regionId}:${trackId}`
  inputFingerprint: string; // hash of ArrangementCell.inputFingerprint + Tier-2 feel dials
  regionId: string;
  trackId: string;
  notes: PerfNote[];
  ccs: PerfCC[];            // content CCs only (swells, pedal, breath, articulation) - no mix CCs
}

export interface MixState {
  volume: Record<string, number>;
  pan: Record<string, number>;
  muted: Record<string, boolean>;
  solo: Record<string, boolean>;
  spotlight: Record<string, SpotlightMode>;
}

export type EditScope =
  | { tier: 0 | 1 | 2; regions?: string[] }
  | { tier: 3; tracks: string[] }
  | { tier: 'none' };

// ============================================================================
// HASHING HELPERS
// ============================================================================

export function hashString(str: string): string {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0).toString(36);
}

// ============================================================================
// GLOBAL CACHES
// ============================================================================

import { LRUMap, registerCache } from '../util/lru';

let cachedStructure: CompiledStructure | null = null;
const arrangementCellCache = new LRUMap<string, ArrangementCell>(2000, 'arrangementCellCache');
const performanceCellCache = new LRUMap<string, PerformanceCell>(2000, 'performanceCellCache');
registerCache(arrangementCellCache);
registerCache(performanceCellCache);

export function clearEngineCache(): void {
  cachedStructure = null;
  arrangementCellCache.clear();
  performanceCellCache.clear();
}

export function invalidateRegionsInCache(regionIds: string[]): void {
  const set = new Set(regionIds);
  for (const key of arrangementCellCache.keys()) {
    const rId = key.split(':')[0];
    if (set.has(rId)) arrangementCellCache.delete(key);
  }
  for (const key of performanceCellCache.keys()) {
    const rId = key.split(':')[0];
    if (set.has(rId)) performanceCellCache.delete(key);
  }
}

export function invalidateTracksInCache(trackIds: string[]): void {
  const set = new Set(trackIds);
  for (const key of arrangementCellCache.keys()) {
    const tId = key.split(':')[1];
    if (set.has(tId)) arrangementCellCache.delete(key);
  }
  for (const key of performanceCellCache.keys()) {
    const tId = key.split(':')[1];
    if (set.has(tId)) performanceCellCache.delete(key);
  }
}

// ============================================================================
// TIER 0: STRUCTURE (§6.1)
// ============================================================================

export function computeStructureFingerprint(sheet: Sheet): string {
  const parts = [
    sheet.bpm,
    sheet.timeSignature ?? '4/4',
    sheet.tempoShift ?? '',
    sheet.regions
      .map(r => `${r.id}:${r.start}:${r.end}:${r.bars ?? (r.end - r.start)}:${r.bpm ?? ''}:${r.tempoShift ?? ''}`)
      .join('|'),
  ];
  return hashString(parts.join(';'));
}

export function compileStructure(sheet: Sheet): CompiledStructure {
  const fp = computeStructureFingerprint(sheet);
  if (cachedStructure && cachedStructure.structureFingerprint === fp) {
    return cachedStructure;
  }
  const bars = buildBarTimes(sheet);
  cachedStructure = { bars, structureFingerprint: fp };
  return cachedStructure;
}

// ============================================================================
// TIER 1: ARRANGEMENT CELL FINGERPRINT & ACCESS (§6.2)
// ============================================================================

export function computeArrangementCellFingerprint(
  sheet: Sheet,
  region: Region,
  track: Voice,
  partEnergy?: number,
  patternId?: string,
): string {
  const parts = [
    track.id,
    track.instrumentId ?? track.instrument,
    track.role,
    track.kind,
    (track.lensIds ?? []).join(','),
    region.id,
    (region.chords ?? []).join(','),
    region.energy ?? '',
    partEnergy ?? '',
    region.genre ?? sheet.worldId,
    region.styleId ?? '',
    region.kind ?? '',
    region.formKey ?? '',
    region.bars ?? (region.end - region.start),
    patternId ?? sheet.arrangement[region.id]?.[track.id] ?? '',
    sheet.generationSeed ?? 0,
    JSON.stringify(sheet.partLens?.[region.id]?.[track.id] ?? ''),
  ];
  return hashString(parts.join(';'));
}

export function getCachedArrangementCell(
  regionId: string,
  trackId: string,
  fingerprint: string,
): ArrangementCell | undefined {
  const key = `${regionId}:${trackId}`;
  const cell = arrangementCellCache.get(key);
  if (cell && cell.inputFingerprint === fingerprint) {
    return cell;
  }
  return undefined;
}

export function putArrangementCell(cell: ArrangementCell): void {
  arrangementCellCache.set(cell.key, cell);
}

// ============================================================================
// TIER 2: PERFORMANCE CELL FINGERPRINT & ACCESS (§6.3)
// ============================================================================

export function computePerformanceCellFingerprint(
  arrFingerprint: string,
  effectiveBpm: number,
): string {
  return hashString(`${arrFingerprint};${effectiveBpm}`);
}

// ============================================================================
// TIER 3: MIX STATE (§6.5)
// ============================================================================

export function createInitialMixState(sheet: Sheet): MixState {
  const volume: Record<string, number> = {};
  const pan: Record<string, number> = {};
  const muted: Record<string, boolean> = {};
  const solo: Record<string, boolean> = {};
  const spotlight: Record<string, SpotlightMode> = {};

  for (const t of sheet.tracks) {
    volume[t.id] = t.volume ?? 0.8;
    pan[t.id] = t.pan ?? 0;
    muted[t.id] = !!t.muted;
    solo[t.id] = !!t.solo;
    spotlight[t.id] = t.spotlight ?? 'auto';
  }

  return { volume, pan, muted, solo, spotlight };
}

export function syncMixStateWithSheet(mix: MixState, sheet: Sheet): MixState {
  const next = { ...mix };
  for (const t of sheet.tracks) {
    if (next.volume[t.id] === undefined) next.volume[t.id] = t.volume ?? 0.8;
    if (next.pan[t.id] === undefined) next.pan[t.id] = t.pan ?? 0;
    if (next.muted[t.id] === undefined) next.muted[t.id] = !!t.muted;
    if (next.solo[t.id] === undefined) next.solo[t.id] = !!t.solo;
    if (next.spotlight[t.id] === undefined) next.spotlight[t.id] = t.spotlight ?? 'auto';
  }
  return next;
}

// ============================================================================
// TIER 2: REALIZE PERFORMANCE CELL (§6.3)
// ============================================================================

interface RealizeCellParams {
  sheet: Sheet;
  structure: CompiledStructure;
  region: Region;
  track: Voice;
  measures: Measure[];
  key: KeyInfo;
  motif: Motif;
  melodyLayer: Map<string, number>;
  transitionEvents: Map<number, any>;
  shape: SectionShape;
}

export function realizePerformanceCell(params: RealizeCellParams): PerformanceCell {
  const {
    sheet,
    structure,
    region,
    track: t,
    measures,
    key,
    motif,
    transitionEvents,
  } = params;

  const cellKey = `${region.id}:${t.id}`;
  const def = INSTRUMENTS_BY_ID[t.instrumentId];
  const prof = voiceProfile(t.instrumentId);
  const isDrum = !!def?.kit || !!def?.drum;
  let canAnticipate = prof.role === 'bass' || prof.role === 'comp' || prof.role === 'stab';
  const phraseBars = motif.phraseBars ?? 4;
  const bars = structure.bars;

  const notes: PerfNote[] = [];
  const ccs: PerfCC[] = [];

  if (!def) {
    return {
      key: cellKey,
      inputFingerprint: '',
      regionId: region.id,
      trackId: t.id,
      notes,
      ccs,
    };
  }

  // 1. Gather attacks for this track across the region's measures
  const attacks: any[] = [];
  const mem = createInitialPhraseMemory();
  const sectionStyle = getResolvedSectionStyle(sheet, region);
  const grammar = getPerformanceGrammar(sectionStyle, prof.role);

  const isSalsaTimba = /salsa|timba/i.test(region.styleId || '') || /salsa|timba/i.test(sectionStyle.primaryGenre || '');
  if (isSalsaTimba) {
    const is32 = /3-2/i.test(sectionStyle.rhythm?.timelineClave ?? '');
    if (!is32) {
      canAnticipate = false; // in 2-3 clave, disable anticipation so chord changes are played on-time
    }
  }

  const regionMeasures = measures.filter(m => m.regionId === region.id);

  regionMeasures.forEach((m, barRelIdx) => {
    const barIndex = region.start + barRelIdx;
    const bt = bars[barIndex];
    if (!bt) return;

    const nextMeasure = measures[barIndex + 1];
    const isSectionStart = barRelIdx === 0;
    const isSectionEnd = barRelIdx === regionMeasures.length - 1;

    // Gather ensemble context in this bar
    const kickTimesInBar: number[] = [];
    const leadActiveBeats: [number, number][] = [];
    const otherAccentsInBar: number[] = [];
    const occupiedSubdivisions: number[] = [];
    const trackRoleMap: Record<string, string> = {};

    for (const otherTrack of sheet.tracks) {
      if (otherTrack.muted) continue;
      const detail = m.patternDetailsByTrack?.[otherTrack.id];
      if (!detail) continue;
      const oProf = voiceProfile(otherTrack.instrumentId);
      trackRoleMap[otherTrack.id] = oProf.role;

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
        if (oProf.role === 'kick' || oProf.role === 'perc' || /kick|bombo|bass_drum/i.test(otherTrack.instrumentId) || hit === 'kick') {
          kickTimesInBar.push(bInB);
        }
        if (oProf.role === 'lead') {
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
      activeTrackIds: sheet.tracks.filter(tr => !tr.muted).map(tr => tr.id),
      trackRoleMap,
    };

    const d = m.patternDetailsByTrack?.[t.id];
    if (!d) return;

    const rawPattern = d.patternId ? PATTERNS_BY_ID[d.patternId] : undefined;
    const transition = transitionEvents.get(barIndex);

    const barInPhrase = ((barIndex - region.start) % phraseBars + phraseBars) % phraseBars;
    const phraseIndex = Math.floor((barIndex - region.start) / phraseBars);
    const isPhraseStart = barInPhrase === 0;
    const isPhraseEnd = barInPhrase === phraseBars - 1;
    const isCadenceBar = isPhraseEnd || (nextMeasure && nextMeasure.regionId !== m.regionId);

    advancePhraseDevelopment(
      mem,
      phraseIndex,
      grammar.phraseDevelopment,
      isCadenceBar,
      seedOf(t.id, barIndex, 'dev-advance'),
      prof.role
    );

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
        sectionKind: region.kind,
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
        attacks.push({
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
      return;
    }

    if (mem.developmentStage === 'rest') return;

    const perf = (d as any).perf;
    let onsets = perf?.onsets ?? d.onsetGrid ?? [];
    if (!onsets.length) return;
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

    const staged = onsets.map((step: number, i: number) => ({
      beatInBar: (step / stepsPerBar) * bt.beatsPerBar,
      accent: accents[i] ?? 0.78,
    }));
    const melodicVoice = def.voicing === 'single' && prof.role !== 'bass' && prof.role !== 'pad';
    const percussiveVoice = !!def.kit || !!def.drum;
    const keep = melodicVoice || percussiveVoice
      ? staged.map(() => true)
      : thinForSustain(prof, staged, bt.beatsPerBar, intensityOf(region));

    onsets.forEach((step: number, i: number) => {
      if (!keep[i]) return;
      const beatInBar = (step / stepsPerBar) * bt.beatsPerBar;
      const lastHalfBeat = beatInBar >= bt.beatsPerBar - 0.51;
      const chordChanges = !!nextMeasure && nextMeasure.chord !== m.chord;
      const anticipated = canAnticipate && lastHalfBeat && chordChanges;
      attacks.push({
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
  });

  // 2. Motif phrase seeding for melody / lead tracks
  const isMelodicSingle = def.voicing === 'single' && prof.role !== 'bass' && !def.kit && !def.drum;
  if (isMelodicSingle) {
    const isVoice = prof.role === 'lead' && /voice|choir|coro/i.test(t.instrumentId);
    if (prof.role === 'lead' || isVoice) {
      const kind = String(region.kind ?? '').toLowerCase();
      const vocalSection = /verse|verso|chorus|coro|refrain|letra|preg|tema|head/.test(kind);
      const soloSection = /solo|trading|instrumental|falseta|variaci|descarga|mambo/.test(kind);
      const shouldPhrase = isVoice ? vocalSection : (vocalSection || soloSection);

      if (shouldPhrase) {
        regionMeasures.forEach((_, barRelIdx) => {
          const barIndex = region.start + barRelIdx;
          const bt = bars[barIndex];
          if (!bt) return;

          const phraseBar = ((barIndex - region.start) % phraseBars + phraseBars) % phraseBars;
          const barStart = phraseBar * bt.beatsPerBar;
          const barEnd = barStart + bt.beatsPerBar;
          const phraseNotes = motif.notes.filter(n => n.pos >= barStart && n.pos < barEnd);

          for (let mi = 0; mi < phraseNotes.length; mi++) {
            const mn = phraseNotes[mi];
            const beatInBar = mn.pos - barStart;
            const exists = attacks.some(a => a.bar === barIndex && Math.abs(a.beatInBar - beatInBar) < 0.08);
            if (exists) continue;
            attacks.push({
              trackId: t.id,
              bar: barIndex,
              beatInBar,
              accent: Math.max(0.62, Math.min(1, mn.weight ?? 0.75)),
              durationSteps: beatInBar < bt.beatsPerBar - 0.5 ? 2 : 1,
              stepsPerBar: 16,
              authoredMs: 0,
              onsetIndex: 1000 + mi,
              chordSymbol: measures[barIndex]?.chord ?? 'Am',
              anticipated: false,
              patternId: 'generated-motif-phrase',
              styleId: region.styleId,
            });
          }
        });
      }
    }
  }

  // 3. Sort attacks and realize notes & content CCs
  attacks.sort((a, b) => a.bar - b.bar || a.beatInBar - b.beatInBar);

  const isBass = prof.role === 'bass';

  for (let i = 0; i < attacks.length; i++) {
    const a = attacks[i];
    const bt = bars[a.bar];
    if (!bt) continue;

    const secPerBeat = 60 / bt.bpm;
    const baseTime = bt.start + a.beatInBar * secPerBeat;
    const chord = a.chordSymbol ?? measures[a.bar]?.chord ?? 'Am';
    const parsedChord = parseChord(chord);
    const resolvedStyle = getResolvedSectionStyle(sheet, region);
    const tuningId = resolvedStyle.harmony?.tuningSystem || resolvedStyle.contract.tuningSystem || '12-tet';
    const tuningSystem = resolveTuningSystem(tuningId);
    const nextMeasureForNote = measures[a.bar + 1];

    // Dynamic pitch selection per role. The fallback compiler used to collapse
    // nearly every single-note instrument to the chord root. Give it the same
    // phrase-aware line vocabulary as the main performance path.
    let midiValues: number[] = [];
    let translatedArticulation: string | undefined;
    let translatedHitType = a.hitType;
    const rhythmTranslation = (a.hitType || a.articulation)
      ? translateRhythmToInstrument({
          instrumentId: t.instrumentId,
          sourceHitType: a.hitType,
          sourceArticulation: a.articulation,
          accent: a.accent,
          beatInBar: a.beatInBar,
          beatsPerBar: bt.beatsPerBar,
          styleId: a.styleId,
          genreId: resolvedStyle.primaryGenre,
          seed: seedOf(t.id, a.bar, a.onsetIndex, 'tier2-rhythm'),
        })
      : undefined;
    if (rhythmTranslation) {
      translatedArticulation = rhythmTranslation.articulation;
      translatedHitType = rhythmTranslation.hitType || translatedHitType;
    }

    if (def.kit || def.drum) {
      const hit = translatedHitType || 'snare';
      let mVal = hit === 'kick' ? (def.drum?.low ?? 36)
        : hit === 'hat' ? (def.drum?.high ?? 42)
        : hit === 'snare' ? (def.drum?.mid ?? 38)
        : (def.drum?.mid ?? 38);

      if (def.kitComponents && def.kitComponents.length > 0) {
        const search = hit.toLowerCase();
        const comp = def.kitComponents.find(c =>
          c.id.toLowerCase() === search ||
          c.id.toLowerCase().includes(search) ||
          c.name.toLowerCase().includes(search) ||
          c.strikeZones?.some(z => search.includes(z))
        );
        if (comp) mVal = comp.midi;
      }
      midiValues = [mVal];
    } else if (isBass) {
      const rootMidi = 36 + ((parsedChord.rootPc ?? 0) % 12);
      const fifthMidi = rootMidi + 7;
      const chordThird = parsedChord.intervals.find(iv => iv === 3 || iv === 4);
      const beatStrong = Math.abs(a.beatInBar - Math.round(a.beatInBar)) < 0.08 && Math.round(a.beatInBar) % 2 === 0;
      const nextChord = nextMeasureForNote ? parseChord(nextMeasureForNote.chord) : undefined;
      if (a.anticipated && nextChord) {
        midiValues = [36 + ((nextChord.rootPc ?? 0) % 12)];
      } else if (beatStrong) {
        midiValues = [rootMidi];
      } else if (a.pitchIntent === 'fifth' || (!a.pitchIntent && a.accent > 0.78)) {
        midiValues = [fifthMidi];
      } else if (chordThird !== undefined && (a.pitchIntent === 'chord-tone' || a.onsetIndex % 3 === 1)) {
        midiValues = [rootMidi + chordThird];
      } else if (a.pitchIntent === 'octave') {
        midiValues = [rootMidi + 12];
      } else if (nextChord && Math.abs((nextChord.rootPc ?? 0) - (parsedChord.rootPc ?? 0)) > 0 && a.beatInBar >= bt.beatsPerBar - 0.8) {
        const nextRoot = 36 + ((nextChord.rootPc ?? 0) % 12);
        const direction = Math.sign(nextRoot - rootMidi) || 1;
        midiValues = [rootMidi + Math.max(-2, Math.min(2, nextRoot - rootMidi - direction))];
      } else {
        midiValues = [rootMidi];
      }
    } else if (def.voicing === 'single') {
      const beatPhase = a.beatInBar;
      const treatment = treatmentFor(String(region.kind ?? 'verse'), Math.max(0, Math.min(1, intensityOf(region))), a.styleId || region.styleId, resolvedStyle.primaryGenre);
      const melodic = melodyNote({
        motif,
        key,
        chord: parsedChord,
        profile: prof,
        treatment,
        barInPhrase: ((a.bar - region.start) % phraseBars + phraseBars) % phraseBars,
        beatInBar: beatPhase,
        beatsPerBar: bt.beatsPerBar,
        layer: 0,
        intensity: Math.max(0, Math.min(1, intensityOf(region))),
        previous: notes.length ? notes[notes.length - 1].midi : prof.centre,
        seed: seedOf(t.id, a.bar, a.onsetIndex, 'tier2-melody'),
        styleId: a.styleId || region.styleId,
        genreId: resolvedStyle.primaryGenre,
        sectionKind: region.kind,
        pitchSet: undefined,
        tonicPc: key.tonicPc,
        snapToChord: true,
        chordToneTargeting: true,
        nextChord: nextMeasureForNote ? parseChord(nextMeasureForNote.chord) : undefined,
        phraseStage: undefined,
      });
      midiValues = Array.isArray(melodic.note) ? melodic.note : [melodic.note];
    } else {
      const root = 48 + ((parsedChord.rootPc ?? 0) % 12);
      const intervals = parsedChord.intervals.length > 4 ? parsedChord.intervals.slice(0, 4) : parsedChord.intervals;
      midiValues = intervals.map(iv => root + iv);
    }

    const vel = Math.max(1, Math.min(127, Math.round(90 * a.accent)));
    const durBeats = Math.max(0.25, (a.durationSteps ?? 1) / (a.stepsPerBar ?? 16) * bt.beatsPerBar);
    const durSeconds = durBeats * secPerBeat;

    const isBellows = /bandoneon|accordion|concertina/.test((t.instrumentId || '').toLowerCase());
    const finalArt = translatedArticulation || a.articulation;
    let bellowsDirection: 'opening' | 'closing' | undefined = undefined;
    if (isBellows) {
      bellowsDirection = (/cerrar|closing|close|push|pushing/i.test(finalArt || ''))
        ? 'closing'
        : (/abrir|opening|open|pull|pulling/i.test(finalArt || ''))
        ? 'opening'
        : (a.bar % 2 === 0 ? 'opening' : 'closing');
    }

    for (let vi = 0; vi < midiValues.length; vi++) {
      const midi = midiValues[vi];
      const tonicPc = (parsedChord.rootPc ?? 0) as number;
      const freqHz = tuningSystem.getFrequencyHz(midi, tonicPc);

      notes.push({
        time: baseTime,
        dur: durSeconds,
        midi,
        frequencyHz: freqHz,
        vel,
        trackId: t.id,
        bar: a.bar,
        articulation: finalArt,
        bellowsDirection,
      });

      // Keyboard pedaling CC64
      const isKeyboard = t.instrumentId?.includes('piano') || t.instrumentId?.includes('rhodes');
      if (isKeyboard && vi === 0) {
        if (a.beatInBar < 0.1) {
          ccs.push({ time: baseTime, trackId: t.id, cc: 64, value: 127 });
        }
        if (a.beatInBar >= bt.beatsPerBar - 0.5) {
          ccs.push({ time: baseTime + durSeconds - 0.05, trackId: t.id, cc: 64, value: 0 });
        }
      }

      // Wind breath control CC2 & CC74
      const isWind = prof.sustain === 'blown' || /flute|sax|trumpet|horn|oboe|clarinet/.test(t.instrumentId);
      if (isWind && vi === 0) {
        const breathVal = Math.round(50 + vel * 0.55);
        ccs.push({ time: baseTime, trackId: t.id, cc: 2, value: breathVal });
        ccs.push({ time: baseTime, trackId: t.id, cc: 74, value: breathVal });
      }
    }
  }

  const arrFingerprint = computeArrangementCellFingerprint(sheet, region, t);
  const perfFingerprint = computePerformanceCellFingerprint(arrFingerprint, btForRegion(region, structure));

  return {
    key: cellKey,
    inputFingerprint: perfFingerprint,
    regionId: region.id,
    trackId: t.id,
    notes,
    ccs,
  };
}

function btForRegion(region: Region, structure: CompiledStructure): number {
  return structure.bars[region.start]?.bpm ?? 120;
}

// ============================================================================
// ASSEMBLY: ASSEMBLE SONG FROM CELLS (§6.4)
// ============================================================================

export function assembleSong(
  cells: PerformanceCell[],
  structure: CompiledStructure,
  sheet: Sheet,
  mixState?: MixState,
): Performance {
  const bars = structure.bars;
  const tracks = sheet.tracks as Voice[];
  const songEnd = bars[bars.length - 1]?.end ?? 0;

  // Flatten all cached notes and content CCs
  const allNotes: PerfNote[] = [];
  const allCcs: PerfCC[] = [];

  for (const cell of cells) {
    for (const n of cell.notes) allNotes.push({ ...n });
    for (const c of cell.ccs) allCcs.push({ ...c });
  }

  // Sort notes by time
  allNotes.sort((a, b) => a.time - b.time);

  // Mono track overlap resolution
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

  const MIN_GAP = 0.008;
  const dropped = new Set<number>();
  const lastNoteIndexByPitch = new Map<string, number>();

  for (let idx = 0; idx < allNotes.length; idx++) {
    const n = allNotes[idx];
    const isMono = isMonoTrack(n.trackId);
    const key = isMono ? `${n.trackId}` : `${n.trackId}:${n.midi}`;
    const prevIdx = lastNoteIndexByPitch.get(key);
    if (prevIdx !== undefined) {
      const prev = allNotes[prevIdx];
      const available = n.time - prev.time - MIN_GAP;
      if (available < 0.02) {
        if (n.vel > prev.vel) {
          dropped.add(prevIdx);
        } else {
          dropped.add(idx);
          continue;
        }
      } else if (prev.time + prev.dur > n.time - MIN_GAP) {
        prev.dur = Math.max(0.01, available);
      }
    }
    lastNoteIndexByPitch.set(key, idx);
  }

  const playable = dropped.size ? allNotes.filter((_, i) => !dropped.has(i)) : allNotes;

  // Lightweight Sidechain Ducking overlay: Bass ducks on kick
  const kickHits = playable.filter(n => {
    const t = tracks.find(track => track.id === n.trackId);
    return t && (t.role === 'drums' || t.instrumentId === 'kick') && (n.midi === 36 || n.midi === 35);
  });
  const bassTracks = tracks.filter(t => t.role === 'bass');
  for (const bassTr of bassTracks) {
    for (const kick of kickHits) {
      allCcs.push({ time: kick.time, trackId: bassTr.id, cc: 11, value: 72 });
      allCcs.push({ time: kick.time + 0.085, trackId: bassTr.id, cc: 11, value: 127 });
    }
  }

  // Lightweight Frequency Separation overlay: Accompaniment carves on Lead
  const leadNotes = playable.filter(n => {
    const t = tracks.find(track => track.id === n.trackId);
    return t && (t.role === 'lead' || t.role === 'melody');
  });
  if (leadNotes.length > 0) {
    const compTracks = tracks.filter(t => t.role === 'comp' || t.role === 'pad');
    for (const compTr of compTracks) {
      for (const ln of leadNotes) {
        allCcs.push({ time: ln.time, trackId: compTr.id, cc: 74, value: 74 });
        allCcs.push({ time: ln.time + ln.dur, trackId: compTr.id, cc: 74, value: 127 });
      }
    }
  }

  // Track setup CCs at time 0 (CC 74, CC 11, CC 6) - CC7 / CC10 volume/pan are live mix parameters!
  for (const t of tracks) {
    const prof = voiceProfile(t.instrumentId);
    const trim = Math.pow(10, prof.trim / 20);
    const volVal = mixState?.volume[t.id] ?? t.volume ?? 0.8;
    const isMuted = mixState?.muted[t.id] ?? t.muted;
    const level = Math.max(0, Math.min(1, (isMuted ? 0 : volVal) * trim));
    const panVal = mixState?.pan[t.id] ?? t.pan ?? prof.pan;

    allCcs.push({ time: 0, trackId: t.id, cc: 7, value: Math.round(Math.pow(level, 0.6) * 127) });
    allCcs.push({ time: 0, trackId: t.id, cc: 10, value: Math.round((panVal * 0.5 + 0.5) * 127) });
    allCcs.push({ time: 0, trackId: t.id, cc: 74, value: 64 });
    allCcs.push({ time: 0, trackId: t.id, cc: 11, value: 127 });
    allCcs.push({ time: 0, trackId: t.id, cc: 6, value: 2 });
  }

  // Section automation: brightness & build section swells
  for (const t of tracks) {
    const prof = voiceProfile(t.instrumentId);
    for (const r of sheet.regions) {
      const firstBar = bars[r.start];
      if (!firstBar) continue;
      const at = Math.max(0, firstBar.start - 0.03);
      allCcs.push({ time: at, trackId: t.id, cc: 74, value: 64 });

      const lastBar = bars[Math.max(r.start, r.end - 1)];
      if (lastBar && r.end - r.start >= 4) {
        const trimLin = Math.pow(10, prof.trim / 20);
        const base = Math.max(0, Math.min(1, (t.volume ?? 0.8) * trimLin));
        const shape = shapeScalarOf(r);
        const swell = isBuildSection(sheet.regions, r) ? 0.06 : -0.015;
        const span = lastBar.end - firstBar.start;
        const points: [number, number][] = [
          [firstBar.start, base * (1 - swell * 0.5)],
          [firstBar.start + span * 0.6, base * (1 + swell * 0.35 + shape * 0.04)],
          [lastBar.end - 0.05, base * (1 + swell)],
        ];
        for (const [when, value] of points) {
          allCcs.push({
            time: Math.max(0, when),
            trackId: t.id,
            cc: 7,
            value: Math.round(Math.pow(Math.max(0, Math.min(1, value)), 0.6) * 127),
          });
        }
      }
    }
  }

  // Cultural tuning frequencies
  const finalStyle = resolveStyle({ genreId: sheet.worldId, styleId: sheet.styleId ?? getCanonicalStyle(sheet.worldId).id });
  const regionByIdForTuning = new Map(sheet.regions.map(r => [r.id, r]));
  for (const n of playable) {
    const bar = bars[n.bar];
    const region = bar ? regionByIdForTuning.get(bar.regionId) : undefined;
    const resolved = region ? getResolvedSectionStyle(sheet, region) : finalStyle;
    const tuningId = resolved.harmony?.tuningSystem || resolved.contract.tuningSystem || '12-tet';
    const tuning = resolveTuningSystem(tuningId);
    const tonicChord = region?.chords?.[0];
    const tonicPc = tonicChord ? ((parseChord(tonicChord).rootPc ?? 0) as number) : 0;
    n.frequencyHz = tuning.getFrequencyHz(n.midi, tonicPc);
  }

  const lastNote = playable.reduce((m, n) => Math.max(m, n.time + n.dur), 0);

  const rawPerf: Performance = {
    notes: playable,
    ccs: allCcs.sort((a, b) => a.time - b.time),
    bars,
    duration: songEnd,
    tail: Math.max(0.6, lastNote - songEnd + 0.4),
    blends: {},
    worldId: sheet.worldId,
    trackInfo: Object.fromEntries(tracks.map(t => [t.id, { instrumentId: t.instrumentId, role: t.role }])),
  };

  const humanScale = 1;
  const phrasePerf = compilePhrasePerformance(rawPerf);
  return polishPerformance(applyEnsembleInteraction(phrasePerf), { timingScale: humanScale, velocityScale: humanScale });
}

// ============================================================================
// TIERED COMPILE PIPELINE (§6, §8)
// ============================================================================

export interface TieredCompileOptions extends CompileOptions {
  focusedRegionId?: string;
  mixState?: MixState;
  eagerOnly?: boolean;
}

export function tieredCompile(sheet: Sheet, opts: TieredCompileOptions = {}): Performance {
  const structure = compileStructure(sheet);

  const tracks = sheet.tracks as Voice[];
  const allChords = sheet.measures.map(m => m.chord);
  const key: KeyInfo = inferKey(allChords.length ? allChords : ['Am']);
  const motif: Motif = makeMotif(
    seedOf(sheet.id, sheet.worldId, sheet.title, allChords.join(',')),
    structure.bars[0]?.beatsPerBar ?? 4,
    sheet.styleId,
    sheet.worldId,
  );
  const transitionEvents = buildTransitionEvents(sheet);

  const melodicTracks = tracks.filter(t => {
    const d = INSTRUMENTS_BY_ID[t.instrumentId];
    const pr = voiceProfile(t.instrumentId);
    return d && !d.kit && !d.drum && d.voicing === 'single' && pr.role !== 'bass';
  });
  const melodyLayer = new Map<string, number>();
  melodicTracks.forEach((t, i) => melodyLayer.set(t.id, i));

  // Determine eager vs lazy regions based on playhead / focused region
  const regionIds = sheet.regions.map(r => r.id);
  const focusedIndex = opts.focusedRegionId
    ? regionIds.indexOf(opts.focusedRegionId)
    : 0;
  const activeIndex = focusedIndex >= 0 ? focusedIndex : 0;

  // Eager regions: current + next 1-2 regions
  const eagerRegionSet = new Set<string>();
  for (let offset = 0; offset <= 2; offset++) {
    const rIdx = (activeIndex + offset) % regionIds.length;
    eagerRegionSet.add(regionIds[rIdx]);
  }

  const cells: PerformanceCell[] = [];

  for (const region of sheet.regions) {
    const isEager = !opts.eagerOnly || eagerRegionSet.has(region.id);
    const shape = shapeOf(sheet.regions, sheet.regions.indexOf(region), intensityOf);

    for (const track of tracks) {
      if (track.muted) continue;
      const cellKey = `${region.id}:${track.id}`;
      const arrFingerprint = computeArrangementCellFingerprint(sheet, region, track);
      const perfFingerprint = computePerformanceCellFingerprint(
        arrFingerprint,
        structure.bars[region.start]?.bpm ?? 120
      );

      const cached = performanceCellCache.get(cellKey);
      if (cached && cached.inputFingerprint === perfFingerprint) {
        cells.push(cached);
        continue;
      }

      if (!isEager && cached) {
        // Use cached version even if not yet warmed for lazy region
        cells.push(cached);
        continue;
      }

      // Compute fresh PerformanceCell
      const newCell = realizePerformanceCell({
        sheet,
        structure,
        region,
        track,
        measures: sheet.measures,
        key,
        motif,
        melodyLayer,
        transitionEvents,
        shape,
      });

      performanceCellCache.set(cellKey, newCell);
      cells.push(newCell);
    }
  }

  return assembleSong(cells, structure, sheet, opts.mixState);
}
