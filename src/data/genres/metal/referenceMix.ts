import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "metal-heavy-metal": {
    "recording": "Black Sabbath - Iron Man",
    "audio": "samples/Black Sabbath - Iron Man.mp3",
    "source": "original-with-vocals",
    "audioBytes": 8710677,
    "audioModifiedNs": 1791139659534190206,
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
    "audio": "voiced/Candlemass - Solitude.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 13537821,
    "audioModifiedNs": 1791086351947462101,
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
    "audio": "voiced/Death - Pull the Plug.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 10675954,
    "audioModifiedNs": 1791088482571377688,
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
    "audio": "voiced/Mayhem - Freezing Moon.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 15366491,
    "audioModifiedNs": 1791089504348540641,
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
    "audioBytes": 12610359,
    "audioModifiedNs": 1791139671185570472,
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
    "audio": "voiced/Ministry - Just One Fix.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 11322732,
    "audioModifiedNs": 1791152505601811286,
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
    "audio": "voiced/Tool - Schism.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 17859511,
    "audioModifiedNs": 1791149435306908966,
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
