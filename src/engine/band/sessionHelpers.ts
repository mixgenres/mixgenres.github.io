import type { PerfNote } from './performanceData.ts';

export type TrackGroup = Record<string, unknown>;

export function compileTracks(trackGroups: TrackGroup[], _worldId?: string): TrackGroup[] {
  return trackGroups;
}

export function generateTiming(notes: PerfNote[], _genre: string = ''): Array<PerfNote & { time: number }> {
  return notes.map(note => ({
    ...note,
    time: note.time,
    velocity: note.vel,
  }));
}
