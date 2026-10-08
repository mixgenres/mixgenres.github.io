import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "reggaeton-experimental": {
    "lowEnergyShare": 0.8001,
    "highEnergyShare": 0.0807,
    "sideMidRmsRatio": 0.347
  },
  "reggaeton-latin-trap-crossover": {
    "lowEnergyShare": 0.6287,
    "highEnergyShare": 0.2325,
    "sideMidRmsRatio": 0.371
  },
  "reggaeton-playero-underground": {
    "lowEnergyShare": 0.8472,
    "highEnergyShare": 0.099,
    "sideMidRmsRatio": 0.2041
  },
  "reggaeton-classic": {
    "lowEnergyShare": 0.2629,
    "highEnergyShare": 0.0633,
    "sideMidRmsRatio": 0.0036
  },
  "reggaeton-neoperreo": {
    "lowEnergyShare": 0.9073,
    "highEnergyShare": 0.0257,
    "sideMidRmsRatio": 0.165
  }
} satisfies MixCalibrationCatalog;
