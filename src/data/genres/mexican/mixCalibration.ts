import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "mexican-tierra-caliente": {
    "lowEnergyShare": 0.5441,
    "highEnergyShare": 0.3224,
    "sideMidRmsRatio": 0.0977
  },
  "mexican-conjunto": {
    "lowEnergyShare": 0.2439,
    "highEnergyShare": 0.1909,
    "sideMidRmsRatio": 0.3415
  },
  "mexican-bolero-ranchero": {
    "lowEnergyShare": 0.4725,
    "highEnergyShare": 0.0899,
    "sideMidRmsRatio": 0.9348
  },
  "mexican-ranchera": {
    "lowEnergyShare": 0.5098,
    "highEnergyShare": 0.0595,
    "sideMidRmsRatio": 0.0617
  },
  "mexican-mariachi": {
    "lowEnergyShare": 0.7697,
    "highEnergyShare": 0.0788,
    "sideMidRmsRatio": 0.2958
  },
  "mexican-son-jarocho": {
    "lowEnergyShare": 0.4243,
    "highEnergyShare": 0.0032,
    "sideMidRmsRatio": 0.004
  }
} satisfies MixCalibrationCatalog;
