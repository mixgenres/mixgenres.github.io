import type { PatternEvent } from '../../data/schema';
export type TransitionType = 'fill' | 'turnaround' | 'drop-out' | 'arrastre' | 'corte';

export interface TransitionEvent {
  type: TransitionType;
  fromEnergy: 1 | 2 | 3 | 4 | 5;
  toEnergy: 1 | 2 | 3 | 4 | 5;
  cyclePosition: number;
  cycleLength: number;
  /** True when the event is backed by a catalog-authored pattern/gesture. */
  authored?: boolean;
  patternId?: string;
  authoredByRole?: Record<string, string | undefined>;
}

export interface RhythmicContext {
  cyclePosition: number;
  cycleLength: number;
  sectionEnergy: 1 | 2 | 3 | 4 | 5;
  transition?: TransitionEvent;
}

export function culturalCyclePosition(barIndex: number, cycleLength: number): number {
  if (!Number.isInteger(barIndex) || !Number.isInteger(cycleLength) || cycleLength < 1) {
    throw new Error(`Invalid authored cycle position: bar=${barIndex}, cycle=${cycleLength}`);
  }
  const n = cycleLength;
  return ((barIndex % n) + n) % n;
}

export interface NativeSlice {
  notations?: Array<PatternEvent['notation']>;
  pitches?: Array<PatternEvent['pitch']>;
  /** step indices within this bar, on the pattern's own grid */
  onsets: number[];
  accents: number[];
  velocities: number[];
  durations: number[];
  microtiming: number[];
  hitTypes: string[];
  articulations: string[];
  /** how many steps this pattern puts in one bar */
  stepsPerBar: number;
  /** fractional percentage (0..1) of the bar where each onset occurs */
  fractionalPositions: number[];
  /** Whether durations came from authored pattern data rather than the default one-step fill. */
  durationsAuthored: boolean;
  /** Per-attack authored gate flags when a pattern mixes explicit and inferred lengths. */
  durationAuthoredByOnset: boolean[];
}

export function sliceBarNative(
  onsets: number[],
  accents: number[] | undefined,
  velocities: number[] | undefined,
  durations: number[] | undefined,
  micro: number[] | undefined,
  hitTypes: string[] | undefined,
  subdivisions: number,
  cycleLength: number,
  barInCycle: number,
  articulations?: string[],
  fractionalSteps?: number[],
  pitches?: Array<PatternEvent['pitch']>,
  notations?: Array<PatternEvent['notation']>,
  durationAuthoredByOnset?: boolean[],
): NativeSlice {
  if (!Number.isInteger(subdivisions) || subdivisions < 1
    || !Number.isInteger(cycleLength) || cycleLength < 1
    || !Number.isInteger(barInCycle) || barInCycle < 0) {
    throw new Error(`Invalid authored pattern grid: subdivisions=${subdivisions}, cycle=${cycleLength}, bar=${barInCycle}`);
  }
  const declared = subdivisions;
  const authoredMax = onsets.length ? Math.max(...onsets.map((onset, i) => fractionalSteps?.[i] ?? onset)) : -1;
  const total = authoredMax >= declared ? Math.floor(authoredMax) + 1 : declared;

  let cycleBars = cycleLength;
  if (total > declared) cycleBars = Math.max(cycleBars, Math.ceil(total / declared));
  const stepsPerBar = Math.max(1, Math.round(total / cycleBars));

  const from = (barInCycle % cycleBars) * stepsPerBar;
  const keepP: Array<PatternEvent['pitch']> = [];
  const keepN: Array<PatternEvent['notation']> = [];
  const keepO: number[] = [], keepA: number[] = [], keepV: number[] = [], keepD: number[] = [], keepM: number[] = [], keepH: string[] = [], keepT: string[] = [], keepF: number[] = [], keepDA: boolean[] = [];

  onsets.forEach((o, i) => {
    const exactStep = fractionalSteps?.[i] ?? o;
    if (exactStep < from || exactStep >= from + stepsPerBar) return;
    const barStep = o - from;
    keepO.push(barStep);
    const authoredFraction = fractionalSteps?.[i];
    keepF.push(authoredFraction !== undefined
      ? Math.max(0, Math.min(1, (authoredFraction - from) / stepsPerBar))
      : barStep / stepsPerBar);
    keepA.push(accents?.[i] ?? 0.78);
    keepV.push(velocities?.[i] ?? 0.78);
    keepD.push(durations?.[i] ?? 1);
    keepDA.push(durationAuthoredByOnset?.[i] ?? (durations !== undefined));
    keepM.push(micro?.[i] ?? 0);
    keepH.push(hitTypes?.[i] ?? '');
    keepT.push(articulations?.[i] ?? '');
    keepP.push(pitches?.[i]);
    keepN.push(notations?.[i]);
  });

  return { onsets: keepO, accents: keepA, velocities: keepV, durations: keepD, microtiming: keepM, hitTypes: keepH, articulations: keepT, pitches: keepP, notations: keepN, stepsPerBar, fractionalPositions: keepF, durationsAuthored: keepDA.length > 0 && keepDA.every(Boolean), durationAuthoredByOnset: keepDA };
}

/** Quarter-note beats in one bar of the given time signature. */
export function beatsPerBarOf(timeSignature: string): number {
  if (typeof timeSignature !== 'string') throw new Error(`Missing authored time signature: ${String(timeSignature)}`);
  const m = /^(\d+)\s*\/\s*(\d+)$/.exec(timeSignature.trim());
  if (!m) throw new Error(`Invalid authored time signature: ${timeSignature}`);
  const num = parseInt(m[1], 10);
  const den = parseInt(m[2], 10);
  if (!Number.isInteger(num) || !Number.isInteger(den) || num < 1 || den < 1) {
    throw new Error(`Invalid authored time signature: ${timeSignature}`);
  }
  // compound meters are counted in dotted beats, which is how they are felt
  if (den === 8 && num % 3 === 0 && num > 3) return num / 2;
  return (num * 4) / den;
}
