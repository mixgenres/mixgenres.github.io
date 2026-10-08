import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "bollywood-folk-cinematic": {
    "lowEnergyShare": 0.8479,
    "highEnergyShare": 0.0318,
    "sideMidRmsRatio": 0.3909
  },
  "bollywood-modern": {
    "lowEnergyShare": 0.8711,
    "highEnergyShare": 0.0309,
    "sideMidRmsRatio": 0.0025
  },
  "bollywood-romantic": {
    "lowEnergyShare": 0.6979,
    "highEnergyShare": 0.0261,
    "sideMidRmsRatio": 0.4436
  },
  "bollywood-disco-bollywood": {
    "lowEnergyShare": 0.1582,
    "highEnergyShare": 0.1724,
    "sideMidRmsRatio": 0.0034
  },
  "bollywood-golden-age": {
    "lowEnergyShare": 0.2227,
    "highEnergyShare": 0.0536,
    "sideMidRmsRatio": 0.0047
  },
  "bollywood-electronic-club": {
    "lowEnergyShare": 0.8377,
    "highEnergyShare": 0.0264,
    "sideMidRmsRatio": 0.3042
  }
} satisfies MixCalibrationCatalog;
