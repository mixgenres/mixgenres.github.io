import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "ambient-downtempo-ambient": {
    "lowEnergyShare": 0.7298,
    "highEnergyShare": 0.0846,
    "sideMidRmsRatio": 0.1662
  },
  "ambient-atmospheric": {
    "lowEnergyShare": 0.1178,
    "highEnergyShare": 0.002,
    "sideMidRmsRatio": 1.0636
  },
  "ambient-cinematic-ambient": {
    "lowEnergyShare": 0.4181,
    "highEnergyShare": 0.0181,
    "sideMidRmsRatio": 0.6544
  },
  "ambient-organic-ambient": {
    "lowEnergyShare": 0.3579,
    "highEnergyShare": 0.0168,
    "sideMidRmsRatio": 0.3589
  },
  "ambient-drone": {
    "lowEnergyShare": 0.9088,
    "highEnergyShare": 0.0051,
    "sideMidRmsRatio": 0.3008
  },
  "ambient-neo-classical-ambient": {
    "lowEnergyShare": 0.3301,
    "highEnergyShare": 0.0235,
    "sideMidRmsRatio": 0.5561
  }
} satisfies MixCalibrationCatalog;
