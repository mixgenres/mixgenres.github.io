import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "pop-indie-pop": {
    "lowEnergyShare": 0.4744,
    "highEnergyShare": 0.204,
    "sideMidRmsRatio": 0.4166
  },
  "pop-power-pop": {
    "lowEnergyShare": 0.5923,
    "highEnergyShare": 0.2117,
    "sideMidRmsRatio": 0.5035
  },
  "pop-dream-pop": {
    "lowEnergyShare": 0.3841,
    "highEnergyShare": 0.2879,
    "sideMidRmsRatio": 0.3232
  },
  "pop-synth-pop": {
    "lowEnergyShare": 0.6651,
    "highEnergyShare": 0.109,
    "sideMidRmsRatio": 0.2996
  },
  "pop-contemporary": {
    "lowEnergyShare": 0.8508,
    "highEnergyShare": 0.0331,
    "sideMidRmsRatio": 0.239
  },
  "pop-dance-pop": {
    "lowEnergyShare": 0.7594,
    "highEnergyShare": 0.1255,
    "sideMidRmsRatio": 0.2369
  },
  "pop-maximal-idol-pop": {
    "lowEnergyShare": 0.8175,
    "highEnergyShare": 0.1011,
    "sideMidRmsRatio": 0.2393
  }
} satisfies MixCalibrationCatalog;
