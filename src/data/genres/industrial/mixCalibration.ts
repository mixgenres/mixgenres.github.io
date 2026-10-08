import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "industrial-industrial-metal": {
    "lowEnergyShare": 0.3951,
    "highEnergyShare": 0.4611,
    "sideMidRmsRatio": 0.5479
  },
  "industrial-industrial-rock": {
    "lowEnergyShare": 0.3455,
    "highEnergyShare": 0.2179,
    "sideMidRmsRatio": 0.4541
  }
} satisfies MixCalibrationCatalog;
