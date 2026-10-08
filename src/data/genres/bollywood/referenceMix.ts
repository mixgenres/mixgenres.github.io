import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "bollywood-folk-cinematic": {
    "recording": "A.R. Rahman - Chaiyya Chaiyya",
    "audio": "samples/A.R. Rahman - Chaiyya Chaiyya.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      142.26,
      264.2
    ],
    "targets": {
      "rmsDbfs": -17.486,
      "crestDb": 15.665,
      "lowEnergyShare": 0.8479,
      "highEnergyShare": 0.0318,
      "sideMidRmsRatio": 0.3909
    }
  },
  "bollywood-modern": {
    "recording": "A.R. Rahman - Jai Ho",
    "audio": "samples/A.R. Rahman - Jai Ho.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      62.92,
      116.85
    ],
    "targets": {
      "rmsDbfs": -23.1,
      "crestDb": 14.514,
      "lowEnergyShare": 0.8711,
      "highEnergyShare": 0.0309,
      "sideMidRmsRatio": 0.0025
    }
  },
  "bollywood-romantic": {
    "recording": "Arijit Singh - Tum Hi Ho",
    "audio": "samples/Arijit Singh - Tum Hi Ho.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      93.48,
      173.6
    ],
    "targets": {
      "rmsDbfs": -19.5,
      "crestDb": 18.464,
      "lowEnergyShare": 0.6979,
      "highEnergyShare": 0.0261,
      "sideMidRmsRatio": 0.4436
    }
  },
  "bollywood-disco-bollywood": {
    "recording": "Bappi Lahiri - I Am a Disco Dancer",
    "audio": "samples/Bappi Lahiri - I Am a Disco Dancer.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      157.49,
      292.49
    ],
    "targets": {
      "rmsDbfs": -25.622,
      "crestDb": 14.492,
      "lowEnergyShare": 0.1582,
      "highEnergyShare": 0.1724,
      "sideMidRmsRatio": 0.0034
    }
  },
  "bollywood-golden-age": {
    "recording": "Lata Mangeshkar - Pyar Kiya To Darna Kya",
    "audio": "samples/Lata Mangeshkar - Pyar Kiya To Darna Kya.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      87.8,
      163.05
    ],
    "targets": {
      "rmsDbfs": -30.724,
      "crestDb": 21.561,
      "lowEnergyShare": 0.2227,
      "highEnergyShare": 0.0536,
      "sideMidRmsRatio": 0.0047
    }
  },
  "bollywood-electronic-club": {
    "recording": "Vishal-Shekhar - Sheila Ki Jawani",
    "audio": "samples/Vishal-Shekhar - Sheila Ki Jawani.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      94.53,
      175.55
    ],
    "targets": {
      "rmsDbfs": -16.847,
      "crestDb": 13.362,
      "lowEnergyShare": 0.8377,
      "highEnergyShare": 0.0264,
      "sideMidRmsRatio": 0.3042
    }
  }
} satisfies ReferenceMixCatalog;
