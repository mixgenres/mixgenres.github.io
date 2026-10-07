import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "steppe-khoomei": {
    "recording": "Huun-Huur-Tu - Orphan's Lament",
    "audio": "voiced/Huun-Huur-Tu - Orphan's Lament.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 20385035,
    "audioModifiedNs": 1791157239806807358,
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
    "audio": "voiced/Huun-Huur-Tu - Sygyt.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 6452429,
    "audioModifiedNs": 1791157328513617036,
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
    "audio": "voiced/Kaigal-ool Khovalyg - Khovu Kargyraa.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 10204626,
    "audioModifiedNs": 1791095053207277533,
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
    "audio": "voiced/Mongolian State Morin Khuur Ensemble - Jonon Khar.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 10611169,
    "audioModifiedNs": 1791098467536293548,
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
    "audio": "voiced/The Hu - Yuve Yuve Yu.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 14089527,
    "audioModifiedNs": 1791153752185970084,
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
