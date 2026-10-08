import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "korean-pansori": {
    "recording": "Ahn Sook-sun - Chunhyangga",
    "audio": "samples/Ahn Sook-sun - Chunhyangga.mp3",
    "source": "original-with-vocals",
    "windowsSeconds": [
      116.8,
      216.92
    ],
    "targets": {
      "rmsDbfs": -34.312,
      "crestDb": 18.887,
      "lowEnergyShare": 0.2494,
      "highEnergyShare": 0.1245,
      "sideMidRmsRatio": 0.0003
    }
  },
  "korean-sanjo": {
    "recording": "Kim Chuk-p'a - Gayageum Sanjo",
    "audio": "samples/Kim Chuk-p'a - Gayageum Sanjo.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      303.57,
      563.77
    ],
    "targets": {
      "rmsDbfs": -27.885,
      "crestDb": 22.052,
      "lowEnergyShare": 0.3225,
      "highEnergyShare": 0.0284,
      "sideMidRmsRatio": 0.3242
    }
  },
  "korean-jeongak": {
    "recording": "National Gugak Center - Sujecheon",
    "audio": "samples/National Gugak Center - Sujecheon.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      378.78,
      703.46
    ],
    "targets": {
      "rmsDbfs": -20.259,
      "crestDb": 18.277,
      "lowEnergyShare": 0.3398,
      "highEnergyShare": 0.2222,
      "sideMidRmsRatio": 0.5805
    }
  },
  "korean-samulnori": {
    "recording": "SamulNori - Samdo Nongak Garak",
    "audio": "samples/SamulNori - Samdo Nongak Garak.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      413.1,
      767.18
    ],
    "targets": {
      "rmsDbfs": -17.102,
      "crestDb": 15.606,
      "lowEnergyShare": 0.4962,
      "highEnergyShare": 0.0447,
      "sideMidRmsRatio": 0.3304
    }
  },
  "korean-minyo": {
    "recording": "Traditional - Arirang",
    "audio": "samples/Traditional - Arirang.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      52.31,
      97.15
    ],
    "targets": {
      "rmsDbfs": -22.316,
      "crestDb": 16.176,
      "lowEnergyShare": 0.2664,
      "highEnergyShare": 0.1484,
      "sideMidRmsRatio": 0.3693
    }
  }
} satisfies ReferenceMixCatalog;
