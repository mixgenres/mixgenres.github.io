import type { AcousticSpace, ExtendedGenreWorld } from '../../data/genres/schema/extensions';

export const defaultSpace: AcousticSpace = {
  roomSize: 0.6,
  hfDamping: 4000,
  preDelay: 0.02,
  mixAmount: 0.25,
  eqCurve: {
    low: 0,
    midFreq: 1000,
    mid: 0,
    high: 0,
  },
};

export class SpatialProcessor {
  public reverb = {
    roomSize: 0.6,
    damping: 4000,
    preDelay: 0.02,
    wet: 0.25,
  };

  public masterEQ = {
    low: 0,
    midFreq: 1000,
    mid: 0,
    high: 0,
    setFlat() {
      this.low = 0;
      this.mid = 0;
      this.high = 0;
    },
    lowShelf(val: number) {
      this.low = val;
    },
    midBand(freq: number, val: number) {
      this.midFreq = freq;
      this.mid = val;
    },
    highShelf(val: number) {
      this.high = val;
    },
  };

  public configureAcousticSpace(genre: Partial<ExtendedGenreWorld>) {
    const space: AcousticSpace = genre?.acousticSpace || defaultSpace;
    this.reverb.roomSize = space.roomSize ?? 0.6;
    this.reverb.damping = space.hfDamping ?? 4000;
    this.reverb.preDelay = space.preDelay || 0;
    this.reverb.wet = space.mixAmount ?? 0.25;

    if (space.eqCurve) {
      this.masterEQ.lowShelf(space.eqCurve.low ?? 0);
      this.masterEQ.midBand(space.eqCurve.midFreq ?? 1000, space.eqCurve.mid ?? 0);
      this.masterEQ.highShelf(space.eqCurve.high ?? 0);
    }
  }
}
