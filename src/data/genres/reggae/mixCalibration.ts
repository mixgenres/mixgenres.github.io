import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "reggae-roots": {
    "lowEnergyShare": 0.7929,
    "highEnergyShare": 0.0818,
    "sideMidRmsRatio": 0.1796
  },
  "reggae-one-drop": {
    "lowEnergyShare": 0.7716,
    "highEnergyShare": 0.0565,
    "sideMidRmsRatio": 0.2574
  },
  "reggae-rockers": {
    "lowEnergyShare": 0.7672,
    "highEnergyShare": 0.1018,
    "sideMidRmsRatio": 0.2633
  },
  "reggae-dancehall": {
    "lowEnergyShare": 0.8697,
    "highEnergyShare": 0.0431,
    "sideMidRmsRatio": 0.1648
  },
  "reggae-ska": {
    "lowEnergyShare": 0.2792,
    "highEnergyShare": 0.1692,
    "sideMidRmsRatio": 0.5229
  }
} satisfies MixCalibrationCatalog;
