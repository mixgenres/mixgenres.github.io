import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "andean-andean-fusion": {
    "lowEnergyShare": 0.9438,
    "highEnergyShare": 0.0073,
    "sideMidRmsRatio": 0.0018
  },
  "andean-nueva-cancion": {
    "lowEnergyShare": 0.7298,
    "highEnergyShare": 0.0108,
    "sideMidRmsRatio": 0.1973
  },
  "andean-saya": {
    "lowEnergyShare": 0.7838,
    "highEnergyShare": 0.0219,
    "sideMidRmsRatio": 0.0671
  },
  "andean-tinku": {
    "lowEnergyShare": 0.7731,
    "highEnergyShare": 0.0413,
    "sideMidRmsRatio": 0.5583
  },
  "andean-huayno": {
    "lowEnergyShare": 0.7155,
    "highEnergyShare": 0.0421,
    "sideMidRmsRatio": 0.1262
  },
  "andean-sanjuanito": {
    "lowEnergyShare": 0.8196,
    "highEnergyShare": 0.0947,
    "sideMidRmsRatio": 0.0208
  }
} satisfies MixCalibrationCatalog;
