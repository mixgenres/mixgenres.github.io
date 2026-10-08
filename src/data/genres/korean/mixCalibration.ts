import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "korean-sanjo": {
    "lowEnergyShare": 0.3225,
    "highEnergyShare": 0.0284,
    "sideMidRmsRatio": 0.3242
  },
  "korean-jeongak": {
    "lowEnergyShare": 0.3398,
    "highEnergyShare": 0.2222,
    "sideMidRmsRatio": 0.5805
  },
  "korean-samulnori": {
    "lowEnergyShare": 0.4962,
    "highEnergyShare": 0.0447,
    "sideMidRmsRatio": 0.3304
  },
  "korean-minyo": {
    "lowEnergyShare": 0.2664,
    "highEnergyShare": 0.1484,
    "sideMidRmsRatio": 0.3693
  }
} satisfies MixCalibrationCatalog;
