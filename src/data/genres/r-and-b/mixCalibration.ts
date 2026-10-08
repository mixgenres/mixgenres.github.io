import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "r-and-b-contemporary-randb": {
    "lowEnergyShare": 0.8098,
    "highEnergyShare": 0.0704,
    "sideMidRmsRatio": 0.0666
  },
  "r-and-b-quiet-storm": {
    "lowEnergyShare": 0.5199,
    "highEnergyShare": 0.1988,
    "sideMidRmsRatio": 0.3929
  },
  "r-and-b-memphis-soul": {
    "lowEnergyShare": 0.6065,
    "highEnergyShare": 0.1297,
    "sideMidRmsRatio": 0.1466
  },
  "r-and-b-new-jack-swing": {
    "lowEnergyShare": 0.7769,
    "highEnergyShare": 0.1375,
    "sideMidRmsRatio": 0.3632
  },
  "r-and-b-southern-soul": {
    "lowEnergyShare": 0.7297,
    "highEnergyShare": 0.0331,
    "sideMidRmsRatio": 0.004
  },
  "r-and-b-philly-soul": {
    "lowEnergyShare": 0.3769,
    "highEnergyShare": 0.1894,
    "sideMidRmsRatio": 0.4357
  }
} satisfies MixCalibrationCatalog;
