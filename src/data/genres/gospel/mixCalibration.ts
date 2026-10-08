import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "gospel-gospel-soul": {
    "lowEnergyShare": 0.345,
    "highEnergyShare": 0.0302,
    "sideMidRmsRatio": 0.5708
  },
  "gospel-choir-gospel": {
    "lowEnergyShare": 0.5748,
    "highEnergyShare": 0.0376,
    "sideMidRmsRatio": 0.3539
  },
  "gospel-contemporary": {
    "lowEnergyShare": 0.7495,
    "highEnergyShare": 0.0812,
    "sideMidRmsRatio": 0.1654
  },
  "gospel-quartet": {
    "lowEnergyShare": 0.4966,
    "highEnergyShare": 0.0786,
    "sideMidRmsRatio": 0.0921
  }
} satisfies MixCalibrationCatalog;
