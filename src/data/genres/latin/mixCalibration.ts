import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "latin-vallenato": {
    "lowEnergyShare": 0.2385,
    "highEnergyShare": 0.3006,
    "sideMidRmsRatio": 0.243
  },
  "latin-chicha": {
    "lowEnergyShare": 0.3246,
    "highEnergyShare": 0.1374,
    "sideMidRmsRatio": 0.4044
  },
  "latin-bolero": {
    "lowEnergyShare": 0.4981,
    "highEnergyShare": 0.1433,
    "sideMidRmsRatio": 0.1246
  },
  "latin-sonidera": {
    "lowEnergyShare": 0.572,
    "highEnergyShare": 0.0923,
    "sideMidRmsRatio": 0.1422
  },
  "latin-latin-funk": {
    "lowEnergyShare": 0.2374,
    "highEnergyShare": 0.1934,
    "sideMidRmsRatio": 0.1424
  },
  "latin-latin-fusion": {
    "lowEnergyShare": 0.4295,
    "highEnergyShare": 0.0817,
    "sideMidRmsRatio": 0.3047
  },
  "latin-latin-pop": {
    "lowEnergyShare": 0.765,
    "highEnergyShare": 0.1113,
    "sideMidRmsRatio": 0.2976
  },
  "latin-cumbia": {
    "lowEnergyShare": 0.394,
    "highEnergyShare": 0.0215,
    "sideMidRmsRatio": 0.517
  },
  "latin-tropical": {
    "lowEnergyShare": 0.4282,
    "highEnergyShare": 0.1536,
    "sideMidRmsRatio": 0.4823
  }
} satisfies MixCalibrationCatalog;
