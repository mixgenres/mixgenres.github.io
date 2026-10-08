import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "dangdut-electronic-dangdut": {
    "recording": "Nella Kharisma - Jaran Goyang",
    "audio": "samples/Nella Kharisma - Jaran Goyang.mp3",
    "source": "separated-accompaniment",
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
    "audio": "samples/Rhoma Irama - Badai.mp3",
    "source": "separated-accompaniment",
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
    "audio": "samples/Rhoma Irama - Begadang.mp3",
    "source": "separated-accompaniment",
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
    "audio": "samples/Via Vallen - Sayang.mp3",
    "source": "separated-accompaniment",
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
