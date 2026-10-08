import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "ethiopian-ethiopian-funk": {
    "lowEnergyShare": 0.3001,
    "highEnergyShare": 0.3669,
    "sideMidRmsRatio": 0.0866
  },
  "ethiopian-tizita": {
    "lowEnergyShare": 0.9251,
    "highEnergyShare": 0.0094,
    "sideMidRmsRatio": 0.1663
  },
  "ethiopian-modern-ethio-jazz": {
    "lowEnergyShare": 0.5734,
    "highEnergyShare": 0.0769,
    "sideMidRmsRatio": 0.0504
  },
  "ethiopian-ethio-jazz": {
    "lowEnergyShare": 0.4361,
    "highEnergyShare": 0.2285,
    "sideMidRmsRatio": 0.0038
  }
} satisfies MixCalibrationCatalog;
