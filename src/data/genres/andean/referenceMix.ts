import type { ReferenceMixCatalog } from '../_shared/referenceMix';

/** Local recording measurements; original mixes may still contain vocals. */
export const REFERENCE_MIX = {
  "andean-andean-fusion": {
    "recording": "Chancha Vía Circuito - Ilaló",
    "audio": "voiced/Chancha Vía Circuito - Ilaló.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 11678015,
    "audioModifiedNs": 1791151407475050371,
    "windowsSeconds": [
      102.16,
      189.72
    ],
    "targets": {
      "rmsDbfs": -20.195,
      "crestDb": 10.323,
      "lowEnergyShare": 0.9438,
      "highEnergyShare": 0.0073,
      "sideMidRmsRatio": 0.0018
    }
  },
  "andean-nueva-cancion": {
    "recording": "Inti-Illimani - El Pueblo Unido",
    "audio": "voiced/Inti-Illimani - El Pueblo Unido.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 10308205,
    "audioModifiedNs": 1791084352336591135,
    "windowsSeconds": [
      90.17,
      167.46
    ],
    "targets": {
      "rmsDbfs": -15.403,
      "crestDb": 13.927,
      "lowEnergyShare": 0.7298,
      "highEnergyShare": 0.0108,
      "sideMidRmsRatio": 0.1973
    }
  },
  "andean-carnavalito": {
    "recording": "Los Incas - El Humahuaqueño",
    "audio": "samples/Los Incas - El Humahuaqueño.mp3",
    "source": "original-with-vocals",
    "audioBytes": 7583234,
    "audioModifiedNs": 1791076960525289785,
    "windowsSeconds": [
      108.15,
      200.85
    ],
    "targets": {
      "rmsDbfs": -13.004,
      "crestDb": 13.496,
      "lowEnergyShare": 0.1969,
      "highEnergyShare": 0.1713,
      "sideMidRmsRatio": 0.4699
    }
  },
  "andean-saya": {
    "recording": "Los Kjarkas - Llorando Se Fue",
    "audio": "voiced/Los Kjarkas - Llorando Se Fue.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 12547358,
    "audioModifiedNs": 1791088270161160776,
    "windowsSeconds": [
      109.76,
      203.85
    ],
    "targets": {
      "rmsDbfs": -18.868,
      "crestDb": 16.866,
      "lowEnergyShare": 0.7838,
      "highEnergyShare": 0.0219,
      "sideMidRmsRatio": 0.0671
    }
  },
  "andean-tinku": {
    "recording": "Los Kjarkas - Tuna Papita",
    "audio": "voiced/Los Kjarkas - Tuna Papita.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 9477441,
    "audioModifiedNs": 1791161780213871835,
    "windowsSeconds": [
      82.9,
      153.96
    ],
    "targets": {
      "rmsDbfs": -19.075,
      "crestDb": 17.722,
      "lowEnergyShare": 0.7731,
      "highEnergyShare": 0.0413,
      "sideMidRmsRatio": 0.5583
    }
  },
  "andean-huayno": {
    "recording": "Pastorita Huaracina - Mujer Andina",
    "audio": "voiced/Pastorita Huaracina - Mujer Andina.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 6861981,
    "audioModifiedNs": 1791087375471578928,
    "windowsSeconds": [
      60.01,
      111.45
    ],
    "targets": {
      "rmsDbfs": -15.707,
      "crestDb": 12.603,
      "lowEnergyShare": 0.7155,
      "highEnergyShare": 0.0421,
      "sideMidRmsRatio": 0.1262
    }
  },
  "andean-sanjuanito": {
    "recording": "Ñanda Mañachi - Pobre Corazón",
    "audio": "voiced/Ñanda Mañachi - Pobre Corazón.mp3",
    "source": "separated-accompaniment",
    "audioBytes": 9220469,
    "audioModifiedNs": 1791155717064283566,
    "windowsSeconds": [
      80.66,
      149.79
    ],
    "targets": {
      "rmsDbfs": -14.109,
      "crestDb": 12.854,
      "lowEnergyShare": 0.8196,
      "highEnergyShare": 0.0947,
      "sideMidRmsRatio": 0.0208
    }
  }
} satisfies ReferenceMixCatalog;
