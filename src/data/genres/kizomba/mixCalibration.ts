import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "kizomba-semba-derived": {
    "lowEnergyShare": 0.8713,
    "highEnergyShare": 0.0051,
    "sideMidRmsRatio": 0.3147
  },
  "kizomba-urban-kiz": {
    "lowEnergyShare": 0.9212,
    "highEnergyShare": 0.0342,
    "sideMidRmsRatio": 0.2164
  },
  "kizomba-tarraxinha": {
    "lowEnergyShare": 0.7098,
    "highEnergyShare": 0.0317,
    "sideMidRmsRatio": 0.0453
  },
  "kizomba-fusion-kiz": {
    "lowEnergyShare": 0.7565,
    "highEnergyShare": 0.108,
    "sideMidRmsRatio": 0.2542
  },
  "kizomba-traditional": {
    "lowEnergyShare": 0.6231,
    "highEnergyShare": 0.1966,
    "sideMidRmsRatio": 0.0065
  }
} satisfies MixCalibrationCatalog;
