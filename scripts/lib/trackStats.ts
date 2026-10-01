// Per-track note statistics derived from a compiled performance.
// One implementation shared by reports/genre-baseline.ts and reports/song-sonic-model.ts
// (previously copy-pasted in four scripts with slightly different root/low-register rules).
import { parseChord } from '../../src/engine/sheet/musicTheory.ts';
import { GESTURE_NAMES } from '../../src/engine/band/gestures.ts';
import { mean } from './io.ts';

/** MIDI note below which a bass note counts as "low register" (G2). */
export const LOW_REGISTER_MIDI = 43;

export interface TrackStats {
  noteCount: number;
  meanVelocity: number;
  /** Share of notes whose pitch class is the root of the bar's chord. */
  rootRatio: number;
  /** Share of notes below LOW_REGISTER_MIDI. */
  lowRegisterRatio: number;
  /** Distinct gesture/articulation names the track actually plays. */
  gestures: string[];
}

export function trackStats(sheet: any, perf: any, trackId: string): TrackStats {
  const notes = (perf.notes as any[]).filter(n => n.trackId === trackId);
  const isRoot = (n: any) => {
    const chord = sheet.measures[n.bar]?.chord;
    return Boolean(chord) && n.midi % 12 === (parseChord(chord).rootPc ?? -99);
  };
  return {
    noteCount: notes.length,
    meanVelocity: mean(notes.map(n => n.vel)),
    rootRatio: mean(notes.map(n => (isRoot(n) ? 1 : 0))),
    lowRegisterRatio: mean(notes.map(n => (n.midi < LOW_REGISTER_MIDI ? 1 : 0))),
    gestures: [...new Set(notes.map(n => GESTURE_NAMES[n.gestureCode] ?? String(n.gestureCode)))],
  };
}
