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

  // Preserve event order and exact numeric values: ordering affects voice
  // stealing and same-time controller changes. Include all physical controls.
  update(trackId);
  update(instrumentId);
  update(JSON.stringify(Object.entries(params).sort(([a], [b]) => a.localeCompare(b))));
  update(String(trackMixVolume));
  update(String(sampleRate));
  update(JSON.stringify(trackNotes));
  update(JSON.stringify(trackCCs));

  return (h1 >>> 0).toString(16).padStart(8, '0') + (h2 >>> 0).toString(16).padStart(8, '0');
}

export class PCMStemCache extends LRUMap<string, StemCacheEntry> {
  private bytes = 0;
  constructor(readonly maxBytes = 64 * 1024 * 1024, name = 'stemCache') { super(128, name); }
  override set(key: string, value: StemCacheEntry): this {
    this.delete(key);
    const size = value.left.byteLength + value.right.byteLength;
    if (size > this.maxBytes) return this;
    while (this.bytes + size > this.maxBytes || this.size >= this.maxSize) {
      const oldest = this.keys().next().value;
      if (oldest === undefined) break;
      this.delete(oldest);
    }
    super.set(key, value); this.bytes += size;
    return this;
  }
  override delete(key: string): boolean {
    const value = [...this.entries()].find(([k]) => k === key)?.[1];
    if (value) this.bytes -= value.left.byteLength + value.right.byteLength;
    return super.delete(key);
  }
  override clear(): void { super.clear(); this.bytes = 0; }
  get byteLength(): number { return this.bytes; }
}
export const stemCache = new PCMStemCache();
registerCache(stemCache);
export function clearStemCache(): void { stemCache.clear(); }
