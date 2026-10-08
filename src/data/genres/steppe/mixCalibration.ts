import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "steppe-khoomei": {
    "lowEnergyShare": 0.0027,
    "highEnergyShare": 0.0046,
    "sideMidRmsRatio": 0.3063
  },
  "steppe-sygyt": {
    "lowEnergyShare": 0.1459,
    "highEnergyShare": 0.7148,
    "sideMidRmsRatio": 0.5051
  },
  "steppe-kargyraa": {
    "lowEnergyShare": 0.5607,
    "highEnergyShare": 0.003,
    "sideMidRmsRatio": 0.5242
  },
  "steppe-morin-khuur": {
    "lowEnergyShare": 0.0616,
    "highEnergyShare": 0.05,
    "sideMidRmsRatio": 0.5933
  },
  "steppe-folk-rock-fusion": {
    "lowEnergyShare": 0.7356,
    "highEnergyShare": 0.0298,
    "sideMidRmsRatio": 0.4425
  }
} satisfies MixCalibrationCatalog;
