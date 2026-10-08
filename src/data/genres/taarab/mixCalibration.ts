import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "taarab-zanzibar": {
    "lowEnergyShare": 0.1601,
    "highEnergyShare": 0.0429,
    "sideMidRmsRatio": 0.6629
  },
  "taarab-swahili-orchestra": {
    "lowEnergyShare": 0.5222,
    "highEnergyShare": 0.0611,
    "sideMidRmsRatio": 0.0021
  },
  "taarab-classical-orchestra": {
    "lowEnergyShare": 0.2652,
    "highEnergyShare": 0.0251,
    "sideMidRmsRatio": 0.3798
  },
  "taarab-kidumbak": {
    "lowEnergyShare": 0.5346,
    "highEnergyShare": 0.0807,
    "sideMidRmsRatio": 0.0187
  },
  "taarab-modern-taarab": {
    "lowEnergyShare": 0.6921,
    "highEnergyShare": 0.0315,
    "sideMidRmsRatio": 0.0112
  }
} satisfies MixCalibrationCatalog;
