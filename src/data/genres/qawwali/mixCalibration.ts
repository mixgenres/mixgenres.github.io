import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "qawwali-contemporary-fusion": {
    "lowEnergyShare": 0.7213,
    "highEnergyShare": 0.006,
    "sideMidRmsRatio": 0.4011
  },
  "qawwali-traditional": {
    "lowEnergyShare": 0.869,
    "highEnergyShare": 0.05,
    "sideMidRmsRatio": 0.0412
  },
  "qawwali-hamd-naat": {
    "lowEnergyShare": 0.7086,
    "highEnergyShare": 0.1194,
    "sideMidRmsRatio": 0.4819
  },
  "qawwali-ghazal-qawwali": {
    "lowEnergyShare": 0.6703,
    "highEnergyShare": 0.0428,
    "sideMidRmsRatio": 0.0806
  }
} satisfies MixCalibrationCatalog;
