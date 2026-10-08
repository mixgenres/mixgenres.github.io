import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "afrobeat-highlife": {
    "lowEnergyShare": 0.6909,
    "highEnergyShare": 0.0642,
    "sideMidRmsRatio": 0.0878
  },
  "afrobeat-classic-afrobeat": {
    "lowEnergyShare": 0.7241,
    "highEnergyShare": 0.0532,
    "sideMidRmsRatio": 0.3095
  },
  "afrobeat-funk-heavy-afrobeat": {
    "lowEnergyShare": 0.5974,
    "highEnergyShare": 0.1131,
    "sideMidRmsRatio": 0.302
  },
  "afrobeat-palm-wine": {
    "lowEnergyShare": 0.3025,
    "highEnergyShare": 0.0016,
    "sideMidRmsRatio": 0.0588
  },
  "afrobeat-jazz-heavy-afrobeat": {
    "lowEnergyShare": 0.5204,
    "highEnergyShare": 0.0766,
    "sideMidRmsRatio": 0.342
  }
} satisfies MixCalibrationCatalog;
