import type { MixCalibrationCatalog } from '../_shared/mixCalibration';

/** Compact authored balance targets retained from earlier listening analysis. */
export const MIX_CALIBRATION = {
  "bass-2-step": {
    "lowEnergyShare": 0.5118,
    "highEnergyShare": 0.1557,
    "sideMidRmsRatio": 0.2626
  },
  "bass-future-garage": {
    "lowEnergyShare": 0.816,
    "highEnergyShare": 0.0135,
    "sideMidRmsRatio": 0.1656
  },
  "bass-drum-and-bass": {
    "lowEnergyShare": 0.5851,
    "highEnergyShare": 0.1731,
    "sideMidRmsRatio": 0.0036
  },
  "bass-liquid": {
    "lowEnergyShare": 0.8131,
    "highEnergyShare": 0.097,
    "sideMidRmsRatio": 0.1408
  },
  "bass-uk-garage": {
    "lowEnergyShare": 0.6346,
    "highEnergyShare": 0.0441,
    "sideMidRmsRatio": 0.5297
  },
  "bass-neurofunk": {
    "lowEnergyShare": 0.7156,
    "highEnergyShare": 0.0745,
    "sideMidRmsRatio": 0.0849
  },
  "bass-dubstep": {
    "lowEnergyShare": 0.8852,
    "highEnergyShare": 0.0704,
    "sideMidRmsRatio": 0.2128
  },
  "bass-breakbeat": {
    "lowEnergyShare": 0.5657,
    "highEnergyShare": 0.1225,
    "sideMidRmsRatio": 0.2779
  },
  "bass-grime": {
    "lowEnergyShare": 0.5054,
    "highEnergyShare": 0.2157,
    "sideMidRmsRatio": 0.0069
  }
} satisfies MixCalibrationCatalog;
