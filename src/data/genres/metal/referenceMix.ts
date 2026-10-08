import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "metal-heavy-metal": {
    "recording": "Black Sabbath - Iron Man",
    "audio": "samples/Black Sabbath - Iron Man.mp3",
    "source": "original-with-vocals",
    "windowsSeconds": [
      124.17,
      230.6
    ],
    "targets": {
      "rmsDbfs": -17.382,
      "crestDb": 14.995,
      "lowEnergyShare": 0.4011,
      "highEnergyShare": 0.2416,
      "sideMidRmsRatio": 0.6858
    }
  },
  "metal-doom": {
    "recording": "Candlemass - Solitude",
    "audio": "samples/Candlemass - Solitude.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      118.43,
      219.94
    ],
    "targets": {
      "rmsDbfs": -14.444,
      "crestDb": 12.833,
      "lowEnergyShare": 0.4495,
      "highEnergyShare": 0.2813,
      "sideMidRmsRatio": 0.4369
    }
  },
  "metal-death": {
    "recording": "Death - Pull the Plug",
    "audio": "samples/Death - Pull the Plug.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      93.39,
      173.43
    ],
    "targets": {
      "rmsDbfs": -12.259,
      "crestDb": 11.101,
      "lowEnergyShare": 0.3789,
      "highEnergyShare": 0.5146,
      "sideMidRmsRatio": 0.7487
    }
  },
  "metal-black": {
    "recording": "Mayhem - Freezing Moon",
    "audio": "samples/Mayhem - Freezing Moon.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      134.43,
      249.65
    ],
    "targets": {
      "rmsDbfs": -16.854,
      "crestDb": 16.186,
      "lowEnergyShare": 0.2828,
      "highEnergyShare": 0.3224,
      "sideMidRmsRatio": 0.5028
    }
  },
  "metal-thrash": {
    "recording": "Metallica - Master of Puppets",
    "audio": "samples/Metallica - Master of Puppets.mp3",
    "source": "original-with-vocals",
    "windowsSeconds": [
      180.39,
      335.01
    ],
    "targets": {
      "rmsDbfs": -14.265,
      "crestDb": 13.954,
      "lowEnergyShare": 0.6346,
      "highEnergyShare": 0.2216,
      "sideMidRmsRatio": 0.5312
    }
  },
  "metal-industrial-metal": {
    "recording": "Ministry - Just One Fix",
    "audio": "samples/Ministry - Just One Fix.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      99.05,
      183.95
    ],
    "targets": {
      "rmsDbfs": -18.844,
      "crestDb": 14.243,
      "lowEnergyShare": 0.3951,
      "highEnergyShare": 0.4611,
      "sideMidRmsRatio": 0.5479
    }
  },
  "metal-progressive-metal": {
    "recording": "Tool - Schism",
    "audio": "samples/Tool - Schism.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      156.25,
      290.17
    ],
    "targets": {
      "rmsDbfs": -21.532,
      "crestDb": 14.568,
      "lowEnergyShare": 0.446,
      "highEnergyShare": 0.2472,
      "sideMidRmsRatio": 0.4963
    }
  }
} satisfies ReferenceMixCatalog;
