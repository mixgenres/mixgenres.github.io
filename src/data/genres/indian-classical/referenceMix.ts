import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "indian-classical-thumri": {
    "recording": "Girija Devi - Babul Mora Naihar Chhooto Jaye",
    "audio": "voiced/Girija Devi - Babul Mora Naihar Chhooto Jaye.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 28879058,
    "audioModifiedNs": 1791140430487035159,
    "windowsSeconds": [
      252.66,
      469.23
    ],
    "targets": {
      "rmsDbfs": -28.784,
      "crestDb": 21.613,
      "lowEnergyShare": 0.148,
      "highEnergyShare": 0.1888,
      "sideMidRmsRatio": 0.1332
    }
  },
  "indian-classical-tillana": {
    "recording": "Lalgudi Jayaraman - Mohanakalyani Tillana",
    "audio": "voiced/Lalgudi Jayaraman - Mohanakalyani Tillana.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 14490859,
    "audioModifiedNs": 1791082784000390329,
    "windowsSeconds": [
      126.77,
      235.43
    ],
    "targets": {
      "rmsDbfs": -20.084,
      "crestDb": 17.248,
      "lowEnergyShare": 0.0207,
      "highEnergyShare": 0.1595,
      "sideMidRmsRatio": 0.4716
    }
  },
  "indian-classical-carnatic-kriti": {
    "recording": "M.S. Subbulakshmi - Vatapi Ganapatim",
    "audio": "samples/M.S. Subbulakshmi - Vatapi Ganapatim.mp3",
    "source": "original-with-vocals",
    "audioBytes": 11934393,
    "audioModifiedNs": 1791077317322057999,
    "windowsSeconds": [
      173.84,
      322.85
    ],
    "targets": {
      "rmsDbfs": -19.671,
      "crestDb": 17.532,
      "lowEnergyShare": 0.2616,
      "highEnergyShare": 0.1548,
      "sideMidRmsRatio": 0.0712
    }
  },
  "indian-classical-instrumental-gat": {
    "recording": "Ravi Shankar - Raga Jog",
    "audio": "samples/Ravi Shankar - Raga Jog.mp3",
    "source": "original-with-vocals",
    "audioBytes": 41070870,
    "audioModifiedNs": 1791139863251146910,
    "windowsSeconds": [
      595.51,
      1105.95
    ],
    "targets": {
      "rmsDbfs": -23.706,
      "crestDb": 16.998,
      "lowEnergyShare": 0.1288,
      "highEnergyShare": 0.1853,
      "sideMidRmsRatio": 0.1687
    }
  }
} satisfies ReferenceMixCatalog;
