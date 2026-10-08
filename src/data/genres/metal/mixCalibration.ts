import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "metal-doom": {
    "lowEnergyShare": 0.4495,
    "highEnergyShare": 0.2813,
    "sideMidRmsRatio": 0.4369
  },
  "metal-death": {
    "lowEnergyShare": 0.3789,
    "highEnergyShare": 0.5146,
    "sideMidRmsRatio": 0.7487
  },
  "metal-black": {
    "lowEnergyShare": 0.2828,
    "highEnergyShare": 0.3224,
    "sideMidRmsRatio": 0.5028
  },
  "metal-industrial-metal": {
    "lowEnergyShare": 0.3951,
    "highEnergyShare": 0.4611,
    "sideMidRmsRatio": 0.5479
  },
  "metal-progressive-metal": {
    "lowEnergyShare": 0.446,
    "highEnergyShare": 0.2472,
    "sideMidRmsRatio": 0.4963
  }
} satisfies MixCalibrationCatalog;
