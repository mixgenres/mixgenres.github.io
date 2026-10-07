import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "chinese-cantonese-ensemble": {
    "recording": "Cantonese music ensemble - Bu Bu Gao",
    "audio": "voiced/Cantonese music ensemble - Bu Bu Gao.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 7840051,
    "audioModifiedNs": 1791091359360347057,
    "windowsSeconds": [
      68.58,
      127.35
    ],
    "targets": {
      "rmsDbfs": -18.358,
      "crestDb": 12.703,
      "lowEnergyShare": 0.0015,
      "highEnergyShare": 0.0718,
      "sideMidRmsRatio": 0.3042
    }
  },
  "chinese-chaozhou": {
    "recording": "Chaozhou String Ensemble - Han Ya Xi Shui",
    "audio": "voiced/Chaozhou String Ensemble - Han Ya Xi Shui.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 17816768,
    "audioModifiedNs": 1791085007416779978,
    "windowsSeconds": [
      155.88,
      289.48
    ],
    "targets": {
      "rmsDbfs": -32.753,
      "crestDb": 19.776,
      "lowEnergyShare": 0.2103,
      "highEnergyShare": 0.0491,
      "sideMidRmsRatio": 0.0021
    }
  },
  "chinese-guqin": {
    "recording": "Guan Pinghu - Liu Shui",
    "audio": "samples/Guan Pinghu - Liu Shui.mp3",
    "source": "original-with-vocals",
    "audioBytes": 11394384,
    "audioModifiedNs": 1791077061342470843,
    "windowsSeconds": [
      164.76,
      305.98
    ],
    "targets": {
      "rmsDbfs": -21.34,
      "crestDb": 15.33,
      "lowEnergyShare": 0.1433,
      "highEnergyShare": 0.001,
      "sideMidRmsRatio": 0.22
    }
  },
  "chinese-jingju": {
    "recording": "Mei Lanfang - The Drunken Concubine",
    "audio": "voiced/Mei Lanfang - The Drunken Concubine.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 6335385,
    "audioModifiedNs": 1791081377428650507,
    "windowsSeconds": [
      55.41,
      102.91
    ],
    "targets": {
      "rmsDbfs": -23.307,
      "crestDb": 17.492,
      "lowEnergyShare": 0.0692,
      "highEnergyShare": 0.5799,
      "sideMidRmsRatio": 0.7027
    }
  },
  "chinese-pipa": {
    "recording": "Traditional - Ambush from Ten Sides",
    "audio": "samples/Traditional - Ambush from Ten Sides.mp3",
    "source": "original-with-vocals",
    "audioBytes": 10695759,
    "audioModifiedNs": 1791077062349234716,
    "windowsSeconds": [
      155.75,
      289.24
    ],
    "targets": {
      "rmsDbfs": -15.906,
      "crestDb": 14.775,
      "lowEnergyShare": 0.0001,
      "highEnergyShare": 0.1373,
      "sideMidRmsRatio": 0.274
    }
  },
  "chinese-guzheng": {
    "recording": "Traditional - Fisherman's Song at Eventide",
    "audio": "samples/Traditional - Fisherman's Song at Eventide.mp3",
    "source": "original-with-vocals",
    "audioBytes": 6104597,
    "audioModifiedNs": 1791077057165632603,
    "windowsSeconds": [
      88.25,
      163.89
    ],
    "targets": {
      "rmsDbfs": -32.784,
      "crestDb": 18.517,
      "lowEnergyShare": 0.0026,
      "highEnergyShare": 0.0928,
      "sideMidRmsRatio": 0.0934
    }
  }
} satisfies ReferenceMixCatalog;
