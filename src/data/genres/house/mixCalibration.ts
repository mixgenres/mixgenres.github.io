import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "house-afro-house": {
    "lowEnergyShare": 0.9141,
    "highEnergyShare": 0.0022,
    "sideMidRmsRatio": 0.3179
  },
  "house-chicago-house": {
    "lowEnergyShare": 0.5362,
    "highEnergyShare": 0.0975,
    "sideMidRmsRatio": 0.239
  },
  "house-tech-house": {
    "lowEnergyShare": 0.9018,
    "highEnergyShare": 0.0531,
    "sideMidRmsRatio": 0.1448
  },
  "house-deep-house": {
    "lowEnergyShare": 0.8306,
    "highEnergyShare": 0.0885,
    "sideMidRmsRatio": 0.181
  },
  "house-garage-piano-house": {
    "lowEnergyShare": 0.7598,
    "highEnergyShare": 0.0837,
    "sideMidRmsRatio": 0.2525
  },
  "house-progressive-house": {
    "lowEnergyShare": 0.5516,
    "highEnergyShare": 0.1259,
    "sideMidRmsRatio": 0.3602
  }
} satisfies MixCalibrationCatalog;
