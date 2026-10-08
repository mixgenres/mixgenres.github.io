import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "electronic-idm": {
    "lowEnergyShare": 0.9765,
    "highEnergyShare": 0.0048,
    "sideMidRmsRatio": 0.1444
  },
  "electronic-detroit-techno": {
    "lowEnergyShare": 0.6145,
    "highEnergyShare": 0.1063,
    "sideMidRmsRatio": 0.1199
  },
  "electronic-trance": {
    "lowEnergyShare": 0.59,
    "highEnergyShare": 0.0644,
    "sideMidRmsRatio": 0.2567
  },
  "electronic-techno": {
    "lowEnergyShare": 0.5805,
    "highEnergyShare": 0.0391,
    "sideMidRmsRatio": 0.1716
  },
  "electronic-melodic-electronic": {
    "lowEnergyShare": 0.8039,
    "highEnergyShare": 0.0282,
    "sideMidRmsRatio": 0.1729
  },
  "electronic-synthwave": {
    "lowEnergyShare": 0.4908,
    "highEnergyShare": 0.0393,
    "sideMidRmsRatio": 0.1927
  },
  "electronic-minimal": {
    "lowEnergyShare": 0.9029,
    "highEnergyShare": 0.0049,
    "sideMidRmsRatio": 0.1397
  }
} satisfies MixCalibrationCatalog;
