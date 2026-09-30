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
  const n = Math.max(1, Math.round(cycleLength || 1));
  return ((barIndex % n) + n) % n;
}

export interface NativeSlice {
  /** step indices within this bar, on the pattern's own grid */
  onsets: number[];
  accents: number[];
  velocities: number[];
  durations: number[];
  microtiming: number[];
  hitTypes: string[];
  /** how many steps this pattern puts in one bar */
  stepsPerBar: number;
  /** fractional percentage (0..1) of the bar where each onset occurs */
  fractionalPositions: number[];
  /** Whether durations came from authored pattern data rather than the default one-step fill. */
  durationsAuthored: boolean;
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
): NativeSlice {
  const declared = Math.max(1, subdivisions || 16);
  const authoredMax = onsets.length ? Math.max(...onsets) : -1;
  const total = authoredMax >= declared ? authoredMax + 1 : declared;

  let cycleBars = Math.max(1, Math.round(cycleLength || 1));
  if (total > declared) cycleBars = Math.max(cycleBars, Math.ceil(total / declared));
  const stepsPerBar = Math.max(1, Math.round(total / cycleBars));

  const from = (barInCycle % cycleBars) * stepsPerBar;
  const keepO: number[] = [], keepA: number[] = [], keepV: number[] = [], keepD: number[] = [], keepM: number[] = [], keepH: string[] = [], keepF: number[] = [];

  onsets.forEach((o, i) => {
    if (o < from || o >= from + stepsPerBar) return;
    const barStep = o - from;
    keepO.push(barStep);
    keepF.push(barStep / stepsPerBar);
    keepA.push(accents?.[i] ?? 0.78);
    keepV.push(velocities?.[i] ?? 0.78);
    keepD.push(durations?.[i] ?? 1);
    keepM.push(micro?.[i] ?? 0);
    keepH.push(hitTypes?.[i] ?? '');
  });

  return { onsets: keepO, accents: keepA, velocities: keepV, durations: keepD, microtiming: keepM, hitTypes: keepH, stepsPerBar, fractionalPositions: keepF, durationsAuthored: durations !== undefined };
}

/** Quarter-note beats in one bar of the given time signature. */
export function beatsPerBarOf(timeSignature: string): number {
  const m = /^(\d+)\s*\/\s*(\d+)$/.exec((timeSignature || '4/4').trim());
  if (!m) return 4;
  const num = parseInt(m[1], 10);
  const den = parseInt(m[2], 10);
  if (!num || !den) return 4;
  // compound meters are counted in dotted beats, which is how they are felt
  if (den === 8 && num % 3 === 0 && num > 3) return num / 2;
  return (num * 4) / den;
}
