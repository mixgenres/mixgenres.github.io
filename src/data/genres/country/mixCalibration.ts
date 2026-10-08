import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "country-bluegrass": {
    "lowEnergyShare": 0.2152,
    "highEnergyShare": 0.0623,
    "sideMidRmsRatio": 0.002
  },
  "country-western-swing": {
    "lowEnergyShare": 0.2699,
    "highEnergyShare": 0.0365,
    "sideMidRmsRatio": 0.0023
  },
  "country-bakersfield": {
    "lowEnergyShare": 0.621,
    "highEnergyShare": 0.1036,
    "sideMidRmsRatio": 0.7795
  },
  "country-honky-tonk": {
    "lowEnergyShare": 0.4785,
    "highEnergyShare": 0.0338,
    "sideMidRmsRatio": 0.0626
  },
  "country-americana": {
    "lowEnergyShare": 0.6388,
    "highEnergyShare": 0.0272,
    "sideMidRmsRatio": 0.2028
  },
  "country-country-pop": {
    "lowEnergyShare": 0.2272,
    "highEnergyShare": 0.2559,
    "sideMidRmsRatio": 0.4739
  },
  "country-outlaw": {
    "lowEnergyShare": 0.5337,
    "highEnergyShare": 0.0685,
    "sideMidRmsRatio": 0.0032
  }
} satisfies MixCalibrationCatalog;
