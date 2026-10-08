import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "funk-disco": {
    "lowEnergyShare": 0.5642,
    "highEnergyShare": 0.1852,
    "sideMidRmsRatio": 0.2732
  },
  "funk-boogie": {
    "lowEnergyShare": 0.6833,
    "highEnergyShare": 0.149,
    "sideMidRmsRatio": 0.3658
  },
  "funk-james-brown-the-one": {
    "lowEnergyShare": 0.8659,
    "highEnergyShare": 0.0519,
    "sideMidRmsRatio": 0.0043
  },
  "funk-funk": {
    "lowEnergyShare": 0.8001,
    "highEnergyShare": 0.0802,
    "sideMidRmsRatio": 0.3031
  },
  "funk-p-funk": {
    "lowEnergyShare": 0.6437,
    "highEnergyShare": 0.0517,
    "sideMidRmsRatio": 0.238
  },
  "funk-minneapolis": {
    "lowEnergyShare": 0.7566,
    "highEnergyShare": 0.1549,
    "sideMidRmsRatio": 0.2104
  },
  "funk-hi-nrg": {
    "lowEnergyShare": 0.5887,
    "highEnergyShare": 0.1116,
    "sideMidRmsRatio": 0.5479
  }
} satisfies MixCalibrationCatalog;
