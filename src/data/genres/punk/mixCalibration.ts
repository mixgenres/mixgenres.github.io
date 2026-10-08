import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "punk-pop-punk": {
    "lowEnergyShare": 0.4054,
    "highEnergyShare": 0.2965,
    "sideMidRmsRatio": 0.5028
  },
  "punk-noise-punk": {
    "lowEnergyShare": 0.4817,
    "highEnergyShare": 0.3149,
    "sideMidRmsRatio": 0.3911
  },
  "punk-hardcore": {
    "lowEnergyShare": 0.1498,
    "highEnergyShare": 0.109,
    "sideMidRmsRatio": 0.0061
  },
  "punk-punk": {
    "lowEnergyShare": 0.4932,
    "highEnergyShare": 0.1895,
    "sideMidRmsRatio": 0.7435
  }
} satisfies MixCalibrationCatalog;
