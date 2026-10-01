import type { Performance, PerfNote } from '../../src/engine/band/performanceData.ts';
import type { Sheet } from '../../src/engine/sheet/sheet.ts';
import { parseChord, scalePcsForMode } from '../../src/engine/sheet/musicTheory.ts';
import { getInstrumentPerformanceProfile } from '../../src/engine/lookup/performance';
import { getResolvedSectionStyle } from '../../src/engine/sheet/sheet.ts';
import { INSTRUMENTS_BY_ID } from '../../src/engine/lookup/instruments';
import { GENRE_WORLDS_BY_ID } from '../../src/data/genres';
import { GESTURE_NAMES } from '../../src/engine/band/gestures.ts';

export interface NumericSummary { min: number; max: number; mean: number; std: number; count: number }
export interface SymbolicMetrics {
  noteCount: number;
  durationSec: number;
  pitch: { outOfKeyRate: number; chordToneShare: number; bassRootShare: number; bassFifthShare: number; voiceLeadingMeanSemitones: number; rangeLow: number; rangeHigh: number; tessituraOutsideRate: number };
  playability: { maxPolyphony: number; monophonicOverlapCount: number; notesPerSecond: number; rangeViolations: number };
  rhythm: { onsetGridErrorBeats: number; swingRatio: number; microtimingStdMs: number; onsetCoincidenceRate: number; barDurationErrorSec: number };
  form: { sectionCount: number; boundaryCount: number; boundariesWithActivity: number; energyCurve: number[]; repetitionSimilarity: number };
  harmony: { vocabularyViolations: number; progressionMatches: number; progressionCount: number; tuningSystem: string };
  invariants: { finite: boolean; monotonic: boolean; negativeDurations: number; boundaryErrors: number; performanceHash: string };
  roleActivityPerBar: Record<string, number[]>;
}

export function numericSummary(values: number[]): NumericSummary {
  if (!values.length) return { min: 0, max: 0, mean: 0, std: 0, count: 0 };
  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  const variance = values.reduce((a, b) => a + (b - mean) ** 2, 0) / values.length;
  return { min: Math.min(...values), max: Math.max(...values), mean, std: Math.sqrt(variance), count: values.length };
}

function fnv1a(input: string): string {
  let hash = 0x811c9dc5;
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return (hash >>> 0).toString(16).padStart(8, '0');
}

export function performanceHash(perf: Performance): string {
  const canonical = perf.notes.map(n => [n.time, n.dur, n.midi, n.vel, n.trackId, n.bar, n.gestureCode, n.hitFunctionCode, n.accent]).join('|');
  return fnv1a(canonical);
}

function intervalMean(notes: PerfNote[]): number {
  if (notes.length < 2) return 0;
  let total = 0;
  for (let i = 1; i < notes.length; i++) total += Math.abs(notes[i].midi - notes[i - 1].midi);
  return total / (notes.length - 1);
}

function similarity(a: number[], b: number[]): number {
  if (!a.length || !b.length) return 0;
  const n = Math.max(a.length, b.length);
  let diff = 0;
  for (let i = 0; i < n; i++) diff += Math.abs((a[i] ?? 0) - (b[i] ?? 0));
  return Math.max(0, 1 - diff / n);
}

export function analyzePerformance(sheet: Sheet, perf: Performance): SymbolicMetrics {
  const allTimes = perf.notes.map(n => n.time);
  const finite = [...allTimes, ...perf.notes.flatMap(n => [n.dur, n.midi, n.vel]), perf.duration].every(Number.isFinite);
  const monotonic = perf.notes.every((n, i, a) => i === 0 || n.time >= a[i - 1].time);
  const negativeDurations = perf.notes.filter(n => n.dur < 0).length;
  const boundaryErrors = perf.bars.filter((b, i) => i > 0 && Math.abs(b.start - perf.bars[i - 1].end) > 1e-6).length;

  const resolvedStyle = sheet.regions[0] ? getResolvedSectionStyle(sheet, sheet.regions[0]) : undefined;
  const mode = String(resolvedStyle?.melody?.scaleMode ?? resolvedStyle?.harmony?.modePolicy ?? 'major');
  const tonic = parseChord(sheet.measures[0]?.chord ?? 'C').rootPc;
  const scale = new Set(scalePcsForMode(mode, tonic));
  let outOfKey = 0; let chordTones = 0; let bassRoot = 0; let bassFifth = 0; let bassCount = 0; let rangeViolations = 0;
  const trackNotes = new Map<string, PerfNote[]>();
  for (const note of perf.notes) {
    const notes = trackNotes.get(note.trackId) ?? []; notes.push(note); trackNotes.set(note.trackId, notes);
    const chord = parseChord(sheet.measures[note.bar]?.chord ?? 'C');
    if (!scale.has(((note.midi % 12) + 12) % 12) && !note.drum) outOfKey++;
    if (chord.intervals.some(iv => ((chord.rootPc + iv) % 12 + 12) % 12 === ((note.midi % 12) + 12) % 12)) chordTones++;
    const track = sheet.tracks.find(t => t.id === note.trackId);
    const def = track?.instrumentId ? INSTRUMENTS_BY_ID[track.instrumentId] : undefined;
    const practical = def?.playability?.practicalRange ?? def?.playability?.absoluteRange;
    if (practical && !note.drum && (note.midi < practical.lowMidi || note.midi > practical.highMidi)) rangeViolations++;
    if (track?.role === 'bass' && !note.drum) {
      bassCount++;
      const pc = ((note.midi % 12) + 12) % 12;
      if (pc === chord.rootPc) bassRoot++;
      if (pc === (chord.rootPc + 7) % 12) bassFifth++;
    }
  }

  let maxPolyphony = 0; let monophonicOverlapCount = 0;
  for (const [trackId, notes] of trackNotes) {
    const sorted = [...notes].sort((a, b) => a.time - b.time || a.midi - b.midi);
    let active: PerfNote[] = [];
    const track = sheet.tracks.find(t => t.id === trackId);
    const family = track?.instrumentId ? INSTRUMENTS_BY_ID[track.instrumentId]?.family : undefined;
    const profile = track?.instrumentId ? getInstrumentPerformanceProfile(track.instrumentId) : undefined;
    for (const note of sorted) {
      active = active.filter(a => a.time + a.dur > note.time + 1e-6);
      active.push(note); maxPolyphony = Math.max(maxPolyphony, active.length);
      if (family !== 'kit' && family !== 'hand-drums' && family !== 'metal-and-wood' && family !== 'body-percussion' && (profile?.capabilities.maxSimultaneousPitches ?? Number.POSITIVE_INFINITY) <= 1 && active.length > 1) monophonicOverlapCount++;
    }
  }

  const onsetErrors: number[] = []; const microOffsets: number[] = [];
  for (const note of perf.notes) {
    if (note.drum) continue;
    const bar = perf.bars[note.bar];
    if (!bar) continue;
    const stepBeats = bar.beatsPerBar / Math.max(1, Number(resolvedStyle?.contract?.subdivision ?? 16));
    const beat = (note.time - bar.start) * bar.bpm / 60;
    const nearest = Math.round(beat / stepBeats) * stepBeats;
    onsetErrors.push(Math.abs(beat - nearest));
    microOffsets.push((beat - nearest) * 60000 / bar.bpm);
  }
  const allOnsets = [...trackNotes.values()].flatMap(ns => ns.map(n => n.time)).sort((a, b) => a - b);
  let coincident = 0;
  for (let i = 1; i < allOnsets.length; i++) if (Math.abs(allOnsets[i] - allOnsets[i - 1]) < 0.008) coincident++;

  const roleActivityPerBar: Record<string, number[]> = {};
  for (const track of sheet.tracks) {
    const role = String(track.role ?? 'unknown');
    const arr = roleActivityPerBar[role] ?? Array.from({ length: perf.bars.length }, () => 0);
    for (const note of perf.notes) if (note.trackId === track.id) arr[note.bar]++;
    roleActivityPerBar[role] = arr;
  }
  const energyCurve = sheet.regions.map(r => r.energy ?? 0).map(Number);
  const activeBoundaries = sheet.regions.slice(0, -1).filter(r => {
    const next = perf.bars[r.end];
    if (!next) return false;
    return perf.notes.some(n => n.time >= Math.max(0, next.start - 0.25) && n.time < next.start + 0.25);
  }).length;
  const repeated = sheet.regions.length > 1 ? similarity(
    roleActivityPerBar[Object.keys(roleActivityPerBar)[0] ?? '']?.slice(0, Math.floor(perf.bars.length / 2)) ?? [],
    roleActivityPerBar[Object.keys(roleActivityPerBar)[0] ?? '']?.slice(Math.floor(perf.bars.length / 2)) ?? [],
  ) : 0;

  const vocabulary = new Set((resolvedStyle?.harmony?.chordVocabulary ?? []).map(String));
  const progressionCount = sheet.regions.reduce((n, r) => n + (r.chords ?? []).length, 0);
  const vocabularyViolations = vocabulary.size ? sheet.regions.reduce((n, r) => n + (r.chords ?? []).filter(c => !vocabulary.has(c)).length, 0) : 0;
  const progressionMatches = sheet.regions.filter(r => (r.chords ?? []).length > 0 && (resolvedStyle?.harmony?.sectionProgressions?.[r.kind] ?? []).join('|') === (r.chords ?? []).join('|')).length;
  const tuningSystem = String(resolvedStyle?.harmony?.tuningSystem ?? resolvedStyle?.contract?.tuningSystem ?? 'equal-temperament');

  const ranges = perf.notes.filter(n => !n.drum).map(n => n.midi);
  return {
    noteCount: perf.notes.length,
    durationSec: perf.duration,
    pitch: {
      outOfKeyRate: perf.notes.length ? outOfKey / perf.notes.length : 0,
      chordToneShare: perf.notes.length ? chordTones / perf.notes.length : 0,
      bassRootShare: bassCount ? bassRoot / bassCount : 0,
      bassFifthShare: bassCount ? bassFifth / bassCount : 0,
      voiceLeadingMeanSemitones: intervalMean([...perf.notes].sort((a, b) => a.time - b.time)),
      rangeLow: ranges.length ? Math.min(...ranges) : 0,
      rangeHigh: ranges.length ? Math.max(...ranges) : 0,
      tessituraOutsideRate: perf.notes.length ? rangeViolations / perf.notes.length : 0,
    },
    playability: { maxPolyphony, monophonicOverlapCount, notesPerSecond: perf.duration > 0 ? perf.notes.length / perf.duration : 0, rangeViolations },
    rhythm: { onsetGridErrorBeats: numericSummary(onsetErrors).mean, swingRatio: measureSwingRatio(perf), microtimingStdMs: numericSummary(microOffsets).std, onsetCoincidenceRate: allOnsets.length > 1 ? coincident / (allOnsets.length - 1) : 0, barDurationErrorSec: perf.bars.length > 1 ? Math.max(...perf.bars.slice(1).map((b, i) => Math.abs(b.start - perf.bars[i].end))) : 0 },
    form: { sectionCount: sheet.regions.length, boundaryCount: Math.max(0, sheet.regions.length - 1), boundariesWithActivity: activeBoundaries, energyCurve, repetitionSimilarity: repeated },
    harmony: { vocabularyViolations, progressionMatches, progressionCount, tuningSystem },
    invariants: { finite, monotonic, negativeDurations, boundaryErrors, performanceHash: performanceHash(perf) },
    roleActivityPerBar,
  };
}

function measureSwingRatio(perf: Performance): number {
  const pairs: number[] = [];
  for (const bar of perf.bars) {
    const notes = perf.notes.filter(n => n.time >= bar.start && n.time < bar.end).sort((a, b) => a.time - b.time);
    const beat = (n: PerfNote) => (n.time - bar.start) * bar.bpm / 60;
    for (let i = 0; i < notes.length - 1; i++) {
      const a = beat(notes[i]); const b = beat(notes[i + 1]);
      const frac = a - Math.floor(a);
      if (Math.abs(frac - 0.0) < 0.08 && b - a > 0.25 && b - a < 0.9) pairs.push(b - a);
    }
  }
  if (!pairs.length) return 0.5;
  const mean = pairs.reduce((a, b) => a + b, 0) / pairs.length;
  return Math.max(0, Math.min(1, mean));
}

export function asciiGrid(perf: Performance, trackId: string, barIndex: number, width = 16): string {
  const bar = perf.bars[barIndex]; if (!bar) return '.'.repeat(width);
  const cells = Array.from({ length: width }, () => '.');
  for (const note of perf.notes) {
    if (note.trackId !== trackId || note.bar !== barIndex) continue;
    const beat = (note.time - bar.start) * bar.bpm / 60;
    const idx = Math.max(0, Math.min(width - 1, Math.round((beat / bar.beatsPerBar) * width)));
    cells[idx] = cells[idx] === '.' ? 'x' : 'X';
  }
  return cells.join('');
}

export function registerBand(notes: PerfNote[]): string {
  if (!notes.length) return '---';
  const mean = notes.reduce((a, n) => a + n.midi, 0) / notes.length;
  return mean < 48 ? 'LOW' : mean < 65 ? 'MID' : mean < 84 ? 'HIGH' : 'AIR';
}

export function gestureNames(notes: PerfNote[]): string[] {
  return [...new Set(notes.map(n => GESTURE_NAMES[n.gestureCode] ?? `code:${n.gestureCode}`))];
}

export function genrePatternIds(genreId: string): Set<string> {
  return new Set((GENRE_WORLDS_BY_ID[genreId]?.patterns ?? []).map(p => p.id));
}
