import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "turkish-anatolian-rock": {
    "lowEnergyShare": 0.6964,
    "highEnergyShare": 0.036,
    "sideMidRmsRatio": 0.3513
  },
  "turkish-turkish-folk": {
    "lowEnergyShare": 0.3857,
    "highEnergyShare": 0.0112,
    "sideMidRmsRatio": 0.1048
  },
  "turkish-arabesque": {
    "lowEnergyShare": 0.3054,
    "highEnergyShare": 0.2294,
    "sideMidRmsRatio": 0.6769
  },
  "turkish-ottoman-classical": {
    "lowEnergyShare": 0.0863,
    "highEnergyShare": 0.0005,
    "sideMidRmsRatio": 0.007
  }
} satisfies MixCalibrationCatalog;
