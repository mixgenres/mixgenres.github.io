import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "jazz-hard-bop": {
    "lowEnergyShare": 0.3269,
    "highEnergyShare": 0.1104,
    "sideMidRmsRatio": 0.5121
  },
  "jazz-bebop": {
    "lowEnergyShare": 0.1124,
    "highEnergyShare": 0.3587,
    "sideMidRmsRatio": 0.0019
  },
  "jazz-gypsy-jazz": {
    "lowEnergyShare": 0.0627,
    "highEnergyShare": 0.0789,
    "sideMidRmsRatio": 0.0662
  },
  "jazz-cool": {
    "lowEnergyShare": 0.1929,
    "highEnergyShare": 0.0605,
    "sideMidRmsRatio": 0.0028
  },
  "jazz-modal": {
    "lowEnergyShare": 0.2674,
    "highEnergyShare": 0.265,
    "sideMidRmsRatio": 0.3951
  },
  "jazz-free-jazz": {
    "lowEnergyShare": 0.2529,
    "highEnergyShare": 0.2258,
    "sideMidRmsRatio": 0.6654
  },
  "jazz-jazz-fusion": {
    "lowEnergyShare": 0.3608,
    "highEnergyShare": 0.0795,
    "sideMidRmsRatio": 0.1165
  }
} satisfies MixCalibrationCatalog;
