import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "arabic-takht": {
    "recording": "Mohamed Abdel Wahab - Ya Msafer Wahdak",
    "audio": "samples/Mohamed Abdel Wahab - Ya Msafer Wahdak.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      155.0,
      287.85
    ],
    "targets": {
      "rmsDbfs": -30.168,
      "crestDb": 16.361,
      "lowEnergyShare": 0.3834,
      "highEnergyShare": 0.1172,
      "sideMidRmsRatio": 0.0625
    }
  },
  "arabic-instrumental-maqam": {
    "recording": "Munir Bashir - Taqsim Maqam Rast",
    "audio": "samples/Munir Bashir - Taqsim Maqam Rast.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      137.22,
      254.84
    ],
    "targets": {
      "rmsDbfs": -31.801,
      "crestDb": 17.543,
      "lowEnergyShare": 0.0255,
      "highEnergyShare": 0.0772,
      "sideMidRmsRatio": 0.3482
    }
  },
  "arabic-muwashshah": {
    "recording": "Sabah Fakhri - Lamma Bada Yatathanna",
    "audio": "samples/Sabah Fakhri - Lamma Bada Yatathanna.mp3",
    "source": "original-with-vocals",
    "windowsSeconds": [
      83.16,
      154.45
    ],
    "targets": {
      "rmsDbfs": -19.588,
      "crestDb": 16.856,
      "lowEnergyShare": 0.1287,
      "highEnergyShare": 0.2223,
      "sideMidRmsRatio": 0.0
    }
  },
  "arabic-tarab": {
    "recording": "Umm Kulthum - Enta Omri",
    "audio": "samples/Umm Kulthum - Enta Omri.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      194.31,
      360.86
    ],
    "targets": {
      "rmsDbfs": -28.885,
      "crestDb": 18.319,
      "lowEnergyShare": 0.1593,
      "highEnergyShare": 0.2115,
      "sideMidRmsRatio": 0.0064
    }
  }
} satisfies ReferenceMixCatalog;
