import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "steppe-khoomei": {
    "recording": "Huun-Huur-Tu - Orphan's Lament",
    "audio": "samples/Huun-Huur-Tu - Orphan's Lament.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      178.34,
      331.21
    ],
    "targets": {
      "rmsDbfs": -23.194,
      "crestDb": 13.814,
      "lowEnergyShare": 0.0027,
      "highEnergyShare": 0.0046,
      "sideMidRmsRatio": 0.3063
    }
  },
  "steppe-sygyt": {
    "recording": "Huun-Huur-Tu - Sygyt",
    "audio": "samples/Huun-Huur-Tu - Sygyt.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      56.43,
      104.8
    ],
    "targets": {
      "rmsDbfs": -62.331,
      "crestDb": 20.775,
      "lowEnergyShare": 0.1459,
      "highEnergyShare": 0.7148,
      "sideMidRmsRatio": 0.5051
    }
  },
  "steppe-kargyraa": {
    "recording": "Kaigal-ool Khovalyg - Khovu Kargyraa",
    "audio": "samples/Kaigal-ool Khovalyg - Khovu Kargyraa.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      89.26,
      165.78
    ],
    "targets": {
      "rmsDbfs": -47.481,
      "crestDb": 15.09,
      "lowEnergyShare": 0.5607,
      "highEnergyShare": 0.003,
      "sideMidRmsRatio": 0.5242
    }
  },
  "steppe-morin-khuur": {
    "recording": "Mongolian State Morin Khuur Ensemble - Jonon Khar",
    "audio": "samples/Mongolian State Morin Khuur Ensemble - Jonon Khar.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      92.83,
      172.39
    ],
    "targets": {
      "rmsDbfs": -17.841,
      "crestDb": 14.91,
      "lowEnergyShare": 0.0616,
      "highEnergyShare": 0.05,
      "sideMidRmsRatio": 0.5933
    }
  },
  "steppe-folk-rock-fusion": {
    "recording": "The Hu - Yuve Yuve Yu",
    "audio": "samples/The Hu - Yuve Yuve Yu.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      123.26,
      228.91
    ],
    "targets": {
      "rmsDbfs": -12.147,
      "crestDb": 11.003,
      "lowEnergyShare": 0.7356,
      "highEnergyShare": 0.0298,
      "sideMidRmsRatio": 0.4425
    }
  }
} satisfies ReferenceMixCatalog;
