import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "afrobeats-afrofusion": {
    "lowEnergyShare": 0.7944,
    "highEnergyShare": 0.0427,
    "sideMidRmsRatio": 0.106
  },
  "afrobeats-afropop": {
    "lowEnergyShare": 0.6742,
    "highEnergyShare": 0.059,
    "sideMidRmsRatio": 0.3359
  },
  "afrobeats-alte": {
    "lowEnergyShare": 0.4109,
    "highEnergyShare": 0.0812,
    "sideMidRmsRatio": 0.3371
  },
  "afrobeats-randb-afrobeats": {
    "lowEnergyShare": 0.8873,
    "highEnergyShare": 0.0167,
    "sideMidRmsRatio": 0.1605
  },
  "afrobeats-contemporary-afrobeats": {
    "lowEnergyShare": 0.8221,
    "highEnergyShare": 0.0222,
    "sideMidRmsRatio": 0.0027
  }
} satisfies MixCalibrationCatalog;
