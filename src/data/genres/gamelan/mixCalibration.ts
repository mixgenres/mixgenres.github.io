import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "gamelan-degung": {
    "lowEnergyShare": 0.0257,
    "highEnergyShare": 0.1475,
    "sideMidRmsRatio": 0.1753
  },
  "gamelan-balinese-gong-kebyar": {
    "lowEnergyShare": 0.3366,
    "highEnergyShare": 0.2471,
    "sideMidRmsRatio": 0.8993
  }
} satisfies MixCalibrationCatalog;
