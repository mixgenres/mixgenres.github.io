import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "gospel-gospel-soul": {
    "recording": "Aretha Franklin - Amazing Grace",
    "audio": "samples/Aretha Franklin - Amazing Grace.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      227.1,
      421.76
    ],
    "targets": {
      "rmsDbfs": -28.946,
      "crestDb": 19.149,
      "lowEnergyShare": 0.345,
      "highEnergyShare": 0.0302,
      "sideMidRmsRatio": 0.5708
    }
  },
  "gospel-choir-gospel": {
    "recording": "Edwin Hawkins Singers - Oh Happy Day",
    "audio": "samples/Edwin Hawkins Singers - Oh Happy Day.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      107.49,
      199.62
    ],
    "targets": {
      "rmsDbfs": -20.708,
      "crestDb": 15.725,
      "lowEnergyShare": 0.5748,
      "highEnergyShare": 0.0376,
      "sideMidRmsRatio": 0.3539
    }
  },
  "gospel-contemporary": {
    "recording": "Kirk Franklin - Stomp",
    "audio": "samples/Kirk Franklin - Stomp.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      107.82,
      200.24
    ],
    "targets": {
      "rmsDbfs": -16.683,
      "crestDb": 15.636,
      "lowEnergyShare": 0.7495,
      "highEnergyShare": 0.0812,
      "sideMidRmsRatio": 0.1654
    }
  },
  "gospel-traditional": {
    "recording": "Mahalia Jackson - Move On Up a Little Higher",
    "audio": "samples/Mahalia Jackson - Move On Up a Little Higher.mp3",
    "source": "original-with-vocals",
    "windowsSeconds": [
      112.9,
      209.68
    ],
    "targets": {
      "rmsDbfs": -27.596,
      "crestDb": 14.661,
      "lowEnergyShare": 0.1936,
      "highEnergyShare": 0.0541,
      "sideMidRmsRatio": 0.0
    }
  },
  "gospel-quartet": {
    "recording": "The Soul Stirrers - Touch the Hem of His Garment",
    "audio": "samples/The Soul Stirrers - Touch the Hem of His Garment.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      42.59,
      79.1
    ],
    "targets": {
      "rmsDbfs": -27.877,
      "crestDb": 17.52,
      "lowEnergyShare": 0.4966,
      "highEnergyShare": 0.0786,
      "sideMidRmsRatio": 0.0921
    }
  }
} satisfies ReferenceMixCatalog;
