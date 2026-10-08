import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "mbalax-electronic-fusion": {
    "lowEnergyShare": 0.6174,
    "highEnergyShare": 0.041,
    "sideMidRmsRatio": 0.4457
  },
  "mbalax-sabar-heavy": {
    "lowEnergyShare": 0.4076,
    "highEnergyShare": 0.081,
    "sideMidRmsRatio": 0.5131
  },
  "mbalax-pop-mbalax": {
    "lowEnergyShare": 0.6114,
    "highEnergyShare": 0.0426,
    "sideMidRmsRatio": 0.5791
  },
  "mbalax-classic": {
    "lowEnergyShare": 0.3986,
    "highEnergyShare": 0.0513,
    "sideMidRmsRatio": 0.0034
  }
} satisfies MixCalibrationCatalog;
