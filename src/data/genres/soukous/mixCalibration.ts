import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "soukous-congolese-rumba": {
    "lowEnergyShare": 0.7129,
    "highEnergyShare": 0.0654,
    "sideMidRmsRatio": 0.4249
  },
  "soukous-soukous": {
    "lowEnergyShare": 0.4926,
    "highEnergyShare": 0.0541,
    "sideMidRmsRatio": 0.245
  },
  "soukous-kwassa-kwassa": {
    "lowEnergyShare": 0.3542,
    "highEnergyShare": 0.1299,
    "sideMidRmsRatio": 0.291
  },
  "soukous-sebene": {
    "lowEnergyShare": 0.7857,
    "highEnergyShare": 0.0976,
    "sideMidRmsRatio": 0.2608
  }
} satisfies MixCalibrationCatalog;
