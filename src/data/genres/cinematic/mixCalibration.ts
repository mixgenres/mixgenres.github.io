import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "cinematic-golden-age": {
    "lowEnergyShare": 0.0614,
    "highEnergyShare": 0.0365,
    "sideMidRmsRatio": 0.6221
  },
  "cinematic-modern-score": {
    "lowEnergyShare": 0.6231,
    "highEnergyShare": 0.0303,
    "sideMidRmsRatio": 0.6718
  },
  "cinematic-epic": {
    "lowEnergyShare": 0.4578,
    "highEnergyShare": 0.0254,
    "sideMidRmsRatio": 1.0005
  },
  "cinematic-hybrid": {
    "lowEnergyShare": 0.2736,
    "highEnergyShare": 0.0173,
    "sideMidRmsRatio": 0.7049
  },
  "cinematic-ambient-score": {
    "lowEnergyShare": 0.5565,
    "highEnergyShare": 0.0186,
    "sideMidRmsRatio": 0.3431
  }
} satisfies MixCalibrationCatalog;
