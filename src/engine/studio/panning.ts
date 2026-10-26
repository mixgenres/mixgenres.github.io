import { PAN_MAP } from '../../data/sound/mix/panMap';
import type { TrackMixState } from './dynamicMix/MixScene';

/** Automatic mono bass placement is a starting point. An explicit user pan
 * remains effective after the style's width and stage processing. */
export function resolveMixPan(defaultPan: number, userPan?: number, state?: Pick<TrackMixState, 'bus' | 'width'>): number {
  return Math.max(0, Math.min(1, userPan ?? (state?.bus === 'lowAnchor' && state.width === 0 ? .5 : defaultPan)));
}

/** StereoPannerNode's stereo-input matrix. Crossfeed preserves both recorded
 * channels at the sides; independent L/R attenuation discarded half a stereo
 * instrument at a hard pan and disagreed with live playback.
 */
export function stereoPanMatrix(normalizedPan: number, gain = 1) {
  const pan = Math.max(-1, Math.min(1, normalizedPan * 2 - 1));
  if (pan === 0) return { ll: gain, lr: 0, rl: 0, rr: gain };
  if (pan < 0) {
    const angle = (pan + 1) * Math.PI / 2;
    return { ll: gain, lr: 0, rl: Math.cos(angle) * gain, rr: Math.sin(angle) * gain };
  }
  const angle = pan * Math.PI / 2;
  return { ll: Math.cos(angle) * gain, lr: Math.sin(angle) * gain, rl: 0, rr: gain };
}

export class StereoFieldManager {
  /** Returns a conventional Web Audio StereoPanner value (-1..1). */
  public resolveInstrumentPan(instrument: string): number {
    const key = (instrument || '').toLowerCase();
    const normalized = key.replaceAll('-', '_').replaceAll(' ', '_');
    const exact = PAN_MAP[normalized] ?? PAN_MAP[key];
    if (exact !== undefined) return exact;
    for (const [k, v] of Object.entries(PAN_MAP)) {
      const alias = k.toLowerCase().replaceAll('-', '_').replaceAll(' ', '_');
      if (normalized.includes(alias)) return v;
    }
    return PAN_MAP[instrument] || 0.0;
  }

  /** Returns the engine's normalized pan convention (0 = left, 0.5 = center, 1 = right). */
  public resolveInstrumentPanNormalized(instrument: string): number {
    return Math.max(0, Math.min(1, (this.resolveInstrumentPan(instrument) + 1) * 0.5));
  }
}
