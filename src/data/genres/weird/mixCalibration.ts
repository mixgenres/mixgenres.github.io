import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "weird-circuit-bent-broken-electronics": {
    "lowEnergyShare": 0.6134,
    "highEnergyShare": 0.0133,
    "sideMidRmsRatio": 0.0684
  },
  "weird-deconstructed": {
    "lowEnergyShare": 0.3763,
    "highEnergyShare": 0.2181,
    "sideMidRmsRatio": 0.6391
  },
  "weird-zeuhl": {
    "lowEnergyShare": 0.63,
    "highEnergyShare": 0.1065,
    "sideMidRmsRatio": 0.3226
  },
  "weird-noise": {
    "lowEnergyShare": 0.197,
    "highEnergyShare": 0.4731,
    "sideMidRmsRatio": 0.3822
  },
  "weird-polymetric": {
    "lowEnergyShare": 0.5508,
    "highEnergyShare": 0.3103,
    "sideMidRmsRatio": 0.5822
  },
  "weird-musique-concrete": {
    "lowEnergyShare": 0.0281,
    "highEnergyShare": 0.029,
    "sideMidRmsRatio": 0.0147
  },
  "weird-microsound": {
    "lowEnergyShare": 0.6109,
    "highEnergyShare": 0.3062,
    "sideMidRmsRatio": 0.4024
  },
  "weird-drone": {
    "lowEnergyShare": 0.8294,
    "highEnergyShare": 0.0579,
    "sideMidRmsRatio": 0.4855
  }
} satisfies MixCalibrationCatalog;
