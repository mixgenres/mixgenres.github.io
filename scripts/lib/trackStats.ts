// Per-track note statistics derived from a compiled performance.
import { parseChord } from '../../src/engine/sheet/musicTheory.ts';
import { GESTURE_NAMES } from '../../src/engine/band/gestures.ts';
import { mean } from './io.ts';
import type { Sheet } from '../../src/engine/sheet/sheet.ts';
import type { Performance, PerfNote } from '../../src/engine/band/performanceData.ts';
export const LOW_REGISTER_MIDI = 43;
export interface TrackStats { noteCount:number; meanVelocity:number; rootRatio:number; lowRegisterRatio:number; gestures:string[] }
export function trackStats(sheet: Sheet, perf: Performance, trackId: string): TrackStats {
  const notes: PerfNote[] = perf.notes.filter(n => n.trackId === trackId);
  const isRoot = (n: PerfNote) => { const chord=sheet.measures[n.bar]?.chord; return Boolean(chord) && n.midi % 12 === parseChord(chord).rootPc; };
  return { noteCount:notes.length, meanVelocity:mean(notes.map(n=>n.vel)), rootRatio:mean(notes.map(n=>isRoot(n)?1:0)), lowRegisterRatio:mean(notes.map(n=>n.midi<LOW_REGISTER_MIDI?1:0)), gestures:[...new Set(notes.map(n=>GESTURE_NAMES[n.gestureCode]??String(n.gestureCode)))] };
}
