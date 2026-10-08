import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "japanese-gagaku": {
    "lowEnergyShare": 0.0009,
    "highEnergyShare": 0.4667,
    "sideMidRmsRatio": 0.7824
  },
  "japanese-shakuhachi": {
    "lowEnergyShare": 0.0011,
    "highEnergyShare": 0.0717,
    "sideMidRmsRatio": 1.2168
  },
  "japanese-koto-sankyoku": {
    "lowEnergyShare": 0.448,
    "highEnergyShare": 0.0085,
    "sideMidRmsRatio": 0.3579
  },
  "japanese-shamisen-minyo": {
    "lowEnergyShare": 0.0827,
    "highEnergyShare": 0.0492,
    "sideMidRmsRatio": 0.4723
  }
} satisfies MixCalibrationCatalog;
