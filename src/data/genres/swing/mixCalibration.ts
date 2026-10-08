import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "swing-balboa": {
    "lowEnergyShare": 0.5159,
    "highEnergyShare": 0.1355,
    "sideMidRmsRatio": 0.5353
  },
  "swing-electro-swing": {
    "lowEnergyShare": 0.4494,
    "highEnergyShare": 0.0879,
    "sideMidRmsRatio": 0.2656
  },
  "swing-slow-swing": {
    "lowEnergyShare": 0.1885,
    "highEnergyShare": 0.0474,
    "sideMidRmsRatio": 0.4863
  },
  "swing-charleston": {
    "lowEnergyShare": 0.0703,
    "highEnergyShare": 0.2079,
    "sideMidRmsRatio": 0.0014
  },
  "swing-west-coast-swing": {
    "lowEnergyShare": 0.6007,
    "highEnergyShare": 0.0951,
    "sideMidRmsRatio": 0.5417
  }
} satisfies MixCalibrationCatalog;
