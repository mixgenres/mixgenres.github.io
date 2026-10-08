import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "hip-hop-golden-age": {
    "lowEnergyShare": 0.7922,
    "highEnergyShare": 0.0473,
    "sideMidRmsRatio": 0.2286
  },
  "hip-hop-drill": {
    "lowEnergyShare": 0.8684,
    "highEnergyShare": 0.067,
    "sideMidRmsRatio": 0.1487
  },
  "hip-hop-g-funk": {
    "lowEnergyShare": 0.8135,
    "highEnergyShare": 0.1119,
    "sideMidRmsRatio": 0.482
  },
  "hip-hop-trap": {
    "lowEnergyShare": 0.887,
    "highEnergyShare": 0.0289,
    "sideMidRmsRatio": 0.1571
  },
  "hip-hop-jazz-rap": {
    "lowEnergyShare": 0.833,
    "highEnergyShare": 0.0913,
    "sideMidRmsRatio": 0.2478
  },
  "hip-hop-boom-bap": {
    "lowEnergyShare": 0.7589,
    "highEnergyShare": 0.0507,
    "sideMidRmsRatio": 0.0614
  },
  "hip-hop-lo-fi": {
    "lowEnergyShare": 0.4573,
    "highEnergyShare": 0.0052,
    "sideMidRmsRatio": 0.0386
  },
  "hip-hop-southern": {
    "lowEnergyShare": 0.8481,
    "highEnergyShare": 0.0321,
    "sideMidRmsRatio": 0.0989
  }
} satisfies MixCalibrationCatalog;
