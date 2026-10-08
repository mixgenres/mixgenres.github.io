import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "gnawa-gnawa-rock": {
    "recording": "Hoba Hoba Spirit - Bienvenue à Casa",
    "audio": "samples/Hoba Hoba Spirit - Bienvenue à Casa.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      142.18,
      264.05
    ],
    "targets": {
      "rmsDbfs": -15.634,
      "crestDb": 14.303,
      "lowEnergyShare": 0.6038,
      "highEnergyShare": 0.0831,
      "sideMidRmsRatio": 0.3134
    }
  },
  "gnawa-gnawa-jazz": {
    "recording": "Majid Bekkas - Aicha",
    "audio": "samples/Majid Bekkas - Aicha.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      262.35,
      487.23
    ],
    "targets": {
      "rmsDbfs": -21.306,
      "crestDb": 15.016,
      "lowEnergyShare": 0.6511,
      "highEnergyShare": 0.0252,
      "sideMidRmsRatio": 0.2686
    }
  },
  "gnawa-lila-trance": {
    "recording": "Maâlem Hamid El Kasri - Sandiya",
    "audio": "samples/Maâlem Hamid El Kasri - Sandiya.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      97.73,
      181.49
    ],
    "targets": {
      "rmsDbfs": -19.396,
      "crestDb": 17.869,
      "lowEnergyShare": 0.5417,
      "highEnergyShare": 0.2829,
      "sideMidRmsRatio": 0.1859
    }
  },
  "gnawa-traditional": {
    "recording": "Maâlem Mahmoud Guinia - Bala Matinba",
    "audio": "samples/Maâlem Mahmoud Guinia - Bala Matinba.mp3",
    "source": "separated-accompaniment",
    "windowsSeconds": [
      230.12,
      427.37
    ],
    "targets": {
      "rmsDbfs": -16.948,
      "crestDb": 13.122,
      "lowEnergyShare": 0.9438,
      "highEnergyShare": 0.0209,
      "sideMidRmsRatio": 0.1071
    }
  }
} satisfies ReferenceMixCatalog;
