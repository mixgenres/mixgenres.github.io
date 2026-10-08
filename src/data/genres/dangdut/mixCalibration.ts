import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "dangdut-electronic-dangdut": {
    "lowEnergyShare": 0.617,
    "highEnergyShare": 0.05,
    "sideMidRmsRatio": 0.0159
  },
  "dangdut-rock-dangdut": {
    "lowEnergyShare": 0.4392,
    "highEnergyShare": 0.1877,
    "sideMidRmsRatio": 0.5644
  },
  "dangdut-classic": {
    "lowEnergyShare": 0.7811,
    "highEnergyShare": 0.0251,
    "sideMidRmsRatio": 0.1845
  },
  "dangdut-koplo": {
    "lowEnergyShare": 0.4072,
    "highEnergyShare": 0.0851,
    "sideMidRmsRatio": 0.3774
  }
} satisfies MixCalibrationCatalog;
