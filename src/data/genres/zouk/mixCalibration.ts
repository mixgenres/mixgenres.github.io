import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "zouk-kompa-crossover": {
    "lowEnergyShare": 0.6386,
    "highEnergyShare": 0.0429,
    "sideMidRmsRatio": 0.2523
  },
  "zouk-zouk-fusion": {
    "lowEnergyShare": 0.8951,
    "highEnergyShare": 0.0185,
    "sideMidRmsRatio": 0.1612
  },
  "zouk-lambazouk-oriented": {
    "lowEnergyShare": 0.571,
    "highEnergyShare": 0.1338,
    "sideMidRmsRatio": 0.0036
  },
  "zouk-zouk-randb": {
    "lowEnergyShare": 0.44,
    "highEnergyShare": 0.0446,
    "sideMidRmsRatio": 0.0028
  },
  "zouk-zouk-love": {
    "lowEnergyShare": 0.5251,
    "highEnergyShare": 0.1367,
    "sideMidRmsRatio": 0.3875
  },
  "zouk-cabo-zouk": {
    "lowEnergyShare": 0.7622,
    "highEnergyShare": 0.0806,
    "sideMidRmsRatio": 0.3309
  }
} satisfies MixCalibrationCatalog;
