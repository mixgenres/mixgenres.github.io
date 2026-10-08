import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "indian-classical-thumri": {
    "lowEnergyShare": 0.148,
    "highEnergyShare": 0.1888,
    "sideMidRmsRatio": 0.1332
  },
  "indian-classical-tillana": {
    "lowEnergyShare": 0.0207,
    "highEnergyShare": 0.1595,
    "sideMidRmsRatio": 0.4716
  }
} satisfies MixCalibrationCatalog;
