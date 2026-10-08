import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "persian-radif": {
    "recording": "Dariush Tala'i - Dastgah-e Shur: Daramad",
    "audio": "samples/Dariush Tala'i - Dastgah-e Shur: Daramad.mp3",
    "source": "original-with-vocals",
    "windowsSeconds": [
      129.67,
      240.82
    ],
    "targets": {
      "rmsDbfs": -14.552,
      "crestDb": 14.536,
      "lowEnergyShare": 0.263,
      "highEnergyShare": 0.0515,
      "sideMidRmsRatio": 0.4613
    }
  },
  "persian-modern-persian": {
    "recording": "Kayhan Kalhor - Silent City",
    "audio": "samples/Kayhan Kalhor - Silent City.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      195.86,
      363.74
    ],
    "targets": {
      "rmsDbfs": -25.087,
      "crestDb": 15.675,
      "lowEnergyShare": 0.4518,
      "highEnergyShare": 0.0432,
      "sideMidRmsRatio": 0.7296
    }
  },
  "persian-avaz": {
    "recording": "Mohammad Reza Shajarian - Avaz-e Abu Ata",
    "audio": "samples/Mohammad Reza Shajarian - Avaz-e Abu Ata.mp3",
    "source": "original-with-vocals",
    "windowsSeconds": [
      264.61,
      491.43
    ],
    "targets": {
      "rmsDbfs": -14.002,
      "crestDb": 11.265,
      "lowEnergyShare": 0.0001,
      "highEnergyShare": 0.1292,
      "sideMidRmsRatio": 0.9973
    }
  },
  "persian-dastgah": {
    "recording": "Mohammad Reza Shajarian - Morgh-e Sahar",
    "audio": "samples/Mohammad Reza Shajarian - Morgh-e Sahar.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      110.18,
      204.62
    ],
    "targets": {
      "rmsDbfs": -32.353,
      "crestDb": 21.213,
      "lowEnergyShare": 0.0382,
      "highEnergyShare": 0.0387,
      "sideMidRmsRatio": 0.1784
    }
  }
} satisfies ReferenceMixCatalog;
