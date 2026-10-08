import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "persian-modern-persian": {
    "lowEnergyShare": 0.4518,
    "highEnergyShare": 0.0432,
    "sideMidRmsRatio": 0.7296
  },
  "persian-dastgah": {
    "lowEnergyShare": 0.0382,
    "highEnergyShare": 0.0387,
    "sideMidRmsRatio": 0.1784
  }
} satisfies MixCalibrationCatalog;
