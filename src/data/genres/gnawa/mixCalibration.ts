import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "gnawa-gnawa-rock": {
    "lowEnergyShare": 0.6038,
    "highEnergyShare": 0.0831,
    "sideMidRmsRatio": 0.3134
  },
  "gnawa-gnawa-jazz": {
    "lowEnergyShare": 0.6511,
    "highEnergyShare": 0.0252,
    "sideMidRmsRatio": 0.2686
  },
  "gnawa-lila-trance": {
    "lowEnergyShare": 0.5417,
    "highEnergyShare": 0.2829,
    "sideMidRmsRatio": 0.1859
  },
  "gnawa-traditional": {
    "lowEnergyShare": 0.9438,
    "highEnergyShare": 0.0209,
    "sideMidRmsRatio": 0.1071
  }
} satisfies MixCalibrationCatalog;
