import type { AcousticSpace } from '../genres/schema/extensions';

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
