import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "arabic-takht": {
    "lowEnergyShare": 0.3834,
    "highEnergyShare": 0.1172,
    "sideMidRmsRatio": 0.0625
  },
  "arabic-instrumental-maqam": {
    "lowEnergyShare": 0.0255,
    "highEnergyShare": 0.0772,
    "sideMidRmsRatio": 0.3482
  },
  "arabic-tarab": {
    "lowEnergyShare": 0.1593,
    "highEnergyShare": 0.2115,
    "sideMidRmsRatio": 0.0064
  }
} satisfies MixCalibrationCatalog;
