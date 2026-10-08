import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "house-afro-house": {
    "recording": "Black Coffee - We Dance Again",
    "audio": "samples/Black Coffee - We Dance Again.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      98.48,
      182.9
    ],
    "targets": {
      "rmsDbfs": -17.853,
      "crestDb": 15.579,
      "lowEnergyShare": 0.9141,
      "highEnergyShare": 0.0022,
      "sideMidRmsRatio": 0.3179
    }
  },
  "house-chicago-house": {
    "recording": "Frankie Knuckles - Your Love",
    "audio": "samples/Frankie Knuckles - Your Love.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      144.49,
      268.35
    ],
    "targets": {
      "rmsDbfs": -13.394,
      "crestDb": 12.541,
      "lowEnergyShare": 0.5362,
      "highEnergyShare": 0.0975,
      "sideMidRmsRatio": 0.239
    }
  },
  "house-tech-house": {
    "recording": "Green Velvet - Flash",
    "audio": "samples/Green Velvet - Flash.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      150.51,
      279.52
    ],
    "targets": {
      "rmsDbfs": -15.13,
      "crestDb": 10.097,
      "lowEnergyShare": 0.9018,
      "highEnergyShare": 0.0531,
      "sideMidRmsRatio": 0.1448
    }
  },
  "house-deep-house": {
    "recording": "Mr. Fingers - Can You Feel It",
    "audio": "samples/Mr. Fingers - Can You Feel It.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      120.93,
      224.59
    ],
    "targets": {
      "rmsDbfs": -15.603,
      "crestDb": 14.322,
      "lowEnergyShare": 0.8306,
      "highEnergyShare": 0.0885,
      "sideMidRmsRatio": 0.181
    }
  },
  "house-acid-house": {
    "recording": "Phuture - Acid Tracks",
    "audio": "samples/Phuture - Acid Tracks.mp3",
    "source": "original-with-vocals",
    "windowsSeconds": [
      258.87,
      480.76
    ],
    "targets": {
      "rmsDbfs": -17.579,
      "crestDb": 14.708,
      "lowEnergyShare": 0.8156,
      "highEnergyShare": 0.0844,
      "sideMidRmsRatio": 0.1903
    }
  },
  "house-garage-piano-house": {
    "recording": "Robin S. - Show Me Love",
    "audio": "samples/Robin S. - Show Me Love.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      83.9,
      155.81
    ],
    "targets": {
      "rmsDbfs": -13.148,
      "crestDb": 11.394,
      "lowEnergyShare": 0.7598,
      "highEnergyShare": 0.0837,
      "sideMidRmsRatio": 0.2525
    }
  },
  "house-progressive-house": {
    "recording": "Sasha - Xpander",
    "audio": "samples/Sasha - Xpander.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      142.13,
      263.96
    ],
    "targets": {
      "rmsDbfs": -13.743,
      "crestDb": 13.01,
      "lowEnergyShare": 0.5516,
      "highEnergyShare": 0.1259,
      "sideMidRmsRatio": 0.3602
    }
  }
} satisfies ReferenceMixCatalog;
