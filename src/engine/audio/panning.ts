export class StereoFieldManager {
  /** Returns a conventional Web Audio StereoPanner value (-1..1). */
  public resolveInstrumentPan(instrument: string): number {
    const panMap: Record<string, number> = {
      bass: 0.0,
      drums: 0.0,
      lead: 0.0,
      guitar: -0.6,
      keys: 0.5,
      piano: 0.4,
      strings_low: 0.3,
      strings_high: -0.4,
      horn: -0.2,
      fiddle: -0.5,
      pedal_steel: 0.6,
      synth: -0.7,
      arp: 0.7,
    };
    const key = (instrument || '').toLowerCase();
    for (const [k, v] of Object.entries(panMap)) {
      if (key.includes(k)) return v;
    }
    return panMap[instrument] || 0.0;
  }

  /** Returns the engine's normalized pan convention (0 = left, 0.5 = center, 1 = right). */
  public resolveInstrumentPanNormalized(instrument: string): number {
    return Math.max(0, Math.min(1, (this.resolveInstrumentPan(instrument) + 1) * 0.5));
  }
}
