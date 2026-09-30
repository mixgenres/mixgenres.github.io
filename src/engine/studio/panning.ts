import { PAN_MAP } from '../../data/sound/mix/panMap';

export class StereoFieldManager {
  /** Returns a conventional Web Audio StereoPanner value (-1..1). */
  public resolveInstrumentPan(instrument: string): number {
    const key = (instrument || '').toLowerCase();
    for (const [k, v] of Object.entries(PAN_MAP)) {
      if (key.includes(k)) return v;
    }
    return PAN_MAP[instrument] || 0.0;
  }

  /** Returns the engine's normalized pan convention (0 = left, 0.5 = center, 1 = right). */
  public resolveInstrumentPanNormalized(instrument: string): number {
    return Math.max(0, Math.min(1, (this.resolveInstrumentPan(instrument) + 1) * 0.5));
  }
}
