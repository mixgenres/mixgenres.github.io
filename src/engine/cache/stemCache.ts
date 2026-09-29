import { LRUMap, registerCache } from './lru.ts';
import type { PerfNote, PerfCC } from '../band/performanceData.ts';

/** Minimal render identity consumed by stem cache keys, independent of playback implementation. */
export interface StemTrackIdentity {
  model: string | number;
  dialect?: string;
  performanceMode?: string;
  genreId?: string;
  volume: number;
  roleGain?: number;
  decay: number;
  brightness: number;
  articulation: number;
  pluckPosition: number;
  bowPressure: number;
  contact: number;
  drive: number;
  body: number;
  tension: number;
  bendGlideMs?: number;
  pan: number;
}

export interface StemCacheEntry {
  left: Float32Array;
  right: Float32Array;
  startSample: number;
}

/**
 * Computes a deterministic hash representing a track's Tier 2 Performance Cell.
 * Incorporates the track's instrument assignment, static macro parameters,
 * track-level mix volume/pan, sample rate, and the exact sequence of timed notes & CCs.
 */
export function computeTrackStemFingerprint(
  trackId: string,
  instrumentId: string,
  params: StemTrackIdentity,
  trackMixVolume: number,
  trackNotes: PerfNote[],
  trackCCs: PerfCC[],
  sampleRate: number = 44100,
): string {
  let h1 = 0x811c9dc5;
  let h2 = 0x9e3779b9;

  function update(str: string) {
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i);
      h1 ^= code;
      h1 = Math.imul(h1, 0x01000193);
      h2 ^= code;
      h2 = Math.imul(h2, 0x27d4eb2d);
    }
    h1 ^= 0x7c; // pipe separator
    h1 = Math.imul(h1, 0x01000193);
    h2 ^= 0x7c;
    h2 = Math.imul(h2, 0x27d4eb2d);
  }

  // 1. Static instrument assignment & macro parameters
  update(trackId);
  update(instrumentId);
  update(String(params.model));
  update(params.dialect || '');
  update(params.performanceMode || '');
  update(params.genreId || '');
  update(params.volume.toFixed(4));
  update((params.roleGain ?? 1).toFixed(4));
  update(params.decay.toFixed(3));
  update(params.brightness.toFixed(3));
  update(params.articulation.toFixed(3));
  update(params.pluckPosition.toFixed(3));
  update(params.bowPressure.toFixed(3));
  update(params.contact.toFixed(3));
  update(params.drive.toFixed(3));
  update(params.body.toFixed(3));
  update(params.tension.toFixed(3));
  update((params.bendGlideMs ?? 0).toFixed(1));
  update(params.pan.toFixed(3));
  update(trackMixVolume.toFixed(3));
  update(String(sampleRate));

  // 2. Exact sequence of timed notes
  const sortedNotes = trackNotes.slice().sort((a, b) => a.time - b.time || a.midi - b.midi || a.dur - b.dur);
  update(`notes_${sortedNotes.length}`);
  for (let i = 0; i < sortedNotes.length; i++) {
    const n = sortedNotes[i];
    let s = `${n.time.toFixed(4)},${n.dur.toFixed(4)},${n.midi},${n.vel},${n.gestureCode},${n.frequencyHz ? n.frequencyHz.toFixed(2) : ''}`;
    if (n.pitchBend && n.pitchBend.length > 0) {
      s += ':' + n.pitchBend.map(p => `${p.offset.toFixed(4)}@${p.value}`).join(';');
    }
    update(s);
  }

  // 3. Exact sequence of timed CCs
  const sortedCCs = trackCCs.slice().sort((a, b) => a.time - b.time || a.cc - b.cc);
  update(`ccs_${sortedCCs.length}`);
  for (let i = 0; i < sortedCCs.length; i++) {
    const c = sortedCCs[i];
    update(`${c.time.toFixed(4)},${c.cc},${c.value}`);
  }
  // Physical bandoneon fingering is part of the render identity; changing the
  // selected button/side must invalidate a cached stem even when MIDI is equal.
  for (const n of trackNotes.slice().sort((a, b) => a.time - b.time || a.midi - b.midi)) {
    update(`bn_${n.bandoneonButtonId ?? ''},${n.bandoneonButtonIndex ?? -1},${n.bandoneonSideCode ?? 0},${n.bellowsDirectionCode ?? 0}`);
  }

  return (h1 >>> 0).toString(16).padStart(8, '0') + (h2 >>> 0).toString(16).padStart(8, '0');
}

export const stemCache = new LRUMap<string, StemCacheEntry>(128, 'stemCache');
registerCache(stemCache);
export function clearStemCache(): void { stemCache.clear(); }
