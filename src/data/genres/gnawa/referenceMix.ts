import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "gnawa-gnawa-rock": {
    "recording": "Hoba Hoba Spirit - Bienvenue à Casa",
    "audio": "voiced/Hoba Hoba Spirit - Bienvenue à Casa.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 16252587,
    "audioModifiedNs": 1791141933596674370,
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
    "audio": "voiced/Majid Bekkas - Aicha.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 29985659,
    "audioModifiedNs": 1791139131090546561,
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
    "audio": "voiced/Maâlem Hamid El Kasri - Sandiya.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 11171212,
    "audioModifiedNs": 1791154035943185449,
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
    "audio": "voiced/Maâlem Mahmoud Guinia - Bala Matinba.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 26302356,
    "audioModifiedNs": 1791088135972014252,
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
