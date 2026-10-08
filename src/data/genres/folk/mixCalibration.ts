import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "folk-folk-revival": {
    "lowEnergyShare": 0.2348,
    "highEnergyShare": 0.0727,
    "sideMidRmsRatio": 0.3596
  },
  "folk-appalachian": {
    "lowEnergyShare": 0.481,
    "highEnergyShare": 0.043,
    "sideMidRmsRatio": 0.3847
  },
  "folk-contemporary-folk": {
    "lowEnergyShare": 0.7134,
    "highEnergyShare": 0.0107,
    "sideMidRmsRatio": 0.4758
  },
  "folk-singer-songwriter": {
    "lowEnergyShare": 0.6718,
    "highEnergyShare": 0.0133,
    "sideMidRmsRatio": 0.2477
  },
  "folk-celtic": {
    "lowEnergyShare": 0.3472,
    "highEnergyShare": 0.1251,
    "sideMidRmsRatio": 0.048
  },
  "folk-old-time": {
    "lowEnergyShare": 0.0148,
    "highEnergyShare": 0.2434,
    "sideMidRmsRatio": 0.0239
  }
} satisfies MixCalibrationCatalog;
