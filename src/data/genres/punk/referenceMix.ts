import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "punk-post-hardcore": {
    "recording": "Fugazi - Waiting Room",
    "audio": "samples/Fugazi - Waiting Room.mp3",
    "source": "original-with-vocals",
    "windowsSeconds": [
      61.24,
      113.73
    ],
    "targets": {
      "rmsDbfs": -15.854,
      "crestDb": 14.777,
      "lowEnergyShare": 0.5172,
      "highEnergyShare": 0.218,
      "sideMidRmsRatio": 0.337
    }
  },
  "punk-pop-punk": {
    "recording": "Green Day - Basket Case",
    "audio": "samples/Green Day - Basket Case.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      68.01,
      126.31
    ],
    "targets": {
      "rmsDbfs": -14.483,
      "crestDb": 13.708,
      "lowEnergyShare": 0.4054,
      "highEnergyShare": 0.2965,
      "sideMidRmsRatio": 0.5028
    }
  },
  "punk-noise-punk": {
    "recording": "Melt-Banana - Shield for Your Eyes",
    "audio": "samples/Melt-Banana - Shield for Your Eyes.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      84.87,
      157.61
    ],
    "targets": {
      "rmsDbfs": -13.795,
      "crestDb": 12.06,
      "lowEnergyShare": 0.4817,
      "highEnergyShare": 0.3149,
      "sideMidRmsRatio": 0.3911
    }
  },
  "punk-hardcore": {
    "recording": "Minor Threat - Straight Edge",
    "audio": "samples/Minor Threat - Straight Edge.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      40.84,
      75.84
    ],
    "targets": {
      "rmsDbfs": -17.362,
      "crestDb": 12.578,
      "lowEnergyShare": 0.1498,
      "highEnergyShare": 0.109,
      "sideMidRmsRatio": 0.0061
    }
  },
  "punk-punk": {
    "recording": "Ramones - Blitzkrieg Bop",
    "audio": "samples/Ramones - Blitzkrieg Bop.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      50.53,
      93.83
    ],
    "targets": {
      "rmsDbfs": -17.932,
      "crestDb": 16.013,
      "lowEnergyShare": 0.4932,
      "highEnergyShare": 0.1895,
      "sideMidRmsRatio": 0.7435
    }
  }
} satisfies ReferenceMixCatalog;
