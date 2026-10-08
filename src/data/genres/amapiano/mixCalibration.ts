import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "amapiano-vocal": {
    "lowEnergyShare": 0.4583,
    "highEnergyShare": 0.0098,
    "sideMidRmsRatio": 0.1957
  },
  "amapiano-log-drum-heavy": {
    "lowEnergyShare": 0.9297,
    "highEnergyShare": 0.0292,
    "sideMidRmsRatio": 0.0684
  },
  "amapiano-classic": {
    "lowEnergyShare": 0.6055,
    "highEnergyShare": 0.0088,
    "sideMidRmsRatio": 0.2085
  },
  "amapiano-private-school": {
    "lowEnergyShare": 0.8983,
    "highEnergyShare": 0.0219,
    "sideMidRmsRatio": 0.125
  },
  "amapiano-kwaito-crossover": {
    "lowEnergyShare": 0.7645,
    "highEnergyShare": 0.0335,
    "sideMidRmsRatio": 0.2112
  }
} satisfies MixCalibrationCatalog;
