import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "qawwali-contemporary-fusion": {
    "recording": "Nusrat Fateh Ali Khan & Michael Brook - Night Song",
    "audio": "samples/Nusrat Fateh Ali Khan & Michael Brook - Night Song.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      257.9,
      478.95
    ],
    "targets": {
      "rmsDbfs": -34.812,
      "crestDb": 18.245,
      "lowEnergyShare": 0.7213,
      "highEnergyShare": 0.006,
      "sideMidRmsRatio": 0.4011
    }
  },
  "qawwali-traditional": {
    "recording": "Nusrat Fateh Ali Khan - Allah Hoo",
    "audio": "samples/Nusrat Fateh Ali Khan - Allah Hoo.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      309.09,
      574.03
    ],
    "targets": {
      "rmsDbfs": -17.557,
      "crestDb": 16.229,
      "lowEnergyShare": 0.869,
      "highEnergyShare": 0.05,
      "sideMidRmsRatio": 0.0412
    }
  },
  "qawwali-hamd-naat": {
    "recording": "Nusrat Fateh Ali Khan - Wohi Khuda Hai",
    "audio": "samples/Nusrat Fateh Ali Khan - Wohi Khuda Hai.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      126.95,
      235.76
    ],
    "targets": {
      "rmsDbfs": -20.428,
      "crestDb": 17.043,
      "lowEnergyShare": 0.7086,
      "highEnergyShare": 0.1194,
      "sideMidRmsRatio": 0.4819
    }
  },
  "qawwali-ghazal-qawwali": {
    "recording": "Sabri Brothers - Bhar Do Jholi Meri",
    "audio": "samples/Sabri Brothers - Bhar Do Jholi Meri.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      421.38,
      782.57
    ],
    "targets": {
      "rmsDbfs": -28.723,
      "crestDb": 18.784,
      "lowEnergyShare": 0.6703,
      "highEnergyShare": 0.0428,
      "sideMidRmsRatio": 0.0806
    }
  }
} satisfies ReferenceMixCatalog;
