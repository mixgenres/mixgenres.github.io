import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "blues-slow-blues": {
    "lowEnergyShare": 0.0243,
    "highEnergyShare": 0.048,
    "sideMidRmsRatio": 0.1144
  },
  "blues-modern-blues": {
    "lowEnergyShare": 0.5325,
    "highEnergyShare": 0.1195,
    "sideMidRmsRatio": 0.3989
  },
  "blues-piedmont": {
    "lowEnergyShare": 0.457,
    "highEnergyShare": 0.0211,
    "sideMidRmsRatio": 0.382
  },
  "blues-blues-fusion": {
    "lowEnergyShare": 0.8825,
    "highEnergyShare": 0.0545,
    "sideMidRmsRatio": 0.1226
  },
  "blues-chicago": {
    "lowEnergyShare": 0.1737,
    "highEnergyShare": 0.0604,
    "sideMidRmsRatio": 0.0118
  },
  "blues-delta": {
    "lowEnergyShare": 0.0237,
    "highEnergyShare": 0.0703,
    "sideMidRmsRatio": 0.0042
  },
  "blues-texas": {
    "lowEnergyShare": 0.5843,
    "highEnergyShare": 0.2231,
    "sideMidRmsRatio": 0.3533
  }
} satisfies MixCalibrationCatalog;
