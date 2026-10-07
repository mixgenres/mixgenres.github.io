import type { Performance, PerfNote } from '../band/performanceData';
import { prepareNoteVoice } from '../playback/performancePlan';
import { resolveTrackSound } from '../playback/trackSound';
import { compactVoiceTailSeconds, COMPACT_SOUND_VERSION } from '../playback/compactInstrument';
import { INSTRUMENTS_BY_ID } from '../lookup/instruments';
import type { TrackParams, VoiceState } from '../playback/elementaryEngine';
import { contentKey } from '../cache/contentKey';
import { LRUMap, registerCache } from '../cache/lru';
import type { PartTransition } from '../band/transitions';

export interface PhysicalNote { key: string; voice: VoiceState; tailSeconds: number }
export interface SoundCell { key: string; trackId: string; sectionId: string; transitionKey?: string; notes: PhysicalNote[] }
export interface SoundPlan { version: 1; cells: SoundCell[]; performance: Performance }
const physicalCells = new LRUMap<string, SoundCell>(2048, 'physicalPartSections'); registerCache(physicalCells);

/** Layer 3 materializes instrument mechanics, excitation and release budgets.
 * Mix faders, pan, mute and solo never participate in physical compilation. */
export function transformMusiciansToSound(performance: Performance, transitions: PartTransition[] = []): SoundPlan {
  const cells: SoundCell[] = [], notes: PerfNote[] = [];
  for (const trackId of Object.keys(performance.trackInfo ?? {})) {
    const identity = performance.trackInfo![trackId];
    for (const sectionId of [...new Set(performance.bars.map(bar => bar.regionId))]) {
      const sectionBars = performance.bars.filter(bar => bar.regionId === sectionId), start = sectionBars[0].start;
      const trackNotes = performance.notes.filter(note => note.trackId === trackId && performance.bars[note.bar].regionId === sectionId);
      const ccs = performance.ccs.filter(cc => cc.trackId === trackId).map(cc => cc.cc);
      const relative = trackNotes.map(({ physical: _physical, ...note }) => ({ ...note, time: Number((note.time - start).toFixed(12)) }));
      const transitionKey = transitions.find(t => t.trackId === trackId && t.toSectionId === sectionId)?.key;
      const key = contentKey(['physical-v2', COMPACT_SOUND_VERSION, identity, relative, ccs, performance.worldId, transitionKey]);
      let cell = physicalCells.get(key);
      if (!cell) {
        const sounds = new Map<string, TrackParams>();
        const physicalNotes = trackNotes.map(note => {
          const context = note.soundContext, worldId = context?.worldId ?? performance.worldId ?? '', styleId = context?.styleId ?? '';
          const role = context?.role ?? identity.role, soundKey = JSON.stringify([worldId, styleId, role]);
          let params = sounds.get(soundKey);
          if (!params) { params = resolveTrackSound(identity.instrumentId, worldId, styleId, role); sounds.set(soundKey, params); }
          const voice = prepareNoteVoice(note, params, worldId, styleId, role, ccs, params);
          return { key: contentKey([key, note.notationEventId, note.midi, note.vel]), voice, tailSeconds: compactVoiceTailSeconds(INSTRUMENTS_BY_ID[identity.instrumentId], voice.soundParams ?? params, voice) };
        });
        cell = { key, trackId, sectionId, transitionKey, notes: physicalNotes }; physicalCells.set(key, cell);
      }
      cells.push(cell);
      trackNotes.forEach((note, index) => notes.push({ ...note, physical: cell!.notes[index] }));
    }
  }
  notes.sort((a,b) => a.time-b.time || a.trackId.localeCompare(b.trackId) || a.midi-b.midi);
  return { version: 1, cells, performance: { ...performance, notes } };
}
