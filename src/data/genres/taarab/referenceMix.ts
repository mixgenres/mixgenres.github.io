import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "taarab-zanzibar": {
    "recording": "Bi Kidude - Muhogo wa Jang'ombe",
    "audio": "voiced/Bi Kidude - Muhogo wa Jang'ombe.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 11420927,
    "audioModifiedNs": 1791108016575204727,
    "windowsSeconds": [
      99.91,
      185.54
    ],
    "targets": {
      "rmsDbfs": -23.326,
      "crestDb": 16.773,
      "lowEnergyShare": 0.1601,
      "highEnergyShare": 0.0429,
      "sideMidRmsRatio": 0.6629
    }
  },
  "taarab-swahili-orchestra": {
    "recording": "Black Star Musical Club - Chozi Lanitoka",
    "audio": "voiced/Black Star Musical Club - Chozi Lanitoka.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 7817123,
    "audioModifiedNs": 1791095137903853237,
    "windowsSeconds": [
      68.37,
      126.98
    ],
    "targets": {
      "rmsDbfs": -18.873,
      "crestDb": 15.277,
      "lowEnergyShare": 0.5222,
      "highEnergyShare": 0.0611,
      "sideMidRmsRatio": 0.0021
    }
  },
  "taarab-classical-orchestra": {
    "recording": "Culture Musical Club of Zanzibar - Sibadili",
    "audio": "voiced/Culture Musical Club of Zanzibar - Sibadili.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 11428289,
    "audioModifiedNs": 1791145069422713867,
    "windowsSeconds": [
      99.97,
      185.66
    ],
    "targets": {
      "rmsDbfs": -14.636,
      "crestDb": 13.121,
      "lowEnergyShare": 0.2652,
      "highEnergyShare": 0.0251,
      "sideMidRmsRatio": 0.3798
    }
  },
  "taarab-kidumbak": {
    "recording": "Makame Faki - Kula Muhogo",
    "audio": "voiced/Makame Faki - Kula Muhogo.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 6829650,
    "audioModifiedNs": 1791095818061266810,
    "windowsSeconds": [
      59.73,
      110.93
    ],
    "targets": {
      "rmsDbfs": -16.416,
      "crestDb": 14.523,
      "lowEnergyShare": 0.5346,
      "highEnergyShare": 0.0807,
      "sideMidRmsRatio": 0.0187
    }
  },
  "taarab-modern-taarab": {
    "recording": "Mzee Yusuph - Mpenzi Chocolate",
    "audio": "voiced/Mzee Yusuph - Mpenzi Chocolate.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 36072192,
    "audioModifiedNs": 1791088872663817170,
    "windowsSeconds": [
      315.61,
      586.14
    ],
    "targets": {
      "rmsDbfs": -17.838,
      "crestDb": 12.536,
      "lowEnergyShare": 0.6921,
      "highEnergyShare": 0.0315,
      "sideMidRmsRatio": 0.0112
    }
  }
} satisfies ReferenceMixCatalog;
