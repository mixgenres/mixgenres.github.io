import type { Performance, PerfNote } from '../band/performanceData';
import type { Mp3RenderOptions } from './mp3Export';
import type { TrackParams } from './elementaryEngine';
import { prepareNoteVoice } from './performancePlan';
import { resolveTrackSound } from './trackSound';
import { compactVoiceTailSeconds } from './compactInstrument';
import { INSTRUMENTS_BY_ID } from '../lookup/instruments';

/** One lifetime calculation for section preparation, voice allocation and mix
 * length. A held source or released resonator must survive its section edge. */
export function createNoteTailResolver(performance: Performance, options: Mp3RenderOptions) {
  const lifetimeControls = new Map<string, { brightness?: number; mute?: number }>();
  for (const cc of performance.ccs) {
    if (cc.cc !== 74 && cc.cc !== 18) continue;
    const bounds = lifetimeControls.get(cc.trackId) ?? {}, value = Math.max(0, Math.min(1, cc.value / 127));
    if (cc.cc === 74) bounds.brightness = Math.max(bounds.brightness ?? 0, value);
    else bounds.mute = Math.min(bounds.mute ?? 1, value);
    lifetimeControls.set(cc.trackId, bounds);
  }
  const tails = new WeakMap<PerfNote, number>(), sounds = new Map<string, TrackParams>();
  return (note: PerfNote): number => {
    const existing = tails.get(note); if (existing !== undefined) return existing;
    const instrumentId = options.trackInstruments.get(note.trackId) ?? performance.trackInfo?.[note.trackId]?.instrumentId ?? note.trackId;
    const worldId = note.soundContext?.worldId ?? options.worldId ?? performance.worldId;
    const styleId = note.soundContext?.styleId ?? options.styleId;
    const role = note.soundContext?.role ?? options.trackRoles?.get(note.trackId) ?? performance.trackInfo?.[note.trackId]?.role;
    const key = JSON.stringify([instrumentId, worldId, styleId, role]);
    let params = sounds.get(key);
    if (!params) { params = resolveTrackSound(instrumentId, worldId, styleId, role); sounds.set(key, params); }
    const prepared = prepareNoteVoice(note, params, worldId ?? '', styleId ?? '', role);
    const lifetimeParams = { ...(prepared.soundParams ?? params) }, controls = lifetimeControls.get(note.trackId);
    if (controls?.brightness !== undefined) lifetimeParams.brightness = Math.max(lifetimeParams.brightness, controls.brightness);
    if (controls?.mute !== undefined) lifetimeParams.mute = Math.min(lifetimeParams.mute, controls.mute);
    const tail = compactVoiceTailSeconds(INSTRUMENTS_BY_ID[instrumentId], lifetimeParams, prepared); tails.set(note, tail); return tail;
  };
}
