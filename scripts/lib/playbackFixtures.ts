import type { Performance, PerfNote } from '../../src/engine/band/performanceData';
import { makeSheet, type Sheet } from '../../src/engine/sheet/sheet';

export function performanceFixture(patch: Partial<Performance> = {}): Performance {
  return { duration: 1, tail: 0, notes: [], ccs: [], bars: [], blends: {}, ...patch };
}
export function noteFixture(patch: Partial<PerfNote> = {}): PerfNote {
  return { trackId: 'keys', midi: 60, time: 0, dur: .5, vel: 80, bar: 0,
    gestureCode: 0, hitFunctionCode: 0, accent: 1, ...patch };
}
export function songFixture(patch: Partial<Sheet> = {}): Sheet {
  return { ...makeSheet('tango'), catalogId: undefined, tracks: [], regions: [], measures: [], arrangement: {}, ...patch };
}
