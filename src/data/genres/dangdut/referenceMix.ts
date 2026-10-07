import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "dangdut-electronic-dangdut": {
    "recording": "Nella Kharisma - Jaran Goyang",
    "audio": "voiced/Nella Kharisma - Jaran Goyang.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 10388599,
    "audioModifiedNs": 1791091791225893960,
    "windowsSeconds": [
      90.88,
      168.77
    ],
    "targets": {
      "rmsDbfs": -16.78,
      "crestDb": 13.057,
      "lowEnergyShare": 0.617,
      "highEnergyShare": 0.05,
      "sideMidRmsRatio": 0.0159
    }
  },
  "dangdut-rock-dangdut": {
    "recording": "Rhoma Irama - Badai",
    "audio": "voiced/Rhoma Irama - Badai.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 9911029,
    "audioModifiedNs": 1791152237184334000,
    "windowsSeconds": [
      86.69,
      161.0
    ],
    "targets": {
      "rmsDbfs": -16.298,
      "crestDb": 14.451,
      "lowEnergyShare": 0.4392,
      "highEnergyShare": 0.1877,
      "sideMidRmsRatio": 0.5644
    }
  },
  "dangdut-classic": {
    "recording": "Rhoma Irama - Begadang",
    "audio": "voiced/Rhoma Irama - Begadang.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 7506772,
    "audioModifiedNs": 1791103065900149197,
    "windowsSeconds": [
      65.66,
      121.94
    ],
    "targets": {
      "rmsDbfs": -16.341,
      "crestDb": 13.384,
      "lowEnergyShare": 0.7811,
      "highEnergyShare": 0.0251,
      "sideMidRmsRatio": 0.1845
    }
  },
  "dangdut-koplo": {
    "recording": "Via Vallen - Sayang",
    "audio": "voiced/Via Vallen - Sayang.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 12469933,
    "audioModifiedNs": 1791093680634823494,
    "windowsSeconds": [
      109.08,
      202.59
    ],
    "targets": {
      "rmsDbfs": -16.108,
      "crestDb": 15.139,
      "lowEnergyShare": 0.4072,
      "highEnergyShare": 0.0851,
      "sideMidRmsRatio": 0.3774
    }
  }
} satisfies ReferenceMixCatalog;
