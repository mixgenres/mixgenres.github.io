import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "desert-blues-psychedelic-desert": {
    "lowEnergyShare": 0.6008,
    "highEnergyShare": 0.1349,
    "sideMidRmsRatio": 0.3456
  },
  "desert-blues-acoustic-tuareg": {
    "lowEnergyShare": 0.5305,
    "highEnergyShare": 0.0321,
    "sideMidRmsRatio": 0.4605
  },
  "desert-blues-tishoumaren": {
    "lowEnergyShare": 0.8272,
    "highEnergyShare": 0.0228,
    "sideMidRmsRatio": 0.2163
  }
} satisfies MixCalibrationCatalog;
