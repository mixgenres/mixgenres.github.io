import { getInstrumentModule, resolveVoiceParameters } from './instrumentRegistry';
import type { PerfNote } from '../band/performanceData';
import type { TrackParams, VoiceState } from './elementaryEngine';
import { INSTRUMENTS_BY_ID } from '../lookup/instruments';

/** A released slot still owns its resonating sound until this interval expires. */
export function voiceTailSeconds(params: TrackParams, voice?: VoiceState): number {
  const acoustic = INSTRUMENTS_BY_ID[params.instrumentId ?? '']?.acousticProfile;
  const physical = resolveVoiceParameters(voice ?? { id: 'tail', note: 60, velocity: 1, gate: 0 }, params);
  if (physical.mechanics?.tailSeconds !== undefined) return Math.max(physical.mechanics.tailSeconds, physical.release * 4);
  const authoredTail = getInstrumentModule(params.instrumentId ?? '').releaseTailSeconds?.(params, voice);
  // Held sources release through their envelope; struck/plucked sources keep
  // resonating after note-off. Use the model's lifetime when available, with a
  // conservative decay allowance for modules that do not yet author one.
  const resonatorTail = authoredTail ?? (physical.isDecayingInstrument ? physical.decayTime * 4 : 0);
  return Math.max(0.1, (authoredTail === undefined ? acoustic?.ring ?? 0 : 0), physical.release * 4, resonatorTail);
}

/** Allocate for the musical demand, including releases, rather than a fixed cap. */
export function requiredVoiceCount(notes: readonly PerfNote[], tailSeconds: number | ((note: PerfNote) => number)): number {
  const events = notes.flatMap(note => [
    { time: note.time, delta: 1 },
    { time: note.time + note.dur + (typeof tailSeconds === 'number' ? tailSeconds : tailSeconds(note)), delta: -1 },
  ]).sort((a, b) => a.time - b.time || a.delta - b.delta);
  let active = 0, peak = 0;
  for (const event of events) { active += event.delta; peak = Math.max(peak, active); }
  return Math.max(1, peak);
}
