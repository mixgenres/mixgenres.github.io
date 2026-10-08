import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "bachata-bachata-mambo": {
    "lowEnergyShare": 0.4534,
    "highEnergyShare": 0.0812,
    "sideMidRmsRatio": 0.0831
  },
  "bachata-dominican": {
    "lowEnergyShare": 0.4542,
    "highEnergyShare": 0.4031,
    "sideMidRmsRatio": 0.1327
  },
  "bachata-moderna": {
    "lowEnergyShare": 0.4082,
    "highEnergyShare": 0.1132,
    "sideMidRmsRatio": 0.3892
  },
  "bachata-traditional-bolero-bachata": {
    "lowEnergyShare": 0.4287,
    "highEnergyShare": 0.059,
    "sideMidRmsRatio": 0.2712
  },
  "bachata-urban": {
    "lowEnergyShare": 0.6457,
    "highEnergyShare": 0.0598,
    "sideMidRmsRatio": 0.0037
  }
} satisfies MixCalibrationCatalog;
