import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "rock-japanese-melodic-rock": {
    "lowEnergyShare": 0.7382,
    "highEnergyShare": 0.1058,
    "sideMidRmsRatio": 0.3684
  },
  "rock-rock-and-roll": {
    "lowEnergyShare": 0.3109,
    "highEnergyShare": 0.1419,
    "sideMidRmsRatio": 0.0075
  },
  "rock-psychedelic": {
    "lowEnergyShare": 0.6608,
    "highEnergyShare": 0.1757,
    "sideMidRmsRatio": 0.1076
  },
  "rock-classic-rock": {
    "lowEnergyShare": 0.7638,
    "highEnergyShare": 0.0208,
    "sideMidRmsRatio": 0.3835
  },
  "rock-shoegaze": {
    "lowEnergyShare": 0.3258,
    "highEnergyShare": 0.4394,
    "sideMidRmsRatio": 0.5187
  },
  "rock-alternative": {
    "lowEnergyShare": 0.5925,
    "highEnergyShare": 0.1775,
    "sideMidRmsRatio": 0.4716
  }
} satisfies MixCalibrationCatalog;
