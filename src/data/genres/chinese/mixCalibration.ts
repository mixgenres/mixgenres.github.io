import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "chinese-cantonese-ensemble": {
    "lowEnergyShare": 0.0015,
    "highEnergyShare": 0.0718,
    "sideMidRmsRatio": 0.3042
  },
  "chinese-chaozhou": {
    "lowEnergyShare": 0.2103,
    "highEnergyShare": 0.0491,
    "sideMidRmsRatio": 0.0021
  },
  "chinese-jingju": {
    "lowEnergyShare": 0.0692,
    "highEnergyShare": 0.5799,
    "sideMidRmsRatio": 0.7027
  }
} satisfies MixCalibrationCatalog;
